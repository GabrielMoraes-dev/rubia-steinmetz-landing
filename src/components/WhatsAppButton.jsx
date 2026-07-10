import { WHATSAPP_URL } from "../whatsapp";

export default function WhatsAppButton({
  size = "md",
  full = false,
  variant = "solid",
  className = "",
}) {
  const sizes = {
    sm: "px-4 py-2 text-xs sm:text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base xl:px-9 xl:py-4 xl:text-lg",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-5 w-5 sm:h-6 sm:w-6",
  };

  const variants = {
    solid: "bg-black hover:bg-ink-900",
    light:
      "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black hover:brightness-105",
  };

  const isSolid = variant === "solid";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 lg:hover:-translate-y-0.5 lg:hover:shadow-lg ${
        variants[variant]
      } ${sizes[size]} ${full ? "w-full" : ""} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`shrink-0 ${iconSizes[size]} ${isSolid ? "text-gold-light" : ""}`}
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.16-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
      </svg>
      {isSolid ? (
        <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
          Falar no WhatsApp
        </span>
      ) : (
        "Falar no WhatsApp"
      )}
    </a>
  );
}
