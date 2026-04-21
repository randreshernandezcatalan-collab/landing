import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Gerente TI · Empresa Comercial',
    quote:
      'NuevaNet transformó nuestra infraestructura de red. Cero cortes en 18 meses y velocidades que no teníamos con el proveedor anterior.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    stars: 5,
  },
  {
    name: 'Laura Hernández',
    role: 'Trabajadora remota · Diseñadora',
    quote:
      'Las videollamadas y transferencias de archivos son instantáneas. El soporte técnico llegó a mi casa el mismo día que reporté el problema.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop',
    stars: 5,
  },
  {
    name: 'Roberto García',
    role: 'Dueño · Cibercafé',
    quote:
      'Con el plan empresarial manejo 30 equipos simultáneos sin problemas. La IP fija nos permite ofrecer servicios remotos a nuestros clientes.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#E8E800]/30 bg-[#E8E800]/5 rounded-full px-4 py-1.5 mb-6">
            <span className="font-['JetBrains_Mono'] text-xs text-[#E8E800] tracking-widest uppercase">
              Testimonios
            </span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl text-white">
            LO QUE DICEN{' '}
            <span className="text-[#E8E800]">NUESTROS CLIENTES</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#0a0a0a] border border-white/5 rounded-sm p-6 hover:border-[#E8E800]/20 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-[#E8E800] fill-[#E8E800]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-['JetBrains_Mono'] text-white/70 text-xs leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E8E800]/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="font-['Orbitron'] text-white text-xs font-bold">
                    {t.name}
                  </div>
                  <div className="font-['JetBrains_Mono'] text-white/40 text-[10px]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
