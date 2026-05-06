'use client';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({
  url,
  logo,
  darkModeLogo,
  label,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Link
        noCustomization
        href={url}
        externalLink
        className="group"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-gray-100 bg-white/60 p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/40">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Typography
        variant="body2"
        className="font-medium text-gray-600"
      >
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;