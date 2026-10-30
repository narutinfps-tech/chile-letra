import { Sparkles, CalendarDays, ClipboardCheck, Gift } from 'lucide-react';

interface BonusesProps {
  onOpenImageModal: (src: string, title: string) => void;
}

const BONUSES = [
  {
    badge: "BONO 01",
    badgeColor: "bg-[#398BE8] text-white",
    title: "Abecedario Visual: Imprenta y Ligada",
    description: "Un recurso visual para consultar y comparar las diferentes formas de las letras durante las actividades.",
    icon: Sparkles,
    iconColor: "text-[#176FE0] bg-[#398BE8]/10",
  },
  {
    badge: "BONO 02",
    badgeColor: "bg-[#FF806B] text-white",
    title: "Planificación de 20 Clases",
    description: "Una propuesta de organización de las actividades en 20 clases, adaptable al ritmo de aprendizaje de cada grupo.",
    icon: CalendarDays,
    iconColor: "text-[#FF806B] bg-[#FF806B]/10",
  },
  {
    badge: "BONO 03",
    badgeColor: "bg-[#AD91EC] text-white",
    title: "Fichas de Seguimiento de Escritura",
    description: "Registros para observar los avances de cada estudiante en el reconocimiento, trazado y escritura de letras, palabras y oraciones.",
    icon: ClipboardCheck,
    iconColor: "text-[#8256d0] bg-[#AD91EC]/15",
  },
];

export default function Bonuses({ onOpenImageModal }: BonusesProps) {
  const bonusBundleImg = "/src/assets/images/bonuses_resource_bundle_1793400484617.jpg";

  return (
    <section id="bonos" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFC947]/20 text-[#b58307] text-xs sm:text-sm font-semibold mb-3">
            <Gift className="w-4 h-4" />
            <span>Recursos Complementarios Exclusivos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            ¡Lleva tu material al siguiente nivel con 3 bonos especiales!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Recursos complementarios incluidos en el Plan Premium para ampliar las posibilidades de aplicación.
          </p>
        </div>

        {/* Visual bundle photo banner */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div 
            onClick={() => onOpenImageModal(bonusBundleImg, "Pack de Bonos: Abecedario, Planificador y Fichas de Seguimiento")}
            className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all cursor-pointer bg-slate-50"
            title="Clic para ampliar el pack de bonos"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={bonusBundleImg}
                alt="Pack de 3 bonos especiales: abecedario comparativo, planificación de 20 clases y fichas de seguimiento"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 text-white">
              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFC947] block mb-1">
                    Material Complementario Listo para Usar
                  </span>
                  <p className="text-sm sm:text-base font-semibold">
                    Abecedario Visual + Guía de 20 Clases + Pauta de Seguimiento
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30">
                  🔍 Clic para ampliar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {BONUSES.map((bono, idx) => {
            const Icon = bono.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#F7F9FF] border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* Identification Pill */}
                <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${bono.badgeColor} mb-5 shadow-xs`}>
                  {bono.badge}
                </div>

                {/* Centered Icon */}
                <div className={`w-14 h-14 rounded-2xl ${bono.iconColor} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#24344D] mb-3 leading-snug">
                  {bono.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {bono.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Included Banner */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#FF806B]/10 via-[#FFC947]/10 to-[#398BE8]/10 border border-[#FF806B]/30 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
          <p className="text-sm sm:text-base font-bold text-[#24344D]">
            🎁 Los 3 bonos están incluidos en el <span className="text-[#FF806B] underline font-extrabold">Plan Premium</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
