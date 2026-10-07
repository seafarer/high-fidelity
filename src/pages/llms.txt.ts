import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { PERSON, SERVICES, SITE } from "../lib/site";

// Plain-text site summary for LLMs (https://llmstxt.org), built from the content collections.
export const GET: APIRoute = async () => {
  const work = (await getCollection("work")).sort((a, b) => a.data.order - b.data.order);
  const lab = (await getCollection("lab")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const link = (path: string) => new URL(path, SITE.url).href;

  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} is the independent practice of ${PERSON.name}, a ${PERSON.jobTitle.toLowerCase()} based in Colorado with more than 20 years across development, product, UX, publishing, and digital strategy. He works directly with companies and partners with agencies that need senior engineering capacity.`,
    "",
    `Contact: ${SITE.email}, ${SITE.telephone}.`,
    "",
    "## Services",
    "",
    ...SERVICES.map((service) => `- ${service}`),
    "",
    "## Case studies",
    "",
    ...work.map((entry) => `- [${entry.data.title}](${link(`/work/${entry.id}/`)}): ${entry.data.summary}`),
    "",
    "## Lab",
    "",
    "Small tools, prototypes, experiments, and technical notes.",
    "",
    ...lab.map((entry) => `- [${entry.data.title}](${link(`/lab/${entry.id}/`)}): ${entry.data.description}`),
    "",
    "## Links",
    "",
    `- [Home](${link("/")})`,
    `- [Prototype to production](${link("/prototype/")}): taking AI-built prototypes (Lovable, Bolt, v0, Replit, Cursor) to production, starting with a fixed-fee assessment`,
    `- [About](${link("/#about")})`,
    `- [Contact](${link("/#contact")})`,
    ...PERSON.sameAs.map((url) => `- [${new URL(url).hostname.replace("www.", "")}](${url})`),
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
