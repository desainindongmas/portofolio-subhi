# Portofolio Muhammad Subhi

Website portofolio interaktif berbasis game, berisi profil profesional, perjalanan karier, Skills & Abilities, case study, portofolio karya, serta jalur kontak. Identitas studio ditulis **desainindongmas**.

## Struktur deployment
- Sumber halaman statis: `dist/index.html` dan file JS/CSS di `dist/`.
- Konten utama: `dist/portfolio-data.js` (experience, project, skill, career evidence).
- Case studies: `dist/opportunity-data.js`.
- Data desain bilingual: `dist/language.js`.
- Output Cloudflare Pages: `dist`, **tanpa perintah build** bila memakai artefak statis yang ada.
- DNS subdomain yang direncanakan: `subhi.desainindongmas.my.id`; DNS berada di Netlify.

## Revisi 12 November 2026
Branch `content/career-skills-refresh-2026-11-12` memperbarui riwayat karier, positioning AI-assisted, core abilities, bukti pengerjaan, serta kartu dan studi kasus proyek. Status demo/dev tidak disamakan dengan produk siap produksi. Enzy Snack hanya tampil sebagai ringkasan publik tanpa data sensitif.

## Pemeriksaan
- Verifikasi syntax file JavaScript, validitas JSON portofolio, referensi aset, dan tautan navigasi.
- Uji profil, timeline, skill tree, filter portfolio, case studies, contact CTA, dan toggle bahasa pada desktop/mobile setelah deploy preview.
- PDF CV bahasa Indonesia dan Inggris telah diregenerasi dan di-commit ke `dist/downloads/` pada 12 November 2026 melalui GitHub Actions.
- Workflow `.github/workflows/build-cv.yml` akan membangun ulang kedua PDF ketika data portofolio atau skrip pembangunnya diperbarui; periksa kembali isi PDF sebelum merge.

Jangan langsung merge ke `main` sebelum preview dan regenerasi CV diperiksa.
