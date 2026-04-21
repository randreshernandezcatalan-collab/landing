'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="relative py-24 px-6">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E800]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E8E800]/30 bg-[#E8E800]/5 rounded-full px-4 py-1.5 mb-6">
              <span className="font-['JetBrains_Mono'] text-xs text-[#E8E800] tracking-widest uppercase">
                Contacto
              </span>
            </div>
            <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              CONÉCTATE{' '}
              <span className="text-[#E8E800]">CON</span>{' '}
              NOSOTROS
            </h2>
            <p className="font-['JetBrains_Mono'] text-white/50 text-sm leading-relaxed mb-10 max-w-md">
              ¿Listo para disfrutar de internet de alta velocidad?
              Contáctanos y un asesor te ayudará a elegir el mejor plan.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Phone,
                  label: 'Teléfono',
                  value: '+52 (555) 123-4567',
                  href: 'tel:+525551234567',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'contacto@nuevanet.mx',
                  href: 'mailto:contacto@nuevanet.mx',
                },
                {
                  icon: MapPin,
                  label: 'Oficina',
                  value: 'Av. Innovación 100, Ciudad',
                  href: '#',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <div className="p-2.5 bg-[#E8E800]/10 rounded-sm group-hover:bg-[#E8E800]/20 transition-colors duration-200">
                    <Icon size={18} className="text-[#E8E800]" />
                  </div>
                  <div>
                    <div className="font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase">
                      {label}
                    </div>
                    <div className="font-['JetBrains_Mono'] text-white/80 text-sm group-hover:text-white transition-colors duration-200">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={48} className="text-[#E8E800] mb-4" />
                <h3 className="font-['Orbitron'] font-bold text-white text-lg mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="font-['JetBrains_Mono'] text-white/50 text-sm">
                  Un asesor se comunicará contigo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-['Orbitron'] font-bold text-white text-sm tracking-widest mb-2">
                  SOLICITA INFORMACIÓN
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-['JetBrains_Mono'] text-[10px] text-white/50 tracking-widest uppercase block mb-1.5"
                    >
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 font-['JetBrains_Mono'] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#E8E800]/60 transition-colors duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="font-['JetBrains_Mono'] text-[10px] text-white/50 tracking-widest uppercase block mb-1.5"
                    >
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 font-['JetBrains_Mono'] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#E8E800]/60 transition-colors duration-200"
                      placeholder="+52 555 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-['JetBrains_Mono'] text-[10px] text-white/50 tracking-widest uppercase block mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 font-['JetBrains_Mono'] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#E8E800]/60 transition-colors duration-200"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="plan"
                    className="font-['JetBrains_Mono'] text-[10px] text-white/50 tracking-widest uppercase block mb-1.5"
                  >
                    Plan de interés
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 font-['JetBrains_Mono'] text-sm text-white focus:outline-none focus:border-[#E8E800]/60 transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Selecciona un plan</option>
                    <option value="basico">Básico — 50 Mbps</option>
                    <option value="pro">Pro — 200 Mbps</option>
                    <option value="empresarial">Empresarial — 1 Gbps</option>
                    <option value="otro">Otro / Consulta</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-['JetBrains_Mono'] text-[10px] text-white/50 tracking-widest uppercase block mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 font-['JetBrains_Mono'] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#E8E800]/60 transition-colors duration-200 resize-none"
                    placeholder="¿Algo más que quieras contarnos?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-3 bg-[#E8E800] text-black font-['Orbitron'] font-bold text-xs tracking-widest py-4 rounded-sm hover:bg-yellow-300 disabled:opacity-60 transition-all duration-200 cursor-pointer"
                >
                  {loading ? (
                    'ENVIANDO...'
                  ) : (
                    <>
                      ENVIAR SOLICITUD
                      <Send size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
