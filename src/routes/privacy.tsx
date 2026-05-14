import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import cottageImg from "@/assets/cottage-river.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Mangrove Village" },
      { name: "description", content: "How we collect, use, and protect your information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Your data, treated with care." image={cottageImg} />
      <section className="py-20 bg-beige">
        <article className="container mx-auto px-6 max-w-3xl prose prose-stone text-muted-foreground space-y-6 text-base leading-relaxed">
          <p><em>Last updated: May 2026</em></p>
          <h2 className="font-display text-2xl text-forest">What we collect</h2>
          <p>Booking details (name, contact, dates) and any messages you send us. Nothing more than what we need to host you well.</p>
          <h2 className="font-display text-2xl text-forest">How we use it</h2>
          <p>To confirm your stay, communicate logistics, and (rarely) send you our seasonal newsletter — only if you opted in.</p>
          <h2 className="font-display text-2xl text-forest">Sharing</h2>
          <p>We never sell your data. We share it only with payment processors and pickup partners required to fulfil your booking.</p>
          <h2 className="font-display text-2xl text-forest">Your rights</h2>
          <p>Email us anytime to request access to, correction of, or deletion of your data: mangrovevillageecoresort@gmail.com.</p>
        </article>
      </section>
    </>
  );
}
