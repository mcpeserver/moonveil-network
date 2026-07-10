import { motion } from "motion/react";
import { MessageSquare, ArrowDown, Info } from "lucide-react";
import { IMAGES, OFFICIAL_LINKS, HERO_SECTION, BRAND_INFO } from "../lib/constants";

export default function Hero({ setActiveTab }: { setActiveTab: (tabId: string) => void }) {
  const handleGoToInfo = () => {
    setActiveTab("informasi");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-14 md:pt-20 pb-12 md:pb-16 overflow-hidden px-4"
    >
      {/* Background Image with Dark Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center select-none"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
        role="img"
        aria-label={BRAND_INFO.logoDescription}
      >
        {/* Dark radial glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E18] via-[#0D0E18]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0D0E18]/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating Magic particles (CSS simulated) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute w-2 h-2 rounded-full bg-primary-purple/60 top-1/4 left-1/3 animate-ping" style={{ animationDuration: "3s" }}></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-violet-400/50 top-1/3 right-1/4 animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-[#A78BFA]/30 bottom-1/3 left-1/4 animate-bounce" style={{ animationDuration: "6s" }}></div>
        <div className="absolute w-2 h-2 rounded-full bg-primary-purple/40 bottom-1/4 right-1/3 animate-ping" style={{ animationDuration: "5s" }}></div>
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Logo with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Subtle logo outer halo */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-purple to-secondary-violet rounded-full blur opacity-40 animate-pulse"></div>
          <img
            src={IMAGES.logo}
            alt={BRAND_INFO.logoDescription}
            referrerPolicy="no-referrer"
            className="relative h-44 w-44 md:h-48 md:w-48 rounded-full object-cover border-4 border-[#202637] shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Big Minecraft Style Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl text-white tracking-widest text-glow mb-4"
        >
          {HERO_SECTION.title}
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-[#BFC5D2] max-w-2xl px-4 leading-relaxed font-sans mb-10"
        >
          {HERO_SECTION.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6"
        >
          <a
            href={OFFICIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-purple to-secondary-violet hover:from-primary-purple/90 hover:to-secondary-violet/90 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/20 cursor-pointer text-sm tracking-wider"
            aria-label="Gabung ke server Discord MoonVeil"
          >
            <MessageSquare className="h-5 w-5" />
            <span>{HERO_SECTION.primaryButtonText}</span>
          </a>

          <button
            onClick={handleGoToInfo}
            className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-[#171B27]/80 hover:bg-[#202637] border border-[#202637] text-[#BFC5D2] hover:text-white font-semibold transition-all duration-300 cursor-pointer text-sm tracking-wider"
            aria-label="Gulir ke informasi server"
          >
            <Info className="h-5 w-5 text-primary-purple" />
            <span>{HERO_SECTION.secondaryButtonText}</span>
          </button>
        </motion.div>

      </div>

      {/* Floating Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={handleGoToInfo}
        aria-label="Gulir ke bawah untuk informasi lebih lanjut"
        role="button"
      >
        <span className="text-[10px] text-[#BFC5D2] uppercase tracking-widest mb-2 font-semibold">
          {HERO_SECTION.scrollDownText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex items-center justify-center h-8 w-8 rounded-full border border-[#202637] bg-[#171B27]/40 text-primary-purple hover:bg-[#202637]"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
