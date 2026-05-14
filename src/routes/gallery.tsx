import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import boatImg from "@/assets/boat-sunrise.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import villageImg from "@/assets/village-life.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import foodImg from "@/assets/food-bengali.jpg";
import roomImg from "@/assets/room-interior.jpg";
import heroImg from "@/assets/hero-mangrove.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mangrove Village" },
      { name: "description", content: "Photographs from the Sundarbans, the village, and the cottages by the river." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const photos = [
  { src: heroImg, cat: "Nature", h: "tall" },
  { src: cottageImg, cat: "Resort", h: "short" },
  { src: boatImg, cat: "Adventure", h: "short" },
  { src: foodImg, cat: "Food", h: "tall" },
  { src: villageImg, cat: "Village", h: "short" },
  { src: bbqImg, cat: "Nights", h: "short" },
  { src: mangroveImg, cat: "Nature", h: "tall" },
  { src: roomImg, cat: "Resort", h: "short" },
  { src: heroImg, cat: "Nature", h: "short" },
  { src: villageImg, cat: "Village", h: "short" },
  { src: bbqImg, cat: "Nights", h: "tall" },
  { src: cottageImg, cat: "Resort", h: "short" },
];

const cats = ["All", "Nature", "Resort", "Food", "Village", "Adventure", "Nights"];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A village told in pictures."
        subtitle="Scroll slowly. The forest does."
        image={mangroveImg}
      />
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  active === c ? "bg-forest text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:border-sunset"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <button
                  onClick={() => setOpen(p.src)}
                  className={`mb-4 block w-full overflow-hidden rounded-xl group ${p.h === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"}`}
                >
                  <img src={p.src} alt={p.cat} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <button className="absolute top-6 right-6 text-beige" onClick={() => setOpen(null)}><X /></button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={open} alt="" className="max-w-full max-h-full rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
