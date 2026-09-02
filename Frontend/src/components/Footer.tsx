import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ArrowUp, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Clinic Branding & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="horizontal" size="md" />
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm pt-2 font-normal">
              Advance Physio's Hub is a modern physiotherapy and sports rehabilitation center in Chhatrapati Sambhajinagar (Aurangabad), dedicated to evidence-based recovery, movement restoration, and personalized patient care.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                href="#contact"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-400 hover:text-slate-900 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Instagram Placeholder"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                href="#contact"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-400 hover:text-slate-900 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="LinkedIn Placeholder"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                href="#contact"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-400 hover:text-slate-900 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Facebook Placeholder"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                href="#contact"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-400 hover:text-slate-900 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="YouTube Placeholder"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
              <li>
                <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">About Clinic</a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-slate-900 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#director" className="hover:text-slate-900 transition-colors">Director Profile</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-slate-900 transition-colors">Patient Journey</a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-slate-900 transition-colors">Clinic Space</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition-colors">Contact & Hours</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Rehabilitation Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-slate-900 transition-colors block truncate">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Location & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <span className="text-slate-600 font-normal">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-600 font-normal">{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="text-slate-600 font-normal">{CLINIC_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <span className="text-slate-600 font-normal">{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © Advance Physio's Hub. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-500 font-mono">
              Chhatrapati Sambhajinagar (Aurangabad), Maharashtra
            </span>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer text-slate-600"
              title="Scroll to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};
