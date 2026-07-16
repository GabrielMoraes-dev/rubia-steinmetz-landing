import Reveal from "./Reveal";

const items = [
  "Quero vender meu imóvel",
  "Quero alugar meu imóvel",
  "Procuro aluguel fixo",
  "Procuro aluguel por temporada",
  "Preciso de orientação antes de decidir",
];

const cardClass =
  "flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-center text-xs font-medium leading-snug text-ink-100 shadow-sm transition-all duration-300 ease-premium sm:p-5 sm:text-sm lg:hover:border-gold/40 lg:hover:bg-white/10";

export default function Audience() {
  return (
    <section id="para-quem" className="bg-black">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
          <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-left">
            Para quem busca uma negociação{" "}
            <span className="text-gold">mais segura e tranquila</span>.
          </h2>
        </Reveal>

        {/* Mobile / tablet: 2 columns, lone last card centered */}
        <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-2.5 sm:gap-4 lg:hidden">
          {items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 70}
              className={`${cardClass} ${
                i === items.length - 1 ? "col-span-2 mx-auto w-1/2" : ""
              }`}
            >
              {item}
            </Reveal>
          ))}
        </div>

        {/* Desktop: 3 on top, 2 centered below with matching gap */}
        <div className="mt-6 hidden lg:block">
          <div className="grid grid-cols-3 gap-5">
            {items.slice(0, 3).map((item, i) => (
              <Reveal key={item} delay={i * 70} className={cardClass}>
                {item}
              </Reveal>
            ))}
          </div>
          <div className="mt-5 flex justify-center gap-5">
            {items.slice(3).map((item, i) => (
              <Reveal
                key={item}
                delay={(i + 3) * 70}
                className={`${cardClass} w-[calc((100%_-_2.5rem)/3)]`}
              >
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
