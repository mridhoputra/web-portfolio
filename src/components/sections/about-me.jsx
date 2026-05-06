import Image from 'next/image';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="Tentang Saya" />
      </div>

      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-start">
        {/* Image */}
        <div className="w-full lg:w-[42%]">
          <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent" />

            <div className="relative h-[260px] w-full md:h-[320px]">
              <Image
                src="/images/ridho-at-work.jpg"
                alt="Ridho at work"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full max-w-2xl flex-col gap-6 lg:w-[58%]">
          <Typography variant="h3">
            Perjalanan Saya di Dunia Mobile Development
          </Typography>

          <Typography className="leading-relaxed">
            Saya mulai mendalami pengembangan aplikasi mobile
            sejak tahun 2020 melalui program beasiswa IDCamp
            dan learning path Android Developer dari Dicoding.
            Pada awal karier, saya bekerja sebagai React Native
            developer sebelum akhirnya beralih menggunakan
            Flutter pada tahun 2022.
          </Typography>

          <Typography className="leading-relaxed">
            Sejak menggunakan Flutter, saya telah terlibat dalam
            pengembangan dan migrasi beberapa aplikasi production,
            termasuk proses migrasi aplikasi dari React Native
            ke Flutter untuk meningkatkan maintainability dan
            pengalaman pengguna aplikasi.
          </Typography>

          <Typography className="leading-relaxed">
            Dalam proses pengembangan aplikasi, saya mengutamakan
            user experience sebagai bagian penting dari sebuah
            produk digital. Bagi saya, aplikasi yang baik bukan
            hanya memiliki tampilan yang menarik, tetapi juga
            harus nyaman digunakan, mudah dipahami, dan mampu
            memberikan pengalaman yang konsisten bagi pengguna.
          </Typography>

          <Typography className="leading-relaxed">
            Selama lebih dari 5 tahun bekerja di Dinas Komunikasi
            dan Digital Kota Palembang, saya juga terlibat dalam
            maintenance website berbasis Next.js serta pengelolaan
            CMS Strapi untuk berbagai website OPD, kecamatan,
            dan kelurahan di Kota Palembang.
          </Typography>

          <Typography className="leading-relaxed">
            Saya juga memanfaatkan AI-assisted workflow untuk
            membantu proses pengembangan aplikasi agar lebih
            efisien, mulai dari debugging, eksplorasi solusi,
            hingga iterasi pengembangan fitur secara lebih cepat
            dan terstruktur.
          </Typography>

          {/* Quick Info */}
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <Typography className="font-semibold text-gray-900">
                Pendidikan
              </Typography>

              <Typography variant="body3">
                S1 Teknik Informatika
                <br />
                Universitas Sriwijaya
              </Typography>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <Typography className="font-semibold text-gray-900">
                Pengalaman
              </Typography>

              <Typography variant="body3">
                5+ Tahun
                <br />
                Mobile Development
              </Typography>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <Typography className="font-semibold text-gray-900">
                Project
              </Typography>

              <Typography variant="body3">
                10+ Aplikasi & Sistem
                <br />
                Mobile dan Website
              </Typography>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <Typography className="font-semibold text-gray-900">
                Status
              </Typography>

              <Typography variant="body3">
                Available untuk
                <br />
                freelance project mobile app
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;