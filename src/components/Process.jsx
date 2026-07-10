import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Primeiro contato",
    text: "Você chama no WhatsApp e explica o que está buscando.",
  },
  {
    n: "2",
    title: "Entendimento da necessidade",
    text: "Eu entendo seu momento, objetivo e tipo de imóvel desejado.",
  },
  {
    n: "3",
    title: "Orientação e apresentação das opções",
    text: "Você recebe direcionamento claro para tomar uma decisão mais segura.",
  },
  {
    n: "4",
    title: "Acompanhamento",
    text: "Conduzo o processo com transparência até a conclusão da negociação.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
        <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl lg:text-left">
          Como funciona o <span className="text-gold">atendimento</span>
        </h2>
      </Reveal>

      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="relative h-full rounded-2xl bg-ink-100/40 p-3 text-left transition-all duration-200 sm:p-6 lg:hover:-translate-y-1 lg:hover:bg-white lg:hover:shadow-xl">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-gold sm:h-7 sm:w-7 sm:text-sm">
                  {s.n}
                </span>
                <h3 className="text-xs font-bold leading-snug text-ink-950 sm:text-sm">
                  {s.title}
                </h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-ink-600 sm:mt-2 sm:text-sm">
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
