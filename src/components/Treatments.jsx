import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, Smile, CheckCircle2, Activity, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: -8, scale: 1.12, transition: { duration: 0.45, ease: "easeOut" } }
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 6, transition: { duration: 0.4, ease: "easeOut" } }
};

const underlineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } }
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
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group flex flex-col p-8 lg:p-10 rounded-2xl cursor-default relative overflow-hidden"
                style={{ backgroundColor: C_LIGHT, border: `1px solid ${C_DARK}12` }}
                variants={{
                  rest: { y: 0, boxShadow: 'none' },
                  hover: {
                    y: -8,
                    boxShadow: `0 20px 45px ${C_DARK}22`,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1, transition: { duration: 0.5 } }
                  }}
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${C_MID}55, transparent 60%)`
                  }}
                />

                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: `${C_MID}80` }}
                  variants={iconVariants}
                >
                  <Icon size={26} strokeWidth={1.5} style={{ color: C_DARK }} />
                </motion.div>

                <motion.h3
                  className="text-xl font-serif mb-3 relative z-10"
                  style={{ color: C_DARK }}
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 4, transition: { duration: 0.4, ease: "easeOut" } }
                  }}
                >
                  {trat.t}
                </motion.h3>

                <p className="font-light leading-relaxed text-sm flex-grow mb-8 relative z-10" style={{ color: `${C_DARK}AA` }}>
                  {trat.d}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 relative z-10 w-fit"
                  style={{ color: C_DARK }}
                >
                  <span className="relative">
                    Saber Mais
                    <motion.span
                      className="absolute left-0 -bottom-1 h-[1.5px] w-full origin-left"
                      style={{ backgroundColor: C_DARK }}
                      variants={underlineVariants}
                    />
                  </span>
                  <motion.span variants={arrowVariants} className="flex">
                    <ChevronRight size={14} />
                  </motion.span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}