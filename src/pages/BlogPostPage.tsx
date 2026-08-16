import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { blogPosts } from '../data/realEstateData';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/#blog" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#1D4263]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-[-0.035em] leading-[1.18] mb-4"
          >
            {post.title}
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
            <Link to="/#blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Detalle del Artículo</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top back button */}
          <div className="mb-8 sm:mb-12">
            <Link 
              to="/#blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Todos los Artículos</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
            
            {/* Meta tags bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-500 pb-6 border-b border-zinc-100">
              <span className="bg-amber-50 text-amber-800 font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{post.date}</span>
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Lectura: {post.readingTime}</span>
                </span>
              )}
            </div>

            {/* Resumen / Intro Lead */}
            <p className="text-lg sm:text-2xl font-light text-zinc-800 leading-relaxed italic border-l-4 border-[#E5A020] pl-6 py-1">
              {post.summary}
            </p>

            {/* Section 1 */}
            {post.section1 && (
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900">
                  {post.section1.title}
                </h2>
                {post.section1.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Middle Image */}
            {post.middleImage && (
              <div className="my-8 rounded-3xl overflow-hidden shadow-lg aspect-[16/9] bg-zinc-100">
                <img 
                  src={post.middleImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Section 2 */}
            {post.section2 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                  {post.section2.title}
                </h3>
                {post.section2.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Section 3 */}
            {post.section3 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                  {post.section3.title}
                </h3>
                {post.section3.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Section 4: Key Takeaways */}
            {post.section4 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-zinc-200 space-y-4">
                <h3 className="text-xl font-medium tracking-tight text-zinc-900">
                  {post.section4.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-zinc-600">
                  {post.section4.intro}
                </p>
                <div className="space-y-2.5 pt-2">
                  {post.section4.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Profile Box */}
            {post.author && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#1D4263] text-white flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-400 shrink-0"
                />
                <div className="text-center sm:text-left space-y-1.5">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    AUTOR DEL ARTÍCULO
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-zinc-300 font-light">
                    {post.author.role} • Golden Inmobiliaria
                  </p>
                  <p className="text-xs sm:text-sm font-light text-zinc-200 italic pt-2">
                    "{post.author.quote}"
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      {/* CTA & FOOTER */}
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
