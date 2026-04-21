'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros',  href: '#nosotros'  },
  { label: 'Contacto',  href: '#contacto'  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10,
        padding: '1.8rem 3rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: "'Space Mono', monospace",
        fontSize: '.75rem',
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        mixBlendMode: 'difference',
      }}
    >
      {/* Brand */}
      <div style={{ display:'flex', alignItems:'center', gap:'.6rem', color:'#fff', fontWeight:700 }}>
        <span style={{
          width:8, height:8, borderRadius:'50%',
          background:'var(--accent)',
          boxShadow:'0 0 12px var(--accent-glow)',
          display:'inline-block',
          animation:'pulse 2s ease-in-out infinite',
        }} />
        NUEVANET / CL
      </div>

      {/* Desktop links */}
      <ul style={{ listStyle:'none', display:'flex', gap:'2.5rem' }} className="hidden md:flex">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              color:'#fff', textDecoration:'none', opacity:.7,
              transition:'opacity .3s ease', letterSpacing:'.15em',
            }}
              onMouseEnter={e=>(e.currentTarget.style.opacity='1')}
              onMouseLeave={e=>(e.currentTarget.style.opacity='.7')}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Status */}
      <div style={{ color:'#fff', opacity:.6 }} className="hidden md:block">
        SYS · ONLINE
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
        style={{ color:'#fff', background:'none', border:'none', cursor:'pointer' }}
        aria-label="Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position:'fixed', top:0, left:0, right:0, bottom:0,
          background:'rgba(3,7,18,.97)',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          gap:'2.5rem', zIndex:50,
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{ position:'absolute', top:'1.5rem', right:'1.5rem', color:'#fff', background:'none', border:'none', cursor:'pointer' }}
          ><X size={24} /></button>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color:'#fff', textDecoration:'none', fontFamily:"'Space Mono',monospace",
              fontSize:'1.2rem', letterSpacing:'.2em', textTransform:'uppercase',
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
