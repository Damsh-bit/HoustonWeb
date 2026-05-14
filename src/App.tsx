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
  Banknote
} from 'lucide-react';
import { FormEvent, useState, useEffect } from 'react';

// Components
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            H
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">HoustonWeb</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text-dim">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="hidden md:flex">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Launch Fast
          </motion.button>
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
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">Services</a>
              <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">Process</a>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">Portfolio</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-dim hover:text-white transition-colors py-2">Pricing</a>
              <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white w-full text-zinc-900 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-200 transition-colors mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Launch Fast
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
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
            Premium websites. <br className="hidden md:block"/> Fast & Affordable.
          </h1>
          <p className="text-lg md:text-xl text-brand-text-dim max-w-2xl mx-auto mb-10 leading-relaxed">
            Boost your digital presence in Houston with tailor-made, high-performance websites. <br className="hidden md:block" /><span className="text-white font-medium">Delivered in days for just $500.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-accent text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-brand-accent-hover transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
            >
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-surface text-white font-semibold px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </motion.button>
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
                  <strong className="text-white font-semibold">+500</strong> corporate sites globally<br/>
                  <span className="text-xs">5.0 rating on Google Reviews</span>
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

const projects = [
  {
    id: 1,
    title: "Houston Energy Dash",
    category: "Enterprise Web App",
    imageSize: "711 × 400",
    caseStudy: "We partnered with a top energy provider in Houston to rebuild their legacy internal dashboard. The new platform consolidates live analytics and fleet tracking into one highly responsive interface, saving their dispatch team 15+ hours weekly.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    testimonial: {
      text: "HoustonWeb understood our complex data needs immediately. The resulting UI is both gorgeous and incredibly functional.",
      author: "Marcus Vance, Director of Operations"
    },
    colSpan: "md:col-span-7",
    gradient: "from-brand-blue/20 to-transparent",
    hoverBorder: "group-hover:border-brand-blue/40"
  },
  {
    id: 2,
    title: "Velocity Real Estate",
    category: "Corporate Website",
    imageSize: "400 × 400",
    caseStudy: "A premium digital storefront for luxury properties in Texas. We focused on high-performance image loading, refined typography, and seamless property search capabilities.",
    technologies: ["Next.js", "Framer Motion", "Mapbox", "Sanity CMS"],
    testimonial: {
       text: "HoustonWeb has transformed the way our team works. Deliveries are a breeze; making motion more efficient, while staying on brand.",
       author: "Alicia Curtis, Lead Broker"
    },
    colSpan: "md:col-span-5",
    gradient: "from-brand-accent/20 to-transparent",
    hoverBorder: "group-hover:border-brand-accent/40"
  }
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  // Effect to lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <section id="portfolio" className="py-24 px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4">GALLERY</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Made with HoustonWeb</h3>
        </div>

        <div className="grid md:grid-cols-12 gap-4 h-[600px] mt-12">
          <motion.div 
            onClick={() => setSelectedId(1)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`md:col-span-7 bg-brand-surface rounded-2xl border border-white/5 overflow-hidden group relative flex-col flex items-center justify-center cursor-pointer transition-colors ${projects[0].hoverBorder}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-tr ${projects[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none`} />
            <div className="absolute inset-4 bg-[#0a0b0e] rounded-xl flex items-center justify-center group-hover:bg-[#111318] transition-colors">
               <div className="text-6xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors">{projects[0].imageSize}</div>
               <div className="absolute bottom-8 left-8 text-left opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                 <p className="text-brand-blue text-sm font-bold mb-1 uppercase tracking-wider">{projects[0].category}</p>
                 <p className="text-2xl font-heading font-bold text-white">{projects[0].title}</p>
               </div>
            </div>
          </motion.div>
          
          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.div 
               onClick={() => setSelectedId(2)}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
              className={`flex-1 bg-brand-surface rounded-2xl border border-white/5 overflow-hidden group relative p-4 flex items-center justify-center cursor-pointer transition-colors ${projects[1].hoverBorder}`}
            >
               <div className={`absolute inset-0 bg-gradient-to-tr ${projects[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none`} />
               <div className="w-full h-full bg-[#0a0b0e] rounded-xl flex items-center justify-center group-hover:bg-[#111318] transition-colors relative overflow-hidden">
                 <div className="text-4xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors">{projects[1].imageSize}</div>
                 <div className="absolute bottom-8 left-8 text-left opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                   <p className="text-brand-accent text-sm font-bold mb-1 uppercase tracking-wider">{projects[1].category}</p>
                   <p className="text-xl font-heading font-bold text-white">{projects[1].title}</p>
                 </div>
               </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
              className="flex-1 bg-[#4f46e5]/10 rounded-2xl border border-[#4f46e5]/20 overflow-hidden relative p-8 flex flex-col justify-center"
            >
               <p className="text-xl md:text-2xl font-heading text-white/90 leading-tight mb-4">
                  "{projects[1].testimonial.text}"
               </p>
               <div>
                 <p className="font-semibold text-sm">{projects[1].testimonial.author}</p>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-brand-surface border border-white/10 rounded-3xl z-[101] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5 bg-brand-bg/50">
                <div>
                  <p className="text-brand-accent text-sm font-bold mb-1 uppercase tracking-wider">{selectedProject.category}</p>
                  <h3 className="text-2xl font-heading font-bold">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="aspect-video w-full bg-brand-bg rounded-xl mb-8 flex items-center justify-center border border-white/5 relative overflow-hidden">
                   <div className="text-5xl font-heading font-bold text-white/5">{selectedProject.imageSize} View</div>
                   <div className={`absolute inset-0 bg-gradient-to-tr ${selectedProject.gradient} opacity-50`} />
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                         <Layout className="w-5 h-5 text-brand-blue" /> The Challenge & Solution
                      </h4>
                      <p className="text-brand-text-dim leading-relaxed tracking-wide">
                        {selectedProject.caseStudy}
                      </p>
                    </div>
                    <div className="p-6 bg-brand-bg/50 rounded-2xl border border-white/5 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-5">
                          <Star className="w-24 h-24" />
                       </div>
                       <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
                          Client Testimonial
                       </h4>
                       <p className="text-brand-text-dim italic mb-4">"{selectedProject.testimonial.text}"</p>
                       <p className="text-sm font-bold text-brand-accent">— {selectedProject.testimonial.author}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex flex-col">
                    <div>
                      <h4 className="text-lg font-bold mb-4 font-heading border-b border-white/5 pb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-brand-bg border border-white/5 rounded-lg text-sm text-brand-text-dim font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto pt-6">
                       <button className="w-full py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold transition-colors flex items-center justify-center gap-2">
                          Visit Live Site <ExternalLink className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 bg-brand-blue relative overflow-hidden">
    {/* Decorative blur */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-brand-bg rounded-[32px] p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative z-10 flex flex-col md:flex-row gap-12 items-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500"
      >
        
        <div className="flex-1">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6 border border-brand-blue/20"
          >
            Houston Special
          </motion.div>
          <h3 className="text-4xl lg:text-5xl font-heading font-bold mb-4">The Corporate Plan</h3>
          <p className="text-brand-text-dim text-lg mb-8 max-w-sm">Everything you need to jumpstart your local digital presence rapidly.</p>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="flex items-baseline gap-2 mb-8"
          >
            <span className="text-6xl font-heading font-bold text-white">$500</span>
            <span className="text-brand-text-dim text-xl">Setup</span>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-brand-accent text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-brand-accent-hover transition-colors text-lg shadow-[0_0_30px_rgba(163,230,53,0.3)]"
          >
            Claim Your Discount
          </motion.button>
          <p className="text-sm text-brand-text-dim mt-4">
            * $20/month maintenance fee applies after first month
          </p>
        </div>

        <div className="flex-1 w-full bg-brand-surface rounded-3xl p-8 lg:p-10 border border-white/5">
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-lg">
              <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <span>Custom .com Domain Included</span>
            </li>
             <li className="flex items-center gap-4 text-lg">
              <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <span>Ultra-Fast SSD Hosting</span>
            </li>
             <li className="flex items-center gap-4 text-lg">
              <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <span>SSL Security Certificate</span>
            </li>
             <li className="flex items-center gap-4 text-lg">
              <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <span>WhatsApp & Social Integration</span>
            </li>
             <li className="flex items-center gap-4 tracking-tight opacity-50 text-lg border-t border-white/5 pt-4 mt-2">
              <Zap className="w-5 h-5 flex-shrink-0" />
              <span>SEO Optimized Foundation</span>
            </li>
          </ul>
        </div>
        
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
                <input required type="text" className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">Business Name</label>
                <input required type="text" className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Acme Corp" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">Email Address</label>
              <input required type="email" className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text-dim mb-2 ml-1">How can we help you?</label>
              <textarea required rows={4} className="w-full bg-brand-bg border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none" placeholder="Tell us about your project goals..." />
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
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
          H
        </div>
        <span className="font-heading font-bold text-lg tracking-tight">HoustonWeb</span>
      </div>
      <div className="text-sm text-brand-text-dim">
        © {new Date().getFullYear()} Houston Professional Web Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
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
