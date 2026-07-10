import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import ServerInfo from "./components/ServerInfo";
import Features from "./components/Features";
import OfficialLinks from "./components/OfficialLinks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DeveloperModal from "./components/DeveloperModal";
import { DeveloperData } from "./types";
import { DEVELOPER_FALLBACK, IMAGES, BRAND_INFO, HERO_SECTION } from "./lib/constants";

const mapFallbackToDevData = (): DeveloperData => ({
  name: DEVELOPER_FALLBACK.name,
  contact: {
    phone: DEVELOPER_FALLBACK.whatsapp,
    whatsapp: DEVELOPER_FALLBACK.whatsapp
  },
  community: {
    name: DEVELOPER_FALLBACK.communityName,
    website: DEVELOPER_FALLBACK.communityWebsite,
    discord: DEVELOPER_FALLBACK.communityDiscord
  },
  website: {
    portfolio: DEVELOPER_FALLBACK.portfolio
  }
});

export default function App() {
  const [devData, setDevData] = useState<DeveloperData>(mapFallbackToDevData());
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("beranda");

  // Fetch developer configuration dynamically on mount
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat config pengembang.");
        return res.json();
      })
      .then((data: DeveloperData) => {
        // Ensure data from API has the correct structure before setting
        if (data && data.name) {
          setDevData(data);
        }
      })
      .catch((err) => {
        console.warn("Gagal mengambil data live API developer, menggunakan fallback lokal:", err);
        // devData is already initialized with mapFallbackToDevData(), so we keep it
      });
  }, []);

  // Dynamic document metadata (Favicon, SEO, and OG Share Cards) synchronization
  useEffect(() => {
    // 1. Update Title
    document.title = `${BRAND_INFO.name} | ${BRAND_INFO.tagline}`;

    // 2. Update Favicon
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", IMAGES.logo);
    }

    // 3. Update SEO Description
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", `Landing Page premium untuk server Minecraft Indonesia bernama ${BRAND_INFO.name}. ${HERO_SECTION.subtitle}`);
    }

    // 4. Update Open Graph tags (WhatsApp, Facebook, Discord, Telegram, etc.)
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", `${BRAND_INFO.name} | ${BRAND_INFO.tagline}`);
    }
    const ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc) {
      ogDesc.setAttribute("content", HERO_SECTION.subtitle);
    }
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", IMAGES.heroBg);
    }

    // 5. Update Twitter tags
    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${BRAND_INFO.name} | ${BRAND_INFO.tagline}`);
    }
    const twitterDesc = document.querySelector("meta[name='twitter:description']");
    if (twitterDesc) {
      twitterDesc.setAttribute("content", HERO_SECTION.subtitle);
    }
    const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute("content", IMAGES.heroBg);
    }

    // 6. Update JSON-LD structured data dynamically
    const jsonLdScript = document.querySelector("script[type='application/ld+json']");
    if (jsonLdScript) {
      try {
        const data = JSON.parse(jsonLdScript.textContent || "{}");
        if (data && data["@graph"]) {
          data["@graph"].forEach((item: any) => {
            if (item["@type"] === "Organization") {
              item.name = BRAND_INFO.name;
              item.logo = IMAGES.logo;
            }
            if (item["@type"] === "WebSite") {
              item.name = BRAND_INFO.name;
              item.description = `${BRAND_INFO.name} ${BRAND_INFO.tagline}`;
            }
            if (item["@type"] === "GameServer") {
              item.name = `${BRAND_INFO.name} Minecraft Server`;
            }
          });
          jsonLdScript.textContent = JSON.stringify(data, null, 2);
        }
      } catch (e) {
        console.error("Gagal menyinkronkan data JSON-LD:", e);
      }
    }
  }, []);

  // Scroll to top when active tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0D0E18] text-white selection:bg-primary-purple/30 selection:text-white flex flex-col justify-between">
      <div>
        {/* Header / Navbar - Sticky with scroll effect */}
        <Navbar activeTab={activeTab} setActiveTab={handleTabChange} onOpenDevModal={() => setIsDevModalOpen(true)} devData={devData} />

        {/* Main Content Area with Page Transitions */}
        <main id="main-content" className="pt-2 sm:pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {activeTab === "beranda" && (
                <>
                  <Hero setActiveTab={handleTabChange} />
                  <QuickInfo />
                  <CTA />
                </>
              )}

              {activeTab === "informasi" && (
                <>
                  <ServerInfo />
                  <CTA />
                </>
              )}

              {activeTab === "fitur" && (
                <>
                  <Features />
                  <CTA />
                </>
              )}

              {activeTab === "link" && (
                <>
                  <OfficialLinks />
                  <CTA />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer Block */}
      <Footer devData={devData} activeTab={activeTab} setActiveTab={handleTabChange} onOpenDevModal={() => setIsDevModalOpen(true)} />

      {/* Developer Profile Modal */}
      <DeveloperModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />
    </div>
  );
}
