import { useState, type FormEvent, type ChangeEvent } from "react";

interface FormState {
  formName: string;
  formEmail: string;
  formPhone: string;
  formMessage: string;
}

const initialState: FormState = {
  formName: "",
  formEmail: "",
  formPhone: "",
  formMessage: "",
};

const labelClass = "flex flex-col gap-2 font-mono text-[11px] font-bold tracking-[.14em] uppercase";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [formData, setFormData] = useState<FormState>(initialState);
  const [company, setCompany] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.formName,
          email: formData.formEmail,
          phone: formData.formPhone,
          message: formData.formMessage,
          company,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error ?? `Form submission failed (${response.status})`);
      setStatus({ state: "sent" });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please email info@highfidelity.dev.",
      });
    }
  }

  return (
    <>
      {status.state === "sent" && (
        <div className="mb-6 border-3 border-ink bg-sun p-4" role="status">
          <p className="font-mono text-xs font-bold tracking-[.12em] uppercase">
            Got it. I'll be in touch soon!
          </p>
        </div>
      )}
      {status.state === "error" && (
        <div className="mb-6 border-3 border-ink bg-pink p-4" role="alert">
          <p className="font-mono text-xs font-bold tracking-[.12em] uppercase">{status.message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} id="hfContact" name="High Fidelity Contact" className="flex flex-col gap-5">
        {/* Honeypot: hidden from people and assistive tech; bots that fill it are dropped server-side. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Company
            <input
              name="company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <label className={labelClass}>
          Full name
          <input
            name="formName"
            onChange={handleChange}
            value={formData.formName}
            type="text"
            autoComplete="name"
            required
            className="field"
            placeholder="Jane Public"
          />
        </label>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
          <label className={labelClass}>
            Email
            <input
              name="formEmail"
              onChange={handleChange}
              value={formData.formEmail}
              type="email"
              autoComplete="email"
              required
              className="field"
              placeholder="jane@company.com"
            />
          </label>
          <label className={labelClass}>
            Phone (optional)
            <input
              name="formPhone"
              onChange={handleChange}
              value={formData.formPhone}
              type="tel"
              autoComplete="tel"
              className="field"
              placeholder="+1 …"
            />
          </label>
        </div>
        <label className={labelClass}>
          The project
          <textarea
            name="formMessage"
            onChange={handleChange}
            value={formData.formMessage}
            rows={5}
            required
            className="field resize-y"
            placeholder="What do you want to create?"
          />
        </label>
        <div className="mt-1.5">
          <button
            type="submit"
            disabled={status.state === "sending"}
            className="btn block-shadow press border-ink bg-pink text-ink disabled:cursor-wait disabled:opacity-60 [--o:7px] [--sc:var(--color-ink)] px-6 py-4"
          >
            {status.state === "sending" ? "Sending…" : "Send it over →"}
          </button>
        </div>
      </form>
    </>
  );
}
