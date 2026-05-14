import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Facebook, Instagram, CheckCircle2, User, AtSign, FileText } from "lucide-react";
import boatImg from "@/assets/boat-sunrise.jpg";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mangrove Village Eco Resort" },
      { name: "description", content: "Talk to our team about your stay, packages, group bookings, weddings, or anything else. We reply within an hour." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const departments = [
  { v: "reservations", label: "Reservations" },
  { v: "groups", label: "Group & corporate booking" },
  { v: "events", label: "Weddings & events" },
  { v: "press", label: "Press & partnerships" },
  { v: "general", label: "General enquiry" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", department: "reservations", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's plan your escape together."
        subtitle="A real human reads every message. We typically reply in under an hour during the day."
        image={boatImg}
      />

      <section className="pt-8 pb-12 md:py-20 bg-beige">
        <div className="container mx-auto px-5 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 -mt-12 md:-mt-32 relative z-10">
          <ContactCard icon={Phone} eyebrow="Call us" lines={["01710-222888", "01301-337603"]} cta="Call now" link="tel:+8801710222888" />
          <ContactCard icon={MessageCircle} eyebrow="WhatsApp" lines={["+88 01710-222888", "Mon–Sun · 7am–11pm"]} cta="Open WhatsApp" link="https://wa.me/8801710222888" />
          <ContactCard icon={Mail} eyebrow="Email" lines={["mangrovevillage", "ecoresort@gmail.com"]} cta="Send email" link="mailto:mangrovevillageecoresort@gmail.com" />
          <ContactCard icon={MapPin} eyebrow="Find us" lines={["Jaynagar, Dakop", "Khulna, Bangladesh"]} cta="Get directions" link="https://maps.google.com/?q=Jaynagar+Dakop+Khulna" />
        </div>
      </section>

      <section className="py-12 md:py-20 bg-beige">
        <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-5 gap-10 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="bg-card rounded-3xl border border-border p-6 sm:p-8 md:p-10 space-y-6 shadow-soft">
              {!sent ? (
                <>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-2">Send a message</div>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-forest">We'd love to hear from you.</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" icon={User}>
                      <input required value={form.name} onChange={update("name")} className="input" placeholder="Tasnim Ahmed" />
                    </Field>
                    <Field label="Email address" icon={AtSign}>
                      <input required type="email" value={form.email} onChange={update("email")} className="input" placeholder="you@email.com" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone (optional)" icon={Phone}>
                      <input type="tel" value={form.phone} onChange={update("phone")} className="input" placeholder="01710-000000" />
                    </Field>
                    <Field label="Department" icon={FileText}>
                      <select value={form.department} onChange={update("department")} className="input">
                        {departments.map((d) => <option key={d.v} value={d.v}>{d.label}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Subject">
                    <input value={form.subject} onChange={update("subject")} className="input" placeholder="Anniversary trip in November" />
                  </Field>
                  <Field label="Your message">
                    <textarea required rows={6} value={form.message} onChange={update("message")} className="input resize-none" placeholder="Tell us about your dates, group size, and anything we should know…" />
                  </Field>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground max-w-sm">
                      By sending this message you agree to our <Link to="/privacy" className="text-sunset underline-offset-2 hover:underline">privacy policy</Link>.
                    </p>
                    <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 bg-sunset text-accent-foreground px-7 py-3.5 rounded-full font-medium hover:scale-[1.02] transition-all disabled:opacity-60">
                      {submitting ? "Sending…" : <>Send message <Send className="w-4 h-4" /></>}
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-12 text-center space-y-5">
                  <CheckCircle2 className="w-16 h-16 mx-auto text-sunset" />
                  <h2 className="font-display text-3xl text-forest">Message received.</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you, {form.name || "friend"}. A real person from our team will reply to {form.email || "you"} shortly — usually within the hour.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", department: "reservations", subject: "", message: "" }); }} className="text-sm text-sunset hover:underline">Send another message</button>
                </div>
              )}

              <style>{`.input { width:100%; background:var(--background); border:1px solid var(--border); border-radius:0.75rem; padding:0.85rem 1rem; font-size:0.95rem; outline:none; transition: border-color .2s, box-shadow .2s; }
              .input:focus { border-color: var(--sunset); box-shadow: 0 0 0 3px color-mix(in oklab, var(--sunset) 15%, transparent); }`}</style>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="bg-[oklch(0.18_0.025_150)] text-beige rounded-3xl p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-3">Opening hours</div>
                <h3 className="font-display text-2xl mb-5">Always tea, almost always answering.</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Reservations desk", "7:00 AM – 11:00 PM"],
                    ["Front desk (resort)", "Open 24 hours"],
                    ["Restaurant", "7:00 AM – 10:30 PM"],
                    ["WhatsApp & calls", "7:00 AM – 11:00 PM"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start justify-between gap-4 border-b border-beige/10 pb-3 last:border-0">
                      <span className="flex items-center gap-2 text-beige/80"><Clock className="w-3.5 h-3.5 text-sunset" />{k}</span>
                      <span className="text-beige">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
                <iframe
                  title="Mangrove Village Eco Resort location"
                  src="https://www.google.com/maps?q=Jaynagar+Dakop+Khulna+Bangladesh&output=embed"
                  className="w-full h-72"
                  loading="lazy"
                />
                <div className="bg-card p-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-display text-lg text-forest">Mangrove Village Eco Resort</div>
                    <div className="text-xs text-muted-foreground">Jaynagar, Dakop, Khulna 9270, Bangladesh</div>
                  </div>
                  <a href="https://maps.google.com/?q=Jaynagar+Dakop+Khulna" target="_blank" rel="noopener" className="text-xs text-sunset hover:underline shrink-0">Open in Maps ↗</a>
                </div>
              </div>

              <div className="bg-card rounded-3xl border border-border p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-3">Follow the journey</div>
                <div className="flex gap-3">
                  {[
                    { Icon: Facebook, href: "#", l: "Facebook" },
                    { Icon: Instagram, href: "#", l: "Instagram" },
                    { Icon: MessageCircle, href: "https://wa.me/8801710222888", l: "WhatsApp" },
                  ].map(({ Icon, href, l }) => (
                    <a key={l} href={href} aria-label={l} className="w-11 h-11 rounded-full bg-beige border border-border flex items-center justify-center text-forest hover:bg-sunset hover:text-accent-foreground transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[oklch(0.94_0.018_80)]">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-3">Frequently asked</div>
            <h2 className="font-display text-3xl sm:text-4xl text-forest">Quick answers before you write.</h2>
            <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-4 md:gap-5 text-left">
              {[
                ["How do I get to the resort from Khulna?", "We arrange complimentary pickup from Khulna city. Confirm your arrival time at booking."],
                ["What's your cancellation policy?", "Free cancellation up to 48 hours before check-in. Full refund, no questions asked."],
                ["Do you accept group bookings?", "Yes — 8 guests or more get a dedicated coordinator and a custom package. Use the Groups department."],
                ["Is the resort family-friendly?", "Very. We have family cottages, a small library, and quiet experiences designed for kids."],
              ].map(([q, a]) => (
                <div key={q} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="font-display text-lg text-forest mb-2">{q}</div>
                  <div className="text-sm text-muted-foreground">{a}</div>
                </div>
              ))}
            </div>
            <Link to="/faq" className="mt-10 inline-flex items-center gap-2 text-sunset hover:underline">See all FAQs →</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon?: any; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {Icon ? <Icon className="w-3.5 h-3.5" /> : null}{label}
      </span>
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, eyebrow, lines, cta, link }: { icon: any; eyebrow: string; lines: string[]; cta: string; link: string }) {
  return (
    <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noopener" className="group p-6 rounded-2xl bg-card border border-border hover:border-sunset/60 hover:shadow-soft transition-all flex flex-col">
      <span className="w-12 h-12 rounded-xl bg-gradient-forest flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </span>
      <div className="text-xs uppercase tracking-widest text-sunset mb-1.5">{eyebrow}</div>
      <div className="text-forest font-medium leading-snug">
        {lines.map((l) => <div key={l} className="break-words">{l}</div>)}
      </div>
      <div className="mt-4 text-xs text-muted-foreground group-hover:text-sunset transition-colors">{cta} →</div>
    </a>
  );
}
