import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, Globe, ExternalLink, Users, MessageSquare, Briefcase } from "lucide-react";
import { DeveloperData } from "../types";
import { DEVELOPER_FALLBACK } from "../lib/constants";

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const [devData, setDevData] = useState<DeveloperData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(null);
      fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
        .then((res) => {
          if (!res.ok) throw new Error("Gagal mengambil data developer.");
          return res.json();
        })
        .then((data: DeveloperData) => {
          setDevData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.warn("Menggunakan data fallback lokal: ", err);
          setDevData(mapFallbackToDevData());
          setLoading(false);
        });

      // Accessibility: Focus trap/restore and keyboard controls
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      
      // Prevent scrolling of body when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  // Handle overlay click to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            ref={modalRef}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#171B27] border border-[#202637] box-glow text-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#202637] px-6 py-4 bg-[#0D0E18]/50">
              <h2 id="modal-title" className="font-heading text-3xl tracking-wide text-primary-purple">
                Developer Info
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-[#BFC5D2] hover:bg-[#202637] hover:text-white transition-colors duration-200"
                aria-label="Tutup modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {loading && (
                <div className="flex flex-col items-center justify-center py-10 space-y-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-purple border-t-transparent"></div>
                  <p className="text-sm text-[#BFC5D2]">Memuat data pengembang...</p>
                </div>
              )}

              {error && (
                <div className="text-center py-6 text-danger">
                  <p className="text-sm font-medium">{error}</p>
                  <button
                    onClick={() => {
                      setError(null);
                      setLoading(true);
                      fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
                        .then((res) => res.json())
                        .then((data) => setDevData(data))
                        .catch(() => setError("Gagal memuat ulang data."));
                    }}
                    className="mt-4 px-4 py-2 text-xs bg-[#202637] hover:bg-[#202637]/80 rounded-lg transition-colors duration-200 text-white font-medium"
                  >
                    Coba Lagi
                  </button>
                </div>
              )}

              {!loading && !error && devData && (
                <div className="space-y-6">
                  {/* Developer Name */}
                  <div className="text-center pb-4 border-b border-[#202637]/50">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-purple/10 text-primary-purple border border-primary-purple/20">
                      <Briefcase className="h-8 w-8" />
                    </div>
                    <p className="text-xs tracking-wider text-[#BFC5D2] uppercase font-semibold">Dikembangkan Oleh</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{devData.name}</h3>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-purple">Kontak & Portofolio</h4>
                    
                    <a
                      href={`https://wa.me/${devData.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#202637] hover:bg-[#202637]/80 transition-all duration-200 border border-[#202637]/50 group"
                      aria-label="Hubungi WhatsApp Developer"
                    >
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-success" />
                        <div>
                          <p className="text-xs text-[#BFC5D2]">WhatsApp</p>
                          <p className="text-sm font-medium text-white">{devData.contact.whatsapp}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-[#BFC5D2] group-hover:text-white transition-colors" />
                    </a>

                    <a
                      href={devData.website.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#202637] hover:bg-[#202637]/80 transition-all duration-200 border border-[#202637]/50 group"
                      aria-label="Buka Portfolio Developer"
                    >
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-primary-purple" />
                        <div>
                          <p className="text-xs text-[#BFC5D2]">Portofolio Website</p>
                          <p className="text-sm font-medium text-white truncate max-w-[180px]">{devData.website.portfolio}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-[#BFC5D2] group-hover:text-white transition-colors" />
                    </a>
                  </div>

                  {/* Community Info */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-purple">Komunitas</h4>
                    
                    <div className="p-4 rounded-xl bg-[#0D0E18]/80 border border-[#202637] space-y-3">
                      <div className="flex items-center space-x-2 text-white">
                        <Users className="h-5 w-5 text-primary-purple" />
                        <span className="font-semibold text-sm">{devData.community.name}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <a
                          href={devData.community.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1.5 p-2 rounded-lg bg-[#202637] hover:bg-[#202637]/80 text-xs text-white transition-all duration-200 border border-[#202637]/50"
                          aria-label="Kunjungi Website Komunitas"
                        >
                          <Globe className="h-3.5 w-3.5 text-primary-purple" />
                          <span>Website</span>
                        </a>

                        <a
                          href={devData.community.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1.5 p-2 rounded-lg bg-[#202637] hover:bg-[#202637]/80 text-xs text-white transition-all duration-200 border border-[#202637]/50"
                          aria-label="Gabung Discord Komunitas"
                        >
                          <MessageSquare className="h-3.5 w-3.5 text-primary-purple" />
                          <span>Discord</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[#202637]/50 bg-[#0D0E18]/30 px-6 py-4 text-center">
              <p className="text-[10px] text-[#BFC5D2]">
                Informasi ini merupakan detail pihak pengembang situs web dan tidak berafiliasi dengan pihak resmi server game.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
