"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// David Olarinde Agile PM Portfolio
// Simple, single-accent-color design. React + Tailwind + Framer Motion.

const SKILLS = [
  { name: "Scrum", note: "Sprint planning, standups, retros" },
  { name: "Kanban", note: "Flow, WIP limits, cycle time" },
  { name: "Jira", note: "Backlogs, boards, reporting" },
  { name: "Slack", note: "Async comms, team coordination" },
  { name: "Roadmapping", note: "Prioritization, stakeholder alignment" },
  { name: "Agile Fundamentals", note: "Coursework based, applied on the job" },
];

const JOURNEY = [
  {
    stage: "Learning",
    items: [
      {
        title: "Agile Project Management Course",
        detail:
          "Completed structured coursework covering Scrum theory, Kanban flow, backlog management, and agile ceremonies.",
      },
    ],
  },
  {
    stage: "Practicing",
    items: [
      {
        title: "Applying it on live work",
        detail:
          "Running standups, maintaining sprint boards in Jira, and coordinating team communication.",
      },
    ],
  },
  {
    stage: "Delivering",
    items: [
      {
        title: "Shipping with a real team",
        detail:
          "Turning theory into working process, keeping a delivery team aligned, unblocked, and moving sprint over sprint.",
      },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Project Manager",
    org: "Maximillian Labs",
    period: "Current",
    detail:
      "Managing project timelines and team workflow at a digital agency. Coordinating sprints, maintaining the Jira backlog, and keeping the team aligned day to day , learning and applying agile practices on real  work.",
  },
  {
    role: "Intern, Project Administration and Development Unit",
    org: "IITA (International Institute of Tropical Agriculture)",
    period: "6 months",
    detail:
      "Completed a 6 month internship with the Project Administration and Development Unit at IITA, Ibadan. Gaining a foundational, hands on introduction to project management that shaped my growth toward becoming a PM.",
    image: {
      src: "https://iita.org/wp-content/uploads/2026/06/1024_DSC0318z-300x212.jpg",
      alt: "Entrance to the IITA headquarters in Ibadan, Nigeria",
      credit: "Photo: IITA",
    },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

function Preloader({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F5F0]"
    >
      <span className="font-display font-semibold text-lg mb-6">David Olarinde</span>
      <div className="w-48 h-1 bg-[#12172B]/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="h-full bg-[#E8963C] rounded-full"
        />
      </div>
      <p className="mt-3 text-xs text-[#5B6270] tracking-wide">Loading portfolio...</p>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeStage, setActiveStage] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <div
      className="min-h-screen text-[#12172B]"
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#F7F5F0" }}
    >
      {/* Nav */}
      <header className="border-b border-[#12172B]/10 sticky top-0 bg-[#F7F5F0]/90 backdrop-blur z-20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display font-semibold text-lg">David Olarinde</span>
          <nav className="hidden sm:flex gap-6 text-sm text-[#5B6270]">
            <a href="#experience" className="hover:text-[#12172B] transition-colors">Experience</a>
            <a href="#journey" className="hover:text-[#12172B] transition-colors">Journey</a>
            <a href="#skills" className="hover:text-[#12172B] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#12172B] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-20">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm font-medium mb-5 px-3 py-1.5 rounded-full bg-[#12172B]/5 text-[#5B6270] border border-[#12172B]/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8963C] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8963C]" />
            </span>
            Open to Agile PM roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-6xl font-semibold leading-tight max-w-2xl"
          >
            Turning process into progress, one sprint at a time.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-[#5B6270] max-w-xl leading-relaxed"
          >
            I help teams see their work clearly and move it forward through Scrum
            ceremonies, Kanban flow, and the everyday discipline of a well-run backlog.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#experience"
              className="px-5 py-3 bg-[#12172B] text-[#F7F5F0] text-sm font-medium transition-colors"
            >
              See my experience
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-5 py-3 border border-[#12172B]/20 text-sm font-medium hover:border-[#12172B]/40 transition-colors"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#12172B]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-semibold mb-2">Experience</h2>
          <p className="text-[#5B6270] mb-10 max-w-xl">Where I'm putting agile practice to work.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {EXPERIENCE.map((job) => (
            <motion.div
              key={job.role + job.org}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="mb-4 p-6 sm:p-8 bg-[#12172B] text-[#F7F5F0] flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
            >
              <div className="sm:w-1/3">
                <h3 className="font-display font-semibold text-lg">{job.role}</h3>
                <p className="text-[#E8963C] text-sm mt-1">{job.org}</p>
                <p className="text-[#F7F5F0]/50 text-xs mt-1">{job.period}</p>
                {job.image && (
                  <div className="mt-4">
                    <img
                      src={job.image.src}
                      alt={job.image.alt}
                      className="w-full max-w-[220px] rounded-sm border border-[#F7F5F0]/10"
                    />
                    <p className="text-[10px] text-[#F7F5F0]/40 mt-1">{job.image.credit}</p>
                  </div>
                )}
              </div>
              <p className="text-[#F7F5F0]/75 leading-relaxed sm:w-2/3">{job.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Journey */}
      <section id="journey" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#12172B]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-semibold mb-2">My journey so far</h2>
          <p className="text-[#5B6270] mb-10 max-w-xl">
            Framed the way I'd frame any project: as a board in motion, not a finished state.
          </p>
        </motion.div>

        <div className="sm:hidden flex gap-2 mb-6">
          {JOURNEY.map((col, i) => (
            <button
              key={col.stage}
              onClick={() => setActiveStage(i)}
              className={`flex-1 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeStage === i ? "border-[#12172B] text-[#12172B]" : "border-transparent text-[#5B6270]"
              }`}
            >
              {col.stage}
            </button>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-6"
        >
          {JOURNEY.map((col, i) => (
            <div key={col.stage} className={`${i === activeStage ? "block" : "hidden"} sm:block`}>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#12172B]/15">
                <span className="w-2 h-2 rounded-full bg-[#12172B]" />
                <h3 className="font-display font-semibold">{col.stage}</h3>
              </div>
              <div className="space-y-4">
                {col.items.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="bg-[#F7F5F0] border border-[#12172B]/10 p-6"
                  >
                    <h4 className="font-medium mb-2 leading-snug">{item.title}</h4>
                    <p className="text-sm text-[#5B6270] leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#12172B]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-semibold mb-2">Tools & practices</h2>
          <p className="text-[#5B6270] mb-10 max-w-xl">
            What I use to keep a team's work visible and moving.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-3 gap-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="p-5 border border-[#12172B]/10 hover:border-[#12172B]/30 transition-colors"
            >
              <h4 className="font-display font-medium mb-1">{skill.name}</h4>
              <p className="text-sm text-[#5B6270]">{skill.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-[#12172B]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-[#12172B] text-[#F7F5F0] p-10 sm:p-14"
        >
          <h2 className="font-display text-3xl font-semibold mb-4">Let's work together</h2>
          <p className="text-[#F7F5F0]/70 max-w-md mb-8 leading-relaxed">
            I'm early in my agile PM path and looking for a team where I can keep learning
            while I deliver. Reach out if that's you.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:david.olarinde@example.com"
              className="px-5 py-3 bg-[#E8963C] text-[#12172B] font-medium hover:bg-[#E8963C]/90 transition-colors"
            >
              Email me
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-5 py-3 border border-[#F7F5F0]/30 hover:border-[#F7F5F0]/60 transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 text-sm text-[#5B6270] flex justify-between">
        <span>David Olarinde</span>
        <span>Agile PM in progress</span>
      </footer>
      </div>
    </>
  );
}
