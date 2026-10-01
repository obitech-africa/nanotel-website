import fs from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve("dist");
const SITE_URL = "https://nanotel.net";
const IMAGE = `${SITE_URL}/nanotel-social-card.png`;

const routes = [
  {
    path: "/",
    title: "Nanotel Africa | Telecommunications & Technology Across Africa",
    description:
      "Nanotel Africa is a telecommunications and technology company focused on supporting connectivity, digital transformation and infrastructure development across Africa.",
  },
  {
    path: "/overview",
    title: "Company Overview | Nanotel Africa",
    description:
      "Explore Nanotel Africa's telecommunications, ICT, energy and digital infrastructure capabilities supporting connectivity and technology development across Africa.",
  },
  {
    path: "/about",
    title: "About Nanotel Africa | Telecommunications & Technology",
    description:
      "Learn about Nanotel Africa, our mission, infrastructure focus, technical capabilities and commitment to supporting Africa's digital transformation.",
  },
  {
    path: "/services",
    title:
      "Telecommunications & Digital Infrastructure Services | Nanotel Africa",
    description:
      "Explore Nanotel Africa's telecommunications, ICT, energy, data centre, equipment and field operations services supporting infrastructure projects across Africa.",
  },
  {
    path: "/human-capital",
    title: "Human Capital | Nanotel Africa",
    description:
      "Discover Nanotel Africa's approach to engineering excellence, technical training, professional development and building local technology capability.",
  },
  {
    path: "/ethics",
    title: "Ethics & Governance | Nanotel Africa",
    description:
      "Learn about Nanotel Africa's commitment to integrity, transparency, compliance, professional standards, safety and responsible infrastructure delivery.",
  },
  {
    path: "/contact",
    title: "Contact Nanotel Africa | Telecom & Infrastructure Enquiries",
    description:
      "Contact Nanotel Africa about telecommunications, ICT, digital infrastructure, technical services, strategic partnerships and infrastructure projects.",
  },
  {
    path: "/admin/login",
    title: "Administration | Nanotel Africa",
    description: "Nanotel Africa administration portal.",
    noindex: true,
  },
  {
    path: "/admin/messages",
    title: "Administration | Nanotel Africa",
    description: "Nanotel Africa administration portal.",
    noindex: true,
  },
];

const templatePath = path.join(DIST, "index.html");
const template = await fs.readFile(templatePath, "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function setMeta(html, attribute, name, content) {
  const regex = new RegExp(
    `<meta\\s+[^>]*${attribute}=["']${escapeRegex(name)}["'][^>]*>`,
    "i"
  );

  const tag = `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, url) {
  const regex =
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function renderRoute(route) {
  const url =
    route.path === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${route.path}`;

  let html = template;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(route.title)}</title>`
  );

  html = setMeta(
    html,
    "name",
    "description",
    route.description
  );

  html = setMeta(
    html,
    "name",
    "robots",
    route.noindex ? "noindex, nofollow" : "index, follow"
  );

  html = setMeta(html, "property", "og:site_name", "Nanotel Africa");
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(
    html,
    "property",
    "og:description",
    route.description
  );
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", IMAGE);
  html = setMeta(html, "property", "og:image:width", "1200");
  html = setMeta(html, "property", "og:image:height", "630");
  html = setMeta(html, "property", "og:image:type", "image/png");
  html = setMeta(
    html,
    "property",
    "og:image:alt",
    "Nanotel Africa | Empowering the Future of Open Network Access"
  );
  html = setMeta(html, "property", "og:type", "website");

  html = setMeta(
    html,
    "name",
    "twitter:card",
    "summary_large_image"
  );
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(
    html,
    "name",
    "twitter:description",
    route.description
  );
  html = setMeta(html, "name", "twitter:image", IMAGE);
  html = setMeta(
    html,
    "name",
    "twitter:image:alt",
    "Nanotel Africa | Empowering the Future of Open Network Access"
  );

  html = setCanonical(html, url);

  return html;
}

for (const route of routes) {
  const html = renderRoute(route);

  if (route.path === "/") {
    await fs.writeFile(
      path.join(DIST, "index.html"),
      html,
      "utf8"
    );
    continue;
  }

  const folder = path.join(
    DIST,
    route.path.replace(/^\/+/, "")
  );

  await fs.mkdir(folder, { recursive: true });
  await fs.writeFile(
    path.join(folder, "index.html"),
    html,
    "utf8"
  );
}

console.log(
  `STATIC_ROUTE_SEO=GENERATED (${routes.length} routes)`
);
