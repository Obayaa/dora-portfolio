import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { profile } from "../data/profile";
import { skillCategories } from "../data/skills";
import meOfficial from "../assets/me_official.jpeg";

const socialLinks = [
  { label: "GitHub", href: profile.social.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.social.linkedin, icon: FaLinkedin },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cream/70 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float-slow pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-navy/10 blur-3xl"
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:py-28"
        >
          <div className="flex flex-1 flex-col items-start gap-6 text-left">
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="rounded-full bg-cream px-4 py-1.5 text-sm font-semibold text-navy-dark"
            >
              👋 Hi, I&apos;m {profile.name.split(" ")[0]}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold leading-tight text-navy-dark sm:text-5xl lg:text-6xl"
            >
              {profile.role}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="max-w-xl text-lg text-navy-dark/70"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button to="/projects" variant="primary">
                View My Work <ArrowRight size={16} />
              </Button>
              <Button to="/contact" variant="secondary">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 pt-4"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-navy/15 p-2.5 text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative flex flex-1 items-center justify-center"
          >
            <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:h-112 lg:w-md">
              <div className="absolute inset-0 rounded-[2.5rem] bg-cream" />
              <img
                src={meOfficial}
                alt={profile.name}
                className="absolute inset-0 h-full w-full rounded-[2.5rem] object-cover object-top shadow-2xl ring-4 ring-white"
              />
              <div className="absolute inset-3 -z-10 rounded-[2.5rem] border-2 border-dashed border-navy/20" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-6 rounded-xl bg-white px-4 py-2.5 shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-light">
                  Currently
                </p>
                <p className="text-sm font-semibold text-navy-dark">
                  Frontend Developer
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="border-y border-navy/10 bg-cream/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
          {profile.highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.1} className="text-center">
              <p className="font-heading text-3xl font-bold text-navy">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-navy-dark/60">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What I work with */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="What I Work With"
            title="Skills &amp; Technologies"
            subtitle="A snapshot of the tools and technologies I use to bring ideas to life."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.08}>
              <Card>
                <h3 className="font-heading text-lg font-semibold text-navy-dark">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy-dark"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={0.15}>
          <Button to="/skills" variant="secondary">
            See All Skills <ArrowRight size={16} />
          </Button>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cream/10 blur-3xl"
        />
        <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something great together
          </h2>
          <p className="max-w-xl text-cream/80">
            I&apos;m {profile.availability.toLowerCase()}. If you have a project
            in mind or just want to say hello, I&apos;d love to hear from you.
          </p>
          <Button to="/contact" variant="ghost">
            Contact Me <ArrowRight size={16} />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
