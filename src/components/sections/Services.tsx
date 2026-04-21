'use client';
const services = [
  { num:'01', icon:'◆', title:'Cableado Estructurado',  desc:'Diseño, instalación y certificación de redes de datos y voz. UTP CAT6/6A y fibra óptica.' },
  { num:'02', icon:'◈', title:'Redes Wireless',          desc:'Site surveys y despliegues WiFi 6/6E empresariales. Cobertura predecible, roaming y mesh.' },
  { num:'03', icon:'◉', title:'Telefonía VoIP',           desc:'Centrales IP, troncales SIP, IVR y grabación. Integración con tu CRM o ERP actual.' },
  { num:'04', icon:'▲', title:'Ciberseguridad',           desc:'Firewalls NGFW, EDR, MFA y cumplimiento normativo. Protege lo que mueve tu negocio.' },
  { num:'05', icon:'✕', title:'Pentesting & SOC',         desc:'Pruebas de penetración y monitoreo 24/7 desde nuestro Security Operations Center.' },
  { num:'06', icon:'▣', title:'Redes & Conectividad',     desc:'Switching, routing, SD-WAN y VPN multisitio. Arquitecturas redundantes y monitoreadas.' },
];

export function Services() {
  return (
    <section id="servicios" style={{
      position:'relative', zIndex:3,
      padding:'8rem 3rem 6rem',
      maxWidth:1400, margin:'0 auto',
    }}>
      {/* Header */}
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem',
        alignItems:'end', marginBottom:'4rem',
        paddingBottom:'2rem', borderBottom:'1px solid var(--line)',
      }}
        className="services-head"
      >
        <div>
          <div style={{
            fontFamily:"'Space Mono',monospace", fontSize:'.7rem',
            letterSpacing:'.3em', color:'var(--accent)', marginBottom:'.8rem',
          }}>
            — 01 / SERVICIOS
          </div>
          <h2 style={{
            fontFamily:"'Syne',sans-serif", fontWeight:700,
            fontSize:'clamp(2rem, 4.5vw, 3.6rem)', lineHeight:1.05,
            letterSpacing:'-.02em',
          }}>
            Infraestructura <em style={{ color:'var(--accent)', fontStyle:'italic', fontWeight:400 }}>digital</em>
            <br />sin puntos débiles.
          </h2>
        </div>
        <p style={{
          color:'var(--muted)', fontSize:'1rem', lineHeight:1.6,
          maxWidth:'42ch', justifySelf:'end',
        }}>
          Diseñamos, implementamos y mantenemos la columna vertebral tecnológica de tu empresa.
          Desde redes empresariales hasta soluciones cloud de alto rendimiento.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(3, 1fr)',
        gap:1, background:'var(--line)',
        border:'1px solid var(--line)',
      }}
        className="svc-grid"
      >
        {services.map(s => (
          <ServiceCard key={s.num} {...s} />
        ))}
      </div>

      <style>{`
        @media (max-width:900px) {
          .services-head { grid-template-columns:1fr !important; gap:1.5rem !important; }
          .services-head p { justify-self:start !important; }
          .svc-grid { grid-template-columns:1fr 1fr !important; }
        }
        @media (max-width:600px) {
          .svc-grid { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ num, icon, title, desc }: { num:string; icon:string; title:string; desc:string }) {
  return (
    <div
      style={{
        background:'var(--bg)', padding:'2.5rem 2rem',
        position:'relative', cursor:'pointer',
        transition:'background .4s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.background='#0a1000')}
      onMouseLeave={e => (e.currentTarget.style.background='var(--bg)')}
    >
      {/* Tag */}
      <span style={{
        position:'absolute', top:'1.5rem', right:'1.5rem',
        fontFamily:"'Space Mono',monospace", fontSize:'.6rem',
        letterSpacing:'.2em', color:'var(--muted)', opacity:.5,
      }}>{num}</span>

      {/* Icon */}
      <div style={{
        width:40, height:40,
        border:'1px solid var(--accent)',
        color:'var(--accent)',
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:'2rem',
        fontFamily:"'Space Mono',monospace", fontSize:'.75rem',
        position:'relative',
      }}>
        {icon}
        <span style={{
          position:'absolute', top:-3, right:-3,
          width:6, height:6, background:'var(--accent)',
          boxShadow:'0 0 8px var(--accent-glow)',
        }} />
      </div>

      <h3 style={{
        fontFamily:"'Syne',sans-serif", fontWeight:600,
        fontSize:'1.15rem', marginBottom:'.8rem', letterSpacing:'-.01em',
      }}>{title}</h3>
      <p style={{ color:'var(--muted)', fontSize:'.85rem', lineHeight:1.55 }}>{desc}</p>
    </div>
  );
}
