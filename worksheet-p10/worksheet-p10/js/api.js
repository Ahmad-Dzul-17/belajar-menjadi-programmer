// js/api.js — lapisan data: hanya mengambil dan memeriksa data, tidak menyentuh DOM.
// Alamat API ditulis sekali di sini. Jika alamat berubah, cukup ubah baris ini.
const URL = "https://hn.algolia.com/api/v1/search_by_date?tags=story&query=javascript&hitsPerPage=6";

// Tautan cadangan untuk cerita Hacker News yang tidak punya url sendiri (misalnya "Ask HN").
const URL_DISKUSI = "https://news.ycombinator.com/item?id=";

export async function getArticles() {
  let response;

  try {
    response = await fetch(URL);
    console.log("status", response.status, "ok", response.ok);

    // fetch tidak melempar error pada status 404/500, jadi status diperiksa sendiri.
    if (!response.ok) throw new Error("status " + response.status);

    // json() mengubah teks respons menjadi nilai JavaScript (teks → nilai).
    const data = await response.json();

    if (!data || !Array.isArray(data.hits)) throw new Error("format data tidak sesuai");

    return data.hits.map((item) => ({
      id: item.objectID,
      judul: item.title ?? "(tanpa judul)",
      penulis: item.author ?? "anonim",
      poin: item.points ?? 0,
      komentar: item.num_comments ?? 0,
      tanggal: item.created_at,
      tautan: item.url || URL_DISKUSI + item.objectID
    }));
  } catch (error) {
    console.error("failed to load", error.message);

    // Pesan bawaan browser diganti agar mudah dipahami saat tampil di halaman.
    if (!response) throw new Error("jaringan terputus atau alamat tidak dapat dijangkau");
    if (error instanceof SyntaxError) throw new Error("isi respons bukan JSON");
    throw error;
  }
}
