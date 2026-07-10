import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#temporada", label: "Temporada" },
  { href: "#venda", label: "Venda" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#processo", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="hidden items-center justify-between gap-3 px-4 py-3 lg:flex lg:gap-4 xl:gap-6 xl:px-10 2xl:px-16">
        <a href="#inicio" className="min-w-0 shrink-0">
          <img
            src="/logorubia.png"
            alt="Rubia Steinmetz - Corretora de Imóveis"
            className="h-14 w-auto object-contain xl:h-16"
          />
        </a>

        <div className="scrollbar-hide min-w-0 flex-1 overflow-x-auto">
          <nav className="mx-auto flex w-fit items-center gap-x-3 xl:gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative shrink-0 whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-wide text-ink-600 transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gold after:transition-all after:duration-200 hover:text-ink-950 hover:after:w-full xl:text-xs xl:tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="shrink-0">
          <WhatsAppButton size="sm" />
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-3 lg:hidden">
        <a href="#inicio" onClick={() => setOpen(false)}>
          <img
            src="/logorubia.png"
            alt="Rubia Steinmetz - Corretora de Imóveis"
            className="h-11 w-auto object-contain"
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full bg-black shadow-md transition-transform duration-300 active:scale-95"
        >
          <span
            className={`block h-0.5 w-4 rounded-full bg-gold transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-gold transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-gold transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 top-[52px] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`absolute inset-x-0 top-full overflow-hidden rounded-b-3xl bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
      >
        <div className="px-5 pt-4 sm:px-8">
          <div className="h-1 w-10 rounded-full bg-gold" />
        </div>

        <ul className="flex flex-col px-3 py-2 sm:px-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-300 ease-out"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(12px)",
              }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-semibold text-ink-950 transition-colors duration-150 active:bg-ink-100/60"
              >
                {link.label}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-gold transition-transform duration-150 group-active:translate-x-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-ink-100 px-5 py-4 sm:px-8">
          <WhatsAppButton size="lg" full />
        </div>
      </nav>
    </header>
  );
}
