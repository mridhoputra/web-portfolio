// card.jsx

import { mergeClasses } from '@/lib/utils';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={mergeClasses(
        `
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-sm
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;