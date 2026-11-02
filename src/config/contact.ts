/**
 * Business contact details used across the site.
 *
 * WHATSAPP_NUMBER: international format, digits only — no "+", spaces or dashes.
 * Kenya example: 0712 345 678  ->  254712345678
 *
 */
export const WHATSAPP_NUMBER = "254797303195";

export const PHONE_DISPLAY = "+254 797 303195";
export const PHONE_TEL = `tel:+${WHATSAPP_NUMBER}`;

export const WHATSAPP_MESSAGE =
  "Hello Marine Bouncers Services, I'd like to request a security quote.";

export type QuoteRequest = {
  name: string;
  phone: string;
  service: string;
  date?: string | undefined;
  message: string;
};

/** Builds the WhatsApp text sent from the contact form. */
export const quoteMessage = (q: QuoteRequest) =>
  [
    "Hello Marine Bouncers Services, I'd like a security quote.",
    "",
    `Name: ${q.name}`,
    `Phone: ${q.phone}`,
    `Service: ${q.service}`,
    q.date ? `Event date: ${q.date}` : null,
    "",
    q.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
