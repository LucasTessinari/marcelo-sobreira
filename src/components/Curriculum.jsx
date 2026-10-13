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
  { ano: '2025', anoFim: '2025', titulo: 'Curso SEPB - Síndrome do Envelhecimento Precoce Bucal', inst: 'Prof. Paulo Vinícius Soares - Cachoeiro de Itapemirim' },
  { ano: '2024', anoFim: '2024', titulo: 'Treinamento Clínico em Resina Composta (Dentes Anteriores e Posteriores)', inst: 'Prof. Bruno Reis - Uberlândia' },
  { ano: '2023', anoFim: '2023', titulo: 'Imersão em Resinas Anteriores - Método ONE', inst: 'Prof. Bruno Reis - Vitória' },
  { ano: '2023', anoFim: '2023', titulo: 'Reabilitação Adesiva de Casos Estéticos e Funcionais', inst: 'Prof. Paulo Vinícius Soares - Vitória' },
  { ano: '2021', anoFim: '2021', titulo: 'Imersão em Placas Oclusais', inst: 'Prof. Roberto Garanhani - Vitória' },
  { ano: '2018', anoFim: '2018', titulo: 'Curso de Laserterapia', inst: 'Profa. Rianne Vilela - Guarapari' },
  { ano: '2012', anoFim: '2012', titulo: 'Especialização em Ortodontia', inst: 'Faculdade Redentor' },
  { ano: '2012', anoFim: '2012', titulo: '18º Congresso Brasileiro de Ortodontia', inst: 'São Paulo' },
  { ano: '2012', anoFim: '2012', titulo: '13º Congresso de Odontologia do Espírito Santo', inst: 'Vitória' },
  { ano: '2010', anoFim: '2010', titulo: 'Formação em Tratamento do Ronco e Apneia do Sono com Aparelhos Orais', inst: 'Rio de Janeiro' },
  { ano: '2010', anoFim: '2010', titulo: '17º Congresso Brasileiro de Ortodontia', inst: 'São Paulo' },
  { ano: '2009', anoFim: '2009', titulo: 'Especialização em Saúde da Família', inst: 'Faculdade Redentor' },
  { ano: '2009', anoFim: '2009', titulo: '12º Congresso de Odontologia do Espírito Santo', inst: 'Vitória' },
  { ano: '2008', anoFim: '2008', titulo: '10º Congresso Internacional de Odontologia de Minas Gerais', inst: 'Belo Horizonte' },
  { ano: '2005', anoFim: '2005', titulo: 'Atualização em Odontologia Estética e Clareamento Dental', inst: 'Vitória' },
  { ano: '2004', anoFim: '2004', titulo: 'Especialização em Docência do Ensino Superior', inst: 'Ferlagos' },
  { ano: '2004', anoFim: '2004', titulo: 'Atualização em Endodontia', inst: 'Instituto Dentalis - Itaperuna' },
  { ano: '2003', anoFim: '2003', titulo: 'Atualização de Odontologia em Saúde Coletiva e PSF', inst: 'UFES' },
  { ano: '2000', anoFim: '2000', titulo: 'Graduação em Odontologia', inst: 'Faculdade de Odontologia de Campos' },
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