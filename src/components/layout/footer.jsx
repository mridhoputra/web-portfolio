import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 text-center">
        <Typography
          variant="body3"
          className="flex flex-wrap items-center justify-center text-gray-600"
        >
          <Copyright className="mr-1 h-4 w-4" />

          {new Date().getFullYear()} M Ridho Putra Sufa.
          Built with Flutter mindset, coffee,
          and lots of problem solving.
        </Typography>

        <Typography
          variant="body3"
          className="text-gray-500"
        >
          Portfolio originally inspired by{' '}
          <Link
            href="https://github.com/shahsagarm"
            externalLink
            withUnderline
            noCustomization
          >
            Sagar Shah
          </Link>
          , then heavily redesigned and customized
          for personal branding and mobile app
          showcase.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;