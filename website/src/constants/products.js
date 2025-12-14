// Global products data structure
export const GLOBAL_PRODUCTS = [
  // Featured Products (from home page)
  // Product Detail Page (Coffee)
  {
    id: 1,
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
  // Return all products for the shop page
  return GLOBAL_PRODUCTS;
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