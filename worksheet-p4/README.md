# Daftar Film Terbaik 2026

Website sederhana yang dibuat untuk memenuhi tugas praktikum Pemrograman Aplikasi Berbasis Web (PABW). Pada Pertemuan 4, halaman dari Pertemuan 3 diberi tampilan menggunakan CSS fundamental dan design token.

## Isi Website

1. **Header dan Navigation**
   - Menampilkan judul "Daftar Film Terbaik 2026".
   - Navigasi menuju bagian Home, Tabel, dan Form.
   - Terdapat pengalih tema gelap tanpa JavaScript.

2. **Daftar Film**
   - Menampilkan tiga film:
     - Mortal Combat 2
     - Ghost In The Cell
     - Ayah Aku Mau Cerita
   - Setiap poster film dapat diklik dan mengarah ke halaman film di 21 Cineplex.

3. **Tabel Film**
   - Menampilkan nama film, genre, status tayang, dan rating.

4. **Form Rating**
   - Pengguna dapat mengisi nama, email, memilih film, dan memberikan rating 1 sampai 10.
   - Form menggunakan validasi HTML `required`.
   - Tampilan fokus keyboard dan keadaan input tidak valid diberi penanda visual.

## Pertemuan 4 — Design Token Halaman Profil

Pada Pertemuan 4, halaman menggunakan design token agar warna, jarak, ukuran huruf, radius, dan bayangan dapat dikelola secara terpusat.

### Warna yang Dipilih

Warna utama menggunakan kombinasi hijau dan cyan. Hijau gelap dipakai untuk teks agar tetap mudah dibaca, cyan muda dipakai sebagai latar halaman, dan hijau-teal digunakan sebagai warna utama untuk tombol serta tautan.

### Token yang Saya Tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#00796B` | tombol, tautan, dan penanda utama |
| `--color-fg` | `#16332F` | warna teks utama |
| `--color-bg` | `#F2FFFC` | latar halaman |
| `--color-surface` | `#FFFFFF` | latar kartu, tabel, dan input |
| `--color-border` | `#D1D5DB` | garis dan tepi komponen |
| `--color-danger` | `#B00020` | penanda input tidak valid |
| `--color-focus` | `#00695C` | garis fokus keyboard |
| `--radius-md` | `0.5rem` | sudut kartu, input, dan tombol |
| `--space-4` | `1rem` | jarak standar antar elemen |

Pasangan warna teks dan latar diuji menggunakan pemeriksa kontras. Warna tombol menggunakan `#00796B` dengan teks dari token surface `#FFFFFF` sehingga memenuhi ambang kontras teks normal 4.5:1.

### Berkas CSS

Berkas gaya dimuat dengan urutan:

1. `tokens.css` — seluruh nilai token.
2. `base.css` — reset, box-sizing, tipografi, dan warna dasar.
3. `layout.css` — navbar, katalog kartu, layout halaman, dan footer.
4. `komponen.css` — kartu, tabel, tombol, form, fokus, dan validasi.
5. `tema.css` — tema gelap otomatis dan pengalih tema manual.

### Design Token dan Tema

Komponen menggunakan token semantik melalui `var()`, bukan menulis warna secara langsung. Tema gelap mengganti token semantik sehingga komponen yang sama dapat mengikuti tema tanpa mengubah berkas komponen.

Kriteria perawatan yang digunakan: perubahan warna utama pada token primitif harus dapat diteruskan ke komponen yang menggunakan token semantik terkait.

## Pembagian Pengerjaan

### Yang Saya Kerjakan

Saya mengerjakan dan menyusun website berdasarkan tugas/lembar kerja yang diberikan, termasuk memilih konten film, menyiapkan gambar dan tautan, menguji halaman, serta menyesuaikan struktur dan tampilan halaman.

### Bagian yang Dibantu ChatGPT

ChatGPT digunakan sebagai pendamping belajar untuk:

- Menjelaskan konsep design token dan pemisahan token primitif dengan token semantik.
- Membantu memeriksa struktur HTML dan CSS terhadap ketentuan Worksheet P4.
- Memberikan arahan dalam penggunaan Flexbox, `gap`, `rem`, `:focus-visible`, `:user-invalid`, `prefers-color-scheme`, dan `:has()`.
- Membantu memeriksa pasangan warna dan kontras.
- Membantu menemukan bagian kode yang belum sesuai dengan lembar kerja.
- Membantu merapikan struktur file tanpa mengubah isi utama halaman secara sembarangan.

Kode dan hasil akhir tetap diperiksa serta dijalankan pada lingkungan pengguna.

## Catatan

Website ini masih merupakan website frontend sederhana menggunakan HTML dan CSS. Form rating belum terhubung dengan database atau backend, sehingga data belum benar-benar disimpan ketika tombol **Simpan** ditekan.

## Struktur File

```text
worksheet-p4/
├── profile.html
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── README.md
└── image/
    ├── mortal-kombat-2.jpg
    ├── ghost-in-the-cell.jpg
    └── ayah-aku-mau-cerita.jpg
```

## Tujuan Pembelajaran

Melalui tugas ini, saya belajar mengenai:

- Design token primitif dan semantik.
- CSS reset dan `box-sizing`.
- Tipografi menggunakan `rem`.
- Layout menggunakan Flexbox dan `gap`.
- Layout responsif dengan `flex-wrap`.
- Styling kartu, tabel, gambar, dan form.
- Keadaan fokus dengan `:focus-visible`.
- Validasi tampilan dengan `:user-invalid`.
- Tema gelap menggunakan `prefers-color-scheme`.
- Pengalih tema manual menggunakan checkbox dan `:has()`.
- Pemeriksaan kontras dan aksesibilitas.

## Kesimpulan

Website ini merupakan lanjutan dari halaman Pertemuan 3. Pada Pertemuan 4, tampilan diperbaiki menggunakan design token dan beberapa berkas CSS terpisah agar halaman lebih konsisten, responsif, mudah dirawat, serta mendukung tema terang dan gelap.
