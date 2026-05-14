import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import boatImg from "@/assets/boat-sunrise.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import villageImg from "@/assets/village-life.jpg";
import roomImg from "@/assets/room-interior.jpg";
import { Clock, Users, Utensils, Bus, ArrowRight, Map } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour & Stay Packages — Mangrove Village" },
      { name: "description", content: "Day tours, overnight Sundarbans expeditions, group and family packages — handcrafted by local guides." },
      { property: "og:title", content: "Tour & Stay Packages — Mangrove Village" },
      { property: "og:description", content: "From a single afternoon to a four-day Sundarbans expedition." },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

const packages = [
  {
    name: "Day Long Boat Tour", price: "2,800", duration: "1 Day", guests: "2–10", img: boatImg,
    blurb: "A morning-to-sunset cruise through the channels. Tea, fresh river fish lunch, and three quiet stops.",
    includes: ["Boat ride (8 hrs)", "Local guide", "Bengali lunch", "Tea & snacks", "Pickup from Khulna"],
  },
  {
    name: "Sundarbans 2 Day · 1 Night", price: "7,500", duration: "2D · 1N", guests: "2–8", img: mangroveImg,
    blurb: "An overnight on the river. Cottage stay, three meals, sunrise birding and a deep-forest channel trail.",
    includes: ["1 night cottage", "All meals", "Boat tour", "Forest walk", "Local guide", "Pickup & drop"],
  },
  {
    name: "Resort Stay Package", price: "11,500", duration: "2D · 1N", guests: "2", img: roomImg,
    blurb: "For couples. Sunset boat ride, candle-lit dinner on the deck, and a slow breakfast on the river.",
    includes: ["AC cottage", "All meals", "Sunset cruise", "Couples dinner", "Welcome drink"],
  },
  {
    name: "Group Friends Package", price: "35,000", duration: "3D · 2N", guests: "8", img: bbqImg,
    blurb: "Built for friends. Dorm or cottages, two BBQ nights, full boat charter, bonfire and cultural evening.",
    includes: ["Dorm/cottages", "All meals", "BBQ nights", "Boat charter", "Bonfire", "Cultural night"],
  },
  {
    name: "Family Retreat", price: "28,000", duration: "3D · 2N", guests: "4", img: cottageImg,
    blurb: "A family cottage, gentle activities, kid-safe boat trips, and a pottery workshop with local artisans.",
    includes: ["Family cottage", "All meals", "Kid-safe boat", "Pottery class", "Village walk"],
  },
  {
    name: "Photographer's Expedition", price: "18,500", duration: "3D · 2N", guests: "2", img: villageImg,
    blurb: "Sunrise and golden-hour boat slots, drone-friendly briefings, and access to remote channels.",
    includes: ["Cottage stay", "All meals", "5 boat sessions", "Local fixer", "Drone briefing"],
  },
];

function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Curated Packages"
        title="An itinerary for every kind of traveller."
        subtitle="From an afternoon on the river to a four-day deep-forest expedition — choose the rhythm that fits."
        image={boatImg}
      />
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <div className="group h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-glow transition-all flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 glass-dark text-beige text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">{p.duration}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-forest">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-sunset" /> {p.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-sunset" /> {p.guests} pax</span>
                    <span className="flex items-center gap-1"><Utensils className="w-3.5 h-3.5 text-sunset" /> Meals</span>
                    <span className="flex items-center gap-1"><Bus className="w-3.5 h-3.5 text-sunset" /> Transport</span>
                  </div>
                  <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                    {p.includes.map((x) => <li key={x} className="flex gap-2"><Map className="w-3.5 h-3.5 text-sunset mt-1 shrink-0" />{x}</li>)}
                  </ul>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <div>
                      <div className="text-sunset font-display text-2xl">৳ {p.price}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">starting</div>
                    </div>
                    <Link to="/booking" className="inline-flex items-center gap-2 bg-forest text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sunset transition-colors">
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
