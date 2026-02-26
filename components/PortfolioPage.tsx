"use client";

import {
  Badge,
  Button,
  Card,
  Group,
  Paper,
  Text,
  Title,
  Anchor,
  Divider,
} from "@mantine/core";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ArrowDown,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Express",
  "MySQL",
];

const EXPERIENCES = [
  {
    role: "Fullstack Developer",
    company: "PT. Eksa Digital Agency",
    location: "Tegal, Indonesia",
    duration: "Apr 2025 — Present",
    description:
      "Entrusted by upper management with creating the company's first HR Employee Management and KPI Dashboard web application from scratch.",
    achievements: [
      "Designed and built a full-stack HR management platform using React.js and Express.js with MySQL",
      "Migrated employee databases with a new schema adhering to 3NF Database Normalization",
      "Automated deployment pipelines with CI/CD for faster and more reliable releases",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "AI Engineer Cohort",
    org: "Laskar AI — NVIDIA, Lintasarta & Dicoding",
    location: "Jakarta, Indonesia",
    duration: "Feb 2025 — Present",
    description:
      "Specializing in developing and deploying AI-driven solutions leveraging machine learning, cloud computing, and data science. Building and optimizing AI models with Python, deep learning frameworks, and data visualization to solve real-world challenges.",
  },
  {
    title: "Front-End & Back-End Web Development — Distinction Graduate",
    org: "Dicoding Bootcamp",
    location: "Bandung, Indonesia",
    duration: "Aug 2024 — Dec 2024",
    description:
      "Graduated with distinction after mastering full-stack web technologies. Appointed as a study tutor to mentor peers, simplifying complex concepts and contributing to the success of numerous students.",
  },
];

const PROJECTS = [
  {
    name: "Agen EbyB",
    period: "Oct 2025 — Feb 2026",
    description:
      "A high-performance promotional platform with a robust dashboard for agents, featuring real-time data tracking, lead management tools, and seamless promotional assets.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard"],
  },
  {
    name: "EnergyMate",
    period: "Apr 2025 — Jun 2025",
    description:
      "A web-based energy prediction app helping households track and optimize electricity usage, integrating TensorFlow-powered ML predictions with a Vertex AI Chatbot.",
    stack: ["React", "TypeScript", "Flask", "TensorFlow", "Vertex AI"],
  },
];

const SKILLS: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Express.js", "Node.js", "Flask", "REST APIs", "MySQL"],
  "Cloud & DevOps": ["CI/CD", "Vertex AI", "Cloud Computing", "Docker"],
  "AI / ML": ["TensorFlow", "Python", "Deep Learning", "Data Visualization"],
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-6">
            <Badge
              variant="light"
              color="blue"
              size="lg"
              radius="sm"
              className="uppercase tracking-wider"
            >
              Fullstack Developer
            </Badge>

            <Title
              order={1}
              className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              Bima Adityo Kurniawan
            </Title>

            <Text
              size="lg"
              className="max-w-2xl leading-relaxed text-blue-600/80 dark:text-blue-400/80"
            >
              Fullstack Developer with hands-on experience building scalable web
              applications, employee management systems, and AI-integrated
              platforms. Passionate about clean architecture, cloud-native
              solutions, and shipping reliable software.
            </Text>

            <Group gap="xs" wrap="wrap" className="mt-2">
              {TECH_STACK.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  color="blue"
                  radius="sm"
                  className="border-blue-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </Group>

            <Group gap="sm" className="mt-4">
              <Button
                component="a"
                href="#projects"
                color="blue"
                radius="md"
                size="md"
                rightSection={<ArrowDown size={16} />}
              >
                View Projects
              </Button>
              <Button
                component="a"
                href="#contact"
                variant="outline"
                color="blue"
                radius="md"
                size="md"
                className="border-blue-500/30"
              >
                Get in Touch
              </Button>
            </Group>
          </div>
        </div>
      </section>

      {/* ── Work Experience ─────────────────────────────────────── */}
      <section id="experience" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading icon={<Briefcase size={20} />} title="Work Experience" />

          <div className="mt-10 flex flex-col gap-6">
            {EXPERIENCES.map((exp, i) => (
              <Card
                key={i}
                padding="xl"
                radius="md"
                withBorder
                className="border-blue-500/10 transition-shadow duration-200 hover:shadow-md hover:shadow-blue-500/5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <Title order={3} className="text-xl font-bold">
                      {exp.role}
                    </Title>
                    <Text size="sm" className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </Text>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                    <Badge
                      variant="light"
                      color="blue"
                      size="sm"
                      leftSection={<Calendar size={12} />}
                    >
                      {exp.duration}
                    </Badge>
                    <Text size="xs" c="dimmed" className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </Text>
                  </div>
                </div>

                <Text size="sm" className="mt-4 leading-relaxed" c="dimmed">
                  {exp.description}
                </Text>

                <ul className="mt-4 flex flex-col gap-2 pl-4">
                  {exp.achievements.map((a, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-sm leading-relaxed before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-500"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Training ──────────────────────────── */}
      <section id="certifications" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            icon={<Award size={20} />}
            title="Certifications & Training"
          />

          <div className="relative mt-10 flex flex-col gap-8 pl-6 before:absolute before:left-1.75 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-blue-500/20">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-blue-500/20" />
                <Paper
                  p="lg"
                  radius="md"
                  withBorder
                  className="border-blue-500/10 transition-shadow duration-200 hover:shadow-md hover:shadow-blue-500/5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Title order={4} className="text-base font-bold">
                        {cert.title}
                      </Title>
                      <Text size="sm" className="font-medium text-blue-600 dark:text-blue-400">
                        {cert.org}
                      </Text>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                      <Badge
                        variant="light"
                        color="blue"
                        size="sm"
                        leftSection={<Calendar size={12} />}
                      >
                        {cert.duration}
                      </Badge>
                      <Text size="xs" c="dimmed" className="flex items-center gap-1">
                        <MapPin size={12} /> {cert.location}
                      </Text>
                    </div>
                  </div>
                  <Text size="sm" c="dimmed" className="mt-3 leading-relaxed">
                    {cert.description}
                  </Text>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────────── */}
      <section id="education" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading icon={<GraduationCap size={20} />} title="Education" />

          <Card
            padding="xl"
            radius="md"
            withBorder
            className="mt-10 border-blue-500/10"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Title order={3} className="text-xl font-bold">
                  Bachelor of Electrical Engineering
                </Title>
                <Text size="sm" className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                  Universitas Jenderal Soedirman
                </Text>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                <Badge variant="light" color="blue" size="sm">
                  2024
                </Badge>
                <Text size="xs" c="dimmed" className="flex items-center gap-1">
                  <MapPin size={12} /> Purwokerto, Indonesia
                </Text>
              </div>
            </div>
            <Divider my="md" className="border-blue-500/10" />
            <div>
              <Text size="sm" fw={500} className="mb-2">
                Relevant Coursework
              </Text>
              <Group gap="xs" wrap="wrap">
                {[
                  "Programming Fundamentals",
                  "Algorithm & Data Structures",
                  "Software Engineering",
                  "Object-Oriented Programming",
                ].map((course) => (
                  <Badge
                    key={course}
                    variant="outline"
                    color="blue"
                    size="sm"
                    radius="sm"
                    className="border-blue-500/20"
                  >
                    {course}
                  </Badge>
                ))}
              </Group>
            </div>
          </Card>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────── */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading icon={<ExternalLink size={20} />} title="Projects" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Card
                key={i}
                padding="xl"
                radius="md"
                withBorder
                className="flex flex-col border-blue-500/10 transition-shadow duration-200 hover:shadow-md hover:shadow-blue-500/5"
              >
                <div className="flex items-start justify-between">
                  <Title order={3} className="text-lg font-bold">
                    {project.name}
                  </Title>
                  <Badge variant="light" color="blue" size="xs">
                    {project.period}
                  </Badge>
                </div>

                <Text size="sm" c="dimmed" className="mt-3 flex-1 leading-relaxed">
                  {project.description}
                </Text>

                <Group gap="xs" wrap="wrap" className="mt-4">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      color="blue"
                      size="xs"
                      radius="sm"
                      className="border-blue-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading icon={<Award size={20} />} title="Skills" />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <Paper
                key={category}
                p="lg"
                radius="md"
                withBorder
                className="border-blue-500/10"
              >
                <Text size="sm" fw={600} className="mb-3 uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {category}
                </Text>
                <Group gap="xs" wrap="wrap">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="light"
                      color="blue"
                      size="sm"
                      radius="sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Group>
              </Paper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading icon={<Mail size={20} />} title="Get in Touch" />

          <Paper
            p="xl"
            radius="md"
            withBorder
            className="mt-10 border-blue-500/10"
          >
            <Text size="sm" c="dimmed" className="mb-6 max-w-xl leading-relaxed">
              {"I'm"} always open to discussing new opportunities, interesting projects,
              or collaboration ideas. Feel free to reach out.
            </Text>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                component="a"
                href="mailto:bimaadityokurniawan@gmail.com"
                variant="light"
                color="blue"
                radius="md"
                leftSection={<Mail size={16} />}
              >
                bimaadityokurniawan@gmail.com
              </Button>

              <Anchor
                href="https://linkedin.com/in/bimaadityokurniawan"
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
              >
                <Button
                  variant="subtle"
                  color="blue"
                  radius="md"
                  leftSection={<Linkedin size={16} />}
                >
                  LinkedIn
                </Button>
              </Anchor>

              <Anchor
                href="https://github.com/bimaadityo"
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
              >
                <Button
                  variant="subtle"
                  color="blue"
                  radius="md"
                  leftSection={<Github size={16} />}
                >
                  GitHub
                </Button>
              </Anchor>
            </div>
          </Paper>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-blue-500/10 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <Text size="xs" c="dimmed" ta="center">
            &copy; {new Date().getFullYear()} Bima Adityo Kurniawan. Built with
            Next.js, Mantine & Tailwind CSS.
          </Text>
        </div>
      </footer>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-component                                                      */
/* ------------------------------------------------------------------ */

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
        {icon}
      </span>
      <Title order={2} className="text-2xl font-bold">
        {title}
      </Title>
    </div>
  );
}
