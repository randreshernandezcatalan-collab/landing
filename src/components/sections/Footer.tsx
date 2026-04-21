export function Footer() {
  return (
    <footer style={{
      position:'relative', zIndex:3,
      padding:'3rem',
      display:'flex', justifyContent:'space-between', alignItems:'center',
      fontFamily:"'Space Mono',monospace",
      fontSize:'.7rem', letterSpacing:'.2em', textTransform:'uppercase',
      color:'var(--muted)',
      flexWrap:'wrap', gap:'1rem',
    }}>
      <div>
        <span style={{
          width:6, height:6, borderRadius:'50%',
          background:'var(--accent)', display:'inline-block',
          marginRight:'.5rem',
          boxShadow:'0 0 8px var(--accent-glow)',
        }} />
        nuevanet.cl · Todos los derechos reservados © 2026
      </div>
      <div>Santiago de Chile · contacto@nuevanet.cl</div>
    </footer>
  );
}
