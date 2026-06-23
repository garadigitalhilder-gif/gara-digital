import { FaWhatsapp } from "react-icons/fa";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/50764103972?text=Hola%20Gara%20Digital,%20quiero%20conocer%20más%20sobre%20sus%20servicios."
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Gara Digital por WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:scale-105"
    >
      <FaWhatsapp size={27} />
    </a>
  );
}
