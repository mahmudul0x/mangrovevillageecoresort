import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import villageImg from "@/assets/village-life.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import { Leaf, Users, Heart, Sprout } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mangrove Village Eco Resort" },
      { name: "description", content: "Our story: an eco-luxury retreat born from a love of the Sundarbans and Bangladeshi village culture." },
      { property: "og:title", content: "About — Mangrove Village Eco Resort" },
      { property: "og:description", content: "Our story: an eco-luxury retreat born from a love of the Sundarbans." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A village built for travellers, by the people who live here."
        subtitle="Mangrove Village began as a quiet promise: protect the forest, share the culture, and host the world like family."
        image={villageImg}
      />
      <section className="py-16 md:py-28 bg-beige">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel>The Beginning</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight">
              Born from a love letter to the Sundarbans.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>In 2018, a small group of friends from Khulna returned to a riverside village they had visited as children. The forest was still magnificent — but the world had moved on.</p>
              <p>So we built a place that would invite the world back, gently. Twelve wooden cottages. A kitchen that buys only from neighbours. A boat fleet rowed by guides who know every bend of every channel.</p>
              <p>Today, Mangrove Village is more than a resort. It's a small economy of weavers, fishers, cooks and storytellers — and the most peaceful three days you'll spend this year.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={cottageImg} alt="" loading="lazy" width={1600} height={1200} className="rounded-3xl shadow-glow w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-[oklch(0.94_0.018_80)]">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-2xl mb-14">
            <SectionLabel>What we believe</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-forest">Four values, woven into every stay.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Leaf, t: "Tread lightly", d: "Solar, rainwater, no plastics. The forest gives — we give back." },
              { Icon: Users, t: "Local, always", d: "85% of our team is from the surrounding villages. The rest are family." },
              { Icon: Heart, t: "Hosting as art", d: "We don't have customers. We have guests, and we treat every meal like an occasion." },
              { Icon: Sprout, t: "Quiet luxury", d: "Linen sheets, lantern light, hand-thrown pottery. Comfort without excess." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="p-7 bg-card rounded-2xl border border-border h-full">
                  <v.Icon className="w-7 h-7 text-sunset mb-4" />
                  <h3 className="font-display text-xl text-forest mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <img src={mangroveImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.16_0.025_150/0.85)]" />
        <div className="container mx-auto px-6 relative text-beige text-center max-w-3xl">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl italic leading-tight text-balance">
              "We don't think of ourselves as a hotel. We think of ourselves as a village
              that's learnt to make tea for friends from far away."
            </p>
            <div className="mt-8 text-sunset uppercase tracking-[0.3em] text-xs">— The Mangrove Village team</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
