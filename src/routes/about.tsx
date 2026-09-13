import { createFileRoute, Link } from "@tanstack/react-router";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ahmed Mahamed Idris | Social Media Content Creator" },
      {
        name: "description",
        content:
          "Learn about Ahmed Mahamed Idris, a social media content creator helping small businesses stay consistent online with graphics, video, and content planning.",
      },
      {
        property: "og:title",
        content: "About — Ahmed Mahamed Idris | Social Media Content Creator",
      },
      {
        property: "og:description",
        content:
          "Helping small businesses build a professional social media presence through graphics, short-form video, and consistent content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const skills = [
  { name: "Canva", level: "Advanced" },
  { name: "CapCut", level: "Advanced" },
  { name: "Social media content design", level: "Experienced" },
  { name: "Content planning", level: "Experienced" },
  { name: "AI-assisted workflows", level: "Experienced" },
  { name: "Short-form video editing", level: "Experienced" },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About me</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            The person behind the content.
          </h1>
        </div>
      </section>

      {/* BIO */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg bg-secondary p-2 ring-1 ring-brand/5">
                <img
                  src={profilePlaceholder}
                  alt="Professional profile photo placeholder for Ahmed Mahamed Idris"
                  width={640}
                  height={800}
                  className="aspect-[4/5] w-full rounded-md object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                [Replace this with your real profile photo]
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ahmed Mahamed Idris
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Social media content creator for small and growing businesses.
              </p>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  I specialize in helping small businesses maintain a consistent and professional
                  social-media presence. My focus is on creating content that looks good, sounds
                  like your brand, and is ready to publish — so you can spend more time running your
                  business.
                </p>
                <p>
                  My practical experience includes designing in Canva, editing short-form videos in
                  CapCut, planning monthly content, and using AI-assisted workflows to speed up
                  brainstorming, captions, and scripts without losing the human touch.
                </p>
                <p>
                  I work with restaurants, cafés, hotels, fashion brands, real-estate businesses,
                  gyms, beauty businesses, local shops, personal brands, and small online
                  businesses.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-secondary p-5 ring-1 ring-brand/5">
                  <h3 className="font-display text-lg font-semibold text-foreground">Location</h3>
                  <p className="mt-2 text-sm text-muted-foreground">[Your city/country]</p>
                </div>
                <div className="rounded-lg bg-secondary p-5 ring-1 ring-brand/5">
                  <h3 className="font-display text-lg font-semibold text-foreground">Languages</h3>
                  <p className="mt-2 text-sm text-muted-foreground">[Languages you speak]</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Please upload your CV file to replace this placeholder.");
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Download CV
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  [CV placeholder — add your real resume file]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Skills & tools
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The tools and skills I use to produce your content.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between rounded-lg bg-background p-5 ring-1 ring-brand/5"
              >
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Want to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I'd love to hear about your business and how I can help you show up consistently online.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Let's Work Together
            </Link>
            <Link
              to="/portfolio"
              className="rounded-lg bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground ring-1 ring-brand/10 transition hover:bg-accent"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
