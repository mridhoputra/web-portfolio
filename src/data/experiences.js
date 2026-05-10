import LogoKominfo from '../../public/images/logos/logo-kominfo.png';
import LogoBelajariah from '../../public/images/logos/logo-belajariah.png';
import LogoUnsri from '../../public/images/logos/logo-unsri.png';

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