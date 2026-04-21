'use client';
import type React from 'react';
export function CTA() {
  return (
    <section id="contacto" style={{
      position:'relative', zIndex:3,
      padding:'7rem 3rem',
      textAlign:'center',
      borderTop:'1px solid var(--line)',
      borderBottom:'1px solid var(--line)',
      background:'linear-gradient(180deg, transparent, rgba(232,232,0,.025), transparent)',
    }}>
      <h2 style={{
        fontFamily:"'Syne',sans-serif", fontWeight:700,
        fontSize:'clamp(2rem, 5vw, 4rem)',
        lineHeight:1.05, letterSpacing:'-.02em',
        marginBottom:'2.5rem',
      }}>
        ¿Listo para{' '}
        <em style={{ color:'var(--accent)', fontStyle:'italic', fontWeight:400 }}>escalar</em>?
        <br />Hablemos.
      </h2>

      <CTAButton href="mailto:contacto@nuevanet.cl">
        Iniciar proyecto <span style={{ display:'inline-block', transition:'transform .3s' }}>→</span>
      </CTAButton>
    </section>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display:'inline-flex', alignItems:'center', gap:'.8rem',
        padding:'1.1rem 2.4rem',
        background:'var(--accent)',
        color:'var(--bg)',
        fontFamily:"'Space Mono',monospace",
        fontSize:'.75rem', letterSpacing:'.25em',
        textTransform:'uppercase', textDecoration:'none', fontWeight:700,
        position:'relative', overflow:'hidden',
        transition:'all .3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px var(--accent-glow)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
      }}
    >
      {children}
    </a>
  );
}
