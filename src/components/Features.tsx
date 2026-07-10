import React from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  Cloud, 
  ShoppingCart, 
  Pickaxe, 
  Sparkles, 
  Smartphone, 
  Mic, 
  Heart, 
  PlusCircle, 
  Gamepad2 
} from "lucide-react";
import { SERVER_FEATURES, SERVER_FEATURES_TITLE } from "../lib/constants";

// Helper function to render Lucide Icons dynamically
const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-6 w-6 text-primary-purple" />,
  Cloud: <Cloud className="h-6 w-6 text-primary-purple" />,
  ShoppingCart: <ShoppingCart className="h-6 w-6 text-primary-purple" />,
  Pickaxe: <Pickaxe className="h-6 w-6 text-primary-purple" />,
  Sparkles: <Sparkles className="h-6 w-6 text-primary-purple" />,
  Smartphone: <Smartphone className="h-6 w-6 text-primary-purple" />,
  Mic: <Mic className="h-6 w-6 text-primary-purple" />,
  Heart: <Heart className="h-6 w-6 text-primary-purple" />,
  PlusCircle: <PlusCircle className="h-6 w-6 text-primary-purple" />
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 bg-[#0D0E18]">
      {/* Radial soft background ambient glows */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-xs font-semibold text-primary-purple mb-4 uppercase tracking-wider">
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>{SERVER_FEATURES_TITLE.badgeText}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white tracking-wide text-glow">
            {SERVER_FEATURES_TITLE.title}
          </h2>
          <p className="text-sm text-[#BFC5D2] max-w-lg mx-auto mt-2 font-sans">
            {SERVER_FEATURES_TITLE.description}
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVER_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-6 rounded-2xl bg-[#171B27]/60 border border-[#202637] hover:border-primary-purple/40 hover:bg-[#202637]/40 transition-all duration-300"
            >
              {/* Card Inner Background Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-purple/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-start space-x-4">
                
                {/* Icon Container */}
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-purple/10 flex items-center justify-center border border-primary-purple/20 group-hover:bg-primary-purple group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  {iconMap[feature.icon] || <PlusCircle className="h-6 w-6 text-primary-purple" />}
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-purple transition-colors font-sans">
                    {feature.name}
                  </h3>
                  <p className="text-xs text-[#BFC5D2] leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
