import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { rooms, getRoom } from "@/data/rooms";
import { Bed, Users, Wind, Eye, Check, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = getRoom(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.room.name} — Mangrove Village` },
      { name: "description", content: loaderData.room.blurb },
      { property: "og:title", content: loaderData.room.name },
      { property: "og:description", content: loaderData.room.blurb },
      { property: "og:image", content: loaderData.room.img },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl text-forest">Room not found</h1>
        <Link to="/rooms" className="mt-6 inline-block text-sunset">← Back to all rooms</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-6">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: RoomDetail,
});

function RoomDetail() {
  const { room } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const idx = rooms.findIndex((r) => r.slug === room.slug);
  const next = rooms[(idx + 1) % rooms.length];
  const prev = rooms[(idx - 1 + rooms.length) % rooms.length];

  return (
    <>
      <section className="relative h-[65vh] min-h-[420px] md:min-h-[480px] overflow-hidden">
        <img src={room.gallery[active]} alt={room.name} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.025_150/0.4)] via-transparent to-[oklch(0.14_0.025_150/0.85)]" />
        <div className="container mx-auto px-5 sm:px-6 absolute inset-0 flex flex-col justify-end pb-10 md:pb-16 text-beige">
          <Link to="/rooms" className="inline-flex items-center gap-2 text-sm text-beige/70 hover:text-sunset mb-6">
            <ArrowLeft className="w-4 h-4" /> All rooms
          </Link>
          <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-3">{room.view} · {room.size}</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight max-w-3xl">{room.name}</h1>
          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-3xl sm:text-4xl text-sunset">৳ {room.price}</span>
            <span className="text-beige/70 text-sm">per night</span>
          </div>
        </div>
      </section>

      <section className="py-10 bg-beige">
        <div className="container mx-auto px-5 sm:px-6 grid grid-cols-4 gap-2 sm:gap-3">
          {room.gallery.map((g: string, i: number) => (
            <button key={i} onClick={() => setActive(i)}
              className={`aspect-[4/3] overflow-hidden rounded-xl ring-2 transition-all ${active === i ? "ring-sunset" : "ring-transparent opacity-70 hover:opacity-100"}`}>
              <img src={g} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-beige">
        <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Stat Icon={Bed} v={room.beds} l="Bedding" />
                <Stat Icon={Users} v={room.guests} l="Capacity" />
                <Stat Icon={Wind} v={room.size} l="Size" />
                <Stat Icon={Eye} v={room.view} l="View" />
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl text-forest mb-5">About this cottage</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {room.long.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl text-forest mb-5">Amenities</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {room.amenities.map((a: string) => (
                  <li key={a} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border text-sm">
                    <Check className="w-4 h-4 text-sunset shrink-0" /><span>{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl text-forest mb-5">Policies</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {room.policies.map((p: string) => (
                  <li key={p} className="flex gap-2"><Check className="w-4 h-4 text-sunset mt-0.5 shrink-0" /><span>{p}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-32 bg-[oklch(0.18_0.025_150)] text-beige rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-sunset">From</div>
                <div className="font-display text-3xl sm:text-4xl">৳ {room.price}<span className="text-sm text-beige/60 font-body"> / night</span></div>
              </div>
              <Link to="/booking" className="block w-full text-center bg-sunset text-accent-foreground font-medium py-3.5 rounded-full hover:scale-[1.02] transition-all">
                Reserve this cottage
              </Link>
              <Link to="/contact" className="block w-full text-center border border-beige/20 py-3 rounded-full text-sm hover:bg-beige/5">
                Ask a question
              </Link>
              <div className="pt-4 border-t border-beige/10 text-sm text-beige/70 space-y-2">
                <div className="flex gap-2"><MapPin className="w-4 h-4 text-sunset shrink-0" /> Jaynagar, Dakop, Khulna</div>
                <div>Free cancellation · Instant confirmation</div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[oklch(0.94_0.018_80)]">
        <div className="container mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-5 md:gap-6">
          <NeighbourCard label="Previous" room={prev} align="left" />
          <NeighbourCard label="Next" room={next} align="right" />
        </div>
      </section>
    </>
  );
}

function Stat({ Icon, v, l }: { Icon: any; v: string; l: string }) {
  return (
    <div className="p-4 rounded-xl bg-card border border-border">
      <Icon className="w-5 h-5 text-sunset mb-2" />
      <div className="text-sm text-forest font-medium">{v}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{l}</div>
    </div>
  );
}

function NeighbourCard({ label, room, align }: { label: string; room: { slug: string; name: string; img: string }; align: "left" | "right" }) {
  return (
    <Link to="/rooms/$slug" params={{ slug: room.slug }} className={`group flex gap-5 items-center p-4 rounded-2xl bg-card border border-border hover:shadow-soft transition-all ${align === "right" ? "md:flex-row-reverse md:text-right" : ""}`}>
      <img src={room.img} alt="" className="w-28 h-28 object-cover rounded-xl shrink-0" />
      <div className={align === "right" ? "md:text-right" : ""}>
        <div className="text-xs uppercase tracking-widest text-sunset mb-1">{label}</div>
        <div className="font-display text-xl text-forest group-hover:text-sunset transition-colors">{room.name}</div>
        <div className={`mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground ${align === "right" ? "md:flex-row-reverse" : ""}`}>
          {align === "right" ? <><ArrowLeft className="w-4 h-4" /> View</> : <>View <ArrowRight className="w-4 h-4" /></>}
        </div>
      </div>
    </Link>
  );
}
