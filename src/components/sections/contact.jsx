'use client';

import { useState } from 'react';

import {
  Copy,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

import useWindowSize from '@/hooks/use-window-size';

import { copyTextToClipboard } from '@/lib/utils';

const email = 'mridhoputra7@gmail.com';

const phone = '085709757435';

const whatsappUrl =
  'https://wa.me/6285709757435/?text=Halo%20Ridho,%20saya%20tertarik%20untuk%20berdiskusi%20terkait%20project%20atau%20kolaborasi.';

const ContactSection = () => {
  const { width } = useWindowSize();

  const [isCopied, setIsCopied] = useState(false);

  const [copiedValueType, setCopiedValueType] =
    useState(null);

  const handleCopyClick = async (text, type) => {
    try {
      await copyTextToClipboard(text);

      setIsCopied(true);

      setCopiedValueType(type);

      const timeoutId = setTimeout(() => {
        setIsCopied(false);

        setCopiedValueType(null);

        clearTimeout(timeoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);

      setCopiedValueType(null);

      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Kontak" />
        </div>

        <Typography
          variant="subtitle"
          className="max-w-2xl text-center"
        >
          Terbuka untuk freelance project,
          remote collaboration, maupun
          part-time opportunity di bidang
          Flutter development, backend
          integration, dan aplikasi digital
          edukasi. Jika Anda memiliki
          project atau ingin berdiskusi
          lebih lanjut, jangan ragu untuk
          menghubungi saya.
        </Typography>
      </div>

      <div className="mt-10 flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-5 md:gap-6">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />

            <Typography variant="h2">
              {email}
            </Typography>

            <IconButton
              size={
                width && width < 768
                  ? 'md'
                  : 'lg'
              }
              onClick={() =>
                handleCopyClick(
                  email,
                  'email',
                )
              }
              showTooltip={
                isCopied &&
                copiedValueType === 'email'
              }
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Typography variant="h2">
                {phone}
              </Typography>
            </a>

            <IconButton
              size={
                width && width < 768
                  ? 'md'
                  : 'lg'
              }
              onClick={() =>
                handleCopyClick(
                  phone,
                  'phone',
                )
              }
              showTooltip={
                isCopied &&
                copiedValueType === 'phone'
              }
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>

          <div className="flex items-center gap-3 text-zinc-500">
            <MapPin className="h-5 w-5" />

            <Typography>
              Palembang, Indonesia • Open
              to Remote Work
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            Temukan saya juga di platform
            berikut
          </Typography>

          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;