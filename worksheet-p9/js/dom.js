import { profil, daftarProyek, buatPerkenalan } from "./app.js";

const elemen = {
  nama: document.querySelector("#nama-profil"),
  peran: document.querySelector("#peran-profil"),
  perkenalan: document.querySelector("#perkenalan"),
  fokus: document.querySelector("#fokus-profil"),
  status: document.querySelector("#status-profil"),
  jumlahKeahlian: document.querySelector("#jumlah-keahlian"),
  jumlahProyek: document.querySelector("#jumlah-proyek"),
  jumlahSelesai: document.querySelector("#jumlah-selesai"),
  keahlian: document.querySelector("#daftar-keahlian"),
  filter: document.querySelector("#filter"),
  proyek: document.querySelector("#daftar-proyek"),
  pesanKosong: document.querySelector("#pesan-kosong"),
  jumlahHasil: document.querySelector("#jumlah-hasil"),
  tabel: document.querySelector("#tabel-proyek"),
  unggulan: document.querySelector("#proyek-unggulan"),
  form: document.querySelector("#form-kontak"),
  tombolKirim: document.querySelector("#kirim-kontak"),
  statusForm: document.querySelector("#status-form")
};

const bidangForm = [
  {
    input: document.querySelector("#nama-kontak"),
    error: document.querySelector("#error-nama"),
    pesan: "Masukkan nama minimal 2 karakter.",
    valid: (nilai) => nilai.trim().length >= 2
  },
  {
    input: document.querySelector("#email-kontak"),
    error: document.querySelector("#error-email"),
    pesan: "Masukkan alamat email yang valid.",
    valid: (nilai) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai.trim())
  },
  {
    input: document.querySelector("#pesan-kontak"),
    error: document.querySelector("#error-pesan"),
    pesan: "Pesan harus berisi minimal 10 karakter.",
    valid: (nilai) => nilai.trim().length >= 10
  }
];

function buatElemen(tag, teks, className = "") {
  const item = document.createElement(tag);
  item.textContent = teks;
  if (className) item.className = className;
  return item;
}

function tampilkanKeahlian() {
  const fragmen = document.createDocumentFragment();
  profil.keahlian.forEach((nama) => fragmen.append(buatElemen("li", nama, "tag")));
  elemen.keahlian.replaceChildren(fragmen);
}

function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.append(
    buatElemen("p", proyek.kategori, "eyebrow"),
    buatElemen("h3", proyek.judul),
    buatElemen("p", proyek.deskripsi),
    buatElemen("p", `Tahun ${proyek.tahun} · ${proyek.selesai ? "Selesai" : "Sedang dikerjakan"}`)
  );
  return kartu;
}

function buatBarisTabel(proyek) {
  const baris = document.createElement("tr");
  [proyek.judul, proyek.tahun, proyek.kategori, proyek.selesai ? "Selesai" : "Sedang dikerjakan"]
    .forEach((nilai) => baris.append(buatElemen("td", String(nilai))));
  return baris;
}

function render(proyek) {
  elemen.proyek.replaceChildren();
  elemen.tabel.replaceChildren();

  if (proyek.length === 0) {
    elemen.pesanKosong.hidden = false;
    elemen.jumlahHasil.textContent = "0 proyek ditampilkan";
    return;
  }

  elemen.pesanKosong.hidden = true;
  const kartu = document.createDocumentFragment();
  const baris = document.createDocumentFragment();

  proyek.forEach((item) => {
    kartu.append(buatKartu(item));
    baris.append(buatBarisTabel(item));
  });

  elemen.proyek.append(kartu);
  elemen.tabel.append(baris);
  elemen.jumlahHasil.textContent = `${proyek.length} proyek ditampilkan`;
}

function tandaiFilterAktif(tombolAktif) {
  elemen.filter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("active", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

function validasiForm() {
  let semuaValid = true;

  bidangForm.forEach(({ input, error, pesan, valid }) => {
    const benar = valid(input.value);
    error.textContent = benar ? "" : pesan;
    input.setAttribute("aria-invalid", String(!benar));
    semuaValid = semuaValid && benar;
  });

  elemen.tombolKirim.disabled = !semuaValid;
  return semuaValid;
}

function isiHalaman() {
  elemen.nama.textContent = profil.nama;
  elemen.peran.textContent = profil.peran;
  elemen.perkenalan.textContent = buatPerkenalan(profil);
  elemen.fokus.textContent = profil.fokus ?? "Belum menentukan fokus";
  elemen.status.textContent = profil.status ?? "Status belum diisi";
  elemen.jumlahKeahlian.textContent = profil.keahlian.length;
  elemen.jumlahProyek.textContent = daftarProyek.length;
  elemen.jumlahSelesai.textContent = daftarProyek.filter((proyek) => proyek.selesai).length;
  const unggulan = daftarProyek.find((proyek) => proyek.selesai);
  elemen.unggulan.textContent = `Proyek selesai pertama: ${unggulan?.judul ?? "Belum ada proyek selesai"}.`;
  tampilkanKeahlian();
  render(daftarProyek);
}

elemen.filter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol || !elemen.filter.contains(tombol)) return;

  const kategori = tombol.dataset.category;
  const pilihan = daftarProyek.filter((proyek) => kategori === "all" || proyek.kategoriId === kategori);
  tandaiFilterAktif(tombol);
  render(pilihan);
});

bidangForm.forEach(({ input }) => input.addEventListener("input", validasiForm));

elemen.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validasiForm()) {
    bidangForm.find(({ input, valid }) => !valid(input.value))?.input.focus();
    return;
  }

  elemen.statusForm.textContent = "Terima kasih. Formulir berhasil divalidasi.";
  elemen.form.reset();
  validasiForm();
});

isiHalaman();
validasiForm();
