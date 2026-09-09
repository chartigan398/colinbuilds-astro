/** Playable homepage flock. Hover scatters, press gathers. */

export function startHomeFlock() {
  const canvas = document.getElementById('home-flock');
  if (!(canvas instanceof HTMLCanvasElement) || canvas.dataset.flock === 'on') return;
  canvas.dataset.flock = 'on';
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { x: 0, y: 0, inside: false, pressed: false };
  /** @type {{ x: number, y: number, vx: number, vy: number }[]} */
  let boids = [];
  let raf = 0;
  let width = 1;
  let height = 1;

  function reduceMotion() {
    return reduceQuery.matches;
  }

  function sceneColor() {
    return (
      getComputedStyle(document.documentElement).getPropertyValue('--cb-scene').trim() || '#22d3ee'
    );
  }

  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nextW = canvas.clientWidth || canvas.parentElement?.clientWidth || 1;
    const nextH = canvas.clientHeight || canvas.parentElement?.clientHeight || 1;
    width = Math.max(1, nextW);
    height = Math.max(1, nextH);
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function flockCount() {
    const area = width * height;
    return Math.max(24, Math.min(72, Math.round(area / 14000)));
  }

  function spawn() {
    const n = flockCount();
    boids = Array.from({ length: n }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4,
    }));
  }

  function limit(vx, vy, max) {
    const mag = Math.hypot(vx, vy);
    if (mag > max && mag > 0) {
      return { x: (vx / mag) * max, y: (vy / mag) * max };
    }
    return { x: vx, y: vy };
  }

  function step() {
    const fleeR = Math.min(width, height) * 0.24;
    const gatherR = fleeR * 1.2;
    const sepR = 26;
    const flockR = 88;
    const maxSpeed = 2.7;
    const maxForce = 0.09;

    for (let i = 0; i < boids.length; i++) {
      const b = boids[i];
      let alignX = 0;
      let alignY = 0;
      let cohX = 0;
      let cohY = 0;
      let sepX = 0;
      let sepY = 0;
      let alignN = 0;
      let cohN = 0;
      let sepN = 0;

      for (let j = 0; j < boids.length; j++) {
        if (i === j) continue;
        const other = boids[j];
        const dx = other.x - b.x;
        const dy = other.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d > 0 && d < flockR) {
          alignX += other.vx;
          alignY += other.vy;
          cohX += other.x;
          cohY += other.y;
          alignN += 1;
          cohN += 1;
        }
        if (d > 0 && d < sepR) {
          sepX -= dx / d;
          sepY -= dy / d;
          sepN += 1;
        }
      }

      let ax = 0;
      let ay = 0;
      if (alignN) {
        const a = limit(alignX / alignN, alignY / alignN, maxSpeed);
        ax += (a.x - b.vx) * 0.04;
        ay += (a.y - b.vy) * 0.04;
      }
      if (cohN) {
        const cx = cohX / cohN - b.x;
        const cy = cohY / cohN - b.y;
        const c = limit(cx, cy, maxSpeed);
        ax += (c.x - b.vx) * 0.03;
        ay += (c.y - b.vy) * 0.03;
      }
      if (sepN) {
        const s = limit(sepX / sepN, sepY / sepN, maxSpeed);
        ax += (s.x - b.vx) * 0.08;
        ay += (s.y - b.vy) * 0.08;
      }

      if (pointer.inside) {
        const pdx = b.x - pointer.x;
        const pdy = b.y - pointer.y;
        const pd = Math.hypot(pdx, pdy);
        if (pd > 0.5) {
          const radius = pointer.pressed ? gatherR : fleeR;
          if (pd < radius) {
            const power = (1 - pd / radius) * (pointer.pressed ? 0.72 : 0.58);
            const nx = pdx / pd;
            const ny = pdy / pd;
            ax += (pointer.pressed ? -nx : nx) * power;
            ay += (pointer.pressed ? -ny : ny) * power;
          }
        }
      }

      const force = limit(ax, ay, maxForce);
      b.vx += force.x;
      b.vy += force.y;
      const vel = limit(b.vx, b.vy, maxSpeed);
      b.vx = vel.x;
      b.vy = vel.y;
      b.x += b.vx;
      b.y += b.vy;

      const margin = 16;
      if (b.x < -margin) b.x = width + margin;
      if (b.x > width + margin) b.x = -margin;
      if (b.y < -margin) b.y = height + margin;
      if (b.y > height + margin) b.y = -margin;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = sceneColor();
    ctx.lineWidth = 1.5;
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.78;
    for (const b of boids) {
      const angle = Math.atan2(b.vy, b.vx);
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(-6, 5);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-6, -5);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  function tick() {
    if (!reduceMotion()) step();
    draw();
    if (!reduceMotion()) raf = window.requestAnimationFrame(tick);
  }

  function startLoop() {
    if (raf) window.cancelAnimationFrame(raf);
    raf = 0;
    if (reduceMotion()) {
      draw();
      return;
    }
    raf = window.requestAnimationFrame(tick);
  }

  function pointFromEvent(event) {
    const box = canvas.getBoundingClientRect();
    pointer.x = event.clientX - box.left;
    pointer.y = event.clientY - box.top;
  }

  function onPointerMove(event) {
    pointFromEvent(event);
    pointer.inside = true;
  }

  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointFromEvent(event);
    pointer.inside = true;
    pointer.pressed = true;
  }

  function onPointerUp() {
    pointer.pressed = false;
  }

  function onPointerLeave() {
    pointer.inside = false;
    pointer.pressed = false;
  }

  function onResize() {
    const before = boids.length;
    sizeCanvas();
    if (flockCount() !== before) spawn();
    if (reduceMotion()) draw();
  }

  function onTheme() {
    if (reduceMotion()) draw();
  }

  sizeCanvas();
  spawn();
  startLoop();

  canvas.addEventListener('pointermove', onPointerMove, { passive: true });
  canvas.addEventListener('pointerdown', onPointerDown, { passive: true });
  canvas.addEventListener('pointerup', onPointerUp, { passive: true });
  canvas.addEventListener('pointercancel', onPointerUp, { passive: true });
  canvas.addEventListener('pointerleave', onPointerLeave, { passive: true });
  window.addEventListener('pointerup', onPointerUp, { passive: true });
  window.addEventListener('resize', onResize);
  reduceQuery.addEventListener('change', startLoop);
  const themeWatch = new MutationObserver(onTheme);
  themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  window.addEventListener('pagehide', () => {
    if (raf) window.cancelAnimationFrame(raf);
    canvas.removeEventListener('pointermove', onPointerMove);
    canvas.removeEventListener('pointerdown', onPointerDown);
    canvas.removeEventListener('pointerup', onPointerUp);
    canvas.removeEventListener('pointercancel', onPointerUp);
    canvas.removeEventListener('pointerleave', onPointerLeave);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('resize', onResize);
    reduceQuery.removeEventListener('change', startLoop);
    themeWatch.disconnect();
  });
}
