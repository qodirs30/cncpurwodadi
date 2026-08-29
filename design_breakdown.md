```markdown
# Laporan Breakdown Desain Situs Web: Sabeela Rental

---

## 1. INFORMASI UMUM

*   **Judul Halaman:** Sabeela Rental - Penyewaan Videotron dan Lighting Profesional
*   **Deskripsi Singkat:** Situs web profesional untuk layanan penyewaan videotron dan lighting berkualitas tinggi untuk berbagai event, menekankan solusi terintegrasi, peralatan modern, dan dukungan teknis.
*   **Bahasa Utama:** Indonesia

---

## 2. SKEMA WARNA (PALETTE)

Berdasarkan konteks layanan dan nuansa profesionalisme yang berenergi, diasumsikan situs menggunakan palet warna gelap dengan aksen cerah.

*   **Warna Utama (Primary):** `#00C2CB` (Vibrant Teal/Cyan - untuk CTA dan elemen interaktif)
    *   `--color-primary: #00C2CB;`
*   **Warna Sekunder (Secondary):** `#3F51B5` (Deeper Blue - untuk elemen pendukung atau hover state)
    *   `--color-secondary: #3F51B5;`
*   **Latar Belakang (Background):** `#1A1A1A` (Dark Charcoal - dasar situs)
    *   `--color-background: #1A1A1A;`
*   **Aksen (Accent):** `#00C2CB` (Sama dengan Primary, untuk konsistensi pada highlight)
    *   `--color-accent: #00C2CB;`
*   **Teks (Text):**
    *   **Teks Gelap (untuk Heading):** `#FFFFFF` (Putih murni - pada latar belakang gelap)
        *   `--color-text-dark: #FFFFFF;`
    *   **Teks Terang (untuk Body):** `#E0E0E0` (Abu-abu terang - pada latar belakang gelap)
        *   `--color-text-light: #E0E0E0;`

---

## 3. TIPOGRAFI & FONT

Menggunakan kombinasi font sans-serif modern yang mudah dibaca dan memberikan kesan profesional serta dinamis.

*   **Font Family:**
    *   **Heading (H1, H2, H3, H4):** `Poppins`, `sans-serif`
    *   **Body Text (Paragraf, Label):** `Roboto`, `sans-serif`
*   **Sizing & Weights:**
    *   **H1 (Implicit - e.g., "VISUAL IMPACT AMPLIFIED"):**
        *   `font-size: 3rem;`
        *   `font-weight: 700;`
        *   `line-height: 1.2;`
    *   **H2 (e.g., "LAYANAN KAMI", "Kenapa Sabeela?"):**
        *   `font-size: 2.25rem;`
        *   `font-weight: 600;`
        *   `line-height: 1.3;`
    *   **H3 (e.g., "Modern Equipment"):**
        *   `font-size: 1.75rem;`
        *   `font-weight: 600;`
        *   `line-height: 1.4;`
    *   **H4 (e.g., "Paket Event Lengkap"):**
        *   `font-size: 1.25rem;`
        *   `font-weight: 500;`
        *   `line-height: 1.5;`
    *   **Body Text:**
        *   `font-size: 1rem;`
        *   `font-weight: 400;`
        *   `line-height: 1.6;`
    *   **Small Text/Label:**
        *   `font-size: 0.875rem;`
        *   `font-weight: 400;`

---

## 4. ESTETIKA & GAYA DESAIN

*   **Gaya Desain:** Corporate Modern, High-Tech, Professional dengan sentuhan dinamis dan impactful. Bersih, fokus pada konten dengan kontras tinggi.
*   **Border Radius:** Subtle rounding untuk elemen interaktif dan kartu, tidak terlalu membulat.
    *   `border-radius: 8px;` (umum untuk tombol, kartu)
    *   `border-radius: 4px;` (untuk elemen yang lebih kecil)
*   **Efek Shadow/Bayangan:** Shadow minimal dan lembut untuk memberikan kedalaman pada kartu atau elemen yang menonjol dari latar belakang.
    *   `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);`
*   **Ketebalan Border:** Minimalis, umumnya tidak ada border yang mencolok, lebih mengandalkan perbedaan warna latar belakang untuk pemisahan elemen. Jika ada, sangat tipis.
    *   `border: 1px solid rgba(255, 255, 255, 0.1);` (untuk elemen dengan latar belakang transparan)
*   **Spacing (Padding/Margin):** Penggunaan spacing yang generous dan konsisten untuk meningkatkan keterbacaan dan memberikan kesan premium.
    *   Padding vertikal antar section: `padding-top: 5rem; padding-bottom: 5rem;`
    *   Padding horizontal konten: `padding-left: 1.5rem; padding-right: 1.5rem;`
    *   Margin antar elemen blok: `margin-bottom: 1.5rem;`

---

## 5. STRUKTUR TATA LETAK (LAYOUT ARCHITECTURE)

*   **Struktur Umum:** Tata letak single-page scrolling dengan navigasi internal (link `#contact` pada "Download Katalog Paket" menunjukkan navigasi internal atau scroll ke bawah). Terdiri dari Hero section diikuti oleh beberapa section utama.
*   **Pola Grid/Flexbox:**
    *   **Hero Section:** Full-width, dengan konten teks di atas gambar latar belakang yang bersifat carousel/slider. Teks kemungkinan terpusat atau rata kiri.
    *   **Content Sections:** Menggunakan `max-width` terpusat.
        *   Beberapa bagian (misal: "100+ Event Sukses", "24/7 Dukungan Teknis") kemungkinan menggunakan `flexbox` atau `grid` 2-kolom pada desktop.
        *   Bagian "Layanan Kami" mungkin memiliki CTA `Download Katalog Paket` yang full-width, diikuti oleh `grid` atau `flexbox` 2-kolom untuk detail layanan.
        *   Bagian "Kenapa Sabeela?" kemungkinan menggunakan `grid` 3-kolom pada desktop untuk fitur-fitur utama.
        *   Bagian "Kata Mereka" (Testimonial) mungkin menggunakan `grid` 2-kolom atau `flexbox` untuk menampilkan testimoni.
*   **Ukuran Kontainer Lebar:** Konten utama terpusat dalam `max-width` untuk keterbacaan optimal.
    *   `max-width: 1200px;`
    *   `margin: 0 auto;` (untuk centering)
*   **Responsivitas:** Tata letak dirancang agar responsif.
    *   Pada perangkat mobile, kolom-kolom `grid` atau `flexbox` akan menumpuk secara vertikal (1-kolom).
    *   Ukuran font dan spacing disesuaikan agar tetap terbaca dan nyaman pada layar kecil.
    *   Gambar latar belakang Hero akan diskalakan agar sesuai dengan lebar layar.

---

## 6. DAFTAR KOMPONEN UTAMA (UI COMPONENTS)

1.  **Hero Banner:**
    *   **Deskripsi:** Bagian paling atas halaman, mencakup beberapa gambar latar belakang yang berotasi (carousel/slider) dengan teks overlay yang menonjol.
    *   **Styling:**
        *   `height: 100vh;` atau `min-height: 700px;` (untuk impact visual).
        *   `background-size: cover; background-position: center;`
        *   Overlay semi-transparan (gradient gelap) di atas gambar untuk meningkatkan keterbacaan teks.
        *   Teks (`h1`, `p`) berwarna `--color-text-dark`, `font-weight: 700;` untuk judul utama.
        *   Teks `Ready for Event Production` bisa lebih kecil, `text-transform: uppercase; letter-spacing: 2px;`.

2.  **Call-to-Action (CTA) Button:**
    *   **Deskripsi:** Tombol untuk "Download Katalog Paket".
    *   **Styling:**
        *   `background-color: var(--color-primary);`
        *   `color: var(--color-text-dark);`
        *   `padding: 0.75rem 1.5rem;`
        *   `border-radius: 8px;`
        *   `text-decoration: none;`
        *   `display: inline-block;`
        *   `font-weight: 600;`
        *   `transition: background-color 0.3s ease;`
        *   `&:hover { background-color: var(--color-secondary); }`

3.  **Feature/Info Blocks:**
    *   **Deskripsi:** Blok informasi seperti "100+ Event Sukses", "24/7 Dukungan Teknis", "Paket Event Lengkap", "Modern Equipment".
    *   **Styling (umum):**
        *   **Untuk statistik (100+ Event Sukses):** Angka besar dengan teks deskriptif di bawahnya.
            *   Angka: `font-size: 3rem; font-weight: 700; color: var(--color-primary);`
            *   Deskripsi: `font-size: 1.125rem; font-weight: 500; color: var(--color-text-light);`
        *   **Untuk layanan/keunggulan (Paket Event Lengkap, Modern Equipment):**
            *   Mungkin dalam bentuk kartu dengan sedikit background (`rgba(255, 255, 255, 0.05)`) atau hanya dibingkai oleh padding dan margin.
            *   `h4` heading, body text.
            *   Jika menggunakan kartu: `border-radius: 8px; padding: 1.5rem;`
            *   Mungkin dilengkapi dengan ikon (tidak ada data).

4.  **Testimonial Cards:**
    *   **Deskripsi:** Kutipan dari klien dalam bagian "Kata Mereka".
    *   **Styling:**
        *   Blok terpisah dengan latar belakang yang sedikit berbeda dari background section (`rgba(255, 255, 255, 0.05)` atau `rgba(0, 194, 203, 0.1)`).
        *   `border-radius: 8px;`
        *   `padding: 1.5rem;`
        *   Teks kutipan: `font-style: italic; color: var(--color-text-light);`
        *   Nama klien: `font-weight: 600; color: var(--color-primary); margin-top: 1rem;`
        *   Jabatan: `font-size: 0.875rem; color: var(--color-text-light);`

---

## 7. PANDUAN VIBE CODING PROMPT

```text
Sebagai Web Developer Assistant yang ahli dalam front-end development, buatkan replika situs web Sabeela Rental berdasarkan data yang diberikan. Prioritaskan struktur HTML yang semantik dan CSS modern (Flexbox/Grid).

**Gaya Desain & Nuansa:**
*   **Tema:** Dark mode, Corporate Modern, High-Tech, Professional, Dynamic, dengan visual impact yang kuat.
*   **Estetika:** Bersih, kontras tinggi, spacing generous, border-radius subtle (8px umumnya), shadow minimal untuk kedalaman.

**Skema Warna (Gunakan CSS Custom Properties):**
*   `--color-primary: #00C2CB;` (Vibrant Teal/Cyan)
*   `--color-secondary: #3F51B5;` (Deeper Blue)
*   `--color-background: #1A1A1A;` (Dark Charcoal)
*   `--color-text-dark: #FFFFFF;` (White)
*   `--color-text-light: #E0E0E0;` (Light Gray)

**Tipografi:**
*   **Heading (H1-H4):** Font Family: `Poppins`, `sans-serif`. Weights: H1 (700), H2 (600), H3 (600), H4 (500).
*   **Body Text:** Font Family: `Roboto`, `sans-serif`. Weight: 400.
*   **Font Sizing Skala:** H1 (3rem), H2 (2.25rem), H3 (1.75rem), H4 (1.25rem), Body (1rem), Small (0.875rem).
*   **Line-height:** Heading (1.2-1.5), Body (1.6).

**Struktur Tata Letak:**
*   Full-width Hero section dengan gambar latar belakang dinamis (simulasikan carousel dengan beberapa gambar berbeda, fade-in/out).
*   Konten utama terpusat dalam `max-width: 1200px;` dengan `margin: 0 auto;`.
*   Gunakan Flexbox atau Grid untuk layout multi-kolom (2-kolom untuk statistik, 3-kolom untuk keunggulan, 2-kolom untuk testimoni).
*   Desain harus sepenuhnya responsif, menumpuk kolom secara vertikal pada perangkat mobile.

**Komponen Utama:**
1.  **Hero Banner:**
    *   Tinggi `100vh` atau `min-height: 700px;`.
    *   Gambar latar belakang `cover` dan `center`.
    *   Teks overlay (`h1`, `p`) di tengah atau rata kiri, warna `--color-text-dark`, bold.
    *   Teks "Ready for Event Production" di atas H1, `text-transform: uppercase`, `letter-spacing: 2px`.
2.  **CTA Button ("Download Katalog Paket"):**
    *   Styling seperti `<a class="btn-primary" href="#contact">...</a>`.
    *   Background `--color-primary`, Text `--color-text-dark`, `padding: 0.75rem 1.5rem`, `border-radius: 8px`, `font-weight: 600`.
    *   Hover effect: `background-color: var(--color-secondary);`.
3.  **Feature/Info Blocks:**
    *   **Statistik:** Angka besar (`color: var(--color-primary); font-size: 3rem;`) diikuti deskripsi teks.
    *   **Layanan/Keunggulan:** (`h4` headings) Bisa berupa kartu dengan `background-color: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 8px;` atau blok teks sederhana dengan margin.
4.  **Testimonial Cards:**
    *   `background-color: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 8px;`.
    *   Teks kutipan `font-style: italic;`.
    *   Nama klien `font-weight: 600; color: var(--color-primary);`.
    *   Jabatan `font-size: 0.875rem; color: var(--color-text-light);`.

**Konten:** Gunakan semua teks yang disediakan dalam HTML snippet. Untuk gambar latar belakang hero, gunakan URL yang diberikan secara berurutan sebagai bagian dari simulasi carousel.

Pastikan output adalah kode HTML, CSS (terpisah), dan JavaScript minimal jika diperlukan untuk carousel, dan siap untuk di-deploy.
```