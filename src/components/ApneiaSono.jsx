import { motion } from 'framer-motion';
import {
  Moon,
  Stethoscope,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  Volume2,
  Wind,
  Sun,
  Frown,
  Brain,
  BatteryLow,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const sintomas = [
  { icon: Volume2, t: 'Ronco alto e frequente durante a noite' },
  { icon: Wind, t: 'Pausas na respiração observadas por quem dorme ao lado' },
  { icon: Sun, t: 'Sonolência excessiva durante o dia' },
  { icon: Frown, t: 'Cansaço, irritabilidade e dificuldade de concentração' },
  { icon: Brain, t: 'Dores de cabeça ao despertar' },
  { icon: BatteryLow, t: 'Sensação de sono não reparador, mesmo após dormir bem' },
];

export default function ApneiaSono({ whatsappLink, C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="apneia" className="py-24 lg:py-32" style={{ backgroundColor: C_LIGHT }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <span className="uppercase tracking-widest text-xs font-semibold" style={{ color: `${C_DARK}70` }}>
                Especialidade em Odontologia do Sono
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight" style={{ color: C_DARK }}>
                Apneia do sono também se trata no consultório odontológico.
              </h2>
              <p className="font-light leading-relaxed text-lg" style={{ color: `${C_DARK}CC` }}>
                A Apneia Obstrutiva do Sono (AOS) ocorre quando os tecidos da garganta relaxam
                e bloqueiam parcial ou totalmente a passagem de ar durante o sono, interrompendo
                a respiração repetidas vezes por noite. O cirurgião-dentista especializado em
                sono atua no diagnóstico colaborativo e na confecção de dispositivos intraorais
                que reabrem as vias aéreas sem a necessidade de cirurgia.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold group"
                style={{ color: C_DARK }}
              >
                Agendar avaliação
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div
              className="rounded-2xl p-6 lg:p-7 border"
              style={{ backgroundColor: `${C_MID}30`, borderColor: `${C_DARK}12` }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${C_MID}90` }}>
                  <AlertCircle size={18} strokeWidth={1.5} style={{ color: C_DARK }} />
                </div>
                <h3 className="text-base font-serif" style={{ color: C_DARK }}>
                  Sinais de alerta
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sintomas.map((s, i) => {
                  const SIcon = s.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ backgroundColor: C_LIGHT }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${C_DARK}10` }}
                      >
                        <SIcon size={15} strokeWidth={1.5} style={{ color: C_DARK }} />
                      </div>
                      <span className="text-xs font-light leading-snug" style={{ color: `${C_DARK}B0` }}>
                        {s.t}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl p-4"
            style={{ backgroundColor: `${C_MID}30` }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden group mx-auto max-w-md"
              style={{ boxShadow: `0 20px 45px ${C_DARK}25` }}
            >
              <div className="aspect-[4/5]">
                <img
                  src="/ronco-casal.png"
                  alt="Homem roncando enquanto esposa acordada sente o incômodo do ronco"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "saturate(0.65) contrast(0.95) brightness(0.94) sepia(0.12)" }}
                />
              </div>

              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background: `linear-gradient(160deg, ${C_MID}55 0%, ${C_DARK}45 100%)`
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, ${C_DARK}90 100%)`
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ color: C_LIGHT }}>
                <span className="uppercase tracking-widest text-[10px] font-semibold opacity-80">
                  Impacto no dia a dia
                </span>
                <p className="font-serif text-lg leading-snug mt-2">
                  O ronco não afeta só quem dorme — afeta quem está ao lado.
                </p>
              </div>

              <div
                className="absolute top-5 left-5 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md"
                style={{ backgroundColor: `${C_LIGHT}25`, border: `1px solid ${C_LIGHT}35` }}
              >
                <Moon size={18} strokeWidth={1.5} style={{ color: C_LIGHT }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {[
            {
              icon: Stethoscope,
              t: 'Diagnóstico Colaborativo',
              d: 'A investigação inicia com uma avaliação clínica das vias aéreas e estruturas orofaciais. O diagnóstico definitivo é confirmado por polissonografia, realizada em parceria com médicos do sono.'
            },
            {
              icon: ShieldCheck,
              t: 'Placa de Avanço Mandibular',
              d: 'Dispositivo intraoral personalizado que reposiciona a mandíbula levemente para frente durante o sono, ampliando o espaço da faringe e reduzindo ronco e episódios de apneia.'
            },
            {
              icon: Moon,
              t: 'Acompanhamento Contínuo',
              d: 'Ajustes periódicos garantem conforto e eficácia do dispositivo ao longo do tratamento, com reavaliações para acompanhar a evolução da qualidade do sono do paciente.'
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest: { y: 0, boxShadow: 'none' },
                  hover: { y: -8, boxShadow: `0 20px 45px ${C_DARK}1F`, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{ backgroundColor: C_LIGHT, border: `1px solid ${C_DARK}12` }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.5 } } }}
                  style={{ background: `radial-gradient(circle at 25% 20%, ${C_MID}55, transparent 60%)` }}
                />
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: `${C_MID}80` }}
                  variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -8, scale: 1.12, transition: { duration: 0.45 } } }}
                >
                  <Icon size={24} strokeWidth={1.5} style={{ color: C_DARK }} />
                </motion.div>
                <h3 className="text-lg font-serif mb-2 relative z-10" style={{ color: C_DARK }}>
                  {item.t}
                </h3>
                <p className="text-sm font-light leading-relaxed relative z-10" style={{ color: `${C_DARK}AA` }}>
                  {item.d}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}