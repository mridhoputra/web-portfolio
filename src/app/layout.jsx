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
  'Sagar Shah | Full Stack Developer From Ahmedabad, India.';

const description =
  'A self-proclaimed designer who specializes in full stack development (React.js & Node.js), from Ahmedabad, India.';

const url = 'https://sagarshah.dev';

export const metadata = {
  metadataBase: new URL(url),

  title,

  description,

  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
  ],

  creator: 'Sagar Shah',

  openGraph: {
    type: 'website',

    url,

    title,

    description,

    siteName: title,

    images: [
      {
        url: '/images/open-graph-sagar.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title,

    description,

    creator: '@shahsagarm',

    images: '/images/open-graph-sagar.png',
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
      color: 'black',
    },
  ],
};

const googleAnalyticsId =
  process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
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