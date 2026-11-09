/* Portfolio narratives derived from the owner's supplied project scope.
   These describe decisions and deliverables, never invented performance results. */
(()=>{
const L=(id,en)=>[id,en];
const cases={
 'project-22':{
  role:L('Strategi layanan · desain · pengembangan berbantuan AI','Service strategy · design · AI-assisted development'),
  status:L('Website dirilis · produk pribadi','Released website · personal product'),
  thesis:L('Satu identitas, beberapa cara berkomunikasi.','One identity, several ways to communicate.'),
  intro:L('Tantangan utamanya adalah menyesuaikan pengalaman layanan konten, solusi digital, SaaS, dan kemitraan tanpa membuat desainindongmas terasa seperti beberapa brand yang terpisah.','The core challenge was adapting content services, digital solutions, SaaS and partnerships without making desainindongmas feel like separate brands.'),
  decisions:[
   [L('Menyesuaikan komunikasi dengan segmen','Adapt communication to the audience'),L('Layanan konten menyasar pengusaha menengah ke bawah; solusi digital menyasar segmen menengah ke atas. Bahasa, tampilan, dan alur disesuaikan dengan karakter kebutuhan masing-masing.','Content services target smaller-business audiences; digital solutions target mid-to-upper-market businesses. Language, visuals and journeys are adapted to their respective needs.')],
   [L('Menjaga sistem identitas bersama','Keep a shared identity system'),L('Halaman layanan, SaaS, dan mitra tetap mengacu pada guideline serta karakter brand yang sama. AI diarahkan melalui prompt untuk membantu menghasilkan variasi di dalam batas identitas tersebut.','Services, SaaS and partner pages follow the same guidelines and brand character. AI is directed through prompts to produce variations within those identity boundaries.')]
  ],
  deliverables:[L('Website utama yang menghubungkan layanan, karya, produk SaaS, dan kemitraan.','A main website connecting services, work, SaaS products and partnerships.'),L('Perencanaan struktur layanan, desain, integrasi, dan deployment dikerjakan sendiri.','Service structure, design, integration and deployment handled independently.')],
  boundary:L('Bukti yang ditampilkan adalah website dan cakupan pengerjaan. Tidak ada klaim peningkatan penjualan atau konversi.','Evidence shown covers the website and work scope. No sales or conversion uplift is claimed.'),
  inspect:L('Saat membuka website, bandingkan komunikasi layanan konten dengan solusi digital, lalu lihat bagaimana keduanya terhubung ke produk dan kemitraan.','On the live website, compare the communication for content services and digital solutions, then explore their connections to products and partnerships.')
 },
 'project-13':{
  role:L('Perencana produk · desainer · AI-assisted builder','Product planner · designer · AI-assisted builder'),
  status:L('Demo tersedia · 75% per Oktober 2026','Demo available · 75% as of October 2026'),
  thesis:L('Dari kebutuhan sekolah menjadi alur produk yang bisa dijelajahi.','From school needs to an explorable product.'),
  intro:L('KabarKelas menghubungkan administrasi, nilai, rapor digital, indikator pendampingan dini, dan dashboard orang tua. Produk ini dibangun sebagai produk pribadi dan masih dalam pengembangan.','KabarKelas connects administration, grades, digital report cards, early support indicators and parent dashboards. It is a personal product still under development.'),
  decisions:[
   [L('Merancang produk sebelum membangun fitur','Plan the product before building features'),L('Pengerjaan dimulai dari kebutuhan, spesifikasi, blueprint, tampilan, dan pricing; dilanjutkan dengan engine, logika, database, integrasi, dan deployment demo melalui AI.','Work begins with requirements, specifications, blueprints, interfaces and pricing, followed by engines, logic, databases, integrations and demo deployment through AI.')],
   [L('Menghubungkan beberapa kebutuhan sekolah','Connect multiple school workflows'),L('Administrasi dan pelaporan ditempatkan dalam satu platform dengan kebutuhan pengelola sekolah, guru, operator, dan orang tua sebagai konteks produk.','Administration and reporting are brought into one platform, with school leaders, teachers, administrators and parents as the product context.')]
  ],
  deliverables:[L('Demo dapat dibuka dan digunakan untuk meninjau tampilan serta alur produk.','The demo can be opened to inspect the interface and product journeys.'),L('Progres yang dilaporkan: 75% per Oktober 2026; target rilis November 2026.','Reported progress: 75% as of October 2026; target release November 2026.')],
  boundary:L('Demo dan target rilis tidak berarti seluruh fitur sudah siap produksi. Belum ada klaim adopsi sekolah atau hasil operasional.','A demo and release target do not establish production readiness for every feature. No school adoption or operational outcomes are claimed.'),
  inspect:L('Buka demo, mulai dari Ringkasan, lalu jelajahi pilihan peran serta menu nilai, rapor, dan pendampingan untuk memahami cakupan produk.','Open the demo, start from the overview, then explore the role options and grades, reports and support menus to understand the product scope.')
 },
 'project-26':{
  role:L('Website & panel admin · brand · manajemen konten','Website & admin panel · brand · content management'),
  status:L('Penugasan berjalan · Oktober 2026–Maret 2027','Ongoing engagement · October 2026–March 2027'),
  thesis:L('Satu fondasi brand untuk website dan komunikasi sehari-hari.','One brand foundation for the website and everyday communication.'),
  intro:L('Mengelola website, panel admin, Instagram, dan Facebook LBH Dakwah & Pendidikan, dari fondasi identitas hingga produksi serta publikasi konten.','Managing the website, admin panel, Instagram and Facebook for LBH Dakwah & Pendidikan, from identity foundations through content production and publishing.'),
  decisions:[
   [L('Menghubungkan strategi dengan produksi','Connect strategy to production'),L('Brand guideline menjadi fondasi untuk pilar dan kalender konten. Pengerjaan berlanjut ke desain, penulisan caption, upload, serta mirroring ke kanal lain.','Brand guidelines form the foundation for content pillars and the calendar, followed by design, captions, uploading and cross-posting to other channels.')],
   [L('Menjaga konsistensi lintas kanal','Keep channels consistent'),L('Pembuatan dan integrasi akun, pengelolaan website serta panel admin, dan pengelolaan Instagram–Facebook menjadi bagian dari satu cakupan kerja.','Account setup and integration, website and admin-panel management, and Instagram–Facebook management are part of one work scope.')]
  ],
  deliverables:[L('Contoh asli: tiga carousel dan satu feed tunggal, berjumlah 18 halaman desain.','Original samples: three carousels and one single feed, comprising 18 design pages.'),L('Tema mencakup hak guru, nilai lembaga, legalitas yayasan, dan pengenalan bantuan hukum.','Topics cover teacher rights, institutional values, foundation legality and legal aid.')],
  boundary:L('Galeri menunjukkan hasil produksi visual. Jumlah halaman bukan ukuran pertumbuhan akun, reach, atau konversi.','The gallery demonstrates visual production. Page count is not a measure of account growth, reach or conversion.'),
  inspect:L('Jelajahi koleksi konten untuk melihat konsistensi cover, halaman isi, dan penutup. Buka website lembaga untuk melihat kanal digital lainnya.','Explore the content collections to compare covers, content pages and closing slides. Open the institution’s website to inspect the other digital channel.')
 }
};
for(const p of portfolioData.projects)if(cases[p.id])p.portfolioEvidence=cases[p.id];
window.opportunityCases=cases;
})();
