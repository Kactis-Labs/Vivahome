import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const fullText = "Donde las Casas de Tus Sueños Se Hacen Realidad";
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
    }, 40);

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
    <section className="relative min-h-[85vh] sm:min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#0B1E17]">
      {/* Background Image with Dark Emerald Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" 
          alt="Mansión de Lujo y Arquitectura Moderna en Lima - VivaHome" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.5] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E17] via-[#0B1E17]/40 to-black/70" />
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
            className="text-sm sm:text-base lg:text-lg text-slate-200 font-light leading-relaxed mb-6 sm:mb-10 max-w-2xl"
          >
            Te guiamos con confianza y transparencia para encontrar residencias exclusivas, inmuebles de lujo y proyectos de alta rentabilidad en Lima Top y todo el Perú con VivaHome.
          </motion.p>
        </div>

        {/* Bottom Actions Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pt-2 sm:pt-4"
        >
          
          {/* Left Actions: Glassmorphic Card + Secondary WhatsApp Pill */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            
            {/* Glassmorphic Property Preview Card */}
            <Link 
              to="/propiedades/prop-1"
              className="bg-[#0B1E17]/70 backdrop-blur-md border border-white/10 rounded-2xl p-2 sm:p-2.5 flex items-center gap-2.5 sm:gap-3 shadow-2xl hover:bg-[#0B1E17]/90 hover:border-emerald-500/40 transition-all group max-w-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop" 
                alt="Penthouse El Golf Preview" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0"
              />
              <div className="pr-1 overflow-hidden">
                <span className="text-[9px] sm:text-[10px] font-medium text-emerald-400 uppercase tracking-wider block">FEATURED TOUR</span>
                <h4 className="text-xs sm:text-sm font-medium text-white leading-tight group-hover:text-emerald-300 transition-colors truncate">Penthouse El Golf</h4>
                <p className="text-[11px] sm:text-xs font-light text-slate-300 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-emerald-400 shrink-0" /> San Isidro, Lima
                </p>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-emerald-600 group-hover:text-white text-white flex items-center justify-center transition-colors shrink-0 ml-auto sm:ml-1">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </Link>

            {/* Subtle Glassmorphic WhatsApp CTA */}
            <a 
              href="https://wa.me/51987654321?text=Hola,%20quisiera%20asesoria%20sobre%20las%20propiedades%20exclusivas%20de%20VivaHome"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Hablar con Asesor</span>
            </a>

          </div>

          {/* Right Side: Circular Emerald Button */}
          <a 
            href="#deals"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105 self-end sm:self-auto shrink-0"
            aria-label="Ver todas las oportunidades"
          >
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
};
