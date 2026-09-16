import { Code2 } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import { skillCategories } from "../data/skills";
import { softSkills } from "../data/softSkills";

export default function Skills() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="What I Know"
            title="Skills &amp; Technologies"
            subtitle="Technologies and tools I use to design, build, and ship software."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.08}>
              <Card className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
                    <Code2 size={18} />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-navy-dark">
                    {group.category}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-navy/15 bg-cream/50 px-4 py-1.5 text-sm font-medium text-navy-dark"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cream">
              Who I Am
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Beyond the Code
            </h2>
            <span className="h-1 w-16 rounded-full bg-cream" />
            <p className="max-w-2xl text-base text-cream/80">
              The qualities and habits that shape how I work, lead, and
              collaborate — as important to me as any programming language.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, index) => (
              <Reveal key={skill.title} delay={(index % 3) * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl bg-cream p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-2xl">
                    {skill.emoji}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy-dark">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-navy-dark/70">{skill.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
