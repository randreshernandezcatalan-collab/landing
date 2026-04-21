import Image from 'next/image';
import { MapPin, Signal, ArrowRight } from 'lucide-react';

const zones = [
  { name: 'Zona Centro', status: 'Disponible', color: '#E8E800' },
  { name: 'Zona Norte', status: 'Disponible', color: '#E8E800' },
  { name: 'Zona Sur', status: 'Disponible', color: '#E8E800' },
  { name: 'Zona Este', status: 'Próximamente', color: '#555555' },
  { name: 'Zona Oeste', status: 'Próximamente', color: '#555555' },
  { name: 'Zona Rural', status: 'En evaluación', color: '#333333' },
];

export function Coverage() {
  return (
    <section id="cobertura" className="relative py-24 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
          alt="Network infrastructure"
          fill
          className="object-cover opacity-8"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E8E800]/30 bg-[#E8E800]/5 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={12} className="text-[#E8E800]" />
              <span className="font-['JetBrains_Mono'] text-xs text-[#E8E800] tracking-widest uppercase">
                Cobertura
              </span>
            </div>

            <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              NUESTRA{' '}
              <span className="text-[#E8E800] block">RED EN TU</span>
              CIUDAD
            </h2>

            <p className="font-['JetBrains_Mono'] text-white/50 text-sm leading-relaxed mb-8 max-w-md">
              Expandimos nuestra red constantemente para llevar internet
              de alta velocidad a más hogares y empresas. Consulta la
              disponibilidad en tu zona.
            </p>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 font-['Orbitron'] text-xs font-bold text-[#E8E800] tracking-widest border-b border-[#E8E800]/40 pb-1 hover:border-[#E8E800] transition-colors duration-200 cursor-pointer"
            >
              VERIFICAR MI COBERTURA
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Right — Coverage zones */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {zones.map((zone) => (
                <div
                  key={zone.name}
                  className="flex items-center gap-3 bg-[#0a0a0a]/80 border border-white/5 rounded-sm p-4"
                >
                  <Signal
                    size={16}
                    style={{ color: zone.color }}
                    className="flex-shrink-0"
                  />
                  <div>
                    <div className="font-['Orbitron'] text-white text-xs font-bold tracking-wide">
                      {zone.name}
                    </div>
                    <div
                      className="font-['JetBrains_Mono'] text-[10px] tracking-wider"
                      style={{ color: zone.color }}
                    >
                      {zone.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Network infrastructure image */}
            <div className="mt-6 relative rounded-sm overflow-hidden border border-white/10 h-48">
              <Image
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80"
                alt="NuevaNet network infrastructure fiber optic"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-['Orbitron'] text-xs text-[#E8E800] tracking-widest">
                  FIBRA ÓPTICA · ÚLTIMA MILLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
