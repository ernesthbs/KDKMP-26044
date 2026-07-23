/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { productSpec } from "../data/companyProfile";
import { 
  Scale, 
  Flame, 
  Compass, 
  TrendingUp, 
  Coffee, 
  MapPin, 
  Droplets, 
  Thermometer, 
  Timer, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle,
  Package,
  Layers,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface ProductCatalogViewProps {
  coffeeBagImage?: string;
  beansCloseupImage?: string;
  brewedCupImage?: string;
}

export default function ProductCatalogView({ coffeeBagImage, beansCloseupImage, brewedCupImage }: ProductCatalogViewProps) {
  // Calculator State
  const [waterVolume, setWaterVolume] = useState<number>(225); // default 225 ml (1 cup)
  const [ratio, setRatio] = useState<number>(15); // default 1:15
  const coffeeWeight = Math.round((waterVolume / ratio) * 10) / 10;

  // Timer State
  const [time, setTime] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  // V60 step times and descriptions based on 2m15s total (135s)
  // Step 1: 0 - 30s: Blooming (40ml)
  // Step 2: 30s - 75s: Second pour (to 120ml)
  // Step 3: 75s - 135s: Third pour (to 225ml) & drawdown
  const steps = [
    { start: 0, end: 30, title: "Tahap 1: Blooming", desc: "Tuang 40 ml air panas (92°C) secara perlahan. Biarkan kopi mekar dan mengeluarkan gas CO2 selama 30 detik." },
    { start: 30, end: 75, title: "Tahap 2: Penuangan Kedua", desc: "Tuang air secara memutar dari tengah ke arah luar hingga total air mencapai 120 ml. Selesai menuang pada detik ke-60, biarkan menyusut sedikit." },
    { start: 75, end: 135, title: "Tahap 3: Penuangan Akhir & Drawdown", desc: "Tuang sisa air secara memutar halus hingga total timbangan mencapai 225 ml (atau volume target Anda). Biarkan air menyusut habis." },
    { start: 135, end: 9999, title: "Selesai!", desc: "Kopi Arabika Garut specialty Anda siap dihidangkan. Nikmati selagi hangat untuk merasakan kompleksitas aroma melati dan rasa jeruk segar." }
  ];

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Update active brewing step based on time
  useEffect(() => {
    if (time >= 0 && time < 30) {
      setActiveStep(0);
    } else if (time >= 30 && time < 75) {
      setActiveStep(1);
    } else if (time >= 75 && time < 135) {
      setActiveStep(2);
    } else if (time >= 135) {
      setActiveStep(3);
      setIsTimerRunning(false);
    }
  }, [time]);

  const handleResetTimer = () => {
    setTime(0);
    setIsTimerRunning(false);
    setActiveStep(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div id="product-catalog" className="space-y-12">
      {/* Product Banner Section */}
      <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] text-stone-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border-2 border-[#1a1a1a] shadow-lg">
        <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold px-2.5 py-1 rounded border border-[#D4AF37]/25 uppercase tracking-wider">
                Produk Unggulan
              </span>
              <span className="bg-red-500/10 text-red-300 text-xs font-semibold px-2.5 py-1 rounded border border-red-500/20 uppercase tracking-wider">
                100% Origin Indonesia
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white tracking-tight mb-3 italic">
              {productSpec.name}
            </h2>
            <p className="italic text-[#D4AF37] font-serif text-lg lg:text-xl mb-6">
              "{productSpec.tagline}"
            </p>
            <p className="text-stone-300 leading-relaxed text-[15px] lg:text-base mb-8">
              {productSpec.description}
            </p>

            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-stone-800">
              Keunggulan Koperasi KDKMP
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {productSpec.advantages.map((adv, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-stone-850 pt-6 mt-6 flex flex-wrap gap-4 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Garut, Jawa Barat</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>1.200 - 1.650 mdpl</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span>Sertifikasi Indikasi Geografis</span>
            </div>
          </div>
        </div>

        {/* Visual Packaging side */}
        <div className="lg:col-span-5 relative bg-stone-950 flex items-center justify-center min-h-[350px] border-l border-stone-850">
          {coffeeBagImage ? (
            <img
              src={coffeeBagImage}
              alt="Premium Matte Black Coffee Bag Mockup"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-center p-8">
              <Package className="w-16 h-16 text-[#D4AF37] mx-auto mb-3 opacity-60" />
              <span className="font-serif text-lg block text-stone-400">Kemasan Premium Hitam Doff</span>
              <span className="text-xs text-stone-500 block mt-1">Zip-Lock & One-way Degassing Valve</span>
            </div>
          )}
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-mono text-[#D4AF37] border border-stone-800">
            Mockup Kemasan 250g / 500g / 1kg
          </div>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-md">
        <h3 className="font-serif text-2xl font-bold text-white tracking-wide mb-6 pb-2 border-b border-stone-850 flex items-center gap-3">
          <Coffee className="w-6 h-6 text-[#D4AF37]" />
          Spesifikasi Teknis & Hasil Sensorik
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-850 bg-stone-900/20">
                <th className="py-3 px-4 text-sm font-semibold text-stone-400 w-1/3">Kategori</th>
                <th className="py-3 px-4 text-sm font-semibold text-stone-300">Spesifikasi Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-850/60 text-sm">
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-stone-500" /> Asal Daerah (Origin)
                </td>
                <td className="py-3.5 px-4 text-stone-200">{productSpec.region}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-stone-500" /> Ketinggian Tanam (Altitude)
                </td>
                <td className="py-3.5 px-4 text-stone-200">{productSpec.altitude}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-stone-500" /> Proses Pascapanen
                </td>
                <td className="py-3.5 px-4 text-stone-200">{productSpec.process}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-stone-500" /> Tingkat Roasting (Profil Sangrai)
                </td>
                <td className="py-3.5 px-4 text-stone-200">{productSpec.roastLevel}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-stone-500" /> Keharuman (Aroma)
                </td>
                <td className="py-3.5 px-4 text-[#D4AF37] font-medium">{productSpec.sensory.aroma}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-stone-500" /> Ketebalan Rasa (Body)
                </td>
                <td className="py-3.5 px-4 text-stone-200">{productSpec.sensory.body}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-stone-500" /> Tingkat Keasaman (Acidity)
                </td>
                <td className="py-3.5 px-4 text-stone-200">{productSpec.sensory.acidity}</td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-stone-500" /> Catatan Rasa (Flavor Notes)
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {productSpec.sensory.flavorNotes.map((note, idx) => (
                      <span key={idx} className="bg-stone-900 text-stone-300 text-xs px-2.5 py-1 rounded-full border border-stone-800 font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-stone-900/10">
                <td className="py-3.5 px-4 font-semibold text-stone-400 flex items-center gap-2">
                  <Package className="w-4 h-4 text-stone-500" /> Spesifikasi Kemasan
                </td>
                <td className="py-3.5 px-4 text-stone-200">
                  {productSpec.packaging.material} ({productSpec.packaging.sizes.join(", ")})
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Brewing Guide, Interactive Calculator, and Interactive Timer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Interactive Brewing Water-to-Coffee Calculator */}
        <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-[#D4AF37]" />
              Kalkulator Seduh Manual V60
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Sesuaikan rasio air dan kopi Arabika Garut untuk mendapatkan kejernihan rasa terbaik.
            </p>

            {/* Slider 1: Water volume */}
            <div className="space-y-2.5 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-stone-300">Volume Air Seduhan</span>
                <span className="font-bold text-[#D4AF37] font-mono bg-[#0c0c0c] border border-stone-850 px-2.5 py-1 rounded">
                  {waterVolume} ml / gram
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="25"
                value={waterVolume}
                onChange={(e) => setWaterVolume(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer h-1.5 bg-stone-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                <span>100ml (Espresso-size / Tester)</span>
                <span>500ml (Sharing)</span>
                <span>1000ml</span>
              </div>
            </div>

            {/* Slider 2: Ratio */}
            <div className="space-y-2.5 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-stone-300">Rasio Seduh (Kopi : Air)</span>
                <span className="font-bold text-[#D4AF37] font-mono bg-[#0c0c0c] border border-stone-850 px-2.5 py-1 rounded">
                  1 : {ratio}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="20"
                step="1"
                value={ratio}
                onChange={(e) => setRatio(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer h-1.5 bg-stone-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                <span>1:10 (Sangat Pekat)</span>
                <span>1:15 (Rekomendasi / Seimbang)</span>
                <span>1:20 (Sangat Ringan)</span>
              </div>
            </div>
          </div>

          {/* Calculator Results */}
          <div className="bg-[#0a0a0a] border border-stone-850 rounded-lg p-5 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-xs text-stone-300 uppercase font-bold tracking-wider block">Kebutuhan Bubuk Kopi</span>
              <span className="text-xs text-stone-400 block mt-0.5">Medium Grind (Pasir Kasar)</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-serif font-extrabold text-white font-mono">
                {coffeeWeight}
              </span>
              <span className="text-sm font-bold text-[#D4AF37] font-mono ml-1">Gram</span>
            </div>
          </div>
        </div>

        {/* Interactive Brewing Guide & Timer */}
        <div className="bg-[#0f0f0f] text-stone-200 rounded-xl p-6 lg:p-8 flex flex-col justify-between border border-stone-850">
          <div>
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
              <Timer className="w-5 h-5 text-[#D4AF37]" />
              Panduan & Penghitung Waktu V60
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Ikuti alur waktu penuangan air di bawah ini untuk hasil ekstraksi rasa Arabika yang sempurna.
            </p>

            {/* Timer visual block */}
            <div className="bg-[#0a0a0a] border border-stone-850 rounded-xl p-6 text-center mb-6 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded px-2 py-0.5 text-[10px] font-mono">
                Metode V60
              </div>
              <span className="text-4xl lg:text-5xl font-mono font-extrabold text-white tracking-widest block mb-1">
                {formatTime(time)}
              </span>
              <span className="text-xs text-stone-400 font-semibold block uppercase tracking-wider">
                {steps[activeStep].title}
              </span>

              {/* Controls */}
              <div className="flex justify-center gap-3 mt-4">
                {isTimerRunning ? (
                  <button
                    onClick={() => setIsTimerRunning(false)}
                    className="bg-stone-800 hover:bg-stone-750 text-white rounded-lg p-2.5 border border-stone-700 transition"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsTimerRunning(true)}
                    className="bg-[#D4AF37] hover:bg-[#e6c148] text-[#0a0a0a] font-semibold rounded-lg p-2.5 transition"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                )}
                <button
                  onClick={handleResetTimer}
                  className="bg-stone-800 hover:bg-stone-750 text-stone-300 rounded-lg p-2.5 border border-stone-700 transition"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Step description */}
            <div className="bg-[#0a0a0a]/80 border border-stone-850 p-4 rounded-lg min-h-[90px] flex items-start gap-3">
              <div className="bg-[#D4AF37]/10 text-[#D4AF37] rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-[#D4AF37]/20">
                {activeStep + 1}
              </div>
              <div>
                <h5 className="text-sm font-serif font-bold text-white mb-1">
                  {steps[activeStep].title}
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-850 pt-4 mt-6 flex justify-between items-center text-[10px] text-stone-500 font-mono">
            <span>Suhu Air: {productSpec.brewingRecommendation.temperature}</span>
            <span>Gilingan: {productSpec.brewingRecommendation.grindSize}</span>
          </div>
        </div>
      </div>

      {/* Coffee Sensory Graphic Chart Placeholder/Experience (D3 or styled CSS) */}
      <div className="bg-[#0f0f0f] border border-stone-850 rounded-xl p-8 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-white tracking-tight mb-6 pb-2 border-b border-stone-850 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          Dimensi Karakter Rasa (Sensory Profile)
        </h3>
        
        {/* We build a stunning, custom geometric canvas representing the coffee's flavor wheel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                <span>Keharuman Floral (Aroma)</span>
                <span className="text-white">9.2 / 10</span>
              </div>
              <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "92%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                <span>Keasaman Jeruk (Bright Acidity)</span>
                <span className="text-white">8.8 / 10</span>
              </div>
              <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "88%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                <span>Kemurnian Rasa (Clean Cup)</span>
                <span className="text-white">9.5 / 10</span>
              </div>
              <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "95%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                <span>Kemanisan Alami (Sweetness)</span>
                <span className="text-white">9.0 / 10</span>
              </div>
              <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "90%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                <span>Kelembutan Rasa (Body/Mouthfeel)</span>
                <span className="text-white">8.2 / 10</span>
              </div>
              <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: "82%" }} />
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/60 border border-stone-850 p-6 rounded-xl text-center flex flex-col justify-center items-center shadow-inner">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-widest block mb-1">Hasil Cupping Resmi</span>
            <span className="text-5xl font-serif font-extrabold text-white block">85.75</span>
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] font-bold text-xs px-3 py-1 rounded-full border border-[#D4AF37]/20 mt-3 uppercase tracking-wider">
              Specialty Coffee Grade
            </span>
            <p className="text-xs text-stone-400 leading-relaxed mt-4 max-w-sm">
              Dinilai oleh Q-Grader bersertifikat SCA (Specialty Coffee Association). Memiliki rasa manis yang dominan, keasaman buah tropis, dan kebersihan cangkir (cleanliness) yang luar biasa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
