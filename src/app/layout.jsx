import Script from 'next/script';
import { Inter } from 'next/font/google';

import './globals.css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { Providers } from '@/lib/providers';

const inter = Inter({
  subsets: ['latin'],
});

const title =
  'M. Ridho Putra Sufa | Flutter Mobile Developer';

const description =
  'Portfolio M. Ridho Putra Sufa, mobile developer yang berfokus pada pengembangan aplikasi Android dan iOS menggunakan Flutter dengan pengalaman lebih dari 5 tahun dalam mobile development.';

const url = 'https://your-domain.com';

export const metadata = {
  metadataBase: new URL(url),

  title,

  description,

  keywords: [
    'Flutter Developer',
    'Mobile Developer Indonesia',
    'Flutter Indonesia',
    'Android Developer',
    'iOS Developer',
    'Flutter Freelance',
    'Next.js',
    'Strapi CMS',
  ],

  creator: 'M. Ridho Putra Sufa',

  openGraph: {
    type: 'website',

    url,

    title,

    description,

    siteName: 'Portfolio Ridho',
  },

  icons: {
    icon: '/favicon.ico',

    shortcut: '/favicon-16x16.png',

    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#030712',
    },
  ],
};

const googleAnalyticsId =
  process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className="!scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-gray text-gray-600 antialiased`}
      >
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />

            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];

                function gtag(){
                  dataLayer.push(arguments);
                }

                gtag('js', new Date());

                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}

        <Providers>
          <Header />

          <main className="flex min-h-screen w-full flex-col">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}