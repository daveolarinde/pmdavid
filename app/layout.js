import "./globals.css";

const siteUrl = "https://davidolarinde.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Olarinde | Agile Project Manager",
    template: "%s | David Olarinde",
  },
  description:
    "David Olarinde is an Agile Project Manager at Maximillian Labs, applying Scrum and Kanban practices with Jira and Slack to keep teams shipping. Open to Agile PM roles.",
  keywords: [
    "David Olarinde",
    "Agile Project Manager",
    "Scrum Master",
    "Kanban",
    "Jira",
    "Project Manager Portfolio",
    "Maximillian Labs",
    "Agile PM",
  ],
  authors: [{ name: "David Olarinde", url: siteUrl }],
  creator: "David Olarinde",
  publisher: "David Olarinde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "David Olarinde — Agile PM Portfolio",
    title: "David Olarinde | Agile Project Manager",
    description:
      "Turning process into progress, one sprint at a time. Scrum, Kanban, Jira, and Slack — applied on real agency work at Maximillian Labs.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Olarinde — Agile Project Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Olarinde | Agile Project Manager",
    description:
      "Turning process into progress, one sprint at a time. Scrum, Kanban, Jira, and Slack in action.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Olarinde",
  jobTitle: "Agile Project Manager",
  worksFor: {
    "@type": "Organization",
    name: "Maximillian Labs",
  },
  url: siteUrl,
  knowsAbout: [
    "Scrum",
    "Kanban",
    "Jira",
    "Slack",
    "Agile Project Management",
    "Roadmapping",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
