import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { agents } from '../data/realEstateData';
import { Phone, ArrowUpRight } from 'lucide-react';

export const AgentsSection: React.FC = () => {
  return (
    <section id="agents" className="py-16 sm:py-24 bg-[#F8FAFC] text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2 sm:mb-3">
            NUESTRO EQUIPO
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-2 sm:mb-4">
            Especialistas en Venta de Departamentos
          </h2>
          <p className="text-zinc-600 text-xs sm:text-base font-light">
            Asesores certificados y especialistas comerciales comprometidos en asegurar la mejor decisión patrimonial con KC Inmobiliaria.
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
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Agent Photo Link */}
              <Link to={`/equipo/${agent.id}`} className="block relative aspect-[4/4] overflow-hidden bg-zinc-100">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
                
                {/* Floating view profile icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 group-hover:bg-black group-hover:text-white text-zinc-800 flex items-center justify-center shadow-md transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Agent Details */}
              <div className="p-5 sm:p-6">
                <Link to={`/equipo/${agent.id}`}>
                  <h3 className="text-base sm:text-lg font-medium text-zinc-900 group-hover:text-black transition-colors mb-1">
                    {agent.name}
                  </h3>
                </Link>
                <p className="text-xs text-zinc-600 font-medium mb-4 sm:mb-6">
                  {agent.role}
                </p>

                {/* Contact Links */}
                <div className="pt-3 sm:pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <a 
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 hover:text-black transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-zinc-600" />
                    <span>{agent.phone}</span>
                  </a>
                  <Link 
                    to={`/equipo/${agent.id}`}
                    className="flex items-center gap-1 text-black font-semibold hover:underline"
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
