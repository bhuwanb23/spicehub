// Product detail page constants

// Product data
export const PRODUCT_DATA = {
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
  ]
};

// Customer reviews
export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    author: "Sarah L.",
    rating: 5,
    comment: "Absolutely stunning. The aroma alone is worth the price. The floral notes are so clear and it makes the perfect morning cup. Will be subscribing!",
    date: "2025-11-28",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
  },
  {
    id: 2,
    author: "Michael B.",
    rating: 4.5,
    comment: "This is my go-to for pour-over. The clarity is incredible and there's zero bitterness. You can really taste the quality and care that went into these beans.",
    date: "2025-11-25",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
  },
  {
    id: 3,
    author: "Jessica T.",
    rating: 5,
    comment: "Fast shipping and beautifully packaged. The transparency about harvest dates and processing is what sold me. The coffee itself lives up to the hype.",
    date: "2025-11-22",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
  }
];

// Related products data
export const RELATED_PRODUCTS = [
  {
    id: 2,
    name: "Guatemalan Antigua",
    description: "Rich chocolate notes with a hint of smokiness.",
    price: 22.75,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-1.jpg",
    badge: "Customer Favorite"
  },
  {
    id: 3,
    name: "Kenyan AA",
    description: "Bright acidity with bold berry flavors.",
    price: 26.50,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-2.jpg",
    badge: "Award Winner"
  },
  {
    id: 4,
    name: "Colombian Supremo",
    description: "Balanced and smooth with caramel undertones.",
    price: 21.00,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/related-product-3.jpg",
    badge: "Smooth & Balanced"
  }
];