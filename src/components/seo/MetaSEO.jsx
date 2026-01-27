import { useEffect, useMemo } from "react";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from "../../config/site";
import StructuredData from "./StructuredData";

function toAbsoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return `${SITE_URL}${path}`;
  return `${SITE_URL}/${path}`;
}

export default function MetaSEO({
  title,
  description,
  canonical = "/",
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData = null,
}) {
  const finalTitle = title || DEFAULT_TITLE;
  const finalDescription = description || DEFAULT_DESCRIPTION;

  const absCanonical = useMemo(() => toAbsoluteUrl(canonical), [canonical]);
  const absOgImage = useMemo(() => toAbsoluteUrl(ogImage), [ogImage]);

  useEffect(() => {
    // TITLE
    document.title = finalTitle;

    const setMetaName = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setMetaProp = (property, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // BASIC
    setMetaName("description", finalDescription);
    setMetaName("robots", noindex ? "noindex, nofollow" : "index, follow");
    setMetaName("theme-color", "#071427");

    // CANONICAL
    let link = document.querySelector(`link[rel="canonical"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", absCanonical);

    // OPEN GRAPH
    setMetaProp("og:site_name", SITE_NAME);
    setMetaProp("og:type", ogType);
    setMetaProp("og:title", finalTitle);
    setMetaProp("og:description", finalDescription);
    setMetaProp("og:url", absCanonical);
    setMetaProp("og:image", absOgImage);

    // Хорошие доп. теги для og:image
    setMetaProp("og:image:alt", `${SITE_NAME} preview`);
    setMetaProp("og:image:width", "1200");
    setMetaProp("og:image:height", "630");

    // TWITTER
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", finalTitle);
    setMetaName("twitter:description", finalDescription);
    setMetaName("twitter:image", absOgImage);
  }, [finalTitle, finalDescription, absCanonical, absOgImage, noindex, ogType]);

  return structuredData ? <StructuredData data={structuredData} /> : null;
}
