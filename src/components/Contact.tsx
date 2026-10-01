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

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const labelClass = "flex flex-col gap-2 font-mono text-[11px] font-bold tracking-[.14em] uppercase";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>(initialState);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "High Fidelity Contact", ...formData }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Form submission failed (${response.status})`);
        setSubmitted(true);
      })
      .catch((error) => alert(error));
  }

  return (
    <>
      {submitted && (
        <div className="mb-6 border-3 border-ink bg-sun p-4">
          <p className="font-mono text-xs font-bold tracking-[.12em] uppercase">
            Got it. I'll be in touch soon!
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        id="hfContact"
        name="High Fidelity Contact"
        className="flex flex-col gap-5"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
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
            placeholder="What are you building, migrating, or untangling?"
          />
        </label>
        <div className="mt-1.5">
          <button
            type="submit"
            className="btn block-shadow press border-ink bg-pink text-ink [--o:7px] [--sc:var(--color-ink)] px-6 py-4"
          >
            Send it over →
          </button>
        </div>
      </form>
    </>
  );
}
