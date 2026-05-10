import Script from 'next/script';
import { Inter } from 'next/font/google';

import './globals.css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
});

const title =
  'M. Ridho Putra Sufa | Flutter Mobile Developer';

const description =
  'Portfolio M. Ridho Putra Sufa, Flutter Mobile Developer dari Palembang yang berpengalaman membangun aplikasi pemerintahan, enterprise system, dan aplikasi edukasi berbasis Android dan iOS.';

const url = 'https://your-domain.com';

export const metadata = {
  metadataBase: new URL(url),

  title,

  description,

  keywords: [
    'Ridho Putra',
    'M Ridho Putra Sufa',
    'Flutter Developer Indonesia',
    'Flutter Mobile Developer',
    'Mobile Developer Palembang',
    'Flutter Freelancer Indonesia',
    'Flutter Engineer',
    'Android Developer Indonesia',
    'iOS Developer Indonesia',
    'Sidemang',
    'Lambidaro',
    'Halo Palembang',
    'Flutter Portfolio',
    'Next.js Portfolio',
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
  themeColor: '#ffffff',
};

const googleAnalyticsId =
  process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className="!scroll-smooth"
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

        <Header />

        <main className="flex min-h-screen w-full flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}