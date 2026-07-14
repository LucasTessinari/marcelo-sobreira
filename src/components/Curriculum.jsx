import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const especializacoes = [
  { ano: '2022', anoFim: 'Presente', titulo: 'Mestrado em Reabilitação Oral', inst: 'Universidade Federal' },
  { ano: '2019', anoFim: '2021', titulo: 'Especialização em Implantodontia', inst: 'Associação Brasileira de Odontologia' },
  { ano: '2014', anoFim: '2018', titulo: 'Graduação em Odontologia', inst: 'Universidade Estadual' },
  { ano: '2022', anoFim: 'Presente', titulo: 'Mestrado em Reabilitação Oral', inst: 'Universidade Federal' },
  { ano: '2019', anoFim: '2021', titulo: 'Especialização em Implantodontia', inst: 'Associação Brasileira de Odontologia' },
  { ano: '2014', anoFim: '2018', titulo: 'Graduação em Odontologia', inst: 'Universidade Estadual' },
  { ano: '2022', anoFim: 'Presente', titulo: 'Mestrado em Reabilitação Oral', inst: 'Universidade Federal' },
  { ano: '2019', anoFim: '2021', titulo: 'Especialização em Implantodontia', inst: 'Associação Brasileira de Odontologia' },
  { ano: '2014', anoFim: '2018', titulo: 'Graduação em Odontologia', inst: 'Universidade Estadual' },
];

export default function Curriculum({ C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="curriculo" className="py-24" style={{ backgroundColor: C_LIGHT }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: `${C_DARK}70` }}>
            Formação Acadêmica
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-3 mb-4" style={{ color: C_DARK }}>
            Trajetória e <span className="italic" style={{ color: `${C_DARK}70` }}>Especializações</span>
          </h2>
          <p className="font-light" style={{ color: `${C_DARK}AA` }}>
            Constante aprimoramento acadêmico para oferecer o que há de mais seguro e moderno na odontologia mundial.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative"
        >
          <div
            className="absolute left-[88px] sm:left-[104px] top-2 bottom-2 w-px"
            style={{ backgroundColor: `${C_DARK}20` }}
          />

          {especializacoes.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0 group"
            >
              <div className="flex-shrink-0 w-[64px] sm:w-[80px] text-right pt-2">
                <span
                  className="block text-sm font-serif leading-tight transition-colors duration-300"
                  style={{ color: C_DARK }}
                >
                  {item.ano}
                </span>
                <span
                  className="block text-[10px] uppercase tracking-wider mt-0.5"
                  style={{ color: `${C_DARK}60` }}
                >
                  {item.anoFim}
                </span>
              </div>

              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
                }}
                className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: C_LIGHT,
                  border: `1.5px solid ${C_MID}90`,
                }}
              >
                <Award size={18} strokeWidth={1.5} style={{ color: C_DARK }} />
              </motion.div>

              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4, transition: { duration: 0.3, ease: "easeOut" } },
                }}
                className="flex-1 pt-2"
              >
                <h4 className="text-lg lg:text-xl font-serif mb-1.5 leading-snug" style={{ color: C_DARK }}>
                  {item.titulo}
                </h4>
                <p className="font-light text-sm" style={{ color: `${C_DARK}AA` }}>
                  {item.inst}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}