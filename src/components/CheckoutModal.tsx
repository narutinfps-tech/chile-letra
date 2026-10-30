import { X, ExternalLink, ShieldCheck, CreditCard, Clock, FileCheck } from 'lucide-react';
import { CHECKOUT_CONFIG } from '../config/checkout';

interface CheckoutModalProps {
  planKey: "basico" | "premium" | null;
  onClose: () => void;
}

export default function CheckoutModal({ planKey, onClose }: CheckoutModalProps) {
  if (!planKey) return null;

  const planInfo = CHECKOUT_CONFIG.precios[planKey];
  const checkoutUrl = planKey === "basico" ? CHECKOUT_CONFIG.urlBasico : CHECKOUT_CONFIG.urlPremium;

  const handleProceed = () => {
    // Open checkout in new tab or direct window
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-[#F7F9FF] border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇨🇱</span>
            <span className="text-sm font-bold text-[#24344D]">
              Acceso Seguro para Chile
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Plan Details Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-[#176FE0] uppercase tracking-wider block mb-1">
                Plan Seleccionado
              </span>
              <h3 className="text-2xl font-extrabold text-[#24344D]">
                {planInfo.nombre}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-[#176FE0]">
                {planInfo.formato}
              </span>
              <span className="text-xs block text-slate-500 font-medium">Pago único</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F9FF] border border-slate-200/80 space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <FileCheck className="w-4 h-4 text-[#176FE0] shrink-0" />
              <span>Kit digital con 60 fichas imprimibles en PDF</span>
            </div>
            {planKey === "premium" && (
              <div className="flex items-center gap-2 text-[#e0533d] font-semibold">
                <span className="text-sm">🎁</span>
                <span>Incluye 3 Bonos: Abecedario, Planificador y Seguimiento</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-slate-600">
              <CreditCard className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Tarjetas de débito, crédito y medios locales chilenos</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantía incondicional de 7 días</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed mb-6">
            Al hacer clic en el botón a continuación, serás redirigido a la plataforma oficial de <strong>Hotmart</strong>, donde podrás completar tu pago con medios locales de Chile (Webpay, tarjetas bancarias) de forma 100% segura.
          </p>

          {/* Action button */}
          <button
            onClick={handleProceed}
            className="w-full py-4 px-6 text-base font-bold text-white bg-[#176FE0] hover:bg-[#135cb8] active:scale-[0.99] rounded-2xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>CONTINUAR AL CHECKOUT EN HOTMART</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Transacción encriptada y protegida por Hotmart</span>
          </div>
        </div>
      </div>
    </div>
  );
}
