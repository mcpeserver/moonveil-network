# 🌌 MoonVeil Networks - Premium Minecraft Landing Page (PRO Edition)

Landing Page premium, ultra-responsif, dan berkinerja tinggi untuk **MoonVeil Networks**, server Minecraft Crossplay Indonesia modern dengan fitur unggulan Survival Economy dan Skyblock.

Situs web ini dirancang dengan prinsip **Mobile-First Design** dan **Zero-Lag Architecture** untuk memastikan akses instan tanpa hambatan bagi seluruh pengguna, baik di perangkat seluler dengan bandwidth rendah maupun desktop berspesifikasi tinggi.

---

## 🚀 Fitur Unggulan & Optimasi

### 1. Mobile-First & Responsiveness Premium
* **Layout Anti-Tumpang Tindih**: Seluruh grid, flexbox, dan teks diprogram secara adaptif menggunakan Tailwind CSS. Komponen akan melipat, membungkus (wrap), dan mereduksi ukuran font secara otomatis pada perangkat seluler terkecil sekalipun (screen size < 320px).
* **Target Sentuh Ramah Seluler**: Seluruh tautan, tombol menu, dan kartu memiliki dimensi interaktif minimal **44x44 piksel** untuk mematuhi standar aksesibilitas WCAG AA.
* **Sticky Glassmorphic Header**: Bilah navigasi melayang (floating header) yang secara otomatis mengecil dan bertransformasi menjadi kapsul kaca buram (backdrop blur) bernuansa magis saat pengguna menggulir halaman ke bawah.

### 2. Zero-Lag Architecture (Anti-Lag & Hemat Memori)
* **Pemisahan Halaman Dinamis (Section-as-a-Page)**: Alih-alih merender seluruh konten server yang sangat padat secara bersamaan (yang sering menyebabkan lag rendering dan "flickering" saat bergulir di HP), situs ini menggunakan state router internal yang cepat. 
* Konten dipisahkan menjadi:
  1. `Beranda`: Visual cinematic, Quick Info grid, dan CTA interaktif.
  2. `Informasi & IP Server`: Panel salin IP instan, port Java & Bedrock, serta panduan kompatibilitas.
  3. `Fitur Gameplay`: Grid interaktif rincian fitur server.
  4. `Tautan Resmi & Komunitas`: Hub resmi Discord, Voting, Web, dan TikTok.
* Konten halaman yang tidak aktif secara otomatis di-unmount dari DOM untuk meminimalkan beban memori browser, menjaga scrolling tetap di **60 Frame per Second (FPS)**.
* **Animasi Ringan (Hardware-Accelerated)**: Transisi halaman menggunakan `motion/react` dengan animasi berbasis opacity dan transform 2D sederhana yang diproses langsung oleh GPU perangkat.

### 3. Integrasi & Keamanan Pengembang (Clean Code)
* **Pembersihan Header**: Area header dibersihkan secara total dari label teks statis yang berantakan atau tidak rapi (seperti "dev:ran dev"), menyisakan logo dan menu navigasi yang elegan.
* **Modular Codebase**: Komponen-komponen dipisahkan secara rapi ke file modular untuk memudahkan pengembangan jangka panjang dan mencegah token overhead.

---

## 🛠️ Detail Arsitektur Proyek

```
├── .github/
│   ├── ISSUE_TEMPLATE/       # Template laporan bug & request fitur otomatis
│   └── workflows/            # Pipeline integrasi berkelanjutan (CI/CD)
├── public/
│   ├── favicon.svg           # Logo vektor resolusi tinggi
│   ├── robots.txt            # Instruksi perayapan mesin pencari (SEO)
│   ├── sitemap.xml           # Peta situs web untuk Google/Bing Indexing
│   └── manifest.webmanifest  # Dukungan Progressive Web App (PWA) dasar
├── src/
│   ├── components/           # Komponen UI Terisolasi & Reusable
│   │   ├── CTA.tsx           # Banner ajakan bermain
│   │   ├── DeveloperModal.tsx# Profil developer dinamis dengan API
│   │   ├── Features.tsx      # Rincian gameplay
│   │   ├── Footer.tsx        # Navigasi bawah & informasi lisensi
│   │   ├── Hero.tsx          # Sambutan sinematik utama
│   │   ├── Navbar.tsx        # Sticky header dengan Glassmorphism
│   │   ├── OfficialLinks.tsx # Hub tautan media sosial
│   │   ├── QuickInfo.tsx     # Ringkasan server ringkas
│   │   └── ServerInfo.tsx    # Panel interaksi IP server & copy handler
│   ├── lib/
│   │   └── constants.ts      # Konstanta & Alamat URL konfig
│   ├── App.tsx               # State Router & Pengendali Navigasi Utama
│   ├── index.css             # Entry point global CSS dengan Tailwind CSS
│   └── types.ts              # Type-safety interface TypeScript
├── LICENSE                   # Lisensi open-source MIT
├── vercel.json               # Konfigurasi deployment hosting Vercel
└── vite.config.ts            # Konfigurasi bundling aset Vite
```

---

## 💻 Panduan Pengembangan Lokal

1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```

3. **Build untuk Produksi:**
   ```bash
   npm run build
   ```

---

## 🌐 SEO & Optimasi Crawler
* **Sitemap otomatis**: Diperbarui di `/sitemap.xml`.
* **Robots.txt**: Mengarahkan crawler secara optimal dan melarang pemindaian file yang tidak penting.
* **Metatags**: Lengkap dengan tag Open Graph untuk tampilan memukau saat tautan dibagikan di Discord, WhatsApp, atau Telegram.

---

## 📜 Lisensi
Proyek ini dirilis di bawah [Lisensi MIT](LICENSE).

---
_Situs web ini dikembangkan secara profesional dan tidak berafiliasi dengan Mojang Studios ataupun Microsoft._
