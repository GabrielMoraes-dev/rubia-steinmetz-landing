import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-gradient-to-b from-ink-100/60 to-white">
      <div
        className="mx-auto grid max-w-[1800px] gap-x-16 gap-y-6 px-5 pb-12 pt-8 sm:px-8 sm:pt-12 lg:grid-cols-2 lg:gap-y-8 lg:px-12 lg:pb-0 lg:pt-20 xl:gap-x-24 xl:px-20 2xl:px-28
        [grid-template-areas:'top'_'photo'_'cta']
        lg:[grid-template-areas:'top_photo'_'cta_photo']
        lg:[grid-template-rows:min-content_1fr]"
      >
        <Reveal className="[grid-area:top] text-center lg:text-left">
          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Compre, venda ou alugue seu imóvel com{" "}
            <span className="text-gold">mais segurança e tranquilidade</span>.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg xl:mt-7 xl:text-xl 2xl:text-2xl">
            Ofereço atendimento personalizado para quem busca orientação
            clara, transparência e acompanhamento em cada etapa da
            negociação imobiliária.
          </p>
        </Reveal>

        <Reveal
          direction="right"
          delay={150}
          className="[grid-area:photo] relative flex justify-center lg:self-center"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[62%] h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/40 blur-3xl [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_78%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_78%)]"
          />

          <div className="relative w-full max-w-[220px] sm:max-w-md lg:max-w-xl">
            <img
              src="/Rubia1.png"
              alt="Corretora Rubia, especialista em imóveis"
              className="h-auto w-full object-contain [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            />
          </div>

          <div className="absolute right-1 top-[27%] rounded-xl border border-white/15 bg-black/55 px-4 py-2 text-center shadow-lg backdrop-blur-[2px] lg:hidden">
            <p className="text-sm font-bold text-white drop-shadow-sm">Corretora Rubia</p>
            <p className="text-xs font-semibold text-gold-light drop-shadow-sm">CRECI 63258F</p>
          </div>
        </Reveal>

        <Reveal
          delay={300}
          className="[grid-area:cta] relative z-10 -mt-7 flex flex-col items-center gap-4 sm:-mt-8 lg:mt-0 lg:items-start lg:self-start"
        >
          <WhatsAppButton size="lg" />
          <p className="text-center text-sm text-ink-600 lg:text-left">
            Atendimento online e presencial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
