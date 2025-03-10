
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
    // Fixed image for Home & Kitchen category
    image: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
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

// Define category-specific image collections
const categoryImages = {
  "electronics": [
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1588058365548-9ded1f5b2d1b?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1623998021446-45cd9b269c95?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1546027658-7aa750153465?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1574755393849-623942496936?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60"
  ],
  "men-fashion": [
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1499971856191-1a420a42b498?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1512353087810-25dfcd100962?w=500&auto=format&fit=crop&q=60"
  ],
  "women-fashion": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1551048632-24e444b48a3e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1548624313-0396c75e4b63?w=500&auto=format&fit=crop&q=60"
  ],
  "home-kitchen": [
    "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1631048035785-3bbb158f9378?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1529113241001-b495badd8d44?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1584301664887-6382996378a1?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1490323980162-d156723795ed?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1570629557357-5695d814626a?w=500&auto=format&fit=crop&q=60"
  ],
  "beauty-personal-care": [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1522338140505-aca19ebaa9df?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1570194065650-d99fb4a38b8e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1631730359585-38a4935786ad?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1620916566256-4e72827ada68?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=500&auto=format&fit=crop&q=60"
  ],
  "toys-games": [
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b40?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1587117266184-5fa0a4577f8f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1508896694512-1eade558679c?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1558060370-d5019f04c0b4?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1612036781124-847f8939b154?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1567822781105-a80d1c625e97?w=500&auto=format&fit=crop&q=60"
  ]
};

// The existing products
const existingProducts: Product[] = [
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

// Function to generate additional products
const generateAdditionalProducts = () => {
  const additionalProducts: Product[] = [];
  
  // Function to get a random image for a specific category
  const getRandomCategoryImage = (category: string): string => {
    const images = categoryImages[category as keyof typeof categoryImages];
    return images[Math.floor(Math.random() * images.length)];
  };
  
  // Electronics - add 30 more products
  for (let i = 4; i <= 35; i++) {
    additionalProducts.push({
      id: `e${i}`,
      name: `Smart ${i % 5 === 0 ? 'TV' : i % 4 === 0 ? 'Speaker' : i % 3 === 0 ? 'Tablet' : i % 2 === 0 ? 'Camera' : 'Headphones'} ${100 + i}`,
      price: 99.99 + (i * 10),
      image: getRandomCategoryImage("electronics"),
      description: `High-quality ${i % 5 === 0 ? 'TV' : i % 4 === 0 ? 'speaker' : i % 3 === 0 ? 'tablet' : i % 2 === 0 ? 'camera' : 'headphones'} with exceptional features and modern design.`,
      category: "electronics",
      rating: 4.0 + (Math.random() * 0.9),
      numReviews: 50 + Math.floor(Math.random() * 200),
      specifications: {
        brand: `Tech Brand ${i % 10 + 1}`,
        model: `Model X${i}`,
        connectivity: "Bluetooth 5.0",
        warranty: "1 Year"
      },
      inStock: Math.random() > 0.2,
      deliveryEstimate: "2-5 business days",
      deliveryCharge: i % 5 === 0 ? 9.99 : 0
    });
  }
  
  // Men's Fashion - add 30 more products
  for (let i = 4; i <= 35; i++) {
    additionalProducts.push({
      id: `m${i}`,
      name: `${i % 5 === 0 ? 'Designer' : i % 4 === 0 ? 'Casual' : i % 3 === 0 ? 'Formal' : i % 2 === 0 ? 'Sport' : 'Slim Fit'} ${i % 6 === 0 ? 'Jacket' : i % 5 === 0 ? 'Pants' : i % 4 === 0 ? 'Shirt' : i % 3 === 0 ? 'Sweater' : i % 2 === 0 ? 'T-Shirt' : 'Hoodie'}`,
      price: 29.99 + (i * 5),
      image: getRandomCategoryImage("men-fashion"),
      description: `Stylish and comfortable ${i % 6 === 0 ? 'jacket' : i % 5 === 0 ? 'pants' : i % 4 === 0 ? 'shirt' : i % 3 === 0 ? 'sweater' : i % 2 === 0 ? 't-shirt' : 'hoodie'} for modern men.`,
      category: "men-fashion",
      rating: 4.0 + (Math.random() * 0.9),
      numReviews: 50 + Math.floor(Math.random() * 150),
      specifications: {
        material: i % 4 === 0 ? "100% Cotton" : i % 3 === 0 ? "Polyester Blend" : i % 2 === 0 ? "Wool" : "Linen",
        fit: i % 3 === 0 ? "Regular" : i % 2 === 0 ? "Slim" : "Relaxed",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Gray", "White", "Red"]
      },
      inStock: Math.random() > 0.1,
      deliveryEstimate: "1-3 business days",
      deliveryCharge: i % 7 === 0 ? 4.99 : 0
    });
  }
  
  // Women's Fashion - add 30 more products
  for (let i = 4; i <= 35; i++) {
    additionalProducts.push({
      id: `w${i}`,
      name: `${i % 5 === 0 ? 'Elegant' : i % 4 === 0 ? 'Casual' : i % 3 === 0 ? 'Formal' : i % 2 === 0 ? 'Summer' : 'Designer'} ${i % 6 === 0 ? 'Blouse' : i % 5 === 0 ? 'Dress' : i % 4 === 0 ? 'Skirt' : i % 3 === 0 ? 'Jeans' : i % 2 === 0 ? 'Top' : 'Jacket'}`,
      price: 39.99 + (i * 5),
      image: getRandomCategoryImage("women-fashion"),
      description: `Fashionable and stylish ${i % 6 === 0 ? 'blouse' : i % 5 === 0 ? 'dress' : i % 4 === 0 ? 'skirt' : i % 3 === 0 ? 'jeans' : i % 2 === 0 ? 'top' : 'jacket'} for the modern woman.`,
      category: "women-fashion",
      rating: 4.0 + (Math.random() * 0.9),
      numReviews: 60 + Math.floor(Math.random() * 180),
      specifications: {
        material: i % 4 === 0 ? "Silk" : i % 3 === 0 ? "Cotton Blend" : i % 2 === 0 ? "Satin" : "Chiffon",
        fit: i % 3 === 0 ? "Regular" : i % 2 === 0 ? "Slim" : "Relaxed",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "White", "Red", "Blue", "Pink"]
      },
      inStock: Math.random() > 0.15,
      deliveryEstimate: "1-4 business days",
      deliveryCharge: i % 8 === 0 ? 5.99 : 0
    });
  }
  
  // Home & Kitchen - add 30 more products
  for (let i = 4; i <= 35; i++) {
    additionalProducts.push({
      id: `h${i}`,
      name: `${i % 5 === 0 ? 'Premium' : i % 4 === 0 ? 'Modern' : i % 3 === 0 ? 'Smart' : i % 2 === 0 ? 'Luxury' : 'Compact'} ${i % 6 === 0 ? 'Blender' : i % 5 === 0 ? 'Toaster' : i % 4 === 0 ? 'Cookware Set' : i % 3 === 0 ? 'Dining Table' : i % 2 === 0 ? 'Sofa' : 'Bedding Set'}`,
      price: 59.99 + (i * 8),
      image: getRandomCategoryImage("home-kitchen"),
      description: `High-quality ${i % 6 === 0 ? 'blender' : i % 5 === 0 ? 'toaster' : i % 4 === 0 ? 'cookware set' : i % 3 === 0 ? 'dining table' : i % 2 === 0 ? 'sofa' : 'bedding set'} for your home.`,
      category: "home-kitchen",
      rating: 4.0 + (Math.random() * 0.9),
      numReviews: 40 + Math.floor(Math.random() * 160),
      specifications: {
        material: i % 4 === 0 ? "Stainless Steel" : i % 3 === 0 ? "Wood" : i % 2 === 0 ? "Glass" : "Cotton",
        dimensions: `${20 + i}in x ${15 + i}in x ${5 + i}in`,
        warranty: `${i % 5 + 1} Year${i % 5 !== 0 ? 's' : ''}`
      },
      inStock: Math.random() > 0.2,
      deliveryEstimate: `${i % 5 + 2}-${i % 5 + 7} business days`,
      deliveryCharge: i % 3 === 0 ? 19.99 : 0
    });
  }
  
  // Beauty & Personal Care - add 30 more products
  for (let i = 4; i <= 35; i++) {
    additionalProducts.push({
      id: `b${i}`,
      name: `${i % 5 === 0 ? 'Organic' : i % 4 === 0 ? 'Natural' : i % 3 === 0 ? 'Premium' : i % 2 === 0 ? 'Luxury' : 'Professional'} ${i % 6 === 0 ? 'Shampoo' : i % 5 === 0 ? 'Face Cream' : i % 4 === 0 ? 'Perfume' : i % 3 === 0 ? 'Makeup Set' : i % 2 === 0 ? 'Hair Dryer' : 'Skincare Kit'}`,
      price: 19.99 + (i * 4),
      image: getRandomCategoryImage("beauty-personal-care"),
      description: `High-quality ${i % 6 === 0 ? 'shampoo' : i % 5 === 0 ? 'face cream' : i % 4 === 0 ? 'perfume' : i % 3 === 0 ? 'makeup set' : i % 2 === 0 ? 'hair dryer' : 'skincare kit'} for your beauty routine.`,
      category: "beauty-personal-care",
      rating: 4.0 + (Math.random() * 0.9),
      numReviews: 70 + Math.floor(Math.random() * 200),
      specifications: {
        ingredients: i % 2 === 0 ? "Natural" : "Organic",
        skinType: i % 4 === 0 ? "Dry" : i % 3 === 0 ? "Oily" : i % 2 === 0 ? "Combination" : "All Skin Types",
        volume: `${i * 10 + 50}ml`
      },
      inStock: Math.random() > 0.1,
      deliveryEstimate: "1-3 business days",
      deliveryCharge: i % 10 === 0 ? 2.99 : 0
    });
  }
  
  // Toys & Games - add 30 more products
  for (let i = 4; i <= 35; i++) {
    additionalProducts.push({
      id: `t${i}`,
      name: `${i % 5 === 0 ? 'Educational' : i % 4 === 0 ? 'Interactive' : i % 3 === 0 ? 'Creative' : i % 2 === 0 ? 'Adventure' : 'Strategy'} ${i % 6 === 0 ? 'Board Game' : i % 5 === 0 ? 'Action Figure' : i % 4 === 0 ? 'Building Set' : i % 3 === 0 ? 'Plush Toy' : i % 2 === 0 ? 'Puzzle' : 'Remote Control Car'}`,
      price: 24.99 + (i * 2),
      image: getRandomCategoryImage("toys-games"),
      description: `Fun and engaging ${i % 6 === 0 ? 'board game' : i % 5 === 0 ? 'action figure' : i % 4 === 0 ? 'building set' : i % 3 === 0 ? 'plush toy' : i % 2 === 0 ? 'puzzle' : 'remote control car'} for all ages.`,
      category: "toys-games",
      rating: 4.0 + (Math.random() * 0.9),
      numReviews: 30 + Math.floor(Math.random() * 170),
      specifications: {
        age: `${i % 12 + 3}+`,
        players: i % 6 === 0 ? `${i % 4 + 1}-${i % 4 + 4}` : "1+",
        batteries: i % 3 === 0 ? "Required" : "Not Required",
        material: i % 4 === 0 ? "Plastic" : i % 3 === 0 ? "Wood" : i % 2 === 0 ? "Plush" : "Mixed"
      },
      inStock: Math.random() > 0.15,
      deliveryEstimate: "2-4 business days",
      deliveryCharge: i % 9 === 0 ? 3.99 : 0
    });
  }
  
  return additionalProducts;
};

// Also update existing products to use our category-specific images
existingProducts.forEach(product => {
  // Get a random image from the product's category
  const images = categoryImages[product.category as keyof typeof categoryImages];
  if (images) {
    product.image = images[Math.floor(Math.random() * images.length)];
  }
});

// Combine existing and additional products
export const products: Product[] = [...existingProducts, ...generateAdditionalProducts()];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
