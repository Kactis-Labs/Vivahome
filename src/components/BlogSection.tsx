import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/realEstateData';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              NOTICIAS & ARTÍCULOS DE INTERÉS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Tendencias & Guías de Inversión Campestre
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
            Consejos de arquitectura de estilo americano, ventajas de comprar en preventa y plusvalía en Puerto Malabrigo.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
            >
              <div>
                {/* Image */}
                <Link to={`/blog/${post.id}`} className="relative aspect-[16/10] overflow-hidden block bg-zinc-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#1D4263]/90 backdrop-blur-md text-amber-300 text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md uppercase tracking-wider shadow-md">
                    {post.category}
                  </div>
                </Link>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-medium text-zinc-400 block mb-2">
                    {post.date} • {post.readingTime}
                  </span>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-lg font-medium text-zinc-900 group-hover:text-amber-600 transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-light text-zinc-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-xs font-semibold text-amber-600 group-hover:text-amber-700 transition-colors flex items-center gap-1.5"
                >
                  <span>Leer artículo completo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
