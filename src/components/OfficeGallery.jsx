import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const images = [
  { src: "/consultorio_1.png", alt: "Recepção do consultório" },
  { src: "/consultorio_2.png", alt: "Sala de atendimento" },
  { src: "/consultorio_3.png", alt: "Equipamentos modernos" },
  { src: "/consultorio_4.png", alt: "Ambiente de espera" },
  { src: "/consultorio_5.png", alt: "Sala de procedimentos" },
  { src: "/consultorio_6.png", alt: "Detalhe arquitetônico" },
];

const doubledImages = [...images, ...images];

export default function OfficeGallery({
  whatsappLink,
  C_LIGHT,
  C_DARK,
  C_MID,
}) {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const isPausedRef = useRef(isPaused);
  const trackRef = useRef(null);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((time, delta) => {
    if (isPausedRef.current) return;

    const moveBy = (80 * delta) / 1000;
    let newX = x.get() - moveBy;

    if (halfWidthRef.current > 0 && newX <= -halfWidthRef.current) {
      newX += halfWidthRef.current;
    }

    x.set(newX);
  });

  return (
    <section
      id="galeria"
      className="pt-0 pb-20 lg:pb-28 overflow-hidden"
      style={{ backgroundColor: C_LIGHT }}
    >
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 lg:w-32 z-10"
          style={{
            background: `linear-gradient(to right, ${C_LIGHT}, transparent)`,
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 lg:w-32 z-10"
          style={{
            background: `linear-gradient(to left, ${C_LIGHT}, transparent)`,
          }}
        />

        <motion.div
          ref={trackRef}
          className="flex gap-4 lg:gap-6 w-max"
          style={{ x }}
        >
          {doubledImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[260px] sm:w-[320px] lg:w-[380px] rounded-2xl overflow-hidden border"
              style={{
                borderColor: `${C_MID}40`,
                boxShadow: "0 20px 45px rgba(42, 37, 34, 0.12)",
              }}
            >
              <div className="aspect-[4/5]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{
                    filter: "saturate(0.96)",
                  }}
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 60%, ${C_DARK}30 100%)`,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 lg:mt-20 space-y-6"
      >
        <h3
          className="text-2xl md:text-3xl font-serif font-light leading-tight"
          style={{ color: C_DARK }}
        >
          Que tal conhecer nosso espaço{" "}
          <span className="italic" style={{ color: `${C_DARK}70` }}>
            de perto?
          </span>
        </h3>
        <p
          className="font-light leading-relaxed"
          style={{ color: `${C_DARK}A8` }}
        >
          Agende sua consulta e venha viver essa experiência de cuidado e
          conforto.
        </p>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          animate="rest"
          className="relative inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full overflow-hidden"
          style={{ backgroundColor: C_DARK, color: C_LIGHT }}
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
              hover: {
                x: "120%",
                transition: { duration: 0.7, ease: "easeInOut" },
              },
            }}
            style={{
              background: `linear-gradient(115deg, transparent 30%, ${C_LIGHT}35 50%, transparent 70%)`,
            }}
          />
          <span className="relative z-10 flex items-center gap-2">
            Agendar consulta pelo WhatsApp
            <motion.span
              className="flex"
              variants={{ rest: { x: 0 }, hover: { x: 4 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ChevronRight size={14} />
            </motion.span>
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
