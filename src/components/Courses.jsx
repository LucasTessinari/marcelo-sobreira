import { motion } from 'framer-motion';
import { GraduationCap, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Courses({ whatsappLink, C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="cursos" className="py-24 lg:py-32" style={{ backgroundColor: C_MID }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20 space-y-4"
        >
          <div className="flex justify-center mb-6">
            <GraduationCap size={40} strokeWidth={1} style={{ color: `${C_DARK}50` }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light" style={{ color: C_DARK }}>
            Cursos e Treinamentos
          </h2>
          <p className="font-light max-w-2xl mx-auto" style={{ color: `${C_DARK}AA` }}>
            Capacitações avançadas ministradas para profissionais da odontologia que buscam evolução técnica e excelência clínica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { nome: 'Imersão em Resinas Compostas', detalhes: 'Teórico e Clínico (Módulos de Fim de Semana)' },
            { nome: 'Workshop Lentes de Contato', detalhes: 'Hands-on com pacientes reais' },
            { nome: 'Atualização em Cirurgia Guiada', detalhes: 'Planejamento digital e execução' },
          ].map((curso, i) => (
            <motion.div
              key={i}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 lg:p-8 rounded-2xl relative overflow-hidden"
              style={{ backgroundColor: C_LIGHT, border: `1px solid ${C_DARK}12` }}
              variants={{
                rest: { y: 0, boxShadow: 'none' },
                hover: {
                  y: -6,
                  boxShadow: `0 16px 40px ${C_DARK}1F`,
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
                  background: `radial-gradient(circle at 20% 30%, ${C_MID}55, transparent 60%)`
                }}
              />

              <motion.div
                className="relative z-10"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                <h4 className="font-serif text-lg mb-1" style={{ color: C_DARK }}>
                  {curso.nome}
                </h4>
                <p className="text-sm font-light" style={{ color: `${C_DARK}AA` }}>
                  {curso.detalhes}
                </p>
              </motion.div>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full flex-shrink-0 self-start sm:self-auto relative z-10"
                style={{ backgroundColor: `${C_DARK}15`, color: C_DARK }}
                variants={{
                  rest: { backgroundColor: `${C_DARK}15`, color: C_DARK, rotate: 0, scale: 1 },
                  hover: {
                    backgroundColor: C_DARK,
                    color: C_LIGHT,
                    rotate: 90,
                    scale: 1.1,
                    transition: { duration: 0.45, ease: "easeOut" }
                  }
                }}
              >
                <ChevronRight size={18} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}