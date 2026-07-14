import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function About({ C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: C_LIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: `${C_DARK}70` }}>
              Sobre o Profissional
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight" style={{ color: C_DARK }}>
              Compromisso com a <span className="italic" style={{ color: `${C_DARK}70` }}>sua confiança</span>
            </h2>
            <p className="font-light leading-relaxed text-lg" style={{ color: `${C_DARK}CC` }}>
              Com anos de dedicação exclusiva à odontologia estética e reabilitação oral, meu propósito é devolver a confiança e a saúde através de tratamentos humanizados e de alta tecnologia.
            </p>
            <ul className="space-y-4 pt-6">
              {[
                'Atendimento Humanizado e Individualizado',
                'Tecnologia de Ponta e Equipamentos Modernos',
                'Ambiente Acolhedor e Confortável',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-light" style={{ color: `${C_DARK}DD` }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: C_MID }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm lg:max-w-md rounded-3xl p-12 flex items-center justify-center"
              style={{ backgroundColor: `${C_MID}50` }}
            >
              <img
                src="../public/marcelo-sobre.jpeg"
                alt="Marcelo Sobreira Sobre"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}