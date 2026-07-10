import Reveal from "./Reveal";

const ADDRESS = "Av. Marechal Floriano Peixoto, 925, São Lourenço do Sul, RS";
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function LocationMap() {
  return (
    <section id="localizacao" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gold lg:mx-0" />
        <h2 className="max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl lg:text-left">
          Onde estou <span className="text-gold">localizada</span>
        </h2>
        <p className="mt-3 max-w-xl text-center text-sm text-ink-600 sm:text-lg lg:text-left">
          {ADDRESS}
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-8 overflow-hidden rounded-3xl shadow-xl">
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização de Rubia Steinmetz - Corretora de Imóveis"
        />
      </Reveal>

      <Reveal delay={250} className="mt-6 flex justify-center lg:justify-start">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-sm transition-colors duration-200 hover:border-gold/40 hover:text-gold-dark"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
            />
            <circle cx="12" cy="9.5" r="2.3" />
          </svg>
          Ver no Google Maps
        </a>
      </Reveal>
    </section>
  );
}
