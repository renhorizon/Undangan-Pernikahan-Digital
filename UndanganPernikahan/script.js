// INISIALISASI
const $ = (id) => document.getElementById(id);
const $$ = (selector) => document.querySelectorAll(selector);
const cover = $("cover");
const openBtn = $("openBtn");
const rsvpForm = $("rsvpForm");
const music = $("music");
const musicBtn = $("musicBtn");
const TARGET = new Date('2027-06-20T08:00:00+07:00').getTime();
let toastTimer = null;

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


// INTERAKSI
openBtn.addEventListener("click", async () => {
    window.scrollTo(0, 0);
    cover.classList.add("hide");
    musicBtn.classList.remove("hide");
    musicBtn.classList.add("playing");
    document.body.classList.remove("locked");
    setTimeout(() => {
        cover.remove();
    }, 1000);

    try {
        music.volume = 0.2; 
        await music.play();
    } catch (error) {
        console.log("Autoplay gagal, user harus menekan tombol play.",);
    }
});

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.classList.add("playing");
    } else {
        music.pause();
        musicBtn.classList.remove("playing");
    }
});

music.addEventListener("error", () => {
    console.warn("File audio gagal dimuat");
    musicBtn.classList.add("hide");
});

rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = $("guest-email").value.trim();
    const name = $("guest-name").value.trim();
    const attend = $("fattend").value;
    const msg = $("msg").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validasi input
    if (!email || !name || !attend || !msg) {
        showToast("Harap isi semua kolom yang wajib diisi.");
        return;
    }
    // Validasi format email
    if (!emailPattern.test(email)) {
        showToast("Format email tidak valid.");
        return;
    }
    showToast("Terima kasih! RSVP Anda telah terkirim.");
    rsvpForm.reset();
});


// ANIMASI
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
    },
);
$$(".reveal").forEach((el) => io.observe(el));

(function spawnPetals() {
    const layer = $("petals");
    if (!layer) return;

    // Di HP lebih sedikit biar tidak berat
    const count = window.innerWidth < 640 ? 14 : 24;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';

        // Ukuran acak 8–18px
        const size = 8 + Math.random() * 10;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';

        // Posisi horizontal acak (0–100% lebar layar)
        petal.style.left = Math.random() * 100 + 'vw';

        // Durasi jatuh acak 10–20 detik
        petal.style.animationDuration = (10 + Math.random() * 10) + 's';

        // Delay muncul acak 0–14 detik — biar tidak semua jatuh bersamaan
        petal.style.animationDelay = (Math.random() * 14) + 's';

        // Opacity acak — biar ada yang lebih transparan
        petal.style.opacity = 0.4 + Math.random() * 0.4;

        layer.appendChild(petal);
    }
})();


// FUNGSI
function showToast(msg) {
    const toast = $("toast-msg");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}

function pad(n) { // Tambahkan nol di depan kalau kurang dari 10
    return String(n).padStart(2, '0');
}

function tickCountdown() {
    const diff = TARGET - Date.now();

    // Kalau waktunya sudah lewat, tampilkan 00 semua
    if (diff <= 0) {
        $('cd-d').textContent = '00';
        $('cd-h').textContent = '00';
        $('cd-m').textContent = '00';
        $('cd-s').textContent = '00';
        return;
    }

    const days    = Math.floor(diff / 86400000);              // 1 hari = 86.400.000 ms
    const hours   = Math.floor((diff % 86400000) / 3600000);  // 1 jam = 3.600.000 ms
    const minutes = Math.floor((diff % 3600000) / 60000);     // 1 menit = 60.000 ms
    const seconds = Math.floor((diff % 60000) / 1000);        // 1 detik = 1.000 ms

    $('cd-d').textContent = pad(days);
    $('cd-h').textContent = pad(hours);
    $('cd-m').textContent = pad(minutes);
    $('cd-s').textContent = pad(seconds);
}
// Jalankan sekali langsung, lalu ulangi tiap 1 detik
tickCountdown();
setInterval(tickCountdown, 1000);