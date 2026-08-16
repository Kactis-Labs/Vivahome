import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const fullText = "Cumple el Sueño de Tu Lote Propio Cerca al Mar o Campo";
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
    }, 36);

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
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#0A2540]">
      {/* Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/banner-eco-hogar.png" 
          alt="Tu Lote Cerca a la Playa en Puerto Malabrigo - ECO HOGAR Inmobiliaria" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-black/60" />
      </div>

      {/* Content Container with Framer Motion Staggered Animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-8"
      >
        <div className="max-w-3xl">
          
          {/* Main Title con Efecto de Escritura (Typewriter) */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-normal text-white tracking-[-0.035em] leading-[1.14] mb-4 sm:mb-6 min-h-[2.4em]">
            <span>{displayedText}</span>
            <span 
              className={`inline-block w-[2.5px] sm:w-[3px] h-7 sm:h-11 lg:h-14 bg-emerald-400 ml-1.5 align-middle transition-opacity duration-300 ${
                isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
              }`} 
            />
          </h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-zinc-200 font-light leading-relaxed mb-6 sm:mb-10 max-w-2xl"
          >
            Disfruta de la tranquilidad de la naturaleza en Puerto Malabrigo y Ascope - La Libertad. Lotes al contado desde <strong className="font-semibold text-emerald-300">S/ 14,900</strong> con 100% financiamiento directo sin bancos, solo con tu DNI.
          </motion.p>
        </div>

        {/* Bottom Actions Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pt-2 sm:pt-4"
        >
          
          {/* Left Actions: Property Card + WhatsApp */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            
            {/* Glassmorphic Property Preview Card */}
            <Link 
              to="/propiedades/lote-malabrigo-1"
              className="bg-[#0A2540]/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-2 sm:p-2.5 flex items-center gap-2.5 sm:gap-3 shadow-2xl hover:bg-[#0A2540]/95 hover:border-emerald-400/60 transition-all group max-w-full"
            >
              <img 
                src="/images/banner-eco-hogar.png" 
                alt="Puerto Malabrigo Lotes" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0"
              />
              <div className="pr-1 overflow-hidden">
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">DESDE S/ 14,900 AL CONTADO</span>
                <h4 className="text-xs sm:text-sm font-medium text-white leading-tight group-hover:text-emerald-300 transition-colors truncate">EcoHogar Puerto Malabrigo</h4>
                <p className="text-[11px] sm:text-xs font-light text-zinc-300 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" /> Cerca al Mar • Ascope
                </p>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-emerald-500 group-hover:text-white text-white flex items-center justify-center transition-colors shrink-0 ml-auto sm:ml-1">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </Link>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/51987654321?text=Hola,%20quisiera%20agendar%20una%20visita%20guiada%20gratuita%20a%20los%20lotes%20de%20Puerto%20Malabrigo%20con%20ECO%20HOGAR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Agenda tu Visita Gratis</span>
            </a>

          </div>

          {/* Right Side: Circular Emerald Button */}
          <a 
            href="#deals"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 transition-transform hover:scale-105 self-end sm:self-auto shrink-0"
            aria-label="Ver todos los lotes disponibles"
          >
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
};
