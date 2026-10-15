# Profil Mahasiswa | PABW Meeting 9

Halaman profil ini melanjutkan proyek Meeting 8 dan menerapkan DOM, render data, event delegation, serta validasi form.

## Menjalankan proyek
1. Buka folder ini di VS Code.
2. Jalankan `profil.html` dengan Live Server.
3. Buka DevTools (`F12`) dan periksa Console.
4. Coba semua filter, termasuk **Desain**, lalu uji formulir dengan data kosong, spasi, dan data valid.

Gunakan Live Server karena JavaScript dijalankan sebagai module.

## Struktur file
- `profil.html`: struktur halaman.
- `js/app.js`: data profil, daftar proyek, dan fungsi perkenalan.
- `js/dom.js`: render halaman, filter proyek, tabel, dan validasi formulir.
- File CSS: token, gaya dasar, tata letak, komponen, dan tema.

## Yang diterapkan
- Kartu dan tabel proyek dibuat dari array dengan `createElement()` dan `textContent`.
- Fungsi `render()` membersihkan daftar dan tabel sebelum menggambar ulang, serta menangani daftar kosong.
- Satu listener pada `#filter` menangani semua tombol kategori.
- Formulir mencegah reload, menampilkan pesan per kolom, dan mengaktifkan tombol hanya saat isian valid.
- Urutan halaman: daftar proyek, tabel proyek, lalu formulir kontak.

## Bantuan AI
ChatGPT membantu menyusun dan meninjau sebagian HTML, CSS, JavaScript, serta draf jawaban worksheet. Saya tetap perlu menjalankan program, memeriksa hasilnya, mengambil screenshot pengujian, dan memastikan isi worksheet sesuai dengan pengalaman saya sendiri.
