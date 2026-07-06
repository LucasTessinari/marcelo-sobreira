import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ApneiaSono({ C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="apneia" className="py-24 lg:py-32" style={{ backgroundColor: C_LIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: `${C_DARK}70` }}>
              Apneia e Sono
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight" style={{ color: C_DARK }}>
              Cuidado especializado para respirar melhor e dormir com qualidade.
            </h2>
            <p className="font-light leading-relaxed text-lg" style={{ color: `${C_DARK}CC` }}>
              Aqui entrará a apresentação da área de apneia e sono, com foco em diagnóstico, acompanhamento e soluções personalizadas para melhorar a saúde e o bem-estar do paciente.
            </p>
          </div>

          <div className="rounded-3xl p-10 border" style={{ backgroundColor: `${C_MID}30`, borderColor: `${C_DARK}12` }}>
            <h3 className="text-xl font-serif mb-3" style={{ color: C_DARK }}>
              Bloco reservado
            </h3>
            <p className="font-light text-sm" style={{ color: `${C_DARK}AA` }}>
              Depois podemos detalhar sintomas, exames e tratamentos aqui, mantendo o mesmo visual do restante do site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}