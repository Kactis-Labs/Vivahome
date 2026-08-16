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
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#111827]">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Propiedades Exclusivas en Trujillo - Inmobiliaria JML" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-black/75" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Main Title con Typewriter */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.12] mb-4 sm:mb-6 min-h-[2.2em]">
              <span>{displayedText}</span>
              <span 
                className={`inline-block w-[3px] sm:w-[4px] h-7 sm:h-11 lg:h-14 bg-[#DC2626] ml-1.5 align-middle transition-opacity duration-300 ${
                  isTypingComplete ? 'opacity-0' : 'opacity-100 animate-pulse'
                }`} 
              />
            </h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              <span className="text-[#EF4444] font-bold">Gestión y asesoría profesional</span> en la compra y venta de inmuebles en Trujillo. Departamentos de estreno, casas exclusivas y terrenos con total seguridad jurídica y respaldo notarial.
            </motion.p>

            {/* Actions Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a 
                href="#deals"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#DC2626]/30 flex items-center gap-2.5 hover:scale-102"
              >
                <span>Ver Propiedades</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Secondary WhatsApp CTA */}
              <a 
                href="https://wa.me/51987654321?text=Hola,%20quisiera%20asesoria%20para%20comprar/vender%20un%20inmueble%20en%20Trujillo%20con%20Inmobiliaria%20JML"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-[#DC2626]/50 rounded-full px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold transition-all flex items-center gap-2.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF4444]" />
                <span>Hablar con Asesor</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Open Fluid Typography & Value Props (Sin marcos) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:flex lg:col-span-5 flex-col justify-center items-start pl-6 xl:pl-10 space-y-6"
          >
            {/* Impact Headline */}
            <div className="space-y-1">
              <h2 className="text-3xl xl:text-5xl font-black text-white leading-[1.12] tracking-tight drop-shadow-md">
                Asesoría experta <br />
                <span className="text-[#EF4444] drop-shadow-[0_2px_12px_rgba(239,68,68,0.4)]">en Trujillo</span>
              </h2>
            </div>

            {/* Key Benefits Inline */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-white">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#EF4444] stroke-[2.2] shrink-0 drop-shadow" />
                <span className="text-xs xl:text-sm font-semibold tracking-wide leading-tight">
                  100% Legal <br /> en Sunarp
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Building className="w-6 h-6 text-[#EF4444] stroke-[2.2] shrink-0 drop-shadow" />
                <span className="text-xs xl:text-sm font-semibold tracking-wide leading-tight">
                  +500 Inmuebles <br /> Gestionados
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[#EF4444] stroke-[2.2] shrink-0 drop-shadow" />
                <span className="text-xs xl:text-sm font-semibold tracking-wide leading-tight">
                  +10 Años de <br /> Experiencia
                </span>
              </div>
            </div>

            {/* Action Callout */}
            <div className="pt-3">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20deseo%20vender%20o%20comprar%20un%20inmueble%20en%20Trujillo%20con%20Inmobiliaria%20JML"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white px-7 py-3.5 rounded-full shadow-2xl shadow-red-600/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-sm xl:text-base font-bold">
                  Consulta Gratuita con un Asesor JML
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location Line */}
            <div className="flex items-center gap-2 text-slate-200 text-sm font-medium pt-1">
              <MapPin className="w-4 h-4 text-[#EF4444] shrink-0" />
              <span>El Golf • California • San Andrés • Huanchaco</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
