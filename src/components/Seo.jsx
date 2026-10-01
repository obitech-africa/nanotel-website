import { useEffect } from "react";

const SITE_NAME = "Nanotel Africa";
const SITE_URL = "https://nanotel.net";
const DEFAULT_IMAGE = `${SITE_URL}/nanotel-social-card.png`;

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    if (selector.includes("property=")) {
      const match = selector.match(/property="([^"]+)"/);
      if (match) element.setAttribute("property", match[1]);
    } else {
      const match = selector.match(/name="([^"]+)"/);
      if (match) element.setAttribute("name", match[1]);
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
}) {
  useEffect(() => {
    const canonicalUrl =
      path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    document.title = title;

    setMeta(
      'meta[name="description"]',
      "content",
      description
    );

    setMeta(
      'meta[name="robots"]',
      "content",
      noindex ? "noindex, nofollow" : "index, follow"
    );

    setMeta(
      'meta[property="og:site_name"]',
      "content",
      SITE_NAME
    );

    setMeta(
      'meta[property="og:title"]',
      "content",
      title
    );

    setMeta(
      'meta[property="og:description"]',
      "content",
      description
    );

    setMeta(
      'meta[property="og:url"]',
      "content",
      canonicalUrl
    );

    setMeta(
      'meta[property="og:image"]',
      "content",
      image
    );

    setMeta(
      'meta[property="og:image:width"]',
      "content",
      "1200"
    );

    setMeta(
      'meta[property="og:image:height"]',
      "content",
      "630"
    );

    setMeta(
      'meta[property="og:image:type"]',
      "content",
      "image/png"
    );

    setMeta(
      'meta[property="og:image:alt"]',
      "content",
      "Nanotel Africa | Empowering the Future of Open Network Access"
    );

    setMeta(
      'meta[property="og:type"]',
      "content",
      "website"
    );

    setMeta(
      'meta[name="twitter:card"]',
      "content",
      "summary_large_image"
    );

    setMeta(
      'meta[name="twitter:title"]',
      "content",
      title
    );

    setMeta(
      'meta[name="twitter:description"]',
      "content",
      description
    );

    setMeta(
      'meta[name="twitter:image"]',
      "content",
      image
    );

    setMeta(
      'meta[name="twitter:image:alt"]',
      "content",
      "Nanotel Africa | Empowering the Future of Open Network Access"
    );

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, path, image, noindex]);

  return null;
}
