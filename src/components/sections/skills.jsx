import { TECHNOLOGIES } from '@/lib/data';

import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Keahlian" />
        </div>

        <Typography
          variant="subtitle"
          className="max-w-2xl text-center leading-relaxed"
        >
          Teknologi, tools, dan framework yang biasa saya gunakan
          dalam pengembangan aplikasi mobile, website, serta workflow
          pengembangan modern.
        </Typography>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails
            {...technology}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;