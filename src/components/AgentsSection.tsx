import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { agents } from '../data/realEstateData';
import { Phone, ArrowUpRight } from 'lucide-react';

export const AgentsSection: React.FC = () => {
  return (
    <section id="agents" className="py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold text-[#A8875D] uppercase tracking-wider block mb-2">
            EQUIPO DIRECTIVO & ASESORES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] mb-2 sm:mb-4">
            Expertos en Proyectos Residenciales
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal">
            Especialistas en desarrollo, estructuración financiera y comercialización de departamentos en <strong className="text-slate-900 font-semibold">R&R Inmobiliaria</strong>.
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
              className="group bg-[#FAF8F5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E4DC] hover:border-[#C8A97E] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
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
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/95 group-hover:bg-[#1C1917] group-hover:text-[#D4B996] text-slate-800 flex items-center justify-center shadow-md transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Agent Details */}
              <div className="p-5 sm:p-6">
                <Link to={`/equipo/${agent.id}`}>
                  <h3 className="text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#A8875D] transition-colors mb-1">
                    {agent.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#A8875D] font-semibold mb-4 sm:mb-6">
                  {agent.role}
                </p>

                {/* Contact Links */}
                <div className="pt-3 sm:pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-slate-600">
                  <a 
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 hover:text-[#A8875D] transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A8875D]" />
                    <span>{agent.phone}</span>
                  </a>
                  <Link 
                    to={`/equipo/${agent.id}`}
                    className="flex items-center gap-1 text-[#A8875D] font-semibold hover:underline"
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
