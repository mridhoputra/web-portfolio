import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-16 md:grid md:grid-cols-[1fr_260px] md:items-center">
        {/* Content */}
        <div className="flex max-w-3xl flex-col justify-center gap-8 2xl:gap-12">
          <div className="flex flex-col gap-5">
            <Typography variant="h1">
              Halo, saya Ridho{' '}
              <span className="inline-block animate-waving-hand">
                👋
              </span>
            </Typography>

            <Typography className="leading-relaxed">
              Saya adalah seorang mobile developer yang berfokus
              pada pengembangan aplikasi Android dan iOS menggunakan
              Flutter, dengan pengalaman lebih dari 5 tahun dalam
              pengembangan aplikasi mobile.
              <br />
              <br />
              Dalam proses pengembangan aplikasi, saya mengutamakan
              user experience agar aplikasi tidak hanya memiliki
              tampilan yang menarik, tetapi juga nyaman, mudah
              digunakan, dan memberikan pengalaman yang baik
              bagi pengguna.
              <br />
              <br />
              Saya telah mengembangkan dan merilis beberapa aplikasi
              ke Play Store dan App Store untuk kebutuhan perusahaan
              maupun project freelance.
            </Typography>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <MapPin
                size={20}
                className="stroke-gray-600"
              />

              <Typography>
                Palembang, Indonesia
              </Typography>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>

              <Typography>
                Terbuka untuk freelance project aplikasi mobile
              </Typography>
            </div>
          </div>

          <SocialIcons />
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Background Accent */}
            <div className="absolute -bottom-4 -right-4 h-[210px] w-[180px] rounded-[32px] bg-blue-100/60 blur-md md:h-[250px] md:w-[210px]" />

            {/* Image Card */}
            <div className="relative h-[210px] w-[180px] overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl md:h-[250px] md:w-[210px]">
              <Image
                src="/images/ridho-avatar.jpg"
                alt="Portrait of Ridho"
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;