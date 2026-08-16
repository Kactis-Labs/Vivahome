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
  Building, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const getServiceIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Home className="w-5 h-5" />;
      case 1: return <Key className="w-5 h-5" />;
      case 2: return <TrendingUp className="w-5 h-5" />;
      case 3: return <Building className="w-5 h-5" />;
      case 4: return <ShieldCheck className="w-5 h-5" />;
      case 5: return <Users className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E5A020] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#1D4263]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Servicios Golden Inmobiliaria" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Servicios & Facilidades de Adquisición
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-light text-slate-300"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Servicios</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CATÁLOGO DE SERVICIOS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
                {/* Image Container */}
                <Link to={`/servicios/${service.id}`} className="block relative aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#E5A020] text-white flex items-center justify-center shadow-lg group-hover:bg-[#D97706] transition-colors">
                    {getServiceIcon(idx)}
                  </div>
                </Link>

                {/* Service Details */}
                <div className="pt-4">
                  <Link to={`/servicios/${service.id}`}>
                    <h3 className="text-xl font-medium text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm font-light text-slate-500 leading-relaxed">
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
