import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioGym from "@/assets/portfolio-gym.jpg";
import portfolioBeauty from "@/assets/portfolio-beauty.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";
import caseStudyAbc from "@/assets/case-study-abc.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ahmed Mahamed Idris | Social Media Designs & Video" },
      {
        name: "description",
        content:
          "Browse sample social media designs, short-form videos, content calendars, and the ABC Restaurant concept case study.",
      },
      {
        property: "og:title",
        content: "Portfolio — Ahmed Mahamed Idris | Social Media Designs & Video",
      },
      {
        property: "og:description",
        content:
          "Sample social media designs, short-form videos, content strategy, and the ABC Restaurant concept case study.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Social Media Designs", "Short-Form Videos", "Content Strategy"];

const projects = [
  {
    image: portfolioRestaurant,
    label: "Sample Project",
    title: "Bella Tavola Restaurant",
    type: "Restaurant & café",
    category: "Social Media Designs",
    description: "10 Facebook post concepts, 10 Instagram post concepts, captions, and hashtag suggestions.",
  },
  {
    image: portfolioFashion,
    label: "Concept Project",
    title: "Vela Studio",
    type: "Fashion brand",
    category: "Short-Form Videos",
    description: "6 short-form reel edits with hooks, captions, B-roll, transitions, and music.",
  },
  {
    image: portfolioGym,
    label: "Sample Project",
    title: "FitZone Gym",
    type: "Fitness",
    category: "Content Strategy",
    description: "30-day content calendar with pillars, captions, and hashtag strategy.",
  },
  {
    image: portfolioBeauty,
    label: "Concept Project",
    title: "Blush Beauty Salon",
    type: "Beauty business",
    category: "Social Media Designs",
    description: "Instagram post and story templates for services, promotions, and testimonials.",
  },
  {
    image: portfolioRealestate,
    label: "Sample Project",
    title: "Riverton Real Estate",
    type: "Real estate",
    category: "Social Media Designs",
    description: "Property listing posts and promotional graphics with clean typography.",
  },
];

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Work that speaks for itself.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-cream/75 sm:text-lg">
            Sample and concept projects showing the kind of content I can create for your business.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground ring-1 ring-brand/10 hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-lg bg-card ring-1 ring-brand/5 transition hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {project.label}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{project.type}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Featured case study
            </p>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
              Concept / Sample Project
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ABC Restaurant — a full content system
          </h2>
          <p className="mt-4 max-w-[70ch] text-muted-foreground">
            A complete, publish-ready campaign board built for a fictional restaurant. It shows the
            strategy and intended goals — not fabricated results.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg ring-1 ring-brand/5">
            <img
              src={caseStudyAbc}
              alt="ABC Restaurant concept brand board with logo, menu, and social post mockups"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatBox number="10" label="Facebook post concepts" />
            <StatBox number="10" label="Instagram post concepts" />
            <StatBox number="5" label="Short-form video concepts" />
            <StatBox number="30" label="Day content calendar" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-background p-6 ring-1 ring-brand/5">
              <h3 className="font-display text-xl font-semibold text-foreground">Brand style</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Warm navy and coral palette, elegant serif headings, clean layout grid, and
                food-forward photography direction.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 ring-1 ring-brand/5">
              <h3 className="font-display text-xl font-semibold text-foreground">Captions + hashtags</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Example captions written in the restaurant's voice, plus a hashtag strategy mixing
                local, food, and community tags.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 ring-1 ring-brand/5">
              <h3 className="font-display text-xl font-semibold text-foreground">Content goals</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Increase local awareness, showcase the menu, build a consistent posting rhythm, and
                give followers a reason to visit.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 ring-1 ring-brand/5">
              <h3 className="font-display text-xl font-semibold text-foreground">Report template</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                A simple monthly report structure covering content output, posting consistency, and
                key learnings — not fake numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Like what you see?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Let's discuss how similar content could work for your business.
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

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-lg bg-background p-5 ring-1 ring-brand/5">
      <div className="font-display text-4xl font-semibold text-primary">{number}</div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
