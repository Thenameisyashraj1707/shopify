import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  { 
    id: "electronics", 
    name: "Electronics", 
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: "men-fashion", 
    name: "Men's Fashion", 
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: "women-fashion", 
    name: "Women's Fashion", 
    image: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: "home-kitchen", 
    name: "Home & Kitchen", 
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f37446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: "beauty-personal-care", 
    name: "Beauty & Personal Care", 
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  },
  { 
    id: "toys-games", 
    name: "Toys & Games", 
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: "e1",
    name: "Premium Smartphone X12",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Latest flagship smartphone with cutting-edge camera technology and powerful performance.",
    category: "electronics",
    rating: 4.8,
    numReviews: 245,
    specifications: {
      display: "6.7-inch Super AMOLED",
      processor: "Octa-core 3.1GHz",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP Main + 12MP Ultra Wide + 10MP Telephoto",
      battery: "5000mAh"
    },
    inStock: true,
    deliveryEstimate: "2-3 business days",
    deliveryCharge: 0
  },
  {
    id: "e2",
    name: "Ultra-Thin Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Powerful yet lightweight laptop perfect for professionals on the go.",
    category: "electronics",
    rating: 4.6,
    numReviews: 189,
    specifications: {
      display: "14-inch 4K IPS",
      processor: "Intel Core i7-12700H",
      ram: "16GB",
      storage: "1TB SSD",
      graphics: "NVIDIA RTX 3060",
      battery: "Up to 12 hours"
    },
    inStock: true,
    deliveryEstimate: "3-5 business days",
    deliveryCharge: 0
  },
  {
    id: "e3",
    name: "Smart Watch Series 7",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Advanced health tracking and smart features in an elegant design.",
    category: "electronics",
    rating: 4.7,
    numReviews: 320,
    specifications: {
      display: "1.9-inch Always-On Retina",
      sensors: ["Heart rate", "ECG", "Blood oxygen", "Accelerometer"],
      waterResistant: "50m",
      battery: "18 hours",
      connectivity: "Wi-Fi, Bluetooth, LTE (optional)"
    },
    inStock: true,
    deliveryEstimate: "1-2 business days",
    deliveryCharge: 0
  },
  
  // Men's Fashion
  {
    id: "m1",
    name: "Classic Fit Oxford Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Timeless oxford shirt made from premium cotton for comfort and style.",
    category: "men-fashion",
    rating: 4.5,
    numReviews: 178,
    specifications: {
      material: "100% Cotton",
      fit: "Classic",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Blue", "Pink", "Gray"]
    },
    inStock: true,
    deliveryEstimate: "2-4 business days",
    deliveryCharge: 4.99
  },
  {
    id: "m2",
    name: "Premium Selvedge Denim Jeans",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Japanese selvedge denim jeans with exceptional craftsmanship and durability.",
    category: "men-fashion",
    rating: 4.8,
    numReviews: 156,
    specifications: {
      material: "14oz Selvedge Denim",
      fit: "Slim Straight",
      sizes: ["30x30", "32x30", "32x32", "34x32", "36x32"],
      colors: ["Indigo", "Black", "Washed Blue"]
    },
    inStock: true,
    deliveryEstimate: "3-5 business days",
    deliveryCharge: 0
  },
  {
    id: "m3",
    name: "Leather Minimalist Watch",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Elegant watch with genuine leather strap and minimalist design.",
    category: "men-fashion",
    rating: 4.6,
    numReviews: 92,
    specifications: {
      case: "40mm Stainless Steel",
      movement: "Japanese Quartz",
      waterResistant: "5 ATM",
      strap: "Genuine Italian Leather",
      warranty: "2 Years"
    },
    inStock: true,
    deliveryEstimate: "2-3 business days",
    deliveryCharge: 0
  },
  
  // Women's Fashion
  {
    id: "w1",
    name: "Floral Maxi Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Breathtaking floral maxi dress perfect for summer occasions.",
    category: "women-fashion",
    rating: 4.7,
    numReviews: 214,
    specifications: {
      material: "100% Viscose",
      fit: "Flowy",
      sizes: ["XS", "S", "M", "L", "XL"],
      length: "Maxi",
      care: "Machine wash cold"
    },
    inStock: true,
    deliveryEstimate: "2-4 business days",
    deliveryCharge: 4.99
  },
  {
    id: "w2",
    name: "Designer Handbag",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Luxurious designer handbag made from premium materials.",
    category: "women-fashion",
    rating: 4.9,
    numReviews: 167,
    specifications: {
      material: "Genuine Leather",
      dimensions: "12 x 9 x 5 inches",
      compartments: "3 interior, 1 exterior",
      colors: ["Black", "Tan", "Red", "Navy"]
    },
    inStock: true,
    deliveryEstimate: "1-3 business days",
    deliveryCharge: 0
  },
  {
    id: "w3",
    name: "Classic Pearl Necklace",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Timeless cultured pearl necklace with sterling silver clasp.",
    category: "women-fashion",
    rating: 4.8,
    numReviews: 85,
    specifications: {
      material: "Freshwater Pearls, Sterling Silver",
      length: "18 inches",
      pearlSize: "7-8mm",
      clasp: "Sterling Silver",
      warranty: "1 Year"
    },
    inStock: true,
    deliveryEstimate: "2-3 business days",
    deliveryCharge: 0
  },
  
  // Home & Kitchen
  {
    id: "h1",
    name: "Professional Chef's Knife Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium 8-piece knife set for professional chefs and cooking enthusiasts.",
    category: "home-kitchen",
    rating: 4.8,
    numReviews: 132,
    specifications: {
      material: "High-Carbon Stainless Steel",
      pieces: 8,
      handle: "Ergonomic Pakkawood",
      includes: ["Chef's Knife", "Bread Knife", "Carving Knife", "Utility Knife", "Paring Knife", "Shears", "Sharpening Steel", "Wooden Block"],
      warranty: "Lifetime"
    },
    inStock: true,
    deliveryEstimate: "3-5 business days",
    deliveryCharge: 0
  },
  {
    id: "h2",
    name: "Modern Minimalist Coffee Table",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Sleek, modern coffee table with clean lines and durable construction.",
    category: "home-kitchen",
    rating: 4.6,
    numReviews: 78,
    specifications: {
      material: "Solid Oak, Tempered Glass",
      dimensions: "48 x 24 x 16 inches",
      weight: "45 lbs",
      assembly: "Required, tools included",
      warranty: "3 Years"
    },
    inStock: true,
    deliveryEstimate: "7-10 business days",
    deliveryCharge: 19.99
  },
  {
    id: "h3",
    name: "Smart Home Coffee Maker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Wi-Fi enabled coffee maker that you can control from your smartphone.",
    category: "home-kitchen",
    rating: 4.5,
    numReviews: 203,
    specifications: {
      capacity: "12 cups",
      features: ["Programmable", "Wi-Fi enabled", "Voice assistant compatible"],
      material: "Stainless Steel, BPA-free Plastic",
      dimensions: "10 x 8 x 14 inches",
      warranty: "2 Years"
    },
    inStock: true,
    deliveryEstimate: "2-4 business days",
    deliveryCharge: 0
  },
  
  // Beauty & Personal Care
  {
    id: "b1",
    name: "Luxury Skincare Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Complete skincare routine with premium anti-aging ingredients.",
    category: "beauty-personal-care",
    rating: 4.9,
    numReviews: 276,
    specifications: {
      includes: ["Cleanser", "Toner", "Serum", "Moisturizer", "Eye Cream"],
      skinType: "All Skin Types",
      keyIngredients: ["Hyaluronic Acid", "Vitamin C", "Retinol", "Peptides"],
      size: "Full Size Products",
      paraben: "Free"
    },
    inStock: true,
    deliveryEstimate: "2-3 business days",
    deliveryCharge: 0
  },
  {
    id: "b2",
    name: "Professional Hair Styling Kit",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1522338140505-aca19ebaa9df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Salon-quality hair styling tools for the perfect look at home.",
    category: "beauty-personal-care",
    rating: 4.7,
    numReviews: 148,
    specifications: {
      includes: ["Hair Dryer", "Straightener", "Curling Wand", "Brush Set", "Clips", "Heat Protectant Spray"],
      features: ["Multiple heat settings", "Ionic technology", "Ceramic plates"],
      voltage: "Dual Voltage",
      warranty: "5 Years"
    },
    inStock: true,
    deliveryEstimate: "3-5 business days",
    deliveryCharge: 0
  },
  {
    id: "b3",
    name: "Premium Perfume Collection",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1583441424221-6ceacb55adcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Set of 5 luxury fragrances for every occasion.",
    category: "beauty-personal-care",
    rating: 4.8,
    numReviews: 92,
    specifications: {
      count: "5 Fragrances",
      size: "30ml each",
      notes: ["Floral", "Woody", "Oriental", "Fresh", "Citrus"],
      concentration: "Eau de Parfum",
      packaging: "Gift Box"
    },
    inStock: true,
    deliveryEstimate: "1-3 business days",
    deliveryCharge: 0
  },
  
  // Toys & Games
  {
    id: "t1",
    name: "Strategic Board Game Collection",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1661260494146-6584359c48d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Set of 3 award-winning strategic board games for family game night.",
    category: "toys-games",
    rating: 4.8,
    numReviews: 154,
    specifications: {
      age: "10+",
      players: "2-6",
      playTime: "30-60 minutes per game",
      includes: ["3 Complete Games", "Instructions", "Storage Box"],
      language: "Language Independent"
    },
    inStock: true,
    deliveryEstimate: "2-4 business days",
    deliveryCharge: 4.99
  },
  {
    id: "t2",
    name: "Interactive Plush Robot",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Cute, interactive robot toy that responds to touch and voice.",
    category: "toys-games",
    rating: 4.6,
    numReviews: 211,
    specifications: {
      age: "3+",
      material: "Plush, Electronics",
      batteries: "3 AA (included)",
      features: ["Voice Recognition", "Touch Sensors", "50+ Phrases", "Educational Games"],
      dimensions: "12 inches tall"
    },
    inStock: true,
    deliveryEstimate: "2-3 business days",
    deliveryCharge: 0
  },
  {
    id: "t3",
    name: "Advanced Building Block Set",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1501686639-43e4d6c8e2a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "5000+ piece building set for creating elaborate structures and vehicles.",
    category: "toys-games",
    rating: 4.9,
    numReviews: 326,
    specifications: {
      age: "9+",
      pieces: "5000+",
      themes: ["City", "Space", "Vehicles", "Architecture"],
      storage: "Sorting Bins Included",
      instructions: "Digital & Print"
    },
    inStock: true,
    deliveryEstimate: "3-5 business days",
    deliveryCharge: 0
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
