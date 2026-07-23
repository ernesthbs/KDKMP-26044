/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { brandGuideline, companyName, companyNameAbbr } from "../data/companyProfile";
import { 
  Palette, 
  Type, 
  Copy, 
  Check, 
  Award, 
  Compass, 
  Layout, 
  RefreshCw,
  Sparkles,
  Mountain,
  Coffee,
  Circle,
  Leaf,
  Handshake,
  Flag,
  ChevronRight
} from "lucide-react";

interface BrandGuidelineViewProps {
  logoImage?: string;
}

export default function BrandGuidelineView({ logoImage }: BrandGuidelineViewProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [logoMode, setLogoMode] = useState<string>("full-color");

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case "Circle": return <Circle className="w-5 h-5 text-[#D4AF37]" />;
      case "Coffee": return <Coffee className="w-5 h-5 text-[#D4AF37]" />;
      case "Mountain": return <Mountain className="w-5 h-5 text-[#D4AF37]" />;
      case "Leaf": return <Leaf className="w-5 h-5 text-[#D4AF37]" />;
      case "Handshake": return <Handshake className="w-5 h-5 text-[#D4AF37]" />;
      case "Flag": return <Flag className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Compass className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  // Render responsive/custom styles for logo playground
  const getLogoContainerStyle = () => {
    switch (logoMode) {
      case "black-white":
        return "bg-black border border-stone-800 text-white p-8 rounded-xl flex flex-col items-center justify-center min-h-[300px] transition-all";
      case "transparent":
        return "bg-transparent border border-dashed border-stone-800 text-stone-200 p-8 rounded-xl flex flex-col items-center justify-center min-h-[300px] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px] transition-all";
      case "icon-only":
        return "bg-[#0c0c0c] border border-stone-850 text-white p-8 rounded-xl flex flex-col items-center justify-center min-h-[300px] transition-all";
      case "horizontal":
        return "bg-stone-950 text-white p-8 rounded-xl flex items-center justify-center gap-6 min-h-[250px] border border-stone-900 transition-all";
      case "vertical":
        return "bg-stone-900 text-white p-8 rounded-xl flex flex-col items-center justify-center text-center gap-4 min-h-[350px] border border-stone-850 transition-all";
      case "full-color":
      default:
        return "bg-[#0a0a0a] border border-[#D4AF37]/15 text-stone-200 p-8 rounded-xl flex flex-col items-center justify-center min-h-[300px] transition-all";
    }
  };

  return (
    <div id="brand-guideline" className="space-y-12">
      {/* Introduction */}
      <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-md">
        <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-2">
          Panduan Identitas Visual (Brand Guidelines)
        </h3>
        <p className="text-sm text-stone-400 max-w-2xl">
          Sistem identitas visual Koperasi Desa Merah Putih dirancang untuk menyatukan nilai nasionalisme, profesionalisme koperasi, dan estetika kopi kelas dunia yang mewah serta modern.
        </p>
      </div>

      {/* Brand Color Palette */}
      <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-md">
        <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-6 pb-2 border-b border-stone-850 flex items-center gap-2.5">
          <Palette className="w-5 h-5 text-[#D4AF37]" />
          Palet Warna Resmi (Brand Colors)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {brandGuideline.colors.map((color, idx) => {
            const isCopied = copiedColor === color.hex;
            return (
              <div key={idx} className="bg-[#0c0c0c] border border-stone-850 rounded-xl overflow-hidden shadow-md flex flex-col justify-between hover:border-[#D4AF37]/25 transition duration-300">
                <div>
                  <div 
                    className="h-28 w-full relative transition-transform hover:scale-[1.02]" 
                    style={{ backgroundColor: color.hex }}
                  >
                    <button
                      onClick={() => handleCopyColor(color.hex)}
                      className="absolute bottom-2.5 right-2.5 bg-stone-900/90 border border-stone-800 backdrop-blur-sm p-1.5 rounded-md hover:bg-stone-950 text-stone-300 hover:text-[#D4AF37] shadow-sm transition"
                      title="Salin HEX Code"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-xs text-stone-500 block mb-1">{color.hex}</span>
                    <h4 className="font-serif font-bold text-sm text-white mb-2">{color.name}</h4>
                    <p className="text-[11px] text-stone-400 font-medium leading-relaxed">{color.role}</p>
                  </div>
                </div>
                <div className="p-4 bg-stone-900/30 border-t border-stone-850">
                  <p className="text-[10px] text-stone-400 italic leading-relaxed">{color.usage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logo Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-2 flex items-center gap-2.5">
              <Layout className="w-5 h-5 text-[#D4AF37]" />
              Generator Aplikasi Logo (Logo Playground)
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Uji fleksibilitas logo KDKMP di berbagai media kemasan, seragam, papan reklame, dan latar belakang visual.
            </p>

            {/* Toggle controls */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: "full-color", label: "Full Color (Default)" },
                { id: "black-white", label: "Hitam & Putih" },
                { id: "transparent", label: "Latar Transparan" },
                { id: "icon-only", label: "Hanya Ikon" },
                { id: "horizontal", label: "Format Horizontal" },
                { id: "vertical", label: "Format Vertikal" }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setLogoMode(mode.id)}
                  className={`text-xs px-3.5 py-2 rounded-lg font-medium border transition-all ${
                    logoMode === mode.id
                      ? "bg-stone-900 border-stone-800 text-[#D4AF37] border-[#D4AF37]/30 shadow"
                      : "bg-[#0c0c0c] border-stone-850 text-stone-300 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Playground Container Canvas */}
          <div className={getLogoContainerStyle()}>
            {logoImage ? (
              <div className={`flex items-center justify-center ${logoMode === "icon-only" ? "max-w-[120px]" : "max-w-[240px]"}`}>
                <img
                  src={logoImage}
                  alt="KDKMP Logo"
                  className={`object-contain ${logoMode === "black-white" ? "grayscale invert" : ""}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              // High fidelity CSS vector fallback if logo image is loading
              <div className="text-center p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#D4AF37] flex items-center justify-center bg-stone-900 text-white relative mb-4">
                  <Mountain className="w-8 h-8 text-white absolute top-4" />
                  <Coffee className="w-5 h-5 text-[#D4AF37] absolute bottom-3" />
                </div>
                <h4 className="font-serif font-bold text-lg text-white">KDKMP COFFEE</h4>
                <p className="text-xs tracking-widest text-[#D4AF37] font-semibold uppercase mt-1">Koperasi Desa Merah Putih</p>
              </div>
            )}

            {/* Additional format text representation for Horizontal/Vertical formatting */}
            {logoMode === "horizontal" && (
              <div className="flex flex-col text-left justify-center pl-4 border-l border-stone-850">
                <h4 className="font-serif font-bold text-xl tracking-tight text-white">{companyNameAbbr}</h4>
                <p className="text-xs text-[#D4AF37] font-mono tracking-widest uppercase mt-0.5">EST. 2020 • GARUT</p>
                <p className="text-[10px] text-stone-400 mt-1 max-w-[200px]">Premium Arabica Coffee Cooperative</p>
              </div>
            )}

            {logoMode === "vertical" && (
              <div className="flex flex-col items-center text-center mt-3">
                <h4 className="font-serif font-bold text-2xl tracking-tight text-white">{companyNameAbbr}</h4>
                <span className="w-8 h-0.5 bg-[#D4AF37] my-2" />
                <p className="text-[10px] text-stone-300 tracking-widest font-mono uppercase">KOPERASI DESA MERAH PUTIH</p>
                <p className="text-[9px] text-stone-400 italic mt-1">Premium Arabica Coffee Cooperative from Garut Highlands</p>
              </div>
            )}
          </div>
        </div>

        {/* Brand Typography guidelines */}
        <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-2 flex items-center gap-2.5">
              <Type className="w-5 h-5 text-[#D4AF37]" />
              Sistem Tipografi (Typography)
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Kombinasi jenis huruf resmi untuk mengekspresikan karakter premium dan modern.
            </p>

            <div className="space-y-6">
              {brandGuideline.typography.map((typo, idx) => (
                <div key={idx} className="p-4 bg-[#0c0c0c] border border-stone-850 rounded-lg">
                  <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-stone-850">
                    <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase font-mono">{typo.name}</span>
                    <span className="text-xs text-stone-400 font-mono">{typo.weight}</span>
                  </div>
                  
                  {typo.fontFamily === "serif" ? (
                    <p className="font-serif text-2xl font-bold text-white tracking-tight mb-2">
                      Aa Bb Cc - KDKMP
                    </p>
                  ) : (
                    <p className="font-sans text-xl font-semibold text-stone-200 mb-2">
                      Aa Bb Cc - Jakarta Sans
                    </p>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-400 mt-3 border-t border-stone-850 pt-2 font-mono">
                    <div>
                      <span className="block text-stone-500 font-sans">Peran</span>
                      <span className="font-sans font-medium text-stone-300">{typo.size}</span>
                    </div>
                    <div>
                      <span className="block text-stone-500 font-sans">Aplikasi</span>
                      <span className="font-sans font-medium text-stone-300">{typo.usage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900/50 border border-stone-850 p-3 rounded-lg text-[10px] text-stone-400 italic mt-6">
            Catatan: Selalu gunakan ketebalan huruf minimum (Regular/Light) untuk teks deskriptif panjang agar terlihat bersih dan elegan.
          </div>
        </div>
      </div>

      {/* Philosophy breakdown (cards layout) */}
      <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-6 pb-2 border-b border-stone-850 flex items-center gap-2.5">
          <Award className="w-5 h-5 text-[#D4AF37]" />
          Filosofi Elemen Logo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandGuideline.logoPhilosophy.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-stone-850 bg-stone-900/20 hover:border-[#D4AF37]/20 hover:bg-stone-900/30 shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg">
                  {getPhilosophyIcon(item.icon)}
                </div>
                <h4 className="font-serif font-bold text-white text-sm">{item.element}</h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed pl-1">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
