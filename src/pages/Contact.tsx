import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { profile } from "../data/profile";

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

const socialLinks = [
  { label: "GitHub", href: profile.social.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.social.linkedin, icon: FaLinkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project, an opportunity, or just want to say hi? Fill out the form or reach out directly."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-5">
        <Reveal className="flex flex-col gap-6 md:col-span-2">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <Card key={label} className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-dark/50">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-medium text-navy-dark hover:text-navy"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-navy-dark">{value}</p>
                )}
              </div>
            </Card>
          ))}

          <Card className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
        <Card className="h-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-navy-dark">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy-dark outline-none transition-colors focus:border-navy"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-navy-dark">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy-dark outline-none transition-colors focus:border-navy"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-navy-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy-dark outline-none transition-colors focus:border-navy"
              />
            </div>

            <Button type="submit" variant="primary" className="self-start">
              Send Message <Send size={16} />
            </Button>
          </form>
        </Card>
        </Reveal>
      </div>
    </section>
  );
}
