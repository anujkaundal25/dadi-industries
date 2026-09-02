import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Logo } from './Logo';
import { X, User, Mail, Phone, Lock, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalMode,
    openAuthModal,
    signIn,
    signUp,
    setCurrentView,
    user
  } = useShop();

  const [mode, setMode] = useState<'signin' | 'signup'>(authModalMode);
  
  // Sign In state
  const [signInIdentifier, setSignInIdentifier] = useState('rohits502010@gmail.com');
  const [signInPassword, setSignInPassword] = useState('dadi12345');

  // Sign Up state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('Uttarakhand');
  const [pincode, setPincode] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  // Sync mode with context
  React.useEffect(() => {
    setMode(authModalMode);
  }, [authModalMode, isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signIn(signInIdentifier)) {
      setCurrentView('account');
    }
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUp(name, email, phone, address, city, stateVal, pincode)) {
      setCurrentView('account');
    }
  };

  const handleQuickDemoFill = () => {
    if (mode === 'signin') {
      setSignInIdentifier('rohits502010@gmail.com');
      setSignInPassword('dadi12345');
    } else {
      setName('Rohit Sharma');
      setEmail('rohits502010@gmail.com');
      setPhone('+91 98765 43210');
      setAddress('B-14, Green Valley Enclave, Rajpur Road');
      setCity('Dehradun');
      setStateVal('Uttarakhand');
      setPincode('248001');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF7F0] w-full max-w-xl rounded-3xl shadow-2xl border border-[#C69D32]/40 overflow-hidden text-[#103C26]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#103C26] text-[#FAF7F0] p-6 sm:p-7 relative border-b border-[#C69D32]/30">
          <button
            onClick={closeAuthModal}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-[#C69D32]/40 flex items-center justify-center shadow-inner">
              <Logo size="sm" showText={false} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-[#E8C86A] font-bold block">
                Dadi Industries • Patron Portal
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF7F0]">
                {mode === 'signin' ? 'Sign In to Your Account' : 'Create Your Patron Account'}
              </h2>
            </div>
          </div>
          <p className="text-xs text-[#FAF7F0]/80 font-sans mt-1">
            {mode === 'signin'
              ? 'Access your recent orders, shipment tracker, and heritage rewards.'
              : 'Join our family for hand-crafted sun-cured pickles and order history tracking.'}
          </p>

          {/* Mode Switch Tabs */}
          <div className="grid grid-cols-2 gap-2 mt-5 bg-[#0B2819] p-1.5 rounded-2xl border border-[#C69D32]/30">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`py-2 px-4 rounded-xl font-serif font-bold text-xs transition-all cursor-pointer ${
                mode === 'signin'
                  ? 'bg-[#FAF7F0] text-[#103C26] shadow-sm'
                  : 'text-[#FAF7F0]/80 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`py-2 px-4 rounded-xl font-serif font-bold text-xs transition-all cursor-pointer ${
                mode === 'signup'
                  ? 'bg-[#FAF7F0] text-[#103C26] shadow-sm'
                  : 'text-[#FAF7F0]/80 hover:text-white'
              }`}
            >
              Create Account (Sign Up)
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Demo Pre-fill Shortcut */}
          <div className="flex items-center justify-between bg-[#F3ECE0] px-4 py-2.5 rounded-xl border border-[#EAE1D0] text-xs">
            <span className="text-[#5E6E64] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C69D32]" />
              Need to test quickly?
            </span>
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="text-[#103C26] font-serif font-bold underline hover:text-[#0B2819] cursor-pointer"
            >
              Auto-fill Demo Details
            </button>
          </div>

          {mode === 'signin' ? (
            /* Sign In Form */
            <form onSubmit={handleSignInSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#103C26] mb-1.5">
                  Email Address or Mobile Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#5E6E64] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={signInIdentifier}
                    onChange={(e) => setSignInIdentifier(e.target.value)}
                    placeholder="e.g. rohits502010@gmail.com or 9876543210"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#103C26] focus:outline-none focus:border-[#C69D32] focus:ring-1 focus:ring-[#C69D32]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#103C26]">
                    Password or OTP
                  </label>
                  <span className="text-[11px] text-[#2F7A52] font-semibold">Demo Password: dadi12345</span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#5E6E64] absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#103C26] focus:outline-none focus:border-[#C69D32] focus:ring-1 focus:ring-[#C69D32]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-[#5E6E64]">
                  <input type="checkbox" defaultChecked className="rounded text-[#103C26] focus:ring-[#C69D32]" />
                  <span>Keep me signed in</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('For this demo, simply enter any mobile number or email with password "dadi12345".')}
                  className="text-[#C69D32] hover:underline font-serif font-bold"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#103C26] hover:bg-[#0B2819] text-[#FAF7F0] py-3.5 px-6 rounded-xl font-serif font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer border border-[#C69D32]/40 mt-2"
              >
                <span>Sign In & View My Orders</span>
                <ArrowRight className="w-4 h-4 text-[#E8C86A]" />
              </button>
            </form>
          ) : (
            /* Sign Up Form */
            <form onSubmit={handleSignUpSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#103C26] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#5E6E64] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohit Sharma"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl pl-10 pr-4 py-2 text-sm text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#103C26] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#5E6E64] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rohit@example.com"
                      className="w-full bg-white border border-[#EAE1D0] rounded-xl pl-10 pr-4 py-2 text-sm text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#103C26] mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#5E6E64] absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-[#EAE1D0] rounded-xl pl-10 pr-4 py-2 text-sm text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#103C26] mb-1">
                  Delivery Address & Street
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#5E6E64] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Flat No, Apartment, Street name"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl pl-10 pr-4 py-2 text-sm text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-serif font-bold text-[#103C26] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Dehradun"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl px-3 py-2 text-xs text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-serif font-bold text-[#103C26] mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={stateVal}
                    onChange={(e) => setStateVal(e.target.value)}
                    placeholder="Uttarakhand"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl px-3 py-2 text-xs text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-serif font-bold text-[#103C26] mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="248001"
                    className="w-full bg-white border border-[#EAE1D0] rounded-xl px-3 py-2 text-xs text-[#103C26] focus:outline-none focus:border-[#C69D32]"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#5E6E64] pt-1">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  required
                  className="rounded text-[#103C26] focus:ring-[#C69D32]"
                />
                <span>I agree to Dadi Industries Pure Quality Pledge & Terms.</span>
              </label>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#103C26] hover:bg-[#0B2819] text-[#FAF7F0] py-3.5 px-6 rounded-xl font-serif font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer border border-[#C69D32]/40 mt-3"
              >
                <span>Create Account & See Recent Orders</span>
                <ArrowRight className="w-4 h-4 text-[#E8C86A]" />
              </button>
            </form>
          )}

          {/* Value Perks Footer Strip */}
          <div className="border-t border-[#EAE1D0] pt-4 grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-[#2F7A52] mb-1" />
              <span className="text-[10px] font-serif font-bold text-[#103C26]">Recent Orders</span>
              <span className="text-[9px] text-[#5E6E64]">Live tracking</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-4 h-4 text-[#C69D32] mb-1" />
              <span className="text-[10px] font-serif font-bold text-[#103C26]">1-Click Reorder</span>
              <span className="text-[9px] text-[#5E6E64]">Never run out</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-4 h-4 text-[#103C26] mb-1" />
              <span className="text-[10px] font-serif font-bold text-[#103C26]">Patron Perks</span>
              <span className="text-[9px] text-[#5E6E64]">Early batch access</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
