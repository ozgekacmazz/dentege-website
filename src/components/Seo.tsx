import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;

  /** Full URL veya "/blog/slug" gibi path */
  canonical?: string;

  /** OpenGraph */
  ogType?: "website" | "article";
  ogImage?: string; // full url or "/path"

  /** Twitter */
  twitterCard?: "summary" | "summary_large_image";

  /** Indexing */
  noindex?: boolean;

  /** JSON-LD */
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const BASE_URL = "https://dentege.com.tr";
const DEFAULT_OG_IMAGE = `${BASE_URL}/android-chrome-512x512.png`;

const toAbsoluteUrl = (value?: string) => {
  if (!value) return undefined;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (!value.startsWith("/")) return `${BASE_URL}/${value}`;
  return `${BASE_URL}${value}`;
};

const upsertMeta = (selector: string, createAttrs: Record<string, string>) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
};

const upsertLink = (selector: string, createAttrs: Record<string, string>) => {
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
};

const Seo = ({
               title,
               description,
               canonical: canonicalProp,
               ogType = "website",
               ogImage,
               twitterCard = "summary_large_image",
               noindex = false,
               jsonLd,
             }: SeoProps) => {
  useEffect(() => {
    // 1) Title
    document.title = title;

    // 2) Description
    if (description) {
      let metaDesc = document.querySelector(
          'meta[name="description"]'
      ) as HTMLMetaElement | null;

      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }

      metaDesc.content = description;
    }

    // 3) Canonical (prop varsa onu kullan, yoksa otomatik üret)
    const canonicalUrl =
        canonicalProp?.startsWith("http")
            ? canonicalProp
            : canonicalProp
                ? `${BASE_URL}${canonicalProp.startsWith("/") ? "" : "/"}${canonicalProp}`
                : `${BASE_URL}${window.location.pathname}`;

    const canonical = upsertLink('link[rel="canonical"]', { rel: "canonical" });
    canonical.href = canonicalUrl;

    // 4) Robots  ✅ FIX: noindex olunca follow kalsın
    const robots = upsertMeta('meta[name="robots"]', { name: "robots" });
    robots.content = noindex ? "noindex, follow" : "index, follow";

    // 5) OG URL
    const ogUrl = upsertMeta('meta[property="og:url"]', { property: "og:url" });
    ogUrl.content = canonicalUrl;

    // 6) OG Title
    const ogTitle = upsertMeta('meta[property="og:title"]', {
      property: "og:title",
    });
    ogTitle.content = title;

    // 7) OG Description
    if (description) {
      const ogDesc = upsertMeta('meta[property="og:description"]', {
        property: "og:description",
      });
      ogDesc.content = description;
    }

    // 8) OG Type
    const ogT = upsertMeta('meta[property="og:type"]', {
      property: "og:type",
    });
    ogT.content = ogType;

    // 9) OG Image
    const ogImg = upsertMeta('meta[property="og:image"]', {
      property: "og:image",
    });
    ogImg.content = toAbsoluteUrl(ogImage) ?? DEFAULT_OG_IMAGE;

    // 10) Twitter
    const twCard = upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
    });
    twCard.content = twitterCard;

    const twTitle = upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
    });
    twTitle.content = title;

    if (description) {
      const twDesc = upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
      });
      twDesc.content = description;
    }

    const twImg = upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
    });
    twImg.content = toAbsoluteUrl(ogImage) ?? DEFAULT_OG_IMAGE;

    // 11) JSON-LD (route değişince eski scriptleri temizle)
    const existing = Array.from(
        document.querySelectorAll(
            'script[type="application/ld+json"][data-seo="jsonld"]'
        )
    );
    existing.forEach((el) => el.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((obj) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "jsonld");
        script.text = JSON.stringify(obj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonicalProp, ogType, ogImage, twitterCard, noindex, jsonLd]);

  return null;
};

export default Seo;
