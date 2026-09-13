import { createFileRoute, Link } from "@tanstack/react-router";
import heroPreview from "@/assets/hero-preview.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioGym from "@/assets/portfolio-gym.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Mahamed Idris | Social Media Content for Small Businesses" },
      {
        name: "description",
        content:
          "I help small businesses build a professional social media presence through engaging graphics, short-form videos, and consistent content. Let's work together.",
      },
      {
        property: "og:title",
        content: "Ahmed Mahamed Idris | Social Media Content for Small Businesses",
      },
      {
        property: "og:description",
        content:
          "Professional social media graphics, short-form video editing, and content planning for restaurants, cafés, hotels, fashion brands, gyms, and local shops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const clientTypes = [
  "Restaurants & cafés",
  "Hotels",
  "Fashion brands",
  "Real estate",
  "Gyms & fitness",
  "Beauty businesses",
  "Local shops",
  "Personal brands",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Social media content for small businesses
              </p>
              <h1 className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl text-balance">
                Professional social media that gets small businesses noticed.
              </h1>
              <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-cream/75 sm:text-lg text-pretty">
                I help restaurants, boutiques, gyms, and local shops stay consistent online with
                engaging graphics, short-form video, and content ready to publish.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary transition hover:bg-primary/90"
                >
                  Let's Work Together
                </Link>
                <Link
                  to="/portfolio"
                  className="rounded-lg px-6 py-3.5 text-sm font-semibold text-cream ring-1 ring-cream/25 transition hover:bg-cream/10"
                >
                  View My Work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-lg bg-cream p-3 ring-1 ring-black/5">
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand/50">
                    Content preview
                  </span>
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Sample
                  </span>
                </div>
                <img
                  src={heroPreview}
                  alt="Sample social media story designs displayed on a smartphone with coffee and notebook"
                  width={1024}
                  height={768}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TYPES */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Ideal clients
          </p>
          <div className="flex flex-wrap gap-2">
            {clientTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground ring-1 ring-brand/5"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Services built around your goals
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not just software skills — solutions that keep your brand consistent, professional,
              and on schedule.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              number="01"
              title="Social Graphics"
              description="Promos, product highlights, quotes, testimonials, event posts, and story designs that keep your feed on-brand."
            />
            <ServiceCard
              number="02"
              title="Short-Form Video"
              description="Instagram Reels, Facebook Reels, and YouTube Shorts with captions, B-roll, transitions, music, and clean audio."
            />
            <ServiceCard
              number="03"
              title="Content Planning"
              description="Content pillars, caption ideas, hashtag strategy, and monthly calendars so you always know what's next."
            />
            <ServiceCard
              number="04"
              title="AI-Assisted Creation"
              description="Brainstorming, hooks, scripts, captions, and repurposing that make content production faster without losing quality."
            />
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground ring-1 ring-brand/10 transition hover:bg-accent"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Selected work
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Concept and sample projects — clearly labeled so you know what to expect.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90"
            >
              View full portfolio
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              image={portfolioRestaurant}
              label="Sample Project"
              title="Bella Tavola Restaurant"
              type="Restaurant & café"
              description="10 Facebook + 10 Instagram post concepts with captions."
            />
            <ProjectCard
              image={portfolioFashion}
              label="Concept Project"
              title="Vela Studio"
              type="Fashion brand"
              description="Short-form reel edit with captions, B-roll, and transitions."
            />
            <ProjectCard
              image={portfolioGym}
              label="Sample Project"
              title="FitZone Gym"
              type="Fitness"
              description="30-day content calendar with pillars and hashtag strategy."
            />
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A simple, reliable process
            </h2>
            <p className="mt-4 text-muted-foreground">
              Organized from start to finish so you always know where your project stands.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-5">
            {[
              { step: "01", title: "Discover", text: "We learn your business, audience, and goals." },
              { step: "02", title: "Plan", text: "We define pillars and a clear content calendar." },
              { step: "03", title: "Create", text: "I design graphics and edit videos to match." },
              { step: "04", title: "Review", text: "You approve before anything is finalized." },
              { step: "05", title: "Deliver", text: "You receive ready-to-publish content on time." },
            ].map((item) => (
              <div key={item.step} className="bg-background p-6">
                <span className="font-display text-2xl font-semibold text-primary">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="border-t border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Why work with me
              </h2>
              <p className="mt-4 text-muted-foreground">
                I focus on practical benefits — not promises I can't guarantee.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Consistent, on-brand content every month",
                "Graphics + short videos + planning in one place",
                "AI-assisted workflow for faster production",
                "Clear communication and simple revisions",
                "Content designed around real business goals",
                "No invented results or exaggerated claims",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-secondary p-5 ring-1 ring-brand/5">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Client testimonials
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Real client testimonials will appear here once I have them. I never invent reviews or
            social proof.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-dashed border-border bg-background p-6 text-muted-foreground"
              >
                <p className="font-display text-lg italic text-foreground/70">
                  “[Client testimonial will appear here]”
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest">Client name · Business type</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            <FaqItem
              question="Do you create both graphics and videos?"
              answer="Yes. I design social media graphics and edit short-form videos, so your content stays consistent across formats."
            />
            <FaqItem
              question="Can you build a monthly content calendar?"
              answer="Absolutely. Calendars are included in the Growth and Complete packages, with pillars, captions, and posting dates."
            />
            <FaqItem
              question="Do you work with existing brand colors?"
              answer="Yes. I match your existing palette, fonts, and visual style so everything feels like your brand."
            />
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Ask me anything →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to make your social media look more professional?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream/75">
            Tell me about your business and content needs. I'll reply with a clear next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary transition hover:bg-primary/90"
            >
              Let's Work Together
            </Link>
            <Link
              to="/portfolio"
              className="rounded-lg px-7 py-3.5 text-sm font-semibold text-cream ring-1 ring-cream/25 transition hover:bg-cream/10"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-card p-6 ring-1 ring-brand/5 transition hover:shadow-md">
      <span className="text-xs font-semibold text-primary">({number})</span>
      <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground text-pretty">{description}</p>
    </div>
  );
}

function ProjectCard({
  image,
  label,
  title,
  type,
  description,
}: {
  image: string;
  label: string;
  title: string;
  type: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-lg bg-card ring-1 ring-brand/5 transition hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1024}
          height={768}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{label}</span>
        <h3 className="mt-2 font-display text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{type}</p>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
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
