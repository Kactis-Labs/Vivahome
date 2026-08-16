import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { services } from '../data/realEstateData';
import { 
  Home, 
  Key, 
  TrendingUp, 
  Building
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  // Service icon mapping helper
  const getServiceIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Home className="w-5 h-5" />;
      case 1: return <Key className="w-5 h-5" />;
      case 2: return <TrendingUp className="w-5 h-5" />;
      case 3: return <Building className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0A0A]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Servicios Inmobiliarios KC Inmobiliaria" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Servicios Inmobiliarios Especializados
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-light text-zinc-300"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white font-medium">Servicios</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CATÁLOGO DE SERVICIOS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between"
              >
                {/* Image Container with Floating Black Icon Badge */}
                <Link to={`/servicios/${service.id}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm bg-zinc-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-lg group-hover:bg-zinc-800 transition-colors">
                    {getServiceIcon(idx)}
                  </div>
                </Link>

                {/* Service Details */}
                <div className="pt-4">
                  <Link to={`/servicios/${service.id}`}>
                    <h3 className="text-xl font-medium text-zinc-900 group-hover:text-black transition-colors mb-2 leading-snug">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Reused CTA Banner */}
      <CtaBanner />

      {/* Reused Footer */}
      <Footer />
    </motion.div>
  );
};
