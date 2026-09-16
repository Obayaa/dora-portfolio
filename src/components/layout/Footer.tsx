import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../../data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.social.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.social.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-heading text-lg font-semibold">
          {profile.name}
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="rounded-full p-2 text-cream/80 transition-colors duration-200 hover:bg-white/10 hover:text-cream"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-sm text-cream/60">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
