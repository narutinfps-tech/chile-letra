import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageSrc: string | null;
  title?: string;
  onClose: () => void;
}

export default function ImageModal({ imageSrc, title, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (imageSrc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white">
          <span className="text-xs sm:text-sm font-semibold truncate pr-4">
            {title || 'Visualización de Actividad'}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar vista previa"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image body */}
        <div className="overflow-auto max-h-[calc(90vh-60px)] p-2 sm:p-4 bg-slate-100 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title || 'Material Método Letra Ligada ampliado'}
            className="max-h-[75vh] w-auto object-contain rounded-xl shadow-xs"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
