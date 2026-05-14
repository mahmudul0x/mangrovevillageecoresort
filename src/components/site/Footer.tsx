import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.18_0.025_150)] text-beige overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.74 0.1 80) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-5 sm:px-6 pt-14 md:pt-20 pb-10 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Mangrove Village Eco Resort" className="w-14 h-14 object-contain shrink-0" />
              <div className="leading-none">
                <div className="font-display text-[1.1rem] tracking-wide text-beige font-light">Mangrove Village</div>
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-beige/50 mt-1">Eco Resort</div>
              </div>
            </div>
            <p className="text-sm text-beige/70 leading-relaxed font-display italic">
              Where the rivers of the Sundarbans whisper, and silence becomes a luxury.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-sunset mb-5">Explore</h4>
            <ul className="space-y-2.5 text-sm text-beige/75">
              {[
                ["/about", "About"],
                ["/rooms", "Rooms"],
                ["/packages", "Packages"],
                ["/experiences", "Experiences"],
                ["/dining", "Dining"],
                ["/gallery", "Gallery"],
              ].map(([h, l]) => (
                <li key={h}><Link to={h} className="hover:text-sunset transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-sunset mb-5">Visit</h4>
            <ul className="space-y-3 text-sm text-beige/75">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-sunset shrink-0" /><span>Jaynagar, Dakop, Khulna, Bangladesh</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-sunset shrink-0" /><span>01710-222888<br />01301-337603</span></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-sunset shrink-0" /><span className="break-all">mangrovevillageecoresort@gmail.com</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-sunset mb-5">Newsletter</h4>
            <p className="text-sm text-beige/70 mb-4">Travel stories from the Sundarbans, in your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-beige/5 border border-beige/15 rounded-l-full px-4 py-2.5 text-sm placeholder:text-beige/40 focus:outline-none focus:border-sunset"
              />
              <button className="bg-sunset text-accent-foreground px-5 rounded-r-full text-sm font-medium hover:brightness-110">Join</button>
            </form>
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/mangrovevillageecoresort/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-sunset transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/mangro_village_eco_resort" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-sunset transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/8801710222888" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-sunset transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-beige/50">
          <div>© {new Date().getFullYear()} Mangrove Village Eco Resort. Crafted with care in Khulna.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-sunset">Privacy</Link>
            <Link to="/terms" className="hover:text-sunset">Terms</Link>
            <Link to="/faq" className="hover:text-sunset">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
