"use client";
import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { createWhatsAppInquiryUrl, openWhatsApp, WHATSAPP_DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  User, 
  Truck, 
  Package, 
  Sparkles, 
  ChevronDown, 
  LogOut 
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    cartItemCount,
    subtotal,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsSearchOpen,
    setSelectedCategory,
    user,
    openAuthModal,
    signOut,
    userOrders
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', view: 'home' as const },
    {
      label: 'Shop Pickles',
      view: 'shop' as const,
      onClick: () => {
        setSelectedCategory('all');
        setCurrentView('shop');
      }
    },
    { label: 'Our Story', view: 'story' as const },
    { label: 'Why Dadi', view: 'why-dadi' as const },
    { label: 'Contact', view: 'contact' as const }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE1D0] shadow-xs transition-all w-full overflow-x-hidden">
      
      {/* 1. Top Announcement & Support Bar */}
      <div className="bg-[#103C26] text-[#FAF7F0] py-2 px-4 sm:px-8 text-[11px] sm:text-xs font-serif border-b border-[#C69D32]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#E8C86A] font-semibold tracking-wider uppercase text-[10px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Delivery Above ₹499</span>
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-white/80 font-sans text-[11px]">
              Slow Sun-Cured in Terracotta Martabans
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-sans">
            <button
              onClick={() => {
                if (user) {
                  setCurrentView('account');
                } else if (userOrders.length > 0) {
                  setCurrentView('order-tracking');
                } else {
                  openAuthModal('signin');
                }
              }}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#E8C86A] transition-colors cursor-pointer text-[11px]"
            >
              <Truck className="w-3.5 h-3.5 text-[#E8C86A]" />
              <span className="hidden sm:inline">Track Shipment</span>
            </button>

            <button
              onClick={() => openWhatsApp(createWhatsAppInquiryUrl('Namaste Dadi Industries! I would like to place an order directly via WhatsApp.'))}
              className="flex items-center gap-1 text-[#25D366] hover:text-[#1EBE5D] font-bold transition-colors cursor-pointer"
              title="Order on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-white">Order: </span>
              <span className="underline">{WHATSAPP_DISPLAY_PHONE}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main High-Craft Brand Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-2 sm:gap-4">
          
          {/* Left Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium font-sans">
            {navLinks.map(link => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.onClick) {
                      link.onClick();
                    } else {
                      setCurrentView(link.view);
                    }
                  }}
                  className={`relative py-1 tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'text-[#103C26] font-bold' 
                      : 'text-[#2D3E33] hover:text-[#103C26]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C69D32] to-[#103C26] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Center Brand Identity (Logo) */}
          <div 
            onClick={() => setCurrentView('home')}
            className="cursor-pointer transition-transform hover:scale-[1.02] active:scale-95 text-center flex-shrink-0"
          >
            <img src="/logo.png" alt="Namaste Dadi Industries Logo" 
              height={45}
              width={80}
              className="sm:w-[90px] sm:h-[50px] object-contain"
            />
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-3">
            
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full text-[#14241B] hover:bg-[#F3ECE0] hover:text-[#103C26] transition-colors cursor-pointer"
              aria-label="Search"
              title="Search Pickles"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded-full text-[#14241B] hover:bg-[#F3ECE0] hover:text-[#103C26] transition-colors cursor-pointer"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#B9442C] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User Account (Desktop Only) */}
            <div className="relative hidden md:block">
              {user ? (
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 bg-[#FAF7F0] hover:bg-[#F3ECE0] text-[#103C26] py-1.5 px-3 rounded-full border border-[#C69D32]/40 transition-all cursor-pointer shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full bg-[#103C26] text-[#E8C86A] font-serif font-bold text-xs flex items-center justify-center overflow-hidden flex-shrink-0">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-serif font-bold leading-none truncate max-w-[100px]">
                      {user.name.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-[#5E6E64] leading-none mt-0.5">
                      My Orders ({userOrders.length})
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-[#5E6E64]" />
                </button>
              ) : (
                <button
                  onClick={() => openAuthModal('signin')}
                  className="flex items-center gap-1.5 bg-[#F3ECE0] hover:bg-[#EAE1D0] text-[#103C26] py-2 px-3.5 rounded-full font-serif font-bold text-xs transition-all border border-[#C69D32]/40 cursor-pointer shadow-2xs"
                >
                  <User className="w-4 h-4 text-[#103C26]" />
                  <span>Login / Sign Up</span>
                </button>
              )}

              {/* User Dropdown Menu */}
              {userDropdownOpen && user && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#EAE1D0] py-2 z-50"
                  onClick={() => setUserDropdownOpen(false)}
                >
                  <div className="px-4 py-3 border-b border-[#EAE1D0] bg-[#FAF7F0]/60">
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#C69D32] font-bold block">
                      Signed In As
                    </span>
                    <p className="font-serif font-bold text-sm text-[#103C26] truncate">{user.name}</p>
                    <p className="text-xs text-[#5E6E64] truncate">{user.email}</p>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => setCurrentView('account')}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-serif font-bold text-[#103C26] hover:bg-[#FAF7F0] text-left cursor-pointer"
                    >
                      <Package className="w-4 h-4 text-[#C69D32]" />
                      <span>Recent Orders ({userOrders.length})</span>
                    </button>

                    <button
                      onClick={() => setCurrentView('account')}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-serif font-bold text-[#103C26] hover:bg-[#FAF7F0] text-left cursor-pointer"
                    >
                      <User className="w-4 h-4 text-[#103C26]" />
                      <span>Patron Profile & Address</span>
                    </button>
                  </div>

                  <div className="border-t border-[#EAE1D0] pt-1">
                    <button
                      onClick={signOut}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-serif font-semibold text-red-700 hover:bg-red-50 text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Cart Pill Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2 bg-[#103C26] hover:bg-[#0B2819] text-[#FAF7F0] px-3 sm:px-4 py-2 rounded-full transition-all shadow-md active:scale-95 border border-[#C69D32]/50 cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E8C86A]" />
              <div className="hidden sm:flex flex-col text-left leading-tight">
                <span className="text-[10px] text-[#E8C86A] uppercase font-bold tracking-wider font-serif">Cart</span>
                <span className="text-xs font-bold font-serif">₹{subtotal}</span>
              </div>
              <span className="bg-[#C69D32] text-[#0B2819] text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs">
                {cartItemCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#14241B] hover:bg-[#F3ECE0] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Smooth Animated Mobile Drawer Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FAF7F0] border-b border-[#EAE1D0] ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6 px-5' : 'max-h-0 opacity-0 py-0 px-5 pointer-events-none'
        }`}
      >
        <div className="space-y-4">
          
          {/* User Status / Login Bar in Mobile Drawer */}
          <div className="p-3.5 bg-white rounded-2xl border border-[#EAE1D0]">
            {user ? (
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-full bg-[#103C26] text-[#E8C86A] font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-serif font-bold text-[#103C26] block truncate">{user.name}</span>
                    <span className="text-[11px] text-[#5E6E64] block truncate">{user.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="text-xs text-red-600 font-serif font-semibold underline flex-shrink-0"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                <span className="text-xs text-[#5E6E64] font-sans text-center sm:text-left">
                  Have an account or want to register?
                </span>
                <button
                  onClick={() => { openAuthModal('signin'); setMobileMenuOpen(false); }}
                  className="w-full bg-[#103C26] hover:bg-[#0B2819] text-[#FAF7F0] px-5 py-2.5 rounded-xl text-xs font-serif font-bold shadow-sm transition-all active:scale-95 text-center cursor-pointer"
                >
                  Sign In / Register
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => {
                  if (link.onClick) {
                    link.onClick();
                  } else {
                    setCurrentView(link.view);
                  }
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-base font-serif font-bold text-[#14241B] hover:bg-white hover:text-[#103C26] transition-colors cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C69D32]">→</span>
              </button>
            ))}

            {user && (
              <button
                onClick={() => { setCurrentView('account'); setMobileMenuOpen(false); }}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-base font-serif font-bold text-[#103C26] bg-[#F3ECE0] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2 truncate">
                  <Package className="w-4 h-4 text-[#C69D32] flex-shrink-0" />
                  <span className="truncate">My Recent Orders ({userOrders.length})</span>
                </span>
                <span className="text-xs text-[#103C26] flex-shrink-0 ml-2">View →</span>
              </button>
            )}
          </div>

          <div className="pt-3 border-t border-[#EAE1D0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5E6E64]">
            <span className="font-serif">Harbazwala, Uttarakhand</span>
            <span className="text-[#103C26] font-serif font-bold">100% Sun-Cured Heritage</span>
          </div>

        </div>
      </div>

    </header>
  );
};