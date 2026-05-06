import * as React from 'react';
import { cva } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',

      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',

      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',

      subtitle: 'text-lg md:text-xl',

      body1: 'text-base md:text-lg',

      body2: 'text-base',

      body3: 'text-sm',
    },
  },

  defaultVariants: {
    variant: 'body2',
  },
});

let elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
};

const Typography = React.forwardRef(
  (
    { component, className = '', variant, children, ...props },
    ref
  ) => {
    const Comp = component
      ? component
      : variant
        ? elementMapping[variant]
        : 'p';

    return (
      <Comp
        className={mergeClasses(
          typographyVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;