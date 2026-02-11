import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
}

const BASE_URL = "https://dentege.com.tr";

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    // 1️⃣ Title
    document.title = title;

    // 2️⃣ Description
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

    // 3️⃣ Canonical
    const canonicalUrl = `${BASE_URL}${window.location.pathname}`;
    let canonical = document.querySelector(
        'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // 4️⃣ Open Graph URL
    let ogUrl = document.querySelector(
        'meta[property="og:url"]'
    ) as HTMLMetaElement | null;

    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }

    ogUrl.content = canonicalUrl;

    // 5️⃣ Open Graph Title
    let ogTitle = document.querySelector(
        'meta[property="og:title"]'
    ) as HTMLMetaElement | null;

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.content = title;

    // 6️⃣ Open Graph Description
    if (description) {
      let ogDesc = document.querySelector(
          'meta[property="og:description"]'
      ) as HTMLMetaElement | null;

      if (!ogDesc) {
        ogDesc = document.createElement("meta");
        ogDesc.setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }

      ogDesc.content = description;
    }
  }, [title, description]);

  return null;
};

export default Seo;
