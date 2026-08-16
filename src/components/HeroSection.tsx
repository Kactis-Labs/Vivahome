import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const fullText = "Tu Próximo Hogar Está Aquí";
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
    <section className="relative min-h-[85vh] sm:min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#062316]">
      {/* Background Image with Dark Emerald Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" 
          alt="Residencias y Proyectos Inmobiliarios - Megapolys Inmobiliaria" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062316] via-[#062316]/50 to-black/70" />
      </div>

      {/* Content Container with Framer Motion Staggered Animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-6"
      >
        <div className="max-w-3xl">
          
          {/* Main Title con Efecto de Escritura (Typewriter) */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-4 sm:mb-6 min-h-[2.2em]">
            <span>{displayedText}</span>
            <span 
              className={`inline-block w-[3px] sm:w-[4px] h-7 sm:h-11 lg:h-14 bg-[#A3D224] ml-1.5 align-middle transition-opacity duration-300 ${
                isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
              }`} 
            />
          </h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl"
          >
            <span className="text-[#A3D224] font-semibold">Confía en los que saben 💚.</span> Ventas, alquileres y proyectos inmobiliarios con total seguridad jurídica y asesoría de primer nivel.
          </motion.p>
        </div>

        {/* Bottom Actions Bar - Clean & Direct */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
        >
          {/* Primary CTA */}
          <a 
            href="#deals"
            className="bg-[#00873D] hover:bg-[#007333] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#00873D]/30 flex items-center gap-2.5 hover:scale-102"
          >
            <span>Ver Oportunidades</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* Secondary WhatsApp CTA */}
          <a 
            href="https://wa.me/51987654321?text=Hola,%20quisiera%20asesoria%20sobre%20las%20propiedades%20exclusivas%20de%20Megapolys%20Inmobiliaria"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-[#A3D224]/50 rounded-full px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold transition-all flex items-center gap-2.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#A3D224]" />
            <span>Hablar con Asesor</span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
