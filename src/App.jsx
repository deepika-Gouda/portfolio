import React from "react";
import { motion } from "framer-motion";

// ---------- Quick Notes ----------
// 1) Put your photo at: public/photo.jpg (already done)
// 2) Put your resume at: public/ATS_resume.pdf (already done)
// 3) Run: npm i && npm run dev

const socials = {
  email: "deepikagoudad@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepikagouda/",
  github: "https://github.com/deepika-Gouda",
  hackerrank: "https://www.hackerrank.com/deepikagouda2507",
};

const skills = {
  Languages: ["Java", "C", "Python"],
  Frontend: ["HTML", "CSS", "JavaScript"],
  "Core CS": ["Object-Oriented Programming", "Operating Systems"],
  Databases: ["SQL", "PostgreSQL"],
  Tools: ["VS Code", "GitHub"],
};

const projects = [
  {
    title: "Market Predict — Stock Forecasting Website",
    period: "Oct 2024 – Dec 2024",
    stack: ["Python", "HTML", "CSS", "JavaScript"],
    desc:
      "Stock market analysis and prediction platform using external real-time APIs and ML-backed insights. Responsive frontend with data visualizations.",
    links: [
      { label: "GitHub", href: "https://github.com/deepika-Gouda/marketPredict_stockMarket" },
    ],
    image: "market_predict.png",
  },
  {
    title: "Hidden Gems — Temple Info Website",
    period: "May 2025 – Jun 2025",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Google Maps API"],
    desc:
      "Bilingual site showcasing lesser-known temples around Mangalore with responsive UI and location-based navigation.",
    links: [
      { label: "Live", href: "https://deepika-gouda.github.io/Hidden-Gems-Temple-Website-/" },
      { label: "GitHub", href: "https://github.com/deepika-Gouda/Hidden-Gems-Temple-Website-" },
    ],
    image: "Hidden_gems.png",
  },
];

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 sm:px-10 py-14">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-block text-sm px-3 py-1 rounded-full border border-black/10 bg-white/60 backdrop-blur shadow-sm">
    {children}
  </span>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg">Deepika<span className="text-slate-500">.Portfolio</span></a>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-slate-900 text-slate-600">About</a>
            <a href="#skills" className="hover:text-slate-900 text-slate-600">Skills</a>
            <a href="#projects" className="hover:text-slate-900 text-slate-600">Projects</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 rounded-2xl border border-slate-300 hover:border-slate-900 transition"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Deepika Devaru Gouda
            </h1>
            <p className="mt-3 text-xl text-slate-600">
              Computer Science Student • Web Developer
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-xl">
              Motivated CS student with a strong foundation in web development and a passion for building
              user-focused applications. Comfortable with Java, C, Python and modern web tech.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-2xl bg-black text-white shadow hover:shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-2xl border border-slate-300 hover:border-slate-900"
              >
                Contact Me
              </a>
              <a
                href="/ATS_resume.pdf"
                download
                className="px-5 py-2.5 rounded-2xl bg-slate-700 text-white shadow hover:shadow-md flex items-center gap-2"
              >
                📄 Download Resume
              </a>
            </div>
            <div className="mt-6 flex gap-4 text-sm text-slate-600">
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href={socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <a href={socials.hackerrank} target="_blank" rel="noreferrer" className="hover:underline">HackerRank</a>
              <a href={`mailto:${socials.email}`} className="hover:underline">Email</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/photo.jpg"
                alt="Deepika portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 text-slate-700 leading-relaxed"
          >
            <p>
              I enjoy turning ideas into useful, accessible experiences on the web. I’ve built
              projects that combine clean UI with practical problem-solving — from a stock
              forecasting dashboard to a bilingual information site with maps and routing.
            </p>
            <p className="mt-4">
              Beyond projects, I’m comfortable with CS fundamentals like OOP and operating systems,
              and I’m steadily expanding my full-stack skills.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-5 grid grid-cols-2 gap-3"
          >
            {Object.entries(skills).map(([group, list]) => (
              <li key={group} className="col-span-2 sm:col-span-1">
                <h3 className="font-semibold mb-2">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([group, list]) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <h3 className="font-semibold mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <span className="text-xs text-slate-500">{p.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl border border-slate-300 hover:border-slate-900"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid gap-4">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold">Canara Engineering College — Mangalore, India</h3>
            <p className="text-sm text-slate-600">B.E. in Computer Science (Dec 2022 – Present)</p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold">Shree Marikamba Govt PU College — Sirsi, Karnataka</h3>
            <p className="text-sm text-slate-600">PCMB (Jun 2020 – May 2022)</p>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Courses & Certifications">
        <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">
          <li className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h4 className="font-semibold">Java — Spoken Tutorial, IIT Bombay</h4>
            <p className="text-sm mt-1">Core Java: data types, OOP, exceptions.</p>
          </li>
          <li className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h4 className="font-semibold">HTML for Front-End Development — Great Learning</h4>
            <p className="text-sm mt-1">Semantic HTML, forms, layout structure.</p>
          </li>
          <li className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h4 className="font-semibold">Python Basics — Greekster</h4>
            <p className="text-sm mt-1">Syntax, control flow, mini projects.</p>
          </li>
          <li className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h4 className="font-semibold">RDBMS PostgreSQL — Spoken Tutorial, IIT Bombay</h4>
            <p className="text-sm mt-1">SQL queries and PostgreSQL operations.</p>
          </li>
          <li className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm sm:col-span-2">
            <h4 className="font-semibold">HackerRank — Java (Basic) Certification</h4>
            <p className="text-sm mt-1">Skill assessment covering loops, arrays, libraries.</p>
          </li>
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold">Let’s connect</h3>
            <p className="mt-2 text-slate-700">I’m open to internships, freelance, and collaboration.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="font-medium">Email:</span> <a className="hover:underline" href={`mailto:${socials.email}`}>{socials.email}</a></p>
              <p><span className="font-medium">LinkedIn:</span> <a className="hover:underline" href={socials.linkedin} target="_blank" rel="noreferrer">/deepikagouda</a></p>
              <p><span className="font-medium">GitHub:</span> <a className="hover:underline" href={socials.github} target="_blank" rel="noreferrer">/deepika-Gouda</a></p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-sm text-slate-600 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Deepika Devaru Gouda. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:underline" href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={socials.hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
