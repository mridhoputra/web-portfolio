import Image from 'next/image';

import {
  ArrowRight,
  ExternalLink,
  Smartphone,
} from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

const ProjectDetails = ({
  slug,
  title,
  category,
  platform,
  year,
  shortDescription,
  technologies,
  storeLinks,
  screenshots,
  previewImageIndex,
}) => {
  const previewImage =
    screenshots?.[
    previewImageIndex || 0
    ];

  return (
    <Card
      className="
        overflow-hidden
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* Preview Image */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            overflow-hidden
            border-b
            border-gray-100
            bg-gray-100
            p-8
            lg:border-b-0
            lg:border-r
          "
        >
          {previewImage && (
            <Image
              src={previewImage}
              alt={title}
              width={340}
              height={720}
              className="
                h-auto
                w-[220px]
                rounded-[32px]
                border
                border-gray-200
                bg-white
                object-cover
                shadow-xl
                transition-transform
                duration-500
                hover:scale-[1.02]
                md:w-[280px]
              "
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 p-8 md:p-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <Tag label={category} />

            {platform?.map((item) => (
              <Tag
                key={item}
                label={item}
                className="bg-gray-100"
              />
            ))}

            <Tag
              label={year}
              className="bg-gray-100"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-4">
            <Typography
              variant="h2"
              className="leading-tight text-gray-900"
            >
              {title}
            </Typography>

            <Typography className="leading-relaxed">
              {shortDescription}
            </Typography>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies
              ?.slice(0, 5)
              .map((technology) => (
                <Tag
                  key={technology}
                  label={technology}
                />
              ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/projects/${slug}`}
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
              View Case Study
              <ArrowRight size={18} />
            </Link>

            {storeLinks?.playStore && (
              <Link
                href={
                  storeLinks.playStore
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
                <Smartphone size={18} />
                Play Store
                <ExternalLink
                  size={16}
                />
              </Link>
            )}

            {storeLinks?.appStore && (
              <Link
                href={
                  storeLinks.appStore
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
                <Smartphone size={18} />
                App Store
                <ExternalLink
                  size={16}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;