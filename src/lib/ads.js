// Conversiones de Google Ads (gtag). IDs del documento de Engel (021126).
const ADS_ID = 'AW-18460191500'
const CONV = {
  formulario: `${ADS_ID}/LdHNCNDx8LAdEIzWwOJE`,
  whatsapp: `${ADS_ID}/G7POCNee6bAdEIzWwOJE`,
}

function fire(sendTo) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: sendTo })
  }
}

// Formulario enviado con éxito (equivalente a la "página de confirmación")
export const trackFormulario = () => fire(CONV.formulario)

// Clic en el botón/enlace de WhatsApp
export const trackWhatsApp = () => fire(CONV.whatsapp)
