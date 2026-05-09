import { PROJECT_SECTIONS } from '@/lib/data';

import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const WorkSection = () => {
  return (
    <Container
      id="work"
      className="bg-gray-50"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <Tag label="Project" />

        <Typography
          variant="subtitle"
          className="max-w-3xl text-center leading-relaxed"
        >
          Beberapa project dan sistem digital yang pernah saya
          kerjakan, mulai dari aplikasi pelayanan publik hingga
          website untuk kebutuhan bisnis dan client.
        </Typography>
      </div>

      {/* Sections */}
      <div className="mt-20 flex flex-col gap-28">
        {PROJECT_SECTIONS.map((section) => (
          <div
            key={section.id}
            className="flex flex-col gap-10"
          >
            {/* Section Header */}
            <div className="flex flex-col gap-3">
              <Typography
                variant="h3"
                className="text-gray-900"
              >
                {section.title}
              </Typography>

              <Typography className="max-w-4xl leading-relaxed">
                {section.description}
              </Typography>
            </div>

            {/* Projects */}
            <div className="flex flex-col gap-14">
              {section.projects.map((project) => (
                <ProjectDetails
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;