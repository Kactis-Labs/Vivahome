import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/realEstateData';
import { ArrowUpRight, BookOpen, Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>INSIGHTS DEL MERCADO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900">
              Noticias y Tendencias Inmobiliarias
            </h2>
          </div>

          <a 
            href="#deals"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md self-start md:self-auto"
          >
            <span>Ver Más Artículos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image with Category Badge (Clickable) */}
              <Link to={`/blog/${post.id}`} className="block relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/70 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-light text-slate-500 mb-2 sm:mb-3">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{post.date}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2 sm:mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-light text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                  >
                    <span>Leer Artículo Completo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
