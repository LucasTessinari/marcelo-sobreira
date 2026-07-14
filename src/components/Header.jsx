import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Header({
  menuItems,
  whatsappLink,
  isMenuOpen,
  setIsMenuOpen,
  C_LIGHT,
  C_DARK,
}) {
  const TOPBAR_BG = "#2A2522";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-lg flex flex-col transition-shadow duration-300"
      style={{
        backgroundColor: `${C_LIGHT}F5`,
        boxShadow: scrolled ? `0 8px 30px ${C_DARK}18` : `0 0px 0px ${C_DARK}00`,
      }}
    >
      {/* 
        --- FAIXA SUPERIOR (TOP BAR) --- 
      */}
      <div className="w-full" style={{ backgroundColor: TOPBAR_BG }}>
        <div className="max-w-7xl mx-auto text-white text-[11px] lg:text-xs font-light py-2.5 px-4 sm:px-6 lg:px-16 xl:px-20 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <MapPin size={14} />
              <span className="hidden sm:inline tracking-wide">
                Av. Nossa Sra. da Penha, 1495 - Centro, Alegre - ES
              </span>
              <span className="sm:hidden tracking-wide">Alegre, ES</span>
            </div>
            <a
              href="tel:+5511999999999"
              className="hidden md:flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity tracking-wide"
            >
              <Phone size={13} />
              (11) 99999-9999
            </a>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${C_LIGHT}18` }}
              aria-label="Instagram"
            >
              <FaInstagram  size={13} strokeWidth={1.8} />
            </motion.a>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${C_LIGHT}18` }}
              aria-label="WhatsApp"
            >
              <MessageCircle size={13} strokeWidth={1.8} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* 
        --- HEADER PRINCIPAL --- 
      */}
      <div
        className="w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 border-b"
        style={{ borderColor: `${C_DARK}12` }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 lg:h-24 w-full">

          <div className="flex-shrink-0 w-48 lg:w-64 flex items-center">
            <img
              src="/png-preto.png"
              alt="Logo Marcelo"
              className="w-full h-auto object-contain mix-blend-multiply opacity-90"
            />
          </div>

          <div className="hidden lg:flex justify-end items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 text-sm uppercase tracking-[0.15em] font-bold transition-colors duration-300 opacity-70 hover:opacity-100 group whitespace-nowrap"
                style={{ color: C_DARK }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                  style={{ backgroundColor: C_DARK }}
                />
              </a>
            ))}

            <div className="w-px h-6" style={{ backgroundColor: `${C_DARK}18` }} />

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              animate="rest"
              className="relative flex items-center gap-2 px-6 py-3 rounded-lg text-sm uppercase tracking-widest font-semibold whitespace-nowrap overflow-hidden"
              style={{
                backgroundColor: C_DARK,
                color: C_LIGHT,
                border: `1px solid ${C_DARK}`,
              }}
              variants={{
                rest: { scale: 1, boxShadow: `0 8px 20px ${C_DARK}25` },
                hover: {
                  scale: 1.05,
                  boxShadow: `0 14px 35px ${C_DARK}45`,
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
                  background: `linear-gradient(115deg, transparent 30%, ${C_LIGHT}35 50%, transparent 70%)`,
                }}
              />
              <MessageCircle size={15} className="relative z-10" />
              <span className="relative z-10">Agendar Consulta</span>
            </motion.a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: C_DARK }}
              className="p-2"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X size={28} strokeWidth={1.5} />
              ) : (
                <Menu size={28} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden border-t shadow-xl overflow-hidden"
            style={{ backgroundColor: C_LIGHT, borderColor: `${C_DARK}18` }}
          >
            <div className="px-6 py-8 space-y-1">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25, ease: "easeOut" }}
                  className="relative flex items-center uppercase text-sm tracking-widest font-medium py-3 opacity-60 hover:opacity-100 transition-opacity duration-200 border-b group"
                  style={{ color: C_DARK, borderColor: `${C_DARK}10` }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                    style={{ backgroundColor: C_DARK }}
                  />
                </motion.a>
              ))}

              <div className="flex items-center gap-4 pt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${C_DARK}0D`, color: C_DARK }}
                  aria-label="Instagram"
                >
                  <FaInstagram  size={17} strokeWidth={1.8} />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${C_DARK}0D`, color: C_DARK }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={17} strokeWidth={1.8} />
                </a>
                <a
                  href="tel:+5511999999999"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${C_DARK}0D`, color: C_DARK }}
                  aria-label="Ligar"
                >
                  <Phone size={17} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}