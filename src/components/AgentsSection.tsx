import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Mail, 
  Phone 
} from 'lucide-react';
import { agents } from '../data/realEstateData';

export const AgentsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              EQUIPO ESPECIALIZADO EN PREVENTA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Asesores Inmobiliarios en Puerto Malabrigo
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
            Te asesoramos para elegir el mejor lote de Villa Club Malabrigo con financiamiento 100% directo sin intereses bancarios.
          </p>
        </div>

        {/* 3 Agents Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-[#F8FAFC] border border-zinc-200 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
            >
              {/* Agent Image */}
              <Link to={`/equipo/${agent.id}`} className="relative aspect-[4/3] overflow-hidden block bg-zinc-200">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* View Profile Button */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-md group-hover:bg-[#E5A020] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Agent Information */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/equipo/${agent.id}`}>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors mb-1">
                      {agent.name}
                    </h3>
                  </Link>
                  <p className="text-xs font-bold text-amber-600 mb-4">
                    {agent.role}
                  </p>
                  <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed mb-6">
                    {agent.experience}
                  </p>
                </div>

                {/* Contact Shortcuts */}
                <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between gap-2">
                  <a 
                    href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(agent.name)},%20deseo%20asesoría%20sobre%20los%20lotes%20de%20Villa%20Club%20Malabrigo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500/15 hover:bg-[#E5A020] hover:text-white text-amber-700 text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a 
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="p-2.5 rounded-xl bg-zinc-100 hover:bg-[#1D4263] hover:text-white text-zinc-700 transition-colors"
                    title={`Llamar a ${agent.name}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>

                  <a 
                    href={`mailto:${agent.email}`}
                    className="p-2.5 rounded-xl bg-zinc-100 hover:bg-[#1D4263] hover:text-white text-zinc-700 transition-colors"
                    title={`Escribir a ${agent.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to all team */}
        <div className="text-center mt-12 sm:mt-16">
          <Link 
            to="/equipo"
            className="inline-flex items-center gap-2 bg-[#1D4263] hover:bg-[#132B45] text-white text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
          >
            <span>Conoce a Todo Nuestro Equipo Comercial</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
