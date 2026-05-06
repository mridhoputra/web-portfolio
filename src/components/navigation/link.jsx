import * as React from 'react';
import NextLink from 'next/link';

import { mergeClasses } from '@/lib/utils';

const Link = React.forwardRef(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    },
    ref
  ) => {
    return (
      <NextLink
        {...props}
        target={externalLink ? '_blank' : '_self'}
        ref={ref}
        className={mergeClasses(
          noCustomization
            ? ''
            : 'text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600',

          withUnderline
            ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
            : '',

          className
        )}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;