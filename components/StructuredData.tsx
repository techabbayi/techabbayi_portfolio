import { personalInfo, projects, achievementsAndExperiences, certificates } from '@/lib/data';

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techabbayi.com';

  const personSchema = {
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: personalInfo.name,
    alternateName: ['techabbayi', 'Lokeswara', 'Muthumula Lokeswara', 'Lokesh'],
    url: baseUrl,
    image: `${baseUrl}/profile.png`,
    jobTitle: 'Programmer, Cyber Activist & Founder',
    description:
      'Official portfolio of Lokeswara Muthumula (techabbayi). Founder of AKMULTIVISION Multimedia Services and Diksuchi EdTech, Creator of Sr Digital Telugu, MyGov Campus Ambassador, AI systems engineer, and cybersecurity practitioner based in Andhra Pradesh, India.',
    worksFor: [
      {
        '@type': 'Organization',
        name: 'AKMULTIVISION Multimedia Services',
        url: baseUrl,
        founder: {
          '@type': 'Person',
          name: personalInfo.name,
        },
      },
      {
        '@type': 'Organization',
        name: 'Diksuchi EdTech',
        alternateName: 'Diksuchi EduLabs Private Limited',
        url: baseUrl,
      },
      {
        '@type': 'Organization',
        name: 'Sr Software Solutions',
        url: baseUrl,
      },
      {
        '@type': 'Organization',
        name: 'Sr Digital Telugu',
        url: 'https://www.youtube.com/@techabbayi',
      },
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'The Apollo University',
      url: 'https://apollouniversity.edu.in/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Komarole',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/techabbayi',
      'https://www.linkedin.com/in/lokeswaramuthumula/',
      'https://x.com/techabbayi',
      'https://www.instagram.com/techabbayi/',
      'https://g.dev/techabbayi',
    ],
    award: [
      'MyGov Campus Ambassador — Government of India',
      'Guest of Honour & Technical Jury Member — HackSphere Hackathon 2026 (SITAMS)',
      'Apple WWDC26 Developer Participant — Siri AI & Apple Intelligence',
      'Gemini Enterprise Agent Ready Credential — Google Cloud',
      'Google Developer Program Active Member',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Autonomous AI Agents',
      'Generative Engine Optimization (GEO)',
      'Cybersecurity & Vulnerability Assessment',
      'Full Stack Software Engineering',
      'Python',
      'FastAPI',
      'React',
      'Next.js',
      'TypeScript',
      'Legal AI Systems',
      'Cryptographic Key Management (AES-256-GCM, RSA-4096)',
      'Workflow Automation with n8n',
      'Digital Rights & Cyber Activism',
    ],
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Lokeswara Muthumula — techabbayi',
    alternateName: 'techabbayi engineering',
    description: personalInfo.tagline,
    publisher: {
      '@id': `${baseUrl}/#person`,
    },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/projects?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // 100% Rich Schema for Every Single Project
  const projectItemListSchema = {
    '@type': 'ItemList',
    '@id': `${baseUrl}/#projects`,
    name: 'Software Projects, Autonomous AI & Cryptography Systems by Lokeswara Muthumula',
    description: 'Flagship open-source and enterprise software systems engineered by Lokeswara Muthumula (techabbayi).',
    numberOfItems: projects.length,
    itemListElement: projects.map((p, idx) => {
      const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return {
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'SoftwareApplication',
          '@id': `${baseUrl}/projects#${slug}`,
          name: p.title,
          alternateName: p.tagline || p.title,
          description: p.fullDescription || p.description,
          applicationCategory: p.category,
          operatingSystem: 'Windows, Linux, macOS, Android, Web, Cloud',
          programmingLanguage: p.techStack,
          featureList: p.highlights ? p.highlights.join(', ') : p.description,
          url: `${baseUrl}/projects#${slug}`,
          sameAs: p.github,
          author: {
            '@id': `${baseUrl}/#person`,
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      };
    }),
  };

  // 100% Rich Schema for Every Experience & Milestone
  const experienceItemListSchema = {
    '@type': 'ItemList',
    '@id': `${baseUrl}/#experiences`,
    name: 'Career Experiences, Leadership Milestones & Keynote Roles of Lokeswara Muthumula',
    description: 'Chronicle of leadership roles, hackathon jury appointments, and startup milestones.',
    numberOfItems: achievementsAndExperiences.length,
    itemListElement: achievementsAndExperiences.map((exp, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Role',
        name: exp.title,
        roleName: exp.role,
        startDate: exp.period,
        description: exp.summary,
        url: exp.link || `${baseUrl}/#experience`,
        sameAs: exp.link,
        keywords: exp.techStack.join(', '),
        worksFor: {
          '@type': 'Organization',
          name: exp.organization,
        },
        employee: {
          '@id': `${baseUrl}/#person`,
        },
      },
    })),
  };

  // 100% Rich Schema for Verified Credentials
  const credentialItemListSchema = {
    '@type': 'ItemList',
    '@id': `${baseUrl}/#certificates`,
    name: 'Verified Technical & Professional Credentials of Lokeswara Muthumula',
    description: 'Accreditations and certifications in Artificial Intelligence, Cybersecurity, and Software Engineering.',
    numberOfItems: certificates.length,
    itemListElement: certificates.map((cert, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        credentialCategory: cert.category || 'Professional Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: cert.issuer,
        },
        identifier: cert.credentialId,
        dateCreated: cert.date,
        url: cert.link && cert.link !== '#' ? cert.link : `${baseUrl}/#certificates`,
      },
    })),
  };

  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      projectItemListSchema,
      experienceItemListSchema,
      credentialItemListSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDataGraph),
      }}
    />
  );
}
