import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string; // ✅ eklendi
}

const BASE_URL = "https://dentege.com.tr";

const upsertMeta = (selector: string, createAttrs: Record<string, string>) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
};

const Seo = ({ title, description, canonical: canonicalProp }: SeoProps) => {
  useEffect(() => {
    // 1) Title
    document.title = title;

    // 2) Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // ✅ 3) Canonical (prop varsa onu kullan, yoksa otomatik üret)
    const canonicalUrl =
        canonicalProp?.startsWith("http")
            ? canonicalProp
            : canonicalProp
                ? `${BASE_URL}${canonicalProp.startsWith("/") ? "" : "/"}${canonicalProp}`
                : `${BASE_URL}${window.location.pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // 4) OG URL
    const ogUrl = upsertMeta('meta[property="og:url"]', { property: "og:url" });
    ogUrl.content = canonicalUrl;

    // 5) OG Title
    const ogTitle = upsertMeta('meta[property="og:title"]', { property: "og:title" });
    ogTitle.content = title;

    // 6) OG Description
    if (description) {
      const ogDesc = upsertMeta('meta[property="og:description"]', { property: "og:description" });
      ogDesc.content = description;
    }
  }, [title, description, canonicalProp]);

  return null;
};

export default Seo;
