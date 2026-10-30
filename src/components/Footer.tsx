import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'contact') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Brand Name */}
        <h4 className="text-lg font-bold text-[#24344D] mb-1">
          <a href="#inicio" onClick={scrollToTop} className="hover:text-[#176FE0] transition-colors">
            Método Letra Ligada
          </a>
        </h4>

        {/* Brand Description */}
        <p className="text-sm text-slate-500 font-normal mb-6">
          Material educativo digital para apoyar la práctica de la escritura.
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-medium mb-8">
          <button
            onClick={() => onOpenLegal('terms')}
            className="hover:text-[#176FE0] transition-colors cursor-pointer"
          >
            Términos y condiciones
          </button>
          <span className="text-slate-300">•</span>
          <button
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-[#176FE0] transition-colors cursor-pointer"
          >
            Política de privacidad
          </button>
          <span className="text-slate-300">•</span>
          <button
            onClick={() => onOpenLegal('contact')}
            className="hover:text-[#176FE0] transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </div>

        {/* Final Copyright */}
        <div className="text-xs text-slate-400 font-normal">
          <p>© 2026 Método Letra Ligada. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
