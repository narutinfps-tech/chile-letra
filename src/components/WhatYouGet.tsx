import { Eye, Activity, PenTool, Link2, Type, FileText, CheckCircle2 } from 'lucide-react';

interface StageCard {
  stage: string;
  title: string;
  activitiesCount: string;
  description: string;
  icon: typeof Eye;
  colorBg: string;
  colorText: string;
  borderColor: string;
}

const STAGES: StageCard[] = [
  {
    stage: "Etapa 1",
    title: "Reconocemos las letras",
    activitiesCount: "8 actividades",
    description: "8 actividades para identificar y relacionar la letra imprenta con la letra ligada.",
    icon: Eye,
    colorBg: "bg-[#398BE8]/10",
    colorText: "text-[#176FE0]",
    borderColor: "border-[#398BE8]/20",
  },
  {
    stage: "Etapa 2",
    title: "Preparamos los trazos",
    activitiesCount: "10 actividades",
    description: "10 actividades con curvas, ondas, lazos y movimientos gráficos.",
    icon: Activity,
    colorBg: "bg-[#FF806B]/10",
    colorText: "text-[#FF806B]",
    borderColor: "border-[#FF806B]/20",
  },
  {
    stage: "Etapa 3",
    title: "Formamos las letras",
    activitiesCount: "18 actividades",
    description: "18 actividades para practicar la formación de las letras, con modelos y apoyos visuales.",
    icon: PenTool,
    colorBg: "bg-[#FFC947]/20",
    colorText: "text-[#c28400]",
    borderColor: "border-[#FFC947]/30",
  },
  {
    stage: "Etapa 4",
    title: "Unimos letras y sílabas",
    activitiesCount: "10 actividades",
    description: "10 actividades para trabajar enlaces y combinaciones de letras.",
    icon: Link2,
    colorBg: "bg-[#AD91EC]/15",
    colorText: "text-[#8256d0]",
    borderColor: "border-[#AD91EC]/25",
  },
  {
    stage: "Etapa 5",
    title: "Escribimos palabras",
    activitiesCount: "8 actividades",
    description: "8 actividades para pasar de las sílabas a palabras familiares.",
    icon: Type,
    colorBg: "bg-[#398BE8]/10",
    colorText: "text-[#176FE0]",
    borderColor: "border-[#398BE8]/20",
  },
  {
    stage: "Etapa 6",
    title: "Construimos oraciones",
    activitiesCount: "6 actividades",
    description: "6 actividades para practicar frases y textos breves con apoyos progresivos.",
    icon: FileText,
    colorBg: "bg-[#FF806B]/10",
    colorText: "text-[#FF806B]",
    borderColor: "border-[#FF806B]/20",
  },
];

export default function WhatYouGet() {
  return (
    <section id="contenido" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#176FE0] uppercase tracking-wider mb-2 block">
            Estructura Didáctica Paso a Paso
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            ¡Todo lo que necesitas para practicar la letra ligada, paso a paso!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Un material organizado para facilitar la preparación de actividades y acompañar el aprendizaje de la escritura.
          </p>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className={`relative flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl bg-white border ${stage.borderColor} shadow-xs hover:shadow-md transition-all duration-200 group`}
              >
                {/* Stage pill header */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stage.stage} · {stage.activitiesCount}
                  </span>
                </div>

                {/* Big centered icon inside colored circle */}
                <div
                  className={`w-16 h-16 rounded-full ${stage.colorBg} ${stage.colorText} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 shadow-xs`}
                >
                  <Icon className="w-8 h-8" strokeWidth={2.2} />
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#24344D] mb-3">
                  {stage.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#F7F9FF] via-white to-[#F7F9FF] border border-[#398BE8]/30 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2.5 text-base sm:text-lg font-bold text-[#176FE0]">
            <CheckCircle2 className="w-5 h-5 text-[#176FE0] shrink-0" />
            <span>60 fichas educativas organizadas en 6 etapas de aprendizaje.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
