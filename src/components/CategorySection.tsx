import React from 'react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategorySection: React.FC = () => {
  const { setCurrentView, setSelectedCategory } = useShop();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // setCurrentView('shop');
  };

  return (
    <section id="categories-section" className="py-12 sm:py-16 bg-[#FAF7F0] border-b border-[#EAE1D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-[0.2em] text-[#C69D32]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Selections</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#103C26] mt-1">
              Explore By Flavour Heritage
            </h2>
          </div>

          <button
            // onClick={() => {
            //   setSelectedCategory('all');
            //   setCurrentView('shop');
            // }}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-serif font-bold uppercase tracking-wider text-[#103C26] hover:text-[#C69D32] transition-colors"
          >
            <span>All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5-Column Responsive Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="flex flex-col items-center justify-center p-6 text-center group cursor-pointer bg-white rounded-2xl border border-[#EAE1D0] hover:border-[#C69D32] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#103C26] via-[#C69D32] to-[#103C26] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category Emoji with zoom */}
              <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-115 transition-transform duration-300">
                {cat.emoji}
              </div>

              {/* Bold Category Name in Serif */}
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#103C26] group-hover:text-[#C69D32] transition-colors leading-tight">
                {cat.name}
              </h3>

              {/* Tagline */}
              <p className="text-[11.5px] font-medium text-[#5E6E64] mt-1 line-clamp-1 font-sans">
                {cat.tagline}
              </p>

              {/* Varieties pill */}
              <span className="mt-3.5 inline-block text-[10px] font-bold text-[#103C26] bg-[#F3ECE0] px-2.5 py-0.5 rounded-full group-hover:bg-[#103C26] group-hover:text-[#FAF7F0] transition-colors uppercase tracking-wider font-serif">
                {cat.itemCount} Flavours
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
