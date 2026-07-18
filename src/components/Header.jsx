import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react"; 

export default function Header({
  menuItems,
  whatsappLink,
  isMenuOpen,
  setIsMenuOpen,
  C_LIGHT,
  C_DARK,
}) {
  const TOPBAR_BG = "#2A2522"; // Cor da faixa superior

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-lg border-b flex flex-col"
      style={{ backgroundColor: `${C_LIGHT}F2`, borderColor: `${C_DARK}18` }}
    >
      {/* 
        --- FAIXA SUPERIOR (TOP BAR) --- 
      */}
      <div 
        className="w-full"
        style={{ backgroundColor: TOPBAR_BG }}
      >
        {/* Usamos max-w para centralizar o bloco, mas justify-between para separar os itens */}
        <div className="max-w-4xl mx-auto text-white text-[11px] lg:text-xs font-light py-2 px-4 flex justify-between items-center">
          {/* Endereço */}
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <MapPin size={14} />
            <span className="hidden sm:inline tracking-wide">Av. Nossa Sra. da Penha, 1495 - Centro, Alegre - ES</span>
            <span className="sm:hidden tracking-wide">Vitória, ES</span>
          </div>

          {/* Redes Sociais */}
          <div className="flex items-center gap-5">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-transform hover:scale-110"
              aria-label="WhatsApp / Telefone"
            >
              <Phone size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* 
        --- HEADER PRINCIPAL --- 
      */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="flex justify-between items-center h-20 lg:h-24 w-full">
          
          {/* LOGO - Ancorada à extrema esquerda */}
          <div className="flex-shrink-0 w-48 lg:w-72 flex items-center">
            <img
              src="/png-preto.png"
              alt="Logo Marcelo"
              className="w-full h-auto object-contain mix-blend-multiply opacity-90"
            />
          </div>

          {/* MENU DESKTOP - Ancorado à extrema direita */}
          <div className="hidden lg:flex justify-end items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 text-sm uppercase tracking-[0.15em] font-bold transition-colors duration-300 opacity-70 hover:opacity-100 group whitespace-nowrap"
                style={{ color: C_DARK }}
              >
                {item.label}
                
                {/* EFEITO DE TRAÇO ARREDONDADO NO HOVER */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                  style={{ backgroundColor: C_DARK }}
                />
              </a>
            ))}

            {/* BOTÃO AGENDAR CONSULTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 rounded-lg text-sm uppercase tracking-widest font-semibold whitespace-nowrap transition-all duration-300 shadow-sm hover:opacity-90"
              style={{
                backgroundColor: C_DARK,
                color: C_LIGHT,
                border: `1px solid ${C_DARK}`,
              }}
            >
              Agendar Consulta
            </a>
          </div>

          {/* MENU HAMBÚRGUER (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: C_DARK }}
              className="p-2"
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
                  transition={{
                    delay: i * 0.05,
                    duration: 0.25,
                    ease: "easeOut",
                  }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}