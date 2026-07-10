import { motion } from "motion/react";
import { MessageSquare, ThumbsUp, Globe } from "lucide-react";
import { OFFICIAL_LINKS, CTA_SECTION } from "../lib/constants";

export default function CTA() {
  return (
    <section className="relative py-24 px-4 bg-[#0D0E18] overflow-hidden">
      {/* Outer ambient glow circles */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-purple/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Banner container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#171B27] to-[#202637] border border-[#202637] p-8 md:p-14 text-center box-glow">
          
          {/* Internal ambient color burst */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-purple/20 rounded-full blur-[60px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary-violet/20 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Title */}
            <h2 className="font-heading text-4xl md:text-6xl text-white tracking-wide text-glow">
              {CTA_SECTION.title}
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-[#BFC5D2] leading-relaxed max-w-2xl mx-auto font-sans">
              {CTA_SECTION.description}
            </p>

            {/* CTA Buttons row */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              
              <a
                href={OFFICIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-purple to-secondary-violet hover:from-primary-purple/95 hover:to-secondary-violet/95 text-white font-semibold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/20 cursor-pointer"
                aria-label="Gabung ke Discord MoonVeil"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{CTA_SECTION.discordBtnLabel}</span>
              </a>

              <a
                href={OFFICIAL_LINKS.vote}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-[#202637] hover:bg-[#202637]/80 border border-primary-purple/20 hover:border-primary-purple/40 text-[#BFC5D2] hover:text-white font-semibold text-sm tracking-wider transition-all duration-300 cursor-pointer"
                aria-label="Buka portal Vote Server MoonVeil"
              >
                <ThumbsUp className="h-4 w-4 text-warning" />
                <span>{CTA_SECTION.voteBtnLabel}</span>
              </a>

              <a
                href={OFFICIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-transparent hover:bg-[#202637]/40 border border-[#202637] text-[#BFC5D2] hover:text-white font-semibold text-sm tracking-wider transition-all duration-300 cursor-pointer"
                aria-label="Kunjungi Website MoonVeil"
              >
                <Globe className="h-4 w-4 text-primary-purple" />
                <span>{CTA_SECTION.webBtnLabel}</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
