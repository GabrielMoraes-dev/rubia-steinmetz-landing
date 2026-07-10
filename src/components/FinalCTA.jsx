import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="contato" className="bg-gradient-to-b from-white to-ink-100/60">
      <Reveal as="div" className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:py-24">
        <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold" />
        <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
          Precisa comprar, vender ou{" "}
          <span className="text-gold">alugar um imóvel</span>?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-lg">
          Fale comigo e receba uma orientação atenciosa, humana e transparente
          para encontrar a melhor solução imobiliária para o seu momento.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <WhatsAppButton size="lg" />
          <p className="text-sm text-ink-600">
            Atendimento online e presencial.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
