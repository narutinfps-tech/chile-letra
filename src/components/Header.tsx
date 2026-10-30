import React from 'react';

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#inicio"
          onClick={(e) => scrollToSection(e, 'inicio')}
          className="text-lg sm:text-xl font-bold tracking-tight text-[#24344D] hover:text-[#176FE0] transition-colors whitespace-nowrap shrink-0"
        >
          Método Letra Ligada
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#contenido"
            onClick={(e) => scrollToSection(e, 'contenido')}
            className="hover:text-[#176FE0] transition-colors whitespace-nowrap shrink-0"
          >
            Contenido
          </a>
          <a
            href="#beneficios"
            onClick={(e) => scrollToSection(e, 'beneficios')}
            className="hover:text-[#176FE0] transition-colors whitespace-nowrap shrink-0"
          >
            Beneficios
          </a>
          <a
            href="#bonos"
            onClick={(e) => scrollToSection(e, 'bonos')}
            className="hover:text-[#176FE0] transition-colors whitespace-nowrap shrink-0"
          >
            Bonos
          </a>
          <a
            href="#galeria"
            onClick={(e) => scrollToSection(e, 'galeria')}
            className="hover:text-[#176FE0] transition-colors whitespace-nowrap shrink-0"
          >
            Vista Previa
          </a>
          <a
            href="#preguntas"
            onClick={(e) => scrollToSection(e, 'preguntas')}
            className="hover:text-[#176FE0] transition-colors whitespace-nowrap shrink-0"
          >
            Preguntas
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={(e) => scrollToSection(e, 'planes')}
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#176FE0] hover:bg-[#135cb8] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ver Planes y Precios
          </button>
        </div>
      </div>
    </header>
  );
}
