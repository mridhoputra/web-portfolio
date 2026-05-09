// tag.jsx

import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

const Tag = React.forwardRef(
  ({ label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          `
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            px-5
            py-2
            shadow-sm
          `,
          className
        )}
        {...props}
      >
        <Typography
          variant="body3"
          className="font-medium text-gray-700"
        >
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;