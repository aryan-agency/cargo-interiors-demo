import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import type { BlogInternalLink } from "@/data/blogPosts";

const shareButtonClass =
  "px-4 py-2 rounded-full border border-border text-sm font-body text-muted-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_8px_hsl(var(--primary)/0.3)] hover:scale-105 transition-all duration-300";

function ShareButtons({ url, title }: { url: string; title: string }) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-muted-foreground font-body text-xs uppercase tracking-[0.15em]">Share:</span>
      <a href={`https://wa.me/?text=${encodedTitle}%20${encoded}`} target="_blank" rel="noopener noreferrer" className={shareButtonClass}>
        WhatsApp
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`} target="_blank" rel="noopener noreferrer" className={shareButtonClass}>
        Facebook
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noopener noreferrer" className={shareButtonClass}>
        LinkedIn
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className={shareButtonClass}>
        X / Twitter
      </a>
      <button onClick={copyLink} className={shareButtonClass}>
        {copied ? "✓ Link Copied!" : "Copy Link"}
      </button>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const postUrl = `https://cargo-interiors-demo.lovable.app/blog/${post.slug}`;

  // JSON-LD BlogPosting schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Cargo Interiors",
      logo: { "@type": "ImageObject", url: "https://cargo-interiors-demo.lovable.app/favicon.ico" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  // JSON-LD FAQ schema
  const faqSchema = post.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <>
      <SEOHead title={post.metaTitle} description={post.metaDescription} canonical={postUrl} />

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Breadcrumb */}
      <section className="pt-28 pb-4 px-6">
        <div className="max-w-3xl mx-auto">
          <nav className="font-body text-xs text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-body text-[10px] uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground font-body text-sm mb-8">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Content */}
      <Section className="px-6 pb-12">
        <article className="max-w-3xl mx-auto prose-custom">
          {post.content.map((block, i) => {
            switch (block.type) {
              case "paragraph": {
                const shouldLink = post.internalLink && i === post.internalLink.paragraphIndex && block.text;
                if (shouldLink && block.text!.includes(post.internalLink!.anchorText)) {
                  const parts = block.text!.split(post.internalLink!.anchorText);
                  return (
                    <p key={i} className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                      {parts[0]}
                      <Link to={post.internalLink!.url} className="text-primary hover:underline">
                        {post.internalLink!.anchorText}
                      </Link>
                      {parts.slice(1).join(post.internalLink!.anchorText)}
                    </p>
                  );
                }
                return <p key={i} className="text-muted-foreground font-body text-base leading-relaxed mb-6">{block.text}</p>;
              }
              case "heading":
                return <h2 key={i} className="font-display text-2xl font-bold mt-10 mb-4 text-foreground">{block.text}</h2>;
              case "subheading":
                return <h3 key={i} className="font-display text-xl font-semibold mt-8 mb-3 text-foreground">{block.text}</h3>;
              case "list":
                return (
                  <ul key={i} className="mb-6 space-y-2 pl-1">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground font-body text-base leading-relaxed">
                        <span className="text-primary mt-1.5 text-xs">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case "image":
                return (
                  <figure key={i} className="my-8 rounded-xl overflow-hidden">
                    <img src={block.src} alt={block.alt || ""} loading="lazy" className="w-full object-cover" />
                    {block.alt && <figcaption className="text-muted-foreground text-xs font-body mt-2 text-center">{block.alt}</figcaption>}
                  </figure>
                );
              default:
                return null;
            }
          })}
        </article>
      </Section>

      {/* FAQ Section */}
      {post.faq && post.faq.length > 0 && (
        <Section className="px-6 pb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <details key={i} className="group bg-card border border-border rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-body text-sm font-semibold text-foreground">
                    {item.question}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-lg">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-muted-foreground font-body text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Share */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-8" />
          <ShareButtons url={postUrl} title={post.title} />
        </div>
      </section>

      {/* Universal CTA */}
      <Section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 text-center">
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
            If you're searching for the best interior designer in Gurugram or looking for office and showroom interior designers near you, Cargo Interiors is here to help. We specialize in creating high-performance commercial spaces with a focus on design, functionality, and results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919050656162?text=Hi%2C%20Cargo%20Interiors!%20I%20wanted%20to%20discuss%20about%20some%20interior%20designing%20project%2C%20Please%20reply.%20Thanks" target="_blank" rel="noopener noreferrer"
              className="btn-glow">
              Book Consultation
            </a>
            <Link to="/contact-us"
              className="btn-glow-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      <Section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3).map((related) => (
              <Link key={related.slug} to={`/blog/${related.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={related.image} alt={related.imageAlt} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                    {related.title}
                  </h3>
                  <span className="text-muted-foreground font-body text-xs mt-2 block">
                    {new Date(related.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
