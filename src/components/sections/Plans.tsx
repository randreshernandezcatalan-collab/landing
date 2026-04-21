import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'BÁSICO',
    speed: '50 Mbps',
    price: '$299',
    period: '/mes',
    features: [
      'Internet simétrico 50 Mbps',
      'Sin límite de datos',
      'Router WiFi incluido',
      'Soporte telefónico',
      'Instalación gratuita',
    ],
    cta: 'Contratar',
    popular: false,
  },
  {
    name: 'PRO',
    speed: '200 Mbps',
    price: '$499',
    period: '/mes',
    features: [
      'Internet simétrico 200 Mbps',
      'Sin límite de datos',
      'Router WiFi 6 incluido',
      'Soporte prioritario 24/7',
      'Instalación gratuita',
      'Monitoreo de red',
    ],
    cta: 'Contratar',
    popular: true,
  },
  {
    name: 'EMPRESARIAL',
    speed: '1 Gbps',
    price: '$999',
    period: '/mes',
    features: [
      'Internet simétrico 1 Gbps',
      'IP estática fija',
      'Router gestionado',
      'SLA 99.9% garantizado',
      'Soporte dedicado 24/7',
      'Firewall incluido',
      'Informe mensual',
    ],
    cta: 'Consultar',
    popular: false,
  },
];

export function Plans() {
  return (
    <section id="planes" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#E8E800]/30 bg-[#E8E800]/5 rounded-full px-4 py-1.5 mb-6">
            <span className="font-['JetBrains_Mono'] text-xs text-[#E8E800] tracking-widest uppercase">
              Planes y Precios
            </span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            ELIGE TU <span className="text-[#E8E800]">PLAN</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-white/50 text-sm max-w-xl mx-auto">
            Sin contratos de permanencia · Sin letra pequeña
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-sm p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#E8E800]/5 border-[#E8E800]/60 scale-[1.02]'
                  : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-[#E8E800] text-black font-['Orbitron'] font-bold text-[10px] px-4 py-1 rounded-full tracking-widest">
                    <Zap size={10} />
                    MÁS POPULAR
                  </div>
                </div>
              )}

              {/* Plan name */}
              <div className="font-['Orbitron'] font-bold text-xs tracking-widest text-white/50 mb-2">
                {plan.name}
              </div>

              {/* Speed */}
              <div className="font-['Orbitron'] font-black text-[#E8E800] text-3xl glow-yellow mb-1">
                {plan.speed}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-['Orbitron'] font-black text-white text-4xl">
                  {plan.price}
                </span>
                <span className="font-['JetBrains_Mono'] text-white/40 text-sm">
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.popular ? 'bg-[#E8E800]/30' : 'bg-white/10'}`} />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-[#E8E800]' : 'text-white/40'}`}
                    />
                    <span className="font-['JetBrains_Mono'] text-xs text-white/70 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`flex items-center justify-center font-['Orbitron'] font-bold text-xs tracking-widest py-3.5 rounded-sm transition-all duration-200 cursor-pointer ${
                  plan.popular
                    ? 'bg-[#E8E800] text-black hover:bg-yellow-300'
                    : 'border border-white/20 text-white hover:border-[#E8E800]/60 hover:text-[#E8E800]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
