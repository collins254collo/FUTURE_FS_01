import "./globals.css";

//  Global Metadata for Google and SEO
export const metadata = {
  metadataBase: new URL("https://collins-wamiatu.vercel.app"),
  title: {
    default: "Collins Njogu | Full-Stack Developer Portfolio",
    template: "%s | Collins Njogu",
  },
  description:
    "Full-stack developer specializing in clean code and intuitive design. Explore projects, skills, and experience in modern web development, React, Next.js, and JavaScript.",
  keywords: [
    "Collins Njogu",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Collins Njogu" }],
  creator: "Collins Njogu",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://collins-wamiatu.vercel.app/",
    siteName: "Collins Njogu Portfolio",
    title: "Collins Njogu | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer creating clean, efficient code and intuitive user experiences. View my projects and skills.",
    images: [
      {
        url: "https://collins-wamiatu.vercel.app/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Collins Njogu - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@CollinsNjo18634",
    title: "Collins Njogu | Full-Stack Developer Portfolio",
    description: "Full-stack developer specializing in clean code and intuitive design.",
    images: ["https://collins-wamiatu.vercel.app/portfolio.jpg"],
    creator: "@CollinsNjo18634",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

//  Viewport Settings
export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

//  Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*  Basic Meta Tags for Crawlers like Twitter & LinkedIn */}
        <meta
          name="description"
          content="Full-stack developer specializing in clean, efficient code and intuitive design. Explore projects, skills, and experience in modern web development, React, Next.js, and JavaScript."
        />
        <meta
          name="keywords"
          content="Collins Njogu, Full-Stack Developer, Web Developer, React Developer, Next.js, JavaScript, TypeScript, Backend Developer, Software Engineer, Portfolio"
        />
        <meta name="author" content="Collins Njogu" />

        {/*  Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://collins-wamiatu.vercel.app/" />
        <meta
          property="og:title"
          content="Collins Njogu | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Full-stack developer creating clean, efficient code and intuitive user experiences. View my projects and skills."
        />
        <meta
          property="og:image"
          content="https://collins-wamiatu.vercel.app/portfolio.jpg"
        />
        <meta property="og:site_name" content="Collins Njogu Portfolio" />

        {/*  Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CollinsNjo18634" />
        <meta
          name="twitter:title"
          content="Collins Njogu | Full-Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Full-stack developer specializing in clean code and intuitive design."
        />
        <meta
          name="twitter:image"
          content="https://collins-wamiatu.vercel.app/portfolio.jpg"
        />

        {/*  Canonical URL */}
        <link rel="canonical" href="https://collins-wamiatu.vercel.app/" />

        {/*  Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/*  Google Verification */}
        <meta
          name="google-site-verification"
          content="dJyUx5O0JEWPUz3qOxMPfdeUqMKfRc-BqH-XH-SxdLs"
        />

        {/*  Structured Data for Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Collins Njogu",
              jobTitle: "Full-Stack Developer",
              url: "https://collins-wamiatu.vercel.app/",
              image: "https://collins-wamiatu.vercel.app/portfolio.jpg",
              description:
                "Full-stack developer specializing in clean, efficient code and intuitive design.",
              worksFor: {
                "@type": "Organization",
                name: "Colman Tech Savvy",
              },
              knowsAbout: [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Web Development",
                "Backend Development",
              ],
              sameAs: [
                "https://github.com/collins254collo",
                "https://www.linkedin.com/in/collins-njogu-4aa75a351",
                "https://x.com/CollinsNjo18634",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
