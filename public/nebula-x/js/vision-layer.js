/**
 * VisionLayer — invisible animation the particles settle onto.
 * The canvas is never shown. Bright pixels become target positions, so the
 * cloud can form a face, an eye, a rose, and other images, then dissolve.
 */
(function (global) {
    'use strict';
    const NX = (global.NebulaX = global.NebulaX || {});

    const SIZE = 320;
    const WORLD = 1180;
    const CYCLE = [
        { id: 'face', label: 'Face', hold: 12, fade: 3.2, rest: 4.5 },
        { id: 'eye', label: 'Eye', hold: 11, fade: 3.2, rest: 4.5 },
        { id: 'rose', label: 'Rose', hold: 12, fade: 3.2, rest: 4.5 },
        { id: 'bird', label: 'Bird', hold: 11, fade: 3.2, rest: 4.5 },
        { id: 'galaxy', label: 'Galaxy', hold: 13, fade: 3.2, rest: 4.5 },
        { id: 'heart', label: 'Heart', hold: 10, fade: 3.2, rest: 4.5 }
    ];

    function smoothstep(t) {
        const x = t < 0 ? 0 : t > 1 ? 1 : t;
        return x * x * (3 - 2 * x);
    }

    function blink(t) {
        const u = (t % 4.6) / 4.6;
        if (u < 0.86) return 1;
        const p = (u - 0.86) / 0.14;
        return p < 0.5 ? 1 - p * 2 : (p - 0.5) * 2;
    }

    function create(particleCount, imagePos) {
        const canvas = document.createElement('canvas');
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const pos = imagePos || new Float32Array(particleCount * 3);

        let enabled = true;
        let mode = 'auto';
        let lockedId = 'face';
        let photo = null;
        let cycleIndex = 0;
        let phaseT = 0;
        let blend = 0;
        let label = 'Face';
        let sampleClock = 0;
        let ready = false;

        function currentVision() {
            if (mode === 'photo' && photo) return { id: 'photo', label: 'Your image', hold: 16, fade: 3.2, rest: 5 };
            if (mode !== 'auto') {
                const found = CYCLE.find((v) => v.id === lockedId) || CYCLE[0];
                return found;
            }
            return CYCLE[cycleIndex % CYCLE.length];
        }

        function drawFace(c, t, mouse) {
            const cx = SIZE * 0.5 + Math.sin(t * 0.32) * 10 + (mouse.x || 0) * 0.018;
            const cy = SIZE * 0.48 + Math.sin(t * 0.47) * 5;
            const turn = Math.sin(t * 0.28) * 0.12;
            const breath = 1 + Math.sin(t * 0.9) * 0.025;
            const b = blink(t);
            c.save();
            c.translate(cx, cy);
            c.scale((1 + turn * 0.15) * breath, breath);
            c.translate(-cx, -cy);

            const head = c.createRadialGradient(cx - 18, cy - 36, 12, cx, cy, 128);
            head.addColorStop(0, 'rgba(255,255,255,1)');
            head.addColorStop(0.45, 'rgba(255,255,255,0.82)');
            head.addColorStop(1, 'rgba(255,255,255,0.08)');
            c.fillStyle = head;
            c.beginPath();
            c.ellipse(cx, cy + 6, 92, 118, 0, 0, Math.PI * 2);
            c.fill();

            c.fillStyle = 'rgba(255,255,255,0.55)';
            c.beginPath();
            c.ellipse(cx, cy - 58, 90, 62, 0, Math.PI, Math.PI * 2);
            c.fill();

            const eyeY = cy - 12;
            const eyeH = 16 * b + 1;
            function eye(ex) {
                c.fillStyle = '#000';
                c.beginPath();
                c.ellipse(ex, eyeY, 22, eyeH, 0, 0, Math.PI * 2);
                c.fill();
                if (b > 0.25) {
                    const lookX = (mouse.x || 0) * 0.012;
                    const lookY = -(mouse.y || 0) * 0.01;
                    c.strokeStyle = 'rgba(255,255,255,0.95)';
                    c.lineWidth = 4;
                    c.beginPath();
                    c.ellipse(ex + lookX, eyeY + lookY, 11, Math.max(4, 11 * b), 0, 0, Math.PI * 2);
                    c.stroke();
                    c.fillStyle = 'rgba(255,255,255,0.9)';
                    c.beginPath();
                    c.arc(ex + lookX - 3, eyeY + lookY - 3, 2.2, 0, Math.PI * 2);
                    c.fill();
                }
            }
            eye(cx - 32);
            eye(cx + 32);

            c.strokeStyle = 'rgba(255,255,255,0.7)';
            c.lineWidth = 5;
            c.lineCap = 'round';
            c.beginPath();
            c.moveTo(cx - 52, eyeY - 22);
            c.quadraticCurveTo(cx - 32, eyeY - 32, cx - 12, eyeY - 20);
            c.moveTo(cx + 12, eyeY - 20);
            c.quadraticCurveTo(cx + 32, eyeY - 32, cx + 52, eyeY - 22);
            c.stroke();

            c.strokeStyle = 'rgba(255,255,255,0.85)';
            c.lineWidth = 4;
            c.beginPath();
            c.moveTo(cx + turn * 8, cy - 4);
            c.lineTo(cx + 6 + turn * 10, cy + 28);
            c.lineTo(cx - 10 + turn * 8, cy + 32);
            c.stroke();

            const smile = 0.35 + Math.sin(t * 0.6) * 0.2;
            c.strokeStyle = 'rgba(255,255,255,0.95)';
            c.lineWidth = 6;
            c.beginPath();
            c.moveTo(cx - 28, cy + 58);
            c.quadraticCurveTo(cx, cy + 58 + smile * 28, cx + 28, cy + 58);
            c.stroke();
            c.restore();
        }

        function drawEye(c, t, mouse) {
            const cx = SIZE * 0.5;
            const cy = SIZE * 0.5;
            const b = blink(t * 0.85);
            c.save();
            c.translate(cx, cy);
            c.scale(1, 0.22 + 0.78 * b);
            c.translate(-cx, -cy);
            c.fillStyle = 'rgba(255,255,255,0.95)';
            c.beginPath();
            c.ellipse(cx, cy, 138, 62, 0, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = '#000';
            c.beginPath();
            c.ellipse(cx, cy, 118, 48, 0, 0, Math.PI * 2);
            c.fill();
            const lookX = (mouse.x || 0) * 0.04;
            const lookY = -(mouse.y || 0) * 0.03;
            const iris = c.createRadialGradient(cx + lookX, cy + lookY, 8, cx + lookX, cy + lookY, 52);
            iris.addColorStop(0, 'rgba(255,255,255,1)');
            iris.addColorStop(0.35, 'rgba(255,220,180,0.7)');
            iris.addColorStop(1, 'rgba(255,255,255,0.15)');
            c.fillStyle = iris;
            c.beginPath();
            c.arc(cx + lookX, cy + lookY, 52, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(cx + lookX, cy + lookY, 22, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = '#fff';
            c.beginPath();
            c.arc(cx + lookX - 10, cy + lookY - 12, 7, 0, Math.PI * 2);
            c.fill();
            c.restore();
        }

        function drawRose(c, t) {
            const cx = SIZE * 0.5;
            const cy = SIZE * 0.52;
            c.save();
            c.translate(cx, cy);
            c.rotate(t * 0.18);
            c.strokeStyle = 'rgba(255,255,255,0.92)';
            c.lineWidth = 3.5;
            c.lineJoin = 'round';
            for (let k = 0; k < 3; k++) {
                const a = 46 + k * 28;
                c.beginPath();
                for (let i = 0; i <= 720; i++) {
                    const th = (i / 720) * Math.PI * 2;
                    const r = a * Math.abs(Math.cos(5 * th));
                    const x = r * Math.cos(th);
                    const y = r * Math.sin(th);
                    if (i === 0) c.moveTo(x, y);
                    else c.lineTo(x, y);
                }
                c.stroke();
            }
            c.fillStyle = 'rgba(255,255,255,0.85)';
            c.beginPath();
            c.arc(0, 0, 10, 0, Math.PI * 2);
            c.fill();
            c.restore();
        }

        function drawBird(c, t) {
            const cx = SIZE * 0.5;
            const cy = SIZE * 0.52;
            const flap = Math.sin(t * 3.2);
            c.save();
            c.translate(cx, cy + Math.sin(t * 1.4) * 8);
            c.fillStyle = 'rgba(255,255,255,0.95)';
            c.beginPath();
            c.ellipse(0, 8, 38, 22, -0.25, 0, Math.PI * 2);
            c.fill();
            c.beginPath();
            c.arc(34, -6, 16, 0, Math.PI * 2);
            c.fill();
            c.beginPath();
            c.moveTo(48, -6);
            c.lineTo(68, -2);
            c.lineTo(48, 4);
            c.closePath();
            c.fill();
            function wing(side) {
                c.save();
                c.translate(-6, 0);
                c.rotate(side * (0.15 + flap * 0.55));
                c.beginPath();
                c.moveTo(0, 0);
                c.quadraticCurveTo(side * 40, -90, side * 130, -20);
                c.quadraticCurveTo(side * 70, 10, 0, 12);
                c.closePath();
                c.fill();
                c.restore();
            }
            wing(-1);
            wing(1);
            c.restore();
        }

        function drawGalaxy(c, t) {
            const cx = SIZE * 0.5;
            const cy = SIZE * 0.5;
            c.save();
            c.translate(cx, cy);
            c.rotate(t * 0.12);
            const core = c.createRadialGradient(0, 0, 2, 0, 0, 48);
            core.addColorStop(0, '#fff');
            core.addColorStop(1, 'rgba(255,255,255,0)');
            c.fillStyle = core;
            c.beginPath();
            c.arc(0, 0, 48, 0, Math.PI * 2);
            c.fill();
            for (let arm = 0; arm < 3; arm++) {
                c.strokeStyle = 'rgba(255,255,255,0.7)';
                c.lineWidth = 2.4;
                c.beginPath();
                for (let i = 0; i < 140; i++) {
                    const th = i * 0.11 + (arm * Math.PI * 2) / 3;
                    const r = 12 + i * 0.95;
                    const x = r * Math.cos(th);
                    const y = r * Math.sin(th) * 0.72;
                    if (i === 0) c.moveTo(x, y);
                    else c.lineTo(x, y);
                }
                c.stroke();
            }
            c.fillStyle = 'rgba(255,255,255,0.55)';
            for (let i = 0; i < 90; i++) {
                const a = i * 2.399;
                const r = 20 + (i * 1.35) % 140;
                c.fillRect(Math.cos(a) * r - 1, Math.sin(a) * r * 0.72 - 1, 2, 2);
            }
            c.restore();
        }

        function drawHeart(c, t) {
            const cx = SIZE * 0.5;
            const cy = SIZE * 0.5;
            const beat = 1 + Math.sin(t * 2.2) * 0.06;
            c.save();
            c.translate(cx, cy + 12);
            c.scale(beat * 7.2, -beat * 7.2);
            c.beginPath();
            for (let i = 0; i <= 180; i++) {
                const p = (i / 180) * Math.PI * 2;
                const x = 16 * Math.pow(Math.sin(p), 3);
                const y =
                    13 * Math.cos(p) -
                    5 * Math.cos(2 * p) -
                    2 * Math.cos(3 * p) -
                    Math.cos(4 * p);
                if (i === 0) c.moveTo(x, y);
                else c.lineTo(x, y);
            }
            c.closePath();
            c.fillStyle = 'rgba(255,255,255,0.95)';
            c.fill();
            c.restore();
        }

        function drawPhoto(c) {
            if (!photo) return;
            const iw = photo.naturalWidth || photo.width;
            const ih = photo.naturalHeight || photo.height;
            if (!iw || !ih) return;
            const scale = Math.max(SIZE / iw, SIZE / ih);
            const dw = iw * scale;
            const dh = ih * scale;
            c.filter = 'grayscale(1) contrast(1.45) brightness(1.08)';
            c.drawImage(photo, (SIZE - dw) / 2, (SIZE - dh) / 2, dw, dh);
            c.filter = 'none';
        }

        function paint(id, t, mouse) {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, SIZE, SIZE);
            if (id === 'face') drawFace(ctx, t, mouse);
            else if (id === 'eye') drawEye(ctx, t, mouse);
            else if (id === 'rose') drawRose(ctx, t);
            else if (id === 'bird') drawBird(ctx, t);
            else if (id === 'galaxy') drawGalaxy(ctx, t);
            else if (id === 'heart') drawHeart(ctx, t);
            else if (id === 'photo') drawPhoto(ctx);
        }

        function sampleInto(target) {
            const img = ctx.getImageData(0, 0, SIZE, SIZE).data;
            const xs = [];
            const ys = [];
            const ws = [];
            for (let y = 0; y < SIZE; y += 2) {
                for (let x = 0; x < SIZE; x += 2) {
                    const o = (y * SIZE + x) * 4;
                    const luma = img[o] * 0.2126 + img[o + 1] * 0.7152 + img[o + 2] * 0.0722;
                    if (luma < 22) continue;
                    const copies = luma > 200 ? 3 : luma > 110 ? 2 : 1;
                    for (let k = 0; k < copies; k++) {
                        xs.push(x);
                        ys.push(y);
                        ws.push(luma);
                    }
                }
            }
            const n = xs.length;
            if (!n) {
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    target[i3] = (Math.random() - 0.5) * WORLD;
                    target[i3 + 1] = (Math.random() - 0.5) * WORLD;
                    target[i3 + 2] = (Math.random() - 0.5) * 80;
                }
                return;
            }
            for (let i = 0; i < particleCount; i++) {
                const s = i % n;
                const extra = Math.floor(i / n);
                const jitter = 1.2 + extra * 0.4;
                const rnd = ((i * 1103515245 + 12345) >>> 0) / 4294967296;
                const rnd2 = ((i * 1664525 + 1013904223) >>> 0) / 4294967296;
                const px = xs[s] + (rnd - 0.5) * jitter;
                const py = ys[s] + (rnd2 - 0.5) * jitter;
                const luma = ws[s];
                const i3 = i * 3;
                target[i3] = (px / SIZE - 0.5) * WORLD;
                target[i3 + 1] = (0.5 - py / SIZE) * WORLD;
                target[i3 + 2] = (luma / 255 - 0.45) * 110 + (rnd - 0.5) * 16;
            }
        }

        function envelope(vis, t) {
            const fade = vis.fade;
            const hold = vis.hold;
            const rest = vis.rest;
            const total = fade + hold + fade + rest;
            const u = t % total;
            if (u < fade) return smoothstep(u / fade);
            if (u < fade + hold) return 1;
            if (u < fade + hold + fade) return 1 - smoothstep((u - fade - hold) / fade);
            return 0;
        }

        function advanceCycle(vis, t) {
            if (mode !== 'auto') return;
            const total = vis.fade + vis.hold + vis.fade + vis.rest;
            if (t >= total) {
                cycleIndex = (cycleIndex + 1) % CYCLE.length;
                phaseT = 0;
            }
        }

        function update(opts) {
            const dt = opts.dt || 0.016;
            const mouse = opts.mouse || { x: 0, y: 0 };
            const audio = opts.audioFeatures || {};
            if (!enabled) {
                blend += (0 - blend) * 0.08;
                label = 'Off';
                return { blend: blend, label: label };
            }
            phaseT += dt;
            const vis = currentVision();
            advanceCycle(vis, phaseT);
            const visNow = currentVision();
            label = visNow.label;
            let env = envelope(visNow, phaseT);
            env = Math.min(1, env + (audio.bloomEnv || 0) * 0.12);
            blend += (env - blend) * 0.14;
            sampleClock += dt;
            const moving = visNow.id === 'face' || visNow.id === 'eye' || visNow.id === 'bird' || visNow.id === 'rose' || visNow.id === 'galaxy' || visNow.id === 'heart';
            const interval = moving ? 0.055 : 0.2;
            if (!ready || (env > 0.02 && sampleClock >= interval)) {
                paint(visNow.id, opts.time || phaseT, mouse);
                sampleInto(pos);
                sampleClock = 0;
                ready = true;
            }
            return { blend: blend, label: label };
        }

        function setEnabled(v) {
            enabled = !!v;
            if (!enabled) phaseT = 0;
        }

        function setMode(next) {
            mode = next || 'auto';
            if (mode !== 'auto' && mode !== 'photo' && mode !== 'off') lockedId = mode;
            if (mode === 'off') setEnabled(false);
            else setEnabled(true);
            phaseT = 0;
            ready = false;
        }

        function loadImage(img) {
            photo = img;
            mode = 'photo';
            setEnabled(true);
            phaseT = 0;
            ready = false;
            label = 'Your image';
        }

        return {
            pos: pos,
            update: update,
            setEnabled: setEnabled,
            setMode: setMode,
            loadImage: loadImage,
            isEnabled: function () { return enabled; },
            getMode: function () { return mode; },
            getBlend: function () { return blend; },
            getLabel: function () { return label; },
            list: CYCLE.map(function (v) { return { id: v.id, label: v.label }; })
        };
    }

    NX.VisionLayer = { create: create };
})(typeof window !== 'undefined' ? window : globalThis);
