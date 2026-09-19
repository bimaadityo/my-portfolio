import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUp, ArrowUpRight, BookOpen, BriefcaseBusiness, GitFork, MapPin, Plus } from 'lucide-react';
import { HeaderControls } from '@/components/header-controls';
import { Button } from '@/components/ui/button';
import { navigation } from '@/content/navigation';
import { portfolio } from '@/content/portfolio';
import { siteUrl } from '@/lib/site';

const socialIcons = { github: GitFork, linkedin: BriefcaseBusiness };

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-rail">
      <div className="section-label">
        <span className="section-number" aria-hidden="true">{number}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const { profile, socials, experiences, education, certifications, projects, skills, publications } = portfolio;
  const [featuredProject, ...otherProjects] = projects;
  const nameParts = profile.name.split(' ');
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': `${siteUrl}#person`, name: profile.name,
        url: siteUrl.href, jobTitle: profile.role, description: profile.description,
        sameAs: socials.map(social => social.url),
      },
      {
        '@type': 'WebSite', '@id': `${siteUrl}#website`, url: siteUrl.href,
        name: `${profile.name} — ${profile.role}`, inLanguage: 'en',
        author: { '@id': `${siteUrl}#person` },
      },
      ...publications.map(publication => ({
        '@type': 'ScholarlyArticle', headline: publication.title,
        url: publication.url, identifier: publication.doi, datePublished: String(publication.year),
        author: publication.authors.map(name => ({ '@type': 'Person', name })),
        isPartOf: { '@type': 'Periodical', name: publication.journal },
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="page-width flex min-h-20 items-center justify-between gap-4">
          <a href="#home" className="wordmark" aria-label={`${profile.name}, home`}>
            <span aria-hidden="true" className="monogram">bk.</span>
            <span>{profile.shortName}</span>
          </a>
          <div className="flex items-center gap-3 lg:gap-6">
            <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
              {navigation.map(link => <a key={link.href} href={link.href} className="nav-link">{link.label}</a>)}
            </nav>
            <div className="hidden items-center border-l border-border pl-3 xl:flex">
              {socials.map(social => {
                const Icon = socialIcons[social.id as keyof typeof socialIcons];
                return <a key={social.id} href={social.url} className="icon-link" aria-label={social.label}><Icon className="size-4" /></a>;
              })}
            </div>
            <HeaderControls />
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" tabIndex={-1} aria-labelledby="hero-title" className="hero page-width">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="hero-copy lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span aria-hidden="true" className="h-px w-7 bg-primary" />
                {profile.role}
              </p>
              <h1 id="hero-title" className="hero-heading">
                {nameParts.slice(0, -1).join(' ')}<br />
                <span className="text-primary">{nameParts.at(-1)}.</span>
              </h1>
              <p className="hero-description">{profile.description}</p>
              <div className="hero-actions">
                <Button asChild><a href="#projects">View projects<ArrowDown /></a></Button>
                <Button variant="outline" asChild><a href={socials[0].url}><GitFork />GitHub</a></Button>
                <a className="text-link px-2" href={socials[1].url}>LinkedIn<ArrowUpRight /></a>
              </div>
            </div>

            <aside aria-label="Areas of engineering focus" className="practice-index lg:col-span-5">
              <div className="flex items-center justify-between px-6 py-4">
                <p className="eyebrow text-muted-foreground">Engineering practice</p>
                <span className="font-mono text-xs text-primary" aria-hidden="true">[ bk. ]</span>
              </div>
              <ol>
                {profile.focus.map((focus, index) => (
                  <li key={focus.title} className="practice-row">
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="text-base font-medium tracking-tight">{focus.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{focus.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
          <div className="hero-footnote">
            <span className="flex items-center gap-2"><MapPin className="size-3.5" aria-hidden="true" />Kota Bogor, Indonesia</span>
            <span>Web applications / Backend systems / Developer tools</span>
          </div>
        </section>

        <div className="page-width">
          <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="section-layout">
            <SectionLabel number="01">Selected work</SectionLabel>
            <div className="section-body">
              <div className="section-heading">
                <h2 id="projects-title" className="section-title">Interfaces. Systems.<br />Real applications.</h2>
                <a href={socials[0].url} className="text-link">All repositories<ArrowUpRight /></a>
              </div>

              {featuredProject && (
                <article className="project-feature" aria-labelledby="featured-project-title">
                  <div className="project-feature-head">
                    <p className="eyebrow">01 / Featured project</p>
                    <span className="eyebrow">Web application</span>
                  </div>
                  <div className="project-feature-body">
                    <p className="eyebrow mb-3">{featuredProject.category}</p>
                    <h3 id="featured-project-title" className="project-title">
                      <a href={featuredProject.links[0].url}>{featuredProject.name}</a>
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-muted">{featuredProject.description}</p>
                    <dl className="project-meta">
                      <div><dt>My contribution</dt><dd>{featuredProject.contribution}</dd></div>
                      <div><dt>Why it matters</dt><dd>{featuredProject.significance}</dd></div>
                    </dl>
                    <ul aria-label={`${featuredProject.name} technologies`} className="technology-list mt-6 text-ink-muted">
                      {featuredProject.technologies.map(technology => <li key={technology}>{technology}</li>)}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-x-6">
                      {featuredProject.links.map(link => <a key={link.id} href={link.url} className="text-link">{link.label}<ArrowUpRight /></a>)}
                    </div>
                  </div>
                </article>
              )}

              {otherProjects.map((project, index) => (
                <article key={project.id} className="project-row">
                  <span className="project-index" aria-hidden="true">{String(index + 2).padStart(2, '0')}</span>
                  <div className="project-content">
                    <p className="eyebrow mb-2 text-muted-foreground">{project.category}</p>
                    <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{project.description}</p>
                    <ul aria-label={`${project.name} technologies`} className="technology-list mt-4 text-muted-foreground">
                      {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
                    </ul>
                    <details className="project-details">
                      <summary>Contribution & context<Plus className="expand-icon" aria-hidden="true" /></summary>
                      <div>
                        <p><span className="font-medium text-foreground">My contribution. </span>{project.contribution}</p>
                        <p><span className="font-medium text-foreground">Why it matters. </span>{project.significance}</p>
                      </div>
                    </details>
                    <div className="mt-2 flex flex-wrap gap-x-6">
                      {project.links.map(link => <a key={link.id} href={link.url} className="text-link">{link.label}<ArrowUpRight /></a>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="about" tabIndex={-1} aria-labelledby="about-title" className="section-layout">
            <SectionLabel number="02">About me</SectionLabel>
            <div className="section-body">
              <h2 id="about-title" className="section-title mb-7">The person behind the code.</h2>
              <div className="grid items-start gap-6 sm:grid-cols-4">
                <Image {...profile.portrait} sizes="(min-width: 640px) 192px, 96px" className="aspect-square w-24 border border-border object-cover sm:w-full" />
                <div className="about-copy sm:col-span-3">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              </div>
              <p className="mt-7 border-l-2 border-primary pl-4 font-mono text-xs leading-6 text-muted-foreground">Electrical engineering / Software development / Applied research</p>
            </div>
          </section>

          <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="section-layout">
            <SectionLabel number="03">Experience</SectionLabel>
            <div className="section-body">
              <div className="section-heading">
                <h2 id="experience-title" className="section-title">Where I’ve contributed.</h2>
                <span className="text-sm text-muted-foreground">Open a role for the details</span>
              </div>
              <div className="experience-list">
                {experiences.map((experience, index) => (
                  <details key={experience.id} className="experience-entry" open={index === 0}>
                    <summary>
                      <h3 className="experience-summary">
                        <span className="experience-heading">
                          <span className="eyebrow block text-muted-foreground">{experience.category}</span>
                          <span className="experience-role">{experience.role}</span>
                          <span className="mt-1 block text-sm leading-6 font-normal text-muted-foreground">{experience.company}</span>
                        </span>
                        <span className="experience-meta">{experience.period}</span>
                        <span className="experience-toggle"><Plus className="expand-icon" aria-hidden="true" /></span>
                      </h3>
                    </summary>
                    <div className="experience-content">
                      {experience.location && <p className="mb-3 font-mono text-xs text-primary">{experience.location}</p>}
                      <p>{experience.summary}</p>
                      <ul>{experience.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="section-layout">
            <SectionLabel number="04">The toolbox</SectionLabel>
            <div className="section-body">
              <h2 id="skills-title" className="section-title mb-8">Tools, chosen for the work.</h2>
              <dl className="border-b border-border">
                {skills.map(group => (
                  <div key={group.id} className="skill-row">
                    <dt>{group.name}</dt>
                    <dd>
                      <p className="text-base leading-7">{group.technologies.join(' / ')}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{group.context}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section id="credentials" tabIndex={-1} aria-labelledby="credentials-title" className="section-layout">
            <SectionLabel number="05">Foundations</SectionLabel>
            <div className="section-body">
              <h2 id="credentials-title" className="section-title mb-8">Education & continued learning.</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-5 text-muted-foreground">Education</p>
                  {education.map(item => (
                    <div key={item.id} className="credential-entry">
                      <h3 className="text-lg leading-7 font-medium">{item.degree}</h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">{item.institution}</p>
                      <p className="mt-3 font-mono text-xs leading-6 text-muted-foreground">{item.period}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="eyebrow mb-5 text-muted-foreground">Certifications</p>
                  <ul className="divide-y divide-border border-y border-border">
                    {certifications.map(certification => <li key={certification.id} className="py-3 text-sm leading-6">{certification.name}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="research" tabIndex={-1} aria-labelledby="research-title" className="section-layout">
            <SectionLabel number="06">Research</SectionLabel>
            <div className="section-body">
              <h2 id="research-title" className="section-title mb-8">From practice to paper.</h2>
              {publications.map(publication => (
                <article key={publication.id} className="publication">
                  <div className="publication-header">
                    <p className="eyebrow flex items-center gap-2 text-muted-foreground"><BookOpen className="size-4" aria-hidden="true" />Published research</p>
                    <span className="font-mono text-xs text-primary">{publication.year}</span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl leading-8 font-medium tracking-tight" lang="id">{publication.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {publication.authors.map((author, index) => <span key={author}>{index > 0 && ', '}{index === 0 ? <span className="font-medium text-foreground">{author}</span> : author}</span>)}
                    </p>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">{publication.summary}</p>
                    <p className="mt-5 font-mono text-xs leading-6 text-muted-foreground">{publication.journal}<br />{publication.citation}</p>
                    <div className="mt-5 flex flex-wrap gap-x-6">
                      <a href={publication.url} className="text-link">Read on ResearchGate<ArrowUpRight /></a>
                      <a href={`https://doi.org/${publication.doi}`} className="text-link">View DOI<ArrowUpRight /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="section-layout">
            <SectionLabel number="07">Say hello</SectionLabel>
            <div className="section-body">
              <div className="contact-panel">
                <div>
                  <h2 id="contact-title" className="section-title">Let’s talk software.</h2>
                  <p className="mt-3 max-w-sm text-base leading-7 text-muted-foreground">Have a project to discuss or an engineering question? Let’s connect.</p>
                </div>
                <div className="flex shrink-0 flex-col gap-2">
                  <Button asChild className="rounded-sm"><a href={socials[1].url}>Connect on LinkedIn<ArrowUpRight /></a></Button>
                  <a href={socials[0].url} className="text-link justify-center"><GitFork />Explore my GitHub</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="page-width flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs leading-6 text-muted-foreground">© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex flex-wrap items-center gap-5">
            {socials.map(social => <a key={social.id} href={social.url} className="text-link">{social.label}</a>)}
            <a className="text-link" href="#home">Back to top<ArrowUp /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
