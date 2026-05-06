'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  ...props
}) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  return <Image src={finalSrc} alt={alt} {...props} />;
};

export default ImageWrapper;