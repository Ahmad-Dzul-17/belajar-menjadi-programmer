# Daftar Film Terbaik 2026

Website sederhana yang dibuat untuk memenuhi tugas praktikum pemrograman web.

Website ini menampilkan beberapa film pilihan tahun 2026, informasi film dalam bentuk tabel, serta form yang dapat digunakan untuk memberikan rating film.

## Isi Website

1. **Header**
   - Menampilkan judul "Daftar Film Terbaik 2026".

2. **Daftar Film**
   - Menampilkan tiga film:
     - Mortal Combat 2
     - Ghost In The Cell
     - Ayah Aku Mau Cerita
   - Setiap poster film dapat diklik dan mengarah ke halaman film di 21 Cineplex.

3. **Tabel Film**
   - Menampilkan nama film, genre, status tayang, dan rating.

4. **Form Rating**
   - Pengguna dapat mengisi:
     - Nama
     - Email
     - Nama Film
     - Rating Film
   - Rating menggunakan input angka dengan batas nilai 1 sampai 10.
   - Form menggunakan metode `POST` dan memiliki validasi `required`.

5. **Navigation**
   - Terdapat navigasi menuju bagian Home, Tabel, dan Form.

6. **Footer**
   - Menampilkan nama, NIM, dan tahun.

## Teknologi yang Digunakan

- HTML
- CSS

## Pembagian Pengerjaan

### Yang Saya Kerjakan

Saya mengerjakan dan menyusun website dengan mengikuti tugas/lembar kerja yang diberikan. Beberapa bagian yang saya kerjakan antara lain:

- Membuat dan mengedit file `profile.html`.
- Menentukan tiga film yang akan ditampilkan.
- Memasukkan gambar poster film.
- Memasukkan link film.
- Membuat tabel film.
- Membuat form rating.
- Membuat navigation bar.
- Membuat footer.
- Membuat dan mengedit file `style.css`.
- Mencoba dan mengecek hasil tampilan website secara langsung.
- Melakukan perubahan pada HTML dan CSS ketika ada bagian yang belum sesuai.

### Bagian yang Dibantu ChatGPT

Dalam proses pengerjaan, saya menggunakan ChatGPT sebagai pendamping belajar dan pembantu dalam memahami serta menyusun kode.

ChatGPT membantu dalam:

- Menjelaskan struktur HTML yang perlu dibuat.
- Menjelaskan fungsi tag HTML seperti `section`, `article`, `table`, `form`, `label`, `input`, dan `nav`.
- Memberikan arahan langkah demi langkah dalam membuat halaman.
- Memberikan contoh kode HTML dan CSS yang kemudian saya masukkan dan sesuaikan.
- Membantu menentukan struktur tabel dan form sesuai tugas.
- Membantu memperbaiki tampilan CSS.
- Menjelaskan hubungan antara `id` pada HTML dengan link navigasi.
- Menjelaskan fungsi `action`, `method`, `required`, `type`, `min`, dan `max` pada form.
- Menjelaskan bahwa form HTML saja belum dapat menyimpan data karena belum memiliki backend/server.
- Membantu mengecek hasil akhir dan menemukan bagian yang perlu diperbaiki.

## Catatan

Website ini masih merupakan website frontend sederhana menggunakan HTML dan CSS.

Form rating pada saat ini belum terhubung dengan database atau backend. Ketika pengguna menekan tombol **Simpan**, data belum benar-benar disimpan ke database karena website belum memiliki sistem server yang menangani data tersebut.

## Struktur File

```text
project/
├── profile.html
├── style.css
└── image/
    ├── mortal-kombat-2.jpg
    ├── ghost-in-the-cell.jpg
    └── ayah-aku-mau-cerita.jpg
```

## Tujuan Pembelajaran

Melalui tugas ini, saya belajar mengenai:

- Struktur dasar HTML.
- Penggunaan elemen semantic HTML.
- Pembuatan tabel HTML.
- Pembuatan form HTML.
- Penggunaan atribut validasi pada form.
- Penggunaan link dan anchor.
- Dasar-dasar CSS.
- Pengaturan layout menggunakan Flexbox.
- Pengaturan tampilan tabel, gambar, form, dan navigation.
- Hubungan antara HTML sebagai struktur halaman dan CSS sebagai pengatur tampilan.

## Kesimpulan

Website ini dibuat sebagai hasil latihan membuat halaman web menggunakan HTML dan CSS. Dalam proses pengerjaannya, saya mengerjakan langsung file dan mencoba hasilnya, sementara ChatGPT digunakan sebagai pendamping untuk memberikan penjelasan, contoh, arahan, dan membantu mencari solusi ketika mengalami kesulitan.
