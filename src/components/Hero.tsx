import React from 'react';
import { FileCheck, Sparkles, BookOpen, ShieldCheck, Download, Printer } from 'lucide-react';

interface HeroProps {
  onOpenImageModal?: (imageSrc: string, title: string) => void;
}

export default function Hero({}: HeroProps) {
  const scrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('planes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F7F9FF] to-white overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#398BE8]/10 via-[#FF806B]/5 to-[#FFC947]/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2 self-center mx-auto px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-[#24344D] mb-6">
            <span>✏️</span>
            <span>Material educativo digital para docentes y familias</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24344D] tracking-tight leading-[1.2] mb-6 text-balance text-center max-w-3xl mx-auto">
            ¡De la letra imprenta a la{' '}
            <span className="text-[#176FE0] relative inline-block underline decoration-[#398BE8]/30 decoration-wavy decoration-2">
              letra ligada
            </span>{' '}
            con{' '}
            <span className="text-[#FF806B] relative inline-block">
              60 actividades
            </span>{' '}
            listas para imprimir!
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto text-center text-balance">
            Descubre una secuencia de 6 etapas progresivas para acompañar a niños y niñas en el reconocimiento, trazado y práctica de la letra ligada, desde los primeros movimientos hasta la escritura de palabras y oraciones.
          </p>

          {/* 3 Quick Benefits */}
          <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-9">
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#24344D]">
                60 fichas imprimibles
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#FF806B]/10 text-[#FF806B] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#24344D]">
                6 etapas progresivas
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#FFC947]/20 text-[#b58307] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#24344D]">
                Actividades para educación básica
              </span>
            </div>
          </div>

          {/* Main CTA Block */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPlanes}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 text-base sm:text-lg font-bold text-white bg-[#176FE0] hover:bg-[#135cb8] active:scale-[0.99] rounded-2xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>¡QUIERO MIS 60 ACTIVIDADES!</span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Trust Subtext */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 font-medium mt-5 pt-1 text-center">
            <span className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[#176FE0]" />
              Entrega digital inmediata
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Printer className="w-3.5 h-3.5 text-[#176FE0]" />
              Material imprimible (PDF)
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Compra 100% segura
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
