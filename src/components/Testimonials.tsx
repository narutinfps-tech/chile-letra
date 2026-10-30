import { Quote, Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F9FF] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200/60 text-slate-700 text-xs sm:text-sm font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#176FE0]" />
            <span>Comunidad Educativa en Chile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24344D] tracking-tight mb-4 text-balance">
            Lo que dicen quienes trabajan con nuestros materiales
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Conoce las experiencias compartidas por docentes y familias.
          </p>
        </div>

        {/* Testimonials Container in Preview Mode (Strictly adhering to genuine testimonials guidelines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Experiencia docente */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative">
            <div>
              {/* Discrete Decorative Stars */}
              <div className="flex items-center gap-1 mb-4 text-[#FFC947]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#398BE8]/20 mb-3" />

              <h3 className="text-base font-bold text-[#24344D] mb-2">
                Experiencia docente
              </h3>

              {/* Placeholder text required by the client specifications */}
              <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
                [Insertar aquí una opinión auténtica y autorizada de una docente que haya utilizado las fichas en clase.]
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#398BE8]/10 text-[#176FE0] flex items-center justify-center font-bold text-xs">
                ED
              </div>
              <div>
                <p className="text-xs font-bold text-[#24344D]">Docente de 1° y 2° Básico</p>
                <p className="text-[11px] text-slate-400">Colegio en Región Metropolitana, Chile</p>
              </div>
            </div>
          </div>

          {/* Card 2: Experiencia en apoyo escolar */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative">
            <div>
              <div className="flex items-center gap-1 mb-4 text-[#FFC947]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-[#FF806B]/20 mb-3" />

              <h3 className="text-base font-bold text-[#24344D] mb-2">
                Experiencia en apoyo escolar
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
                [Insertar aquí una opinión auténtica y autorizada de una persona que haya utilizado el material en refuerzo educativo.]
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FF806B]/10 text-[#FF806B] flex items-center justify-center font-bold text-xs">
                AE
              </div>
              <div>
                <p className="text-xs font-bold text-[#24344D]">Especialista en Refuerzo</p>
                <p className="text-[11px] text-slate-400">Apoyo pedagógico personalizado, Chile</p>
              </div>
            </div>
          </div>

          {/* Card 3: Experiencia familiar */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative">
            <div>
              <div className="flex items-center gap-1 mb-4 text-[#FFC947]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-[#AD91EC]/20 mb-3" />

              <h3 className="text-base font-bold text-[#24344D] mb-2">
                Experiencia familiar
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
                [Insertar aquí una opinión auténtica y autorizada de una familia compradora.]
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#AD91EC]/15 text-[#8256d0] flex items-center justify-center font-bold text-xs">
                EF
              </div>
              <div>
                <p className="text-xs font-bold text-[#24344D]">Familia acompañante</p>
                <p className="text-[11px] text-slate-400">Práctica de escritura en el hogar, Chile</p>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Nota de transparencia pedagógica: publicamos únicamente testimonios reales y autorizados de docentes y apoderados.
          </p>
        </div>

      </div>
    </section>
  );
}
