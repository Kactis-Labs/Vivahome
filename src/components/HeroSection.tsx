import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  ArrowUpRight, 
  MessageCircle, 
  ShieldCheck, 
  Building, 
  MapPin, 
  Award 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const fullText = "Tu Próximo Hogar en Trujillo";
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
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#111827]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Inmobiliaria JML Trujillo" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-black/70" />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Original Template Typography & Hierarchy */}
          <div className="lg:col-span-7 max-w-2xl">
            
            {/* Main Title con Tipografía Original */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-normal text-white tracking-[-0.035em] leading-[1.14] mb-4 sm:mb-6 min-h-[2.4em]">
              <span>{displayedText}</span>
              <span 
                className={`inline-block w-[2.5px] sm:w-[3px] h-7 sm:h-11 lg:h-14 bg-[#EF4444] ml-1.5 align-middle transition-opacity duration-300 ${
                  isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
                }`} 
              />
            </h1>

            {/* Subtitle Original */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-slate-200 font-light leading-relaxed mb-6 sm:mb-10 max-w-xl"
            >
              Empresa encargada de la gestión y asesoría profesional en la compra y venta de inmuebles en Trujillo con <strong className="text-white font-medium">Inmobiliaria JML</strong>.
            </motion.p>

            {/* Actions Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <a 
                href="#deals"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-full transition-all shadow-lg shadow-[#DC2626]/25 flex items-center gap-2 hover:scale-102"
              >
                <span>Ver Inmuebles</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/51987654321?text=Hola,%20quisiera%20asesoria%20sobre%20inmuebles%20en%20Trujillo%20con%20Inmobiliaria%20JML"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/15 rounded-full px-5 py-3 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#EF4444]" />
                <span>Hablar con Asesor</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Posicionado más abajo y balanceado (Solo Desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-5 flex-col justify-end items-start pl-6 xl:pl-10 space-y-4 pb-2"
          >
            {/* Slogan complementario sutil */}
            <p className="text-xs uppercase tracking-widest text-[#EF4444] font-semibold">
              ASESORÍA INMOBILIARIA EN TRUJILLO
            </p>

            <h3 className="text-xl xl:text-2xl font-normal text-white/95 leading-snug">
              Invertir seguro es invertir con profesionales
            </h3>

            {/* Beneficios clave en línea */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1 text-slate-200 text-xs font-light">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EF4444] shrink-0" />
                <span>100% Legal en Sunarp</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#EF4444] shrink-0" />
                <span>+500 Inmuebles</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#EF4444] shrink-0" />
                <span>+10 Años</span>
              </div>
            </div>

            {/* Ubicaciones */}
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-light pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#EF4444] shrink-0" />
              <span>El Golf • California • San Andrés • Huanchaco</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
