import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/realEstateData';
import { ArrowUpRight, Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2 sm:mb-3">
              GUÍAS & NOVEDADES DE CAMPO Y PLAYA
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Consejos & Artículos para Comprar Tu Terreno
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
            Aprende cómo elegir el mejor lote, aprovechar el financiamiento directo y construir tu casa en la costa liberteña.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F8FAFC] rounded-3xl overflow-hidden border border-zinc-200 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0D2218]/90 backdrop-blur-md text-emerald-300 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] sm:text-xs font-light mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-base sm:text-lg font-medium text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed line-clamp-2 mb-4">
                    {post.summary}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-zinc-200">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
