// experience-details.jsx

import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';

const dateFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  company,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}) => {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        md:p-8
      "
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Logo */}
        <div className="flex shrink-0 items-start justify-start">
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-2xl
              border
              border-gray-100
              bg-gray-50
              p-3
              transition-transform
              duration-300
              group-hover:scale-105
              md:h-24
              md:w-24
            "
          >
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={logoAlt}
              width={80}
              height={80}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Header */}
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-1">
              <Typography
                variant="subtitle"
                className="font-semibold text-gray-900"
              >
                {position}
              </Typography>

              {company && (
                <Typography className="font-medium text-gray-500">
                  {company}
                </Typography>
              )}
            </div>

            <div
              className="
                inline-flex
                w-fit
                rounded-full
                bg-gray-100
                px-4
                py-1.5
              "
            >
              <Typography
                variant="body3"
                className="font-medium text-gray-700"
              >
                {new Intl.DateTimeFormat(
                  'id-ID',
                  dateFormatOptions
                ).format(startDate)}{' '}
                -{' '}
                {currentlyWorkHere
                  ? 'Sekarang'
                  : endDate
                    ? new Intl.DateTimeFormat(
                      'id-ID',
                      dateFormatOptions
                    ).format(endDate)
                    : '-'}
              </Typography>
            </div>
          </div>

          {/* Summary */}
          <ul className="flex flex-col gap-3">
            {summary?.map((sentence, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-400" />

                <Typography className="leading-relaxed">
                  {sentence}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;