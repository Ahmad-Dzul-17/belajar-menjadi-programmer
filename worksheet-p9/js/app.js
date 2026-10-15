export const profil = {
  nama: "Ahmad Dzulfikar Thufail Hakim",
  peran: "Mahasiswa Informatika",
  fokus: "Front-end, aplikasi web, dan kecerdasan buatan",
  status: "Sedang belajar",
  keahlian: ["HTML", "CSS", "JavaScript", "Git & GitHub", "UI responsif"]
};

export const daftarProyek = [
  {
    id: 1,
    judul: "Duitku",
    kategori: "Aplikasi web",
    kategoriId: "aplikasi-web",
    tahun: 2026,
    selesai: false,
    deskripsi: "Konsep aplikasi pencatatan keuangan pribadi dengan ringkasan anggaran dan transaksi."
  },
  {
    id: 2,
    judul: "Fit Track",
    kategori: "Lifestyle tracker",
    kategoriId: "lifestyle-tracker",
    tahun: 2026,
    selesai: false,
    deskripsi: "Konsep pelacak kebiasaan sehat seperti tidur, minum air, makanan, dan aktivitas."
  },
  {
    id: 3,
    judul: "Carbly",
    kategori: "Climate action",
    kategoriId: "climate-action",
    tahun: 2026,
    selesai: true,
    deskripsi: "Konsep pencatatan aktivitas harian untuk meningkatkan kesadaran terhadap jejak karbon."
  }
];

export function buatPerkenalan({ nama, peran }) {
  return `Nama saya ${nama}, dan saya ${peran.toLowerCase()} yang terus mengembangkan keterampilan melalui proyek.`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");
