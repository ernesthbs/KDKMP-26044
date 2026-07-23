/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { companySections, companyName, companyNameAbbr } from "../data/companyProfile";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Users, 
  History, 
  Compass, 
  FileText, 
  Network, 
  Briefcase, 
  Award, 
  Leaf, 
  Globe, 
  X,
  Sparkles,
  Quote
} from "lucide-react";

interface CompanyProfileViewProps {
  plantationImage?: string;
  beansCloseupImage?: string;
}

export default function CompanyProfileView({ plantationImage, beansCloseupImage }: CompanyProfileViewProps) {
  const [activeTab, setActiveTab] = useState<string>("pengantar");

  const iconsMap: Record<string, React.ReactNode> = {
    "pengantar": <BookOpen className="w-5 h-5" />,
    "profil-singkat": <Users className="w-5 h-5" />,
    "sejarah": <History className="w-5 h-5" />,
    "visi-misi": <Compass className="w-5 h-5" />,
    "legalitas": <FileText className="w-5 h-5" />,
    "struktur": <Network className="w-5 h-5" />,
    "bidang-usaha": <Briefcase className="w-5 h-5" />,
    "keunggulan": <Award className="w-5 h-5" />,
    "petani-sustainability": <Leaf className="w-5 h-5" />,
    "target-pasar": <Globe className="w-5 h-5" />,
    "penutup": <Sparkles className="w-5 h-5" />
  };

  const activeSection = companySections.find(s => s.id === activeTab) || companySections[0];

  return (
    <div id="company-profile" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1">
        <div className="bg-[#0c0c0c] border border-stone-850 rounded-xl p-5 sticky top-24 shadow-md">
          <div className="mb-4 pb-4 border-b border-stone-850">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">Daftar Isi</h3>
            <p className="text-xs text-stone-400 mt-1">Company Profile Resmi {companyNameAbbr}</p>
          </div>
          <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {companySections.map((section) => {
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left text-sm transition-all ${
                    isActive
                      ? "bg-stone-900 text-[#D4AF37] font-semibold border border-[#D4AF37]/20 shadow-md"
                      : "text-stone-300 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  <span className={`${isActive ? "text-[#D4AF37]" : "text-stone-500"}`}>
                    {iconsMap[section.id] || <BookOpen className="w-4 h-4" />}
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeSection.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 lg:p-10 shadow-md"
          >
            {/* Header */}
            <div className="mb-8 pb-6 border-b border-stone-850">
              <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase block mb-2">
                {activeSection.subtitle || "Koperasi Desa Merah Putih"}
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white tracking-tight italic">
                {activeSection.title}
              </h2>
            </div>

            {/* Special Section Image Placeholders */}
            {activeSection.id === "pengantar" && beansCloseupImage && (
              <div className="mb-8 overflow-hidden rounded-xl h-64 border border-stone-800 shadow-inner">
                <img
                  src={beansCloseupImage}
                  alt="Premium roasted coffee beans closeup"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {activeSection.id === "profil-singkat" && plantationImage && (
              <div className="mb-8 overflow-hidden rounded-xl h-64 border border-stone-800 shadow-inner">
                <img
                  src={plantationImage}
                  alt="Garut Coffee Plantation landscape"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Content Paragraphs */}
            <div className="space-y-4 text-stone-300 leading-relaxed text-[15px] lg:text-base">
              {activeSection.content.map((paragraph, idx) => (
                <p key={idx} className={paragraph.startsWith("•") || paragraph.startsWith("1.") || paragraph.startsWith("2.") ? "pl-4 text-stone-100 font-medium" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Metrics Grid (for Profil Singkat) */}
            {activeSection.metrics && (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSection.metrics.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-lg border border-stone-850 bg-stone-900/30 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-sm font-medium text-stone-400 block mb-1">{metric.label}</span>
                      <span className="text-3xl font-serif font-extrabold text-[#D4AF37] tracking-tight">
                        {metric.value}
                      </span>
                    </div>
                    {metric.desc && (
                      <p className="text-xs text-stone-400 mt-2.5 border-t border-stone-850 pt-2">
                        {metric.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Bullet Points List */}
            {activeSection.bulletPoints && (
              <div className="mt-8 bg-stone-900/20 border border-stone-850 rounded-xl p-6">
                <h4 className="font-serif text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4 pb-2 border-b border-stone-850">
                  Butir Informasi Penting / Komitmen
                </h4>
                <ul className="space-y-3">
                  {activeSection.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                      <div>
                        {point.includes(":") ? (
                          <>
                            <strong className="text-white">{point.split(":")[0]}:</strong>
                            {point.split(":")[1]}
                          </>
                        ) : (
                          point
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quote Block if matching section has specific quotes */}
            {activeSection.id === "sejarah" && (
              <div className="mt-8 border-l-4 border-[#D4AF37] pl-5 py-2.5 my-6 bg-stone-900/20 rounded-r-lg">
                <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-2" />
                <p className="italic text-stone-300 text-sm md:text-base">
                  "Sejarah KDKMP adalah sejarah perjuangan kolektif. Dari ketidakberdayaan di hadapan tengkulak, hingga berdiri mandiri menandatangani kontrak ekspor dengan pemanggang kopi di Eropa. Koperasi mengembalikan martabat petani."
                </p>
                <span className="block text-xs font-bold text-white uppercase tracking-wider mt-2">
                  — Ir. Cecep Supriadi, Manajer Hubungan Petani KDKMP
                </span>
              </div>
            )}

            {/* Call to Action in Penutup */}
            {activeSection.id === "penutup" && (
              <div className="mt-10 p-6 bg-gradient-to-br from-[#111] to-[#0a0a0a] text-stone-200 rounded-xl border border-stone-800 shadow-md">
                <h4 className="font-serif text-lg font-bold text-[#D4AF37] mb-2">
                  Hubungi Kantor Ekspor KDKMP
                </h4>
                <p className="text-xs text-stone-400 mb-4">
                  Koperasi Desa Merah Putih menyambut kerja sama kemitraan global, pasokan skala besar, dan program berkelanjutan.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-stone-400 block">Surat Elektronik</span>
                    <a href="mailto:export@kdkmp-coffee.or.id" className="text-[#D4AF37] hover:underline block font-mono">
                      export@kdkmp-coffee.or.id
                    </a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-400 block">WhatsApp Bisnis</span>
                    <a href="https://wa.me/6281123456789" className="text-[#D4AF37] hover:underline block font-mono">
                      +62 811-2345-6789
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
