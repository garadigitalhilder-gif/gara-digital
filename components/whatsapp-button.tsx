import { FaWhatsapp } from "react-icons/fa";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/50764103972?text=Hola%20Gara%20Digital,%20quiero%20conocer%20más%20sobre%20sus%20servicios."
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Gara Digital por WhatsApp"
      className="button-primary fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full text-white shadow-xl transition hover:-translate-y-1 hover:scale-105"
    >
      <FaWhatsapp size={27} />
    </a>
  );
}
