import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Waves, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const HeroSection: React.FC = () => {
  const fullText = "Vive a un paso de la playa";
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#162842]">
      {/* Background Beach / Coast Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
          alt="Terrenos de Campo y Playa en Puerto Malabrigo - Plus Inmobiliaria" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#162842] via-[#162842]/55 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Main Title con Typewriter */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-6 min-h-[2.2em]">
              <span>{displayedText}</span>
              <span 
                className={`inline-block w-[3px] sm:w-[4px] h-7 sm:h-11 lg:h-14 bg-[#F5921E] ml-1.5 align-middle transition-opacity duration-300 ${
                  isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
                }`} 
              />
            </h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              <span className="text-[#F5921E] font-bold">Empresa líder y pionera en Puerto Malabrigo</span> con más de 8 años de experiencia en terrenos de campo y playa. Condominios con Club House, 100% independizados y crédito directo.
            </motion.p>

            {/* Actions Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a 
                href="#deals"
                className="bg-[#F5921E] hover:bg-[#E67E10] text-white text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#F5921E]/30 flex items-center gap-2.5 hover:scale-102"
              >
                <span>Ver Lotes y Terrenos</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Secondary WhatsApp CTA */}
              <a 
                href="https://wa.me/51987654321?text=Hola,%20quisiera%20asesoria%20sobre%20los%20lotes%20en%20Puerto%20Malabrigo%20con%20Plus%20Inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-[#F5921E]/50 rounded-full px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold transition-all flex items-center gap-2.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5921E]" />
                <span>Hablar con Asesor</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Modern Glassmorphic Brand Emblem (Solo Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-5 justify-center relative"
          >
            {/* Ambient Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F5921E]/25 via-[#233D5B]/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Glassmorphic Brand Showcase Card */}
            <div className="w-full max-w-md bg-white/[0.08] backdrop-blur-xl border border-white/15 hover:border-[#F5921E]/40 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/40 transition-all duration-500 flex flex-col items-center text-center">
              
              {/* Top Vector Logo */}
              <div className="py-4 px-6 rounded-2xl bg-white/[0.05] border border-white/10 w-full flex items-center justify-center mb-6 shadow-inner">
                <Logo variant="light" size="lg" className="scale-110" />
              </div>

              {/* Tagline & Badges */}
              <div className="w-full space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#F5921E] uppercase tracking-wider">
                  <Waves className="w-4 h-4" />
                  <span>Puerto Malabrigo • Chicama</span>
                </div>

                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Líderes en proyectos de campo y playa con Club House, piscina y crédito directo hasta 48 meses.
                </p>

                {/* 2 Quick Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-left">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-lg font-extrabold text-[#F5921E]">S/ 799</div>
                    <div className="text-[10px] text-slate-300">Cuotas desde</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#F5921E] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">100% Legal</div>
                      <div className="text-[10px] text-slate-300">En Sunarp</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
