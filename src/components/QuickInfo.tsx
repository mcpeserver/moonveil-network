import React from "react";
import { Shield, Cloud, Smartphone, Globe } from "lucide-react";
import { motion } from "motion/react";
import { QUICK_INFO_CARDS } from "../lib/constants";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
};

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, subtitle, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#171B27]/80 border border-[#202637] hover:border-primary-purple/40 hover:bg-[#202637]/50 transition-all duration-300 group shadow-lg"
    >
      {/* Background radial soft light hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Card Icon Header */}
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-purple/10 text-primary-purple border border-primary-purple/20 group-hover:bg-primary-purple group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Card Title & Subtitle */}
        <p className="text-[10px] uppercase tracking-widest text-primary-purple font-bold mb-1">
          {subtitle}
        </p>
        <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-primary-purple transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-[#BFC5D2] leading-relaxed font-sans">
          {description}
        </p>
      </div>

      {/* Decorative arrow or accent */}
      <div className="relative z-10 mt-6 flex items-center justify-end">
        <div className="h-1.5 w-1.5 rounded-full bg-primary-purple/30 group-hover:bg-primary-purple group-hover:w-8 transition-all duration-300"></div>
      </div>
    </motion.div>
  );
}

export default function QuickInfo() {
  return (
    <section className="relative py-16 px-4 bg-[#0D0E18]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_INFO_CARDS.map((card, i) => (
            <InfoCard
              key={card.title}
              icon={iconMap[card.icon] || <Globe className="h-6 w-6" />}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
