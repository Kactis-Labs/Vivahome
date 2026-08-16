import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { agents } from '../data/realEstateData';
import { Phone, ArrowUpRight } from 'lucide-react';

export const AgentsSection: React.FC = () => {
  return (
    <section id="agents" className="py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold text-lime-700 uppercase tracking-wider block mb-2 sm:mb-3">
            EQUIPO ESPECIALISTA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-2 sm:mb-4">
            Directores & Asesores de GyS Servicios Inmobiliarios
          </h2>
          <p className="text-xs sm:text-base font-light text-zinc-600 leading-relaxed">
            Especialistas en inversiones, derecho registral y finanzas dedicados a construir valor para tu patrimonio.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between hover:border-lime-500/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Agent Image */}
                <Link to={`/equipo/${agent.id}`} className="block relative aspect-square rounded-2xl overflow-hidden mb-5 bg-zinc-100">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-lime-500 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </Link>

                {/* Agent Info */}
                <Link to={`/equipo/${agent.id}`}>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 group-hover:text-lime-700 transition-colors">
                    {agent.name}
                  </h3>
                </Link>
                <p className="text-xs sm:text-sm font-light text-zinc-500 mb-4 mt-0.5">
                  {agent.role}
                </p>
              </div>

              {/* Contact Button */}
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <a 
                  href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-lime-700 hover:text-lime-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{agent.phone}</span>
                </a>

                <Link
                  to={`/equipo/${agent.id}`}
                  className="text-[11px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  Ver Perfil
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
