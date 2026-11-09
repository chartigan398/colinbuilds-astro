# Pulseframe — Reactive Music Video Generator

Drop-in browser tool for Suno tracks: upload audio + base art + an asset pack, auto-map visuals to the beat, preview, export WebM.

## Quick start

```bash
cd viz-tool
npm install
npm run dev
```

Open the local Vite URL, then:

1. Upload an mp3/wav from Suno  
2. Upload cover / static art  
3. (Optional) Upload face PNGs for **Face Pack**  
4. Pick **Strobe Night** or **Face Pack**  
5. Click **Generate** → Play → tweak knobs → **Export WebM**

## Packs

- **Strobe Night** — kick strobes, inverted art, hard cuts, energy washes  
- **Face Pack** — punches your face stills into drops/choruses  

Rebuild the timeline after changing cut rate or switching packs so event density updates.

## Stack

- Vite + TypeScript  
- Web Audio API (offline analysis)  
- Canvas 2D compositor  
- MediaRecorder export (WebM; Chrome/Edge recommended)

Everything runs locally in the browser — no backend.
