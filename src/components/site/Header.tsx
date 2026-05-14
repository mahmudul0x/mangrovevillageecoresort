import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-mangrove.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/packages", label: "Packages" },
  { to: "/experiences", label: "Experiences" },
  { to: "/dining", label: "Dining" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Stories" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "glass-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Mangrove Village Eco Resort" className="w-10 h-10 object-contain" />
          <div className="leading-tight text-beige">
            <div className="font-display text-lg tracking-tight">Mangrove Village</div>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Eco Resort</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-beige/85 hover:text-beige transition-colors relative group"
              activeProps={{ className: "text-beige" }}
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-sunset scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-sunset hover:brightness-110 text-accent-foreground text-sm font-medium px-5 py-2.5 rounded-full shadow-soft transition-all hover:scale-[1.03]"
          >
            Book Stay
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-beige p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-dark border-t border-beige/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="py-3 text-beige/90 border-b border-beige/10">
                  {l.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-4 text-center bg-sunset text-accent-foreground py-3 rounded-full"
              >
                Book Stay
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
