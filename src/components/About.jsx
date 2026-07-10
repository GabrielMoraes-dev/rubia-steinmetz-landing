import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-0 lg:pt-24">
        <Reveal direction="left" className="relative flex justify-center">
          <div
            className="pointer-events-none absolute left-1/2 top-[62%] h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/40 blur-3xl [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_78%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_78%)]"
          />

          <img
            src="/Rubia2.png"
            alt="Rubia atendendo um cliente"
            className="relative mx-auto w-full max-w-[240px] object-contain [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] sm:max-w-sm lg:max-w-none"
          />
        </Reveal>

        <Reveal
          direction="right"
          delay={150}
          className="text-center lg:rounded-3xl lg:bg-white/70 lg:p-8 lg:text-left lg:shadow-xl lg:backdrop-blur-sm"
        >
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
          <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
            Atendimento humano, responsável e{" "}
            <span className="text-gold">atento aos detalhes</span>.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-600 sm:text-lg">
            Atuando no mercado imobiliário há 5 anos, ajudo clientes a
            comprar, vender e alugar imóveis com dedicação, cuidado e
            responsabilidade. Procuro entender a necessidade de cada um e
            buscar soluções que façam sentido para o momento de cada
            cliente.
          </p>

          <div className="relative mt-6 rounded-xl border-t-4 border-gold bg-white px-6 py-5 shadow-sm lg:border-l-4 lg:border-t-0">
            <span className="absolute -top-3 left-4 font-serif text-4xl leading-none text-gold/40 lg:-left-1 lg:top-2">
              "
            </span>
            <p className="text-sm font-medium italic text-ink-950">
              Confiança, compromisso e seriedade são a base de um bom
              relacionamento e de um trabalho bem-feito.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
