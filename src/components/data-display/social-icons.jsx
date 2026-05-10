'use client';

import { SOCIAL_LINKS } from '@/data/social-links';

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((socialLink, index) => {
        const Icon = socialLink.icon;

        return (
          <a
            key={index}
            href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-gray-200
              bg-white
              text-gray-700
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-1
              hover:border-gray-300
              hover:text-gray-900
              hover:shadow-md
            "
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;