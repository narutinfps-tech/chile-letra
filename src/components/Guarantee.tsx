import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Guarantee() {
  const scrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('planes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Custom 7-Day Guarantee Badge without background */}
        <div className="flex justify-center mb-6">
          <img
            src="/src/assets/images/garantia_7_dias.png"
            alt="Selo 7 Dias de Garantia - Risco Zero"
            className="w-36 sm:w-44 h-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Highlight Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFC947]/20 text-[#b58307] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
          7 DÍAS DE GARANTÍA INCONDICIONAL
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-5 text-balance">
          ¡Tu compra está protegida con 7 días de garantía!
        </h2>

        {/* Guarantee Prose */}
        <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6 max-w-2xl mx-auto text-balance">
          Queremos que puedas conocer el material con tranquilidad. Si después de comprarlo decides que no es lo que necesitas, puedes solicitar el reembolso dentro de los 7 días de garantía establecidos para tu compra.
        </p>

        {/* Hotmart reimbursement notice */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium mb-9">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>La solicitud de reembolso se realiza a través de los canales disponibles en Hotmart.</span>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={scrollToPlanes}
            className="px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white bg-[#176FE0] hover:bg-[#135cb8] active:scale-[0.99] rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>¡QUIERO ACCEDER AL MATERIAL!</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
