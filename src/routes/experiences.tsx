import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import foodImg from "@/assets/food-bengali.jpg";
import { experiences } from "@/data/experiences";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Eco Experiences — Mangrove Village" },
      { name: "description", content: "Sundarbans boat tours, fishing, BBQ nights, village walks, photography, and the rhythm of riverside life." },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Eco Experiences"
        title="Stories you can step into."
        subtitle="Twelve hand-picked experiences. Take one. Take all of them. The forest has time."
        image={mangroveImg}
      />
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((e, i) => (
            <Reveal key={e.slug} delay={(i % 3) * 0.06}>
              <Link to="/experiences/$slug" params={{ slug: e.slug }} className="group relative h-[360px] rounded-2xl overflow-hidden block">
                <img src={e.img} alt={e.t} loading="lazy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.025_150/0.95)] via-[oklch(0.14_0.025_150/0.3)] to-transparent" />
                <div className="absolute top-4 right-4 glass-dark text-beige px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest">{e.duration}</div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-beige">
                  <h3 className="font-display text-2xl">{e.t}</h3>
                  <p className="mt-2 text-sm text-beige/80 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">{e.d}</p>
                  <div className="mt-3 text-xs uppercase tracking-widest text-sunset opacity-0 group-hover:opacity-100 transition-opacity">View details →</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <img src={foodImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.025_150/0.9)]" />
        <div className="container mx-auto px-6 relative text-beige text-center max-w-2xl">
          <Reveal>
            <p className="font-display text-3xl md:text-4xl italic leading-snug">
              "We measure a great day by how few times you reached for your phone."
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
