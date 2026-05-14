import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import foodImg from "@/assets/food-bengali.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import villageImg from "@/assets/village-life.jpg";
import { menu } from "@/data/dining";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Food & Dining — Mangrove Village" },
      { name: "description", content: "Traditional Bengali kitchen by the river: duck curry, mangrove fish, BBQ nights, khichuri mornings." },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
  }),
  component: DiningPage,
});

function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Food & Dining"
        title="A kitchen that the forest cooks with."
        subtitle="River-fresh, farm-grown, slow-cooked. Eaten on a wooden deck, in lantern light."
        image={foodImg}
      />
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
          <Reveal className="lg:col-span-1 lg:sticky lg:top-32">
            <SectionLabel>The Menu</SectionLabel>
            <h2 className="font-display text-4xl text-forest leading-tight">A small list, deeply done.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We change the menu with the river. What's caught that morning, what the village garden sent over, what the season is whispering about.
              Tell us your dietary needs and we will quietly take care of you.
            </p>
            <div className="mt-8 p-5 rounded-xl bg-card border border-border">
              <div className="text-xs uppercase tracking-widest text-sunset">All meals</div>
              <div className="mt-2 font-display text-3xl text-forest">৳ 1,400 <span className="text-sm text-muted-foreground font-body">/ day, full board</span></div>
            </div>
          </Reveal>
          <div className="lg:col-span-2 space-y-16">
            {menu.map((cat, ci) => (
              <Reveal key={cat.cat} delay={ci * 0.08}>
                <h3 className="font-display text-3xl text-forest mb-6 leaf-divider">{cat.cat}</h3>
                <ul className="grid sm:grid-cols-2 gap-6">
                  {cat.items.map((it) => (
                    <li key={it.n} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-soft transition-all">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={it.img} alt={it.n} loading="lazy" width={600} height={450} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-baseline justify-between gap-3">
                          <div className="font-display text-xl text-forest">{it.n}</div>
                          <div className="text-sunset font-display text-lg shrink-0">৳ {it.p}</div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1.5">{it.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <img src={bbqImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.14_0.025_150/0.7)]" />
        <div className="container mx-auto px-6 relative text-beige max-w-2xl">
          <Reveal>
            <SectionLabel>BBQ Nights</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">Friday by the river.</h2>
            <p className="mt-5 text-beige/80">
              Every Friday, we light the long fire. Local catch, char-kissed paneer, fresh paratha, and a glass
              of tamarind cooler. The kind of meal that ends with someone playing a guitar.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-24 bg-[oklch(0.94_0.018_80)]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <img src={villageImg} alt="" loading="lazy" width={1400} height={1000} className="rounded-2xl shadow-soft" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>Sourced Locally</SectionLabel>
            <h2 className="font-display text-4xl text-forest">From the neighbours' garden, by 9am.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our vegetables come from twelve household gardens within a ten-minute walk. Our fish lands twice
              a day. Our spices are blended in our kitchen — never bottled, never aged.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
