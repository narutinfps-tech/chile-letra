import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "¿Para quién está pensado este material?",
    answer: "Está dirigido principalmente a docentes de 1° y 2° básico, profesionales de apoyo educativo y familias que desean acompañar la práctica de la letra ligada. Las actividades deben seleccionarse según el nivel de aprendizaje de cada niño o niña.",
  },
  {
    id: 2,
    question: "¿Recibiré un producto físico?",
    answer: "No. Es un material 100% digital en formato PDF, preparado para descargar e imprimir. No se envían cuadernos físicos.",
  },
  {
    id: 3,
    question: "¿Cómo recibiré las actividades después de comprar?",
    answer: "Una vez que tu pago sea aprobado, recibirás las instrucciones de acceso al material digital a través de Hotmart y del correo electrónico asociado a tu compra.",
  },
  {
    id: 4,
    question: "¿Cuál es la diferencia entre el Plan Básico y el Premium?",
    answer: "El Plan Básico contiene las 60 fichas organizadas en 6 etapas. El Plan Premium incluye todo lo anterior y suma el abecedario visual, la planificación de 20 clases, las fichas de seguimiento y una guía para docentes.",
  },
  {
    id: 5,
    question: "¿Qué pasa si compro el material y después cambio de opinión?",
    answer: "Puedes solicitar el reembolso dentro de los 7 días de garantía establecidos para tu compra, utilizando los canales de Hotmart.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1); // Open the first question by default

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="preguntas" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#398BE8]/10 text-[#176FE0] text-xs sm:text-sm font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed text-balance">
            Resolvemos las dudas habituales de docentes y familias antes de adquirir el material.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#398BE8]/40 bg-[#F7F9FF] shadow-xs'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-[#176FE0]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#24344D]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#176FE0] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100/80">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
