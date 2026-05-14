import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useMemo, useState } from "react";
import { Check, Calendar, Users, Bed, Tag, CreditCard, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Sparkles, MessageCircle } from "lucide-react";
import cottageImg from "@/assets/cottage-river.jpg";
import { rooms } from "@/data/rooms";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Mangrove Village" },
      { name: "description", content: "Real-time availability, instant confirmation, secure payment with bKash, Nagad, or card." },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

const PACKAGES = [
  { id: "stay", label: "Stay only", desc: "Just the cottage and meals", price: 0 },
  { id: "boat", label: "Day boat tour", desc: "4-hour Sundarbans channel tour", price: 2800 },
  { id: "sundarbans", label: "Sundarbans 2D1N", desc: "Two-day forest expedition", price: 7500 },
  { id: "couples", label: "Couples package", desc: "Candlelit dinner + boat ride", price: 3000 },
];

const STEPS = ["Dates & guests", "Room", "Add-ons", "Your details", "Payment"] as const;

const todayStr = () => new Date().toISOString().split("T")[0];
const addDays = (d: string, n: number) => {
  const dt = new Date(d); dt.setDate(dt.getDate() + n);
  return dt.toISOString().split("T")[0];
};
const diffDays = (a: string, b: string) => Math.max(1, Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000));
const genCode = () => "MV-" + Math.random().toString(36).slice(2, 8).toUpperCase();

function BookingPage() {
  const [step, setStep] = useState(0);
  const [checkIn, setCheckIn] = useState(addDays(todayStr(), 7));
  const [checkOut, setCheckOut] = useState(addDays(todayStr(), 9));
  const [guests, setGuests] = useState(2);
  const [roomSlug, setRoomSlug] = useState(rooms[0].slug);
  const [packageId, setPackageId] = useState("stay");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [payment, setPayment] = useState("bkash");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", country: "Bangladesh", requests: "", agree: false });
  const [confirmed, setConfirmed] = useState<{ code: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const room = rooms.find((r) => r.slug === roomSlug)!;
  const pack = PACKAGES.find((p) => p.id === packageId)!;
  const nights = diffDays(checkIn, checkOut);
  const subtotal = room.priceNum * nights + pack.price;
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const tax = Math.round((subtotal - discount) * 0.05);
  const total = subtotal - discount + tax;

  const stepValid = useMemo(() => {
    if (step === 0) return checkIn && checkOut && new Date(checkOut) > new Date(checkIn) && guests > 0;
    if (step === 3) return details.name.trim() && /\S+@\S+\.\S+/.test(details.email) && details.phone.trim().length >= 6 && details.agree;
    return true;
  }, [step, checkIn, checkOut, guests, details]);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const applyCoupon = () => setCouponApplied(coupon.trim().toUpperCase() === "MANGROVE10");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setConfirmed({ code: genCode() });
    setSubmitting(false);
  };

  if (confirmed) return <Confirmation code={confirmed.code} room={room} pack={pack} nights={nights} guests={guests} checkIn={checkIn} checkOut={checkOut} total={total} email={details.email} name={details.name} />;

  return (
    <>
      <PageHero
        eyebrow="Reserve"
        title="Save your cottage."
        subtitle="Real-time availability · Free cancellation up to 48 hrs · Instant confirmation."
        image={cottageImg}
      />

      <section className="py-12 md:py-16 bg-beige">
        <div className="container mx-auto px-5 sm:px-6 grid lg:grid-cols-3 gap-8 lg:gap-10">
          <Reveal className="lg:col-span-2">
            <div className="bg-card rounded-3xl border border-border p-5 sm:p-8 md:p-10 shadow-soft">
              <Stepper step={step} />

              <div className="mt-8 md:mt-10 space-y-6">
                {step === 0 && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl sm:text-3xl text-forest">When and how many?</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label={<><Calendar className="inline w-3.5 h-3.5 mr-1" /> Check-in</>}>
                        <input type="date" min={todayStr()} value={checkIn} onChange={(e) => { setCheckIn(e.target.value); if (new Date(e.target.value) >= new Date(checkOut)) setCheckOut(addDays(e.target.value, 1)); }} className="input" />
                      </Field>
                      <Field label={<><Calendar className="inline w-3.5 h-3.5 mr-1" /> Check-out</>}>
                        <input type="date" min={addDays(checkIn, 1)} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="input" />
                      </Field>
                      <Field label={<><Users className="inline w-3.5 h-3.5 mr-1" /> Guests</>}>
                        <input type="number" min={1} max={20} value={guests} onChange={(e) => setGuests(Math.max(1, +e.target.value))} className="input" />
                      </Field>
                      <div className="flex items-end">
                        <div className="w-full p-4 rounded-xl bg-beige border border-border text-sm">
                          <div className="text-xs uppercase tracking-widest text-sunset mb-1">Stay length</div>
                          <div className="font-display text-2xl text-forest">{nights} {nights === 1 ? "night" : "nights"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl sm:text-3xl text-forest">Choose your cottage</h2>
                    <div className="grid gap-4">
                      {rooms.map((r) => (
                        <button type="button" key={r.slug} onClick={() => setRoomSlug(r.slug)}
                          className={`text-left flex gap-3 sm:gap-5 p-3 sm:p-4 rounded-2xl border transition-all ${roomSlug === r.slug ? "border-sunset bg-sunset/5 ring-2 ring-sunset/30" : "border-border bg-beige hover:border-sunset/40"}`}>
                          <img src={r.img} alt={r.name} className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-xl shrink-0" />
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
                              <div className="font-display text-lg sm:text-xl text-forest">{r.name}</div>
                              <div className="text-sunset font-display text-base sm:text-lg">৳ {r.price}<span className="text-xs text-muted-foreground"> /night</span></div>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">{r.beds} · {r.guests} · {r.size}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2">{r.blurb}</div>
                          </div>
                          <div className={`hidden sm:block w-6 h-6 rounded-full border-2 shrink-0 self-center transition-all ${roomSlug === r.slug ? "border-sunset bg-sunset" : "border-border"}`}>
                            {roomSlug === r.slug && <Check className="w-4 h-4 text-accent-foreground m-auto" strokeWidth={3} />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl sm:text-3xl text-forest">Add an experience</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {PACKAGES.map((p) => (
                        <button type="button" key={p.id} onClick={() => setPackageId(p.id)}
                          className={`text-left p-5 rounded-2xl border transition-all ${packageId === p.id ? "border-sunset bg-sunset/5" : "border-border bg-beige hover:border-sunset/40"}`}>
                          <div className="flex items-center justify-between">
                            <div className="font-display text-lg text-forest">{p.label}</div>
                            <Sparkles className={`w-4 h-4 ${packageId === p.id ? "text-sunset" : "text-muted-foreground"}`} />
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                          <div className="mt-3 text-sunset font-display">{p.price ? `+ ৳ ${p.price.toLocaleString()}` : "Included"}</div>
                        </button>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 pt-3">
                      <Field label={<><Tag className="inline w-3.5 h-3.5 mr-1" /> Coupon code</>}>
                        <div className="flex gap-2">
                          <input value={coupon} onChange={(e) => { setCoupon(e.target.value); setCouponApplied(false); }} className="input" placeholder="Try MANGROVE10" />
                          <button type="button" onClick={applyCoupon} className="px-5 rounded-xl bg-forest text-beige text-sm font-medium hover:brightness-110">Apply</button>
                        </div>
                        {couponApplied && <div className="text-xs text-sunset mt-2">Coupon applied — 10% off</div>}
                        {coupon && !couponApplied && <div className="text-xs text-muted-foreground mt-2">Click apply to validate.</div>}
                      </Field>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl sm:text-3xl text-forest">Your details</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full name *"><input required value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className="input" placeholder="Your name" /></Field>
                      <Field label="Phone *"><input required type="tel" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} className="input" placeholder="01710-000000" /></Field>
                      <Field label="Email *"><input required type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} className="input" placeholder="you@email.com" /></Field>
                      <Field label="Country"><input value={details.country} onChange={(e) => setDetails({ ...details, country: e.target.value })} className="input" /></Field>
                    </div>
                    <Field label="Special requests">
                      <textarea rows={3} value={details.requests} onChange={(e) => setDetails({ ...details, requests: e.target.value })} className="input" placeholder="Dietary needs, anniversary surprises, arrival time…" />
                    </Field>
                    <label className="flex items-start gap-3 text-sm text-muted-foreground">
                      <input type="checkbox" checked={details.agree} onChange={(e) => setDetails({ ...details, agree: e.target.checked })} className="mt-1 accent-[var(--sunset)]" />
                      <span>I agree to the <Link to="/terms" className="text-sunset underline-offset-2 hover:underline">terms</Link> and <Link to="/privacy" className="text-sunset underline-offset-2 hover:underline">privacy policy</Link>.</span>
                    </label>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={submit} className="space-y-5">
                    <h2 className="font-display text-2xl sm:text-3xl text-forest">Payment method</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { id: "bkash", label: "bKash", desc: "Mobile wallet · instant" },
                        { id: "nagad", label: "Nagad", desc: "Mobile wallet · instant" },
                        { id: "card", label: "Credit / Debit card", desc: "Visa, Mastercard" },
                        { id: "bank", label: "Bank transfer", desc: "1–2 business days" },
                        { id: "cash", label: "Cash on arrival", desc: "Pay at front desk" },
                      ].map((p) => (
                        <button type="button" key={p.id} onClick={() => setPayment(p.id)}
                          className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${payment === p.id ? "border-sunset bg-sunset/5" : "border-border bg-beige hover:border-sunset/40"}`}>
                          <CreditCard className="w-5 h-5 text-sunset mt-0.5 shrink-0" />
                          <div>
                            <div className="font-medium text-forest">{p.label}</div>
                            <div className="text-xs text-muted-foreground">{p.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {(payment === "bkash" || payment === "nagad") && (
                      <Field label={`${payment === "bkash" ? "bKash" : "Nagad"} account number`}>
                        <input className="input" placeholder="01XXXXXXXXX" />
                      </Field>
                    )}
                    {payment === "card" && (
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field label="Card number"><input className="input" placeholder="4242 4242 4242 4242" /></Field>
                        <Field label="Name on card"><input className="input" placeholder="As printed" /></Field>
                        <Field label="Expiry"><input className="input" placeholder="MM / YY" /></Field>
                        <Field label="CVC"><input className="input" placeholder="123" /></Field>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                      <ShieldCheck className="w-4 h-4 text-sunset" /> Secured. We never store payment details on our server.
                    </div>
                    <button type="submit" disabled={submitting} className="w-full bg-sunset text-accent-foreground font-medium py-4 rounded-full hover:scale-[1.01] transition-all shadow-soft disabled:opacity-60 inline-flex items-center justify-center gap-2">
                      {submitting ? "Processing payment…" : <>Pay ৳ {total.toLocaleString()} & confirm <ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </form>
                )}
              </div>

              {step !== 4 && (
                <div className="mt-10 flex items-center justify-between gap-4">
                  <button type="button" onClick={back} disabled={step === 0} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-forest disabled:opacity-30">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button type="button" onClick={next} disabled={!stepValid} className="inline-flex items-center gap-2 bg-forest text-beige px-7 py-3 rounded-full text-sm font-medium hover:brightness-110 disabled:opacity-40">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <aside className="lg:sticky lg:top-32 bg-[oklch(0.18_0.025_150)] text-beige rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex gap-4 items-center pb-5 border-b border-beige/10">
                <img src={room.img} alt={room.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-sunset">Your stay</div>
                  <div className="font-display text-lg leading-tight">{room.name}</div>
                </div>
              </div>
              <div className="text-sm space-y-2 text-beige/80">
                <Line k="Check-in" v={checkIn} />
                <Line k="Check-out" v={checkOut} />
                <Line k="Nights" v={String(nights)} />
                <Line k="Guests" v={String(guests)} />
                <Line k="Package" v={pack.label} />
              </div>
              <div className="border-t border-beige/10 pt-4 space-y-2 text-sm">
                <Line k={`Room × ${nights}`} v={`৳ ${(room.priceNum * nights).toLocaleString()}`} />
                {pack.price > 0 && <Line k="Package" v={`৳ ${pack.price.toLocaleString()}`} />}
                {discount > 0 && <Line k="Coupon (MANGROVE10)" v={`-৳ ${discount.toLocaleString()}`} accent />}
                <Line k="Service & VAT (5%)" v={`৳ ${tax.toLocaleString()}`} />
              </div>
              <div className="border-t border-beige/10 pt-4 flex items-baseline justify-between">
                <span className="text-beige/70 text-sm">Total</span>
                <span className="font-display text-3xl text-sunset">৳ {total.toLocaleString()}</span>
              </div>
              <ul className="pt-4 space-y-2 text-sm text-beige/80">
                <li className="flex gap-2"><Check className="w-4 h-4 text-sunset shrink-0" /><span>Free cancellation up to 48 hrs</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-sunset shrink-0" /><span>Pickup from Khulna available</span></li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-sunset shrink-0" /><span>Instant WhatsApp confirmation</span></li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <style>{`.input { width:100%; background:var(--background); border:1px solid var(--border); border-radius:0.75rem; padding:0.85rem 1rem; font-size:0.95rem; outline:none; transition: border-color .2s, box-shadow .2s; }
      .input:focus { border-color: var(--sunset); box-shadow: 0 0 0 3px color-mix(in oklab, var(--sunset) 15%, transparent); }`}</style>
    </>
  );
}

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2">
      {STEPS.map((label, i) => (
        <div key={label} className="flex-1 flex items-center gap-2 min-w-0">
          <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-medium border-2 transition-all ${i < step ? "bg-sunset border-sunset text-accent-foreground" : i === step ? "border-sunset text-sunset bg-sunset/10" : "border-border text-muted-foreground"}`}>
            {i < step ? <Check className="w-4 h-4" /> : i + 1}
          </div>
          <span className={`text-xs uppercase tracking-widest hidden md:inline truncate ${i === step ? "text-forest font-medium" : "text-muted-foreground"}`}>{label}</span>
          {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-sunset" : "bg-border"}`} />}
        </div>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function Line({ k, v, accent = false }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-beige/60">{k}</span>
      <span className={accent ? "text-sunset" : "text-beige"}>{v}</span>
    </div>
  );
}

function Confirmation({ code, room, pack, nights, guests, checkIn, checkOut, total, email, name }:
  { code: string; room: any; pack: any; nights: number; guests: number; checkIn: string; checkOut: string; total: number; email: string; name: string }) {
  return (
    <section className="min-h-screen py-32 bg-beige">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-card rounded-3xl border border-border p-10 text-center shadow-soft">
          <CheckCircle2 className="w-20 h-20 mx-auto text-sunset mb-5" />
          <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-3">Booking confirmed</div>
          <h1 className="font-display text-4xl text-forest">Thank you, {name || "friend"}.</h1>
          <p className="mt-4 text-muted-foreground">A confirmation has been sent to {email}. Our team will WhatsApp you within the hour.</p>

          <div className="mt-8 p-5 rounded-2xl bg-beige border border-border inline-block">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Booking reference</div>
            <div className="font-display text-3xl text-forest tracking-wide">{code}</div>
          </div>

          <div className="mt-8 text-left grid sm:grid-cols-2 gap-3 text-sm">
            <Detail k="Cottage" v={room.name} />
            <Detail k="Package" v={pack.label} />
            <Detail k="Check-in" v={checkIn} />
            <Detail k="Check-out" v={checkOut} />
            <Detail k="Nights" v={String(nights)} />
            <Detail k="Guests" v={String(guests)} />
          </div>
          <div className="mt-6 p-4 rounded-xl bg-forest text-beige flex items-baseline justify-between">
            <span className="text-beige/70 text-sm">Amount paid</span>
            <span className="font-display text-2xl text-sunset">৳ {total.toLocaleString()}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {(() => {
              const msg = `*New Booking — Mangrove Village*%0A%0A*Ref:* ${code}%0A*Name:* ${name}%0A*Email:* ${email}%0A*Cottage:* ${room.name}%0A*Package:* ${pack.label}%0A*Check-in:* ${checkIn}%0A*Check-out:* ${checkOut}%0A*Nights:* ${nights}%0A*Guests:* ${guests}%0A*Total Paid:* ৳ ${total.toLocaleString()}`;
              return (
                <a
                  href={`https://wa.me/8801710222888?text=${msg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all shadow-soft"
                >
                  <MessageCircle className="w-4 h-4" /> Send booking to WhatsApp
                </a>
              );
            })()}
            <Link to="/" className="inline-flex items-center gap-2 bg-sunset text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all">Back to home</Link>
            <Link to="/experiences" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm hover:bg-beige">Browse experiences</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="p-3 rounded-lg bg-beige border border-border">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="text-forest font-medium">{v}</div>
    </div>
  );
}
