import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Curriculum({ C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="curriculo" className="py-24" style={{ backgroundColor: C_LIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4" style={{ color: C_DARK }}>
            Trajetória e <span className="italic" style={{ color: `${C_DARK}70` }}>Especializações</span>
          </h2>
          <p className="font-light max-w-2xl" style={{ color: `${C_DARK}AA` }}>
            Constante aprimoramento acadêmico para oferecer o que há de mais seguro e moderno na odontologia mundial.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-12"
        >
          {[
            { ano: '2022 - Presente', titulo: 'Mestrado em Reabilitação Oral', inst: 'Universidade Federal' },
            { ano: '2019 - 2021', titulo: 'Especialização em Implantodontia', inst: 'Associação Brasileira de Odontologia' },
            { ano: '2014 - 2018', titulo: 'Graduação em Odontologia', inst: 'Universidade Estadual' },
            { ano: '2022 - Presente', titulo: 'Mestrado em Reabilitação Oral', inst: 'Universidade Federal' },
            { ano: '2019 - 2021', titulo: 'Especialização em Implantodontia', inst: 'Associação Brasileira de Odontologia' },
            { ano: '2014 - 2018', titulo: 'Graduação em Odontologia', inst: 'Universidade Estadual' },
            { ano: '2022 - Presente', titulo: 'Mestrado em Reabilitação Oral', inst: 'Universidade Federal' },
            { ano: '2019 - 2021', titulo: 'Especialização em Implantodontia', inst: 'Associação Brasileira de Odontologia' },
            { ano: '2014 - 2018', titulo: 'Graduação em Odontologia', inst: 'Universidade Estadual' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative pl-6 ml-2 mb-10 break-inside-avoid inline-block w-full border-l"
              style={{ borderColor: C_MID }}
            >
              <div className="absolute -left-[18px] p-1 rounded-full" style={{ backgroundColor: C_LIGHT }}>
                <Award size={16} style={{ color: C_MID }} />
              </div>
              <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: `${C_DARK}70` }}>
                {item.ano}
              </span>
              <h4 className="text-lg lg:text-xl font-serif mt-2 mb-1" style={{ color: C_DARK }}>
                {item.titulo}
              </h4>
              <p className="font-light text-sm" style={{ color: `${C_DARK}AA` }}>
                {item.inst}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}