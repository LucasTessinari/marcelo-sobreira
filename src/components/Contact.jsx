import { motion } from 'framer-motion';
import { MessageCircle, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact({ whatsappLink, C_LIGHT, C_DARK, C_MID }) {
  return (
    <section id="contato" className="py-24 text-center" style={{ backgroundColor: C_DARK }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
          <MessageCircle size={48} strokeWidth={1} className="mx-auto" style={{ color: C_MID }} />
          <h2 className="text-4xl md:text-5xl font-serif font-light" style={{ color: C_LIGHT }}>
            Pronto para transformar<br />o seu sorriso?
          </h2>
          <p className="font-light text-lg" style={{ color: `${C_LIGHT}BB` }}>
            Fale diretamente com nossa recepção pelo WhatsApp, tire suas dúvidas e escolha o melhor horário para sua avaliação.
          </p>
          <div className="pt-6 flex justify-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              animate="rest"
              className="relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg text-sm uppercase tracking-widest font-semibold w-full sm:w-auto overflow-hidden"
              style={{ backgroundColor: C_MID, color: C_DARK }}
              variants={{
                rest: { scale: 1, boxShadow: `0 8px 32px ${C_DARK}60` },
                hover: {
                  scale: 1.05,
                  boxShadow: `0 14px 40px ${C_DARK}80`,
                  transition: { duration: 0.35, ease: "easeOut" },
                },
              }}
            >
              <motion.span
                className="absolute inset-0"
                variants={{
                  rest: { x: "-120%" },
                  hover: { x: "120%", transition: { duration: 0.7, ease: "easeInOut" } },
                }}
                style={{
                  background: `linear-gradient(115deg, transparent 30%, ${C_DARK}25 50%, transparent 70%)`,
                }}
              />
              <MessageCircle size={18} className="relative z-10" />
              <span className="relative z-10">Conversar no WhatsApp</span>
            </motion.a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 pt-16 font-light text-sm" style={{ color: `${C_LIGHT}70` }}>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Av. Nossa Sra. da Penha, 1495 - Centro, Alegre - ES
            </div>
            <div className="hidden lg:block w-1 h-1 rounded-full" style={{ backgroundColor: `${C_LIGHT}40` }} />
            <div>contato@drmarcelo.com.br</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}