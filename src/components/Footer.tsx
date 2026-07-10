import { useEffect, useState } from "react";
import { IMAGES } from "../lib/constants";
import { DeveloperData } from "../types";
import { Phone, Globe, MessageSquare, Heart } from "lucide-react";

interface FooterProps {
  devData: DeveloperData | null;
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  onOpenDevModal: () => void;
}

export default function Footer({ devData, activeTab, setActiveTab, onOpenDevModal }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0D0E18] border-t border-[#202637]/60 pt-20 pb-8 px-4 font-sans text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          
          {/* Column 1: Logo & Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick("beranda")}>
              <img
                src={IMAGES.logo}
                alt="MoonVeil Networks Emblem"
                referrerPolicy="no-referrer"
                className="h-12 w-12 rounded-xl object-cover border border-[#202637]"
                loading="lazy"
              />
              <span className="font-heading text-3xl tracking-widest text-white group-hover:text-primary-purple transition-colors">
                MOONVEIL
              </span>
            </div>
            
            <p className="text-xs text-[#BFC5D2] max-w-sm leading-relaxed">
              Jaringan server Minecraft modern Indonesia yang menawarkan pengalaman bermain Survival Economy dan Skyblock terbaik dengan fitur-fitur mutakhir.
            </p>

            <p className="text-xs text-[#BFC5D2]/70 font-semibold">
              &copy; 2026 MoonVeil Networks. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-purple">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick("beranda")}
                  className="text-[#BFC5D2] hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("informasi")}
                  className="text-[#BFC5D2] hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Informasi & IP Server
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("fitur")}
                  className="text-[#BFC5D2] hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Fitur Gameplay
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("link")}
                  className="text-[#BFC5D2] hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Tautan Resmi & Komunitas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Developer Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-purple">
              Developer & Komunitas
            </h4>

            {devData ? (
              <div className="space-y-4">
                {/* Developer Profile Section */}
                <div className="space-y-2">
                  <p className="text-xs text-white font-medium flex items-center space-x-1">
                    <span>Developer by</span>
                    <button 
                      onClick={onOpenDevModal}
                      className="text-primary-purple hover:underline font-bold focus:outline-none ml-1 cursor-pointer transition-colors hover:text-white text-left"
                    >
                      {devData.name}
                    </button>
                  </p>

                  {/* Developer Contacts */}
                  <div className="flex flex-col space-y-2 text-xs">
                    <a
                      href={devData.website.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#BFC5D2] hover:text-white transition-colors w-fit group"
                    >
                      <Globe className="h-4 w-4 text-primary-purple/70 group-hover:text-primary-purple transition-colors" />
                      <span>Portfolio Web</span>
                    </a>

                    <a
                      href={`https://wa.me/${devData.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#BFC5D2] hover:text-white transition-colors w-fit group"
                    >
                      <Phone className="h-4 w-4 text-success/80 group-hover:text-success transition-colors" />
                      <span>WhatsApp ({devData.contact.whatsapp})</span>
                    </a>
                  </div>
                </div>

                {/* Developer Community Section (MCPEServer Indonesia) */}
                {devData.community && (
                  <div className="pt-3 border-t border-[#202637]/40 space-y-2">
                    <p className="text-xs text-white font-semibold flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-success"></span>
                      <span>{devData.community.name}</span>
                    </p>

                    <p className="text-[11px] text-[#BFC5D2] leading-relaxed max-w-sm">
                      Kunjungi portal resmi komunitas kami untuk menjelajahi daftar lengkap serta website server-server game Minecraft PE menarik lainnya.
                    </p>
                    
                    <div className="flex flex-col space-y-2 pt-1">
                      <a
                        href={devData.community.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#BFC5D2] hover:text-white transition-colors text-xs w-fit group"
                      >
                        <Globe className="h-4 w-4 text-success/80 group-hover:text-success transition-colors" />
                        <span className="underline decoration-success/35 group-hover:decoration-success">Lihat Website Server Lain</span>
                      </a>

                      <a
                        href={devData.community.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#BFC5D2] hover:text-white transition-colors text-xs w-fit group"
                      >
                        <MessageSquare className="h-4 w-4 text-[#5865F2]/80 group-hover:text-[#5865F2] transition-colors" />
                        <span className="underline decoration-[#5865F2]/35 group-hover:decoration-[#5865F2]">Discord Komunitas</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Loading Skeleton */
              <div className="space-y-2 animate-pulse">
                <div className="h-4 bg-[#202637] rounded w-1/2"></div>
                <div className="h-3 bg-[#202637] rounded w-2/3"></div>
                <div className="h-3 bg-[#202637] rounded w-3/4"></div>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Disclaimer and Attribution */}
        <div className="border-t border-[#202637]/40 pt-8 text-center space-y-2">
          <p className="text-[10px] text-[#BFC5D2]/60 max-w-2xl mx-auto leading-relaxed">
            Website ini dikembangkan secara independen dan tidak berafiliasi dengan Mojang Studios maupun MoonVeil Networks.
          </p>
          <p className="text-[9px] text-[#BFC5D2]/40 flex items-center justify-center space-x-1">
            <span>Crafted with</span>
            <Heart className="h-2.5 w-2.5 text-danger animate-pulse fill-danger" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
