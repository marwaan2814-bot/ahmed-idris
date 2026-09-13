import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Ahmed Mahamed Idris | How We Work Together" },
      {
        name: "description",
        content:
          "A simple 5-step process: Discover, Plan, Create, Review, Deliver. Organized, reliable, and easy to work with.",
      },
      {
        property: "og:title",
        content: "Process — Ahmed Mahamed Idris | How We Work Together",
      },
      {
        property: "og:description",
        content:
          "Discover, Plan, Create, Review, Deliver — a clear process for social media content that keeps your project on track.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a conversation about your business, your audience, your goals, and what success looks like for you on social media. I listen before I create.",
    deliverables: ["Brief questionnaire", "Brand discovery call", "Goal alignment"],
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I turn what I learned into a clear content plan — content pillars, post types, and a monthly calendar so you always know what's coming.",
    deliverables: ["Content pillars", "Monthly calendar", "Hashtag approach"],
  },
  {
    number: "03",
    title: "Create",
    description:
      "I design your graphics and edit your short-form videos to match your brand. Everything is built to be ready to publish.",
    deliverables: ["Graphics", "Short-form videos", "Captions"],
  },
  {
    number: "04",
    title: "Review",
    description:
      "You review the content and share feedback. I make revisions so the final result matches your vision before anything goes live.",
    deliverables: ["Revision round", "Your feedback integrated", "Approved content"],
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "You receive the final, organized files on schedule — ready to publish or hand off to your posting workflow.",
    deliverables: ["Final files", "Posting notes", "Monthly summary"],
  },
];

function ProcessPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Organized, reliable, and easy to work with.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-cream/75 sm:text-lg">
            A clear 5-step process so you always know where your project stands and what comes next.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid gap-6 rounded-lg bg-card p-8 ring-1 ring-brand/5 sm:grid-cols-12"
              >
                <div className="sm:col-span-2">
                  <span className="font-display text-5xl font-semibold text-primary">
                    {step.number}
                  </span>
                </div>
                <div className="sm:col-span-7">
                  <h2 className="font-display text-2xl font-semibold text-card-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{step.description}</p>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    What you get
                  </p>
                  <ul className="mt-3 space-y-2">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 h-6 w-px bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE NOTE */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How long does a project take?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Timelines depend on the package and how much content you need. Most starter projects are
            planned within a few days, with delivery scheduled around your posting needs. I'll give
            you a clear timeline before we begin.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell me about your business and I'll walk you through the next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Let's Work Together
            </Link>
            <Link
              to="/services"
              className="rounded-lg bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground ring-1 ring-brand/10 transition hover:bg-accent"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
