import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Tag, Check, Sparkles } from 'lucide-react';

export const SpecialOfferBanner: React.FC = () => {
  const { setCurrentView, setSelectedCategory, applyCoupon, appliedCoupon } = useShop();
  const [copied, setCopied] = useState(false);

  const couponCode = 'DESISWAAD';

  const handleCopyAndApply = () => {
    applyCoupon(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // const handleShopNow = () => {
  //   setSelectedCategory('all');
  //   setCurrentView('shop');
  // };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2819] via-[#103C26] to-[#16472F] text-white p-8 sm:p-12 shadow-2xl border border-[#C69D32]/40">
          {/* Background gold glow */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#C69D32]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#C69D32] text-[#0B2819] text-xs font-serif font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Festive Heritage Offer</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F0] leading-tight">
                Bring Home Authentic Desi Swaad
              </h2>

              <p className="text-sm sm:text-base text-[#C8D6CD] max-w-xl font-sans">
                Explore our handcrafted achaar collection and bring the true taste of home to your dining table.
                Enjoy <span className="text-[#E8C86A] font-bold">Free Shipping on all orders above ₹499</span>.
              </p>

              {/* Coupon Copy Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <Tag className="w-4 h-4 text-[#E8C86A]" />
                  <span className="text-xs text-[#C8D6CD]">Use Code:</span>
                  <span className="font-mono font-bold text-sm tracking-wider text-white">
                    {couponCode}
                  </span>
                  <button
                    onClick={handleCopyAndApply}
                    className="ml-2 text-xs font-serif font-bold text-[#E8C86A] hover:text-white transition-colors underline cursor-pointer"
                  >
                    {copied || appliedCoupon === couponCode ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Applied
                      </span>
                    ) : (
                      'Apply Code'
                    )}
                  </button>
                </div>

                <span className="text-xs text-[#C8D6CD]">
                  (Flat 10% instant discount at checkout)
                </span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                // onClick={handleShopNow}
                className="bg-[#C69D32] hover:bg-[#D8B244] text-[#0B2819] px-8 py-4 rounded-full font-serif font-bold text-base shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-[#E8C86A]"
              >
                <span>Shop All Pickles</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
