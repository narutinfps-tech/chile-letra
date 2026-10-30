/**
 * Configuración de Checkouts de Hotmart y Métricas
 * Modifique estas URLs con los enlaces directos a su checkout de Hotmart en Chile.
 */

export const CHECKOUT_CONFIG = {
  // Enlace de checkout para el Plan Básico (US$ 9,90)
  urlBasico: "https://pay.hotmart.com/MOCK_BASICO_CHILE?checkoutMode=10",

  // Enlace de checkout para el Plan Premium (US$ 19,90)
  urlPremium: "https://pay.hotmart.com/MOCK_PREMIUM_CHILE?checkoutMode=10",

  // Moneda y precios oficiales en dólares estadounidenses (Hotmart realiza la conversión a pesos chilenos según el medio de pago)
  precios: {
    basico: {
      valor: 9.90,
      formato: "US$ 9,90",
      moneda: "USD",
      nombre: "Plan Básico",
      etapas: 6,
      fichas: 60,
    },
    premium: {
      valor: 19.90,
      formato: "US$ 19,90",
      moneda: "USD",
      nombre: "Plan Premium",
      etapas: 6,
      fichas: 60,
      bonos: 3,
    },
  },

  // Soporte y contacto en Chile
  soporteEmail: "contacto@metodoletra.com",
};

/**
 * Función auxiliar para registrar eventos de clic de compra (Meta Pixel, Google Analytics, etc.)
 * No genera errores si las etiquetas de seguimiento no están instaladas en el sitio aún.
 */
export function registrarEventoCheckout(plan: "basico" | "premium") {
  const infoPlan = CHECKOUT_CONFIG.precios[plan];

  // Disparo seguro para Meta Pixel si el administrador lo agrega en el futuro
  if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "InitiateCheckout", {
      content_name: infoPlan.nombre,
      value: infoPlan.valor,
      currency: "USD",
    });
  }

  // Disparo seguro para Google Analytics si está disponible
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "begin_checkout", {
      items: [{ item_name: infoPlan.nombre, price: infoPlan.valor }],
      value: infoPlan.valor,
      currency: "USD",
    });
  }
}
