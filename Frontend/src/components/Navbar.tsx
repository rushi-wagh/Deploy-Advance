import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  LayoutGrid, 
  Instagram, 
  AtSign, 
  Twitter, 
  User, 
  Calendar, 
  Menu, 
  X, 
  MessageCircle,
  Phone,
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'app' | 'insta' | 'threads' | 'x' | 'user'>('app');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Director', href: '#director' },
    { label: 'Journey', href: '#journey' },
    { label: 'Clinic', href: '#clinic' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left: Brand Identity */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs hover:bg-white transition-all"
          aria-label="Advance Physio's Hub Homepage"
        >
          <Logo variant="mark-only" size="sm" />
          <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 font-sans">
            Advance Physio
          </span>
        </a>

        {/* Center Floating Pill Dock (From Template) */}
        <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg shadow-black/5">
          
          {/* App / Grid Menu Button */}
          <button
            onClick={() => setActiveTab('app')}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              activeTab === 'app'
                ? 'bg-[#18191B] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Clinic Hub"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {/* Instagram Link */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveTab('insta')}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              activeTab === 'insta'
                ? 'bg-[#18191B] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Threads / Email */}
          <a
            href="#contact"
            onClick={() => setActiveTab('threads')}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              activeTab === 'threads'
                ? 'bg-[#18191B] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Contact & Inquiries"
          >
            <AtSign className="w-4 h-4" />
          </a>

          {/* Twitter / X */}
          <a
            href="#why-us"
            onClick={() => setActiveTab('x')}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              activeTab === 'x'
                ? 'bg-[#18191B] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Specialties & Innovation"
          >
            <Twitter className="w-4 h-4" />
          </a>

          {/* User / Director Profile */}
          <a
            href="#director"
            onClick={() => setActiveTab('user')}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              activeTab === 'user'
                ? 'bg-[#18191B] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Clinical Director Profile"
          >
            <User className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Join to Waitlist / Book Appointment CTA (From Template) */}
        <div className="flex items-center gap-2">
          <motion.button
            id="template-nav-cta-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBooking}
            className="bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-2xl border border-slate-200/90 shadow-md shadow-black/5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book an Appointment</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-white focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-4 border border-slate-200 shadow-2xl pointer-events-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
              <span className="text-xs font-bold text-slate-900">Advance Physio's Hub</span>
              <span className="text-[11px] text-slate-500">{CLINIC_INFO.city}</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <a
                href={`https://wa.me/?text=${encodeURIComponent("Hello Advance Physio's Hub, I would like to book a physiotherapy consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex-1 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Slot</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
