import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mangrove Village" },
      { name: "description", content: "Common questions about reaching the resort, what to pack, payment, and tours." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  ["How do we reach the resort?", "From Khulna it's about a 2.5 hour drive plus a short boat ride. We arrange pickup and drop on request — please share your arrival details when booking."],
  ["What should I pack?", "Light cottons, a long-sleeve layer for boat rides, mosquito repellent, comfortable closed walking shoes, a swimsuit, sunscreen and a hat. We provide everything else."],
  ["Is the resort family friendly?", "Very much so. We have family cottages, kid-safe boat tours, a small library and a quiet garden. Children under 5 stay free."],
  ["What payment methods do you accept?", "bKash, Nagad, bank transfer, and cash on arrival. A 30% advance secures your booking; the balance is due on check-in."],
  ["Is it safe in monsoon?", "Yes — we have full-cover boat rides and indoor activities. Monsoon is one of the most beautiful times to visit, but we recommend booking ahead because cottages fill quickly."],
  ["Can I see tigers?", "Tiger sightings are rare and never guaranteed — we prefer it that way. You will see plenty of birds, deer, crocodiles, and fresh pugmarks if you're lucky."],
  ["Is Wi-Fi available?", "Yes, in the common areas and at reception. Cottages are intentionally Wi-Fi-free — we think you'll thank us."],
  ["Can you handle group bookings?", "Absolutely. We host college trips, company retreats, weddings, and friend reunions. Talk to us for a custom plan."],
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Good questions, honestly answered."
        subtitle="If you don't see your question, write to us and we'll add it."
        image={mangroveImg}
      />
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map(([q, a], i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-sunset/40 transition-colors">
                  <AccordionTrigger className="font-display text-lg text-forest text-left hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
