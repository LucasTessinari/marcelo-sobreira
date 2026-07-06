import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, Smile, CheckCircle2, Activity, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Treatments({ whatsappLink, C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="tratamentos" className="py-24 lg:py-32" style={{ backgroundColor: C_MID }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20 space-y-4"
        >
          <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: `${C_DARK}70` }}>
            Soluções Completas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light" style={{ color: C_DARK }}>
            Nossos Tratamentos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Sparkles, t: 'Lentes de Contato Dental', d: 'Facetas ultrafinas para um sorriso perfeitamente alinhado e natural.' },
            { icon: ShieldCheck, t: 'Implantes Dentários', d: 'Reabilitação segura e definitiva para substituir dentes perdidos.' },
            { icon: Zap, t: 'Clareamento a Laser', d: 'Técnicas avançadas para dentes mais brancos com segurança.' },
            { icon: Smile, t: 'Ortodontia', d: 'Alinhamento dental utilizando aparelhos modernos e invisíveis.' },
            { icon: Activity, t: 'Endodontia', d: 'Tratamento de canal preciso, rápido e sem dor utilizando tecnologia.' },
            { icon: CheckCircle2, t: 'Harmonização Facial', d: 'Equilíbrio estético da face integrando o sorriso ao seu rosto.' },
          ].map((trat, i) => {
            const Icon = trat.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group flex flex-col p-8 lg:p-10 rounded-2xl transition-all duration-500 cursor-default"
                style={{ backgroundColor: `${C_LIGHT}55`, border: `1px solid ${C_DARK}12` }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = C_LIGHT;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${C_DARK}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = `${C_LIGHT}55`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105" style={{ backgroundColor: `${C_MID}80` }}>
                  <Icon size={26} strokeWidth={1.5} style={{ color: C_DARK }} />
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: C_DARK }}>{trat.t}</h3>
                <p className="font-light leading-relaxed text-sm flex-grow mb-8" style={{ color: `${C_DARK}AA` }}>
                  {trat.d}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all group-hover:gap-4"
                  style={{ color: C_DARK }}
                >
                  Saber Mais <ChevronRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}