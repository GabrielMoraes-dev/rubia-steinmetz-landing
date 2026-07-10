import Reveal from "./Reveal";

const items = [
  "Atendimento personalizado",
  "Disponibilidade para orientar",
  "Transparência em cada negociação",
  "Atenção aos detalhes",
  "Acompanhamento do início ao fim",
  "Relações de confiança além da negociação",
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-white lg:z-10 lg:-mt-28 lg:rounded-t-[2.5rem] lg:shadow-2xl">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
          <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl lg:text-left">
            Por que contar <span className="text-gold">comigo</span>?
          </h2>
        </Reveal>

        <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70}>
              <div className="flex h-full items-center gap-2 rounded-xl border border-ink-100 bg-white p-3 text-left text-xs font-medium leading-snug text-ink-950 shadow-sm transition-all duration-200 sm:p-4 sm:text-sm lg:hover:-translate-y-1 lg:hover:border-gold/40 lg:hover:shadow-lg">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[10px] font-bold text-gold sm:h-6 sm:w-6 sm:text-xs">
                  ✓
                </span>
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
