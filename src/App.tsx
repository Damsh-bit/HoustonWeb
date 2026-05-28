/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Layout, 
  Smartphone, 
  Users, 
  Zap,
  MousePointer2,
  Send,
  Star,
  X,
  ExternalLink,
  Menu,
  Clock,
  Banknote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FormEvent, useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { projects } from './projects';
import ProjectPage from './ProjectPage';
import { useLanguage } from './LanguageContext';

const WHATSAPP_URL = "https://wa.me/5491131486912?text=Hola!%20Me%20interesa%20cotizar%20una%20p%C3%A1gina%20web%20con%20Houston%20Express.";

// Components
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Houston Express Logo" className="h-10 object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text-dim">
          <a href="#services" className="hover:text-white transition-colors">{t('nav_services')}</a>
          <a href="#process" className="hover:text-white transition-colors">{t('nav_process')}</a>
          <a href="#portfolio" className="hover:text-white transition-colors">{t('nav_portfolio')}</a>
          <a href="#pricing" className="hover:text-white transition-colors">{t('nav_pricing')}</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setLanguage('es')}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${language === 'es' ? 'bg-brand-accent text-zinc-900 font-bold' : 'text-brand-text-dim hover:text-white'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${language === 'en' ? 'bg-brand-accent text-zinc-900 font-bold' : 'text-brand-text-dim hover:text-white'}`}
            >
              EN
            </button>
          </div>
          <motion.a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center"
          >
            {t('nav_launch')}
          </motion.a>
        </div>
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">{t('nav_services')}</a>
              <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">{t('nav_process')}</a>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">{t('nav_portfolio')}</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">{t('nav_pricing')}</a>
              
              <div className="flex bg-white/5 rounded-full p-1 border border-white/10 mx-auto w-fit mt-2">
                <button 
                  onClick={() => setLanguage('es')}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors ${language === 'es' ? 'bg-brand-accent text-zinc-900 font-bold' : 'text-brand-text-dim hover:text-white'}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors ${language === 'en' ? 'bg-brand-accent text-zinc-900 font-bold' : 'text-brand-text-dim hover:text-white'}`}
                >
                  EN
                </button>
              </div>

              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-white w-full text-zinc-900 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-200 transition-colors mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center block"
              >
                {t('nav_launch')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Floating 3D-like Models */}
      <motion.div
         animate={{ y: [0, -30, 0], rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-20 left-4 md:left-[10%] w-32 h-32 bg-gradient-to-br from-brand-accent to-orange-500 rounded-3xl blur-[10px] opacity-60 border border-white/20"
         style={{ transformStyle: 'preserve-3d', transform: 'perspective(500px) rotateX(45deg) rotateY(45deg)' }}
      />
      <motion.div
         animate={{ y: [0, 40, 0], rotate: [0, -30, 0] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-10 left-1/4 w-24 h-24 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-[8px] opacity-50 shadow-[0_0_50px_rgba(168,85,247,0.5)]"
      />
      <motion.div
         animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         className="absolute top-1/3 right-4 md:right-[15%] w-40 h-40 bg-gradient-to-br from-brand-blue to-teal-400 rounded-2xl blur-[14px] opacity-40 shadow-2xl"
         style={{ transformStyle: 'preserve-3d', transform: 'perspective(600px) rotateX(30deg) rotateZ(20deg)' }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[1.05] font-heading font-bold tracking-tight mb-8">
            {t('hero_title1')} <br className="hidden md:block"/> {t('hero_title2')}
          </h1>
          <p className="text-lg md:text-xl text-brand-text-dim max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-accent text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-brand-accent-hover transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
            >
              {t('hero_quote_btn')} <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-surface text-white font-semibold px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              {t('hero_portfolio_btn')}
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#111318] bg-gradient-to-tr from-brand-blue to-teal-400 flex items-center justify-center shadow-lg relative z-[4]"><span className="text-[10px] font-bold">US</span></div>
                <div className="w-12 h-12 rounded-full border-2 border-[#111318] bg-gradient-to-tr from-brand-accent to-orange-500 flex items-center justify-center shadow-lg relative z-[3]"><span className="text-[10px] text-zinc-900 font-bold">UK</span></div>
                <div className="w-12 h-12 rounded-full border-2 border-[#111318] bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg relative z-[2]"><span className="text-[10px] font-bold">CA</span></div>
                <div className="w-12 h-12 rounded-full border-2 border-[#111318] bg-brand-surface flex items-center justify-center shadow-lg relative z-[1]">
                  <span className="text-sm font-bold text-white">+</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex gap-1 mb-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-sm text-brand-text-dim leading-tight">
                  <strong className="text-white font-semibold">{t('hero_stats_sites').split(' ')[0]}</strong> {t('hero_stats_sites').substring(t('hero_stats_sites').indexOf(' ') + 1)}<br/>
                  <span className="text-xs">{t('hero_stats_rating')}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Constellation Effect */}
      <div className="absolute top-40 right-20 hidden lg:block opacity-50">
        <MousePointer2 className="w-6 h-6 text-brand-text-dim rotate-[-45deg]" />
        <svg className="absolute top-2 left-6 w-32 h-32 overflow-visible" stroke="currentColor" fill="none" viewBox="0 0 100 100">
           <path d="M0,0 Q50,40 100,20" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
        </svg>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-12 border-y border-white/5 bg-brand-surface/30 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-80">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center md:justify-start gap-4"
      >
         <span className="text-4xl font-heading font-bold text-white">+500</span>
         <span className="text-sm text-brand-text-dim leading-tight">Websites<br/>Designed</span>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-16 text-brand-text-dim font-bold font-heading text-lg md:text-2xl tracking-widest grayscale opacity-50">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>HOUSTON</motion.span>
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>AUSTIN</motion.span>
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>DALLAS</motion.span>
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>GLOBAL</motion.span>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h2 className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-4">the narrative</h2>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold mb-6"
      >
        Fast & Transparent
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-brand-text-dim"
      >
        We skip the endless meetings and get straight to building high-converting sites.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-brand-blue text-white font-semibold flex items-center mx-auto transition-colors duration-200 px-6 py-2.5 rounded-full text-sm hover:bg-brand-blue-hover shadow-[0_0_20px_rgba(37,99,235,0.3)]"
      >
        EXPLORE OUR PROCESS
      </motion.button>
    </div>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-brand-surface rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/20 transition-all group shadow-lg shadow-black/50"
      >
        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-colors">
          <span className="font-heading font-bold text-brand-blue">01</span>
        </div>
        <h4 className="text-xl md:text-2xl font-semibold mb-4">Rapid Prototyping</h4>
        <p className="text-brand-text-dim leading-relaxed text-sm md:text-base">
          Within 48 hours, you'll receive a high-fidelity mockup of your new website. No more guessing how your brand will look online. We iterate quickly based on your direct feedback.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -5 }}
        className="bg-brand-surface rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/20 transition-all group shadow-lg shadow-black/50"
      >
        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-colors">
          <span className="font-heading font-bold text-brand-accent">02</span>
        </div>
        <h4 className="text-xl md:text-2xl font-semibold mb-4">Development & Launch</h4>
        <p className="text-brand-text-dim leading-relaxed text-sm md:text-base">
          Stunning visual designs built on modern, lightning-fast technology. We ensure perfect mobile responsiveness and SEO fundamentals, launching your site securely in days.
        </p>
      </motion.div>
    </div>
  </section>
);

const BentoFeatures = () => {
  const features = [
    { icon: <Layout className="text-brand-blue" />, title: "Premium Design", desc: "Corporate sites designed to convert visitors into loyal customers." },
    { icon: <Clock className="text-brand-accent" />, title: "Lightning Fast", desc: "Skip the months of waiting. Your site ready in record time." },
    { icon: <Banknote className="text-[#a78bfa]" />, title: "Affordable Price", desc: "High-end corporate quality starting at just $500 setup." },
    { icon: <Smartphone className="text-[#34d399]" />, title: "Mobile First", desc: "Pixel-perfect, fast-loading mobile responsive experiences." }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0a0b0e]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4"
        >
          VALUE PROPOSITION
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold max-w-2xl mx-auto"
        >
          Stop overpaying for a slow website build
        </motion.h3>
      </div>
      
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#15171d] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-[#1a1d24] transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center mb-6 border border-white/5 shadow-inner">
              {feat.icon}
            </div>
            <h4 className="text-lg font-semibold mb-2">{feat.title}</h4>
            <p className="text-sm text-brand-text-dim leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Determine active slide
    const slideWidth = el.clientWidth * 0.82; // approx width of each snap item
    const idx = Math.round(el.scrollLeft / slideWidth);
    setActiveIdx(Math.min(idx, projects.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [updateScrollButtons]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth * 0.82;
    el.scrollBy({ left: dir === 'left' ? -slideWidth : slideWidth, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4"
        >
          PORTFOLIO
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold"
        >
          Made with Houston Express
        </motion.h3>
      </div>

      {/* Slider */}
      <div className="relative group/slider">
        {/* Navigation Arrows */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={() => scroll('left')}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-brand-bg/90 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-surface hover:border-white/30 transition-all shadow-2xl cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={() => scroll('right')}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-brand-bg/90 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-surface hover:border-white/30 transition-all shadow-2xl cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-[9%]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="snap-center flex-shrink-0 group cursor-pointer"
              style={{ width: '80vw', maxWidth: '1100px' }}
              onClick={() => navigate(`/proyecto/${project.slug}`)}
            >
              {/* Image Container */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/40"
                style={{ height: '60vh', minHeight: '400px', maxHeight: '700px' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3 border border-brand-blue/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm text-white/70 font-medium flex items-center gap-1.5 group-hover:text-brand-accent transition-colors">
                      View project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-white/50 hover:text-white flex items-center gap-1.5 transition-colors ml-auto"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const slideWidth = el.clientWidth * 0.82;
                el.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIdx
                  ? 'w-8 bg-brand-accent'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ name, price, description, features, isPopular = false, delay = 0 }: any) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col h-full rounded-[24px] border transition-all duration-500 ${
        isPopular
          ? 'bg-brand-surface border-brand-accent shadow-[0_20px_50px_rgba(255,184,77,0.2)] scale-105 md:scale-100'
          : 'bg-brand-surface border-white/10 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
      } p-8 md:p-10`}
    >
      {isPopular && (
        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs border border-brand-accent/20 w-fit">
          Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-brand-text-dim text-sm mb-6">{description}</p>
      
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-heading font-bold">{price}</span>
      </div>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-colors mb-8 flex items-center justify-center ${
          isPopular
            ? 'bg-brand-accent text-zinc-900 hover:bg-brand-accent-hover shadow-[0_0_30px_rgba(255,184,77,0.3)]'
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
        }`}
      >
        {t('pricing_cta')}
      </motion.a>

      <div className="space-y-4 flex-1">
        {features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-brand-accent' : 'text-brand-blue'}`} />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t('pricing_express_name'),
      price: t('pricing_express_price'),
      description: t('pricing_express_desc'),
      features: [
        t('pricing_express_feature1'),
        t('pricing_express_feature2'),
        t('pricing_express_feature3'),
        t('pricing_express_feature4'),
        t('pricing_express_feature5'),
        t('pricing_express_feature6'),
      ],
      isPopular: false,
    },
    {
      name: t('pricing_advanced_name'),
      price: t('pricing_advanced_price'),
      description: t('pricing_advanced_desc'),
      features: [
        t('pricing_advanced_feature1'),
        t('pricing_advanced_feature2'),
        t('pricing_advanced_feature3'),
        t('pricing_advanced_feature4'),
        t('pricing_advanced_feature5'),
        t('pricing_advanced_feature6'),
        t('pricing_advanced_feature7'),
        t('pricing_advanced_feature8'),
      ],
      isPopular: true,
    },
    {
      name: t('pricing_pro_name'),
      price: t('pricing_pro_price'),
      description: t('pricing_pro_desc'),
      features: [
        t('pricing_pro_feature1'),
        t('pricing_pro_feature2'),
        t('pricing_pro_feature3'),
        t('pricing_pro_feature4'),
        t('pricing_pro_feature5'),
        t('pricing_pro_feature6'),
        t('pricing_pro_feature7'),
        t('pricing_pro_feature8'),
        t('pricing_pro_feature9'),
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6 border border-brand-blue/20">
            {t('pricing_tag')}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t('pricing_title')}</h2>
          <p className="text-brand-text-dim text-lg max-w-2xl mx-auto">{t('pricing_subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              {...plan}
              delay={idx * 0.1}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-brand-text-dim"
        >
          {t('pricing_maintenance')}
        </motion.p>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name') as string;
    const business = formData.get('business') as string;
    const email = formData.get('email') as string;
    const help = formData.get('help') as string;

    const messageText = `Hola! Me interesa cotizar una página web.%0A%0A*Nombre:* ${encodeURIComponent(name)}%0A*Empresa:* ${encodeURIComponent(business)}%0A*Email:* ${encodeURIComponent(email)}%0A*Mensaje:* ${encodeURIComponent(help)}`;
    window.open(`https://wa.me/5491131486912?text=${messageText}`, '_blank');
    setStatus('submitted');
  };

  return (
    <section className="py-24 md:py-32 px-6 border-y border-white/5 bg-[#0b0c10]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Start Your Project</h2>
          <p className="text-brand-text-dim text-lg">Let's shape the future of your company.</p>
        </div>

        {status === 'submitted' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-16 bg-brand-surface rounded-3xl border border-brand-accent/20"
          >
            <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle2 className="w-10 h-10 text-brand-accent" />
              </motion.div>
            </div>
            <h3 className="text-3xl font-heading font-bold mb-2">Inquiry Sent!</h3>
            <p className="text-brand-text-dim text-lg">We'll get back to you within 24 hours to schedule your kickoff.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit} 
            className="bg-brand-surface p-8 md:p-10 border border-white/5 rounded-[32px] gap-6 flex flex-col hover:border-white/10 transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">Full Name</label>
                <input required name="name" type="text" className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">Business Name</label>
                <input required name="business" type="text" className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Acme Corp" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">Email Address</label>
              <input required name="email" type="email" className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">How can we help you?</label>
              <textarea required name="help" rows={4} className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none" placeholder="Tell us about your project goals..." />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="mt-4 bg-white text-zinc-900 font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Send className="w-5 h-5" /> Send Inquiry
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

const Footer = () => (
  <footer className="py-12 px-6 bg-[#0a0b0e]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center">
        <img src="/logo.png" alt="Houston Express Logo" className="h-12 object-contain" />
      </div>
      <div className="text-sm text-brand-text-dim">
        © {new Date().getFullYear()} Houston Professional Web Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <BentoFeatures />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/proyecto/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
