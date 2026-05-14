import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Leaf, Waves, Sun, Compass, Heart, Star, MapPin, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-mangrove.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import boatImg from "@/assets/boat-sunrise.jpg";
import foodImg from "@/assets/food-bengali.jpg";
import roomImg from "@/assets/room-interior.jpg";
import villageImg from "@/assets/village-life.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpg";
import img13 from "@/assets/13.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangrove Village Eco Resort — Sundarbans Luxury Retreat" },
      { name: "description", content: "An eco-luxury retreat near the Sundarbans, Bangladesh. Wooden cottages, river boat tours, traditional Bengali cuisine, and the soul of village life." },
      { property: "og:title", content: "Mangrove Village Eco Resort — Sundarbans" },
      { property: "og:description", content: "Escape into the green. Stay closer to nature." },
      { property: "og:image", content: "/og.jpg" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Resort",
        name: "Mangrove Village Eco Resort",
        address: { "@type": "PostalAddress", addressLocality: "Jaynagar, Dakop", addressRegion: "Khulna", addressCountry: "Bangladesh" },
        telephone: "+8801710222888",
        image: "/og.jpg",
        priceRange: "$$",
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyUs />
      <Highlights />
      <RoomsPreview />
      <PackagesStrip />
      <Experiences />
      <FoodSection />
      <Adventure />
      <GalleryPreview />
      <Testimonials />
      <BookingCta />
      <LocationMap />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const slides = [
    { img: heroImg, alt: "Sundarbans mangrove forest at sunrise" },
    { img: boatImg, alt: "Wooden boat drifting at sunrise" },
    { img: mangroveImg, alt: "Mangrove roots in tidal water" },
    { img: cottageImg, alt: "Eco cottage on the river" },
    { img: img11, alt: "Mangrove Village Eco Resort" },
    { img: img12, alt: "Mangrove Village Eco Resort" },
    { img: img13, alt: "Mangrove Village Eco Resort" },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] max-h-[900px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <m.img
            key={active}
            src={slides[active].img}
            alt={slides[active].alt}
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4 }, scale: { duration: 7, ease: "linear" } }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </motion.div>

      {/* Layered gradient — stronger on mobile for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.025_150/0.55)] via-[oklch(0.14_0.025_150/0.3)] to-[oklch(0.10_0.025_150/0.92)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.025_150/0.3)] via-transparent to-transparent md:hidden" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-beige px-5 sm:px-6 pt-32 pb-20"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.4em] mb-3 sm:mb-5 flex items-center justify-center gap-3"
        >
          <span className="w-10 h-px bg-sunset" />
          <span className="px-3 py-1 rounded-full border border-sunset/50 bg-sunset/10 text-sunset backdrop-blur-sm">
            Sundarbans · Bangladesh
          </span>
          <span className="w-10 h-px bg-sunset" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.05] max-w-4xl text-balance mx-auto"
        >
          Discover the hidden
          <br />
          <span className="italic font-light text-gradient-sunset">beauty of Sundarbans</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-4 sm:mt-6 max-w-sm sm:max-w-lg text-sm sm:text-base md:text-lg text-beige/75 leading-relaxed mx-auto"
        >
          An eco-luxury retreat where rivers, mangroves, village culture and
          unforgettable experiences come together.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-6 sm:mt-8 flex flex-row flex-wrap gap-3 justify-center"
        >
          <Link
            to="/booking"
            className="group inline-flex items-center justify-center gap-2 bg-sunset hover:brightness-110 text-accent-foreground font-medium px-7 py-3.5 text-sm sm:text-base rounded-full transition-all hover:scale-[1.03] shadow-glow"
          >
            Book Your Stay <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center justify-center gap-2 glass text-beige hover:bg-beige/15 font-medium px-7 py-3.5 text-sm sm:text-base rounded-full transition-all"
          >
            Explore Packages
          </Link>
        </motion.div>

        {/* Stats row — visible on mobile to fill space */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-24 sm:mt-28 flex items-center gap-6 sm:gap-10 text-beige/60"
        >
          {[["12+", "Cottages"], ["4.9★", "Rating"], ["1.5k+", "Guests"]].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-lg sm:text-xl text-beige/90">{v}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] mt-0.5">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint — desktop only */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-beige/50 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em]"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-beige/50 to-transparent animate-pulse" />
      </motion.div>

      {/* Prev / Next buttons */}
      <button
        onClick={() => setActive((i) => (i - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-beige hover:bg-beige/20 transition-all"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={() => setActive((i) => (i + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-beige hover:bg-beige/20 transition-all"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slider indicators */}
      <div className="absolute bottom-5 md:bottom-10 left-1/2 md:left-12 -translate-x-1/2 md:translate-x-0 z-20 flex items-center gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-px transition-all duration-500 ${i === active ? "w-8 md:w-12 bg-sunset" : "w-4 md:w-6 bg-beige/40 hover:bg-beige/70"}`}
          />
        ))}
        <span className="hidden md:inline ml-3 text-beige/70 text-[10px] uppercase tracking-[0.4em] tabular-nums">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

    </section>
  );
}

function Welcome() {
  const stats = [
    { v: "12+", l: "Eco Cottages" },
    { v: "8", l: "Curated Tours" },
    { v: "1.5k", l: "Happy Guests" },
    { v: "4.9", l: "Avg. Rating" },
  ];
  return (
    <section className="py-16 md:py-28 lg:py-36 bg-beige relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <SectionLabel>Welcome</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] text-balance text-forest">
            Where the river slows,<br />
            <span className="italic">and the world quiets.</span>
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Tucked between the tidal waterways of the Sundarbans, Mangrove Village is a soft place to land.
            Wooden cottages, lantern-lit dinners, slow boat mornings — and a kind of silence you can feel in your chest.
          </p>
          <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div className="font-display text-3xl md:text-4xl text-sunset">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-forest rounded-3xl rotate-2 opacity-20" />
            <img src={cottageImg} alt="Eco cottage on the river" loading="lazy" width={1600} height={1200} className="relative rounded-3xl shadow-glow w-full" />
            <div className="absolute -bottom-8 -left-8 glass-dark rounded-2xl p-5 max-w-[220px] hidden md:block">
              <Quote className="w-5 h-5 text-sunset mb-2" />
              <p className="text-beige text-sm font-display italic leading-snug">
                "Three nights felt like a month of breathing."
              </p>
              <div className="text-beige/60 text-xs mt-2">— Ayesha R., Dhaka</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { Icon: Leaf, t: "Eco-First", d: "Solar power, rainwater harvesting and a zero-plastic kitchen — luxury without a footprint." },
    { Icon: Waves, t: "On the River", d: "Cottages perched over the water. Wake up to mist and the call of kingfishers." },
    { Icon: Sun, t: "Slow Living", d: "No televisions. No rush. Just hammocks, books, and unhurried meals." },
    { Icon: Compass, t: "Authentic Tours", d: "Local guides who grew up here. Stories you won't read in a guidebook." },
    { Icon: Heart, t: "Village Soul", d: "Eat with families. Weave with artisans. Travel that gives back, not takes." },
    { Icon: Star, t: "Quietly Luxe", d: "Hand-thrown pottery, hand-loomed linens, and food worth a trip on its own." },
  ];
  return (
    <section className="py-16 md:py-28 bg-[oklch(0.94_0.018_80)] relative">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal className="max-w-2xl mb-10 md:mb-16">
          <SectionLabel>Why Mangrove Village</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest leading-tight">
            A different kind of <span className="italic">resort</span>.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-sunset/40 hover:shadow-soft transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-forest flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <it.Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-forest mb-2">{it.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img src={mangroveImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[oklch(0.18_0.025_150/0.85)]" />
      <div className="container mx-auto px-5 sm:px-6 relative text-beige">
        <Reveal>
          <SectionLabel>Resort Highlights</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl max-w-3xl leading-[1.05]">
            Everything you'll quietly fall in love with.
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-beige/10 border border-beige/10 rounded-2xl overflow-hidden">
          {[
            ["River-view cottages", "Wooden, candle-lit, with private decks."],
            ["Sunrise boat tours", "Drifting through the silent mangroves."],
            ["Bonfire BBQ nights", "Local catch, mango wood smoke, stars."],
            ["Cultural evenings", "Baul music, folk dance, lantern light."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="bg-[oklch(0.18_0.025_150)] p-6 md:p-8 hover:bg-[oklch(0.22_0.03_150)] transition-colors">
              <div className="font-display text-3xl text-sunset mb-3">0{i + 1}</div>
              <h3 className="font-display text-xl mb-2">{t}</h3>
              <p className="text-beige/70 text-sm leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomsPreview() {
  const rooms = [
    { name: "Riverside AC Cottage", price: "৳ 8,500", img: roomImg, sub: "King bed · River deck · 2 guests" },
    { name: "Wooden Family Cottage", price: "৳ 12,000", img: cottageImg, sub: "2 bedrooms · Garden · 4 guests" },
    { name: "Group Dormitory", price: "৳ 2,500", img: villageImg, sub: "Per bed · Shared bath · 8 beds" },
  ];
  return (
    <section className="py-16 md:py-28 bg-beige">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <Reveal>
            <SectionLabel>Stay With Us</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest max-w-xl">
              Rooms that feel like a long exhale.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/rooms" className="inline-flex items-center gap-2 text-forest hover:text-sunset font-medium">
              All accommodations <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {rooms.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <Link to="/rooms" className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-glow transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={r.img} alt={r.name} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-display text-xl md:text-2xl text-forest">{r.name}</h3>
                    <div className="text-right">
                      <div className="text-sunset font-display text-xl">{r.price}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">/ night</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{r.sub}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesStrip() {
  const packs = [
    { t: "Day Long Boat Tour", d: "1 day", p: "৳ 2,800", img: boatImg },
    { t: "Sundarbans 2D · 1N", d: "2 days", p: "৳ 7,500", img: mangroveImg },
    { t: "Group Friends Package", d: "3 days · 8 pax", p: "৳ 35,000", img: bbqImg },
    { t: "Family Retreat", d: "3 days · 4 pax", p: "৳ 28,000", img: cottageImg },
  ];
  return (
    <section className="py-16 md:py-28 bg-[oklch(0.94_0.018_80)]">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal className="max-w-2xl mb-10 md:mb-14">
          <SectionLabel>Curated Packages</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest">
            Choose your <span className="italic">adventure</span>.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packs.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <Link to="/packages" className="group relative block rounded-2xl overflow-hidden h-[320px] sm:h-[380px]">
                <img src={p.img} alt={p.t} loading="lazy" width={800} height={1000} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.025_150)] via-transparent to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-beige">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-sunset mb-2">{p.d}</div>
                  <h3 className="font-display text-2xl mb-1">{p.t}</h3>
                  <div className="text-beige/80 text-sm">From {p.p}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  const exp = [
    { t: "Sundarbans Boat Safari", img: boatImg },
    { t: "Village Walk & Tea", img: villageImg },
    { t: "Riverside BBQ Night", img: bbqImg },
    { t: "Mangrove Photography", img: mangroveImg },
  ];
  return (
    <section className="py-16 md:py-28 bg-beige">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal className="max-w-2xl mb-10 md:mb-14">
          <SectionLabel>Eco Experiences</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest">
            Slow days, story-rich nights.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {exp.map((e, i) => (
            <Reveal key={e.t} delay={i * 0.08}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                <img src={e.img} alt={e.t} loading="lazy" width={600} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.025_150/0.95)] to-transparent" />
                <div className="absolute bottom-0 p-5 text-beige">
                  <h3 className="font-display text-xl">{e.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoodSection() {
  return (
    <section className="py-16 md:py-28 bg-[oklch(0.18_0.025_150)] text-beige overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={foodImg} alt="Traditional Bengali meal" loading="lazy" width={1400} height={1000} className="rounded-3xl shadow-glow w-full" />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-sunset rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-accent-foreground font-display text-center leading-tight">
              <div>
                <div className="text-xs uppercase tracking-widest">Farm</div>
                <div className="text-sm md:text-base">to table</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SectionLabel>Food & Dining</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            Bengali kitchen.<br /><span className="italic text-gradient-sunset">River-fresh, slow-cooked.</span>
          </h2>
          <p className="mt-6 text-beige/75 leading-relaxed">
            Duck curry simmered over wood fire. Mangrove fish smoked at the riverbank.
            Khichuri on rainy mornings. Every meal is a memory waiting to be made.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {["Duck Curry", "Smoked River Fish", "Deshi Chicken", "BBQ Nights", "Khichuri Breakfast", "Village Desserts"].map((d) => (
              <li key={d} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sunset" /> {d}</li>
            ))}
          </ul>
          <Link to="/dining" className="mt-10 inline-flex items-center gap-2 text-sunset hover:gap-3 transition-all">
            Explore the menu <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Adventure() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img src={boatImg} alt="" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-[oklch(0.14_0.025_150/0.6)]" />
      <div className="container mx-auto px-5 sm:px-6 relative text-beige text-center">
        <Reveal>
          <SectionLabel><span className="mx-auto">Sundarbans Adventure</span></SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-7xl max-w-4xl mx-auto leading-[1.05] text-balance">
            The world's largest mangrove forest. <span className="italic">Right at your door.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-beige/80">
            Spot a Royal Bengal Tiger's pugmark in the morning mud. Listen to a sunset concert of birds.
            Drift past ancient roots that drink from the salt and the sky.
          </p>
          <Link to="/experiences" className="mt-10 inline-flex items-center gap-2 bg-sunset text-accent-foreground px-7 py-3.5 rounded-full font-medium hover:scale-[1.03] transition-all shadow-glow">
            Plan your expedition <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [mangroveImg, cottageImg, boatImg, villageImg, foodImg, bbqImg, roomImg, heroImg];
  return (
    <section className="py-16 md:py-28 bg-beige">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8 md:mb-12">
          <Reveal>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest">Moments from the village.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/gallery" className="text-forest hover:text-sunset inline-flex items-center gap-2">View all <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className={`overflow-hidden rounded-xl ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                <img src={src} alt="" loading="lazy" width={600} height={600} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "It felt like the forest had been waiting for us. Best three days of our year.", n: "Tahmid & Sumaiya", l: "Honeymoon, Dhaka" },
    { q: "I came to disconnect. I left with friendships and a folder full of photos.", n: "Sarah Mitchell", l: "Photographer, UK" },
    { q: "Our company retreat. Everyone came back lighter — and louder, in the best way.", n: "Imran K.", l: "Founder, Chattogram" },
  ];
  return (
    <section className="py-16 md:py-28 bg-[oklch(0.94_0.018_80)]">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-10 md:mb-16">
          <SectionLabel><span className="mx-auto">Guests</span></SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest">Travelers, in their words.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.map((x, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-border h-full">
                <Quote className="w-6 h-6 text-sunset mb-4" />
                <p className="font-display text-lg md:text-xl text-forest leading-snug italic">"{x.q}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium text-forest">{x.n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{x.l}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCta() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img src={cottageImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.025_150/0.95)] via-[oklch(0.14_0.025_150/0.7)] to-transparent" />
      <div className="container mx-auto px-5 sm:px-6 relative text-beige max-w-2xl">
        <Reveal>
          <SectionLabel>Reserve</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05]">
            The river is patient. <br /><span className="italic text-gradient-sunset">Your weekend doesn't have to be.</span>
          </h2>
          <p className="mt-6 text-beige/80 max-w-md">
            Cottages fill quickly during winter and rainy season. Reserve early and we'll save you the best view.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/booking" className="bg-sunset text-accent-foreground px-7 py-3.5 rounded-full font-medium hover:scale-[1.03] transition-all shadow-glow">
              Book Your Stay
            </Link>
            <Link to="/contact" className="glass text-beige px-7 py-3.5 rounded-full font-medium hover:bg-beige/15 transition-all">
              Talk to us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LocationMap() {
  return (
    <section className="py-16 md:py-28 bg-beige">
      <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <Reveal>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest leading-tight">
            On the edge of the<br />Sundarbans.
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <div className="flex gap-3"><MapPin className="w-5 h-5 text-sunset shrink-0 mt-0.5" /> Jaynagar, Dakop, Khulna, Bangladesh</div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-md">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">From Khulna</div>
              <div className="font-display text-2xl text-forest mt-1">~ 2.5 hrs</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">From Dhaka</div>
              <div className="font-display text-2xl text-forest mt-1">~ 7 hrs</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden shadow-soft border border-border h-[320px] md:h-[420px]">
            <iframe
              title="Mangrove Village location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=89.45%2C22.55%2C89.65%2C22.72&layer=mapnik&marker=22.6356%2C89.5450"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
