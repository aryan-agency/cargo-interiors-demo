import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://cargo-interiors-demo.lovable.app";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEOHead({ title, description, canonical }: SEOHeadProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Self-referencing canonical: use explicit prop or derive from current path
    const canonicalUrl = canonical || `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    return () => {
      // Clean up canonical on unmount to prevent stale tags
      const el = document.querySelector('link[rel="canonical"]');
      if (el) el.remove();
    };
  }, [title, description, canonical, pathname]);

  return null;
}
