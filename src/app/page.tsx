import { DottedSurface } from '@/components/ui/dotted-surface';
import { Navbar }       from '@/components/sections/Navbar';
import { Hero }         from '@/components/sections/Hero';
import { Services }     from '@/components/sections/Services';
import { CTA }          from '@/components/sections/CTA';
import { Footer }       from '@/components/sections/Footer';

/* HUD corners — static decorative data readouts */
function Hud({ pos, items }: { pos: React.CSSProperties; items: { label: string; val: string }[] }) {
  return (
    <div style={{
      position:'fixed', zIndex:5, pointerEvents:'none',
      fontFamily:"'Space Mono',monospace",
      fontSize:'.65rem', letterSpacing:'.15em', textTransform:'uppercase',
      color:'var(--muted)',
      ...pos,
    }}>
      {items.map(i => (
        <div key={i.label}>
          <span style={{ color:'var(--accent)', opacity:.9 }}>{i.label}</span>{' '}
          <span style={{ color:'#fff', opacity:.8 }}>{i.val}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ position:'relative', minHeight:'100vh' }}>

      {/* ── Layer 0: atmosphere gradient ── */}
      <div className="stars" />

      {/* ── Layer 0: Three.js dotted surface background ── */}
      <DottedSurface />

      {/* ── Layer 2: grain overlay (set in globals.css) ── */}
      <div className="grain" />

      {/* ── HUD readouts ── */}
      <Hud
        pos={{ top:'5rem', right:'3rem', textAlign:'right' }}
        items={[{ label:'NODE', val:'STGO–CL · 33.5°S' }]}
      />
      <Hud
        pos={{ bottom:'2rem', left:'3rem' }}
        items={[{ label:'LAT', val:'12ms · STABLE' }]}
      />
      <Hud
        pos={{ bottom:'2rem', right:'3rem', textAlign:'right' }}
        items={[{ label:'UPLINK', val:'1.2 Gbps · 99.99%' }]}
      />

      {/* ── Content (z:10 to sit above canvas) ── */}
      <div style={{ position:'relative', zIndex:10 }}>
        <Navbar />
        <Hero />
        <Services />
        <CTA />
        <Footer />
      </div>

    </main>
  );
}
