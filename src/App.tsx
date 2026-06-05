import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Palette } from 'lucide-react';
import { profile, highlights, experience, awards, mediaCoverage, aiActivities } from './data';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [theme, setTheme] = useState<'light' | 'blue'>('blue');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-app-bg text-app-text font-sans selection:bg-app-text selection:text-app-bg transition-colors duration-500">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 border-b border-app-text bg-app-bg/90 backdrop-blur-sm px-6 h-16 flex items-center justify-between text-xs font-bold uppercase tracking-widest transition-colors duration-500">
        <div>YJH. PORTFOLIO</div>
        <div className="hidden md:flex gap-8 items-center">
           <a href="#about" className="hover:line-through">About</a>
           <a href="#work" className="hover:line-through">Work</a>
           <a href="#experience" className="hover:line-through">Experience</a>
           <a href="#awards" className="hover:line-through">Awards</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(t => t === 'light' ? 'blue' : 'light')}
            className="flex items-center justify-center p-2 rounded-full hover:bg-app-text/10 transition-colors"
            title="테마 색상 변경"
          >
            <Palette className="w-4 h-4" />
          </button>
          <div className="hidden md:block">2026</div>
        </div>
      </header>

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col justify-end p-6 md:p-12 border-b border-app-text pb-12 overflow-hidden">
          {/* Sophisticated Background Profile */}
          <div className="absolute inset-0 pointer-events-none select-none">
            {/* 1. Base Image - Replace src with your uploaded image */}
            <img 
              src="/me.webp" 
              alt="Profile Background" 
              className={`absolute right-0 top-0 w-[90%] md:w-[60%] h-full object-cover object-top grayscale scale-[0.7] origin-top-right transition-all duration-500 ${theme === 'blue' ? 'mix-blend-luminosity opacity-40' : 'mix-blend-multiply opacity-50'}`}
            />
            
            {/* 2. Gradient Masks for smooth blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-app-bg/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-app-bg via-app-bg/40 to-transparent z-10" />
            
            {/* 3. Film Grain Overlay for sophisticated texture */}
            <div 
              className="absolute inset-0 z-20 mix-blend-overlay opacity-30" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-end relative z-30">
             <div className="md:col-span-8 overflow-hidden">
               <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-[13vw] md:text-[11vw] leading-[0.85] font-bold uppercase tracking-tight"
               >
                 Public<br />Admin<span className="text-transparent" style={{ WebkitTextStroke: '2px var(--theme-text)' }}>istrator</span>
               </motion.h1>
             </div>
             <div className="md:col-span-4 pb-2">
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4, duration: 1 }}
               >
                 <div className="w-12 h-[2px] bg-app-text mb-6" />
                 <p className="text-lg md:text-xl font-medium mb-6 leading-snug break-keep drop-shadow-sm">
                   전국 최초의 혁신 시스템,<br />시민의 삶을 바꿉니다.
                 </p>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-80 backdrop-blur-sm mt-auto inline-block">
                   {profile.name} ({profile.nameHanja}) / {profile.title}
                 </p>
               </motion.div>
             </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section id="work" className="border-b border-app-text">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-app-text">
              <FadeUp className="h-full flex flex-col justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border border-app-text rounded-full mb-12 md:mb-0 text-center inline-block">01</span>
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4 break-keep">지자체 최초 추진 프로젝트</h2>
                   <p className="text-xs opacity-60 max-w-[150px]">남양주시 발전을 이끈 최초 프로젝트</p>
                </div>
              </FadeUp>
            </div>
            <div className="md:col-span-9 flex flex-col">
               {highlights.map((item, idx) => (
                 <div key={idx} className="border-b border-app-text last:border-0">
                   <FadeUp delay={idx * 0.05}>
                     <div 
                       onClick={() => {
                         if (item.url) {
                           window.open(item.url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
                         }
                       }}
                       className="group p-6 md:p-12 grid md:grid-cols-12 gap-8 items-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-all duration-300"
                     >
                        <div className="md:col-span-3 text-xs font-mono opacity-60 flex flex-col gap-3">
                          <span>{item.date}</span>
                          <span className="border border-current px-2 py-1 rounded-full w-max text-[10px] uppercase tracking-widest">{item.badge}</span>
                        </div>
                        <div className="md:col-span-7">
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-app-bg">{item.title}</h3>
                          <p className="text-sm opacity-60 leading-relaxed break-keep group-hover:opacity-80">{item.description}</p>
                        </div>
                        <div className="md:col-span-2 flex justify-start md:justify-end">
                          <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 group-hover:bg-app-card group-hover:text-app-text">
                             <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                     </div>
                   </FadeUp>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & AWARDS */}
        <section className="grid lg:grid-cols-2">
          {/* Experience */}
          <div id="experience" className="border-r border-b lg:border-b-0 border-app-text">
            <div className="p-6 md:p-10 border-b border-app-text flex justify-between items-center bg-app-text text-app-bg">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">EXPERIENCE<br />(주요 경력)</h2>
              <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border border-app-bg rounded-full">02</span>
            </div>
            <div className="p-6 md:p-12 space-y-16">
               {experience.map((exp, idx) => (
                 <div key={idx} className="relative pl-8 border-l border-app-text">
                   <div className="absolute w-2 h-2 bg-app-text -left-[4.5px] top-2 rounded-full" />
                   <div className="flex flex-col mb-4">
                     <h4 className="text-xl md:text-2xl font-bold">{exp.role}</h4>
                     <span className="text-xs font-mono opacity-50 mt-2 uppercase tracking-wide">{exp.period}</span>
                   </div>
                   <div className="text-xs font-bold uppercase tracking-widest mb-6 border border-app-text w-max px-3 py-1.5 rounded-full">
                     {exp.organization}
                   </div>
                   <ul className="space-y-3">
                     {exp.details.map((detail, dIdx) => (
                       <li key={dIdx} className="text-sm opacity-80 flex items-start gap-4">
                         <span className="mt-2 w-1.5 h-px bg-current shrink-0" />
                         <span className="leading-relaxed">{detail}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
            </div>
          </div>

          {/* Awards & Media */}
          <div>
            <div id="awards" className="p-6 md:p-10 border-b border-app-text flex justify-between items-center bg-app-text text-app-bg">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">AWARD & PRESS<br />(수상 내역 및 언론 보도)</h2>
              <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border border-app-bg rounded-full">03</span>
            </div>
            
            <div className="p-6 md:p-12 border-b border-app-text">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-10 opacity-50 border-b border-app-text/20 pb-4">Awards</h3>
              <div className="space-y-8">
                 {awards.map((award, idx) => (
                   <div key={idx} className="flex gap-6 items-baseline">
                     <div className="text-xs font-mono opacity-50 w-20 shrink-0">{award.date}</div>
                     <div>
                       <h4 className="font-bold text-sm md:text-base">{award.title}</h4>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mt-2">{award.organization}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="p-6 md:p-12 border-b border-app-text bg-app-card">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-10 opacity-50 border-b border-app-text/20 pb-4">Media Coverage</h3>
              <div className="space-y-8">
                 {mediaCoverage.map((media, idx) => (
                   <a key={idx} href={media.url} target="_blank" rel="noopener noreferrer" className="group block">
                     <div className="flex gap-6 items-baseline">
                       <div className="text-xs font-mono opacity-50 w-12 shrink-0">{media.year}</div>
                       <div>
                         <h4 className="font-bold text-sm md:text-base group-hover:underline underline-offset-4 flex items-center gap-2 decoration-2 decoration-app-text/20">
                           {media.title}
                           <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                         </h4>
                         <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mt-2">{media.publisher}</p>
                       </div>
                     </div>
                   </a>
                 ))}
              </div>
            </div>

            <div className="p-6 md:p-12 bg-app-card">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-10 opacity-50 border-b border-app-text/20 pb-4">AI Expertise</h3>
              <div className="space-y-8">
                 {aiActivities.map((ai, idx) => (
                   <div key={idx} className="flex gap-6 items-baseline">
                     <div className="text-xs font-mono opacity-50 w-16 shrink-0">{ai.date}</div>
                     <div>
                       <h4 className="font-bold text-sm md:text-base">{ai.title}</h4>
                       <p className="text-sm opacity-70 mt-3 leading-relaxed break-keep font-light">{ai.description}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer id="about" className="p-6 md:p-12 bg-app-text text-app-bg flex flex-col justify-center text-center min-h-[50vh] border-t border-app-text relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border border-white/5 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[60%] h-[60%] border border-white/5 rounded-full" />
          </div>
          
          <h2 className="text-[10vw] md:text-[8vw] font-bold uppercase tracking-tighter leading-[0.85] mb-12 relative z-10 hover:italic transition-all duration-500">
            Let's Make<br/>History
          </h2>
          
          <div className="w-12 h-px bg-app-card/20 mx-auto mb-10 relative z-10" />
          
          <p className="text-sm opacity-60 max-w-sm mx-auto mb-16 leading-relaxed relative z-10 break-keep">
            끊임없는 혁신과 헌신으로 공공행정의 새로운 표준을 만들어갑니다.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between mt-auto pt-10 border-t border-white/10 w-full relative z-10">
            <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} YOO JONG HYUNG.
            </div>
            <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest opacity-60">
              <span>공공행정 포트폴리오</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
