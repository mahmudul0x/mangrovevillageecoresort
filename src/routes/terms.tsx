import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import villageImg from "@/assets/village-life.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Mangrove Village" },
      { name: "description", content: "The terms governing bookings, cancellations, and stays." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="The fine print, kept short." image={villageImg} />
      <section className="py-20 bg-beige">
        <article className="container mx-auto px-6 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-2xl text-forest">Bookings</h2>
          <p>A 30% advance secures your reservation. The balance is due at check-in. Bookings are non-transferable.</p>
          <h2 className="font-display text-2xl text-forest">Cancellation</h2>
          <p>Free cancellation up to 48 hours before check-in. Within 48 hours, the advance is non-refundable but transferable to a future stay within 6 months.</p>
          <h2 className="font-display text-2xl text-forest">Conduct</h2>
          <p>We are an eco-resort. Smoking is permitted only in designated outdoor areas. Loud music is not the right music for the forest after 10pm.</p>
          <h2 className="font-display text-2xl text-forest">Wildlife</h2>
          <p>The Sundarbans is a protected ecosystem. Please follow your guide's instructions, do not feed wildlife, and carry out everything you carry in.</p>
          <h2 className="font-display text-2xl text-forest">Liability</h2>
          <p>The resort is not liable for personal accidents, lost belongings, or weather-related itinerary changes.</p>
        </article>
      </section>
    </>
  );
}
