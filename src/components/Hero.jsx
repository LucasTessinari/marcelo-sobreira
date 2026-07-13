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
      className="relative w-full overflow-hidden pt-24 lg:pt-0"
      style={{ backgroundColor: C_MID }}
    >
      <div
        className="hidden lg:block absolute top-0 right-0 h-full w-[55%] z-0"
        style={{
          backgroundColor: PANEL_BG,
          clipPath: "ellipse(90% 110% at 100% 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-[calc(100vh-96px)] lg:min-h-screen px-4 sm:px-6 lg:px-0">
        {/* MOBILE */}
        <div className="lg:hidden pt-6 pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative overflow-hidden rounded-[2rem] border px-5 pt-6 pb-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
              borderColor: "rgba(42, 37, 34, 0.08)",
              boxShadow: "0 20px 50px rgba(42, 37, 34, 0.10)",
            }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium border"
              style={{
                backgroundColor: "rgb(255 255 255 / 38%)",
                borderColor: "rgb(113 106 98 / 53%)",
                color: "rgb(42, 37, 34)",
              }}
            >
              Odontologia de Excelência
            </motion.div>

            <div className="mt-6 flex items-start justify-between gap-3">
              <motion.div variants={fadeInUp} className="w-[56%] min-w-0">
                <h1
                  className="text-[2.35rem] leading-[0.96] font-serif font-light"
                  style={{ color: C_DARK }}
                >
                  Resultados Reais{" "}
                  <span className="italic" style={{ color: `${C_DARK}80` }}>
                    Transformando
                  </span>{" "}
                  Sorrisos.
                </h1>

                <p
                  className="mt-5 text-[14px] leading-[1.8] font-light"
                  style={{ color: `${C_DARK}BB` }}
                >
                  Tecnologia avançada, conforto e um atendimento personalizado
                  focado na sua saúde bucal.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18, y: 18 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                className="w-[44%] flex justify-end self-end"
              >
                <img
                  src="/marcelo-inicio.png"
                  alt="Dr. Marcelo"
                  className="w-full h-auto object-contain object-bottom drop-shadow-[0_18px_35px_rgba(42,37,34,0.28)]"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-4 rounded-xl text-[10px] uppercase tracking-[0.16em] font-semibold shadow-lg max-w-full"
                style={{
                  backgroundColor: C_DARK,
                  color: C_LIGHT,
                  boxShadow: `0 10px 30px ${C_DARK}28`,
                }}
              >
                <Calendar size={15} />
                Agendar Consulta
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 inline-flex px-4 py-3 rounded-2xl items-center gap-3 backdrop-blur-md border"
              style={{
                backgroundColor: "rgba(212, 205, 198, 0.92)",
                borderColor: "rgba(255, 255, 255, 0.55)",
                boxShadow: "0 16px 30px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: C_DARK, color: C_LIGHT }}
              >
                <Award size={18} />
              </div>
              <div>
                <p
                  className="text-sm font-bold font-serif leading-none mb-1"
                  style={{ color: C_DARK }}
                >
                  +15 Anos
                </p>
                <p
                  className="text-[9px] tracking-[0.18em] uppercase font-semibold"
                  style={{ color: `${C_DARK}90` }}
                >
                  De Experiência
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center min-h-screen">
          <motion.div
            className="flex-1 flex flex-col justify-center space-y-8 text-left pr-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium border self-start"
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
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.08] font-light"
              style={{ color: C_DARK }}
            >
              Resultados Reais <br />
              <span className="italic" style={{ color: `${C_DARK}80` }}>
                Transformando
              </span>{" "}
              Sorrisos.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl leading-relaxed max-w-lg font-light"
              style={{ color: `${C_DARK}BB` }}
            >
              Tecnologia avançada, conforto e um atendimento personalizado
              totalmente focado na sua saúde bucal e bem-estar.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-4 flex">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-sm uppercase tracking-widest font-semibold shadow-lg"
                style={{
                  backgroundColor: C_DARK,
                  color: C_LIGHT,
                  boxShadow: `0 10px 30px ${C_DARK}30`,
                }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Calendar size={18} />
                Agendar Consulta
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative flex items-end justify-end min-h-screen"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[700px] flex justify-end items-end h-full translate-x-20 xl:translate-x-[10rem]">
              <img
                src="/marcelo-inicio.png"
                alt="Dr. Marcelo"
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-10 relative max-h-[90vh]"
              />

              <motion.div
                className="absolute bottom-12 -left-12 z-20 px-6 py-4 rounded-xl flex items-center gap-4 backdrop-blur-md border"
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
      </div>
    </section>
  );
}