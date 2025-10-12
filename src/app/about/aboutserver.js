import AboutSection from './AboutSection';


export const metadata = {
  title: 'About Me',
  description: 'Learn about Collins Njogu, a full stack developer from Nairobi, Kenya with 1+ years of experience in React, Next.js, Node.js, and modern web technologies. Passionate about creating elegant solutions to complex problems.',
  keywords: [
    'Collins Njogu about',
    'full stack developer Nairobi',
    'React developer Kenya',
    'Collins Njogu biography',
    'hire full stack developer Kenya',
    'web developer Nairobi',
    'Next.js developer',
    'Node.js developer'
  ],
  openGraph: {
    title: 'About Collins Njogu | Full Stack Developer',
    description: 'Full stack developer from Nairobi, Kenya specializing in React, Next.js, and Node.js with 1+ years of professional experience.',
    url: 'https://collins-wamiatu.vercel.app/about',
    images: [
      {
        url: '/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Collins Njogu - Full Stack Developer from Nairobi, Kenya',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Collins Njogu | Full Stack Developer',
    description: 'Full stack developer from Nairobi specializing in React, Next.js, and Node.js',
    images: ['/portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://collins-wamiatu.vercel.app/about',
  }
};

export default function AboutPage() {
  return <AboutSection />;
}