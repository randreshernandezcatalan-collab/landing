'use client';
import { Globe } from '@/components/ui/globe';

export function Hero() {
  return (
    <section style={{
      position:'relative', minHeight:'100vh', zIndex:3,
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'flex-start',
      paddingTop:'12vh',
    }}>
      {/* Kicker */}
      <div style={{
        fontFamily:"'Space Mono',monospace", fontSize:'.7rem',
        letterSpacing:'.4em', textTransform:'uppercase',
        color:'var(--accent)', marginBottom:'1.5rem',
        display:'flex', alignItems:'center', gap:'1rem',
        opacity:0, animation:'fadeUp 1s ease .3s forwards',
      }}>
        <span style={{ height:1, width:40, background:'linear-gradient(90deg,transparent,var(--accent),transparent)', display:'inline-block' }} />
        Servicios Informáticos · Est. 2020
        <span style={{ height:1, width:40, background:'linear-gradient(90deg,transparent,var(--accent),transparent)', display:'inline-block' }} />
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily:"'Syne',sans-serif", fontWeight:800,
        fontSize:'clamp(2.5rem, 8vw, 6rem)',
        letterSpacing:'.06em', lineHeight:.95,
        color:'#fff', textAlign:'center',
        opacity:0, animation:'fadeUp 1.2s ease .5s forwards',
        position:'relative',
      }}>
        NUEVA<span style={{ color:'var(--accent)', fontStyle:'italic', fontWeight:600 }}>NET</span>
      </h1>

      {/* Tagline */}
      <p style={{
        marginTop:'1.2rem',
        fontFamily:"'Space Mono',monospace", fontSize:'.85rem',
        letterSpacing:'.3em', textTransform:'uppercase',
        color:'var(--muted)', textAlign:'center',
        opacity:0, animation:'fadeUp 1s ease .8s forwards',
      }}>
        Conectamos · <strong style={{ color:'#fff', fontWeight:400 }}>Protegemos</strong> · Escalamos
      </p>

      {/* Globe */}
      <div style={{
        position:'relative', width:'100%', maxWidth:580,
        aspectRatio:'1/1', marginTop:'1rem',
        opacity:0, animation:'fadeUp 1.5s ease 1s forwards',
      }}>
        {/* Glow ring behind globe */}
        <div style={{
          position:'absolute', inset:'8%', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(232,232,0,.15) 0%, rgba(180,180,0,.06) 40%, transparent 70%)',
          filter:'blur(40px)', zIndex:-1,
          animation:'breathe 6s ease-in-out infinite',
        }} />
        <Globe />
      </div>
    </section>
  );
}
