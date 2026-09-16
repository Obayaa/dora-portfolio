import { MapPin, Mail, Phone, CheckCircle2, Download, Users } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { profile } from "../data/profile";
import { experience, education } from "../data/experience";
import meOfficial from "../assets/me_official.jpeg";

const quickFacts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Mail, label: "Email", value: profile.email },
  { icon: Phone, label: "Phone", value: profile.phone },
  { icon: CheckCircle2, label: "Availability", value: profile.availability },
];

interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  description: string;
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="space-y-6 border-l-2 border-cream-dark pl-8">
      {entries.map((entry, index) => (
        <Reveal
          key={`${entry.title}-${entry.period}`}
          delay={index * 0.08}
          className="relative"
        >
          <span className="absolute left-[-2.35rem] top-1.5 h-3 w-3 rounded-full bg-navy" />
          <p className="text-sm font-semibold text-navy-light">{entry.period}</p>
          <h3 className="mt-1 font-heading text-xl font-semibold text-navy-dark">
            {entry.title}
          </h3>
          <p className="text-sm font-medium text-navy-dark/60">{entry.place}</p>
          <p className="mt-2 text-navy-dark/70">{entry.description}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default function About() {
  const educationEntries: TimelineEntry[] = education.map((item) => ({
    period: item.period,
    title: item.degree,
    place: item.school,
    description: item.details,
  }));

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="About Me" title="Get To Know Me" />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto h-72 w-72 md:h-full md:w-full">
            <div className="absolute inset-0 rounded-3xl bg-cream" />
            <img
              src={meOfficial}
              alt={profile.name}
              className="absolute inset-0 h-full w-full rounded-3xl object-cover object-top shadow-xl ring-4 ring-white"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6 md:col-span-3">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-navy-dark/80">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <Card key={label} className="flex flex-col gap-2">
                <Icon size={20} className="text-navy" />
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-dark/50">
                  {label}
                </p>
                <p className="text-sm font-medium text-navy-dark">{value}</p>
              </Card>
            ))}
          </div>

          <div>
            <Button href={profile.resumeUrl} variant="primary">
              Download Resume <Download size={16} />
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <Reveal>
          <SectionHeading eyebrow="Journey" title="Work Experience" />
        </Reveal>
        <div className="mt-12">
          <Timeline entries={experience} />
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <Reveal>
          <SectionHeading eyebrow="Journey" title="Education" />
        </Reveal>
        <div className="mt-12">
          <Timeline entries={educationEntries} />
        </div>
      </div>

      {/* Leadership & Community */}
      <div className="mt-20">
        <Reveal>
          <SectionHeading eyebrow="Community" title="Leadership &amp; Community" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {profile.leadership.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <Card className="flex items-start gap-3">
                <Users size={18} className="mt-0.5 shrink-0 text-navy" />
                <p className="text-sm font-medium text-navy-dark">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-navy-dark/60">
          Languages: {profile.languages.join(" · ")}
        </p>
      </div>
    </section>
  );
}
