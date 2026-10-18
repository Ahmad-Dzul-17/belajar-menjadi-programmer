# Profil Mahasiswa | PABW Meeting 10

Halaman profil ini melanjutkan proyek Meeting 9 dan menambahkan pengambilan data dari API publik dengan `fetch`, `async/await`, dan JSON.

## Menjalankan proyek
1. Buka folder ini di VS Code.
2. Jalankan `profil.html` dengan Live Server (port 5502), jangan dibuka dengan klik dua kali (`file://`).
3. Buka DevTools (`F12`), periksa panel Console dan Network.
4. Gulir ke bagian **Bacaan JavaScript terbaru** dan tekan **Muat ulang** untuk memanggil API lagi.

Alternatif tanpa Live Server: `python3 -m http.server 8000`, lalu buka `http://localhost:8000/profil.html`.

## Struktur file
- `profil.html`: struktur halaman, termasuk bagian baru `#bacaan`.
- `js/api.js` **(baru, Meeting 10)**: lapisan data. Menyimpan alamat API di satu tempat, memanggil `fetch`, memeriksa `response.ok`, membaca JSON, dan mengekspor `getArticles()`.
- `js/app.js`: data profil dan daftar proyek. Tidak berubah.
- `js/dom.js`: lapisan tampilan. Mengimpor `getArticles()` dari `api.js`, merender kartu bacaan, dan menangani empat state antarmuka.
- File CSS: token, gaya dasar, tata letak, komponen (ditambah gaya status data), dan tema.

## API yang dipakai
- Alamat: `https://hn.algolia.com/api/v1/search_by_date?tags=story&query=javascript&hitsPerPage=6`
- API publik Hacker News (Algolia), HTTPS, tanpa API key, mendukung CORS.
- Respons: status `200`, `Content-Type: application/json`. Data artikel ada di kunci `hits` (array).
- Tidak memakai `news.json` lokal karena API dapat dijangkau langsung.

## Yang diterapkan di Meeting 10
- Alamat API ditulis sekali di bagian atas `js/api.js`.
- `response.ok` diperiksa sebelum `response.json()`. Status 404/500 dilempar sebagai error sendiri.
- `getArticles()` memakai `async/await` dengan satu `try/catch`; error jaringan dan isi yang bukan JSON diberi pesan yang jelas lalu dilempar ulang.
- Pemanggil di `js/dom.js` (`muatArtikel()`) punya `try/catch` kedua dan menampilkan pesan error di halaman, bukan hanya di Console.
- Empat state antarmuka: **loading** ("Memuat bacaan terbaru…"), **sukses** (kartu artikel + jumlah), **gagal** (pesan merah + ajakan muat ulang), **kosong** ("Belum ada bacaan…").
- Wadah dikosongkan dengan `replaceChildren()` sebelum render, jadi kartu tidak berlipat saat muat ulang.
- Semua isi dari jaringan dimasukkan dengan `textContent`, bukan `innerHTML`.
- `JSON.stringify` dipakai saat formulir kontak dikirim (data → teks JSON di `localStorage`), dan `JSON.parse` membacanya kembali saat halaman dibuka.
- Kata `fetch` hanya muncul di `js/api.js`.

## Catatan struktur
Sejak Meeting 9, lapisan tampilan saya ada di `js/dom.js` (yang mengimpor data dari `js/app.js`). Karena itu baris pemanggil `getArticles()` dan `try/catch` kedua ditempatkan di `js/dom.js`, sedangkan `js/app.js` tetap seperti semula.

## Menguji state
- **Gagal (404):** ubah alamat di `js/api.js` menjadi path yang salah, misalnya `.../search_by_dat`.
- **Gagal (jaringan):** pilih *Offline* di panel Network, lalu tekan Muat ulang.
- **Kosong:** ketik `renderArtikel([])` di Console, atau ganti `query=` dengan kata yang tidak ada.
- **Loading:** pilih *Slow 3G* di panel Network, lalu muat ulang halaman.

Bukti tiap state ada di folder `screenshots/` (`1-success`, `2-loading`, `3-failure-404`, `4-failure-offline`, `5-empty`).

## Untuk Meeting 11
Fungsi yang diekspor bernama `getArticles`, diimpor dengan:

```js
import { getArticles } from "./api.js";
```

## Bantuan AI
- Meeting 10: Claude (AI) membantu menyusun `js/api.js`, fungsi render dan empat state di `js/dom.js`, gaya status di CSS, README ini, serta draf jawaban worksheet P10.
- Yang tetap saya kerjakan sendiri: memilih topik dan API, menjalankan halaman di browser, menguji tiap state, mengambil screenshot, dan memastikan saya bisa menjelaskan setiap baris kode.
