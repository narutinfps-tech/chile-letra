import { Clock, TrendingUp, Palette, BookOpenCheck } from 'lucide-react';

const BENEFITS = [
  {
    title: "Ahorra tiempo de preparación",
    description: "Cuenta con actividades organizadas y listas para imprimir, sin tener que diseñar cada ficha desde cero.",
    icon: Clock,
    colorBg: "bg-[#398BE8]/10",
    colorIcon: "text-[#176FE0]",
  },
  {
    title: "Sigue una secuencia progresiva",
    description: "Comienza con el reconocimiento de las letras y avanza hacia trazos, sílabas, palabras y oraciones.",
    icon: TrendingUp,
    colorBg: "bg-[#FF806B]/10",
    colorIcon: "text-[#FF806B]",
  },
  {
    title: "Actividades visuales y variadas",
    description: "Combina ejercicios para observar, relacionar, reconocer, trazar y escribir, evitando que todas las fichas sean iguales.",
    icon: Palette,
    colorBg: "bg-[#FFC947]/20",
    colorIcon: "text-[#c28400]",
  },
  {
    title: "Ideal para reforzar la práctica",
    description: "Utiliza las fichas en clases, apoyo pedagógico o actividades complementarias en casa, según las necesidades de cada niño o niña.",
    icon: BookOpenCheck,
    colorBg: "bg-[#AD91EC]/15",
    colorIcon: "text-[#8256d0]",
  },
];

export default function WhyChoose() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-[#F7F9FF] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#176FE0] uppercase tracking-wider mb-2 block">
            Ventajas Pedagógicas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            Menos tiempo preparando actividades. Más oportunidades para practicar.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Una colección pensada para facilitar el trabajo docente y ofrecer una práctica de escritura organizada y visual.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* Centered Icon */}
                <div className={`w-14 h-14 rounded-2xl ${item.colorBg} ${item.colorIcon} flex items-center justify-center mb-5 shadow-xs`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#24344D] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final Highlight Phrase */}
        <div className="text-center">
          <p className="inline-block text-base sm:text-lg font-bold text-[#24344D] bg-white px-6 py-3.5 rounded-full border border-slate-200/80 shadow-xs">
            ✨ Una manera práctica de organizar el trabajo con letra ligada.
          </p>
        </div>

      </div>
    </section>
  );
}
