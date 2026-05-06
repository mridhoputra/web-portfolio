import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

const Tag = React.forwardRef(
  ({ label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          'flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1',
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;