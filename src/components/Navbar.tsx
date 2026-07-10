import { useState, useEffect, useRef } from "react";
import { Menu, X, Code, ChevronDown, Globe, MessageSquare, User } from "lucide-react";
import { IMAGES } from "../lib/constants";
import { DeveloperData } from "../types";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  onOpenDevModal: () => void;
  devData: DeveloperData;
}

export default function Navbar({ activeTab, setActiveTab, onOpenDevModal, devData }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devDropdownOpen, setDevDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDevDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Beranda", id: "beranda" },
    { name: "Informasi", id: "informasi" },
    { name: "Fitur", id: "fitur" },
    { name: "Tautan", id: "link" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 border-b ${
        scrolled
          ? "bg-[#0D0E18]/90 backdrop-blur-lg border-primary-purple/25 py-3 shadow-xl shadow-black/40"
          : "bg-[#0D0E18]/75 backdrop-blur-md border-[#202637]/50 py-4 shadow-md shadow-black/10"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => handleNavClick("beranda")}
            className="flex items-center space-x-3 cursor-pointer group select-none py-1"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-primary-purple rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
              <img
                src={IMAGES.logo}
                alt="MoonVeil Networks"
                referrerPolicy="no-referrer"
                className="relative h-10 w-10 lg:h-11 lg:w-11 rounded-lg object-cover border border-[#202637] transition-all duration-300 group-hover:border-primary-purple group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="font-heading text-2xl lg:text-3xl tracking-widest text-white group-hover:text-primary-purple transition-all duration-300">
              MOONVEIL
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center lg:space-x-4 space-x-2" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs lg:text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-white bg-primary-purple/15 border border-primary-purple/35"
                      : "text-[#BFC5D2] hover:text-white hover:bg-[#202637]/40 border border-transparent"
                  }`}
                  aria-label={`Buka halaman ${item.name}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Developer Button with Dropdown on Right */}
          <div className="hidden lg:flex items-center relative" ref={dropdownRef}>
            <button
              onClick={() => setDevDropdownOpen(!devDropdownOpen)}
              className="flex items-center space-x-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-primary-purple/10 border border-primary-purple/20 hover:bg-primary-purple/25 hover:border-primary-purple/40 text-primary-purple hover:text-white transition-all duration-300 cursor-pointer shadow-sm shadow-primary-purple/5 whitespace-nowrap"
              aria-label="Tampilkan opsi pengembang"
              aria-haspopup="true"
              aria-expanded={devDropdownOpen}
            >
              <Code className="h-4 w-4" />
              <span>Info Developer</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${devDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {devDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-[#171B27]/95 backdrop-blur-xl border border-primary-purple/25 p-2 rounded-2xl shadow-2xl space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <button
                  onClick={() => {
                    setDevDropdownOpen(false);
                    onOpenDevModal();
                  }}
                  className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-[#202637] transition-all text-left group"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary-purple/10 text-primary-purple group-hover:bg-primary-purple group-hover:text-white transition-all">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Profil Developer</p>
                    <p className="text-[10px] text-[#BFC5D2]">Tampilkan kontak WhatsApp & Portofolio</p>
                  </div>
                </button>

                <a
                  href={devData.community.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDevDropdownOpen(false)}
                  className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-[#202637] transition-all text-left group"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-success/10 text-success group-hover:bg-success group-hover:text-white transition-all">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{devData.community.name}</p>
                    <p className="text-[10px] text-[#BFC5D2]">Cari & lihat website server Minecraft lain</p>
                  </div>
                </a>

                <a
                  href={devData.community.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDevDropdownOpen(false)}
                  className="flex items-center space-x-3 w-full p-2.5 rounded-xl hover:bg-[#202637] transition-all text-left group"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#5865F2]/10 text-[#5865F2] group-hover:bg-[#5865F2] group-hover:text-white transition-all">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Discord Komunitas</p>
                    <p className="text-[10px] text-[#BFC5D2]">Bergabung ke komunitas developer MCPE</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Mobile Navigation Interface (Minimum 44px touch target) */}
          <div className="lg:hidden flex items-center space-x-2.5">
            <button
              onClick={onOpenDevModal}
              className="flex items-center justify-center h-11 w-11 rounded-xl bg-primary-purple/10 border border-primary-purple/20 text-primary-purple hover:text-white transition-all active:scale-95"
              aria-label="Tampilkan info pengembang situs web"
            >
              <Code className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center h-11 w-11 rounded-xl text-[#BFC5D2] hover:text-white hover:bg-[#171B27] border border-[#202637] transition-all active:scale-95"
              aria-expanded={mobileMenuOpen}
              aria-label="Buka navigasi menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-[#171B27]/95 backdrop-blur-xl border border-primary-purple/20 p-4 rounded-2xl shadow-2xl space-y-4 z-50">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left w-full px-4 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider font-semibold ${
                    isActive
                      ? "text-white bg-primary-purple/15 border-l-4 border-primary-purple"
                      : "text-[#BFC5D2] hover:text-white hover:bg-[#202637]"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Separator */}
          <div className="border-t border-[#202637] pt-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary-purple px-4 mb-2">Developer & Komunitas</p>
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDevModal();
                }}
                className="flex items-center space-x-3 w-full px-4 py-2.5 rounded-xl text-left hover:bg-[#202637] text-xs font-semibold text-[#BFC5D2]"
              >
                <User className="h-4 w-4 text-primary-purple" />
                <span>Profil Developer</span>
              </button>
              <a
                href={devData.community.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 w-full px-4 py-2.5 rounded-xl text-left hover:bg-[#202637] text-xs font-semibold text-[#BFC5D2]"
              >
                <Globe className="h-4 w-4 text-success" />
                <span>{devData.community.name} (Server Lain)</span>
              </a>
              <a
                href={devData.community.discord}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 w-full px-4 py-2.5 rounded-xl text-left hover:bg-[#202637] text-xs font-semibold text-[#BFC5D2]"
              >
                <MessageSquare className="h-4 w-4 text-[#5865F2]" />
                <span>Discord Komunitas</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
