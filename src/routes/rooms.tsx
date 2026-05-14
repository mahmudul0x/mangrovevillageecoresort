import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import cottageImg from "@/assets/cottage-river.jpg";
import { Bed, Users, Wifi, Wind, Coffee, Bath, Check, ArrowRight } from "lucide-react";
import { rooms } from "@/data/rooms";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Cottages — Mangrove Village" },
      { name: "description", content: "AC cottages, family wooden cottages, and group dormitories — all with mangrove views and quiet luxury." },
      { property: "og:title", content: "Rooms & Cottages — Mangrove Village" },
      { property: "og:description", content: "Wooden cottages with river views, lantern light, and linen sheets." },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Cottages"
        title="Soft beds. Wooden walls. Endless river."
        subtitle="Five room types. One feeling: that you finally arrived somewhere."
        image={cottageImg}
      />
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 space-y-20">
          {rooms.map((r, i) => (
            <Reveal key={r.slug}>
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Link to="/rooms/$slug" params={{ slug: r.slug }} className="relative block group overflow-hidden rounded-3xl">
                  <img src={r.img} alt={r.name} loading="lazy" width={1400} height={1000} className="rounded-3xl shadow-soft w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 glass-dark text-beige px-4 py-2 rounded-full text-xs uppercase tracking-widest">Available</div>
                </Link>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-forest leading-tight">{r.name}</h2>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-sunset font-display text-3xl">৳ {r.price}</span>
                    <span className="text-muted-foreground text-sm">/ night</span>
                  </div>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{r.blurb}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                    <div className="flex flex-col gap-1 p-3 rounded-lg bg-card border border-border">
                      <Bed className="w-4 h-4 text-sunset" /><span className="text-xs text-muted-foreground">{r.beds}</span>
                    </div>
                    <div className="flex flex-col gap-1 p-3 rounded-lg bg-card border border-border">
                      <Users className="w-4 h-4 text-sunset" /><span className="text-xs text-muted-foreground">{r.guests}</span>
                    </div>
                    <div className="flex flex-col gap-1 p-3 rounded-lg bg-card border border-border">
                      <Wind className="w-4 h-4 text-sunset" /><span className="text-xs text-muted-foreground">{r.size}</span>
                    </div>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    {r.amenities.slice(0, 6).map((a) => (
                      <li key={a} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-sunset" /> {a}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/rooms/$slug" params={{ slug: r.slug }} className="inline-flex items-center gap-2 bg-sunset text-accent-foreground px-6 py-3 rounded-full font-medium hover:scale-[1.03] transition-all">
                      View details <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/booking" className="border border-border px-6 py-3 rounded-full font-medium hover:bg-card transition-all">Book now</Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <AmenitiesStrip />
    </>
  );
}

function AmenitiesStrip() {
  const am = [
    { Icon: Coffee, t: "Tea, anytime" },
    { Icon: Wifi, t: "Wi-Fi where you need it" },
    { Icon: Bath, t: "Hot showers" },
    { Icon: Wind, t: "Cool breezes & AC" },
  ];
  return (
    <section className="bg-[oklch(0.18_0.025_150)] py-16">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-beige text-center">
        {am.map((a, i) => (
          <Reveal key={a.t} delay={i * 0.08}>
            <a.Icon className="w-7 h-7 mx-auto text-sunset mb-3" />
            <div className="font-display text-lg">{a.t}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
