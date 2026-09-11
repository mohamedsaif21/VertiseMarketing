"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const SERVICES_OPTIONS = [
  "Website",
  "Branding",
  "SEO",
  "Digital Marketing",
  "Mobile App",
  "E-commerce",
  "Photography / Content",
  "Other",
];

const BUDGET_OPTIONS = [
  "₹25K–₹50K",
  "₹50K–₹1L",
  "₹1L–₹3L",
  "₹3L+",
  "Not sure yet",
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Website"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("₹50K–₹1L");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent anti-spam drop

    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-ink px-6 py-24 text-cream md:px-12">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get In Touch • Start A Conversation
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cream md:text-6xl">
              Start A Project
            </h2>
            <p className="mt-4 max-w-xl text-base text-cream/70">
              Tell us about your goals and ideas. We'll get back to you within 24 hours with a project strategy and estimate.
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <div className="rounded-3xl border border-green/40 bg-white/[0.04] p-10 text-center backdrop-blur animate-fadeIn">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-3xl text-ink">
              ✓
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase text-cream">
              Enquiry Received!
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-cream/80">
              Thank you, <strong className="text-gold">{name}</strong>. Our core team is reviewing your project details and will contact you at <strong className="text-gold">{email}</strong> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setProjectDetails("");
              }}
              className="mt-8 rounded-full border border-cream/30 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-cream hover:bg-white/10"
            >
              Send another message
            </button>
          </div>
        ) : (
          <ScrollReveal direction="up">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-cream/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur md:p-12"
            >
              {/* Anti-spam Honeypot */}
              <input
                type="text"
                name="website_url_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* 1. What can we help you with? */}
              <div className="mb-8">
                <label className="block font-display text-sm font-bold uppercase tracking-wider text-cream/90 mb-3">
                  1. What can we help you with?
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_OPTIONS.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? "bg-gold text-ink shadow-md"
                            : "border border-cream/20 bg-white/5 text-cream/70 hover:border-cream/40 hover:text-cream"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Tell us about your project */}
              <div className="mb-8">
                <label
                  htmlFor="projectDetails"
                  className="block font-display text-sm font-bold uppercase tracking-wider text-cream/90 mb-2"
                >
                  2. Tell us about your project
                </label>
                <textarea
                  id="projectDetails"
                  required
                  rows={4}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Describe your project goals, timeline, current website or any specific feature requirements..."
                  className="w-full rounded-2xl border border-cream/20 bg-white/5 p-4 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* 3. Personal / Business Contact Details */}
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-display text-xs font-bold uppercase tracking-wider text-cream/80 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-cream/20 bg-white/5 px-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-display text-xs font-bold uppercase tracking-wider text-cream/80 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-cream/20 bg-white/5 px-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-display text-xs font-bold uppercase tracking-wider text-cream/80 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-cream/20 bg-white/5 px-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* 4. Estimated Budget */}
              <div className="mb-10">
                <label className="block font-display text-sm font-bold uppercase tracking-wider text-cream/90 mb-3">
                  4. Estimated Budget Range (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((bgt) => {
                    const isSelected = selectedBudget === bgt;
                    return (
                      <button
                        key={bgt}
                        type="button"
                        onClick={() => setSelectedBudget(bgt)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? "bg-blue text-cream shadow-md"
                            : "border border-cream/20 bg-white/5 text-cream/70 hover:border-cream/40 hover:text-cream"
                        }`}
                      >
                        {bgt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={loading}
                data-cursor="cta"
                className="w-full rounded-full bg-red py-4 text-center font-display text-base font-bold uppercase tracking-wider text-cream transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? "Sending enquiry..." : "Send project enquiry →"}
              </button>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
