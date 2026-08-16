import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturedDealsSection } from '../components/FeaturedDealsSection';
import { AboutStatsSection } from '../components/AboutStatsSection';
import { ServicesSection } from '../components/ServicesSection';
import { AgentsSection } from '../components/AgentsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { BlogSection } from '../components/BlogSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-lime-500 selection:text-black"
    >
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Featured Deals This Month (Modo Oscuro Contrastado) */}
      <FeaturedDealsSection />

      {/* 4. About Us & Impact Stats */}
      <AboutStatsSection />

      {/* 5. Complete Property Solutions (Services) */}
      <ServicesSection />

      {/* 6. Experts Behind Your Home (Agents / Brokers) */}
      <AgentsSection />

      {/* 7. Success Stories From Clients (Testimonials) */}
      <TestimonialsSection />

      {/* 8. FAQ Split Section */}
      <FaqSection />

      {/* 9. Latest Real Estate Insights (Blog) */}
      <BlogSection />

      {/* 10. Final CTA Banner */}
      <CtaBanner />

      {/* 11. Footer */}
      <Footer />
    </motion.div>
  );
};
