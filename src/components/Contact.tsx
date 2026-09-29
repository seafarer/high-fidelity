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
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  }

  return (
    <>
      {submitted && (
        <div className="mb-8 rounded-md border border-primary-200 bg-primary-50 p-4">
          <p className="text-sm font-medium text-primary-800">
            Form successfully submitted. I'll be in touch soon!
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        id="hfContact"
        name="High Fidelity Contact"
        className="grid grid-cols-1 gap-y-5"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div>
          <label htmlFor="name-input" className="sr-only">
            Full name
          </label>
          <input
            name="formName"
            onChange={handleChange}
            value={formData.formName}
            id="name-input"
            type="text"
            autoComplete="name"
            required
            className="block w-full rounded-md border border-primary-200 px-4 py-3 placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email-input" className="sr-only">
            Email
          </label>
          <input
            name="formEmail"
            onChange={handleChange}
            value={formData.formEmail}
            type="email"
            id="email-input"
            autoComplete="email"
            required
            className="block w-full rounded-md border border-primary-200 px-4 py-3 placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="phone-input" className="sr-only">
            Phone
          </label>
          <input
            name="formPhone"
            onChange={handleChange}
            value={formData.formPhone}
            id="phone-input"
            type="text"
            autoComplete="tel"
            className="block w-full rounded-md border border-primary-200 px-4 py-3 placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
            placeholder="Phone (optional)"
          />
        </div>
        <div>
          <label htmlFor="message-area" className="sr-only">
            A little bit about your project
          </label>
          <textarea
            name="formMessage"
            onChange={handleChange}
            value={formData.formMessage}
            id="message-area"
            rows={4}
            required
            className="block w-full rounded-md border border-primary-200 px-4 py-3 placeholder-primary-400 focus:border-primary-500 focus:ring-primary-500"
            placeholder="A little bit about your project"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            <span>Talk about a project</span>
          </button>
        </div>
      </form>
    </>
  );
}
