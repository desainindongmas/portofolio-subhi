# Kode Sumber Portofolio Muhammad Subhi

Diekspor pada 9 November 2026 dari sumber Site asli.
Versi tersimpan: 25.
Commit: 9a235340205c7548fc0a3dea592bcc34754d4f66
Site: https://muhammad-subhi-showcase.bapak2rekomend.chatgpt.site
Repository tujuan: https://github.com/desainindongmas/portofolio-subhi

## Isi dan cara menjalankan

Kode aplikasi yang dapat diedit berada di `dist/`: index.html, file CSS/JavaScript, data portofolio, dan aset. Pada proyek ini folder dist adalah sumber aplikasi statis yang dilacak Git; tidak ada package.json dan tidak membutuhkan npm build.

Ekstrak ZIP, masuk ke folder portofolio-subhi, lalu jalankan:

```sh
python3 -m http.server 8000 --directory dist
```

Buka http://localhost:8000. Di Windows, gunakan `python` atau `py` bila `python3` tidak tersedia.

## Melanjutkan di chat lain

Unggah ZIP ini dan minta asisten membaca PORTOFOLIO_SUBHI_HANDOFF.md serta README_SERAH_TERIMA_KODE.md sebelum mengubah kode. HTML, CSS, dan JavaScript aplikasi diekspor tanpa perubahan dari commit di atas. File README ini dan dokumen handoff adalah tambahan untuk serah terima. Riwayat Git, dependency lokal, dan kredensial akses tidak disertakan.

## Fakta terbaru setelah dokumen handoff dibuat

- Sumber asli berhasil dipulihkan dari repository Site dan cocok dengan commit versi tersimpan 25.
- Repository GitHub tujuan ditemukan; metadata melaporkan ukuran 0. Isi branch belum diperiksa.
- Ekspor ini tidak melakukan push GitHub, deployment, atau perubahan DNS.
- Build/pengujian browser dan audit semua fitur tidak dilakukan untuk ekspor ini. Integritas ZIP dan keberadaan berkas sumber diperiksa.
- Dokumen handoff disertakan sebagai catatan keputusan terdahulu. Pernyataan di sana bahwa sumber belum tersedia telah diperbarui oleh temuan dalam README ini. Tautan dan implementasi lain tetap perlu diperiksa.

## Cloudflare

Aplikasi ini statis. Untuk deployment Cloudflare Pages berbasis Git, direktori output adalah `dist` dan tidak ada langkah kompilasi npm yang diperlukan. Sesuaikan pengaturan proyek Cloudflare setelah mengunggah isi folder portofolio-subhi ke root repository. File `.openai/hosting.json` adalah konfigurasi hosting Site asal; bukan konfigurasi Cloudflare Pages eksternal.

## Batas publikasi

ZIP adalah salinan sumber asli untuk pemilik, bukan sertifikasi bahwa semua kontennya siap dipublikasikan. Aset lama seperti logo enzy-snack masih ada dalam sumber. Keberadaan aset tidak membuktikan bahwa proyek itu tampil di halaman; periksa data/render sebelum publikasi. Tetap patuhi larangan menampilkan Enzy Snack, personal finance, dan project tracker secara publik sebagaimana dokumen handoff. Jangan mengunggah dokumen serah terima internal ke repository publik tanpa meninjau isinya.
