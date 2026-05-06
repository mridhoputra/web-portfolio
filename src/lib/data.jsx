import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';

import LogoFlutter from '../../public/images/logos/icon-flutter.svg';
import LogoDart from '../../public/images/logos/icon-dart.svg';
import LogoNextjs from '../../public/images/logos/icon-nextjs.svg';
import LogoTailwindcss from '../../public/images/logos/icon-tailwindcss.svg';
import LogoStrapi from '../../public/images/logos/icon-strapi.svg';
import LogoGit from '../../public/images/logos/icon-git.svg';
import LogoAndroidStudio from '../../public/images/logos/icon-androidstudio.svg';
import LogoNotion from '../../public/images/logos/icon-notion.svg';
import LogoTrello from '../../public/images/logos/icon-trello.svg';
import LogoClaude from '../../public/images/logos/icon-claude.svg';

import LogoUpwork from '../../public/images/logos/logo-upwork.svg';

import ProjectFiskil from '../../public/images/project-fiskil.png';
import ProjectWingie from '../../public/images/project-wingie.png';
import ProjectPepehousing from '../../public/images/project-pepehousing.png';

import AvatarKrisztian from '../../public/images/avatar-krisztian.png';
import AvatarEugen from '../../public/images/avatar-eugen.png';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',

  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',

  TWITTER: 'https://twitter.com/shahsagarm',

  FIGMA: 'https://www.figma.com/@shahsagarm',

  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'Tentang',
    href: '#about',
  },
  {
    label: 'Project',
    href: '#work',
  },
  {
    label: 'Kontak',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    url: 'https://github.com/mridhoputra',
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/mridhoputra/',
  },
];

export const TECHNOLOGIES = [
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
  {
    label: 'Dart',
    logo: LogoDart,
    url: 'https://dart.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Tailwind CSS',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Strapi',
    logo: LogoStrapi,
    url: 'https://strapi.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Android Studio',
    logo: LogoAndroidStudio,
    url: 'https://developer.android.com/studio',
  },
  {
    label: 'Notion',
    logo: LogoNotion,
    url: 'https://www.notion.so/',
  },
  {
    label: 'Trello',
    logo: LogoTrello,
    url: 'https://trello.com/',
  },
  {
    label: 'Claude AI',
    logo: LogoClaude,
    url: 'https://claude.ai/',
  },
];

export const EXPERIENCES = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
];

export const PROJECTS = [
  {
    name: 'Wingie',

    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',

    url: 'https://www.wingie.com',

    previewImage: ProjectWingie,

    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Fiskil',

    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',

    url: 'https://fiskil.com.au',

    previewImage: ProjectFiskil,

    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Pepehousing',

    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',

    url: 'https://pepehousing.com',

    previewImage: ProjectPepehousing,

    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS = [
  {
    personName: 'Krisztian Gyuris',

    personAvatar: AvatarKrisztian,

    title: 'Founder - inboxgenie.io',

    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',

    personAvatar: AvatarEugen,

    title: 'Founder - shosho.design',

    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',

    personAvatar: '/images/avatar-dummy.svg',

    title: 'Freelancer',

    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];