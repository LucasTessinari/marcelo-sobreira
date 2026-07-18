import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import OfficeGallery from "./components/OfficeGallery";
import Treatments from "./components/Treatments";
import ApneiaSono from "./components/ApneiaSono";
import Curriculum from "./components/Curriculum";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const C_LIGHT = "#DAD0CB";
const C_MID = "#B9AEA3";
const C_DARK = "#2A2522";
const C_DARKER = "#1a1715";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Apneia e Sono", href: "#apneia" },
    { label: "Cursos", href: "#cursos" },
    { label: "Especializações", href: "#curriculo" },
  ];

  return (
    <div
      className="font-sans min-h-screen overflow-x-hidden scroll-smooth"
      style={{ color: C_DARK }}
    >
      <Header
        menuItems={menuItems}
        whatsappLink={whatsappLink}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
      />

      <Hero
        whatsappLink={whatsappLink}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
        C_MID={C_MID}
      />
      <About C_LIGHT={C_LIGHT} C_DARK={C_DARK} C_MID={C_MID} />
      <OfficeGallery
        whatsappLink={whatsappLink}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
        C_MID={C_MID}
      />
      <Treatments
        whatsappLink={whatsappLink}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
        C_MID={C_MID}
      />
      <ApneiaSono
        whatsappLink={whatsappLink}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
        C_MID={C_MID}
      />
      <Courses
        whatsappLink={whatsappLink}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
        C_MID={C_MID}
      />
      <Curriculum C_LIGHT={C_LIGHT} C_DARK={C_DARK} C_MID={C_MID} />
      <Contact
        whatsappLink={whatsappLink}
        C_LIGHT={C_LIGHT}
        C_DARK={C_DARK}
        C_MID={C_MID}
      />
      <Footer
        C_LIGHT={C_LIGHT}
        C_DARKER={C_DARKER}
        C_MID={C_MID}
        menuItems={menuItems}
        whatsappLink={whatsappLink}
      />
    </div>
  );
}
