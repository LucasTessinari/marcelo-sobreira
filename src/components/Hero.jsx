import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Hero({ whatsappLink, C_LIGHT, C_DARK, C_MID }) {
  const PANEL_BG = "#2A2522";

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: C_MID }}
    >
      {/* BACKGROUND COM CORTE MEIO CIRCULAR (Desktop) */}
      <div
        className="hidden lg:block absolute top-0 right-0 h-full w-[55%] z-0"
        style={{
          backgroundColor: PANEL_BG,
          clipPath: "ellipse(90% 110% at 100% 100%)",
        }}
      />

      {/* BACKGROUND COM CORTE EM DOMO (Mobile) */}
      <div
        className="block lg:hidden absolute bottom-0 left-0 w-full h-[65%] z-0"
        style={{
          backgroundColor: PANEL_BG,
          clipPath: "ellipse(150% 100% at 50% 100%)",
        }}
      />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch min-h-screen">
        {/* Lado Esquerdo - TEXTOS */}
        <motion.div
          className="flex-1 flex flex-col justify-center space-y-8 text-center lg:text-left pt-32 pb-20 lg:pt-32 lg:pb-0 px-4 sm:px-6 lg:pr-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium border self-center lg:self-start"
            style={{
              backgroundColor: "rgb(255 255 255 / 38%)",
              borderColor: "rgb(113 106 98 / 53%)",
              color: "rgb(42, 37, 34)",
            }}
          >
            Odontologia de Excelência
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.12] font-light"
            style={{ color: C_DARK }}
          >
            Resultados Reais <br className="hidden lg:block" />
            <span className="italic" style={{ color: `${C_DARK}80` }}>
              Transformando
            </span>{" "}
            Sorrisos.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
            style={{ color: `${C_DARK}BB` }}
          >
            Tecnologia avançada, conforto e um atendimento personalizado
            totalmente focado na sua saúde bucal e bem-estar.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-sm uppercase tracking-widest font-semibold w-full sm:w-auto shadow-lg"
              style={{
                backgroundColor: C_DARK,
                color: C_LIGHT,
                boxShadow: `0 10px 30px ${C_DARK}30`,
              }}
              /* --- EFEITO PULSANTE (SCALE) --- */
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 1.5, // Tempo de cada pulso (2 segundos)
                repeat: Infinity, // Loop infinito
                ease: "easeInOut", // Transição bem suave nas pontas
              }}
            >
              <Calendar size={18} /> Agendar Consulta
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Lado Direito - IMAGEM E CARD */}
        <motion.div
          className="flex-1 w-full relative flex items-end justify-center lg:justify-end min-h-[500px] lg:min-h-screen"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* AQUI FOI ALTERADO: Empurrado bem mais para a direita com translate-x-20 e xl:translate-x-32 */}
          <div className="relative w-full max-w-[650px] flex justify-center lg:justify-end items-end h-full lg:translate-x-20 xl:translate-x-50">
            {/* Imagem Transparente */}
            <img
              src="/marcelo-inicio.png"
              alt="Dr. Marcelo"
              className="w-[90%] lg:w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-10 relative"
              style={{ maxHeight: "90vh" }}
            />

            {/* AQUI FOI ALTERADO: Card ajustado para -left-24 e xl:-left-32 para manter na divisa das cores */}
            <motion.div
              className="absolute bottom-24 lg:bottom-12 -left-2 lg:-left-12 xl:-left-12 z-20 px-6 py-4 rounded-xl flex items-center gap-4 backdrop-blur-md border"
              style={{
                backgroundColor: "rgb(212 205 198)",
                borderColor: "rgba(255, 255, 255, 0.6)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: C_DARK, color: C_LIGHT }}
              >
                <Award size={22} />
              </div>
              <div>
                <p
                  className="text-base font-bold font-serif leading-none mb-1"
                  style={{ color: C_DARK }}
                >
                  +15 Anos
                </p>
                <p
                  className="text-[10px] tracking-widest uppercase font-semibold"
                  style={{ color: `${C_DARK}90` }}
                >
                  De Experiência
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
