import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Server, ShieldCheck, Laptop, Smartphone } from "lucide-react";
import { SERVER_IP, SERVER_PORT_JAVA, SERVER_PORT_BEDROCK, SERVER_VERSION, SERVER_INFO_SECTION } from "../lib/constants";

export default function ServerInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Gagal menyalin IP: ", err);
    }
  };

  return (
    <section id="server-info" className="relative py-24 px-4 bg-[#0D0E18]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-xs font-semibold text-primary-purple mb-4 uppercase tracking-wider">
            <Server className="h-3.5 w-3.5" />
            <span>{SERVER_INFO_SECTION.badgeText}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white tracking-wide text-glow">
            {SERVER_INFO_SECTION.title}
          </h2>
          <p className="text-sm text-[#BFC5D2] max-w-lg mx-auto mt-2 font-sans">
            {SERVER_INFO_SECTION.description}
          </p>
        </div>

        {/* Premium Connectivity Card */}
        <div className="rounded-3xl bg-[#171B27]/90 border border-[#202637] p-8 md:p-10 box-glow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* IP Connection Block (Left/Main side) */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-purple">
                  {SERVER_INFO_SECTION.ipLabel}
                </span>
                <div className="mt-2 flex items-center bg-[#0D0E18] border border-[#202637] rounded-2xl p-1 pl-4 focus-within:border-primary-purple/60 transition-colors">
                  <span className="text-sm md:text-lg font-mono font-bold text-white select-all break-all pr-4">
                    {SERVER_IP}
                  </span>
                  
                  <button
                    onClick={handleCopyIp}
                    className="ml-auto flex items-center justify-center space-x-2 px-5 py-3 md:py-3.5 rounded-xl bg-primary-purple text-white hover:bg-primary-purple/90 transition-all duration-200 cursor-pointer font-semibold text-sm shrink-0"
                    aria-label={`Salin alamat IP Server ${SERVER_IP}`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-white" />
                        <span className="hidden sm:inline">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span className="hidden sm:inline">Salin IP</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Supported Editions with Badges */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#BFC5D2]">
                  {SERVER_INFO_SECTION.editionsLabel}
                </span>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#202637] border border-[#202637]/50 text-white text-xs font-medium">
                    <Laptop className="h-4 w-4 text-primary-purple" />
                    <span>{SERVER_INFO_SECTION.editions[0].label}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#202637] border border-[#202637]/50 text-white text-xs font-medium">
                    <Smartphone className="h-4 w-4 text-primary-purple" />
                    <span>{SERVER_INFO_SECTION.editions[1].label}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ports and Compatibility Details (Right side) */}
            <div className="md:col-span-5 h-full flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#202637]/60 pt-6 md:pt-0 md:pl-8 space-y-4">
              
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-purple">
                  {SERVER_INFO_SECTION.portsLabel}
                </span>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-[#202637]/40 pb-2">
                    <span className="text-[#BFC5D2] font-medium">{SERVER_INFO_SECTION.javaPortLabel}</span>
                    <span className="font-mono text-white font-semibold">{SERVER_PORT_JAVA}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-[#202637]/40 pb-2">
                    <span className="text-[#BFC5D2] font-medium">{SERVER_INFO_SECTION.bedrockPortLabel}</span>
                    <span className="font-mono text-white font-semibold">{SERVER_PORT_BEDROCK}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#BFC5D2] font-medium">{SERVER_INFO_SECTION.versionLabel}</span>
                    <span className="text-success font-medium flex items-center space-x-1">
                      <ShieldCheck className="h-4 w-4 text-success" />
                      <span>{SERVER_VERSION}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Server Connection Instruction helper */}
              <div 
                className="p-3.5 rounded-xl bg-[#0D0E18]/60 border border-[#202637] text-[11px] text-[#BFC5D2] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: SERVER_INFO_SECTION.bedrockTipHtml }}
              />

            </div>

          </div>
        </div>

      </div>

      {/* Elegant Toast Alert (Fades in/out) */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2 bg-gradient-to-r from-primary-purple to-secondary-violet px-6 py-3.5 rounded-2xl border border-primary-purple/30 text-white shadow-xl shadow-primary-purple/10 text-sm font-semibold"
            role="alert"
          >
            <Check className="h-5 w-5 bg-white/20 p-0.5 rounded-full" />
            <span>{SERVER_INFO_SECTION.copySuccessText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
