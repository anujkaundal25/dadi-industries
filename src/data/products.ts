import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'mango',
    name: 'Mango Achaar',
    tagline: 'Khatta, Teekha & Masaledaar',
    description: 'Sun-dried raw mangoes in pure cold-pressed mustard oil with roasted fenugreek, fennel and kalonji.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
    emoji: '🥭'
  },
  {
    id: 'lemon',
    name: 'Lemon Achaar',
    tagline: 'Chatpata Desi Swaad',
    description: 'Juicy hill-lemons cured in rock salt, ajwain and warming spices for that perfect digestive tang.',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
    emoji: '🍋'
  },
  {
    id: 'chilli',
    name: 'Chilli Achaar',
    tagline: 'Teekha Jo Dil Jeet Le',
    description: 'Hand-stuffed Banarasi red and fiery green chillies with roasted amchur and rai masala.',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
    emoji: '🌶️'
  },
  {
    id: 'mixed',
    name: 'Mixed Pickles',
    tagline: 'Har Bite Mein Desi Flavour',
    description: 'Crisp seasonal veggies including carrots, cauliflower, turnip, ginger and garlic in spiced oil.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
    emoji: '🧄'
  },
  {
    id: 'chutney_masala',
    name: 'Chutneys & Masalas',
    tagline: 'Traditional Taste Essentials',
    description: 'Stone-ground garlic chutneys, sweet-sour imli sonth, and hand-pounded fragrant pickle spice blends.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
    emoji: '🫙'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'dadi-special-mango-achaar',
    name: "Dadi's Special Mango Achaar",
    hindiName: "दादी का खास आम का अचार",
    tagline: "Authentic raw mango pickle made with hand-pounded spices & cold-pressed mustard oil",
    description: "Our signature raw mango pickle follows an ancestral family recipe. Crisp Ramkela mangoes cut by hand, sun-cured for days in glazed ceramic martabans, and steeped in aromatic cold-pressed mustard oil blended with saunf (fennel), methi dana (fenugreek), kalonji, turmeric, and hing (asafoetida). It has that unforgettable homely bite that turns everyday meals into a feast.",
    category: 'mango',
    categoryLabel: 'Mango Pickles',
    price: 149,
    originalPrice: 179,
    weight: '250g',
    variants: [
      { weight: '250g', price: 149, originalPrice: 179, inStock: true },
      { weight: '500g', price: 279, originalPrice: 320, inStock: true },
      { weight: '1kg', price: 499, originalPrice: 599, inStock: true }
    ],
    rating: 4.9,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Medium',
    oilType: 'Pure Kachi Ghani Mustard Oil',
    ingredients: ['Raw Mango Chunks', 'Cold-Pressed Mustard Oil', 'Fennel Seeds (Saunf)', 'Fenugreek Seeds (Methi)', 'Nigella Seeds (Kalonji)', 'Turmeric Powder', 'Kashmiri Red Chilli', 'Rock Salt', 'Hing (Asafoetida)'],
    shelfLife: '12 Months from packaging',
    storageInfo: 'Store in a cool, dry place. Always use a clean and dry spoon. Keep the pickle submerged in oil layer to preserve freshness.',
    isBestseller: true,
    pairingSuggestions: ['Garam Aloo Paratha with fresh butter', 'Dal Tadka and Steamed Rice', 'Puri and Chana Masala', 'Khichdi on rainy evenings'],
    nutritionPer100g: {
      energy: '185 kcal',
      protein: '2.1 g',
      carbohydrates: '14.8 g',
      fat: '13.2 g',
      sodium: '1180 mg'
    }
  },
  {
    id: 'punjabi-lemon-achaar',
    name: "Punjabi Lemon Achaar",
    hindiName: "पंजाबी खट्टा-मीठा नींबू का अचार",
    tagline: "Zesty sun-ripened hill lemons with ajwain, black salt and mild spices",
    description: "Sun-ripened thin-skinned lemons cut into wedges and gently cured without oil in a blend of carom seeds (ajwain), roasted cumin, black salt, and dry ginger. Naturally aged under the mountain sun until the rind becomes melt-in-mouth tender. Perfectly balanced tang with natural digestive benefits.",
    category: 'lemon',
    categoryLabel: 'Lemon Pickles',
    price: 139,
    originalPrice: 165,
    weight: '250g',
    variants: [
      { weight: '250g', price: 139, originalPrice: 165, inStock: true },
      { weight: '500g', price: 259, originalPrice: 299, inStock: true },
      { weight: '1kg', price: 469, originalPrice: 549, inStock: true }
    ],
    rating: 4.8,
    reviewCount: 218,
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Mild',
    oilType: 'Oil-Free (Traditional Brine & Sun Cure)',
    ingredients: ['Fresh Mountain Lemons', 'Ajwain (Carom Seeds)', 'Black Rock Salt (Kala Namak)', 'Roasted Jeera (Cumin)', 'Sonth (Dry Ginger)', 'Red Chilli Powder', 'Pure Salt'],
    shelfLife: '18 Months (Ages naturally with time)',
    storageInfo: 'Store at room temperature in a dry place. Keep jar tightly sealed. Natural dark colour develops as it matures, enhancing the digestive flavour.',
    isBestseller: true,
    pairingSuggestions: ['Besan Chilla with Curd', 'Moong Dal Khichdi', 'Methi Thepla for travel', 'Paneer Paratha'],
    nutritionPer100g: {
      energy: '98 kcal',
      protein: '1.4 g',
      carbohydrates: '21.0 g',
      fat: '0.8 g',
      sodium: '1420 mg'
    }
  },
  {
    id: 'green-chilli-achaar',
    name: "Green Chilli Achaar (Hari Mirch Ka Achaar)",
    hindiName: "हरी मिर्च का चटपटा अचार",
    tagline: "Fresh split green chillies with crushed yellow mustard seeds & tangy amchur",
    description: "Crisp handpicked green chillies slit and marinated with crushed yellow mustard (peeli sarson), roasted fennel, turmeric, dry mango powder (amchur), and a dash of lemon juice in pure mustard oil. It provides that sharp, zesty kick that spice lovers crave with every meal.",
    category: 'chilli',
    categoryLabel: 'Chilli Pickles',
    price: 129,
    originalPrice: 155,
    weight: '200g',
    variants: [
      { weight: '200g', price: 129, originalPrice: 155, inStock: true },
      { weight: '400g', price: 239, originalPrice: 280, inStock: true },
      { weight: '800g', price: 429, originalPrice: 499, inStock: true }
    ],
    rating: 4.9,
    reviewCount: 289,
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Teekha (Spicy)',
    oilType: 'Pure Mustard Oil',
    ingredients: ['Fresh Green Chillies', 'Cold-Pressed Mustard Oil', 'Yellow Mustard Seeds (Peeli Sarson)', 'Fennel Seeds', 'Dry Mango Powder (Amchur)', 'Turmeric', 'Salt', 'Lemon Extract'],
    shelfLife: '9 Months from packaging',
    storageInfo: 'Store in a cool and dry spot. Keep jar lid tightly closed and avoid moisture.',
    isBestseller: true,
    pairingSuggestions: ['Dal-Chawal with Ghee', 'Sattu Paratha', 'Poha and Jalebi breakfast', 'Chole Bhature'],
    nutritionPer100g: {
      energy: '142 kcal',
      protein: '2.8 g',
      carbohydrates: '9.4 g',
      fat: '10.5 g',
      sodium: '1250 mg'
    }
  },
  {
    id: 'mixed-vegetable-achaar',
    name: "Mixed Vegetable Achaar (Pachranga)",
    hindiName: "मिक्स्ड वेज पचरंगा अचार",
    tagline: "A colourful medley of winter carrots, cauliflower, turnip, ginger & garlic",
    description: "A celebration of northern Indian winter vegetables. Crunchy red carrots, firm cauliflower florets, desi turnip, fresh ginger slivers, and whole garlic cloves tossed together in hand-ground spices and seasoned mustard oil. Rich, crunchy, and packed with complex layered flavour in every spoonful.",
    category: 'mixed',
    categoryLabel: 'Mixed Pickles',
    price: 169,
    originalPrice: 199,
    weight: '300g',
    variants: [
      { weight: '300g', price: 169, originalPrice: 199, inStock: true },
      { weight: '600g', price: 299, originalPrice: 350, inStock: true },
      { weight: '1kg', price: 489, originalPrice: 579, inStock: true }
    ],
    rating: 4.8,
    reviewCount: 194,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Medium',
    oilType: 'Mustard Oil with Spiced Infusion',
    ingredients: ['Carrot', 'Cauliflower', 'Turnip (Shalgam)', 'Fresh Ginger Juliennes', 'Peeled Garlic', 'Mustard Oil', 'Rai', 'Methi', 'Kalonji', 'Spices & Rock Salt'],
    shelfLife: '12 Months from packaging',
    storageInfo: 'Store in cool ambient conditions. Keep the vegetables pressed beneath the spiced oil level.',
    isBestseller: true,
    pairingSuggestions: ['Ajwain Paratha with Curd', 'Arhar Dal with Jeera Rice', 'Pulao and Boondi Raita', 'Missi Roti with White Butter'],
    nutritionPer100g: {
      energy: '160 kcal',
      protein: '2.2 g',
      carbohydrates: '12.6 g',
      fat: '11.8 g',
      sodium: '1190 mg'
    }
  },
  {
    id: 'banarasi-lal-mirch-bharwa',
    name: "Banarasi Bharwa Lal Mirch Achaar",
    hindiName: "बनारसी भरवा लाल मिर्च अचार",
    tagline: "Sun-cured fat red chillies stuffed with authentic hand-roasted Banarasi masala",
    description: "The royal jewel of Indian pickles. Thick, plump red chillies sun-dried and meticulously hand-stuffed one by one with a secret spice blend of roasted coriander, cumin, fennel, amchur, kalonji, mustard, and mustard oil. Tender, rich, and unforgettable.",
    category: 'chilli',
    categoryLabel: 'Chilli Pickles',
    price: 189,
    originalPrice: 220,
    weight: '250g',
    variants: [
      { weight: '250g', price: 189, originalPrice: 220, inStock: true },
      { weight: '500g', price: 349, originalPrice: 399, inStock: true },
      { weight: '1kg', price: 620, originalPrice: 720, inStock: true }
    ],
    rating: 5.0,
    reviewCount: 412,
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Extra Teekha',
    oilType: 'Pure Kachi Ghani Mustard Oil',
    ingredients: ['Whole Banarasi Red Chillies', 'Cold-Pressed Mustard Oil', 'Roasted Coriander', 'Cumin', 'Fennel', 'Amchur', 'Rai', 'Rock Salt', 'Hing'],
    shelfLife: '12 Months',
    storageInfo: 'Store in dry place. Keep submerged in aromatic mustard oil for lasting taste.',
    isBestseller: false,
    isNewArrival: true,
    pairingSuggestions: ['Litti Chokha', 'Crispy Gobhi Paratha', 'Khichdi with Desi Ghee', 'Bajra Roti with Jaggery & Butter'],
    nutritionPer100g: {
      energy: '210 kcal',
      protein: '3.4 g',
      carbohydrates: '16.0 g',
      fat: '15.1 g',
      sodium: '1310 mg'
    }
  },
  {
    id: 'desi-lehsun-garlic-chutney',
    name: "Desi Lahsun Chutney (Spiced Garlic Spread)",
    hindiName: "देसी लहसुन की चटनी",
    tagline: "Stone-ground country garlic with Mathania chillies and roasted spices",
    description: "Crafted by pounding fresh whole garlic pods with stone-ground Rajasthani Mathania red chillies, cumin, and mustard oil. It delivers an intense, rustic garlicky aroma and a fiery punch that elevates rotis, parathas, or snacks.",
    category: 'chutney_masala',
    categoryLabel: 'Chutneys & Masalas',
    price: 135,
    originalPrice: 160,
    weight: '200g',
    variants: [
      { weight: '200g', price: 135, originalPrice: 160, inStock: true },
      { weight: '400g', price: 249, originalPrice: 290, inStock: true }
    ],
    rating: 4.9,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Teekha (Spicy)',
    oilType: 'Mustard Oil & Ghee Touch',
    ingredients: ['Fresh Desi Garlic Pods', 'Mathania Red Chilli', 'Roasted Cumin', 'Mustard Oil', 'Rock Salt', 'Lemon Juice'],
    shelfLife: '6 Months',
    storageInfo: 'Refrigerate after opening. Use a dry spoon for each serving.',
    isBestseller: false,
    isNewArrival: true,
    pairingSuggestions: ['Bajra Roti & Butter', 'Dal Baati Churma', 'Vada Pav Spread', 'Toasted Bread with Butter'],
    nutritionPer100g: {
      energy: '175 kcal',
      protein: '4.1 g',
      carbohydrates: '18.2 g',
      fat: '9.8 g',
      sodium: '980 mg'
    }
  },
  {
    id: 'sweet-khatta-meetha-mango-chunda',
    name: "Khatta Meetha Mango Chunda",
    hindiName: "खट्टा-मीठा आम का छुंदा",
    tagline: "Grated raw mango slow-cooked with jaggery, roasted cumin & cinnamon",
    description: "A traditional Gujarati sweet-tangy relish prepared by slow-curing finely grated green mangoes under the sun with unrefined organic jaggery, cardamom, roasted cumin, and black pepper. Free from refined sugar.",
    category: 'mango',
    categoryLabel: 'Mango Pickles',
    price: 159,
    originalPrice: 185,
    weight: '250g',
    variants: [
      { weight: '250g', price: 159, originalPrice: 185, inStock: true },
      { weight: '500g', price: 295, originalPrice: 340, inStock: true }
    ],
    rating: 4.8,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Mild',
    oilType: 'Oil-Free (Jaggery Base)',
    ingredients: ['Grated Raw Mango', 'Organic Jaggery (Gur)', 'Roasted Cumin Powder', 'Black Pepper', 'Cardamom Powder', 'Rock Salt', 'Kashmiri Chilli'],
    shelfLife: '12 Months',
    storageInfo: 'Store in a dry cupboard. Avoid moisture contamination.',
    isBestseller: false,
    pairingSuggestions: ['Crisp Methi Thepla', 'Puri with Potato Bhaji', 'Mathri and Evening Chai', 'Paratha for kids tiffin'],
    nutritionPer100g: {
      energy: '230 kcal',
      protein: '1.1 g',
      carbohydrates: '56.0 g',
      fat: '0.4 g',
      sodium: '410 mg'
    }
  },
  {
    id: 'special-achaar-masala-blend',
    name: "Dadi's Hand-Pounded Achaar Masala",
    hindiName: "दादी का कूटवाँ अचार मसाला",
    tagline: "Traditional blend of dry-roasted whole spices for pickling & seasoning",
    description: "Craft your own homemade pickles or season snacks and parathas with Dadi's authentic spice recipe. Made from dry-roasted coriander seeds, yellow mustard, methi, fennel, kalonji, ajwain, black pepper, and premium Kashmiri red chilli.",
    category: 'chutney_masala',
    categoryLabel: 'Chutneys & Masalas',
    price: 119,
    originalPrice: 140,
    weight: '200g',
    variants: [
      { weight: '200g', price: 119, originalPrice: 140, inStock: true },
      { weight: '500g', price: 250, originalPrice: 299, inStock: true }
    ],
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80'
    ],
    spiceLevel: 'Medium',
    oilType: 'Dry Spice Blend (Zero Oil)',
    ingredients: ['Fennel (Saunf)', 'Yellow Mustard (Rai)', 'Fenugreek (Methi)', 'Kalonji', 'Coriander Seeds', 'Cumin', 'Amchur', 'Turmeric', 'Red Chilli', 'Hing'],
    shelfLife: '12 Months in airtight container',
    storageInfo: 'Store in an airtight jar in a cool, dark cabinet.',
    isBestseller: false,
    pairingSuggestions: ['Sprinkle over Masala Paratha dough', 'Season fried Bhindi or Karela', 'Make instant Aloo Achaari', 'Sprinkle over Dal & Khichdi'],
    nutritionPer100g: {
      energy: '310 kcal',
      protein: '11.5 g',
      carbohydrates: '42.0 g',
      fat: '11.2 g',
      sodium: '320 mg'
    }
  }
];
