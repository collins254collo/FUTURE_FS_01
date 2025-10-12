import SkillsSection from './SkillsSection';

// Page-specific metadata
export const metadata = {
  title: 'Technical Skills',
  description: 'Explore the technical skills and expertise of Collins Njogu, a full stack developer proficient in React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and modern web development technologies. 1+ years of professional experience.',
  keywords: [
    'Collins Njogu skills',
    'React developer skills',
    'Next.js expertise',
    'Node.js developer',
    'TypeScript developer',
    'full stack developer skills',
    'MongoDB developer',
    'PostgreSQL developer',
    'JavaScript skills',
    'web development skills Kenya',
    'frontend developer skills',
    'backend developer skills'
  ],
  openGraph: {
    title: 'Technical Skills - Collins Njogu | Full Stack Developer',
    description: 'Full stack developer with expertise in React, Next.js, Node.js, TypeScript, databases, and modern web technologies',
    url: 'https://collins-wamiatu.vercel.app/skills',
    images: [
      {
        url: '/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Collins Njogu Technical Skills',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Skills - Collins Njogu',
    description: 'Full stack developer proficient in React, Next.js, Node.js, and modern web technologies',
    images: ['/portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://collins-wamiatu.vercel.app/skills',
  }
};

export default function SkillsPage() {
  return (
    <>
      {/* JSON-LD for Person with skills */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Collins Njogu',
            jobTitle: 'Full Stack Developer',
            url: 'https://collins-wamiatu.vercel.app',
            knowsAbout: [
              'React.js',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Node.js',
              'Express.js',
              'MongoDB',
              'PostgreSQL',
              'MySQL',
              'REST APIs',
              'GraphQL',
              'Tailwind CSS',
              'HTML5',
              'CSS3',
              'Git',
              'GitHub',
              'Web Development',
              'Frontend Development',
              'Backend Development',
              'Full Stack Development'
            ],
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional Experience',
              description: '1+ years of professional web development experience'
            }
          })
        }}
      />
      
      <SkillsSection />
    </>
  );
}