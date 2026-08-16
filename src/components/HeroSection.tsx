import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';

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
    }, 38);

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
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#1D4263]">
      {/* Background Image: Casa Estilo Americano con Piscina */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Villa Club Malabrigo - Casa de Campo Estilo Americano con Piscina" 
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
        />
        {/* Dark Navy Coastal Gradient Overlay Original */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/45 to-black/60" />
      </div>

      {/* Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Headlines & Description */}
          <div className="lg:col-span-7 max-w-2xl">
            
            {/* Handwritten-Style Kicker */}
            <motion.div 
              variants={itemVariants}
              className="mb-1 sm:mb-2"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif italic font-normal text-amber-400 tracking-wide drop-shadow-md">
                El único proyecto con
              </span>
            </motion.div>

            {/* Main Title con Efecto de Escritura (Typewriter) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-4 sm:mb-6 min-h-[2.3em] font-sans drop-shadow-lg">
              <span>{displayedText}</span>
              <span 
                className={`inline-block w-[3px] sm:w-[4px] h-7 sm:h-11 lg:h-14 bg-amber-400 ml-1.5 align-middle transition-opacity duration-300 ${
                  isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
                }`} 
              />
            </h1>

            {/* Subtitle & Clear Highlights - Solo texto sin recuadros ni viñetas */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-zinc-100 font-light leading-relaxed mb-6 sm:mb-8 drop-shadow"
            >
              Tu casa de campo y playa en <strong className="font-semibold text-white">Villa Club Malabrigo</strong>. Lotes de <strong className="font-semibold text-amber-300">252m², 300m² y 500m²</strong> a precios de preventa con <strong className="font-semibold text-amber-300">Plano Americano Gratis</strong>, avance de obras semanal y financiamiento directo <strong className="font-semibold text-white">100% SIN INTERESES</strong>.
            </motion.p>

            {/* Bottom Actions Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20deseo%20informaci%C3%B3n%20y%20precios%20de%20preventa%20de%20Villa%20Club%20Malabrigo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E5A020] hover:bg-[#D97706] text-white rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Cotizar en Preventa por WhatsApp</span>
              </a>

              {/* Lote Preview Link */}
              <Link 
                to="/propiedades/lote-villa-club-252"
                className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md rounded-full px-6 py-3.5 text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 border border-white/15"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Ver Lotes desde 252 m²</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Logo del proyecto flotante elevado con texto de alta legibilidad */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center justify-center lg:items-end -mt-4 sm:-mt-8 lg:-mt-12"
          >
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="flex flex-col items-center select-none"
            >
              <img 
                src="/images/logo-villa-club.png" 
                alt="Villa Club Malabrigo" 
                className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] pointer-events-none filter brightness-105"
              />
              <span className="text-xs sm:text-sm lg:text-[15px] font-black tracking-[0.24em] text-amber-300 uppercase block mt-3 text-center drop-shadow-lg font-sans">
                PROYECTO ESTRELLA - PUERTO MALABRIGO
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Floating Arrow down to deals */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mt-12 flex justify-end"
        >
          <a 
            href="#deals"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E5A020] hover:bg-[#D97706] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105"
            aria-label="Ver todos los lotes de Villa Club"
          >
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
