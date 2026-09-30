export const PROJECT_SECTIONS = [
    {
        id: 'government-projects',

        title: 'Project Pemerintahan & Sistem Digital',

        description:
            'Aplikasi dan sistem digital yang digunakan dalam pelayanan publik, administrasi pemerintahan, dan pengelolaan data.',

        projects: [
            {
                id: 'sidemang',

                slug: 'sidemang',

                featured: true,

                previewImageIndex: 1,

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

                slug: 'lambidaro',

                featured: false,

                previewImageIndex: 1,

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

                slug: 'halo-palembang',

                featured: true,

                previewImageIndex: 0,

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
            },

            {
                id: 'website-jdih-kota-palembang',

                slug: 'website-jdih-kota-palembang',

                featured: true,

                previewImageIndex: 0,

                title: 'Website JDIH Kota Palembang',

                category: 'Portal Informasi Hukum Pemerintah',

                platform: ['Website'],

                year: '2026',

                shortDescription:
                    'Revamp menyeluruh website resmi JDIH Kota Palembang menjadi portal produk hukum yang modern, responsif, mudah diakses, dan didukung arsitektur web terbaru.',

                fullDescription:
                    'Website JDIH Kota Palembang merupakan website resmi milik Bagian Hukum Sekretariat Daerah Kota Palembang yang menjadi pusat akses produk dan informasi hukum daerah. Dalam periode 24 Juli hingga 24 Agustus 2026, website lama berbasis Next.js 12 dan SCSS direvamp secara menyeluruh menggunakan Next.js 16, React Server Components, dan Tailwind CSS. Pembaruan ini menjadi lompatan besar pada arsitektur, keamanan integrasi data, responsivitas, aksesibilitas, SEO produk hukum, serta pengalaman masyarakat dalam menemukan dokumen hukum. Website resmi versi baru diluncurkan pada Agustus 2026.',

                impact: [
                    'Menghadirkan portal JDIH Kota Palembang yang lebih modern, profesional, responsif, dan mudah diakses di berbagai perangkat',
                    'Mempermudah masyarakat menemukan produk hukum melalui pencarian dan filter yang tersedia langsung pada bagian utama website',
                    'Menyediakan fondasi pengelolaan konten dan produk hukum yang lebih terstruktur melalui integrasi Next.js dan Strapi CMS',
                ],

                role: [
                    'Menjadi full-stack web developer tunggal yang menangani seluruh implementasi Next.js, integrasi API, dan pengelolaan Strapi CMS v4',
                    'Melakukan revamp dan migrasi menyeluruh dari Next.js 12 dan SCSS ke Next.js 16, React Server Components, dan Tailwind CSS',
                    'Memindahkan proses pengambilan dan transformasi data utama dari client-side rendering ke server melalui React Server Components',
                    'Mengimplementasikan desain responsif dari Figma hasil kolaborasi dengan UI/UX designer sekaligus team leader',
                    'Mengembangkan pencarian produk hukum berdasarkan judul, tahun, nomor, kategori, dan subkategori',
                    'Mengelola content type, endpoint, role, permission, serta membuat custom controller Strapi untuk statistik produk hukum',
                    'Membangun sistem slug produk hukum dan melakukan backfill data lama melalui PostgreSQL dengan penanganan slug duplikat berdasarkan nomor dan tahun',
                    'Mengimplementasikan caching dengan revalidation 60 detik agar konten dari CMS tetap efisien dan cepat diperbarui',
                    'Mengintegrasikan fitur aksesibilitas melalui Cocoon A11y untuk membantu berbagai kebutuhan pengguna',
                    'Menggunakan Claude AI, ChatGPT, dan Codex sebagai alat bantu pengembangan, validasi arsitektur, serta migrasi data',
                ],

                features: [
                    'Pencarian produk hukum berdasarkan judul',
                    'Filter tahun, nomor, kategori, dan subkategori',
                    'Statistik produk hukum',
                    'Produk hukum terbaru',
                    'URL produk hukum yang unik dan ramah SEO',
                    'Infografis hukum',
                    'Berita kegiatan dan galeri foto',
                    'Profil dan informasi kelembagaan JDIH',
                    'Pembentukan perundang-undangan',
                    'Monografi hukum dan dokumen hukum langka',
                    'Konsultasi dan bantuan hukum',
                    'Relaas dan panggilan sidang',
                    'Tautan website terkait',
                    'Pemutar lagu daerah Palembang',
                    'Profil aksesibilitas, read aloud, mode visual, dan bantuan navigasi',
                ],

                technologies: [
                    'Next.js 16',
                    'React Server Components',
                    'Tailwind CSS',
                    'Strapi CMS v4',
                    'PostgreSQL',
                    'REST API',
                    'Cocoon A11y',
                    'Figma',
                ],

                achievements: [
                    'Menyelesaikan revamp menyeluruh dan peluncuran website resmi dalam periode pengembangan satu bulan',
                    'Memodernisasi codebase lama menjadi arsitektur web berbasis server yang lebih terstruktur dan sesuai praktik pengembangan terkini',
                    'Memigrasikan data produk hukum lama ke struktur URL unik tanpa kehilangan konten yang telah tersedia',
                ],

                websiteLink:
                    'https://jdih.palembang.go.id',

                screenshots: [
                    '/images/projects/web-jdih-1.png',
                    '/images/projects/web-jdih-2.png',
                    '/images/projects/web-jdih-3.png',
                    '/images/projects/web-jdih-4.png',
                    '/images/projects/web-jdih-5.png',
                ],
            },
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

                slug: 'neo-s2jb-safe',

                featured: true,

                previewImageIndex: 0,

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

                slug: 'sirajamusi',

                featured: false,

                previewImageIndex: 1,

                title: 'SirajaMusi',

                category: 'Internal Performance System',

                platform: ['Android', 'iOS'],

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

                    appStore:
                        'https://apps.apple.com/id/app/sirajamusi/id1629416363',
                },
            },

            {
                id: 'ruang-belajar-pencak-silat',

                slug: 'ruang-belajar-pencak-silat',

                featured: false,

                previewImageIndex: 1,

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

                slug: 'afiksed',

                featured: false,

                previewImageIndex: 1,

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

                slug: 'latihan-sepak-takraw',

                featured: false,

                previewImageIndex: 1,

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

                slug: 'ayo-belajar-badminton',

                featured: false,

                previewImageIndex: 1,

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
