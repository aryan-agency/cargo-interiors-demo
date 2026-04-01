import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, SectionLabel } from "@/components/Layout";
import { blogPosts, BLOG_CATEGORIES, type BlogCategory } from "@/data/blogPosts";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Interior Design Blog | Tips & Ideas | Cargo Interiors Gurugram"
        description="Explore expert interior design tips, trends, and project insights from Cargo Interiors — the best interior designer in Gurugram."
        canonical="https://cargo-interiors-demo.lovable.app/blog"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Our Blog</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Interior Design <span className="text-primary">Insights</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Expert tips, project showcases, and design trends from Gurugram's leading interior design studio.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {["All", ...BLOG_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as BlogCategory | "All")}
              className={`font-body text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <Section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary font-body text-[10px] uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground font-body text-xs">
                    {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
                <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-primary font-body text-xs uppercase tracking-[0.15em] font-semibold">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
