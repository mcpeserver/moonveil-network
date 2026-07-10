// ============================================================================
// MOONVEIL NETWORKS - MASTER CONFIGURATION & CONSTANTS
// ============================================================================
// Edit this file to easily update texts, images, links, or features without
// modifying any React components.
// ============================================================================

// ----------------------------------------------------------------------------
// 1. SERVER CONNECTIVITY CONFIG
// ----------------------------------------------------------------------------
export const SERVER_IP = "play.moon-veil.net";
export const SERVER_PORT_JAVA = "Default (25565)";
export const SERVER_PORT_BEDROCK = "Default (19132)";
export const SERVER_VERSION = "Terbaru (Crossplay)";

// ----------------------------------------------------------------------------
// 2. BRAND & IDENTITIES
// ----------------------------------------------------------------------------
export const BRAND_INFO = {
  name: "MoonVeil Networks",
  shortName: "MOONVEIL",
  tagline: "Server Minecraft Crossplay Indonesia",
  logoDescription: "MoonVeil Networks Emblem",
  footerCopyright: "© 2026 MoonVeil Networks. Hak Cipta Dilindungi.",
  footerDisclaimer: "Situs web ini dikembangkan secara independen dan tidak berafiliasi dengan Mojang Studios maupun Microsoft.",
};

// ----------------------------------------------------------------------------
// 3. SOCIALS & REDIRECT LINKS
// ----------------------------------------------------------------------------
export const OFFICIAL_LINKS = {
  discord: "https://discord.gg/moonveil-network",
  vote: "https://vote.moon-veil.net",
  website: "https://web.moon-veil.net",
  tiktok: "https://vt.tiktok.com/ZSCJcAWvL/",
};

// ----------------------------------------------------------------------------
// 4. HERO SECTION
// ----------------------------------------------------------------------------
export const HERO_SECTION = {
  title: "MoonVeil Networks",
  subtitle: "Server Minecraft Crossplay dengan Survival Economy, Skyblock, dan berbagai fitur menarik untuk dimainkan bersama.",
  primaryButtonText: "Gabung Discord",
  secondaryButtonText: "Lihat Informasi",
  scrollDownText: "Scroll Down",
};

// ----------------------------------------------------------------------------
// 5. QUICK INFO SECTION (BERANDA)
// ----------------------------------------------------------------------------
export const QUICK_INFO_CARDS = [
  {
    icon: "Globe", // String key corresponding to Lucide icon
    title: "Crossplay",
    subtitle: "Multi-Platform",
    description: "Terhubung secara bebas dan mulus dengan seluruh pemain Minecraft di manapun berada tanpa batasan perangkat."
  },
  {
    icon: "Smartphone",
    title: "Java & Bedrock",
    subtitle: "Universal Access",
    description: "Dukungan penuh untuk pemain dari PC (Java Edition) maupun Mobile/Konsol (Bedrock Edition) untuk bermain bersama."
  },
  {
    icon: "Shield",
    title: "Survival Economy",
    subtitle: "Classic & Modern",
    description: "Pengalaman survival murni yang ditingkatkan dengan ekonomi pasar, sistem perdagangan, dan keamanan klaim wilayah."
  },
  {
    icon: "Cloud",
    title: "Skyblock",
    subtitle: "Floating Island",
    description: "Kembangkan pulaumu sendiri dari nol di langit tinggi dan kuasai industri mekanik seru berbasis Slimefun."
  }
];

// ----------------------------------------------------------------------------
// 6. SERVER INFO SECTION (INFORMASI)
// ----------------------------------------------------------------------------
export const SERVER_INFO_SECTION = {
  badgeText: "Konektivitas",
  title: "Server Information",
  description: "Gunakan informasi di bawah ini untuk menghubungkan game Minecraft Anda langsung ke jaringan kami.",
  ipLabel: "Alamat IP Utama",
  copySuccessText: "IP berhasil disalin",
  editionsLabel: "Edisi yang Didukung",
  editions: [
    { type: "java", label: "Java Edition (PC)" },
    { type: "bedrock", label: "Bedrock Edition (Mobile/Console)" }
  ],
  portsLabel: "Rincian Port Server",
  javaPortLabel: "Port Java",
  bedrockPortLabel: "Port Bedrock",
  versionLabel: "Versi Kompatibel",
  bedrockTipHtml: "<strong>Tip Bedrock:</strong> Tambahkan server baru dengan IP <code class=\"font-mono text-white\">play.moon-veil.net</code> dan simpan port di <code class=\"font-mono text-white\">19132</code> (Default)."
};

// ----------------------------------------------------------------------------
// 7. FEATURES LIST (FITUR)
// ----------------------------------------------------------------------------
export const SERVER_FEATURES_TITLE = {
  badgeText: "Gameplay & Fitur",
  title: "Fitur Utama Server",
  description: "Seluruh fitur di bawah ini dirancang khusus untuk memastikan pengalaman bermain Minecraft yang stabil, modern, dan menyenangkan."
};

export const SERVER_FEATURES = [
  {
    name: "Survival Economy",
    description: "Nikmati petualangan survival klasik dengan ekonomi yang stabil, sistem jual-beli, dan klaim wilayah untuk melindungi karyamu.",
    icon: "Shield"
  },
  {
    name: "Skyblock Slimefun",
    description: "Mulai dari pulau terapung kecil dan kembangkan teknologi magis serta mesin industri menggunakan addon Slimefun yang seru.",
    icon: "Cloud"
  },
  {
    name: "Shop",
    description: "Sistem toko dalam server yang komprehensif untuk membeli bahan bangunan, dekorasi, hingga peralatan langka.",
    icon: "ShoppingCart"
  },
  {
    name: "Mines",
    description: "Area pertambangan khusus yang diperbarui berkala untuk mengumpulkan sumber daya mineral penting bagi kelangsungan bermain.",
    icon: "Pickaxe"
  },
  {
    name: "Custom Enchant",
    description: "Tingkatkan senjata dan zirahmu melampaui batas vanilla dengan berbagai pilihan sihir kustom yang unik dan kuat.",
    icon: "Sparkles"
  },
  {
    name: "Crossplay",
    description: "Bermain bersama teman-temanmu secara bebas tanpa batasan platform. Mendukung penuh Java Edition dan Bedrock Edition.",
    icon: "Smartphone"
  },
  {
    name: "Voice Chat",
    description: "Komunikasi lebih hidup dan seru menggunakan fitur obrolan suara langsung di dalam game berbasis jarak (proximity voice).",
    icon: "Mic"
  },
  {
    name: "Pets",
    description: "Miliki pendamping setia berupa hewan peliharaan lucu dan unik yang akan menemanimu menjelajahi dunia MoonVeil.",
    icon: "Heart"
  },
  {
    name: "And More Feature",
    description: "Banyak fitur kustom menarik lainnya yang dirancang khusus untuk meningkatkan keseruan bermainmu setiap hari.",
    icon: "PlusCircle"
  }
];

// ----------------------------------------------------------------------------
// 8. OFFICIAL LINKS SECTION (TAUTAN)
// ----------------------------------------------------------------------------
export const OFFICIAL_LINKS_TITLE = {
  badgeText: "Tautan Resmi",
  title: "Official Links",
  description: "Hubungi kami dan kembangkan jaringan Anda melalui media dan platform resmi MoonVeil Networks."
};

export const OFFICIAL_LINKS_ITEMS = [
  {
    name: "Discord",
    urlKey: "discord", // Key reference in OFFICIAL_LINKS
    description: "Bergabunglah dengan komunitas server kami untuk mengobrol, mendapatkan pengumuman terbaru, dan berinteraksi dengan ribuan player aktif.",
    icon: "MessageSquare",
    iconColor: "#5865F2",
    accentClass: "from-[#5865F2] to-[#404EED]",
    badgeText: "Komunitas"
  },
  {
    name: "Vote Server",
    urlKey: "vote",
    description: "Dukung server MoonVeil Networks setiap hari dengan memberikan suara di portal voting resmi kami untuk mendapatkan hadiah menarik dalam game.",
    icon: "ThumbsUp",
    iconColor: "#F59E0B",
    accentClass: "from-warning to-[#D97706]"
  },
  {
    name: "TikTok",
    urlKey: "tiktok",
    description: "Ikuti akun TikTok resmi kami untuk melihat klip cuplikan permainan yang seru, tips, pembaruan rilis, dan video kreatif dari server.",
    icon: "Video",
    iconColor: "#FE2C55",
    accentClass: "from-[#FE2C55] to-[#25F4EE]"
  }
];

// ----------------------------------------------------------------------------
// 9. CALL TO ACTION SECTION (CTA)
// ----------------------------------------------------------------------------
export const CTA_SECTION = {
  title: "Mulai Petualanganmu di MoonVeil Networks",
  description: "Bergabung sekarang dan nikmati pengalaman bermain Minecraft dengan berbagai fitur menarik bersama komunitas MoonVeil.",
  discordBtnLabel: "Gabung Discord",
  voteBtnLabel: "Vote Server",
  webBtnLabel: "Website"
};

// ----------------------------------------------------------------------------
// 10. DEVELOPER PROFILE FALLBACK
// ----------------------------------------------------------------------------
export const DEVELOPER_FALLBACK = {
  name: "Ardiansyah (dev:ran)",
  role: "Lead Full-Stack Web Developer",
  whatsapp: "62895325852579",
  portfolio: "https://ran-dev.my.id",
  communityName: "MCPEServer Indonesia",
  communityWebsite: "https://mcpeserver.my.id",
  communityDiscord: "https://discord.gg/mcpeserver"
};

// ----------------------------------------------------------------------------
// 11. VISUAL ASSETS (IMAGES)
// ----------------------------------------------------------------------------
import logoPath from "../assets/images/moonveil_logo_1783689490191.jpg";
import heroBgPath from "../assets/images/moonveil_hero_bg_1783689504570.jpg";

export const IMAGES = {
  logo: logoPath,
  heroBg: heroBgPath,
};
