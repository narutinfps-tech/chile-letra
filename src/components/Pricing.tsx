import { Check, ShieldCheck, FileDown, Sparkles, Zap, Lock } from 'lucide-react';
import { CHECKOUT_CONFIG, registrarEventoCheckout } from '../config/checkout';

interface PricingProps {
  onSelectPlan: (planKey: "basico" | "premium") => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const handleCheckoutClick = (planKey: "basico" | "premium") => {
    registrarEventoCheckout(planKey);
    onSelectPlan(planKey);
  };

  return (
    <section id="planes" className="py-16 sm:py-24 bg-[#F7F9FF] border-t border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#176FE0] uppercase tracking-wider mb-2 block">
            Acceso Inmediato y Descarga Digital
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            ¡Elige el plan ideal para ti!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Selecciona los recursos que mejor se adapten a tus necesidades.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-12">
          
          {/* Card 1: PLAN BÁSICO */}
          <div className="relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#398BE8]/30 shadow-md hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#398BE8]/10 text-[#176FE0]">
                  Kit Esencial
                </span>
                <span className="text-xs font-semibold text-slate-500">60 Fichas</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#24344D] mb-1">
                Plan Básico
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Ideal para comenzar la transición de forma guiada y progresiva.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#24344D] tracking-tight">
                    {CHECKOUT_CONFIG.precios.basico.formato}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  Pago único • Sin mensualidades
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>60 fichas</strong> de actividades imprimibles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>6 etapas</strong> progresivas completas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Actividades de reconocimiento y trazado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Práctica de letras, sílabas, palabras y oraciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Archivos digitales en <strong>PDF de alta resolución</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Descarga inmediata para imprimir las veces que necesites.</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => handleCheckoutClick("basico")}
                className="w-full py-4 px-6 text-base font-bold text-white bg-[#176FE0] hover:bg-[#135cb8] active:scale-[0.99] rounded-2xl shadow-sm hover:shadow transition-all text-center cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>QUIERO EL PLAN BÁSICO</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-3 font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Pago seguro procesado por Hotmart</span>
              </div>
            </div>
          </div>

          {/* Card 2: PLAN PREMIUM (Destacado) */}
          <div className="relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#FF806B] shadow-xl hover:shadow-2xl transition-all lg:-translate-y-2">
            
            {/* Top Seal */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF806B] to-[#ff6b52] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PLAN MÁS COMPLETO</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2 sm:mt-0">
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FF806B]/15 text-[#e0533d]">
                  Colección Integral
                </span>
                <span className="text-xs font-bold text-[#FF806B] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  Incluye 3 Bonos
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#24344D] mb-1">
                Plan Premium
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                El set pedagógico completo con recursos de apoyo y seguimiento docente.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#FF806B] tracking-tight">
                    {CHECKOUT_CONFIG.precios.premium.formato}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  Pago único • Acceso ilimitado a todo el material
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF806B]/15 text-[#FF806B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Todo lo incluido en el Plan Básico</strong> (60 fichas en 6 etapas).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF806B]/15 text-[#FF806B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bono 1:</strong> Abecedario Visual (Imprenta y Ligada).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF806B]/15 text-[#FF806B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bono 2:</strong> Planificación sugerida de 20 Clases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF806B]/15 text-[#FF806B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bono 3:</strong> Fichas de Seguimiento de Escritura.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF806B]/15 text-[#FF806B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Guía de aplicación</strong> para docentes y familias.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF806B]/15 text-[#FF806B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Archivos PDF descargables listos para imprimir ilimitadamente.</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => handleCheckoutClick("premium")}
                className="w-full py-4 px-6 text-base sm:text-lg font-bold text-white bg-[#FF806B] hover:bg-[#fa6951] active:scale-[0.99] rounded-2xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>QUIERO EL PLAN PREMIUM</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-3 font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Pago seguro procesado por Hotmart</span>
              </div>
            </div>
          </div>

        </div>

        {/* Currency & Tax Clarification */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Los precios están expresados en dólares estadounidenses. El monto final en tu moneda y los impuestos aplicables se mostrarán antes de confirmar la compra en Hotmart.
          </p>
        </div>

        {/* Badges strip: Compra segura, Archivo PDF, Entrega digital */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#24344D] font-semibold pt-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Compra 100% segura</span>
          </div>
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-[#176FE0]" />
            <span>Formato digital PDF listo</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FF806B]" />
            <span>Entrega digital inmediata</span>
          </div>
        </div>

      </div>
    </section>
  );
}
