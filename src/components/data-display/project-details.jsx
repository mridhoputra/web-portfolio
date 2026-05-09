import Image from 'next/image';
import {
  ExternalLink,
  Smartphone,
} from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

const ProjectDetails = ({
  title,
  category,
  platform,
  year,
  shortDescription,
  fullDescription,
  impact,
  role,
  features,
  technologies,
  achievements,
  storeLinks,
  screenshots,
}) => {
  return (
    <Card
      className="
        overflow-hidden
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
      "
    >
      {/* Top Content */}
      <div className="flex flex-col gap-6 p-7 md:p-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          <Tag label={category} />

          {platform?.map((item, index) => (
            <Tag
              key={index}
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

          <Typography className="leading-relaxed">
            {fullDescription}
          </Typography>
        </div>
      </div>

      {/* Screenshots */}
      {screenshots && screenshots.length > 0 && (
        <div
          className="
            border-y
            border-gray-100
            bg-gray-100
            px-5
            py-8
            md:px-8
          "
        >
          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-2
            "
          >
            {screenshots.map((image, index) => (
              <div
                key={index}
                className="
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
                  alt={`${title} screenshot ${index + 1}`}
                  width={260}
                  height={540}
                  className="
                    h-auto
                    w-[220px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.03]
                    md:w-[260px]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Content */}
      <div className="flex flex-col gap-10 p-7 md:p-10">
        {/* Impact */}
        {impact && (
          <div className="flex flex-col gap-4">
            <Typography
              variant="subtitle"
              className="font-semibold text-gray-900"
            >
              Dampak
            </Typography>

            <ul className="flex flex-col gap-3">
              {impact.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-400" />

                  <Typography className="leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Role */}
        {role && (
          <div className="flex flex-col gap-4">
            <Typography
              variant="subtitle"
              className="font-semibold text-gray-900"
            >
              Kontribusi
            </Typography>

            <ul className="flex flex-col gap-3">
              {role.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-400" />

                  <Typography className="leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features */}
        {features && (
          <div className="flex flex-col gap-4">
            <Typography
              variant="subtitle"
              className="font-semibold text-gray-900"
            >
              Fitur Utama
            </Typography>

            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Tag
                  key={index}
                  label={feature}
                  className="bg-gray-100"
                />
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-col gap-4">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            Teknologi
          </Typography>

          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <Tag
                key={index}
                label={technology}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        {achievements && (
          <div className="flex flex-col gap-4">
            <Typography
              variant="subtitle"
              className="font-semibold text-gray-900"
            >
              Pencapaian
            </Typography>

            <ul className="flex flex-col gap-3">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-400" />

                  <Typography className="leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Store Links */}
        {storeLinks && (
          <div className="flex flex-wrap gap-3 pt-2">
            {storeLinks.playStore && (
              <Link
                href={storeLinks.playStore}
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
                Google Play
                <ExternalLink size={16} />
              </Link>
            )}

            {storeLinks.appStore && (
              <Link
                href={storeLinks.appStore}
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
                <ExternalLink size={16} />
              </Link>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectDetails;