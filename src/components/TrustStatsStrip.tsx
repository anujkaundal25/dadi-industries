import React from 'react';
import { Users, BookOpen, Utensils, HeartHandshake, Sparkles, ShieldCheck } from 'lucide-react';

export const TrustStatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Families",
      desc: "Delivered across 200+ Indian cities"
    },
    {
      icon: BookOpen,
      value: "15+",
      label: "Ancestral Recipes",
      desc: "Preserved from traditional home kitchens"
    },
    {
      icon: Utensils,
      value: "50+",
      label: "Flavour Varieties",
      desc: "Pickles, chutneys & aromatic masalas"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Natural & Pure",
      desc: "Sun-cured with zero artificial chemicals"
    }
  ];

  return (
    <section className="bg-[#103C26] text-white py-14 sm:py-18 relative overflow-hidden border-y border-[#C69D32]/30">
      {/* Background subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C69D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-serif font-bold tracking-[0.25em] text-[#E8C86A]">
            Quality • Trust • Natural
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F0] mt-1">
            Trusted by Households All Over India
          </h2>
        </div>

        {/* 4 Stats Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#0B2819]/60 border border-[#C69D32]/30 hover:border-[#C69D32] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#16472F] text-[#E8C86A] flex items-center justify-center mb-3 shadow-inner border border-[#C69D32]/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF7F0] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-serif font-semibold text-[#E8C86A] mt-1">
                  {stat.label}
                </div>
                <div className="text-[11.5px] text-[#C8D6CD] mt-0.5 font-sans">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
