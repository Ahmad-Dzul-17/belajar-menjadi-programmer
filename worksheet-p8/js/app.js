const profil = {
  nama: "Ahmad Dzulfikar Thufail Hakim",
  peran: "Mahasiswa Informatika",
  fokus: "Front-end, aplikasi web, dan kecerdasan buatan",
  status: "Sedang belajar",
  keahlian: ["HTML", "CSS", "JavaScript", "Git & GitHub", "UI responsif"]
};

const daftarProyek = [
  {
    id: 1,
    judul: "Duitku",
    kategori: "Aplikasi web",
    tahun: 2026,
    selesai: false,
    deskripsi: "Konsep aplikasi pencatatan keuangan pribadi dengan ringkasan anggaran dan transaksi."
  },
  {
    id: 2,
    judul: "Fit Track",
    kategori: "Lifestyle tracker",
    tahun: 2026,
    selesai: false,
    deskripsi: "Konsep pelacak kebiasaan sehat seperti tidur, minum air, makanan, dan aktivitas."
  },
  {
    id: 3,
    judul: "Carbly",
    kategori: "Climate action",
    tahun: 2026,
    selesai: true,
    deskripsi: "Konsep pencatatan aktivitas harian untuk meningkatkan kesadaran terhadap jejak karbon."
  }
];

function buatPerkenalan({ nama, peran }) {
  return `Nama saya ${nama}, dan saya ${peran.toLowerCase()} yang terus mengembangkan keterampilan melalui proyek.`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

function buatElemen(tag, teks, className = "") {
  const elemen = document.createElement(tag);
  elemen.textContent = teks;
  if (className) elemen.className = className;
  return elemen;
}

function tampilkanKeahlian() {
  const daftar = document.querySelector("#daftar-keahlian");
  const elemenKeahlian = profil.keahlian.map((nama) => buatElemen("li", nama, "tag"));
  daftar.replaceChildren(...elemenKeahlian);
}

function tampilkanProyek(filter = "semua") {
  const daftarKartu = document.querySelector("#daftar-proyek");
  const isiTabel = document.querySelector("#tabel-proyek");
  const proyekTampil = daftarProyek.filter((proyek) => {
    if (filter === "selesai") return proyek.selesai;
    if (filter === "proses") return !proyek.selesai;
    return true;
  });

  const kartu = proyekTampil.map((proyek) => {
    const artikel = document.createElement("article");
    artikel.className = "kartu";
    artikel.append(
      buatElemen("p", proyek.kategori, "eyebrow"),
      buatElemen("h3", proyek.judul),
      buatElemen("p", proyek.deskripsi),
      buatElemen("p", `Tahun ${proyek.tahun} · ${proyek.selesai ? "Selesai" : "Sedang dikerjakan"}`)
    );
    return artikel;
  });
  daftarKartu.replaceChildren(...kartu);

  const barisTabel = proyekTampil.map((proyek) => {
    const baris = document.createElement("tr");
    const status = proyek.selesai ? "Selesai" : "Sedang dikerjakan";
    [proyek.judul, proyek.tahun, proyek.kategori, status].forEach((nilai) => {
      baris.append(buatElemen("td", String(nilai)));
    });
    return baris;
  });
  isiTabel.replaceChildren(...barisTabel);
  document.querySelector("#jumlah-hasil").textContent = `${proyekTampil.length} proyek ditampilkan`;
}

function isiHalaman() {
  document.querySelector("#nama-profil").textContent = profil.nama;
  document.querySelector("#peran-profil").textContent = profil.peran;
  document.querySelector("#perkenalan").textContent = buatPerkenalan(profil);
  document.querySelector("#fokus-profil").textContent = profil.fokus ?? "Belum menentukan fokus";
  document.querySelector("#status-profil").textContent = profil.status ?? "Status belum diisi";
  document.querySelector("#jumlah-keahlian").textContent = profil.keahlian.length;
  document.querySelector("#jumlah-proyek").textContent = daftarProyek.length;
  document.querySelector("#jumlah-selesai").textContent = daftarProyek.filter((proyek) => proyek.selesai).length;

  const proyekUnggulan = daftarProyek.find((proyek) => proyek.selesai);
  document.querySelector("#proyek-unggulan").textContent = `Proyek selesai pertama: ${proyekUnggulan?.judul ?? "Belum ada proyek selesai"}.`;
  tampilkanKeahlian();
  tampilkanProyek();
}

document.querySelector("#filter-status").addEventListener("change", (event) => {
  tampilkanProyek(event.target.value);
});

isiHalaman();

console.log("Perkenalan:", buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));
console.table(profil.keahlian);
console.table(daftarProyek);
console.table(daftarProyek.filter((proyek) => proyek.selesai));
console.log("Pencarian proyek yang tidak ada:", daftarProyek.find((proyek) => proyek.judul === "Katalog Produk"));
console.log("Jumlah judul hasil map:", daftarProyek.map((proyek) => proyek.judul).length);
