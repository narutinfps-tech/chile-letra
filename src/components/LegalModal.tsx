import { X, Mail, Shield, FileText } from 'lucide-react';
import { CHECKOUT_CONFIG } from '../config/checkout';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'contact' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#F7F9FF]">
          <div className="flex items-center gap-2.5">
            {type === 'terms' && <FileText className="w-5 h-5 text-[#176FE0]" />}
            {type === 'privacy' && <Shield className="w-5 h-5 text-[#176FE0]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#176FE0]" />}
            <h3 className="text-lg font-bold text-[#24344D]">
              {type === 'terms' && 'Términos y Condiciones'}
              {type === 'privacy' && 'Política de Privacidad'}
              {type === 'contact' && 'Contacto y Asistencia'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
          {type === 'terms' && (
            <>
              <p className="font-semibold text-[#24344D]">
                Condiciones de Uso del Material Educativo Digital
              </p>
              <p>
                El material «Método Letra Ligada en 6 Etapas» consiste en un kit digital descargable en formato PDF, diseñado exclusivamente para fines educativos, docentes y familiares en la República de Chile y el extranjero.
              </p>
              <h4 className="font-bold text-[#24344D] text-xs uppercase tracking-wide pt-2">
                1. Licencia de Uso
              </h4>
              <p>
                La compra confiere al adquirente (docente, establecimiento o apoderado) una licencia no exclusiva para descargar, almacenar e imprimir las fichas tantas veces como sea necesario para sus estudiantes o pupilos a cargo. Queda prohibida la reventa, redistribución masiva no autorizada o comercialización independiente de los archivos.
              </p>
              <h4 className="font-bold text-[#24344D] text-xs uppercase tracking-wide pt-2">
                2. Entrega y Garantía
              </h4>
              <p>
                La entrega es 100% digital e inmediata a través de la plataforma Hotmart tras confirmarse el pago. El comprador cuenta con un período de garantía incondicional de 7 días continuos a contar de la fecha de compra, gestionable a través de los canales oficiales de Hotmart.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p className="font-semibold text-[#24344D]">
                Protección de Datos Personales
              </p>
              <p>
                En Método Letra Ligada respetamos la privacidad de docentes y familias. Los datos ingresados durante el proceso de pago (nombre, correo electrónico, medios de pago) son procesados directamente por la plataforma de pagos Hotmart bajo estándares internacionales de seguridad PCI-DSS y en conformidad con la legislación de protección al consumidor y datos personales aplicable en Chile.
              </p>
              <h4 className="font-bold text-[#24344D] text-xs uppercase tracking-wide pt-2">
                Uso del correo electrónico
              </h4>
              <p>
                Su correo electrónico se utiliza exclusivamente para remitir los enlaces de descarga del material PDF, comprobantes de pago y actualizaciones pedagógicas pertinentes del método. No comercializamos ni cedemos sus datos a terceros.
              </p>
            </>
          )}

          {type === 'contact' && (
            <div className="space-y-4">
              <p>
                ¿Tienes consultas sobre el material didáctico, la descarga de tus fichas o requieres asistencia con tu compra en Chile?
              </p>
              <div className="p-4 rounded-2xl bg-[#F7F9FF] border border-[#398BE8]/20 flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#176FE0] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Correo electrónico de soporte docente
                  </span>
                  <a
                    href={`mailto:${CHECKOUT_CONFIG.soporteEmail}`}
                    className="text-base font-bold text-[#176FE0] hover:underline"
                  >
                    {CHECKOUT_CONFIG.soporteEmail}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Atención de lunes a viernes en horario de Chile continental.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Para solicitudes de reembolso dentro de los 7 días de garantía, también puedes ingresar directamente a <a href="https://help.hotmart.com" target="_blank" rel="noopener noreferrer" className="text-[#176FE0] underline">help.hotmart.com</a> con el código de tu transacción.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
