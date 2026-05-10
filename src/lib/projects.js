import { PROJECT_SECTIONS } from '@/data/projects';

export const ALL_PROJECTS =
    PROJECT_SECTIONS.flatMap(
        (section) => section.projects
    );

export const getProjectBySlug = (slug) => {
    return ALL_PROJECTS.find(
        (project) => project.slug === slug
    );
};