import { useEffect } from "react";

export function MetaTags() {
  useEffect(() => {
    // Update page title — SEO optimized with primary keywords
    document.title =
      "Destination Wedding Venue in Kerala | Kanjira's Luxeves Pavilion – Backwater Wedding Location";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description =
      "Kanjira's Luxeves Pavilion is Kerala's premier destination wedding venue set amidst the iconic backwaters. Offering Grand Lawn (2000 guests), Celebration Pavilion (400 guests) & Intimate Pavilion (100 guests). Book your backwater wedding in Kerala today.";
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords =
      "destination wedding venue Kerala, backwater wedding venue Kerala, outdoor wedding lawn Kerala, luxury wedding venue Kerala, Kerala destination wedding, wedding venue Alleppey, wedding venue Alappuzha, Kerala backwater wedding, Grand Lawn wedding, intimate wedding pavilion Kerala, wedding reception venue Kerala";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags: Record<string, string> = {
      "og:title": "Destination Wedding Venue in Kerala | Kanjira's Luxeves Pavilion",
      "og:description":
        "Experience the magic of Kerala's backwaters at Kanjira's Luxeves Pavilion — a luxury destination wedding venue with Grand Lawn, Celebration Pavilion & Intimate Pavilion.",
      "og:type": "website",
      "og:locale": "en_IN",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", window.location.href);
      document.head.appendChild(canonical);
    }
  }, []);

  return null;
}