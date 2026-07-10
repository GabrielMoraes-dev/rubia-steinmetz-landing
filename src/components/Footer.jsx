import { WHATSAPP_URL } from "../whatsapp";

const INSTAGRAM_URL = "https://www.instagram.com/rubiasteinmetz";
const EMAIL = "rubiasteinmetz@gmail.com";

const iconButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gold transition-colors duration-200 hover:bg-gold hover:text-black";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <p className="text-base font-bold text-white sm:text-lg">Corretora Rubia</p>
          <p className="mt-1 text-sm text-ink-300">Corretora de imóveis</p>
          <p className="text-sm text-ink-300">CRECI 63258F</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className={iconButtonClass}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.16-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
            </svg>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @rubiasteinmetz"
            className={iconButtonClass}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Enviar e-mail para ${EMAIL}`}
            className={iconButtonClass}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-center text-xs text-ink-300 sm:px-8">
        © {new Date().getFullYear()} Corretora Rubia. Todos os direitos reservados.
      </p>
    </footer>
  );
}
