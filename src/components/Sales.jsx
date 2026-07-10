import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

const forSale = [
  { id: 1, title: "Imóvel à venda 1", src: "/venda1.jpg" },
  { id: 2, title: "Imóvel à venda 2", src: "/venda2.jpg" },
  { id: 3, title: "Imóvel à venda 3", src: "/venda4.jpg" },
  { id: 4, title: "Imóvel à venda 4", src: "/venda3.jpg" },
  { id: 5, title: "Imóvel à venda 5", src: "/venda5.jpg" },
];

function HouseIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z"
      />
    </svg>
  );
}

export default function Sales() {
  const [active, setActive] = useState(0);
  const current = forSale[active];

  return (
    <section id="venda" className="bg-ink-100/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
          <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl lg:text-left">
            Imóveis à <span className="text-gold">venda</span>
          </h2>
          <p className="mt-3 max-w-xl text-center text-sm text-ink-600 sm:text-lg lg:text-left">
            Selecione uma miniatura para ver a foto de cada imóvel. Estes são
            apenas alguns exemplos das opções disponíveis no momento.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 rounded-3xl bg-white p-3 shadow-xl sm:p-5">
          <div className="grid gap-3 sm:gap-4 lg:h-[38rem] lg:grid-cols-[1fr_7.5rem]">
            <div
              key={current.id}
              className="relative aspect-[4/3] w-full animate-fade-in overflow-hidden rounded-2xl bg-gradient-to-br from-ink-100 to-ink-100/40 sm:aspect-[16/9] lg:aspect-auto lg:h-full"
            >
              {current.src ? (
                <img
                  src={current.src}
                  alt={current.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                  <HouseIcon className="h-14 w-14 text-ink-300" />
                  <span className="text-base font-bold text-ink-950">
                    {current.title}
                  </span>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-dark">
                    Foto em breve
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2.5 overflow-x-auto p-1 sm:gap-3 lg:h-full lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:p-1">
              {forSale.map((property, i) => (
                <button
                  key={property.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={property.title}
                  aria-current={i === active}
                  className={`group relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl bg-ink-100/50 transition-all duration-200 sm:w-20 lg:w-full ${
                    i === active
                      ? "scale-105 shadow-md ring-2 ring-gold"
                      : "opacity-80 ring-1 ring-ink-100 hover:opacity-100 hover:ring-gold/40"
                  }`}
                >
                  {property.src ? (
                    <img
                      src={property.src}
                      alt={property.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <HouseIcon className="mx-auto h-6 w-6 text-ink-300" />
                  )}
                  <span
                    className={`absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                      i === active
                        ? "bg-gold text-black"
                        : "bg-white/80 text-ink-600"
                    }`}
                  >
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-black px-6 py-7 text-center shadow-xl ring-1 ring-gold/30 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-base font-bold text-white sm:text-lg">
            Quer conhecer os demais imóveis à venda?
          </p>
          <WhatsAppButton size="lg" variant="light" />
        </Reveal>
      </div>
    </section>
  );
}
