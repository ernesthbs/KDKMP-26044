/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import CompanyProfileView from "./components/CompanyProfileView";
import ProductCatalogView from "./components/ProductCatalogView";
import BrandGuidelineView from "./components/BrandGuidelineView";
import ArticleView from "./components/ArticleView";
import { motion, AnimatePresence } from "motion/react";

// Asset imports
import coffeeBagImage from "./assets/images/coffee_bag_packaging_1784694869459.jpg";
import plantationImage from "./assets/images/coffee_plantation_garut_1784694884306.jpg";
import brewedCupImage from "./assets/images/brewed_coffee_cup_warm_1784694895702.jpg";
import logoImage from "./assets/images/kdkmp_logo_concept_1784694906256.jpg";
import beansCloseupImage from "./assets/images/coffee_beans_closeup_1784694918907.jpg";
import lifestyleImage from "./assets/images/lifestyle_coffee_enjoy_1784694929229.jpg";

import { 
  Building2, 
  Coffee, 
  BookOpen, 
  Compass, 
  FileText, 
  Image as ImageIcon,
  ChevronRight, 
  Menu, 
  X,
  MapPin,
  Flag,
  Sparkles,
  Award,
  Leaf,
  Globe,
  Printer,
  Eye,
  Info
} from "lucide-react";

type TabID = "cover" | "profile" | "product" | "brand" | "article" | "gallery";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>("cover");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  const navigationItems = [
    { id: "cover", label: "Cover & Dashboard", icon: <Compass className="w-4 h-4" /> },
    { id: "profile", label: "Company Profile", icon: <Building2 className="w-4 h-4" /> },
    { id: "product", label: "Katalog Produk", icon: <Coffee className="w-4 h-4" /> },
    { id: "brand", label: "Panduan Brand", icon: <Award className="w-4 h-4" /> },
    { id: "article", label: "Kisah Sukses", icon: <BookOpen className="w-4 h-4" /> },
    { id: "gallery", label: "Galeri & Mockup", icon: <ImageIcon className="w-4 h-4" /> }
  ];

  const galleryItems = [
    {
      src: coffeeBagImage,
      title: "Premium Coffee Bag Packaging",
      desc: "Mockup kemasan standing pouch premium hitam doff beraksen emas-merah-putih dengan ritsleting kedap udara (zipper) dan katup degassing satu arah."
    },
    {
      src: plantationImage,
      title: "Lembah Gunung Cikuray Garut",
      desc: "Foto pemandangan perkebunan kopi Arabika KDKMP yang dikelilingi oleh pegunungan berapi vulkanik legendaris Garut di Jawa Barat."
    },
    {
      src: brewedCupImage,
      title: "Freshly Brewed Specialty Coffee",
      desc: "Secangkir kopi hitam murni Arabika Garut specialty hasil seduh manual V60, memancarkan kehangatan, keasaman jeruk cerah, dan crema lembut."
    },
    {
      src: logoImage,
      title: "Logo Resmi KDKMP",
      desc: "Logo modern berbentuk lingkaran beraksen emas-merah-putih yang memadukan simbol biji kopi, pegunungan Garut, daun pelindung, dan jabat tangan koperasi."
    },
    {
      src: beansCloseupImage,
      title: "Macro Coffee Beans Closeup",
      desc: "Foto jarak dekat (macro shot) kualitas biji kopi sangrai (roasted beans) pilihan KDKMP dengan tingkat kematangan medium roast yang konsisten."
    },
    {
      src: lifestyleImage,
      title: "Lifestyle Coffee Experience",
      desc: "Visualisasi gaya hidup modern di mana penikmat kopi merasakan kompleksitas cita rasa eksotis Arabika Garut di sebuah kafe berarsitektur hangat."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 selection:bg-[#D4AF37]/20 selection:text-white antialiased flex flex-col font-sans">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo & Brand title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-stone-800 bg-stone-900 overflow-hidden flex items-center justify-center">
              <img
                src={logoImage}
                alt="KDKMP Logo Icon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-serif text-base font-bold text-[#D4AF37] tracking-wider leading-none">
                KDKMP COFFEE
              </h1>
              <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-widest mt-0.5 block">
                Koperasi Desa Merah Putih
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as TabID)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-stone-900 text-[#D4AF37] border border-[#D4AF37]/30 shadow-sm"
                      : "text-stone-300 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Print/Download button */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 border border-stone-800 hover:bg-stone-900 rounded-lg text-xs font-bold text-stone-300 transition"
            >
              <Printer className="w-4 h-4 text-[#D4AF37]" />
              <span>Cetak / PDF</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-lg"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0c0c] border-b border-stone-850 px-4 py-3 space-y-1">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as TabID);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-left transition-all ${
                    isActive
                      ? "bg-stone-900 text-[#D4AF37] border border-[#D4AF37]/20"
                      : "text-stone-300 hover:bg-stone-900"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                window.print();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-left text-stone-300 hover:bg-stone-900 border-t border-stone-850"
            >
              <Printer className="w-4 h-4 text-[#D4AF37]" />
              <span>Cetak Dokumen</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          
          {/* COVER & INTRO DASHBOARD */}
          {activeTab === "cover" && (
            <motion.div
              key="cover"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Grand Cover Hero Slide */}
              <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] text-stone-200 rounded-xl overflow-hidden relative border-4 border-[#1a1a1a] shadow-2xl min-h-[550px] flex items-center">
                {/* Background image overlay */}
                <div className="absolute inset-0 z-0 opacity-15">
                  <img
                    src={plantationImage}
                    alt="Garut hills coffee plantation landscape"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Radial black fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />

                <div className="p-8 md:p-16 relative z-20 max-w-2xl space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="h-0.5 w-6 bg-[#D4AF37]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-mono">
                      Export Quality Proposal & Brand Book
                    </span>
                  </div>
                  <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight italic">
                    Company Profile <br/>
                    <span className="text-[#D4AF37]">Koperasi Desa Merah Putih</span>
                  </h1>
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                    Eksplorasi cita rasa mewah dan autentik biji kopi Arabika Garut specialty. Kemitraan ekonomi adil berkelanjutan bersama ratusan petani lokal dari pegunungan Priangan Jawa Barat, siap dipasarkan ke kancah internasional.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className="bg-[#D4AF37] hover:bg-[#e6c148] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
                    >
                      <span>Jelajahi Profil</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab("product")}
                      className="bg-stone-900 hover:bg-stone-850 border border-stone-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition"
                    >
                      Lihat Katalog Produk
                    </button>
                  </div>
                </div>

                {/* Corner National Identity Pin */}
                <div className="absolute top-6 right-6 z-20 bg-stone-900/80 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full py-1.5 px-3.5 flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-0.5">
                      <div className="w-2.5 h-1.5 bg-[#EF4444]"></div>
                      <div className="w-2.5 h-1.5 bg-white"></div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest font-mono">KDKMP Indonesia</span>
                </div>
              </div>

              {/* Core Features Overview Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-[#0f0f0f] border-2 border-stone-850 rounded-xl p-6 shadow-md flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] mb-4">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">Company Profile</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Dokumentasi resmi struktur organisasi, legalitas usaha lengkap, sejarah gotong royong, serta komitmen sosiopreneurship kami.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("profile")}
                    className="text-[#D4AF37] hover:text-[#e6c148] text-xs font-bold flex items-center gap-1 mt-5 group"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="bg-[#0f0f0f] border-2 border-stone-850 rounded-xl p-6 shadow-md flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-red-400 mb-4">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">Premium Specialty Coffee</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Biji kopi pilihan terbaik dengan skor cupping test di atas 85. Ditanam di terroir vulkanik dengan keasaman jeruk segar dan keharuman melati.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("product")}
                    className="text-[#D4AF37] hover:text-[#e6c148] text-xs font-bold flex items-center gap-1 mt-5 group"
                  >
                    <span>Lihat Spesifikasi & Kalkulator</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="bg-[#0f0f0f] border-2 border-stone-850 rounded-xl p-6 shadow-md flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 mb-4">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">Kisah Sukses Jurnalistik</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Artikel editorial mendalam setebal 1.500 kata yang merinci dedikasi koperasi memimpin perdagangan kopi ekspor Garut ke pasar dunia.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("article")}
                    className="text-[#D4AF37] hover:text-[#e6c148] text-xs font-bold flex items-center gap-1 mt-5 group"
                  >
                    <span>Baca Artikel Berita</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

              </div>

              {/* Informative Banner */}
              <div className="bg-stone-900/40 border-l-4 border-[#D4AF37] rounded-xl p-6 flex gap-4 items-start">
                <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Petunjuk Navigasi Buku Manual</h4>
                  <p className="text-xs text-stone-400 leading-relaxed mt-1">
                    Seluruh visual yang ditampilkan pada aplikasi ini menggunakan aset fotografi komersial berkualitas studio yang dikustomisasi khusus untuk mencerminkan identitas korporat mewah **KDKMP**. Gunakan bilah navigasi di atas untuk mengakses menu detail spesifik.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ACTIVE TAB VIEWS */}
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CompanyProfileView 
                plantationImage={plantationImage}
                beansCloseupImage={beansCloseupImage}
              />
            </motion.div>
          )}

          {activeTab === "product" && (
            <motion.div
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCatalogView 
                coffeeBagImage={coffeeBagImage}
                beansCloseupImage={beansCloseupImage}
                brewedCupImage={brewedCupImage}
              />
            </motion.div>
          )}

          {activeTab === "brand" && (
            <motion.div
              key="brand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BrandGuidelineView logoImage={logoImage} />
            </motion.div>
          )}

          {activeTab === "article" && (
            <motion.div
              key="article"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArticleView 
                plantationImage={plantationImage}
                beansCloseupImage={beansCloseupImage}
                brewedCupImage={brewedCupImage}
                lifestyleImage={lifestyleImage}
              />
            </motion.div>
          )}

          {/* GALLERY & MOCKUPS */}
          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-md">
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-2">
                  Galeri Visual & Mockup Premium
                </h3>
                <p className="text-sm text-stone-400 max-w-2xl">
                  Aset visual berkualitas tinggi dengan format studio lighting dan branding premium untuk presentasi materi ekspor komersial KDKMP.
                </p>
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#0f0f0f] border border-stone-850 rounded-xl overflow-hidden shadow-md group hover:border-[#D4AF37]/30 transition duration-350"
                  >
                    <div className="h-60 overflow-hidden relative bg-stone-950">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <button
                          onClick={() => setSelectedGalleryImg(item)}
                          className="bg-[#D4AF37] text-[#0a0a0a] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 transition transform translate-y-2 group-hover:translate-y-0 hover:bg-[#e6c148]"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Perbesar</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-serif font-bold text-white text-base mb-1.5">{item.title}</h4>
                      <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox Modal */}
              {selectedGalleryImg && (
                <div 
                  className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                  onClick={() => setSelectedGalleryImg(null)}
                >
                  <div 
                    className="bg-[#0f0f0f] rounded-xl max-w-4xl w-full overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedGalleryImg(null)}
                      className="absolute top-4 right-4 bg-black/60 text-white hover:bg-black p-2 rounded-full transition z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="max-h-[70vh] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedGalleryImg.src}
                        alt={selectedGalleryImg.title}
                        className="max-h-[70vh] object-contain w-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 text-stone-200">
                      <h4 className="font-serif font-bold text-xl text-[#D4AF37] mb-2">{selectedGalleryImg.title}</h4>
                      <p className="text-sm text-stone-400 leading-relaxed">{selectedGalleryImg.desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Corporate footer */}
      <footer className="bg-[#0c0c0c] text-stone-400 border-t border-stone-850 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-stone-800 overflow-hidden bg-stone-900 flex items-center justify-center">
              <img
                src={logoImage}
                alt="KDKMP Logo footer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-semibold text-stone-200 block">Koperasi Desa Merah Putih (KDKMP)</span>
              <span className="text-[10px] text-stone-500 mt-0.5 block">Garut, Jawa Barat, Indonesia</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-stone-400">
            <button onClick={() => setActiveTab("profile")} className="hover:text-[#D4AF37] transition-colors">Profil Singkat</button>
            <button onClick={() => setActiveTab("product")} className="hover:text-[#D4AF37] transition-colors">Katalog Produk</button>
            <button onClick={() => setActiveTab("brand")} className="hover:text-[#D4AF37] transition-colors">Pedoman Brand</button>
            <button onClick={() => setActiveTab("article")} className="hover:text-[#D4AF37] transition-colors">Kisah Sukses</button>
            <button onClick={() => setActiveTab("gallery")} className="hover:text-[#D4AF37] transition-colors">Galeri Mockup</button>
          </div>

          <p className="text-stone-500 text-center md:text-right">
            © 2026 KDKMP. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </footer>

    </div>
  );
}
