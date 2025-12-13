// Global products data structure
export const GLOBAL_PRODUCTS = [
  // Featured Products (from home page)
  {
    id: 1,
    name: "Lakadong Turmeric",
    description: "Premium quality, high curcumin content.",
    price: 12.99,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/400182301d-976619613333743604d1.png",
    alt: "A premium macro shot of Lakadong Turmeric powder in a ceramic bowl, golden yellow color, studio lighting.",
    category: "spices",
    tags: ["featured", "turmeric", "indian"]
  },
  {
    id: 2,
    name: "Kashmiri Chillies",
    description: "Mild heat with vibrant color.",
    price: 8.50,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6560063957-9968299716144015153.png",
    alt: "Bright red Kashmiri chillies arranged artistically on a rustic wooden surface, warm lighting.",
    category: "chilies",
    tags: ["featured", "chili", "indian"]
  },
  {
    id: 3,
    name: "Malabar Black Pepper",
    description: "Full-bodied, robust flavor profile.",
    price: 10.75,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1042218989-07182113792195238.png",
    alt: "High-quality photo of Malabar black peppercorns in a small brass container, textured, natural light.",
    category: "pepper",
    tags: ["featured", "pepper", "indian"]
  },
  {
    id: 4,
    name: "Garam Masala",
    description: "Our signature 12-spice blend.",
    price: 15.20,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7cccc9b9e1-076917427f82e9e7ab11.png",
    alt: "An elegant bottle of Garam Masala blend, showcasing the texture of the ground spices inside, premium product shot.",
    category: "blends",
    tags: ["featured", "blend", "indian"]
  },
  
  // Shop Products
  {
    id: 5,
    name: "Smoked Paprika",
    description: "Sweet & Smoky",
    price: 7.50,
    size: "50g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c48ee98e5a-830a45fe2419b55f26d4.png",
    alt: "A premium macro shot of smoked paprika powder in a small wooden bowl, earthy tones, studio lighting",
    category: "spices",
    badge: "FRESHLY GROUND",
    tags: ["shop", "paprika", "smoked"]
  },
  {
    id: 6,
    name: "Cumin Seeds",
    description: "Earthy & Aromatic",
    price: 6.00,
    size: "50g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2e57883ea9-dc2e8cb84c73f24dab74.png",
    alt: "High-quality photo of whole cumin seeds spilling from a burlap sack, rustic, warm lighting",
    category: "seeds",
    badge: "ORGANIC",
    tags: ["shop", "cumin", "seeds"]
  },
  {
    id: 7,
    name: "Dried Rosemary",
    description: "Piney & Fragrant",
    price: 8.25,
    size: "40g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/56bff6ac7f-f5211b049fad184620e1.png",
    alt: "Artistic shot of dried rosemary sprigs on a dark slate background, dramatic lighting",
    category: "herbs",
    tags: ["shop", "rosemary", "herbs"]
  },
  {
    id: 8,
    name: "Turmeric Powder",
    description: "Warm & Peppery",
    price: 5.50,
    size: "60g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3210923e1b-9ccae429ffc82d18737d.png",
    alt: "Vibrant yellow turmeric powder arranged in a pattern on a black background, minimalist, high contrast",
    category: "spices",
    badge: "FRESHLY GROUND",
    tags: ["shop", "turmeric", "powder"]
  },
  {
    id: 9,
    name: "Black Peppercorns",
    description: "Pungent & Spicy",
    price: 9.00,
    size: "50g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/28d6f97d20-5f6fa9fc90b05892a6c0.png",
    alt: "Close-up of whole black peppercorns in a ceramic mortar, textured, natural light",
    category: "pepper",
    tags: ["shop", "pepper", "whole"]
  },
  {
    id: 10,
    name: "Saffron Threads",
    description: "Floral & Luxurious",
    price: 25.00,
    size: "1g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7e0b400494-969d05897f22f8fe765d.png",
    alt: "Delicate saffron threads in a small glass jar, highlighting their vibrant red color, macro photography",
    category: "exotic",
    badge: "PREMIUM",
    tags: ["shop", "saffron", "luxury"]
  },
  
  // Category Products
  {
    id: 11,
    name: 'Ceylon Cinnamon Sticks',
    description: 'Delicate, sweet notes perfect for desserts and warm beverages.',
    price: 8.50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5548d5225c-5d4fc0ded4327b455991.png',
    badge: 'Best for Baking',
    category: "spices",
    tags: ["category", "cinnamon", "baking"]
  },
  {
    id: 12,
    name: 'Star Anise',
    description: 'Aromatic licorice flavor essential for pho and braised meats.',
    price: 6.75,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3c98775e62-c111d9853a5c6bc32b93.png',
    badge: 'Ideal for Broths',
    category: "spices",
    tags: ["category", "anise", "asian"]
  },
  {
    id: 13,
    name: 'Green Cardamom Pods',
    description: 'Intensely aromatic with a complex, slightly sweet and spicy taste.',
    price: 12.00,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e28f20b6e9-4cd51c3529e318a13655.png',
    badge: 'Perfect for Chai',
    category: "spices",
    tags: ["category", "cardamom", "indian"]
  },
  {
    id: 14,
    name: 'Whole Cloves',
    description: 'Pungent and warming, a staple in savory dishes and spice blends.',
    price: 7.25,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/51c673d0b9-498c5f1f8ef2ee93f505.png',
    badge: 'Best for Curries',
    category: "spices",
    tags: ["category", "cloves", "cooking"]
  },
  {
    id: 15,
    name: 'Tellicherry Peppercorns',
    description: 'Bold, pungent, and fruity. The king of spices for any dish.',
    price: 9.00,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a574adddeb-c889730ed53491605710.png',
    badge: 'Kitchen Essential',
    category: "pepper",
    tags: ["category", "pepper", "premium"]
  },
  {
    id: 16,
    name: 'Turkish Bay Leaves',
    description: 'Subtle, herbal aroma that deepens the flavor of stews and soups.',
    price: 5.50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/380597d0ca-34ffee3a84ceb5ed9f9d.png',
    badge: 'Ideal for Slow Cooking',
    category: "herbs",
    tags: ["category", "bay-leaves", "herbs"]
  },
  {
    id: 17,
    name: 'Whole Cumin Seeds',
    description: 'Robust, earthy flavor essential for Mexican, Indian, and Middle Eastern cuisines.',
    price: 6.00,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/6dd179ee5b-66c289d9a21c86e09d9e.png',
    badge: 'Earthy & Warm',
    category: "seeds",
    tags: ["category", "cumin", "seeds"]
  },
  {
    id: 18,
    name: 'Whole Nutmeg',
    description: 'Grate fresh for a warm, nutty kick in cream sauces and baked goods.',
    price: 10.50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5127c368bb-2b9c23dd03cab3703864.png',
    badge: 'Sweet & Spicy',
    category: "spices",
    tags: ["category", "nutmeg", "baking"]
  },
  
  // Product Detail Page (Coffee)
  {
    id: 19,
    name: "Ethiopian Yirgacheffe",
    price: 24.50,
    description: "A bright, medium-bodied coffee with a distinctively floral and fruity taste profile. Grown in the high-altitude, fertile lands of Yirgacheffe, this single-origin bean is a testament to Ethiopia's rich coffee heritage.",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    images: [
      {
        id: 1,
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b9efbbe56c-0a6741fc95183e32a8af.png",
        alt: "close-up macro shot of roasted coffee beans showing detailed texture and oily sheen, warm studio lighting, earthy tones, premium product photography"
      },
      {
        id: 2,
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/13a9ea0ccf-5ed3aa18ca8e946c62ca.png",
        alt: "macro shot of roasted coffee beans"
      },
      {
        id: 3,
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2bd5009e15-35246a27439952c4bf75.png",
        alt: "a handful of green unroasted coffee beans, natural light"
      },
      {
        id: 4,
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a5187e5081-d7f4aeee7e02bb8e27db.png",
        alt: "a cup of freshly brewed black coffee, steam rising, top-down view, minimalist"
      },
      {
        id: 5,
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/98764d3f24-5ca9834b1ad38bae2f5b.png",
        alt: "coffee plant with red cherries on a branch, lush green leaves"
      }
    ],
    weightOptions: [
      { id: "250g", label: "250g" },
      { id: "500g", label: "500g", selected: true },
      { id: "1kg", label: "1kg" }
    ],
    grindOptions: [
      { id: "whole-bean", label: "Whole Bean", selected: true },
      { id: "espresso", label: "Espresso" },
      { id: "filter", label: "Filter" }
    ],
    origin: "Ethiopia",
    region: "Yirgacheffe, Gedeo",
    harvest: "Oct - Dec 2025",
    process: "Fully Washed",
    altitude: "1700-2200m",
    roast: "Light-Medium",
    tastingNotes: ["Jasmine", "Bergamot", "Blueberry", "Lemon Zest", "Silky Body"],
    originStory: {
      title: "From the Birthplace of Coffee",
      description: "Our Yirgacheffe beans are sourced from smallholder farmers in the Gedeo zone of Southern Ethiopia, an area revered as the legendary birthplace of coffee. Cultivated at altitudes between 1700 and 2200 meters, these beans mature slowly, developing a complex and intensely aromatic flavor profile. Each bean is hand-picked and meticulously processed to preserve its unique character.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Lush, green coffee plantation on a hillside in Ethiopia, misty morning light, wide-angle landscape shot"
      }
    },
    trustBadges: [
      {
        icon: "flask-vial",
        text: "Lab Tested for Purity"
      },
      {
        icon: "leaf",
        text: "USDA Organic"
      },
      {
        icon: "handshake-angle",
        text: "Fair Trade Certified"
      }
    ],
    category: "coffee",
    tags: ["product-detail", "coffee", "ethiopian"]
  },
  
  // Related Products
  {
    id: 20,
    name: "Guatemalan Antigua",
    description: "Rich chocolate notes with a hint of smokiness.",
    price: 22.75,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-1.jpg",
    badge: "Customer Favorite",
    category: "coffee",
    tags: ["related", "coffee", "guatemala"]
  },
  {
    id: 21,
    name: "Kenyan AA",
    description: "Bright acidity with bold berry flavors.",
    price: 26.50,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-2.jpg",
    badge: "Award Winner",
    category: "coffee",
    tags: ["related", "coffee", "kenya"]
  },
  {
    id: 22,
    name: "Colombian Supremo",
    description: "Balanced and smooth with caramel undertones.",
    price: 21.00,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-3.jpg",
    badge: "Smooth & Balanced",
    category: "coffee",
    tags: ["related", "coffee", "colombia"]
  }
];

// Categories data
export const CATEGORIES = [
  { id: "all-spices", label: "All Spices", path: "/category/all-spices" },
  { id: "herbs", label: "Herbs", path: "/category/herbs" },
  { id: "spice-blends", label: "Spice Blends", path: "/category/spice-blends" },
  { id: "salts-peppers", label: "Salts & Peppers", path: "/category/salts-peppers" },
  { id: "chilies", label: "Chilies", path: "/category/chilies" },
  { id: "seeds", label: "Seeds", path: "/category/seeds" },
  { id: "exotic", label: "Exotic Spices", path: "/category/exotic" },
  { id: "coffee", label: "Coffee", path: "/category/coffee" }
];

// Utility functions for filtering and sorting
export const getProductsByCategory = (category) => {
  if (category === "all-spices") return GLOBAL_PRODUCTS;
  return GLOBAL_PRODUCTS.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return GLOBAL_PRODUCTS.filter(product => product.tags.includes("featured"));
};

export const getShopProducts = () => {
  return GLOBAL_PRODUCTS.filter(product => product.tags.includes("shop"));
};

export const getCategoryProducts = () => {
  return GLOBAL_PRODUCTS.filter(product => product.tags.includes("category"));
};

export const getProductById = (id) => {
  return GLOBAL_PRODUCTS.find(product => product.id === parseInt(id));
};

export const getRelatedProducts = () => {
  return GLOBAL_PRODUCTS.filter(product => product.tags.includes("related"));
};