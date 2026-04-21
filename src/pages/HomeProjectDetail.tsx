import { Link, useParams, Navigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import WistiaPlayer from "@/components/WistiaPlayer";
import { Phone, MessageCircle, MapPin, ArrowLeft } from "lucide-react";
import { getHomeProjectBySlug, HOME_PROJECTS } from "@/data/homeProjects";

export default function HomeProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getHomeProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/home-interior-design-portfolio-gurgaon" replace />;

  const related = HOME_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${project.title} | Cargo Interiors`}
        description={project.preview.slice(0, 158)}
      />

      {/* HERO */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/home-interior-design-portfolio-gurgaon"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Home Interior Portfolio
          </Link>
          <SectionLabel>Home Interior · {project.type}</SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {project.location}
          </p>
        </div>
      </section>

      {/* VIDEO + DESCRIPTION */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[360px_1fr] gap-10 items-start">
          <div className="lg:sticky lg:top-28">
            <WistiaPlayer mediaId={project.mediaId} aspect={0.5625} />
          </div>
          <div className="space-y-5 text-muted-foreground font-body text-[15px] leading-relaxed">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING BLOCK */}
      <Section className="py-14 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Explore More from Cargo Interiors
          </h2>
          <p className="text-muted-foreground font-body">
            Browse our full <Link to="/home-interior-design-portfolio-gurgaon" className="text-primary hover:underline">home interior design portfolio in Gurgaon</Link>,
            or connect directly with the <Link to="/interior-designer-in-gurgaon" className="text-primary hover:underline">best interior designer in Gurgaon</Link> to
            start scoping your own home in Gurugram.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Planning a Similar Home Interior in Gurgaon?
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
          Share your floor plan and we'll prepare a tailored design direction inspired by projects like this one — completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton>Get Free Consultation</CTAButton>
          <a href="tel:+919050656162" className="btn-glow-outline inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow-outline inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> WhatsApp Now
          </a>
        </div>
      </Section>

      {/* RELATED PROJECTS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
            More Home Interior Projects in Gurgaon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group rounded-xl border border-border bg-card/40 p-5 hover:border-primary/50 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary">{p.type}</span>
                <h4 className="font-display text-base font-bold mt-2 mb-2 leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {p.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
