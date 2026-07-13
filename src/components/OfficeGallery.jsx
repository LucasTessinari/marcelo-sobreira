import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const images = [
  { src: "/consultorio_1.png", alt: "Recepção do consultório" },
  { src: "/consultorio_2.png", alt: "Sala de atendimento" },
  { src: "/consultorio_3.png", alt: "Equipamentos modernos" },
  { src: "/consultorio_4.png", alt: "Ambiente de espera" },
  { src: "/consultorio_5.png", alt: "Sala de procedimentos" },
  { src: "/consultorio_6.png", alt: "Detalhe arquitetônico" },
];

const doubledImages = [...images, ...images];

export default function OfficeGallery({ C_LIGHT, C_DARK, C_MID }) {
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

    const moveBy = (120 * delta) / 1000;
    let newX = x.get() - moveBy;

    if (halfWidthRef.current > 0 && newX <= -halfWidthRef.current) {
      newX += halfWidthRef.current;
    }

    x.set(newX);
  });

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: C_LIGHT }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <span
            className="uppercase tracking-widest text-xs font-semibold"
            style={{ color: `${C_DARK}70` }}
          >
            Nosso Espaço
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight"
            style={{ color: C_DARK }}
          >
            Um ambiente feito para o{" "}
            <span className="italic" style={{ color: `${C_DARK}70` }}>
              seu conforto
            </span>
          </h2>
          <p
            className="font-light leading-relaxed text-base lg:text-lg"
            style={{ color: `${C_DARK}A8` }}
          >
            Estrutura moderna, tecnologia de ponta e um espaço pensado em cada
            detalhe para acolher você.
          </p>
        </motion.div>
      </div>

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
    </section>
  );
}
