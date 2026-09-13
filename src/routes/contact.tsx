import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ahmed Mahamed Idris | Let's Work Together" },
      {
        name: "description",
        content:
          "Contact Ahmed Mahamed Idris for social media graphics, short-form video editing, and content planning for your small business.",
      },
      {
        property: "og:title",
        content: "Contact — Ahmed Mahamed Idris | Let's Work Together",
      },
      {
        property: "og:description",
        content:
          "Get in touch for social media content design, short-form video, and content planning for small businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const packages = [
  {
    name: "Starter",
    price: "$___ / month",
    features: ["[_] graphics", "[_] short videos", "Basic captions", "Monthly plan"],
  },
  {
    name: "Growth",
    price: "$___ / month",
    features: ["[_] graphics", "[_] short videos", "Captions", "Calendar", "Basic strategy"],
    recommended: true,
  },
  {
    name: "Complete",
    price: "$___ / month",
    features: ["[_] graphics", "[_] short videos", "Calendar", "Strategy", "Monthly report"],
  },
];

function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Let's talk about your content.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-cream/75 sm:text-lg">
            Tell me about your business and what you need. I'll reply with a clear next step.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* FORM */}
            <div className="rounded-lg bg-card p-6 ring-1 ring-brand/5 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-card-foreground">
                Send a message
              </h2>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("This is a demo form. Connect it to your email or form service to receive inquiries.");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium text-foreground">Name</span>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-foreground">Email</span>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="font-medium text-foreground">Business name</span>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-foreground">What service do you need?</span>
                  <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring">
                    <option>Social media graphics</option>
                    <option>Short-form video editing</option>
                    <option>Content planning / calendar</option>
                    <option>AI-assisted content creation</option>
                    <option>Full monthly package</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-foreground">Message</span>
                  <textarea
                    rows={4}
                    required
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* DETAILS */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground">Contact details</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="rounded-lg bg-secondary p-4 ring-1 ring-brand/5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    <a href="mailto:ahmedmahamed1516@gmail.com" className="hover:underline">
                      ahmedmahamed1516@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="rounded-lg bg-secondary p-4 ring-1 ring-brand/5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    <a href="https://wa.me/251915162814" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      +251 915 162 814
                    </a>
                  </dd>
                </div>
                <div className="rounded-lg bg-secondary p-4 ring-1 ring-brand/5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Call
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    +251 915 162 814 / +251 919 798 452
                  </dd>
                </div>
                <div className="rounded-lg bg-secondary p-4 ring-1 ring-brand/5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Facebook
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">Ahmed Mahamed Idris</dd>
                </div>
                <div className="rounded-lg bg-secondary p-4 ring-1 ring-brand/5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Instagram
                  </dt>
                  <dd className="mt-1 font-medium text-muted-foreground">[Add your Instagram handle]</dd>
                </div>
                <div className="rounded-lg bg-secondary p-4 ring-1 ring-brand/5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </dt>
                  <dd className="mt-1 font-medium text-muted-foreground">[Add your LinkedIn profile]</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Pick a level of support that fits your business. Prices are placeholders.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-lg p-6 ${
                  pkg.recommended
                    ? "bg-brand text-brand-foreground ring-1 ring-primary"
                    : "bg-card text-card-foreground ring-1 ring-brand/5"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                <p
                  className={`mt-2 font-display text-3xl font-semibold ${
                    pkg.recommended ? "text-cream/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.price}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        pkg.recommended ? "text-cream/85" : "text-muted-foreground"
                      }`}
                    >
                      <span className={pkg.recommended ? "text-primary" : "text-primary"}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            <FaqItem
              question="What types of businesses do you work with?"
              answer="I work with restaurants, cafés, hotels, fashion brands, real-estate businesses, gyms, beauty businesses, local shops, personal brands, and small online businesses."
            />
            <FaqItem
              question="Do you create both graphics and videos?"
              answer="Yes. I design social media graphics and edit short-form videos, so your content stays consistent across formats."
            />
            <FaqItem
              question="Can you create a monthly content calendar?"
              answer="Absolutely. Calendars are included in the Growth and Complete packages, with pillars, captions, and posting dates."
            />
            <FaqItem
              question="Do you provide captions?"
              answer="Yes. Starter includes basic captions; Growth and Complete include more detailed caption writing."
            />
            <FaqItem
              question="Can you work with existing brand colors?"
              answer="Yes, I match your existing palette, fonts, and visual style so everything feels like your brand."
            />
            <FaqItem
              question="How does the process work?"
              answer="Discover → Plan → Create → Review → Deliver. I keep it simple and communicate clearly at every step."
            />
            <FaqItem
              question="How long does a project take?"
              answer="Timelines depend on the package and your needs. I'll give you a clear schedule before we begin."
            />
            <FaqItem
              question="Do you offer monthly packages?"
              answer="Yes. Starter, Growth, and Complete are designed as monthly retainer-style packages."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-foreground">
        {question}
        <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
    </details>
  );
}
