// Botón flotante de WhatsApp — Centro de Neurociencias HAP
const WA_URL =
  'https://wa.me/5215516647108?text=' +
  encodeURIComponent('Hola, me gustaría agendar una cita en el Centro de Neurociencias Avanzadas.')

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed z-[60] bottom-5 right-5 sm:bottom-7 sm:right-7 flex items-center gap-2.5 rounded-full pl-3.5 pr-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
      style={{ background: '#25D366', boxShadow: '0 8px 28px rgba(37,211,102,0.45)' }}
    >
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.08 4.88 4.32.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.05 21.5h-.01a9.42 9.42 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 01-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 012.76 6.67c0 5.2-4.23 9.43-9.43 9.43zm8.02-17.46A11.36 11.36 0 0012.05.75C5.8.75.73 5.82.73 12.06c0 1.99.52 3.94 1.51 5.66L.64 23.5l5.9-1.55a11.3 11.3 0 005.5 1.4h.01c6.24 0 11.31-5.07 11.32-11.31 0-3.02-1.18-5.86-3.3-8z" />
      </svg>
      <span className="hidden sm:inline text-sm whitespace-nowrap">Escríbenos</span>
    </a>
  )
}
