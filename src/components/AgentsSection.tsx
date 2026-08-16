import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { agents } from '../data/realEstateData';
import { Phone, UserCheck, ArrowUpRight } from 'lucide-react';

export const AgentsSection: React.FC = () => {
  return (
    <section id="agents" className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <UserCheck className="w-4 h-4 text-[#E5A020]" />
            <span>NUESTRO EQUIPO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2 sm:mb-4">
            Expertos Detrás de Tu Lote Propio
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-light">
            Asesores inmobiliarios de Golden Inmobiliaria comprometidos con guiarte en la compra de tu terreno en Villa Club Malabrigo.
          </p>
        </motion.div>

        {/* 3 Agents Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {agents.map((agent, idx) => (
            <motion.div 
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Agent Photo Link */}
              <Link to={`/equipo/${agent.id}`} className="block relative aspect-[4/4] overflow-hidden bg-slate-100">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
                
                {/* Floating view profile icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 group-hover:bg-[#E5A020] group-hover:text-white text-slate-800 flex items-center justify-center shadow-md transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Agent Details */}
              <div className="p-5 sm:p-6">
                <Link to={`/equipo/${agent.id}`}>
                  <h3 className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                    {agent.name}
                  </h3>
                </Link>
                <p className="text-xs text-amber-600 font-semibold mb-4 sm:mb-6">
                  {agent.role}
                </p>

                {/* Contact Links */}
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <a 
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E5A020]" />
                    <span>{agent.phone}</span>
                  </a>
                  <Link 
                    to={`/equipo/${agent.id}`}
                    className="flex items-center gap-1 text-amber-600 font-medium hover:underline"
                  >
                    <span>Ver Perfil</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
