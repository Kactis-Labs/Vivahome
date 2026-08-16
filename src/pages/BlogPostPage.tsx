import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { blogPosts } from '../data/realEstateData';
import { 
  Calendar, 
  Tag, 
  Clock, 
  ArrowLeft 
} from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find post by id or fallback to first
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#C8A97E] selection:text-[#181614]"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER WITH STAGGERED ENTRANCE */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#181614]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.18] mb-4"
          >
            {post.title}
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-normal text-slate-300"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/#blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#D4B996] font-semibold">Detalle del Artículo</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL (Layout dividido en 2 columnas con Scroll Reveal) */}
      <main className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top back button */}
          <div className="mb-8 sm:mb-10">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-emerald-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Noticias Inmobiliarias</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA (Sidebar de Metadatos & Autor - ~35% width) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-6"
            >
              
              {/* Tarjeta 1: Detalles del Artículo (Blog Details) */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-4">
                <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                  Detalles del Artículo
                </h3>

                <div className="space-y-3.5 pt-1 text-xs sm:text-sm font-light text-slate-700">
                  {/* Fecha */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1">
                      Fecha de Publicación
                    </span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium">
                      <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Categoría */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1">
                      Categoría
                    </span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium">
                      <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Tiempo de Lectura */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1">
                      Tiempo de Lectura
                    </span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{post.readingTime || '6 Minutos'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2: Perfil del Autor */}
              {post.author && (
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
                  <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                    Autor
                  </h3>

                  <div className="flex items-center gap-3.5">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-medium text-slate-900 truncate">
                        {post.author.name}
                      </h4>
                      <p className="text-xs font-light text-slate-500 truncate">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-light text-slate-600 leading-relaxed italic pt-2 border-t border-slate-200">
                    "{post.author.quote}"
                  </p>
                </div>
              )}

            </motion.div>

            {/* COLUMNA DERECHA (Cuerpo Editorial del Artículo - ~65% width) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-8 sm:space-y-10"
            >
              
              {/* Sección 1 */}
              {post.section1 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    {post.section1.title}
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base font-light text-slate-700 leading-relaxed">
                    {post.section1.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Sección 2 */}
              {post.section2 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    {post.section2.title}
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base font-light text-slate-700 leading-relaxed">
                    {post.section2.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Imagen Intermedia */}
              {post.middleImage && (
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm my-6 sm:my-8 bg-slate-100">
                  <img 
                    src={post.middleImage} 
                    alt={post.title} 
                    className="w-full h-[240px] sm:h-[380px] object-cover"
                  />
                </div>
              )}

              {/* Sección 3 */}
              {post.section3 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    {post.section3.title}
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base font-light text-slate-700 leading-relaxed">
                    {post.section3.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Sección 4 */}
              {post.section4 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    {post.section4.title}
                  </h2>
                  <p className="text-sm sm:text-base font-light text-slate-700 leading-relaxed mb-4">
                    {post.section4.intro}
                  </p>

                  <ol className="space-y-2.5 text-xs sm:text-sm font-light text-slate-700 leading-relaxed list-none">
                    {post.section4.items.map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2.5">
                        <span className="font-semibold text-emerald-700 shrink-0">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

            </motion.div>

          </div>

        </div>
      </main>

      {/* Reused CTA Banner */}
      <CtaBanner />

      {/* Reused Footer */}
      <Footer />
    </motion.div>
  );
};
