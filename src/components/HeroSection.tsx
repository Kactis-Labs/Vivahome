import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, MapPin, MessageCircle, Ruler, HardHat } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const fullText = "Estilo Americano en Puerto Malabrigo";
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
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#1D4263]">
      {/* Background Image: Casa Estilo Americano con Piscina & Cielo Azul */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Villa Club Malabrigo - Casa de Campo Estilo Americano con Piscina" 
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
        />
        {/* Subtle Navy Blue Coastal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/40 to-black/55" />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Callouts */}
          <div className="lg:col-span-8 max-w-3xl">
            
            {/* Handwritten-Style Kicker */}
            <motion.div 
              variants={itemVariants}
              className="mb-2 sm:mb-3"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-amber-400 tracking-wide drop-shadow-md">
                El único proyecto con
              </span>
            </motion.div>

            {/* Main Title con Efecto de Escritura (Typewriter) */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-6 min-h-[2.3em] drop-shadow-lg font-sans">
              <span>{displayedText}</span>
              <span 
                className={`inline-block w-[3px] sm:w-[4px] h-7 sm:h-12 lg:h-16 bg-amber-400 ml-1.5 align-middle transition-opacity duration-300 ${
                  isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
                }`} 
              />
            </h1>

            {/* Subtitle & Highlights */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-zinc-100 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl drop-shadow"
            >
              Tu casa de campo/playa en <strong className="font-semibold text-white">Villa Club Malabrigo</strong>. Lotes amplios de <strong className="font-semibold text-amber-300">252m², 300m² y 500m²</strong> a precios de preventa y financiamiento directo <strong className="font-semibold text-amber-300">SIN INTERESES</strong>.
            </motion.p>

            {/* Feature Badges Grid */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              {/* Plano Americano Gratis */}
              <div className="flex items-center gap-2 bg-[#1D4263]/85 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs sm:text-sm font-medium shadow-lg border border-white/10">
                <Ruler className="w-4 h-4 text-amber-400 shrink-0" />
                <span>📐 <strong>Plano Americano</strong> Gratis</span>
              </div>

              {/* Avance de Obras Semanal */}
              <div className="flex items-center gap-2 bg-[#1D4263]/85 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs sm:text-sm font-medium shadow-lg border border-white/10">
                <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Avance de Obras <strong>Semanalmente</strong></span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Floating Villa Club Logo */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 flex justify-start lg:justify-end"
          >
            <motion.div 
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="bg-white/95 backdrop-blur-xl p-4 sm:p-6 rounded-3xl shadow-2xl border border-white/40 max-w-[280px] sm:max-w-[320px] flex flex-col items-center text-center group hover:bg-white transition-all"
            >
              <img 
                src="/images/logo-villa-club.png" 
                alt="Villa Club Malabrigo Logo" 
                className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-3 pt-3 border-t border-zinc-200/80 w-full flex items-center justify-between text-[11px] font-semibold text-zinc-700">
                <span className="text-amber-600 uppercase tracking-wider font-bold">PROYECTO ESTRELLA</span>
                <span>PUERTO MALABRIGO</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Actions Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pt-2"
        >
          
          {/* Left Actions: Card Glassmorphic + WhatsApp */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            
            {/* Glassmorphic Property Preview Card */}
            <Link 
              to="/propiedades/lote-villa-club-252"
              className="bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3 flex items-center gap-3 shadow-2xl hover:bg-white transition-all group max-w-full text-zinc-900 border border-white/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" 
                alt="Villa Club Malabrigo" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0"
              />
              <div className="pr-2 overflow-hidden">
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-600 uppercase tracking-wider block">PREVENTA • 0% INTERESES</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#1D4263] leading-tight group-hover:text-amber-600 transition-colors truncate">Villa Club Malabrigo</h4>
                <p className="text-[11px] sm:text-xs font-medium text-zinc-600 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-amber-600 shrink-0" /> 252m² • 300m² • 500m²
                </p>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5A020] text-white flex items-center justify-center transition-colors shrink-0 ml-auto sm:ml-1 group-hover:bg-[#D97706]">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
            </Link>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20deseo%20informaci%C3%B3n%20y%20precios%20de%20preventa%20de%20Villa%20Club%20Malabrigo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5A020] hover:bg-[#D97706] text-white rounded-full px-6 py-3 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>Cotizar en Preventa por WhatsApp</span>
            </a>

          </div>

          {/* Right Side: Circular Gold Button */}
          <a 
            href="#deals"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E5A020] hover:bg-[#D97706] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105 self-end sm:self-auto shrink-0"
            aria-label="Ver todos los lotes de Villa Club"
          >
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
};
