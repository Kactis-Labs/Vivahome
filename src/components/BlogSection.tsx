import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/realEstateData';
import { ArrowUpRight, Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-2">
              NOTICIAS & CONSEJOS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Guías Inmobiliarias en Trujillo
            </h2>
          </div>

          <a 
            href="#deals"
            className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#DC2626] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md self-start md:self-auto"
          >
            <span>Ver Inmuebles</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[#F8FAFC] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-[#DC2626] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image with Category Badge */}
              <Link to={`/blog/${post.id}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#111827]/90 backdrop-blur-md text-[#EF4444] text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#EF4444]/30">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-normal text-slate-500 mb-2 sm:mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>{post.date}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 sm:mb-3 group-hover:text-[#DC2626] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-xs font-bold text-[#111827] group-hover:text-[#DC2626] transition-colors flex items-center gap-1.5"
                  >
                    <span>Leer Artículo Completo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#DC2626] group-hover:text-white text-slate-800 flex items-center justify-center transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
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
