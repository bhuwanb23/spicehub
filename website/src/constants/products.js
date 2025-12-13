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
    tags: ["featured", "turmeric", "indian"],
    origin: "India",
    region: "Meghalaya",
    harvest: "Year-round",
    process: "Sun-dried and ground",
    altitude: "900-1200m",
    tastingNotes: ["Earthy", "Peppery", "Citrusy", "Bitter"],
    originStory: {
      title: "From the Hills of Meghalaya",
      description: "Lakadong turmeric is grown exclusively in the Jaintia Hills of Meghalaya, known for having the world's highest curcumin content. Our farmers use traditional organic methods passed down through generations.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Lush green turmeric fields in Meghalaya, India"
      }
    }
  },
  {
    id: 2,
    name: "Kashmiri Chillies",
    description: "Mild heat with vibrant color.",
    price: 8.50,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6560063957-9968299716144015153.png",
    alt: "Bright red Kashmiri chillies arranged artistically on a rustic wooden surface, warm lighting.",
    category: "chilies",
    tags: ["featured", "chili", "indian"],
    origin: "India",
    region: "Kashmir Valley",
    harvest: "Late Summer",
    process: "Sun-dried",
    altitude: "1500-2000m",
    tastingNotes: ["Sweet", "Mild Heat", "Fruity", "Smoky"],
    originStory: {
      title: "Valley of Flavors",
      description: "Grown in the pristine Kashmir Valley, these chillies are celebrated for their vibrant color and mild heat. The unique climate and soil conditions contribute to their distinctive flavor profile.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Kashmir valley with red chili fields"
      }
    }
  },
  {
    id: 3,
    name: "Malabar Black Pepper",
    description: "Full-bodied, robust flavor profile.",
    price: 10.75,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1042218989-07182113792195238.png",
    alt: "High-quality photo of Malabar black peppercorns in a small brass container, textured, natural light.",
    category: "pepper",
    tags: ["featured", "pepper", "indian"],
    origin: "India",
    region: "Kerala",
    harvest: "Monsoon Season",
    process: "Sun-cured",
    altitude: "Sea level - 500m",
    tastingNotes: ["Pungent", "Woody", "Citrusy", "Sharp"],
    originStory: {
      title: "Pepper Coast Heritage",
      description: "Malabar black pepper has been prized for centuries along the ancient spice routes. Our peppercorns are hand-picked at optimal ripeness and sun-cured to perfection.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Pepper vines in Kerala, India"
      }
    }
  },
  {
    id: 4,
    name: "Garam Masala",
    description: "Our signature 12-spice blend.",
    price: 15.20,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7cccc9b9e1-076917427f82e9e7ab11.png",
    alt: "An elegant bottle of Garam Masala blend, showcasing the texture of the ground spices inside, premium product shot.",
    category: "blends",
    tags: ["featured", "blend", "indian"],
    origin: "India",
    tastingNotes: ["Warm", "Sweet", "Aromatic", "Complex"],
    process: "Small batch blended",
    originStory: {
      title: "Master Blender's Craft",
      description: "Our signature Garam Masala combines 12 carefully selected spices in precise proportions. Each ingredient is sourced for excellence and blended in small batches to ensure peak freshness.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Spice blending process in a traditional facility"
      }
    }
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
    tags: ["shop", "paprika", "smoked"],
    origin: "Spain",
    region: "La Vera",
    harvest: "Autumn",
    process: "Oak-smoked and ground",
    tastingNotes: ["Smoky", "Sweet", "Earthy", "Mild Heat"],
    originStory: {
      title: "Smoke of La Vera",
      description: "Authentic Spanish smoked paprika is produced by smoking peppers over oak wood for several days. This traditional method imparts the distinctive smoky flavor that defines the region.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Spanish paprika drying process"
      }
    }
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
    tags: ["shop", "cumin", "seeds"],
    origin: "India",
    region: "Rajasthan",
    harvest: "Winter",
    process: "Hand-sorted and cleaned",
    tastingNotes: ["Earthy", "Nutty", "Warm", "Bitter"],
    originStory: {
      title: "Desert Treasures",
      description: "Grown in the arid fields of Rajasthan, our cumin seeds develop their intense flavor in the harsh desert climate. Hand-harvested and naturally dried to preserve essential oils.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Cumin fields in Rajasthan desert"
      }
    }
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
    tags: ["shop", "rosemary", "herbs"],
    origin: "Mediterranean",
    region: "Provence, France",
    harvest: "Spring",
    process: "Air-dried in shade",
    tastingNotes: ["Piney", "Camphor", "Woody", "Peppery"],
    originStory: {
      title: "Provençal Hills",
      description: "Rosemary thrives in the sunny hills of Provence. Our herbs are harvested at peak oil content and gently dried to preserve their aromatic compounds and medicinal properties.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Rosemary fields in Provence, France"
      }
    }
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
    tags: ["shop", "turmeric", "powder"],
    origin: "India",
    region: "Tamil Nadu",
    harvest: "Year-round",
    process: "Boiled, dried and ground",
    tastingNotes: ["Earthy", "Bitter", "Peppery", "Warm"],
    originStory: {
      title: "Southern Spice Tradition",
      description: "Tamil Nadu produces some of the finest turmeric in India. Our roots are boiled, sun-dried, and stone-ground to create a vibrant powder with exceptional coloring power.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Turmeric processing in Tamil Nadu"
      }
    }
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
    tags: ["shop", "pepper", "whole"],
    origin: "India",
    region: "Kerala",
    harvest: "Monsoon Season",
    process: "Sun-cured",
    tastingNotes: ["Pungent", "Sharp", "Woody", "Citrusy"],
    originStory: {
      title: "King of Spices",
      description: "Freshly harvested peppercorns are blanched and sun-dried until they develop their characteristic black color. The slow curing process develops their complex flavor profile.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Black pepper cultivation in Kerala"
      }
    }
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
    tags: ["shop", "saffron", "luxury"],
    origin: "Iran",
    region: "Khorasan",
    harvest: "Autumn",
    process: "Hand-picked and dried",
    tastingNotes: ["Floral", "Honey", "Metallic", "Earthy"],
    originStory: {
      title: "Red Gold of Persia",
      description: "Each saffron thread must be hand-picked from the crocus flower at dawn. It takes 150 flowers to produce just one gram of saffron, making it the world's most labor-intensive spice.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Saffron harvesting at sunrise"
      }
    }
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
    tags: ["category", "cinnamon", "baking"],
    origin: "Sri Lanka",
    region: "Central Highlands",
    harvest: "Year-round",
    process: "Hand-peeled and dried",
    tastingNotes: ["Sweet", "Woody", "Citrusy", "Warm"],
    originStory: {
      title: "True Cinnamon Origins",
      description: "Unlike common cassia cinnamon, Ceylon cinnamon has a delicate, complex flavor. The bark is hand-peeled into thin quills and sun-dried to preserve its subtle sweetness.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Cinnamon trees in Sri Lanka"
      }
    }
  },
  {
    id: 12,
    name: 'Star Anise',
    description: 'Aromatic licorice flavor essential for pho and braised meats.',
    price: 6.75,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3c98775e62-c111d9853a5c6bc32b93.png',
    badge: 'Ideal for Broths',
    category: "spices",
    tags: ["category", "anise", "asian"],
    origin: "China",
    region: "Guangxi Province",
    harvest: "Spring and Autumn",
    process: "Sun-dried",
    tastingNotes: ["Licorice", "Sweet", "Warming", "Spicy"],
    originStory: {
      title: "Five-Spice Foundation",
      description: "Star anise is a key component in Chinese five-spice powder. The star-shaped fruits are harvested by hand and naturally dried to concentrate their intense licorice flavor.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Star anise trees in Guangxi Province"
      }
    }
  },
  {
    id: 13,
    name: 'Green Cardamom Pods',
    description: 'Intensely aromatic with a complex, slightly sweet and spicy taste.',
    price: 12.00,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e28f20b6e9-4cd51c3529e318a13655.png',
    badge: 'Perfect for Chai',
    category: "spices",
    tags: ["category", "cardamom", "indian"],
    origin: "India",
    region: "Kerala",
    harvest: "Year-round",
    process: "Hand-sorted and cleaned",
    tastingNotes: ["Floral", "Citrusy", "Cooling", "Sweet"],
    originStory: {
      title: "Queen of Spices",
      description: "Cardamom is one of the world's most expensive spices by weight. Each pod is hand-picked and sorted for size and aroma intensity. Our green cardamom retains its essential oils through careful processing.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Cardamom plantations in Kerala"
      }
    }
  },
  {
    id: 14,
    name: 'Whole Cloves',
    description: 'Pungent and warming, a staple in savory dishes and spice blends.',
    price: 7.25,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/51c673d0b9-498c5f1f8ef2ee93f505.png',
    badge: 'Best for Curries',
    category: "spices",
    tags: ["category", "cloves", "cooking"],
    origin: "Indonesia",
    region: "North Maluku",
    harvest: "Summer",
    process: "Sun-dried",
    tastingNotes: ["Pungent", "Numbing", "Sweet", "Aromatic"],
    originStory: {
      title: "Spice Islands Legacy",
      description: "Cloves originated in the Maluku Islands of Indonesia and were once worth their weight in gold. Our cloves are hand-picked when they reach optimal oil content and naturally dried to preserve their potency.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Cloves growing on trees in Maluku Islands"
      }
    }
  },
  {
    id: 15,
    name: 'Tellicherry Peppercorns',
    description: 'Bold, pungent, and fruity. The king of spices for any dish.',
    price: 9.00,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a574adddeb-c889730ed53491605710.png',
    badge: 'Kitchen Essential',
    category: "pepper",
    tags: ["category", "pepper", "premium"],
    origin: "India",
    region: "Kerala",
    harvest: "Monsoon Season",
    process: "Sun-cured",
    tastingNotes: ["Fruity", "Pungent", "Woody", "Complex"],
    originStory: {
      title: "Premium Pepper Standard",
      description: "Tellicherry peppercorns are larger, more mature berries that develop superior flavor. Harvested at peak ripeness and cured using traditional methods passed down through generations.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Tellicherry pepper vines in Kerala"
      }
    }
  },
  {
    id: 16,
    name: 'Turkish Bay Leaves',
    description: 'Subtle, herbal aroma that deepens the flavor of stews and soups.',
    price: 5.50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/380597d0ca-34ffee3a84ceb5ed9f9d.png',
    badge: 'Ideal for Slow Cooking',
    category: "herbs",
    tags: ["category", "bay-leaves", "herbs"],
    origin: "Turkey",
    region: "Black Sea Region",
    harvest: "Summer",
    process: "Air-dried",
    tastingNotes: ["Herbal", "Floral", "Slightly Bitter", "Eucalyptus"],
    originStory: {
      title: "Anatolian Aroma",
      description: "Turkish bay leaves are renowned for their complex flavor profile. Harvested from laurel trees in the Black Sea region and carefully dried to preserve their essential oils.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Bay laurel trees in Turkey"
      }
    }
  },
  {
    id: 17,
    name: 'Whole Cumin Seeds',
    description: 'Robust, earthy flavor essential for Mexican, Indian, and Middle Eastern cuisines.',
    price: 6.00,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/6dd179ee5b-66c289d9a21c86e09d9e.png',
    badge: 'Earthy & Warm',
    category: "seeds",
    tags: ["category", "cumin", "seeds"],
    origin: "India",
    region: "Gujarat",
    harvest: "Winter",
    process: "Hand-sorted and cleaned",
    tastingNotes: ["Earthy", "Nutty", "Bitter", "Warm"],
    originStory: {
      title: "Ancient Spice Route",
      description: "Cumin has been used for millennia across cultures. Our seeds are sourced from Gujarat's fertile plains and sorted by hand to ensure uniform size and maximum flavor.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Cumin fields in Gujarat, India"
      }
    }
  },
  {
    id: 18,
    name: 'Whole Nutmeg',
    description: 'Grate fresh for a warm, nutty kick in cream sauces and baked goods.',
    price: 10.50,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5127c368bb-2b9c23dd03cab3703864.png',
    badge: 'Sweet & Spicy',
    category: "spices",
    tags: ["category", "nutmeg", "baking"],
    origin: "Indonesia",
    region: "Banda Islands",
    harvest: "Year-round",
    process: "Sun-dried",
    tastingNotes: ["Nutty", "Sweet", "Warm", "Slightly Bitter"],
    originStory: {
      title: "Bandanese Treasure",
      description: "Nutmeg and mace come from the same fruit. Our nutmegs are harvested from ancient trees on the volcanic Banda Islands, where the spice was first cultivated centuries ago.",
      image: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/83fb87f3f9-9ac4e75f2916c892de7e.png",
        alt: "Nutmeg trees on Banda Islands"
      }
    }
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
    tags: ["related", "coffee", "guatemala"],
    origin: "Guatemala",
    region: "Antigua Valley",
    harvest: "Nov - Jan 2025",
    process: "Fully Washed",
    altitude: "1500-1800m",
    roast: "Medium",
    tastingNotes: ["Chocolate", "Smoky", "Nutty", "Full Body"]
  },
  {
    id: 21,
    name: "Kenyan AA",
    description: "Bright acidity with bold berry flavors.",
    price: 26.50,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-2.jpg",
    badge: "Award Winner",
    category: "coffee",
    tags: ["related", "coffee", "kenya"],
    origin: "Kenya",
    region: "Nyeri Highlands",
    harvest: "Oct - Dec 2025",
    process: "Fully Washed",
    altitude: "1800-2200m",
    roast: "Medium-Light",
    tastingNotes: ["Blackcurrant", "Tomato", "Citrus", "Wine-like"]
  },
  {
    id: 22,
    name: "Colombian Supremo",
    description: "Balanced and smooth with caramel undertones.",
    price: 21.00,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-3.jpg",
    badge: "Smooth & Balanced",
    category: "coffee",
    tags: ["related", "coffee", "colombia"],
    origin: "Colombia",
    region: "Huila",
    harvest: "Oct - Mar 2025",
    process: "Fully Washed",
    altitude: "1200-1800m",
    roast: "Medium",
    tastingNotes: ["Caramel", "Nuts", "Chocolate", "Clean Finish"]
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