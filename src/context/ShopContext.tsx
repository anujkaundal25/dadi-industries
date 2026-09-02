import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Product, CartItem, OrderDetails, UserProfile } from '../types';
import { PRODUCTS } from '../data/products';

export type ViewType = 'home' | 'shop' | 'story' | 'why-dadi' | 'contact' | 'product-detail' | 'order-tracking' | 'account';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

const SAMPLE_DEMO_ORDERS: OrderDetails[] = [
  {
    orderId: 'DI-849201',
    customerName: 'Rohit Sharma',
    email: 'rohits502010@gmail.com',
    phone: '+91 98765 43210',
    address: 'B-14, Green Valley Enclave, Rajpur Road',
    city: 'Dehradun',
    state: 'Uttarakhand',
    pincode: '248001',
    items: [
      {
        product: PRODUCTS[0],
        selectedWeight: '500g',
        unitPrice: 269,
        quantity: 2
      },
      {
        product: PRODUCTS[2],
        selectedWeight: '250g',
        unitPrice: 189,
        quantity: 1
      }
    ],
    subtotal: 727,
    discount: 73,
    shipping: 0,
    total: 654,
    paymentMethod: 'upi',
    orderDate: '24 Aug 2026',
    estimatedDelivery: '28 Aug 2026',
    status: 'Delivered'
  },
  {
    orderId: 'DI-912304',
    customerName: 'Rohit Sharma',
    email: 'rohits502010@gmail.com',
    phone: '+91 98765 43210',
    address: 'B-14, Green Valley Enclave, Rajpur Road',
    city: 'Dehradun',
    state: 'Uttarakhand',
    pincode: '248001',
    items: [
      {
        product: PRODUCTS[1],
        selectedWeight: '500g',
        unitPrice: 249,
        quantity: 1
      },
      {
        product: PRODUCTS[4],
        selectedWeight: '250g',
        unitPrice: 149,
        quantity: 2
      }
    ],
    subtotal: 547,
    discount: 0,
    shipping: 0,
    total: 547,
    paymentMethod: 'card',
    orderDate: '30 Aug 2026',
    estimatedDelivery: '03 Sep 2026',
    status: 'In Transit'
  }
];

interface ShopContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  selectedProductId: string | null;
  openProductDetail: (productId: string) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  cart: CartItem[];
  addToCart: (product: Product, weight?: string, quantity?: number) => void;
  updateCartQuantity: (productId: string, weight: string, newQuantity: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  appliedCoupon: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discountPercentage: number;
  subtotal: number;
  shippingFee: number;
  discountAmount: number;
  totalAmount: number;
  cartItemCount: number;
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  lastOrder: OrderDetails | null;
  placeOrder: (details: Omit<OrderDetails, 'orderId' | 'items' | 'subtotal' | 'discount' | 'shipping' | 'total' | 'orderDate' | 'estimatedDelivery'>) => OrderDetails;
  freeShippingThreshold: number;

  user: UserProfile | null;
  isAuthModalOpen: boolean;
  authModalMode: 'signin' | 'signup';
  openAuthModal: (mode?: 'signin' | 'signup') => void;
  closeAuthModal: () => void;
  signIn: (emailOrPhone: string, name?: string) => boolean;
  signUp: (name: string, email: string, phone: string, address?: string, city?: string, state?: string, pincode?: string) => boolean;
  signOut: () => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  userOrders: OrderDetails[];
  trackSpecificOrder: (orderId: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const viewToPath = (view: ViewType): string => {
  switch (view) {
    case 'home': return '/';
    case 'shop': return '/shop';
    case 'story': return '/story';
    case 'why-dadi': return '/why-dadi';
    case 'contact': return '/contact';
    case 'order-tracking': return '/order-tracking';
    case 'account': return '/account';
    case 'product-detail': return '/shop';
    default: return '/';
  }
};

const pathToView = (pathname: string): { view: ViewType; productId: string | null } => {
  if (pathname === '/' || pathname === '') return { view: 'home', productId: null };
  if (pathname === '/shop') return { view: 'shop', productId: null };
  if (pathname.startsWith('/product/')) {
    const id = pathname.replace('/product/', '').split('/')[0];
    return { view: 'product-detail', productId: id || null };
  }
  if (pathname === '/story') return { view: 'story', productId: null };
  if (pathname === '/why-dadi') return { view: 'why-dadi', productId: null };
  if (pathname === '/contact') return { view: 'contact', productId: null };
  if (pathname === '/order-tracking') return { view: 'order-tracking', productId: null };
  if (pathname === '/account') return { view: 'account', productId: null };
  return { view: 'home', productId: null };
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const derived = useMemo(() => pathToView(pathname), [pathname]);
  const currentView: ViewType = derived.view;
  const selectedProductId: string | null = derived.productId;

  const setCurrentView = (view: ViewType) => {
    const target = viewToPath(view);
    if (target !== pathname) {
      router.push(target);
    }
  };

  const openProductDetail = (productId: string) => {
    router.push(`/product/${productId}`);
    setQuickViewProduct(null);
  };

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<UserProfile | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem('dadi_user');
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return {
      id: 'usr_7719',
      name: 'Rohit Sharma',
      email: 'rohits502010@gmail.com',
      phone: '+91 98765 43210',
      address: 'B-14, Green Valley Enclave, Rajpur Road',
      city: 'Dehradun',
      state: 'Uttarakhand',
      pincode: '248001',
      joinedDate: 'August 2026',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    };
  });

  const [userOrders, setUserOrders] = useState<OrderDetails[]>(() => {
    if (typeof window === 'undefined') return SAMPLE_DEMO_ORDERS;
    try {
      const saved = localStorage.getItem('dadi_user_orders');
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return SAMPLE_DEMO_ORDERS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') {
      const mango = PRODUCTS[0];
      const lemon = PRODUCTS[1];
      return [
        { product: mango, selectedWeight: '250g', unitPrice: 149, quantity: 1 },
        { product: lemon, selectedWeight: '250g', unitPrice: 139, quantity: 1 },
      ];
    }
    try {
      const saved = localStorage.getItem('dadi_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    const mango = PRODUCTS[0];
    const lemon = PRODUCTS[1];
    return [
      { product: mango, selectedWeight: '250g', unitPrice: 149, quantity: 1 },
      { product: lemon, selectedWeight: '250g', unitPrice: 139, quantity: 1 },
    ];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [PRODUCTS[0].id, PRODUCTS[4].id];
    try {
      const saved = localStorage.getItem('dadi_wishlist');
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return [PRODUCTS[0].id, PRODUCTS[4].id];
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string>('DESISWAAD');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(() => {
    return userOrders.length > 0 ? userOrders[0] : null;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem('dadi_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('dadi_user');
    }
  }, [user]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('dadi_user_orders', JSON.stringify(userOrders));
  }, [userOrders]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('dadi_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('dadi_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const openAuthModal = (mode: 'signin' | 'signup' = 'signin') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const signIn = (emailOrPhone: string, name?: string): boolean => {
    const cleanInput = emailOrPhone.trim();
    if (!cleanInput) {
      showToast('Please enter your email or mobile number', 'warning');
      return false;
    }

    const userName = name || (cleanInput.includes('@') ? cleanInput.split('@')[0] : 'Valued Patron');
    const newUser: UserProfile = {
      id: 'usr_' + Math.floor(1000 + Math.random() * 9000),
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: cleanInput.includes('@') ? cleanInput : `${cleanInput}@dadiindustries.customer`,
      phone: cleanInput.includes('@') ? '+91 98765 43210' : cleanInput,
      address: 'B-14, Green Valley Enclave, Rajpur Road',
      city: 'Dehradun',
      state: 'Uttarakhand',
      pincode: '248001',
      joinedDate: 'September 2026',
    };

    setUser(newUser);
    if (userOrders.length === 0) {
      setUserOrders(SAMPLE_DEMO_ORDERS);
    }
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${newUser.name}!`, 'success');
    return true;
  };

  const signUp = (
    name: string,
    email: string,
    phone: string,
    address?: string,
    city?: string,
    state?: string,
    pincode?: string
  ): boolean => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      showToast('Please fill in your name, email, and mobile number', 'warning');
      return false;
    }

    const newUser: UserProfile = {
      id: 'usr_' + Math.floor(1000 + Math.random() * 9000),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      address: address?.trim() || 'Flat 402, Heritage Residency',
      city: city?.trim() || 'Dehradun',
      state: state?.trim() || 'Uttarakhand',
      pincode: pincode?.trim() || '248001',
      joinedDate: 'September 2026',
    };

    setUser(newUser);
    if (userOrders.length === 0) {
      setUserOrders(SAMPLE_DEMO_ORDERS);
    }
    setIsAuthModalOpen(false);
    showToast(`Namaste ${newUser.name}! Your Dadi Industries account is ready.`, 'success');
    return true;
  };

  const signOut = () => {
    setUser(null);
    showToast('You have been signed out safely.', 'info');
  };

  const updateUserProfile = (updatedFields: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updatedFields };
    setUser(updated);
    showToast('Profile updated successfully!', 'success');
  };

  const trackSpecificOrder = (orderId: string) => {
    const found = userOrders.find(o => o.orderId === orderId);
    if (found) {
      setLastOrder(found);
      setCurrentView('order-tracking');
    }
  };

  const addToCart = (product: Product, weight?: string, quantity: number = 1) => {
    const targetWeight = weight || product.weight;
    const variant = product.variants.find(v => v.weight === targetWeight) || { price: product.price };
    const unitPrice = variant.price;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.selectedWeight === targetWeight);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedWeight: targetWeight, unitPrice, quantity }];
    });

    showToast(`Added ${quantity}x ${product.name} (${targetWeight}) to cart!`);
  };

  const updateCartQuantity = (productId: string, weight: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, weight);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId && item.selectedWeight === weight
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, weight: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedWeight === weight)));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from your wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        const prod = PRODUCTS.find(p => p.id === productId);
        showToast(`Saved ${prod?.name || 'item'} to your wishlist!`, 'success');
        return [...prev, productId];
      }
    });
  };

  const applyCoupon = (code: string): boolean => {
    const normalized = code.trim().toUpperCase();
    if (normalized === 'DESISWAAD' || normalized === 'DADI10' || normalized === 'HOMEMADE') {
      setAppliedCoupon(normalized);
      showToast(`Coupon "${normalized}" applied! 10% savings unlocked.`, 'success');
      return true;
    } else if (normalized === 'FREESHIP') {
      setAppliedCoupon(normalized);
      showToast('Free shipping coupon applied!', 'success');
      return true;
    } else {
      showToast('Invalid promo code. Try "DESISWAAD" or "FREESHIP"', 'warning');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon('');
    showToast('Coupon removed', 'info');
  };

  const freeShippingThreshold = 499;
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  let discountPercentage = 0;
  if (appliedCoupon === 'DESISWAAD' || appliedCoupon === 'DADI10' || appliedCoupon === 'HOMEMADE') {
    discountPercentage = 0.10;
  }

  const discountAmount = Math.round(subtotal * discountPercentage);
  const shippingFee = (subtotal >= freeShippingThreshold || appliedCoupon === 'FREESHIP' || subtotal === 0) ? 0 : 49;
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingFee);

  const placeOrder = (details: Omit<OrderDetails, 'orderId' | 'items' | 'subtotal' | 'discount' | 'shipping' | 'total' | 'orderDate' | 'estimatedDelivery'>): OrderDetails => {
    const orderId = 'DI-' + Math.floor(100000 + Math.random() * 900000);
    const now = new Date();
    const deliveryDate = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);

    const newOrder: OrderDetails = {
      ...details,
      orderId,
      items: [...cart],
      subtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total: totalAmount,
      orderDate: now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      estimatedDelivery: deliveryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Processing',
      userId: user?.id
    };

    setUserOrders(prev => [newOrder, ...prev]);
    setLastOrder(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    router.push('/order-tracking');
    showToast(`Order #${orderId} confirmed successfully!`, 'success');
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedProductId,
        openProductDetail,
        quickViewProduct,
        setQuickViewProduct,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        discountPercentage,
        subtotal,
        shippingFee,
        discountAmount,
        totalAmount,
        cartItemCount,
        toasts,
        showToast,
        removeToast,
        isCheckoutOpen,
        setIsCheckoutOpen,
        lastOrder,
        placeOrder,
        freeShippingThreshold,

        user,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        signIn,
        signUp,
        signOut,
        updateUserProfile,
        userOrders,
        trackSpecificOrder
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
