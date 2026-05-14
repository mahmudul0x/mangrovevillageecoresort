import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/8801710222888"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:01710222888"
        aria-label="Call"
        className="w-14 h-14 rounded-full bg-sunset text-accent-foreground flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
