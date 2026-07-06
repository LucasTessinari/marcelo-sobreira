export default function Footer({ C_LIGHT, C_DARKER, C_MID }) {
  return (
    <footer
      className="py-12 border-t text-center lg:text-left"
      style={{ backgroundColor: C_DARKER, borderColor: `${C_LIGHT}15`, color: `${C_LIGHT}60` }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-48 lg:w-56 flex justify-center lg:justify-start">
          <img
            src="/png-branco.png"
            className="w-full h-auto object-contain opacity-40 hover:opacity-80 transition-opacity"
            alt="Logo Marcelo"
          />
        </div>
        <p className="text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
        <p className="text-xs uppercase tracking-widest" style={{ color: `${C_MID}80` }}>
          CRO-UF 00000
        </p>
      </div>
    </footer>
  );
}