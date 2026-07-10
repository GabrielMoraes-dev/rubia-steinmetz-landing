import { useState, useEffect, useCallback } from "react";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

const rentals = [
  { id: 1, title: "Casa de temporada 1", src: "/temporada1.png" },
  { id: 2, title: "Casa de temporada 2", src: "/temporada2.png" },
  { id: 3, title: "Casa de temporada 3", src: "/temporada3.png" },
  { id: 4, title: "Casa de temporada 4", src: "/temporada4.png" },
  { id: 5, title: "Casa de temporada 5", src: "/temporada5.png" },
  { id: 6, title: "Casa de temporada 6", src: "/temporada6.png" },
];

export default function Rentals() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(rentals.length / 2)
  );

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % rentals.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + rentals.length) % rentals.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="temporada" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
        <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl lg:text-left">
          Casas para <span className="text-gold">temporada</span>
        </h2>
        <p className="mt-3 max-w-xl text-center text-sm text-ink-600 sm:text-lg lg:text-left">
          Praticidade e conforto para quem busca uma estadia de curta duração.
          Estas são apenas algumas das opções disponíveis no momento.
        </p>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto mt-10 flex h-[260px] items-center justify-center overflow-hidden sm:h-[340px] [perspective:1000px]">
        {rentals.map((property, index) => {
          const total = rentals.length;
          let pos = (index - currentIndex + total) % total;
          if (pos > Math.floor(total / 2)) pos -= total;

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <div
              key={property.id}
              className="absolute flex h-[220px] w-56 items-center justify-center transition-all duration-500 ease-in-out sm:h-[320px] sm:w-80"
              style={{
                transform: `translateX(${pos * 55}%) scale(${
                  isCenter ? 1 : isAdjacent ? 0.85 : 0.7
                }) rotateY(${pos * -10}deg)`,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: Math.abs(pos) > 1 ? 0 : isCenter ? 1 : 0.5,
                filter: isCenter ? "blur(0px)" : "blur(2px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
            >
              {property.src ? (
                <img
                  src={property.src}
                  alt={property.title}
                  className="h-full w-full rounded-2xl border border-ink-100 object-cover shadow-xl"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ink-100 bg-ink-100/40 text-center shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-8 w-8 text-ink-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z"
                    />
                  </svg>
                  <span className="px-3 text-xs font-medium text-ink-600">
                    {property.title}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-ink-300">
                    Foto em breve
                  </span>
                </div>
              )}
            </div>
          );
        })}

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Casa anterior"
          className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-100 bg-white/80 shadow-md backdrop-blur-sm transition-colors hover:bg-white sm:left-4"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-ink-950"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima casa"
          className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-100 bg-white/80 shadow-md backdrop-blur-sm transition-colors hover:bg-white sm:right-4"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-ink-950"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </Reveal>

      <Reveal delay={250} className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-black px-6 py-7 text-center shadow-xl ring-1 ring-gold/30 sm:flex-row sm:justify-between sm:text-left">
        <p className="text-base font-bold text-white sm:text-lg">
          Quer conhecer as demais opções para temporada?
        </p>
        <WhatsAppButton size="lg" variant="light" />
      </Reveal>
    </section>
  );
}
