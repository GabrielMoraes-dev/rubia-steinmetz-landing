import Reveal from "./Reveal";

const items = [
  "5 anos de atuação no mercado imobiliário",
  "CRECI 63258F",
  "Atendimento online e presencial",
  "Compra, venda e locação sempre bem conduzidas",
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-black bg-black lg:z-10 lg:-mt-28 lg:border-none lg:shadow-2xl">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-10 sm:gap-4 sm:px-8 lg:grid-cols-4 lg:py-10">
        {items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 80}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm transition-all duration-200 sm:p-5 lg:flex-row lg:items-start lg:text-left lg:hover:border-gold/30 lg:hover:bg-white/10">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold">
                ✓
              </span>
              <p className="text-sm font-medium leading-snug text-ink-100">
                {item}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
