// Cloudflare Worker: serves the static Astro build and handles the contact form.
// Only /api/* reaches this code (see run_worker_first in wrangler.jsonc); every other
// request is served straight from the static assets.

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  /** Honeypot: hidden from people, so any value means a bot filled the form. */
  company?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

async function handleContact(request: Request, env: Env): Promise<Response> {
  // Only accept submissions from the site itself.
  const origin = request.headers.get("Origin");
  if (!origin || new URL(origin).host !== new URL(request.url).host) {
    return json({ error: "Forbidden" }, 403);
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  // Pretend success for bots so they don't retry.
  if (body.company) return json({ ok: true });

  const name = body.name?.trim().slice(0, 200) ?? "";
  const email = body.email?.trim().slice(0, 200) ?? "";
  const phone = body.phone?.trim().slice(0, 50) ?? "";
  const message = body.message?.trim().slice(0, 5000) ?? "";

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return json({ error: "Please include your name, a valid email, and a message." }, 400);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `New project inquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, "", message].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json({ error: "Your message couldn't be sent. Please email info@highfidelity.dev directly." }, 502);
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
