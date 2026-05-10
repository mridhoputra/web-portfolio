import { PROJECT_SECTIONS } from '@/data/projects';

import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ALL_PROJECTS =
  PROJECT_SECTIONS.flatMap(
    (section) => section.projects
  );

const featuredProjects =
  ALL_PROJECTS.filter(
    (project) => project.featured
  );

const otherProjects =
  ALL_PROJECTS.filter(
    (project) => !project.featured
  );

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
          Beberapa aplikasi mobile dan sistem digital yang pernah
          saya kembangkan, mulai dari layanan publik pemerintahan,
          enterprise system, hingga aplikasi edukasi yang telah
          digunakan oleh pengguna nyata.
        </Typography>
      </div>

      {/* Featured Projects */}
      <div className="mt-20 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h3"
            className="text-gray-900"
          >
            Featured Projects
          </Typography>

          <Typography className="max-w-3xl leading-relaxed">
            Beberapa project utama yang menjadi fokus pengembangan
            dan memiliki kontribusi besar dalam implementasi sistem
            digital di dunia nyata.
          </Typography>
        </div>

        <div className="flex flex-col gap-14">
          {featuredProjects.map((project) => (
            <ProjectDetails
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="mt-28 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h3"
            className="text-gray-900"
          >
            Other Projects
          </Typography>

          <Typography className="max-w-3xl leading-relaxed">
            Project lainnya yang dikembangkan untuk kebutuhan
            edukasi, multimedia interaktif, maintenance aplikasi,
            dan freelance mobile development.
          </Typography>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Typography
                    variant="h3"
                    className="text-xl"
                  >
                    {project.title}
                  </Typography>

                  <Typography className="line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </Typography>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies
                    ?.slice(0, 3)
                    .map((technology) => (
                      <Tag
                        key={technology}
                        label={technology}
                      />
                    ))}
                </div>

                <a
                  href={`/projects/${project.slug}`}
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-gray-900
                    underline
                    underline-offset-4
                  "
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WorkSection;