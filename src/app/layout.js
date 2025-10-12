import "./globals.css";


// Metadata for SEO
export const metadata = {
  metadataBase: new URL("https://collins-wamiatu.vercel.app"),
  

  // Basic metadata
  title: {
    default: 'Collins Njogu | Full-Stack Developer Portfolio',
    template: '%s | Collins Njogu'
  },
  description: 'Full-stack developer specializing in clean code and intuitive design. Explore projects, skills, and experience in modern web development, React, Next.js, and JavaScript.',
  keywords: [
    'Collins Njogu',
    'Full-Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'Software Engineer'
  ],
  authors: [{ name: 'Collins Njogu' }],
  creator: 'Collins Njogu',
  
  // Open Graph (for social media sharing)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://collins-wamiatu.vercel.app/',
    siteName: 'Collins Njogu Portfolio',
    title: 'Collins Njogu | Full-Stack Developer Portfolio',
    description: 'Full-stack developer creating clean, efficient code and intuitive user experiences. View my projects and skills.',
    images: [
      {
        url: '/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Collins Njogu - Full-Stack Developer',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Collins Njogu | Full-Stack Developer',
    description: 'Full-stack developer specializing in clean code and intuitive design',
    images: ['/portfolio.jpg'],
    creator: 'https://x.com/CollinsNjo18634', 
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add these after you get verification codes)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

// Viewport configuration
export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <meta name="google-site-verification" content="dJyUx5O0JEWPUz3qOxMPfdeUqMKfRc-BqH-XH-SxdLs" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Collins Njogu',
              jobTitle: 'Full-Stack Developer',
              url: 'https://collins-wamiatu.vercel.app/',
              image: 'https://colman.tech/portfolio.jpg',
              description: 'Full-stack developer specializing in clean code and intuitive design',
              knowsAbout: [
                'JavaScript',
                'React',
                'Next.js',
                'TypeScript',
                'Web Development',
                'Frontend Development',
                'Backend Development'
              ],
              sameAs: [
                'https://github.com/collins254collo', 
                'https://www.linkedin.com/in/collins-njogu-4aa75a351',
                'https://x.com/CollinsNjo18634'
              ]
            })
          }}
        />
        
        {/* Canonical URL - update per page if needed */}
        <link rel="canonical" href="https://collins-wamiatu.vercel.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}