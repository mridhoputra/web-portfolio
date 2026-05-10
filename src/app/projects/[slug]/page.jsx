'use client';

import {
    use,
    useState,
} from 'react';

import Image from 'next/image';

import { notFound } from 'next/navigation';

import {
    ExternalLink,
    Smartphone,
} from 'lucide-react';

import {
    getProjectBySlug,
} from '@/lib/projects';

import Typography from '@/components/general/typography';
import Tag from '@/components/data-display/tag';
import Link from '@/components/navigation/link';

import ProjectGalleryModal from '@/components/project/project-gallery-modal';

const ProjectDetailPage = ({
    params,
}) => {
    const resolvedParams =
        use(params);

    const project =
        getProjectBySlug(
            resolvedParams.slug
        );

    if (!project) {
        notFound();
    }

    const [
        isGalleryOpen,
        setIsGalleryOpen,
    ] = useState(false);

    const [
        currentImageIndex,
        setCurrentImageIndex,
    ] = useState(0);

    const openGallery = (
        index
    ) => {
        setCurrentImageIndex(index);

        setIsGalleryOpen(true);
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex(
            (prev) =>
                prev ===
                    project.screenshots
                        .length -
                    1
                    ? 0
                    : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) =>
                prev === 0
                    ? project
                        .screenshots
                        .length - 1
                    : prev - 1
        );
    };

    return (
        <>
            <main className="bg-gray-50">
                <div
                    className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-16
            px-4
            py-14
            md:px-8
            md:py-20
          "
                >
                    {/* Hero */}
                    <section
                        className="
              overflow-hidden
              rounded-[32px]
              border
              border-gray-200
              bg-white
              shadow-sm
            "
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* Left */}
                            <div className="flex flex-col gap-8 p-8 md:p-12">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-3">
                                    <Tag
                                        label={
                                            project.category
                                        }
                                    />

                                    {project.platform?.map(
                                        (item) => (
                                            <Tag
                                                key={item}
                                                label={item}
                                                className="bg-gray-100"
                                            />
                                        )
                                    )}

                                    <Tag
                                        label={
                                            project.year
                                        }
                                        className="bg-gray-100"
                                    />
                                </div>

                                {/* Title */}
                                <div className="flex flex-col gap-5">
                                    <Typography
                                        variant="h1"
                                        className="
                      text-4xl
                      leading-tight
                      md:text-5xl
                    "
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        className="
                      max-w-2xl
                      leading-relaxed
                    "
                                    >
                                        {
                                            project.shortDescription
                                        }
                                    </Typography>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    {project
                                        .storeLinks
                                        ?.playStore && (
                                            <Link
                                                href={
                                                    project
                                                        .storeLinks
                                                        .playStore
                                                }
                                                externalLink
                                                noCustomization
                                                className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-2xl
                        bg-gray-900
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        hover:-translate-y-0.5
                        hover:bg-black
                      "
                                            >
                                                <Smartphone
                                                    size={18}
                                                />
                                                Play Store
                                                <ExternalLink
                                                    size={16}
                                                />
                                            </Link>
                                        )}

                                    {project
                                        .storeLinks
                                        ?.appStore && (
                                            <Link
                                                href={
                                                    project
                                                        .storeLinks
                                                        .appStore
                                                }
                                                externalLink
                                                noCustomization
                                                className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-gray-700
                        transition-all
                        hover:-translate-y-0.5
                        hover:bg-gray-100
                      "
                                            >
                                                <Smartphone
                                                    size={18}
                                                />
                                                App Store
                                                <ExternalLink
                                                    size={16}
                                                />
                                            </Link>
                                        )}
                                </div>
                            </div>

                            {/* Right */}
                            <div
                                className="
                  flex
                  items-center
                  justify-center
                  border-t
                  border-gray-100
                  bg-gray-100
                  p-8
                  lg:border-l
                  lg:border-t-0
                "
                            >
                                {project
                                    .screenshots?.[
                                    project
                                        .previewImageIndex ||
                                    0
                                ] && (
                                        <Image
                                            src={
                                                project
                                                    .screenshots[
                                                project
                                                    .previewImageIndex ||
                                                0
                                                ]
                                            }
                                            alt={
                                                project.title
                                            }
                                            width={380}
                                            height={760}
                                            className="
                      h-auto
                      w-[240px]
                      rounded-[36px]
                      border
                      border-gray-200
                      bg-white
                      object-cover
                      shadow-2xl
                      md:w-[320px]
                    "
                                        />
                                    )}
                            </div>
                        </div>
                    </section>

                    {/* Screenshot Gallery */}
                    {project.screenshots &&
                        project.screenshots
                            .length > 0 && (
                            <section className="flex flex-col gap-6">
                                <Typography
                                    variant="h3"
                                    className="text-gray-900"
                                >
                                    Screenshots
                                </Typography>

                                <div
                                    className="
                    flex
                    gap-5
                    overflow-x-auto
                    pb-2
                  "
                                >
                                    {project.screenshots.map(
                                        (
                                            image,
                                            index
                                        ) => (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    openGallery(
                                                        index
                                                    )
                                                }
                                                className="
                          cursor-pointer
                          shrink-0
                          overflow-hidden
                          rounded-[28px]
                          border
                          border-gray-200
                          bg-white
                          shadow-sm
                        "
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} screenshot ${index + 1
                                                        }`}
                                                    width={300}
                                                    height={640}
                                                    className="
                            h-auto
                            w-[240px]
                            object-cover
                            transition-transform
                            duration-500
                            hover:scale-[1.02]
                            md:w-[300px]
                          "
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>
                        )}

                    {/* Overview */}
                    <section className="flex flex-col gap-5">
                        <Typography
                            variant="h3"
                            className="text-gray-900"
                        >
                            Overview
                        </Typography>

                        <Typography className="max-w-5xl leading-relaxed">
                            {
                                project.fullDescription
                            }
                        </Typography>
                    </section>

                    {/* Contribution */}
                    {project.role && (
                        <section className="flex flex-col gap-5">
                            <Typography
                                variant="h3"
                                className="text-gray-900"
                            >
                                Role &
                                Contribution
                            </Typography>

                            <ul className="flex flex-col gap-4">
                                {project.role.map(
                                    (
                                        item,
                                        index
                                    ) => (
                                        <li
                                            key={index}
                                            className="
                        flex
                        items-start
                        gap-3
                      "
                                        >
                                            <div
                                                className="
                          mt-2
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-gray-400
                        "
                                            />

                                            <Typography className="leading-relaxed">
                                                {item}
                                            </Typography>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}

                    {/* Features */}
                    {project.features && (
                        <section className="flex flex-col gap-5">
                            <Typography
                                variant="h3"
                                className="text-gray-900"
                            >
                                Features
                            </Typography>

                            <div className="flex flex-wrap gap-3">
                                {project.features.map(
                                    (
                                        feature,
                                        index
                                    ) => (
                                        <Tag
                                            key={index}
                                            label={
                                                feature
                                            }
                                        />
                                    )
                                )}
                            </div>
                        </section>
                    )}

                    {/* Technologies */}
                    <section className="flex flex-col gap-5">
                        <Typography
                            variant="h3"
                            className="text-gray-900"
                        >
                            Technologies
                        </Typography>

                        <div className="flex flex-wrap gap-3">
                            {project.technologies?.map(
                                (
                                    technology,
                                    index
                                ) => (
                                    <Tag
                                        key={index}
                                        label={
                                            technology
                                        }
                                    />
                                )
                            )}
                        </div>
                    </section>

                    {/* Achievements */}
                    {project.achievements && (
                        <section className="flex flex-col gap-5">
                            <Typography
                                variant="h3"
                                className="text-gray-900"
                            >
                                Achievements
                            </Typography>

                            <ul className="flex flex-col gap-4">
                                {project.achievements.map(
                                    (
                                        item,
                                        index
                                    ) => (
                                        <li
                                            key={index}
                                            className="
                        flex
                        items-start
                        gap-3
                      "
                                        >
                                            <div
                                                className="
                          mt-2
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-gray-400
                        "
                                            />

                                            <Typography className="leading-relaxed">
                                                {item}
                                            </Typography>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}

                    {/* Impact */}
                    {project.impact && (
                        <section className="flex flex-col gap-5">
                            <Typography
                                variant="h3"
                                className="text-gray-900"
                            >
                                Impact
                            </Typography>

                            <ul className="flex flex-col gap-4">
                                {project.impact.map(
                                    (
                                        item,
                                        index
                                    ) => (
                                        <li
                                            key={index}
                                            className="
                        flex
                        items-start
                        gap-3
                      "
                                        >
                                            <div
                                                className="
                          mt-2
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-gray-400
                        "
                                            />

                                            <Typography className="leading-relaxed">
                                                {item}
                                            </Typography>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}
                </div>
            </main>

            <ProjectGalleryModal
                images={project.screenshots}
                currentIndex={currentImageIndex}
                isOpen={isGalleryOpen}
                onClose={closeGallery}
            />
        </>
    );
};

export default ProjectDetailPage;