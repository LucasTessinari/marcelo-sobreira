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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 lg:p-8 rounded-2xl transition-all duration-300"
              style={{ backgroundColor: `${C_LIGHT}55`, border: `1px solid ${C_DARK}12` }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = C_LIGHT;
                e.currentTarget.style.boxShadow = `0 8px 32px ${C_DARK}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = `${C_LIGHT}55`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <h4 className="font-serif text-lg mb-1" style={{ color: C_DARK }}>
                  {curso.nome}
                </h4>
                <p className="text-sm font-light" style={{ color: `${C_DARK}AA` }}>
                  {curso.detalhes}
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 self-start sm:self-auto"
                style={{ backgroundColor: `${C_DARK}15`, color: C_DARK }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = C_DARK;
                  e.currentTarget.style.color = C_LIGHT;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = `${C_DARK}15`;
                  e.currentTarget.style.color = C_DARK;
                }}
              >
                <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}