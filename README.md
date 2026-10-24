# Undangan Pernikahan Digital

Proyek ini adalah halaman web undangan pernikahan digital interaktif dan responsif yang dibangun menggunakan HTML, CSS, dan JavaScript murni (Vanilla JS). Desain web ini mengusung tema elegan dengan ornamen bunga sakura dan animasi *scroll* yang dinamis.

## Fitur Utama

* **Layar Sampul (Cover):** Halaman pembuka dengan efek *fade-out* yang mulus dan pemutar musik latar otomatis.
* **Penghitung Mundur (Countdown):** Menghitung mundur waktu secara *real-time* menuju tanggal acara (20 Juni 2027).
* **Animasi Saat Digulir (Scroll Reveal):** Elemen-elemen undangan muncul secara perlahan (*fade-in up*) saat layar digulir ke bawah menggunakan `IntersectionObserver`.
* **Indikator Scroll Progress:** Garis melayang di bagian bawah layar yang memanjang mengikuti progres *scroll* pembaca tanpa membebani JavaScript.
* **Efek Kelopak Sakura Jatuh:** Animasi latar belakang yang menampilkan kelopak bunga berjatuhan dengan ukuran, posisi, dan durasi yang diacak secara otomatis.
* **Formulir RSVP & Notifikasi Toast:** Formulir konfirmasi kehadiran yang dilengkapi validasi *Regex* ketat untuk format email dan peringatan *Toast* kustom yang bersih.

## Teknologi yang Digunakan

* **HTML5:** Struktur semantik halaman web.
* **CSS3:** Tata letak modern (Flexbox & Grid), variabel CSS, *Scroll-Driven Animations*, dan pengukur tipografi dinamis (`clamp`).
* **JavaScript (ES6):** Manipulasi DOM, pengaturan audio asinkron, pemrosesan acara form RSVP, dan kalkulasi waktu mundur.

## Cara Menjalankan

1. Unduh (*download ZIP*) atau *clone* repositori ini ke komputer lokal Anda.
2. Pastikan semua file (HTML, CSS, JS) dan folder `assets` (yang berisi gambar dan file musik) berada dalam satu direktori utama.
3. Klik ganda pada file `index.html` (atau file HTML utama Anda) untuk membukanya di web browser modern (Google Chrome, Firefox, Safari, Edge).
4. *Catatan:* Kebijakan keamanan browser modern mungkin memblokir pemutaran audio otomatis. Pengguna perlu menekan tombol "Buka Undangan" di layar sampul untuk memulai musik.
