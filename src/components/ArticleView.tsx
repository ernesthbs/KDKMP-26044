/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { articleData } from "../data/article";
import { 
  FileText, 
  Calendar, 
  User, 
  BookOpen, 
  Quote, 
  Share2, 
  Printer, 
  Clock, 
  Tag, 
  Bookmark,
  Award
} from "lucide-react";

interface ArticleViewProps {
  plantationImage?: string;
  beansCloseupImage?: string;
  brewedCupImage?: string;
  lifestyleImage?: string;
}

export default function ArticleView({ plantationImage, beansCloseupImage, brewedCupImage, lifestyleImage }: ArticleViewProps) {
  const [activeSubSection, setActiveSubSection] = useState<number>(0);

  return (
    <div id="success-article" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Table of contents and quick stats on the left */}
      <div className="lg:col-span-3 lg:block hidden">
        <div className="bg-[#0c0c0c] border border-stone-850 rounded-xl p-5 sticky top-24 shadow-md">
          <div className="mb-4 pb-4 border-b border-stone-850">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Navigasi Artikel</h4>
            <p className="text-[11px] text-stone-400 mt-1 font-mono">{articleData.readTime}</p>
          </div>
          <nav className="space-y-1 max-h-[50vh] overflow-y-auto pr-1">
            {articleData.sections.map((section, idx) => {
              const isActive = activeSubSection === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSubSection(idx);
                    const el = document.getElementById(`article-sec-${idx}`);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className={`w-full text-left text-xs py-2 px-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-stone-900 text-[#D4AF37] font-semibold border-l-2 border-[#D4AF37] border-y border-stone-850"
                      : "text-stone-300 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  <span className="truncate block">{section.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="border-t border-stone-850 pt-4 mt-4 space-y-3.5 text-xs">
            <div className="flex items-center gap-2 text-stone-400">
              <User className="w-4 h-4 text-stone-500" />
              <span>{articleData.author.split(" (")[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Calendar className="w-4 h-4 text-stone-500" />
              <span>{articleData.date}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Tag className="w-4 h-4 text-stone-500" />
              <span className="font-mono bg-stone-900 border border-stone-800 text-[#D4AF37] px-2 py-0.5 rounded text-[10px]">{articleData.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reading Column */}
      <div className="lg:col-span-9">
        <article className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-6 md:p-10 shadow-md space-y-8">
          {/* Article Header */}
          <header className="border-b border-stone-850 pb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#D4AF37]/20 uppercase tracking-wider">
                Artikel Jurnalistik
              </span>
              <span className="text-stone-600 text-xs">•</span>
              <span className="text-stone-400 text-xs font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                {articleData.readTime}
              </span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-5 italic">
              {articleData.title}
            </h1>

            {/* Author and meta info (mobile visible) */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pb-4 border-b border-stone-850">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-stone-800 text-[#D4AF37] border border-stone-700 flex items-center justify-center font-bold text-[10px]">
                  NH
                </div>
                <span className="font-medium text-stone-300">{articleData.author}</span>
              </div>
              <span className="text-stone-600">|</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                <span>{articleData.date}</span>
              </div>
            </div>

            {/* Editorial Summary Intro */}
            <div className="mt-6 bg-stone-900/40 border border-stone-850 rounded-xl p-5 md:p-6 italic text-stone-300 text-sm leading-relaxed border-l-4 border-[#D4AF37]">
              <span className="font-mono font-bold text-[#D4AF37] block mb-1 text-[10px] uppercase tracking-widest">Ikhtisar Redaksi</span>
              "{articleData.summary}"
            </div>
          </header>

          {/* Article Editorial Images Grid */}
          {lifestyleImage && (
            <div className="my-8 overflow-hidden rounded-xl h-80 border border-stone-800 shadow-inner relative">
              <img
                src={lifestyleImage}
                alt="Seseorang sedang menikmati seduhan kopi Arabika Garut KDKMP"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest block">Lensa KDKMP</span>
                <p className="text-xs text-stone-200 mt-0.5">Membawa tradisi kopi berkelanjutan dari gunung ke cangkir Anda.</p>
              </div>
            </div>
          )}

          {/* Sections Loop */}
          <div className="space-y-10 text-stone-300 leading-relaxed text-[15px] md:text-base">
            {articleData.sections.map((section, idx) => (
              <section 
                key={idx} 
                id={`article-sec-${idx}`}
                className="space-y-4 pt-4 first:pt-0"
                onMouseEnter={() => setActiveSubSection(idx)}
              >
                <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight pb-2 border-b border-stone-850 flex items-center gap-2">
                  <span className="text-[#D4AF37]">■</span>
                  {section.title}
                </h3>
                
                <div className="space-y-4">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Section Specific Quote */}
                {section.quote && (
                  <div className="my-6 bg-stone-900/35 border border-stone-850 rounded-xl p-6 border-l-4 border-[#D4AF37] relative overflow-hidden">
                    <Quote className="w-12 h-12 text-[#D4AF37]/15 absolute -top-1 -right-1 opacity-80" />
                    <p className="italic text-stone-300 text-sm md:text-base relative z-10 mb-3">
                      "{section.quote.text}"
                    </p>
                    <div className="text-xs">
                      <strong className="text-white block">{section.quote.author}</strong>
                      <span className="text-stone-400 font-mono mt-0.5 block">{section.quote.role}</span>
                    </div>
                  </div>
                )}

                {/* Insertion of extra visual markers */}
                {idx === 2 && plantationImage && (
                  <div className="my-8 overflow-hidden rounded-xl h-64 border border-stone-800 shadow-inner">
                    <img
                      src={plantationImage}
                      alt="Garut Coffee Plantation hills"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {idx === 3 && brewedCupImage && (
                  <div className="my-8 overflow-hidden rounded-xl h-64 border border-stone-800 shadow-inner">
                    <img
                      src={brewedCupImage}
                      alt="Brewed warm coffee cup specialty"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Article Footer Sign-off */}
          <footer className="border-t border-stone-850 pt-8 mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-stone-400">
            <div>
              <span className="font-semibold text-stone-300 block">Koperasi Desa Merah Putih (KDKMP)</span>
              <span className="mt-0.5 block">© 2026 KDKMP. Hak Cipta Dilindungi Undang-Undang.</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-800 hover:bg-stone-900 text-stone-300 font-medium transition cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
                Cetak Artikel
              </button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
