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

  const [isCopied, setIsCopied] =
    useState(false);

  const [copiedValueType, setCopiedValueType] =
    useState(null);

  const handleCopyClick = async (
    text,
    type,
  ) => {
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
      <div
        className="
          flex
          flex-col
          items-center
          gap-5
          text-center
        "
      >
        <Tag label="Kontak" />

        <div className="space-y-4">
          <Typography
            variant="h2"
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-gray-900
              md:text-5xl
            "
          >
            Let's Build Something
            Meaningful
            Together
          </Typography>

          <Typography
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-relaxed
              text-gray-600
              md:text-base
            "
          >
            Terbuka untuk freelance
            project, kolaborasi remote,
            maupun peluang jangka panjang
            dalam pengembangan aplikasi
            Flutter, integrasi backend,
            dan produk digital modern.
          </Typography>
        </div>
      </div>

      <div
        className="
          mt-14
          flex
          flex-col
          items-center
          gap-8
        "
      >
        {/* Email */}
        <div
          className="
            flex
            w-full
            max-w-3xl
            items-center
            justify-between
            border-b
            border-gray-200
            pb-5
          "
        >
          <div className="flex items-center gap-4">
            <Mail
              className="
                h-5
                w-5
                text-gray-400
                md:h-6
                md:w-6
              "
            />

            <div className="flex flex-col items-start">
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                "
              >
                Email
              </span>

              <Typography
                className="
                  text-base
                  font-medium
                  text-gray-900
                  md:text-xl
                "
              >
                {email}
              </Typography>
            </div>
          </div>

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
            <Copy className="h-4 w-4" />
          </IconButton>
        </div>

        {/* WhatsApp */}
        <div
          className="
            flex
            w-full
            max-w-3xl
            items-center
            justify-between
            border-b
            border-gray-200
            pb-5
          "
        >
          <div className="flex items-center gap-4">
            <Phone
              className="
                h-5
                w-5
                text-gray-400
                md:h-6
                md:w-6
              "
            />

            <div className="flex flex-col items-start">
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                "
              >
                WhatsApp
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  transition
                  hover:opacity-70
                "
              >
                <Typography
                  className="
                    text-base
                    font-medium
                    text-gray-900
                    md:text-xl
                  "
                >
                  {phone}
                </Typography>
              </a>
            </div>
          </div>

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
            <Copy className="h-4 w-4" />
          </IconButton>
        </div>

        {/* Location */}
        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
          "
        >
          <MapPin className="h-4 w-4" />

          <span>
            Berbasis di Palembang,
            Indonesia • Siap Bekerja
            Secara Remote
          </span>
        </div>

        {/* Social */}
        <div
          className="
            mt-4
            flex
            flex-col
            items-center
            gap-4
          "
        >
          <Typography
            className="
              text-sm
              text-gray-500
            "
          >
            Let's connect
          </Typography>

          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;