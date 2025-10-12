import TerminalProjects from './TerminalProjects';

// Page-specific metadata
export const metadata = {
  title: 'My Projects',
  description: 'Explore the portfolio of Collins Njogu featuring full-stack web development projects including e-commerce platforms, task management apps, and modern web applications built with React, Next.js, Node.js, and TypeScript.',
  keywords: [
    'Collins Njogu projects',
    'web development portfolio',
    'React projects',
    'Next.js projects',
    'full stack projects',
    'Node.js applications',
    'web developer portfolio Kenya',
    'JavaScript projects',
    'TypeScript projects',
    'Collins Njogu portfolio'
  ],
  openGraph: {
    title: 'Projects by Collins Njogu | Full Stack Developer',
    description: 'View my portfolio of full-stack web development projects including e-commerce platforms, real-time applications, and modern web solutions.',
    url: 'https://collins-wamiatu.vercel.app/projects',
    images: [
      {
        url: '/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Collins Njogu Projects Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects by Collins Njogu | Full Stack Developer',
    description: 'Explore my portfolio of full-stack web development projects',
    images: ['/portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://collins-wamiatu.vercel.app/projects',
  }
};

export default function ProjectsPage() {
  return (
    <>
      {/* JSON-LD for ItemList (Projects Collection) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Collins Njogu - Projects Portfolio',
            description: 'Portfolio showcasing full-stack web development projects by Collins Njogu',
            url: 'https://collins-wamiatu.vercel.app/projects',
            creator: {
              '@type': 'Person',
              name: 'Collins Njogu',
              jobTitle: 'Full Stack Developer',
              url: 'https://collins-wamiatu.vercel.app',
            },
            about: {
              '@type': 'CreativeWork',
              name: 'Web Development Portfolio',
              description: 'Collection of full-stack web applications and projects'
            }
          })
        }}
      />
      
      <TerminalProjects />
    </>
  );
}