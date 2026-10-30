import React, { useRef } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface InsidePreviewProps {
  onOpenImageModal: (src: string, title: string) => void;
}

interface ActivityItem {
  id: number;
  title: string;
  stageName: string;
  imageSrc: string;
  badge: string;
  description: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    title: "1. Reconocimiento de letras",
    stageName: "Etapa 1: Reconocimiento visual",
    imageSrc: "/src/assets/images/activity_worksheet_tracing_1793400486063.jpg",
    badge: "Ficha 04",
    description: "Identificación de vocales y consonantes en formato imprenta y modelo manuscrito.",
  },
  {
    id: 2,
    title: "2. Correspondencia entre imprenta y ligada",
    stageName: "Etapa 1 y 2: Asociación gráfica",
    imageSrc: "/src/assets/images/hero_worksheet_mockup_1793400483436.jpg",
    badge: "Ficha 07",
    description: "Actividades de emparejamiento visual para facilitar la transición sin confusión.",
  },
  {
    id: 3,
    title: "3. Trazos y movimientos preparatorios",
    stageName: "Etapa 2: Motricidad fina",
    imageSrc: "/src/assets/images/activity_worksheet_tracing_1793400486063.jpg",
    badge: "Ficha 14",
    description: "Guías con ondas, guirnaldas, bucles y lazos continuos para soltar la mano.",
  },
  {
    id: 4,
    title: "4. Formación guiada de letras",
    stageName: "Etapa 3: Modelado de letras",
    imageSrc: "/src/assets/images/activity_worksheet_tracing_1793400486063.jpg",
    badge: "Ficha 22",
    description: "Puntos de inicio numerados, flechas direccionales y renglón caligráfico de apoyo.",
  },
  {
    id: 5,
    title: "5. Unión de sílabas y enlaces",
    stageName: "Etapa 4: Combinación de letras",
    imageSrc: "/src/assets/images/activity_worksheet_words_1793400485597.jpg",
    badge: "Ficha 38",
    description: "Práctica de los enlaces continuos entre consonantes y vocales (ma, me, mi, mo, mu).",
  },
  {
    id: 6,
    title: "6. Escritura de palabras y oraciones",
    stageName: "Etapas 5 y 6: Textos breves",
    imageSrc: "/src/assets/images/activity_worksheet_words_1793400485597.jpg",
    badge: "Ficha 56",
    description: "Oraciones familiares contextualizadas con pauta para consolidar la fluidez.",
  },
];

export default function InsidePreview({ onOpenImageModal }: InsidePreviewProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollHorizontally = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollToPlanes = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('planes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#176FE0] uppercase tracking-wider mb-2 block">
            Muestra Pedagógica
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            ¡Mira algunas de las actividades que recibirás!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Conoce el diseño, la variedad y la organización de nuestras fichas de trabajo.
          </p>
        </div>

        {/* Mobile controls navigation indicator */}
        <div className="flex md:hidden items-center justify-between mb-4 px-2">
          <span className="text-xs text-slate-500 font-medium">
            Desliza para explorar las 6 actividades →
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollHorizontally('left')}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 active:bg-slate-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollHorizontally('right')}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 active:bg-slate-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Activities Grid (Desktop 3 columns, Mobile smooth scroll carousel) */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {ACTIVITIES.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImageModal(item.imageSrc, `${item.title} — ${item.stageName}`)}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center flex flex-col bg-[#F7F9FF] rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer group"
              title="Haz clic para ver la ficha ampliada"
            >
              {/* Vertical Sheet Preview Container */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs mb-4">
                <img
                  src={item.imageSrc}
                  alt={`Muestra de la actividad: ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#24344D] text-xs font-bold px-2.5 py-1 rounded-md shadow-xs border border-slate-200">
                  {item.badge}
                </div>

                {/* Zoom overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-xs text-[#24344D] font-semibold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#176FE0]" />
                    <span>Ver ficha ampliada</span>
                  </div>
                </div>
              </div>

              {/* Title & Stage */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#24344D] mb-1 group-hover:text-[#176FE0] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#176FE0] block mb-2">
                    {item.stageName}
                  </span>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Banner & CTA */}
        <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#24344D] mb-6">
            <Sparkles className="w-5 h-5 text-[#FFC947]" />
            <span>¡Actividades diseñadas para aprender y practicar de manera organizada!</span>
          </div>

          <button
            onClick={scrollToPlanes}
            className="px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#176FE0] hover:bg-[#135cb8] rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-2 group"
          >
            <span>VER LOS PLANES</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
