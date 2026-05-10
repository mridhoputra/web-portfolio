'use client';

import Image from 'next/image';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';

const TechDetails = ({
  url,
  logo,
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
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-gray-100 bg-white/60 p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
          <Image
            src={logo}
            alt={label}
            width={56}
            height={56}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
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