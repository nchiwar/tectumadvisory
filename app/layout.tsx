import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  // Resolves the terminal warning about metadataBase
  metadataBase: new URL('https://tectumadvisory.com'),
  
  title: "Tectum Advisory — Shelter for what you're building.",
  description:
    'Tectum Advisory is an independent corporate advisory firm providing structured solutions across regulatory compliance, governance, and strategic growth.',
  
  // Displays the logo on the browser tab and Apple home screens
  icons: {
    icon: '/tectumlogo.png',
    apple: '/tectumlogo.png',
  },
  
  openGraph: {
    title: 'Tectum Advisory',
    description: "Shelter for what you're building.",
    // Displays your logo when the link is shared on social media
    images: [{ url: '/tectumlogo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/tectumlogo.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}