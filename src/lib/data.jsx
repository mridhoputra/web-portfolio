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

import LogoKominfo from '../../public/images/logos/logo-kominfo.png';
import LogoBelajariah from '../../public/images/logos/logo-belajariah.png';
import LogoUnsri from '../../public/images/logos/logo-unsri.png';

import ProjectFiskil from '../../public/images/project-fiskil.png';
import ProjectWingie from '../../public/images/project-wingie.png';
import ProjectPepehousing from '../../public/images/project-pepehousing.png';

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
    logo: LogoKominfo,
    logoAlt: 'Kominfo logo',

    position: 'Mobile Developer',

    company: 'Dinas Komunikasi dan Informatika Kota Palembang',

    startDate: new Date(2021, 5),

    currentlyWorkHere: true,

    summary: [
      'Berfokus pada pengembangan dan maintenance aplikasi mobile Android dan iOS menggunakan Flutter.',

      'Melakukan migrasi aplikasi Sidemang dari React Native ke Flutter untuk meningkatkan performa, maintainability, dan user experience.',

      'Menjadi penanggung jawab utama pengembangan aplikasi mobile Sidemang mulai dari pengembangan fitur baru, maintenance, hingga optimisasi aplikasi secara berkelanjutan.',

      'Mengembangkan berbagai fitur layanan administrasi digital, workflow approval, tracking berkas, preview PDF, serta push notification realtime.',

      'Terlibat dalam maintenance website berbasis Next.js dan penanganan berbagai kebutuhan teknis internal.',

      'Menjadi penanggung jawab CMS Strapi untuk berbagai website OPD, kecamatan, dan kelurahan di Kota Palembang.',

      'Memanfaatkan AI tools seperti ChatGPT dan Claude untuk membantu workflow development secara lebih efisien.',
    ],
  },

  {
    logo: LogoBelajariah,
    logoAlt: 'Belajariah logo',

    position: 'Frontend Developer',

    company: 'Belajariah',

    startDate: new Date(2021, 2),

    endDate: new Date(2021, 5),

    summary: [
      'Mengembangkan aplikasi mobile berbasis React Native bersama tim frontend dan backend.',

      'Berpartisipasi dalam proses perilisan aplikasi Belajariah ke Google Play Store.',

      'Berkolaborasi dalam pengembangan fitur serta peningkatan performa aplikasi.',
    ],
  },

  {
    logo: LogoBelajariah,
    logoAlt: 'Belajariah logo',

    position: 'Frontend Developer Intern',

    company: 'Belajariah',

    startDate: new Date(2020, 11),

    endDate: new Date(2021, 2),

    summary: [
      'Mempelajari pengembangan aplikasi mobile menggunakan React Native.',

      'Beradaptasi dengan workflow pengembangan aplikasi modern dan kolaborasi tim.',

      'Berpartisipasi dalam pengembangan fitur aplikasi bersama tim developer.',
    ],
  },

  {
    logo: LogoUnsri,
    logoAlt: 'Unsri logo',

    position: 'Research Assistant',

    company: 'Universitas Sriwijaya',

    startDate: new Date(2019, 6),

    endDate: new Date(2019, 11),

    summary: [
      'Terlibat dalam penelitian berjudul "Performance Analysis of Parallel Processing in Graphics Processing Unit (GPU) Using CUDA".',

      'Mempelajari dasar-dasar CUDA Toolkit dan pemrosesan paralel menggunakan NVIDIA GPU.',

      'Melakukan simulasi dan analisis performa parallel computing untuk kebutuhan penelitian akademik.',

      'Berkontribusi dalam penyusunan laporan dan publikasi penelitian ilmiah.',
    ],
  },

  {
    logo: LogoUnsri,
    logoAlt: 'Unsri logo',

    position: 'Research Assistant',

    company: 'Universitas Sriwijaya',

    startDate: new Date(2019, 6),

    endDate: new Date(2019, 11),

    summary: [
      'Terlibat dalam penelitian berjudul "The Development of Indonesian Sentiment Analysis with Negation Handling".',

      'Membantu pengembangan aplikasi desktop menggunakan Java untuk kebutuhan penelitian.',

      'Mempelajari algoritma sentiment analysis, Negative Handling, dan implementasi Multinomial Naive Bayes.',

      'Berkontribusi dalam penyusunan laporan dan publikasi penelitian ilmiah.',
    ],
  },

  {
    logo: LogoUnsri,
    logoAlt: 'Unsri logo',

    position: 'Laboratory Assistant',

    company: 'Universitas Sriwijaya',

    startDate: new Date(2018, 6),

    endDate: new Date(2019, 11),

    summary: [
      'Membantu kegiatan praktikum dan pendampingan mahasiswa pada mata kuliah pemrograman.',

      'Menjaga kesiapan perangkat laboratorium dan mendukung proses pembelajaran praktikum.',

      'Membantu mahasiswa memahami dasar-dasar pemrograman dan penggunaan tools praktikum.',
    ],
  },
];

export const PROJECT_SECTIONS = [
  {
    id: 'government-projects',

    title: 'Project Pemerintahan & Sistem Digital',

    description:
      'Aplikasi dan sistem digital yang digunakan dalam pelayanan publik, administrasi pemerintahan, dan pengelolaan data.',

    projects: [
      {
        id: 'sidemang',

        title: 'Sidemang',

        category: 'Aplikasi Pelayanan Publik',

        platform: ['Android', 'iOS'],

        year: '2021 - Sekarang',

        shortDescription:
          'Aplikasi layanan administrasi digital Kota Palembang untuk pengajuan surat kelurahan dan kecamatan secara online.',

        fullDescription:
          'Sidemang merupakan aplikasi layanan administrasi digital yang digunakan oleh warga Kota Palembang serta perangkat kelurahan dan kecamatan untuk proses pengajuan, validasi, revisi, hingga penandatanganan elektronik dokumen administrasi.',

        impact: [
          'Membantu digitalisasi pelayanan administrasi di tingkat kelurahan dan kecamatan Kota Palembang',
          'Mempermudah warga mengurus berkas administrasi tanpa harus datang langsung ke kantor',
          'Mendukung proses pelayanan publik yang lebih cepat, transparan, dan terintegrasi',
        ],

        role: [
          'Mengembangkan aplikasi mobile Sidemang secara penuh menggunakan React Native pada fase awal pengembangan',
          'Melakukan migrasi keseluruhan aplikasi mobile dari React Native ke Flutter',
          'Menjadi penanggung jawab utama pengembangan dan maintenance aplikasi mobile Sidemang',
          'Mengembangkan fitur pengajuan, tracking, approval, dan preview dokumen administrasi',
          'Mengimplementasikan push notification menggunakan Firebase FCM',
          'Mengembangkan workflow approval multi-role untuk perangkat kelurahan dan kecamatan',
          'Melakukan pengembangan fitur baru serta optimalisasi aplikasi secara berkelanjutan',
        ],

        features: [
          'Pengajuan surat melalui aplikasi mobile',
          'Upload dokumen dari kamera atau galeri',
          'Tracking progress dan histori berkas',
          'Preview dan download PDF surat',
          'Workflow approval multi-role',
          'Tanda tangan elektronik',
          'Push notification realtime',
        ],

        technologies: [
          'Flutter',
          'React Native',
          'Firebase FCM',
          'REST API',
        ],

        achievements: [
          'Bagian dari inovasi digital Kota Palembang',
          'Mendukung implementasi layanan publik digital',
          'Berkontribusi dalam inovasi peraih IGA Kemendagri 2023 kategori Kota Terinovatif',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.sidemangmobile&pcampaignid=web_share',

          appStore:
            'https://apps.apple.com/id/app/sidemang/id1640007404',
        },

        screenshots: [
          '/images/projects/sidemang-login.jpeg',
          '/images/projects/sidemang-home.png',
          '/images/projects/sidemang-form.png',
          '/images/projects/sidemang-detail.png',
          '/images/projects/sidemang-pdf.png',
        ],
      },

      {
        id: 'lambidaro',

        title: 'Lambidaro',

        subtitle:
          'Layanan Adminduk Berbasis Pendaftaran Online',

        category: 'Aplikasi Pelayanan Publik',

        platform: ['Android', 'iOS'],

        year: '2025 - Sekarang',

        shortDescription:
          'Inovasi layanan administrasi kependudukan dan pencatatan sipil Kota Palembang yang terintegrasi langsung di dalam aplikasi Sidemang.',

        fullDescription:
          'Lambidaro merupakan inovasi kolaborasi antara Dinas Komunikasi dan Informatika Kota Palembang dan Disdukcapil Kota Palembang yang memungkinkan masyarakat mengurus berbagai layanan administrasi kependudukan dan pencatatan sipil secara online langsung melalui aplikasi mobile. Lambidaro terintegrasi di dalam aplikasi Sidemang dan mendukung berbagai layanan seperti KTP-EL, Kartu Keluarga, KIA, pindah datang, akta kelahiran, hingga akta kematian.',

        impact: [
          'Membantu masyarakat Kota Palembang mengurus administrasi kependudukan secara online tanpa harus datang ke kantor',
          'Mendukung digitalisasi layanan administrasi kependudukan dan pencatatan sipil Kota Palembang',
          'Mempermudah proses pengajuan dan tracking dokumen administrasi masyarakat secara realtime',
        ],

        role: [
          'Menjadi mobile developer utama dalam pengembangan fitur Lambidaro di aplikasi Sidemang menggunakan Flutter',
          'Melakukan pengembangan aplikasi secara progresif dan cepat melalui kolaborasi bersama Diskomdigi dan Disdukcapil Kota Palembang',
          'Mengembangkan fitur upload dokumen persyaratan melalui kamera dan galeri',
          'Mengembangkan fitur tanda tangan digital langsung di aplikasi mobile',
          'Mengembangkan fitur tracking dan detail progress permohonan masyarakat',
          'Mengembangkan preview hasil dokumen dalam bentuk PDF',
          'Melakukan maintenance dan pengembangan fitur secara berkelanjutan sesuai kebutuhan pelayanan publik',
        ],

        features: [
          'Pengajuan KTP-EL',
          'Pengajuan Kartu Keluarga',
          'Pengajuan KIA',
          'Pengajuan Pindah Datang',
          'Pengajuan Akta Kelahiran',
          'Pengajuan Akta Kematian',
          'Upload dokumen persyaratan',
          'Digital signature',
          'Tracking progress permohonan',
          'Preview PDF dokumen',
          'Push notification realtime',
        ],

        technologies: [
          'Flutter',
          'Firebase FCM',
          'REST API',
        ],

        screenshots: [
          '/images/projects/lambidaro-onboarding.jpeg',
          '/images/projects/lambidaro-home.jpeg',
          '/images/projects/lambidaro-signature.jpeg',
          '/images/projects/lambidaro-tracking.png',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.sidemangmobile&pcampaignid=web_share',

          appStore:
            'https://apps.apple.com/id/app/sidemang/id1640007404',
        },
      },

      {
        id: 'halo-palembang',

        title: 'Halo Palembang',

        category: 'Portal Layanan Publik',

        platform: ['Android', 'iOS'],

        year: '2026 - Sekarang',

        status: 'Dalam Pengembangan',

        shortDescription:
          'Portal layanan digital Kota Palembang yang menghubungkan berbagai layanan publik, informasi kota, CCTV realtime, WiFi gratis, hingga layanan administrasi dalam satu aplikasi.',

        fullDescription:
          'Halo Palembang merupakan portal layanan digital yang dikembangkan sebagai langkah awal menuju superapp layanan publik Kota Palembang. Aplikasi ini mengintegrasikan berbagai layanan dan informasi kota dalam satu platform mobile, mulai dari CCTV realtime, peta WiFi gratis, harga pangan, kontak darurat, informasi ketersediaan tempat tidur rumah sakit, hingga integrasi layanan administrasi kependudukan melalui Sidemang.',

        impact: [
          'Menjadi fondasi awal pengembangan superapp layanan publik Kota Palembang',
          'Mengintegrasikan berbagai layanan dan informasi kota dalam satu aplikasi mobile',
          'Membantu akses masyarakat terhadap informasi publik secara lebih cepat dan terpusat',
        ],

        role: [
          'Mengembangkan fitur CCTV realtime Kota Palembang beserta live streaming CCTV',
          'Mengembangkan fitur peta CCTV dengan marker dan detail lokasi interaktif',
          'Mengembangkan fitur peta WiFi gratis publik Kota Palembang',
          'Mengembangkan integrasi layanan Sidemang ke dalam ekosistem Halo Palembang',
          'Mengembangkan fitur informasi ketersediaan tempat tidur RSUD Bari',
          'Membangun struktur modular aplikasi untuk pengembangan layanan kota secara berkelanjutan',
          'Berkolaborasi dalam pengembangan aplikasi bersama tim internal Diskomdigi Kota Palembang',
        ],

        features: [
          'Live CCTV realtime Kota Palembang',
          'Peta CCTV interaktif',
          'Peta WiFi gratis publik',
          'Informasi harga pangan',
          'Informasi ketersediaan tempat tidur rumah sakit',
          'Kontak darurat layanan publik',
          'Portal integrasi layanan kota',
        ],

        technologies: [
          'Flutter',
          'Google Maps',
          'REST API',
          'Firebase',
          'Video Streaming',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.hallopalembang&pcampaignid=web_share',

          appStore:
            'https://apps.apple.com/id/app/hallo-palembang/id6745464056',
        },

        screenshots: [
          '/images/projects/halo-home.jpeg',
          '/images/projects/halo-contact.jpeg',
          '/images/projects/halo-market.jpeg',
          '/images/projects/halo-cctv.jpeg',
          '/images/projects/halo-cctv-detail.jpeg',
          '/images/projects/halo-map.jpeg',
          '/images/projects/halo-bed.jpeg',
        ],
      }
    ],
  },

  {
    id: 'freelance-projects',

    title: 'Project Website & Freelance',

    description:
      'Website dan sistem digital yang dikembangkan untuk client maupun kebutuhan bisnis.',

    projects: [
      {
        id: 'neo-s2jb-safe',

        title: 'Neo S2JB SAFE',

        category: 'Enterprise Safety System',

        platform: ['Android'],

        year: '2025',

        shortDescription:
          'Aplikasi enterprise berbasis Flutter untuk mendukung implementasi budaya HSSE (Health, Safety, Security, and Environment) di lingkungan kerja PLN.',

        fullDescription:
          'Neo S2JB SAFE merupakan aplikasi internal berbasis Android yang digunakan untuk mendukung proses inspeksi keselamatan kerja, safety induction, dokumentasi lapangan, serta edukasi HSSE bagi pegawai dan tenaga alih daya. Aplikasi ini dibangun menggunakan arsitektur dinamis berbasis REST API sehingga struktur menu, form, field, dan workflow dapat dikontrol langsung dari backend tanpa perlu update aplikasi.',

        role: [
          'Mengembangkan keseluruhan aplikasi mobile menggunakan Flutter',
          'Mengintegrasikan REST API untuk sistem menu dan workflow dinamis',
          'Mengembangkan dynamic form renderer berbasis konfigurasi backend',
          'Mengimplementasikan multistep form dan wizard workflow',
          'Mengembangkan upload gambar dan video langsung dari kamera perangkat',
          'Mengimplementasikan realtime GPS dan lokasi inspeksi lapangan',
          'Berkolaborasi dengan tim backend dan web dalam pengembangan sistem enterprise',
        ],

        features: [
          'Dynamic menu berbasis REST API',
          'Dynamic multistep form',
          'Dynamic field configuration',
          'Upload gambar dan video',
          'Realtime GPS tracking',
          'Safety inspection workflow',
          'Employee directory',
          'Searchable dropdown field',
          'Form validation dinamis',
          'Safety induction system',
        ],

        technologies: [
          'Flutter',
          'REST API',
          'Geolocator',
          'Camera',
          'Video Upload',
          'Google Maps',
        ],

        screenshots: [
          '/images/projects/safe-home.webp',
          '/images/projects/safe-induction.webp',
          '/images/projects/safe-k3.webp',
          '/images/projects/safe-sp.webp',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.sintechsolution.neos2jbsafe&pcampaignid=web_share',
        },
      },

      {
        id: 'sirajamusi',

        title: 'SirajaMusi',

        category: 'Internal Performance System',

        platform: ['Android'],

        year: '2026',

        shortDescription:
          'Maintenance dan reaktivasi aplikasi internal pelaporan kinerja personel Polda Sumsel.',

        fullDescription:
          'SirajaMusi merupakan aplikasi internal yang digunakan untuk pelaporan dan monitoring kinerja personel di lingkungan Polda Sumsel. Saya terlibat dalam proses reaktivasi aplikasi lama yang sudah outdated agar kembali dapat digunakan pada perangkat Android modern, termasuk perbaikan bug, stabilisasi aplikasi, penyesuaian API, dan perbaikan minor pada tampilan aplikasi.',

        role: [
          'Melakukan maintenance dan bug fixing aplikasi Flutter existing',
          'Melakukan reaktivasi aplikasi agar kembali berjalan di Android modern',
          'Memperbaiki issue compatibility dan integrasi API',
          'Melakukan perbaikan minor pada tampilan aplikasi',
          'Membantu stabilisasi aplikasi untuk kebutuhan operasional internal',
        ],

        features: [
          'Login personel',
          'Pelaporan hard competency',
          'Upload laporan dan lampiran gambar',
          'Riwayat dan detail laporan',
          'Dashboard monitoring',
          'Ranking personel',
        ],

        technologies: [
          'Flutter',
          'REST API',
          'Image Upload',
          'Android',
        ],

        screenshots: [
          '/images/projects/sirajamusi-login.webp',
          '/images/projects/sirajamusi-home.webp',
          '/images/projects/sirajamusi-hc.webp',
          '/images/projects/sirajamusi-hcd.webp',
          '/images/projects/sirajamusi-hccd.webp',
          '/images/projects/sirajamusi-ranking.webp',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.sintechsolution.sirajamusi&hl=id',
        },
      },

      {
        id: 'ruang-belajar-pencak-silat',

        title: 'Ruang Belajar Pencak Silat SMP',

        category: 'Educational Mobile App',

        platform: ['Android'],

        year: '2023',

        shortDescription:
          'Aplikasi pembelajaran pencak silat jenjang SMP berbasis React Native dengan materi interaktif berupa teks dan gambar.',

        fullDescription:
          'Ruang Belajar Pencak Silat SMP merupakan aplikasi pembelajaran sederhana yang ditujukan untuk membantu siswa SMP mempelajari materi dasar pencak silat secara digital. Aplikasi ini berisi materi teori, gambar gerakan, dan panduan pembelajaran yang dapat diakses langsung melalui perangkat Android.',

        role: [
          'Mengembangkan keseluruhan aplikasi mobile secara mandiri menggunakan React Native',
          'Membangun struktur navigasi dan halaman materi pembelajaran',
          'Mengimplementasikan tampilan materi berbasis teks dan gambar',
          'Melakukan optimisasi aplikasi untuk perangkat Android',
          'Melakukan proses build dan publishing ke Google Play Store',
        ],

        features: [
          'Materi pembelajaran pencak silat',
          'Materi teks dan gambar',
          'Navigasi kategori materi',
          'Halaman detail pembelajaran',
          'UI pembelajaran sederhana',
          'Offline learning content',
        ],

        technologies: [
          'React Native',
          'JavaScript',
          'Android',
        ],

        achievements: [
          'Mencapai lebih dari 10 ribu download di Google Play Store',
          'Memiliki rating 4.7 di Google Play Store',
        ],

        screenshots: [
          '/images/projects/bps-welcome.webp',
          '/images/projects/bps-login.webp',
          '/images/projects/bps-home.webp',
          '/images/projects/bps-list.webp',
          '/images/projects/bps-detail.webp',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.belajarpencaksilat&hl=id',
        },
      },

      {
        id: 'afiksed',

        title: 'Afiksed',

        subtitle: 'Aktivitas Fisik Edukatif',

        category: 'Educational Mobile App',

        platform: ['Android'],

        year: '2025',

        shortDescription:
          'Aplikasi pembelajaran PJOK berbasis kearifan lokal dengan materi teks, gambar, video, dan kuis interaktif.',

        fullDescription:
          'AFIKSED merupakan aplikasi pembelajaran pendidikan jasmani berbasis kearifan lokal yang ditujukan untuk siswa SMP. Aplikasi ini menyediakan materi edukatif dalam berbagai format seperti teks, gambar, video pembelajaran, serta kuis interaktif untuk membantu proses belajar menjadi lebih menarik dan mudah dipahami.',

        role: [
          'Mengembangkan keseluruhan aplikasi mobile menggunakan Flutter',
          'Membangun halaman materi, video pembelajaran, dan kuis interaktif',
          'Mengimplementasikan video player pada aplikasi Android',
          'Membangun struktur navigasi dan UI pembelajaran',
          'Mengoptimalkan tampilan aplikasi untuk pengalaman belajar yang nyaman',
        ],

        features: [
          'Materi pembelajaran berbasis teks',
          'Materi gambar edukatif',
          'Video pembelajaran',
          'Kuis interaktif',
          'Navigasi topik pembelajaran',
          'Video player',
          'UI pembelajaran interaktif',
        ],

        technologies: [
          'Flutter',
          'Dart',
          'Video Player',
          'Android',
        ],

        screenshots: [
          '/images/projects/afiksed-loading.webp',
          '/images/projects/afiksed-home.webp',
          '/images/projects/afiksed-video.webp',
          '/images/projects/afiksed-video-detail.webp',
          '/images/projects/afiksed-materi.webp',
          '/images/projects/afiksed-materi-detail.webp',
          '/images/projects/afiksed-kuis.webp',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.penjaskeslokal',
        },
      },

      {
        id: 'latihan-sepak-takraw',

        title: 'Multimedia Interaktif Teknik Dasar Sepak Takraw Tingkat SMP',

        subtitle: 'Latihan Sepak Takraw',

        category: 'Educational Multimedia App',

        platform: ['Desktop', 'Android'],

        year: '2024',

        shortDescription:
          'Aplikasi multimedia interaktif pembelajaran teknik dasar sepak takraw SMP dengan materi teks, gambar, video, dan kuis.',

        fullDescription:
          'Latihan Sepak Takraw merupakan aplikasi multimedia interaktif yang dirancang untuk membantu siswa SMP mempelajari teknik dasar permainan sepak takraw secara lebih menarik dan interaktif. Aplikasi ini menyediakan materi tertulis, gambar teknik gerakan, video latihan, hingga kuis evaluasi pembelajaran dalam satu platform.',

        role: [
          'Mengembangkan keseluruhan aplikasi menggunakan Flutter multiplatform',
          'Mendesain dan membangun tampilan aplikasi khusus desktop',
          'Mengimplementasikan materi pembelajaran berbasis teks, gambar, dan video',
          'Membangun fitur kuis interaktif untuk evaluasi pembelajaran',
          'Mengimplementasikan video player untuk materi latihan teknik dasar',
          'Melakukan adaptasi aplikasi agar dapat dirilis juga pada platform Android',
        ],

        features: [
          'Materi teknik dasar sepak takraw',
          'Materi gambar dan ilustrasi teknik',
          'Video pembelajaran interaktif',
          'Kuis evaluasi pembelajaran',
          'Navigasi sidebar desktop',
          'Video player',
          'UI multimedia interaktif',
          'Offline learning content',
        ],

        technologies: [
          'Flutter',
          'Dart',
          'Video Player',
          'Desktop',
          'Android',
        ],

        achievements: [
          'Mencapai lebih dari 10 ribu download di Google Play Store',
        ],

        screenshots: [
          '/images/projects/st-home.webp',
          '/images/projects/st-profil.webp',
          '/images/projects/st-materi-detail.webp',
          '/images/projects/st-video-detail-1.webp',
          '/images/projects/st-video-detail-2.webp',
          '/images/projects/st-kuis.webp',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.kertaskaca.belajarsepaktakraw&hl=id',
        },
      },

      {
        id: 'ayo-belajar-badminton',

        title: 'Ayo Belajar Badminton',

        category: 'Educational Mobile App',

        platform: ['Android'],

        year: '2023',

        shortDescription:
          'Aplikasi pembelajaran badminton jenjang SD dengan materi teks dan gambar edukatif.',

        fullDescription:
          'Ayo Belajar Badminton merupakan aplikasi pembelajaran sederhana yang ditujukan untuk membantu siswa sekolah dasar memahami dasar-dasar olahraga badminton secara digital. Aplikasi ini menyediakan materi pembelajaran berupa teks, gambar ilustrasi, pengenalan teknik dasar, serta peraturan permainan badminton dalam tampilan mobile yang sederhana dan mudah digunakan.',

        role: [
          'Mengembangkan keseluruhan aplikasi mobile menggunakan Flutter',
          'Membangun tampilan halaman materi pembelajaran badminton',
          'Mengimplementasikan navigasi kategori materi dan halaman detail',
          'Mengelola materi teks dan gambar edukatif pada aplikasi',
          'Melakukan build dan publishing aplikasi ke Google Play Store',
        ],

        features: [
          'Materi dasar badminton',
          'Materi teks edukatif',
          'Gambar ilustrasi pembelajaran',
          'Navigasi kategori materi',
          'Halaman detail materi',
          'UI pembelajaran sederhana',
          'Offline learning content',
        ],

        technologies: [
          'Flutter',
          'Dart',
          'Android',
        ],

        achievements: [
          'Mencapai lebih dari 1 ribu download di Google Play Store',
          'Memiliki rating 4.7 di Google Play Store',
        ],

        screenshots: [
          '/images/projects/bb-welcome.webp',
          '/images/projects/bb-login.webp',
          '/images/projects/bb-home.webp',
          '/images/projects/bb-materi.webp',
          '/images/projects/bb-materi-detail-1.webp',
          '/images/projects/bb-materi-detail-2.webp',
          '/images/projects/bb-materi-detail-3.webp',
        ],

        storeLinks: {
          playStore:
            'https://play.google.com/store/apps/details?id=com.belajarbadminton&hl=id',
        },
      },
    ],
  },
];