import { analyzeAudioBuffer, decodeAudioFile, sampleFrameAt } from '../audio/analyze';
import {
  createPlayback,
  downloadBlob,
  exportVideo,
  type PlaybackController,
} from '../export/record';
import { ALL_PACKS } from '../packs/face-pack';
import { strobeNightPack } from '../packs/strobe-night';
import type {
  AssetPack,
  GlobalKnobs,
  ReactionMap,
  Timeline,
} from '../packs/types';
import { DEFAULT_KNOBS } from '../packs/types';
import { Compositor, loadImageFromFile, type CompositorAssets } from '../render/compositor';
import { buildTimeline } from '../timeline/build';

function fmtTime(sec: number): string {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function mountApp(root: HTMLElement) {
  const state = {
    audioFile: null as File | null,
    audioBuffer: null as AudioBuffer | null,
    reaction: null as ReactionMap | null,
    timeline: null as Timeline | null,
    pack: strobeNightPack as AssetPack,
    knobs: { ...DEFAULT_KNOBS } as GlobalKnobs,
    assets: { baseArt: null, faces: [] } as CompositorAssets,
    playback: null as PlaybackController | null,
    busy: false,
  };

  root.innerHTML = `
    <div class="app-shell">
      <header class="brand">
        <h1>PULSEFRAME</h1>
        <p>Drop in a Suno track, your art, and an asset pack. Auto-compose a beat-locked music video — strobes, faces, cuts — then export.</p>
      </header>

      <div class="layout">
        <aside class="panel" id="controls">
          <h2>Inputs</h2>
          <div class="field">
            <label for="audio">Audio (mp3 / wav)</label>
            <input id="audio" type="file" accept="audio/*,.mp3,.wav,.m4a" />
          </div>
          <div class="field">
            <label for="art">Base art</label>
            <input id="art" type="file" accept="image/*" />
          </div>
          <div class="field">
            <label for="faces">Face assets (optional, multi)</label>
            <input id="faces" type="file" accept="image/*" multiple />
            <div class="hint">Used by Face Pack. PNG with transparency works best.</div>
          </div>

          <h2>Pack</h2>
          <div class="pack-grid" id="packs"></div>

          <h2 style="margin-top:1rem">Knobs</h2>
          <div class="field knob-row">
            <div class="top"><span>Intensity</span><span id="intensity-val">75%</span></div>
            <input id="intensity" type="range" min="0" max="100" value="75" />
          </div>
          <div class="field knob-row">
            <div class="top"><span>Cut rate (min gap)</span><span id="cut-val">0.12s</span></div>
            <input id="cutRate" type="range" min="4" max="40" value="12" />
          </div>
          <div class="field knob-row">
            <div class="top"><span>Pack mix</span><span id="mix-val">65%</span></div>
            <input id="packMix" type="range" min="0" max="100" value="65" />
          </div>
          <div class="field">
            <label for="grade">Color grade</label>
            <select id="grade">
              <option value="none">None</option>
              <option value="cold">Cold</option>
              <option value="crushed" selected>Crushed</option>
            </select>
          </div>

          <div class="actions">
            <button class="btn btn-primary" id="generate" type="button">Generate</button>
            <button class="btn btn-secondary" id="rebuild" type="button" disabled>Rebuild timeline</button>
            <button class="btn btn-secondary" id="demo" type="button">Load demo</button>
          </div>
          <div class="status" id="status">Upload audio to begin — or load the demo.</div>
        </aside>

        <section class="stage">
          <div class="panel viewport" id="viewport">
            <canvas id="stage" width="1280" height="720"></canvas>
            <div class="viewport-empty" id="empty">
              <strong>NO SIGNAL</strong>
              <span>Generate a reaction map to preview</span>
            </div>
          </div>

          <div class="panel">
            <div class="transport">
              <div class="actions" style="margin:0">
                <button class="btn btn-secondary" id="play" type="button" disabled>Play</button>
                <button class="btn btn-secondary" id="pause" type="button" disabled>Pause</button>
              </div>
              <input id="seek" type="range" min="0" max="1000" value="0" disabled />
              <div class="time-readout" id="time">0:00 / 0:00</div>
            </div>
            <div class="actions">
              <button class="btn btn-accent" id="export" type="button" disabled>Export WebM</button>
            </div>
            <div class="status" id="export-status"></div>
          </div>

          <div class="panel debug">
            <h2>Reaction map</h2>
            <div class="meta-row" id="meta">
              <span>BPM <b>—</b></span>
              <span>Onsets <b>—</b></span>
              <span>Sections <b>—</b></span>
              <span>Events <b>—</b></span>
            </div>
            <div class="debug-bars">
              <div class="meter"><span>RMS</span><div class="bar"><i id="m-rms"></i></div></div>
              <div class="meter"><span>Low</span><div class="bar"><i id="m-low"></i></div></div>
              <div class="meter"><span>Mid</span><div class="bar"><i id="m-mid"></i></div></div>
              <div class="meter"><span>High</span><div class="bar"><i id="m-high"></i></div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;

  const canvas = root.querySelector<HTMLCanvasElement>('#stage')!;
  const compositor = new Compositor(canvas, 1280, 720);
  const statusEl = root.querySelector('#status')!;
  const exportStatusEl = root.querySelector('#export-status')!;
  const emptyEl = root.querySelector<HTMLElement>('#empty')!;
  const packsEl = root.querySelector('#packs')!;
  const metaEl = root.querySelector('#meta')!;
  const timeEl = root.querySelector('#time')!;
  const seekEl = root.querySelector<HTMLInputElement>('#seek')!;
  const playBtn = root.querySelector<HTMLButtonElement>('#play')!;
  const pauseBtn = root.querySelector<HTMLButtonElement>('#pause')!;
  const exportBtn = root.querySelector<HTMLButtonElement>('#export')!;
  const generateBtn = root.querySelector<HTMLButtonElement>('#generate')!;
  const rebuildBtn = root.querySelector<HTMLButtonElement>('#rebuild')!;
  const demoBtn = root.querySelector<HTMLButtonElement>('#demo')!;

  function setStatus(msg: string, kind: '' | 'ok' | 'err' = '') {
    statusEl.textContent = msg;
    statusEl.className = `status ${kind}`;
  }

  function setExportStatus(msg: string, kind: '' | 'ok' | 'err' = '') {
    exportStatusEl.textContent = msg;
    exportStatusEl.className = `status ${kind}`;
  }

  function renderPacks() {
    packsEl.innerHTML = ALL_PACKS.map(
      (p) => `
      <button type="button" class="pack-option ${p.id === state.pack.id ? 'active' : ''}" data-pack="${p.id}">
        <strong>${p.name}</strong>
        <span>${p.description}</span>
      </button>`,
    ).join('');
  }

  function updateMeters(t: number) {
    if (!state.reaction) return;
    const f = sampleFrameAt(state.reaction, t);
    const set = (id: string, v: number) => {
      const el = root.querySelector<HTMLElement>(id)!;
      el.style.width = `${Math.round(v * 100)}%`;
    };
    set('#m-rms', f.rms);
    set('#m-low', f.low);
    set('#m-mid', f.mid);
    set('#m-high', f.high);
  }

  function updateMeta() {
    if (!state.reaction || !state.timeline) {
      metaEl.innerHTML = `
        <span>BPM <b>—</b></span>
        <span>Onsets <b>—</b></span>
        <span>Sections <b>—</b></span>
        <span>Events <b>—</b></span>`;
      return;
    }
    metaEl.innerHTML = `
      <span>BPM <b>${state.reaction.bpmEstimate}</b></span>
      <span>Onsets <b>${state.reaction.onsets.length}</b></span>
      <span>Sections <b>${state.reaction.sections.length}</b></span>
      <span>Events <b>${state.timeline.events.length}</b></span>`;
  }

  function drawAt(t: number) {
    if (!state.timeline) return;
    compositor.drawFrame(state.timeline, t, state.assets, state.knobs);
    emptyEl.hidden = true;
    timeEl.textContent = `${fmtTime(t)} / ${fmtTime(state.timeline.duration)}`;
    seekEl.value = String(Math.round((t / state.timeline.duration) * 1000));
    updateMeters(t);
  }

  function rebuildTimeline() {
    if (!state.reaction) return;
    state.timeline = buildTimeline(
      state.reaction,
      state.pack,
      state.knobs,
      state.assets.faces.length,
    );
    updateMeta();
    const t = state.playback?.getCurrentTime() ?? 0;
    drawAt(t);
    rebuildBtn.disabled = false;
    playBtn.disabled = false;
    pauseBtn.disabled = false;
    exportBtn.disabled = false;
    seekEl.disabled = false;
  }

  function resetPlayback() {
    state.playback?.destroy();
    state.playback = null;
    if (!state.timeline || !state.audioBuffer) return;
    state.playback = createPlayback(
      compositor,
      state.timeline,
      state.assets,
      () => state.knobs,
      state.audioBuffer,
      (t) => {
        timeEl.textContent = `${fmtTime(t)} / ${fmtTime(state.timeline!.duration)}`;
        seekEl.value = String(Math.round((t / state.timeline!.duration) * 1000));
        updateMeters(t);
      },
    );
  }

  renderPacks();

  packsEl.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-pack]');
    if (!btn) return;
    const id = btn.dataset.pack!;
    const pack = ALL_PACKS.find((p) => p.id === id);
    if (!pack) return;
    state.pack = pack;
    renderPacks();
    if (state.reaction) {
      rebuildTimeline();
      resetPlayback();
      setStatus(`Switched to ${pack.name}. Timeline rebuilt.`, 'ok');
    }
  });

  root.querySelector<HTMLInputElement>('#audio')!.addEventListener('change', async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    state.audioFile = file;
    setStatus(`Loaded audio: ${file.name}`);
  });

  root.querySelector<HTMLInputElement>('#art')!.addEventListener('change', async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    try {
      state.assets.baseArt = await loadImageFromFile(file);
      setStatus(`Base art loaded: ${file.name}`, 'ok');
      if (state.timeline) drawAt(state.playback?.getCurrentTime() ?? 0);
    } catch {
      setStatus('Failed to load base art.', 'err');
    }
  });

  root.querySelector<HTMLInputElement>('#faces')!.addEventListener('change', async (e) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files?.length) return;
    try {
      const imgs = await Promise.all([...files].map(loadImageFromFile));
      state.assets.faces = imgs;
      setStatus(`Loaded ${imgs.length} face asset(s).`, 'ok');
      if (state.reaction) {
        rebuildTimeline();
        resetPlayback();
      }
    } catch {
      setStatus('Failed to load one or more face images.', 'err');
    }
  });

  const intensityEl = root.querySelector<HTMLInputElement>('#intensity')!;
  const cutEl = root.querySelector<HTMLInputElement>('#cutRate')!;
  const mixEl = root.querySelector<HTMLInputElement>('#packMix')!;
  const gradeEl = root.querySelector<HTMLSelectElement>('#grade')!;

  intensityEl.addEventListener('input', () => {
    state.knobs.intensity = Number(intensityEl.value) / 100;
    root.querySelector('#intensity-val')!.textContent = `${intensityEl.value}%`;
    if (state.timeline) drawAt(state.playback?.getCurrentTime() ?? 0);
  });
  cutEl.addEventListener('input', () => {
    state.knobs.cutRate = Number(cutEl.value) / 100;
    root.querySelector('#cut-val')!.textContent = `${(Number(cutEl.value) / 100).toFixed(2)}s`;
  });
  mixEl.addEventListener('input', () => {
    state.knobs.packMix = Number(mixEl.value) / 100;
    root.querySelector('#mix-val')!.textContent = `${mixEl.value}%`;
    if (state.timeline) drawAt(state.playback?.getCurrentTime() ?? 0);
  });
  gradeEl.addEventListener('change', () => {
    state.knobs.colorGrade = gradeEl.value as GlobalKnobs['colorGrade'];
    if (state.timeline) drawAt(state.playback?.getCurrentTime() ?? 0);
  });

  async function runGenerate() {
    if (!state.audioFile) {
      setStatus('Choose an audio file first.', 'err');
      return;
    }
    if (state.busy) return;
    state.busy = true;
    generateBtn.disabled = true;
    setStatus('Decoding & analyzing audio…');
    try {
      state.audioBuffer = await decodeAudioFile(state.audioFile);
      state.reaction = await analyzeAudioBuffer(state.audioBuffer);
      rebuildTimeline();
      resetPlayback();
      drawAt(0);
      setStatus(
        `Ready — ${fmtTime(state.reaction.duration)}, ~${state.reaction.bpmEstimate} BPM, ${state.timeline!.events.length} events.`,
        'ok',
      );
    } catch (err) {
      console.error(err);
      setStatus('Analysis failed. Try another audio file.', 'err');
    } finally {
      state.busy = false;
      generateBtn.disabled = false;
    }
  }

  generateBtn.addEventListener('click', () => {
    void runGenerate();
  });

  demoBtn.addEventListener('click', async () => {
    if (state.busy) return;
    state.busy = true;
    demoBtn.disabled = true;
    setStatus('Loading demo fixtures…');
    try {
      const [audioRes, coverRes, faceARes, faceBRes] = await Promise.all([
        fetch('/fixtures/demo-beat.wav'),
        fetch('/fixtures/cover.png'),
        fetch('/fixtures/face-a.png'),
        fetch('/fixtures/face-b.png'),
      ]);
      if (!audioRes.ok || !coverRes.ok || !faceARes.ok || !faceBRes.ok) {
        throw new Error('Fixture fetch failed');
      }
      const audioBlob = await audioRes.blob();
      state.audioFile = new File([audioBlob], 'demo-beat.wav', {
        type: 'audio/wav',
      });

      const toImage = async (res: Response, name: string) => {
        const blob = await res.blob();
        return loadImageFromFile(
          new File([blob], name, { type: blob.type || 'image/png' }),
        );
      };
      state.assets.baseArt = await toImage(coverRes, 'cover.png');
      state.assets.faces = [
        await toImage(faceARes, 'face-a.png'),
        await toImage(faceBRes, 'face-b.png'),
      ];
      state.pack = ALL_PACKS.find((p) => p.id === 'face-pack') ?? state.pack;
      renderPacks();
      setStatus('Demo assets loaded — generating…');
      state.busy = false;
      await runGenerate();
    } catch (err) {
      console.error(err);
      setStatus('Could not load demo fixtures.', 'err');
      state.busy = false;
    } finally {
      demoBtn.disabled = false;
    }
  });

  rebuildBtn.addEventListener('click', () => {
    if (!state.reaction) return;
    rebuildTimeline();
    resetPlayback();
    setStatus('Timeline rebuilt with current knobs & pack.', 'ok');
  });

  playBtn.addEventListener('click', () => {
    state.playback?.play();
  });
  pauseBtn.addEventListener('click', () => {
    state.playback?.pause();
  });
  seekEl.addEventListener('input', () => {
    if (!state.timeline) return;
    const t = (Number(seekEl.value) / 1000) * state.timeline.duration;
    state.playback?.seek(t);
    drawAt(t);
  });

  exportBtn.addEventListener('click', async () => {
    if (!state.timeline || !state.audioBuffer) return;
    state.playback?.pause();
    exportBtn.disabled = true;
    setExportStatus('Exporting… keep this tab focused.');
    try {
      const blob = await exportVideo(
        compositor,
        state.timeline,
        state.assets,
        state.knobs,
        state.audioBuffer,
        {},
        (r) => setExportStatus(`Exporting… ${Math.round(r * 100)}%`),
      );
      const base = state.audioFile?.name?.replace(/\.[^.]+$/, '') ?? 'pulseframe';
      downloadBlob(blob, `${base}-pulseframe.webm`);
      setExportStatus('Export complete — WebM downloaded.', 'ok');
    } catch (err) {
      console.error(err);
      setExportStatus('Export failed. Try Chrome/Edge for best MediaRecorder support.', 'err');
    } finally {
      exportBtn.disabled = false;
    }
  });
}
