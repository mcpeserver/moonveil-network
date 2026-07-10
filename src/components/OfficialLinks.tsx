import React from "react";
import { motion } from "motion/react";
import { MessageSquare, ThumbsUp, Globe, Video, ExternalLink, Link2 } from "lucide-react";
import { OFFICIAL_LINKS, OFFICIAL_LINKS_TITLE, OFFICIAL_LINKS_ITEMS } from "../lib/constants";

interface LinkCardProps {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;
  badgeText?: string;
}

const iconMap: Record<string, (colorClass: string) => React.ReactNode> = {
  MessageSquare: (color) => <MessageSquare className={`h-6 w-6`} style={{ color }} />,
  ThumbsUp: (color) => <ThumbsUp className={`h-6 w-6`} style={{ color }} />,
  Globe: (color) => <Globe className={`h-6 w-6`} style={{ color }} />,
  Video: (color) => <Video className={`h-6 w-6`} style={{ color }} />,
};

const LinkCard: React.FC<LinkCardProps> = ({ name, url, description, icon, accentClass, badgeText }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#171B27]/80 border border-[#202637] hover:border-primary-purple/50 hover:bg-[#202637]/60 transition-all duration-300 group shadow-lg"
      aria-label={`Buka tautan resmi ${name}`}
    >
      {/* Decorative Brand Highlight Gradient */}
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${accentClass}`}></div>

      <div className="space-y-4">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 rounded-xl bg-[#202637]/80 border border-[#202637]/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          {badgeText ? (
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-primary-purple font-semibold uppercase tracking-wider">
              {badgeText}
            </span>
          ) : (
            <ExternalLink className="h-4 w-4 text-[#BFC5D2] group-hover:text-white transition-colors" />
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary-purple transition-colors font-sans">
            {name}
          </h3>
          <p className="text-xs text-[#BFC5D2] mt-1.5 leading-relaxed font-sans">
            {description}
          </p>
        </div>
      </div>

      {/* Footer link cue */}
      <div className="mt-6 flex items-center justify-between text-xs font-semibold text-primary-purple group-hover:text-white transition-colors">
        <span>Buka Tautan</span>
        <span className="h-0.5 w-0 bg-primary-purple group-hover:w-12 transition-all duration-300"></span>
      </div>
    </motion.a>
  );
}

export default function OfficialLinks() {
  return (
    <section id="official-links" className="relative py-24 px-4 bg-[#0D0E18]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-xs font-semibold text-primary-purple mb-4 uppercase tracking-wider">
            <Link2 className="h-3.5 w-3.5" />
            <span>{OFFICIAL_LINKS_TITLE.badgeText}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white tracking-wide text-glow">
            {OFFICIAL_LINKS_TITLE.title}
          </h2>
          <p className="text-sm text-[#BFC5D2] max-w-lg mx-auto mt-2 font-sans">
            {OFFICIAL_LINKS_TITLE.description}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {OFFICIAL_LINKS_ITEMS.map((link) => {
            // Retrieve URL dynamically using urlKey reference
            const url = OFFICIAL_LINKS[link.urlKey as keyof typeof OFFICIAL_LINKS] || "#";
            const iconElement = iconMap[link.icon] 
              ? iconMap[link.icon](link.iconColor) 
              : <Globe className="h-6 w-6 text-primary-purple" />;

            return (
              <LinkCard
                key={link.name}
                name={link.name}
                url={url}
                description={link.description}
                icon={iconElement}
                accentClass={link.accentClass}
                badgeText={link.badgeText}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
