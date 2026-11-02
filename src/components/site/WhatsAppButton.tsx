import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { whatsappUrl } from "@/config/contact";

/**
 * Floating WhatsApp button, always visible in the bottom-right corner.
 * Rendered into <body> via a portal with inline styles so no parent layout
 * or CSS can hide, clip or move it.
 */
export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 2147483647,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 20px",
        borderRadius: "9999px",
        background: "#25D366",
        color: "#ffffff",
        fontWeight: 700,
        fontSize: "15px",
        textDecoration: "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 0 4px rgba(37,211,102,0.35)",
      }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#ffffff" aria-hidden>
        <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.75A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3Zm0 23.7c-2.04 0-4.04-.55-5.78-1.58l-.41-.25-3.96 1.04 1.06-3.86-.27-.43A10.65 10.65 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.7 10.7Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.3 3.3.16.21 2.25 3.44 5.46 4.82.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>,
    document.body,
  );
}
