// experience-section.jsx

import { EXPERIENCES } from '@/data/experiences';

import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container
      className="bg-gray-50"
      id="experience"
    >
      <div className="mb-10 flex flex-col items-center gap-4 md:mb-12">
        <div className="self-center">
          <Tag label="Pengalaman" />
        </div>

        <Typography
          variant="subtitle"
          className="max-w-3xl text-center leading-relaxed"
        >
          Perjalanan karier dan pengalaman profesional saya dalam
          pengembangan aplikasi mobile, website, serta pengelolaan
          sistem digital di lingkungan pemerintahan maupun project
          freelance.
        </Typography>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:gap-8">
        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails
            {...experience}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;