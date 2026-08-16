import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { services } from '../data/realEstateData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0D2218]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Servicios Inmobiliarios ECO HOGAR" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2218] via-[#0D2218]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Nuestros Servicios Inmobiliarios
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
            <span className="text-emerald-400 font-medium">Servicios</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CATÁLOGO DE SERVICIOS */}
      <main className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
              >
                {/* Image Preview with Hover Zoom */}
                <Link to={`/servicios/${service.id}`} className="relative aspect-[16/9] overflow-hidden block bg-zinc-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  <div className="absolute top-4 left-4 bg-[#0D2218]/90 backdrop-blur-md text-emerald-300 text-[10px] font-semibold px-3 py-1 rounded-md uppercase tracking-wider">
                    {service.tag}
                  </div>
                </Link>

                {/* Service Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/servicios/${service.id}`}>
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors mb-3">
                        {service.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link 
                      to={`/servicios/${service.id}`}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
                    >
                      <span>Ver detalles & metodología</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {/* 3. TESTIMONIOS, FAQ, CTA & FOOTER */}
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
