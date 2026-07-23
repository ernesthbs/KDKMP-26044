/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ArticleSection {
  title: string;
  paragraphs: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ArticleData {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  sections: ArticleSection[];
}

export const articleData: ArticleData = {
  title: "Keberhasilan Koperasi Desa Merah Putih (KDKMP) Mengangkat Kopi Arabika Garut Menembus Pasar Internasional",
  author: "Nadia Al-Haddad (Manajer Ekspor & Hubungan Internasional KDKMP)",
  date: "21 Juli 2026",
  category: "Economic Empowerment & Global Agribusiness",
  readTime: "8 menit membaca",
  summary: "Kisah inspiratif tentang transformasi sosial-ekonomi di pegunungan Garut, Jawa Barat. Melalui kelembagaan koperasi modern, standarisasi pascapanen berbasis sains, dan diplomasi cita rasa, Koperasi Desa Merah Putih berhasil memerdekakan ratusan petani kecil dari jerat tengkulak dan menempatkan kopi Arabika Garut di barisan depan kedai kopi specialty dunia.",
  sections: [
    {
      title: "1. Fajar Baru di Lereng Cikuray: Latar Belakang Kelahiran KDKMP",
      paragraphs: [
        "Kabupaten Garut, Jawa Barat, sejak masa kolonial Belanda telah dikenal sebagai bagian dari wilayah 'Java Preanger'—sebuah kawasan agraris legendaris yang menghasilkan kopi dengan cita rasa terbaik di dunia. Keberadaan gunung-gunung berapi aktif seperti Cikuray, Papandayan, Guntur, dan Talagabodas memberikan anugerah berupa tanah vulkanik hitam yang kaya akan kandungan unsur hara organik dan mineral mikro. Dikombinasikan dengan iklim mikro pegunungan yang sejuk basah dan ketinggian lahan di atas 1.200 meter di atas permukaan laut (mdpl), wilayah ini adalah surga alami bagi budidaya kopi arabika specialty.",
        "Namun, sejarah keemasan tersebut sempat teredam oleh jeratan rantai pasar yang tidak adil bagi para petani kecil (gurem). Selama puluhan tahun, para petani di Garut menanam kopi secara subsisten tanpa bekal pengetahuan agronomi modern. Mereka memanen kopi secara sembarangan (metode petik asalan hijau-kuning-merah) dan menjual buah kopi basah (cherry) dengan harga sangat murah kepada para pengumpul informal atau tengkulak yang memonopoli daerah tersebut.",
        "Melihat kenyataan pahit ini, pada pertengahan tahun 2020, sekelompok aktivis pertanian, praktisi agronomi, dan pemuda lokal bersepakat untuk mengakhiri lingkaran kemiskinan tersebut. Bertepatan dengan peringatan Hari Kemerdekaan Republik Indonesia yang ke-75, didirikanlah Koperasi Desa Merah Putih (KDKMP). Koperasi ini mengusung misi suci untuk merebut kembali kedaulatan ekonomi petani kopi melalui kelembagaan yang transparan, demokratis, dan profesional."
      ],
      quote: {
        text: "Koperasi kami didirikan atas dasar keyakinan bahwa nasionalisme tidak hanya diucapkan, tetapi harus diwujudkan dalam bentuk kemandirian ekonomi petani di desa-desa terdalam.",
        author: "H. M. Yusuf Kurnia, S.P.",
        role: "Ketua Koperasi Desa Merah Putih"
      }
    },
    {
      title: "2. Menakar Emas Hijau: Potensi Unik Kopi Arabika Garut",
      paragraphs: [
        "Secara sensorik, kopi Arabika Garut memiliki keistimewaan yang sangat dicari oleh para penilai cita rasa (Q-Graders) internasional. Berbeda dengan kopi Sumatera yang cenderung dominan rasa tanah (earthy) dan rempah (spicy), atau kopi Jawa Tengah yang pekat (heavy body), kopi Arabika Garut memancarkan keunikan rasa berupa keasaman buah jeruk (citrus acidity) yang cerah dan sparkling, berpadu dengan keharuman bunga-bungaan (floral aroma) seperti melati dan kopi itu sendiri.",
        "Kekayaan rasa ini berasal dari 'terroir' vulkanik pegunungan Garut. Kandungan sulfur dan tingkat keasaman tanah vulkanik merangsang pembentukan senyawa asam organik kompleks (malic acid, citric acid, phosphoric acid) di dalam buah kopi selama proses pematangan yang lambat di udara dingin pegunungan. Ketika diseduh dengan metode filter (seperti V60), keunikan rasa ini akan menghasilkan cangkir kopi yang sangat bersih (clean cup), manis layaknya madu hutan, dan meninggalkan sensasi rasa cokelat yang lembut di ujung lidah.",
        "KDKMP menyadari bahwa potensi alam yang luar biasa ini tidak akan bermakna tanpa standarisasi kualitas yang konsisten. Oleh karena itu, langkah pertama yang diambil koperasi adalah memetakan varietas kopi yang ditanam anggota. Varietas kuno yang tahan penyakit dan memiliki profil rasa tinggi seperti Sigarar Utang, Kartika, Lini S, dan Andungsari mulai dimurnikan dan dibudidayakan secara teratur."
      ]
    },
    {
      title: "3. Membina dengan Hati: Pendidikan Agronomi dan Pemberdayaan Petani",
      paragraphs: [
        "Soko guru dari keberhasilan KDKMP terletak pada program pendampingan dan pembinaan petani anggota secara terus-menerus. Koperasi mendirikan Sekolah Lapang Agronomi KDKMP, di mana para petani belajar secara gratis mengenai praktik pertanian yang baik (Good Agricultural Practices/GAP). Mereka diajarkan cara membuat pupuk kompos organik memanfaatkan limbah kulit ceri kopi (cascara) dan kotoran ternak, mengendalikan hama pengerek buah kopi (PBKo) dengan perangkap ramah lingkungan, serta teknik pemangkasan pohon pelindung untuk memastikan sinar matahari yang cukup.",
        "Transformasi paling revolusioner terjadi pada kebiasaan panen. KDKMP menerapkan aturan 'Petik Merah 100%'. Anggota koperasi dilarang keras membawa ceri kopi hijau atau cacat ke stasiun pengolahan. Sebagai insentif, koperasi menetapkan harga beli ceri merah berkualitas prima sebesar 30% hingga 50% lebih tinggi dibandingkan harga pasar tengkulak. Kebijakan harga premium ini terbukti menjadi motivasi terkuat bagi petani untuk merawat tanaman mereka dengan penuh kasih sayang.",
        "Tidak hanya itu, KDKMP juga fokus pada pemberdayaan kelompok perempuan tani. Ibu-ibu di pedesaan Garut dilatih untuk mengoperasikan stasiun sortasi meja (hand-sorting). Ketelitian jemari perempuan terbukti sangat efektif dalam memilah biji kopi cacat (defect) sehingga green beans yang dihasilkan memenuhi standar Specialty Grade kelas satu."
      ]
    },
    {
      title: "4. Presisi Sains Pascapanen: Dari Cherry Hingga Specialty Green Beans",
      paragraphs: [
        "Setelah ceri merah dipanen, KDKMP mengolahnya di unit pengolahan pascapanen modern (processing shelter) yang dikelola koperasi. Di sini, sentuhan sains dan teknologi diterapkan. KDKMP menggunakan mesin pengupas kulit buah (pulper) hemat air untuk mengurangi dampak pencemaran lingkungan, dilanjutkan dengan proses fermentasi terkontrol di dalam tangki kedap udara (anaerobic fermentation) untuk menciptakan variasi flavor notes yang unik dan eksotis.",
        "Proses pengeringan tidak lagi dilakukan di pinggir jalan raya yang berdebu, melainkan di dalam 'Solar Dryer Dome'—kubah plastik UV khusus yang melindungi biji kopi dari air hujan, serangan serangga, dan debu, sekaligus mengalirkan sirkulasi udara hangat secara merata. Kadar air biji kopi dijaga secara presisi pada angka 11% hingga 12% menggunakan alat ukur kadar air digital sebelum dimasukkan ke dalam ruang penyimpanan (resting room).",
        "Gudang penyimpanan milik KDKMP dirancang khusus dengan dinding berinsulasi dan pendingin udara otomatis untuk menjaga kelembapan relatif (RH) di bawah 60% dan suhu di bawah 20°C. Hal ini sangat krusial untuk mencegah penurunan kualitas mutu dan menjaga agar biji kopi hijau tetap segar selama berbulan-bulan hingga tiba di tangan pembeli asing."
      ],
      quote: {
        text: "Kopi adalah komoditas yang hidup. Setetes air atau perubahan suhu sekecil apa pun di dalam gudang penyimpanan dapat merusak hasil kerja keras petani selama sembilan bulan di kebun. Presisi adalah harga mati.",
        author: "Danang Wijaya, Q-Grader",
        role: "Manajer Kendali Mutu (Quality Control) KDKMP"
      }
    },
    {
      title: "5. Strategi Branding Internasional: Mengemas Narasi di Setiap Butir Kopi",
      paragraphs: [
        "Dalam dunia perdagangan kopi internasional, kualitas rasa saja tidak cukup. Kopi premium membutuhkan narasi yang kuat untuk memikat hati para pencinta kopi global yang bersedia membayar harga tinggi. KDKMP merancang strategi branding komprehensif bertajuk 'The Golden Terroir of Priangan Highlands'. Kami tidak hanya menjual biji kopi, melainkan menjual kisah perjuangan sosial para petani kecil, keindahan alam vulkanik Garut, serta keanekaragaman hayati agroforestri Jawa Barat.",
        "Branding visual kami tampil berani dan elegan: menggunakan kemasan berdiri (standing pouch) premium berwarna hitam doff yang memancarkan kemewahan, dipercantik dengan aksen logo foil emas, serta kombinasi warna Merah Putih sebagai simbol kebanggaan nasional. Kemasan ini tidak hanya menarik secara estetika, tetapi juga fungsional dengan katup degassing satu arah (one-way valve) dan ritsleting kedap udara.",
        "Di sisi digital, KDKMP membangun situs web multibahasa yang interaktif, dilengkapi dokumentasi video sinematik berkualitas 8K tentang proses produksi dari hulu ke hilir. Setiap produk ritel KDKMP dibekali QR Code interaktif. Ketika dipindai oleh pembeli di Tokyo atau Hamburg, mereka dapat melihat peta satelit lokasi perkebunan kopi, membaca profil singkat petani yang memanen kopi tersebut, melihat catatan cupping test resmi, serta mendengarkan rekaman suara ucapan terima kasih dari sang petani."
      ]
    },
    {
      title: "6. Menembus Batas: Ekspansi Pemasaran Digital dan Kemitraan Ekspor",
      paragraphs: [
        "Ekspansi pasar KDKMP digerakkan oleh kombinasi pemasaran digital (digital marketing) yang agresif dan keikutsertaan aktif dalam jaringan perdagangan fisik internasional. Di ranah domestik, kami memanfaatkan marketplace nasional terkemuka serta meluncurkan program kemitraan maklon dan penyediaan pasokan bahan baku (B2B supply chain) untuk ratusan kafe independen di seluruh Indonesia.",
        "Untuk pasar ekspor, KDKMP memanfaatkan platform e-commerce lintas batas (cross-border e-commerce) khusus komoditas seperti Alibaba, Indotrading, serta direktori ekspor Kementerian Perdagangan RI. Melalui optimalisasi mesin pencari (SEO) internasional, KDKMP berhasil menjaring pembeli-pembeli grosir berskala besar dari berbagai negara.",
        "Namun, puncak lompatan ekspor KDKMP terjadi melalui partisipasi aktif dalam pameran dagang internasional. Koperasi secara konsisten hadir di stan paviliun Indonesia pada ajang Specialty Coffee Expo di Amerika Serikat, World of Coffee di Eropa, serta Specialty Coffee Association of Japan (SCAJ) di Tokyo. Di forum-forum inilah, sampel kopi Arabika Garut KDKMP dicicipi langsung oleh para pemanggang kopi (roasters) dunia, menghasilkan kesepakatan kontrak pembelian (purchase contract) jangka panjang yang menyejahterakan."
      ]
    },
    {
      title: "7. Paspor Global: Pentingnya Sertifikasi Mutu Internasional",
      paragraphs: [
        "Menembus pasar ekspor berarti harus siap menghadapi standar keamanan pangan dan persyaratan kualitas yang sangat ketat dari negara tujuan. KDKMP menginvestasikan waktu dan sumber daya yang signifikan untuk mendapatkan berbagai sertifikasi mutu internasional yang bertindak sebagai 'paspor' produk kami di pelabuhan-pelabuhan dunia.",
        "KDKMP telah resmi memperoleh Sertifikasi Indikasi Geografis (IG) Java Preanger dari Kementerian Hukum dan HAM RI sebagai jaminan keaslian origin produk. Di tingkat keamanan pangan, kami mengantongi Sertifikasi Halal BPJPH, Izin Edar P-IRT, dan sedang menyelesaikan proses audit Hazard Analysis Critical Control Point (HACCP) untuk pasar Amerika Serikat.",
        "Selain itu, guna memenuhi tuntutan konsumen global yang semakin peduli terhadap isu-isu sosial dan lingkungan, KDKMP saat ini sedang berada dalam tahap akhir penilaian untuk mendapatkan sertifikasi internasional bergengsi, yaitu Fair Trade dan Rainforest Alliance. Sertifikasi ini menjamin bahwa seluruh operasional KDKMP bebas dari eksploitasi tenaga kerja anak, memberikan harga yang adil bagi petani, serta aktif melakukan konservasi satwa liar dan hutan di sekitar pegunungan Garut."
      ]
    },
    {
      title: "8. Dampak Ekonomi Nyata: Senyum yang Kembali di Pegunungan Garut",
      paragraphs: [
        "Keberhasilan KDKMP menembus pasar ekspor memberikan dampak ekonomi yang luar biasa dan langsung dirasakan oleh masyarakat desa di Garut. Sebelum koperasi berdiri, pendapatan rata-rata petani kopi di Cikajang hanya berkisar antara Rp 1,5 juta hingga Rp 2 juta per bulan, sangat rentan terhadap fluktuasi harga cherry yang dipermainkan tengkulak.",
        "Kini, melalui jaminan harga beli premium dari koperasi dan pembagian sisa hasil usaha (SHU) tahunan yang adil, pendapatan rata-rata petani anggota melonjak drastis hingga mencapai Rp 4,5 juta hingga Rp 6 juta per bulan. Peningkatan kesejahteraan ini tercermin secara visual di desa-desa binaan KDKMP: rumah-rumah petani yang kini kokoh beratap genteng, anak-anak petani yang dapat melanjutkan pendidikan hingga ke jenjang perguruan tinggi, serta tumbuhnya usaha mikro baru di pedesaan.",
        "Kisah sukses Pak Cecep, salah satu anggota awal KDKMP dari lereng Gunung Cikuray, menjadi inspirasi bagi ratusan petani lainnya. Dulu, Pak Cecep hampir menebang seluruh pohon kopinya untuk digantikan dengan tanaman sayuran musiman karena frustrasi dengan harga jual kopi yang anjlok. Setelah bergabung dengan KDKMP dan menerapkan metode petik merah, lahan kopi seluas 1,5 hektar miliknya kini mampu memproduksi green beans specialty yang diekspor langsung ke Hamburg, Jerman. Pak Cecep kini tidak hanya mampu merenovasi rumahnya, tetapi juga didapuk menjadi mentor agronomi bagi para pemuda tani di desanya."
      ],
      quote: {
        text: "Dulu, kami menanam kopi dengan rasa takut—takut tidak laku, takut dipermainkan tengkulak. Sekarang bersama koperasi, kami menanam kopi dengan rasa bangga, karena kami tahu kopi yang kami petik akan dinikmati oleh orang-orang di luar negeri.",
        author: "Pak Cecep",
        role: "Petani Anggota KDKMP dari Cikajang, Garut"
      }
    },
    {
      title: "9. Visi Masa Depan: KDKMP Sebagai Eksportir Kopi Dunia yang Berdaulat",
      paragraphs: [
        "Perjalanan Koperasi Desa Merah Putih masih panjang. Keberhasilan menembus pasar ekspor di beberapa negara di Asia dan Eropa baru merupakan langkah awal dari sebuah cetak biru jangka panjang menuju kedaulatan kopi Indonesia.",
        "Visi kami ke depan adalah mengoperasikan stasiun pengolahan kopi bertenaga surya penuh (solar-powered green processing station) untuk menekan emisi karbon hingga titik terendah. KDKMP juga sedang merintis kerja sama dengan universitas riset pertanian nasional untuk mengembangkan klon varietas Arabika baru yang lebih tahan terhadap perubahan iklim ekstrem.",
        "Dengan komitmen yang tak tergoyahkan pada kualitas, keadilan sosial bagi petani kecil, serta pelestarian lingkungan, KDKMP bertekad untuk terus melangkah maju. Kami ingin membuktikan kepada dunia bahwa koperasi dari desa pedalaman Indonesia mampu mengelola bisnis agribisnis skala global secara profesional, modern, dan bermartabat tanpa melupakan akar jati diri bangsa yang berlandaskan gotong royong."
      ]
    },
    {
      title: "10. Kesimpulan",
      paragraphs: [
        "Koperasi Desa Merah Putih (KDKMP) telah membuktikan bahwa kemiskinan di pedesaan agraris bukanlah takdir yang tidak bisa diubah. Dengan mengorganisasikan kekuatan kolektif para petani gurem, mengadopsi standar kualitas mutu specialty, menerapkan strategi branding berbasis narasi terroir, serta memanfaatkan saluran pemasaran digital global, emas hijau dari pegunungan Garut kini telah berkilau di pasar dunia.",
        "KDKMP bukan sekadar eksportir biji kopi; kami adalah representasi dari kebangkitan koperasi Indonesia yang modern, mandiri, dan berdaulat. Setiap cangkir kopi Arabika Garut KDKMP yang diseduh di berbagai belahan dunia adalah bukti nyata bahwa keadilan sosial dan keunggulan rasa dapat berjalan beriringan mengharumkan nama bangsa di panggung internasional."
      ]
    }
  ]
};
