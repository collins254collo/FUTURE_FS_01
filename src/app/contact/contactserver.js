import ContactSection from './ContactSection';

// Page-specific metadata
export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with Collins Njogu, a full stack developer from Nairobi, Kenya. Available for freelance projects, collaborations, and full-time opportunities. Contact via email at njogucollins10397@gmail.com or phone +254 745 733370.',
  keywords: [
    'contact Collins Njogu',
    'hire full stack developer',
    'freelance developer Kenya',
    'web developer for hire',
    'Collins Njogu email',
    'Collins Njogu phone',
    'full stack developer Nairobi contact',
    'React developer hire',
    'Next.js developer contact'
  ],
  openGraph: {
    title: 'Contact Collins Njogu | Full Stack Developer',
    description: 'Get in touch with Collins Njogu for freelance projects, collaborations, and full-time opportunities. Based in Nairobi, Kenya.',
    url: 'https://collins-wamiatu.vercel.app/contact',
    images: [
      {
        url: '/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Collins Njogu - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Collins Njogu | Full Stack Developer',
    description: 'Get in touch for freelance projects, collaborations, and opportunities',
    images: ['/portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://collins-wamiatu.vercel.app/contact',
  }
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Collins Njogu',
            description: 'Contact page for Collins Njogu, full stack developer',
            url: 'https://collins-wamiatu.vercel.app/contact',
            mainEntity: {
              '@type': 'Person',
              name: 'Collins Njogu',
              email: 'njogucollins10397@gmail.com',
              telephone: '+254745733370',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nairobi',
                addressCountry: 'Kenya'
              },
              jobTitle: 'Full Stack Developer',
              sameAs: [
                 'https://github.com/collins254collo', 
                'https://www.linkedin.com/in/collins-njogu-4aa75a351',
                'https://x.com/CollinsNjo18634'
              ]
            }
          })
        }}
      />
      
      <ContactSection />
    </>
  );
}