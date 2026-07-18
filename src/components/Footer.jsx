import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer({ menuItems, whatsappLink }) {
  const FOOTER_BG = "#D8CEC9";
  const TEXT_DARK = "#2A2522";
  const BOTTOM_BG = "#2A2522";
  const BOTTOM_TEXT = "#B9AEA3";

  return (
    <footer style={{ backgroundColor: FOOTER_BG, color: TEXT_DARK }}>
      <div className="pt-6 pb-6 text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-72">
              <div className="w-64 lg:w-72">
                <img
                  src="/png-preto.png"
                  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  alt="Logo Marcelo"
                />
              </div>
            </div>

            {/* Menu */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h4 className="text-xs font-medium tracking-widest mb-1" style={{ color: TEXT_DARK }}>
                Navegação
              </h4>
              {menuItems?.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-xs font-medium tracking-widest opacity-85 hover:opacity-100 transition-opacity group py-0.5"
                  style={{ color: TEXT_DARK }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                    style={{ backgroundColor: TEXT_DARK }}
                  />
                </a>
              ))}
            </div>

            {/* Contato + Endereço + Ícones */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <h4 className="text-xs font-medium tracking-widest mb-1" style={{ color: TEXT_DARK }}>
                Contato
              </h4>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-xs font-medium tracking-widest opacity-85 hover:opacity-100 transition-opacity"
                style={{ color: TEXT_DARK }}
              >
                <Phone size={13} />
                (11) 99999-9999
              </a>

              <div className="flex items-center gap-2 text-xs font-medium tracking-wide" style={{ color: TEXT_DARK }}>
                <MapPin size={13} />
                <span>Av. Nossa Sra. da Penha, 1495 - Centro, Alegre - ES</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: `${TEXT_DARK}18`, color: TEXT_DARK }}
                  aria-label="Instagram"
                >
                  <FaInstagram size={13} />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: `${TEXT_DARK}18`, color: TEXT_DARK }}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={14} />
                </a>
                <a
                  href="tel:+5511999999999"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: `${TEXT_DARK}18`, color: TEXT_DARK }}
                  aria-label="Ligar"
                >
                  <Phone size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa final separada */}
      <div className="py-3" style={{ backgroundColor: BOTTOM_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-normal tracking-widest" style={{ color: BOTTOM_TEXT }}>
            Desenvolvido por: Vexor Digital
          </p>
          <p className="text-[11px] font-normal tracking-widest" style={{ color: BOTTOM_TEXT }}>
            &copy; {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <p className="text-[11px] font-normal tracking-widest" style={{ color: BOTTOM_TEXT }}>
            CRO-UF 00000
          </p>
        </div>
      </div>
    </footer>
  );
}