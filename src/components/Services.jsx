import Reveal from "./Reveal";

const services = [
  {
    title: "Venda de imóveis",
    text: "Oriento quem deseja vender com mais tranquilidade, clareza e uma apresentação adequada do imóvel.",
  },
  {
    title: "Locação fixa",
    text: "Apoio proprietários e locatários durante o processo de aluguel, com comunicação direta e responsável.",
  },
  {
    title: "Aluguéis por temporada",
    text: "Atendo quem busca praticidade, organização e confiança em locações por temporada.",
    highlight: true,
  },
  {
    title: "Acompanhamento da negociação",
    text: "Dou suporte em todas as etapas para tornar o processo mais tranquilo, estável e eficiente.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
        <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl lg:text-left">
          Soluções imobiliárias com{" "}
          <span className="text-gold">atendimento próximo e transparente</span>.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <div
              className={`rounded-2xl border p-6 text-center shadow-sm transition-all duration-300 ease-premium lg:text-left lg:hover:-translate-y-1 lg:hover:shadow-xl ${
                s.highlight
                  ? "animate-pulse-gold border-black bg-black text-white"
                  : "border-ink-100 bg-white text-ink-950 lg:hover:border-gold/40"
              }`}
            >
              {s.highlight && (
                <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-black">
                  Destaque
                </span>
              )}
              <h3 className="text-base font-bold">{s.title}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  s.highlight ? "text-ink-100" : "text-ink-600"
                }`}
              >
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
