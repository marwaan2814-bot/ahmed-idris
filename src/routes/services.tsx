import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ahmed Mahamed Idris | Social Media Content & Video" },
      {
        name: "description",
        content:
          "Social media graphic design, short-form video editing, content planning, and AI-assisted content creation for small businesses.",
      },
      {
        property: "og:title",
        content: "Services — Ahmed Mahamed Idris | Social Media Content & Video",
      },
      {
        property: "og:description",
        content:
          "Professional social media graphics, short-form video editing, content planning, and AI-assisted content creation for small businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Social Media Graphic Design",
    description:
      "Visual posts that make your business look professional and consistent across platforms.",
    items: [
      "Promotional posts",
      "Product/service highlights",
      "Educational posts",
      "Quote/inspirational posts",
      "Testimonials",
      "Event announcements",
      "Story designs",
    ],
  },
  {
    title: "Short-Form Video Editing",
    description:
      "Reels and Shorts that grab attention and keep your audience watching.",
    items: [
      "Instagram Reels",
      "Facebook Reels",
      "YouTube Shorts",
      "Captions",
      "Text animation",
      "B-roll",
      "Transitions",
      "Music and sound effects",
      "Basic color and audio adjustments",
    ],
  },
  {
    title: "Social Media Content Planning",
    description:
      "A clear plan so you never run out of content ideas or miss a posting schedule.",
    items: [
      "Content ideas",
      "Content pillars",
      "Captions",
      "Hashtag strategy",
      "Content calendars",
      "Basic content strategy",
    ],
  },
  {
    title: "AI-Assisted Content Creation",
    description:
      "Smarter workflows that speed up production while keeping your brand voice human.",
    items: [
      "Content brainstorming",
      "Hooks",
      "Captions",
      "Scripts",
      "Content repurposing",
      "Research assistance",
      "Faster content production",
    ],
  },
];

const packages = [
  {
    name: "Starter",
    price: "$___ / month",
    features: [
      "[_] social-media graphics",
      "[_] short videos",
      "Basic captions",
      "Monthly content plan",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    price: "$___ / month",
    features: [
      "[_] social-media graphics",
      "[_] short videos",
      "Captions",
      "Content calendar",
      "Basic content strategy",
    ],
    recommended: true,
  },
  {
    name: "Complete",
    price: "$___ / month",
    features: [
      "[_] social-media graphics",
      "[_] short videos",
      "Captions",
      "Content calendar",
      "Content strategy",
      "Basic monthly performance report",
    ],
    recommended: false,
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Content solutions for small businesses.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-cream/75 sm:text-lg">
            Everything you need to show up consistently on social media — from graphics and videos
            to planning and strategy.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-lg bg-card p-8 ring-1 ring-brand/5 transition hover:shadow-md"
              >
                <span className="text-xs font-semibold text-primary">({String(index + 1).padStart(2, "0")})</span>
                <h2 className="mt-3 font-display text-2xl font-semibold text-card-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Service packages
            </h2>
            <p className="mt-4 text-muted-foreground">
              Simple monthly packages. Prices are placeholders — update them when you're ready.
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
                <ul className="mt-6 space-y-3">
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
                <Link
                  to="/contact"
                  className={`mt-6 block rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                    pkg.recommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground ring-1 ring-brand/10 hover:bg-accent"
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Not sure which package fits?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Send me a message about your business and I'll suggest the best starting point.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
