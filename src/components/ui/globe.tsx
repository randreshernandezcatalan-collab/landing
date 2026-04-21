'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5.2;

    function resize() {
      const size = canvas!.parentElement?.clientWidth ?? 500;
      renderer.setSize(size, size, false);
    }
    resize();
    window.addEventListener('resize', resize);

    // Lighting
    scene.add(new THREE.AmbientLight(0x334400, 0.8));
    const rim = new THREE.DirectionalLight(0xe8e800, 1.0);
    rim.position.set(-3, 1, 2);
    scene.add(rim);

    const RADIUS = 1.6;
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Base sphere
    const sphereGeo = new THREE.SphereGeometry(RADIUS * 0.995, 64, 64);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x0a0e00, transparent: true, opacity: 0.85 });
    globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    // Wireframe
    const wireGeo = new THREE.SphereGeometry(RADIUS * 1.001, 32, 24);
    const wireMat = new THREE.LineBasicMaterial({ color: 0xe8e800, transparent: true, opacity: 0.06 });
    globeGroup.add(new THREE.LineSegments(new THREE.WireframeGeometry(wireGeo), wireMat));

    // ── Land mask ──
    function isLand(lat: number, lon: number): boolean {
      if (lat >  15 && lat <  72 && lon > -168 && lon < -52) {
        if (lat > 60 && lon < -140) return Math.random() < 0.5;
        if (lat < 25 && lon >  -90) return Math.random() < 0.4;
        return true;
      }
      if (lat > -56 && lat <  13 && lon <  -34 && lon >  -82) {
        if (lat < -35 && lon < -72) return Math.random() < 0.3;
        return true;
      }
      if (lat >  36 && lat <  71 && lon >  -10 && lon <  60) return true;
      if (lat > -35 && lat <  37 && lon >  -18 && lon <  52) return true;
      if (lat >   5 && lat <  75 && lon >   30 && lon < 180) {
        if (lat > 60 && lon > 150) return Math.random() < 0.5;
        return true;
      }
      if (lat > -10 && lat <  30 && lon >   65 && lon < 140) return Math.random() < 0.85;
      if (lat > -40 && lat < -10 && lon >  112 && lon < 155) return true;
      if (lat >  60 && lat <  84 && lon >  -55 && lon < -15) return true;
      if (lat < -65) return Math.random() < 0.8;
      return false;
    }

    function fibonacciSphere(n: number) {
      const pts = [];
      const phi = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;
        pts.push({ x: Math.cos(theta)*r, y, z: Math.sin(theta)*r,
                   lat: 90 - Math.acos(y)*180/Math.PI,
                   lon: Math.atan2(Math.sin(theta)*r, Math.cos(theta)*r)*180/Math.PI });
      }
      return pts;
    }

    const landPos: number[] = [];
    for (const p of fibonacciSphere(9000)) {
      if (isLand(p.lat, p.lon))
        landPos.push(p.x*RADIUS, p.y*RADIUS, p.z*RADIUS);
    }

    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute('position', new THREE.Float32BufferAttribute(landPos, 3));
    const dotsMat = new THREE.PointsMaterial({ color: 0xe8e800, size: 0.022, sizeAttenuation: true, transparent: true, opacity: 0.85 });
    globeGroup.add(new THREE.Points(dotsGeo, dotsMat));

    // Atmosphere glow (yellow tint)
    const atmoGeo = new THREE.SphereGeometry(RADIUS * 1.15, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      transparent: true, side: THREE.BackSide,
      uniforms: { glowColor: { value: new THREE.Color(0xe8e800) } },
      vertexShader: `varying vec3 vNormal; void main(){ vNormal = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 glowColor; varying vec3 vNormal; void main(){ float i=pow(0.72-dot(vNormal,vec3(0,0,1.0)),2.5); gl_FragColor=vec4(glowColor,1.0)*i; }`,
    });
    scene.add(new THREE.Mesh(atmoGeo, atmoMat));

    // ── Cities ──
    function latLonToVec3(lat: number, lon: number, r: number) {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + 180) * Math.PI / 180;
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
         r * Math.cos(phi),
         r * Math.sin(phi) * Math.sin(theta),
      );
    }

    const cityDefs = [
      { lat:-33.45, lon:-70.66 }, { lat: 40.71, lon:-74.00 },
      { lat: 51.50, lon: -0.12 }, { lat: 35.68, lon:139.69 },
      { lat:  1.35, lon:103.82 }, { lat:-33.86, lon:151.20 },
      { lat:-23.55, lon:-46.63 }, { lat: 25.76, lon:-80.19 },
      { lat: 40.41, lon: -3.70 }, { lat: 50.11, lon:  8.68 },
      { lat: 25.20, lon: 55.27 }, { lat: 19.07, lon: 72.87 },
      { lat: 22.30, lon:114.16 }, { lat: 19.43, lon:-99.13 },
      { lat: 43.65, lon:-79.38 }, { lat: 37.77, lon:-122.41 },
      { lat:-26.20, lon: 28.04 }, { lat: 37.56, lon:126.97 },
    ];

    const markerGeo  = new THREE.SphereGeometry(0.022, 12, 12);
    const markerMat  = new THREE.MeshBasicMaterial({ color: 0xe8e800 });
    const haloGeo    = new THREE.RingGeometry(0.025, 0.04, 24);

    const cityPoints = cityDefs.map((c) => {
      const vec = latLonToVec3(c.lat, c.lon, RADIUS);
      const m = new THREE.Mesh(markerGeo, markerMat);
      m.position.copy(vec);
      globeGroup.add(m);

      const haloMat2 = new THREE.MeshBasicMaterial({ color: 0xe8e800, transparent: true, opacity: 0.55, side: THREE.DoubleSide });
      const halo = new THREE.Mesh(haloGeo, haloMat2);
      halo.position.copy(vec);
      halo.lookAt(0, 0, 0);
      halo.userData.phase = Math.random() * Math.PI * 2;
      globeGroup.add(halo);
      return { vec, halo };
    });

    // ── Arc class ──
    class Arc {
      curve: THREE.QuadraticBezierCurve3;
      segments = 60;
      geometry: THREE.BufferGeometry;
      material: THREE.ShaderMaterial;
      line: THREE.Line;
      pulse: THREE.Mesh;
      progress = 0;
      life = 0;
      state: 'growing'|'alive'|'fading'|'dead' = 'growing';
      speed = 0.8 + Math.random() * 0.6;

      constructor(start: THREE.Vector3, end: THREE.Vector3) {
        const mid = start.clone().add(end).multiplyScalar(0.5);
        mid.normalize().multiplyScalar(RADIUS * (1 + start.distanceTo(end) * 0.9));
        this.curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const pts = this.curve.getPoints(this.segments);
        const pos = new Float32Array((this.segments+1)*3);
        const alp = new Float32Array(this.segments+1);
        pts.forEach((p,i) => { pos[i*3]=p.x; pos[i*3+1]=p.y; pos[i*3+2]=p.z; alp[i]=0; });
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        this.geometry.setAttribute('alpha',    new THREE.BufferAttribute(alp, 1));
        this.material = new THREE.ShaderMaterial({
          transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
          uniforms: { uColor: { value: new THREE.Color(0xe8e800) } },
          vertexShader:   `attribute float alpha; varying float vAlpha; void main(){ vAlpha=alpha; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
          fragmentShader: `uniform vec3 uColor; varying float vAlpha; void main(){ gl_FragColor=vec4(uColor,vAlpha); }`,
        });
        this.line = new THREE.Line(this.geometry, this.material);
        globeGroup.add(this.line);
        const pMat = new THREE.MeshBasicMaterial({ color: 0xffff88, transparent: true, opacity: 1 });
        this.pulse = new THREE.Mesh(new THREE.SphereGeometry(0.025,8,8), pMat);
        this.pulse.visible = false;
        globeGroup.add(this.pulse);
      }

      update(dt: number) {
        const alp = this.geometry.attributes.alpha.array as Float32Array;
        const n = this.segments;
        if (this.state === 'growing') {
          this.progress = Math.min(this.progress + dt * this.speed, 1);
          if (this.progress >= 1) this.state = 'alive';
          const head = Math.floor(this.progress * n);
          for (let i = 0; i <= n; i++) alp[i] = i > head ? 0 : Math.max(0, 1-(head-i)/20)*0.9;
          this.pulse.visible = true;
          this.pulse.position.copy(this.curve.getPoint(this.progress));
        } else if (this.state === 'alive') {
          this.life += dt;
          for (let i = 0; i <= n; i++) alp[i] = Math.max(alp[i]-dt*0.8, 0.15);
          (this.pulse.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1-this.life*1.5);
          if (this.life > 0.8) { this.state = 'fading'; this.pulse.visible = false; }
        } else if (this.state === 'fading') {
          for (let i = 0; i <= n; i++) alp[i] = Math.max(0, alp[i]-dt*0.5);
          if (alp[0] <= 0.01) this.state = 'dead';
        }
        this.geometry.attributes.alpha.needsUpdate = true;
      }

      dispose() {
        globeGroup.remove(this.line);
        globeGroup.remove(this.pulse);
        this.geometry.dispose();
        this.material.dispose();
        (this.pulse.material as THREE.Material).dispose();
      }
    }

    const arcs: Arc[] = [];
    function spawnArc() {
      const a = cityPoints[Math.floor(Math.random()*cityPoints.length)];
      let b = cityPoints[Math.floor(Math.random()*cityPoints.length)];
      let g = 0;
      while (b === a && g++ < 10) b = cityPoints[Math.floor(Math.random()*cityPoints.length)];
      arcs.push(new Arc(a.vec, b.vec));
    }
    for (let i = 0; i < 5; i++) spawnArc();

    // ── Drag to rotate ──
    let isDragging = false, lastX = 0, lastY = 0;
    let rotVelY = 0.0015;
    let targetRotX = 0.25;

    canvas.addEventListener('pointerdown', (e) => { isDragging=true; lastX=e.clientX; lastY=e.clientY; canvas.style.cursor='grabbing'; });
    window.addEventListener('pointerup',   ()  => { isDragging=false; canvas.style.cursor='grab'; });
    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      rotVelY = (e.clientX-lastX)*0.005;
      targetRotX = Math.max(-1.2, Math.min(1.2, targetRotX+(e.clientY-lastY)*0.005));
      lastX=e.clientX; lastY=e.clientY;
    });
    canvas.style.cursor = 'grab';

    // ── Loop ──
    const clock = new THREE.Clock();
    let spawnTimer = 0;
    let alive = true;
    let rafId = 0;

    function animate() {
      if (!alive) return;
      rafId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t  = clock.elapsedTime;

      if (!isDragging) rotVelY += (0.0015-rotVelY)*0.02;
      globeGroup.rotation.y += rotVelY;
      globeGroup.rotation.x += (targetRotX-globeGroup.rotation.x)*0.08;

      cityPoints.forEach(c => {
        const s = 1 + Math.sin(t*2+c.halo.userData.phase)*0.4;
        c.halo.scale.set(s,s,s);
        (c.halo.material as THREE.MeshBasicMaterial).opacity = 0.6-(s-1)*0.8;
      });

      spawnTimer += dt;
      if (spawnTimer > 0.4 && arcs.length < 12) { spawnTimer=0; spawnArc(); }
      for (let i=arcs.length-1; i>=0; i--) {
        arcs[i].update(dt);
        if (arcs[i].state==='dead') { arcs[i].dispose(); arcs.splice(i,1); }
      }

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width:'100%', height:'100%', display:'block', cursor:'grab' }} />;
}
