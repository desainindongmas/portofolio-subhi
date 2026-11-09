/* Bilingual presentation layer. Original text is retained per node so switching is lossless;
   dynamic galleries, dialogs and settings are translated when their DOM content changes. */
(() => {
 const pairs=[
 ['Pilih bahasa','Choose language'],['Bahasa Indonesia','Bahasa Indonesia'],
 ['ARSIP KREATIF','CREATIVE ARCHIVE'],['PORTOFOLIO KREATIF','THE CREATIVE PORTFOLIO OF:'],
 ['Desain Web','Web Design'],['Pengembangan Aplikasi','App Development'],['Manajemen Konten Media Sosial','Social Media Content Management'],['Spesialis AI','AI Specialist'],
 ['Profil','Profile'],['Portofolio','Portfolio'],['Keahlian & Kemampuan','Skills & Abilities'],['Tentang & Kontak','About & Contact'],
 ['Karakter Utama','Main Character'],['KARAKTER UTAMA','MAIN CHARACTER'],['Galeri Karya','Achievement Gallery'],
 ['TEKAN','PRESS'],['UNTUK MULAI','TO START'],['atau ketuk untuk mulai','or tap to start'],
 ['DESAIN · BANGUN · BERKARYA','DESIGN · BUILD · CREATE'],['PERJALANAN BARU DIMULAI','A NEW JOURNEY BEGINS'],['PILIH BAB SELANJUTNYA','SELECT YOUR NEXT CHAPTER'],
 ['↑ ↓ PILIH · ENTER BUKA','↑ ↓ SELECT · ENTER OPEN'],['← KEMBALI KE MENU','← BACK TO MENU'],
 ['Musik mati','Sound off'],['Musik aktif','Sound on'],['Audio tidak tersedia','Audio unavailable'],['Mode gelap','Dark mode'],['Mode terang','Light mode'],
 ['Aktifkan musik','Enable music'],['Matikan musik','Mute music'],['Aktifkan mode gelap','Enable dark mode'],['Aktifkan mode terang','Enable light mode'],
 ['Menu utama','Main menu'],['Semua karya','All work'],['Website','Website'],['Web App','Web App'],['Konten Medsos','Social Content'],
 ['Filter jenis karya','Filter work type'],['PILIH BRAND · LIHAT KARYANYA','CHOOSE A BRAND · EXPLORE THE WORK'],
 ['Brand sebelumnya','Previous brand'],['Brand berikutnya','Next brand'],['Pilih brand','Choose a brand'],
 ['Geser atau pilih emblem. Karya langsung berganti di panggung.','Swipe or choose an emblem to switch the work on stage.'],
 ['Pilih emblem. Karya langsung tampil di panggung.','Choose an emblem to show its work on stage.'],
 ['Belum ada proyek pada kategori ini.','No projects in this category yet.'],
 ['LOGO PROYEK · SCREENSHOT MENYUSUL','PROJECT LOGO · SCREENSHOTS COMING SOON'],['Ponsel','Mobile'],
 ['Kontribusi saya','My contribution'],['Jenis karya','Work type'],['Produk pribadi','Personal product'],
 ['Website Bisnis · Survey Interaktif','Business Website · Interactive Survey'],
 ['Membantu calon nasabah memahami pilihan perlindungan dan menyampaikan kebutuhannya sebelum berkonsultasi.','Helping prospective clients understand their coverage options and share their needs before a consultation.'],
 ['Merancang website dengan katalog produk dan survey interaktif yang mengarahkan pengunjung ke rekomendasi sesuai jawaban mereka.','Designing a website with a product catalog and an interactive survey that guides visitors to recommendations based on their answers.'],
 ['Screenshot karya belum ditambahkan.','Project screenshots have not been added yet.'],['Buka website asli ↗','Visit live website ↗'],
 ['Detail kontribusi menyusul.','Contribution details coming soon.'],
 ['Data percobaan dari pemilik portofolio. Screenshot karya akan ditambahkan bertahap.','Sample data supplied by the portfolio owner. Project screenshots will be added gradually.'],
 ['Pilih brand untuk melihat karya. Buka situs asli untuk mencoba proyek.','Choose a brand to explore its work. Visit the live website to try the project.'],
 ['DATA PERCOBAAN · AKAN DILENGKAPI','SAMPLE DATA · MORE TO COME'],
 ['DESAIN · KEMBANGKAN · BERKARYA','DESIGN · DEVELOP · CREATE'],['SIAP BERKOLABORASI','READY TO COLLABORATE'],
 ['Terbuka untuk kolaborasi','Open to collaboration'],['Teknolog Kreatif','Creative Technologist'],
 ['Ringkasan','Overview'],['Pengalaman','Experience'],['Pendidikan','Education'],['Informasi profil','Profile information'],
 ['Halo, saya','Hello, I’m'],[', seorang',', a'],
 ['. Saya membantu bisnis dan individu mewujudkan ide melalui website, aplikasi, desain, dan konten pemasaran. Saya memulai dengan memahami kebutuhan Anda, lalu memadukan kreativitas dan teknologi untuk menghasilkan karya yang tepat guna, kuat secara visual, dan dikerjakan dengan penuh tanggung jawab.',
  '. I help businesses and individuals bring ideas to life through websites, applications, design, and marketing content. I start by understanding your needs, then combine creativity and technology to deliver purposeful, visually strong work with care and accountability.'],
 ['LOKASI','BASE'],['BAHASA','LANGUAGES'],['TERBUKA UNTUK','AVAILABLE FOR'],['Indonesia, Inggris','Indonesian, English'],
 ['Freelance, Kolaborasi Proyek, Fulltime WFA','Freelance, Collaborative-Project, Fulltime WFA'],
 ['Jelajahi tools dan kemampuan saya','Explore my tools and capabilities'],['Lihat Portfolio','View Portfolio'],['Lihat Portfolio →','View Portfolio →'],
 ['Unduh CV','Download CV'],['Unduh CV ↓','Download CV ↓'],['Hubungi Saya','Contact Me'],['Hubungi Saya ↗','Contact Me ↗'],
 ['Folder Drive berisi CV PDF & portfolio PDF.','The Drive folder contains my CV and portfolio PDFs.'],
 ['Folder Drive untuk CV PDF & portfolio PDF belum ditambahkan.','The Drive folder for my CV and portfolio PDFs has not been added yet.'],
 ['Pengalaman berkarya','Work experience'],['Pengalaman berkarya.','Work experience.'],
 ['Riwayat pengalaman kerja akan dilengkapi. Jelajahi Portfolio untuk melihat karya yang sudah ditampilkan.','My work history will be added soon. Explore the Portfolio to see the projects already on display.'],
 ['Riwayat pengalaman kerja belum diisi. Bagian ini akan dilengkapi bertahap.','My work history has not been added yet. This section will be completed gradually.'],
 ['Lihat proyek percobaan →','Explore sample projects →'],['Data pendidikan belum ditambahkan.','Education details have not been added yet.'],
 ['Pendidikan formal','Formal education'],['Perbankan Syariah','Islamic Banking'],['Selesai September 2018','Completed September 2018'],
 ['DI BALIK KARAKTER','BEHIND THE CHARACTER'],['Kenalan dulu.','Let’s get acquainted.'],['Lalu, mulai sesuatu.','Then, create something.'],
 ['Saya mengelola','I run'],[', studio kreatif dan teknologi. Portofolio ini menampilkan karya dan kontribusi saya secara pribadi.',', a creative and technology studio. This portfolio showcases my work and personal contributions.'],
 ['Lihat Profile ←','View Profile ←'],['MARI TERHUBUNG','LET’S CONNECT'],['Pilih tempat untuk menyapa.','Choose how to say hello.'],
 ['Mulai percakapan','Start a conversation'],['Karya & cerita sehari-hari','Work and everyday stories'],['Ide & percakapan','Ideas and conversations'],
 ['Email profesional','Professional email'],['Terhubung secara profesional','Connect professionally'],['Website Studio','Studio Website'],
 ['Tautan belum ditambahkan','Link not added yet'],['Terbuka untuk freelance, kolaborasi proyek, dan kesempatan kerja.','Open to freelance work, project collaborations, and employment opportunities.'],
 ['PERANGKAT KREATIF','THE CREATIVE TOOLKIT'],['Jelajahi pohon keahlian saya.','Explore my skill tree.'],
 ['Pilih logo untuk melihat kemampuan dan cara saya menggunakannya.','Choose a logo to explore a tool and how I use it.'],
 ['CONTOH / PRATINJAU','PLACEHOLDER / PREVIEW'],['KEAHLIAN PRIBADI','PERSONAL SKILLSET'],
 ['Seluruh tools, rating bintang, dan deskripsi pada pohon ini adalah contoh tampilan. Belum menunjukkan kemampuan Muhammad Subhi.','All tools, star ratings, and descriptions in this tree are display examples. They do not yet represent Muhammad Subhi’s skills.'],
 ['Rating berdasarkan penilaian pribadi, bukan sertifikasi.','Ratings are self-assessed, not certifications.'],
 ['PILIH CABANG · JELAJAHI TOOL','CHOOSE A BRANCH · EXPLORE A TOOL'],['Desain','Design'],['Editing Video','Video Editing'],
 ['PRATINJAU','PREVIEW'],['PRATINJAU ↗','PREVIEW ↗'],['LIHAT KEAHLIAN ↗','VIEW SKILL ↗'],['LIHAT KEAHLIAN','VIEW SKILL'],['◎ Kategori → tools → detail kemampuan','◎ Categories → tools → skill details'],
 ['Ketuk / klik tool untuk melihat detail','Tap / click a tool to inspect'],['Pengalaman, pendidikan & ringkasan keahlian','Experience, education & skills overview'],
 ['Tutup detail skill','Close skill details'],['CONTOH','PLACEHOLDER'],['DETAIL KEAHLIAN','SKILL DETAIL'],
 ['RATING CONTOH','SAMPLE RATING'],['PENILAIAN PRIBADI','SELF-ASSESSMENT'],['RATING BELUM DIISI','RATING NOT ADDED'],
 ['Penjelasan skill akan dilengkapi.','Skill descriptions will be added soon.'],
 ['Contoh tampilan. Tools, rating, dan deskripsi akan mengikuti data yang kamu isi di template interaktif.','Display example. Tools, ratings, and descriptions will reflect the data entered in the interactive template.'],
 ['Penguasaan dinilai secara pribadi. Lihat karya terkait untuk memahami penerapannya.','Skills are self-assessed. Explore related work to see how they are applied.'],
 ['Kembali ke skill tree ←','Back to skill tree ←'],
 ['Contoh: brainstorming, menyusun spesifikasi, dan membantu pengembangan aplikasi.','Example: brainstorming, writing specifications, and assisting with application development.'],
 ['Contoh: mengembangkan ide, menyusun konten, serta mengeksplorasi solusi digital.','Example: developing ideas, creating content, and exploring digital solutions.'],
 ['Contoh: eksplorasi ide dan pembuatan materi visual sesuai brief.','Example: exploring ideas and creating visuals that follow a brief.'],
 ['Contoh: menyusun desain media sosial, presentasi, serta materi komunikasi brand.','Example: designing social content, presentations, and brand communications.'],
 ['Contoh: mengolah foto, membuat komposisi, dan merapikan aset visual.','Example: editing photos, creating compositions, and refining visual assets.'],
 ['Contoh: koreksi warna, pencahayaan, dan konsistensi tone foto.','Example: correcting color and lighting, and maintaining consistent photo tones.'],
 ['Contoh: menyunting video pendek, subtitle, transisi, dan penyesuaian audio.','Example: editing short videos, subtitles, transitions, and audio.'],
 ['Contoh: menyusun video, mengatur ritme cerita, serta menyelaraskan gambar dan suara.','Example: editing video sequences, shaping story pacing, and synchronizing visuals and sound.'],
 ['BAB 01 / PENGALAMAN','CHAPTER 01 / EXPERIENCE'],['KEMAMPUAN / PENGETAHUAN','CAPABILITIES / KNOWLEDGE'],['Keahlian & pendidikan.','Skills & education.'],['ARSIP PENDIDIKAN','EDUCATION ARCHIVE'],
 ['Mahir','Advanced'],['Mandiri','Independent'],['Tutup gambar','Close image'],
 ['Muhammad Subhi menyambut Anda','Muhammad Subhi welcomes you'],
 ['Muhammad Subhi dengan polo sage, tersenyum hangat dan gestur tangan terbuka','Muhammad Subhi in a sage polo, smiling warmly with an open-handed gesture'],
 ['Muhammad Subhi dengan overshirt navy, membawa laptop dan tersenyum menyambut Anda','Muhammad Subhi in a navy overshirt, holding a laptop and smiling warmly']
 ];
 const projectPairs=[
 ['Muhammad Subhi — Menu utama','Muhammad Subhi — Main menu'],
 ['Geser untuk memilih · koleksi berputar tanpa ujung.','Swipe to choose · the collection loops endlessly.'],['Solusi yang dibangun','The solution'],['Fitur utama','Key capabilities'],['Perbesar tampilan','Enlarge preview'],['Diskusikan proyek serupa','Discuss a similar project'],
 ['Menangani perencanaan, desain, dan pengembangan; deployment mengikuti kesiapan produk.','Responsible for planning, design, and development; deployment will follow product readiness.'],
 ['Aplikasi internal klien. Ringkasan tersedia tanpa data operasional.','Internal client application. Overview only, without operational data.'],
 ['Proyek klien','Client project'],['Dirilis','Released'],['Demo tersedia','Demo available'],['Dalam pengembangan','In development'],['Aplikasi internal klien','Internal client application'],
 ['Menangani seluruh proses: perencanaan, desain, pengembangan, pengujian, dan deployment.','Responsible for the complete process: planning, design, development, testing, and deployment.'],
 ['Pilih proyek untuk melihat ringkasan, kontribusi, dan tools.','Choose a project to explore its overview, contribution, and tools.'],['Pilih proyek untuk melihat karya dan kontribusi saya.','Choose a project to explore my work and contribution.'],
 ['Detail pekerjaan kreatif akan ditambahkan bertahap.','Creative work details will be added gradually.'],['TAHUN','YEAR'],['Belum dilengkapi','Not yet provided'],
 ['PROYEK INTERNAL · RINGKASAN PUBLIK','INTERNAL PROJECT · PUBLIC OVERVIEW'],['PRATINJAU PROYEK','PROJECT PREVIEW'],['RINGKASAN PRODUK','PRODUCT OVERVIEW'],
 ['Visual proyek akan ditambahkan.','Project visuals will be added.'],['Data, tampilan internal, dan tautan aplikasi tidak dipublikasikan.','Operational data, internal screens, and application links are not published.'],
 ['Produk sedang dibangun; akses publik menyusul.','The product is being built; public access will follow.'],['Coba demo ↗','Try demo ↗'],
 ['Ringkasan publik disetujui pemilik proyek. Data operasional tidak ditampilkan.','A public project overview. Operational data is not displayed.'],
 ['Seluruh proses dikerjakan oleh Muhammad Subhi, dari perencanaan hingga deployment.','Muhammad Subhi handled the full process, from planning through deployment.'],['KARYA & PRODUK DIGITAL','WORK & DIGITAL PRODUCTS'],['Produk SaaS','SaaS Products']
 ];
 for(const p of portfolioData.projects){for(const key of ['title','need','solution','contribution'])if(p.en?.[key])projectPairs.push([p[key],p.en[key]]);(p.features||[]).forEach((f,i)=>{if(p.en?.features?.[i])projectPairs.push([f,p.en.features[i]])});projectPairs.push(['Pratinjau proyek '+p.brand,'Project preview: '+p.brand],['Perbesar pratinjau '+p.brand,'Enlarge preview: '+p.brand])}
 for(const p of portfolioData.projects){if(p.caseStudy)for(const key of ['audience','challenge','approach','outcome','period'])if(p.caseStudy.en?.[key])pairs.push([p.caseStudy[key],p.caseStudy.en[key]])}
 pairs.push(['Studi kasus','Case study'],['Target pengguna','Audience'],['Tantangan','Challenge'],['Pendekatan','Approach'],['Hasil & status','Deliverables & status'],['Periode penugasan','Engagement period'],['75% per Oktober 2026 · Demo siap dipakai · Target rilis November 2026','75% as of October 2026 · Demo ready to use · Target release November 2026']);
 for(const c of [...(portfolioData.certifications||[]),...(portfolioData.additionalTraining||[])]){pairs.push([c.title,c.enTitle]);if(c.focus)pairs.push([c.focus,c.enFocus]);}
 pairs.push(['Pendidikan & Pelatihan','Education & Training']);
 pairs.push(...projectPairs,
 ['Sekarang','Present'],['November 2024','November 2024'],['April 2015','April 2015'],
 ['Founder / Pengelola','Founder / Operator'],['Tenaga Pengajar','Tutor'],
 ['Menangani desain website, pengembangan aplikasi berbantuan AI, dan manajemen konten media sosial dari perencanaan hingga publikasi.','Responsible for website design, AI-assisted application development, and social media content management, from planning through publication.']);
 pairs.push(
 ['Web Designer · App Builder · Social Media Content Manager · AI Specialist','Web Designer · App Builder · Social Media Content Manager · AI Specialist'],
 ['Saya membantu bisnis dan lembaga membangun kehadiran digital yang utuh: website, aplikasi internal, identitas brand, dan konten media sosial. Saya menangani proses dari memahami kebutuhan hingga publikasi, dengan kreativitas, strategi, dan pengembangan berbantuan AI.','I help businesses and institutions build a complete digital presence: websites, internal applications, brand identity, and social media content. I handle the process from understanding needs to publication, combining creativity, strategy, and AI-assisted development.'],
 ['Langsung ke konten','Skip to content'],['Tidak ada proyek yang cocok. Coba kata kunci lain.','No matching projects. Try another keyword.'],
 ['desainindongmas','desainindongmas']);
 pairs.push(['CV ringkas · pengalaman, kemampuan, dan karya pilihan.','Concise CV · experience, capabilities and selected work.'],['Freelance, kontrak proyek, kolaborasi, dan peluang full-time remote','Freelance, project contracts, collaboration and full-time remote opportunities']);
 const entries=new Map();
 for(const [id,en] of pairs){const pair={id,en};entries.set(id,pair);entries.set(en,pair)}
 const normalize=s=>s.trim().replace(/\s+/g,' ');
 const index=new Map([...entries].map(([key,pair])=>[normalize(key),pair]));
 let language='id';try{language=localStorage.getItem('subhi-language')==='en'?'en':'id'}catch{}
 const textState=new WeakMap(),attributeState=new WeakMap();
 function translate(value){
  const key=normalize(value),pair=index.get(key);if(pair)return value.replace(value.trim(),pair[language]);
  let m;
  if((m=key.match(/^(\d+) (?:proyek|projects?)$/)))return m[1]+(language==='id'?' proyek':Number(m[1])===1?' project':' projects');
  if((m=key.match(/^(\d+) (?:TOOLS|ALAT)$/)))return m[1]+(language==='id'?' ALAT':' TOOLS');
  if((m=key.match(/^(\d+) \/ 5 · (?:RATING CONTOH|SAMPLE RATING|PENILAIAN PRIBADI|SELF-ASSESSMENT)$/)))return m[1]+' / 5 · '+(key.includes('CONTOH')||key.includes('SAMPLE')?(language==='id'?'RATING CONTOH':'SAMPLE RATING'):(language==='id'?'PENILAIAN PRIBADI':'SELF-ASSESSMENT'));
  if((m=key.match(/^(Mahir|Mandiri|Advanced|Independent) · (?:penilaian pribadi|self-assessed)$/)))return (index.get(m[1])?.[language]||m[1])+' · '+(language==='id'?'penilaian pribadi':'self-assessed');
  if((m=key.match(/^(\d{2}) \/ (Web Design|Progressive Web App|Social Media Content Design|Desain Web|Aplikasi Web Progresif|Desain Konten Media Sosial)$/))){const names={'Web Design':['Desain Web','Web Design'],'Progressive Web App':['Aplikasi Web Progresif','Progressive Web App'],'Social Media Content Design':['Desain Konten Media Sosial','Social Media Content Design']};const n=Object.values(names).find(p=>p.includes(m[2]));return m[1]+' / '+n[language==='id'?0:1]}
  if((m=key.match(/^Lihat skill (.+?)(, contoh)?$/)))return language==='en'?'View '+m[1]+' skill'+(m[2]?', example':''):key;
  if((m=key.match(/^View (.+?) skill(, example)?$/)))return language==='id'?'Lihat skill '+m[1]+(m[2]?', contoh':''):key;
  if((m=key.match(/^(\d+) dari 5 bintang(, rating contoh)?$/)))return language==='en'?m[1]+' out of 5 stars'+(m[2]?', sample rating':''):key;
  if((m=key.match(/^(\d+) out of 5 stars(, sample rating)?$/)))return language==='id'?m[1]+' dari 5 bintang'+(m[2]?', rating contoh':''):key;
  if(key==='Rating belum diisi')return language==='en'?'Rating not added':key;
  if((m=key.match(/^(Profil|Portfolio|Portofolio|Skills & Abilities|Keahlian & Kemampuan|About & Contact|Tentang & Kontak) — Creative Archive$/))){const name=index.get(m[1]);return (name?.[language]||m[1])+' — '+(language==='id'?'Arsip Kreatif':'Creative Archive')}
  if(key==='Muhammad Subhi — Creative Archive')return language==='id'?'Muhammad Subhi — Arsip Kreatif':key;
  if(key.includes(' / ')||key.includes(' · ')){const parts=key.split(/( \/ | · )/);return parts.map(part=>index.get(part)?.[language]||part).join('')}
  return value;
 }
 function text(node){if(node.parentElement?.closest('script,style,noscript,.language-switch'))return;const current=node.nodeValue,old=textState.get(node);const source=old&&old.output===current?old.source:current;const output=translate(source);textState.set(node,{source,output});if(output!==current)node.nodeValue=output}
 function attributes(el){if(el.closest('.language-switch'))return;let state=attributeState.get(el);if(!state){state={};attributeState.set(el,state)}for(const name of ['aria-label','alt','title','placeholder']){if(!el.hasAttribute(name))continue;const current=el.getAttribute(name),old=state[name],source=old&&old.output===current?old.source:current,output=translate(source);state[name]={source,output};if(current!==output)el.setAttribute(name,output)}}
 function subtree(root){if(root.nodeType===Node.TEXT_NODE){text(root);return}if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_NODE)return;if(root.nodeType===Node.ELEMENT_NODE)attributes(root);const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);while(walker.nextNode()){const n=walker.currentNode;if(n.nodeType===Node.TEXT_NODE)text(n);else attributes(n)}}
 function setLanguage(next){language=next==='en'?'en':'id';document.documentElement.lang=language;document.documentElement.dataset.language=language;try{localStorage.setItem('subhi-language',language)}catch{}document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));document.querySelector('.language-switch').setAttribute('aria-label',language==='id'?'Pilih bahasa':'Choose language');subtree(document);window.dispatchEvent(new CustomEvent('languagechange',{detail:{language}}))}
 document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.language)));
 const observer=new MutationObserver(records=>{const nodes=new Set();for(const record of records){if(record.type==='childList')record.addedNodes.forEach(n=>nodes.add(n));else nodes.add(record.target)}nodes.forEach(subtree)});
 setLanguage(language);observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','alt','title','placeholder']});
})();
