// Global site data constants

// Testimonials data (used in home page)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya S., Bangalore",
    quote: "The aroma of the Garam Masala is just incredible. It has completely transformed my cooking. You can taste the freshness!",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen, New York",
    quote: "I'm a professional chef, and the quality of these spices is top-notch. The Lakadong Turmeric is unlike any I've used before.",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Al-Jamil, Dubai",
    quote: "Fast delivery and beautiful packaging. The products feel so premium. It's clear they care about every detail.",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    rating: 5
  }
];

// Hero section data (used in home page)
export const HERO_IMAGES = [
  {
    id: 1,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/67e878543c-3329319bc2f76cb23bd4.png",
    alt: "A close-up photograph of vibrant red paprika and chili powder in artisanal ceramic bowls, earthy and warm tones, natural light."
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/135d277781-7bec121286ec9f6d535f.png",
    alt: "Macro shot of golden turmeric powder with whole turmeric roots nearby, detailed texture, natural aesthetic."
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b640e6d159-747925f453976ddee0d7.png",
    alt: "Artistic arrangement of whole spices like star anise, cinnamon sticks, and cloves on a rustic wooden surface, top-down view."
  },
  {
    id: 4,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1fb5696aaf-3385dd56f8f687a54481.png",
    alt: "Close-up of fresh green herbs like rosemary and thyme, soft focus, natural lighting."
  },
  {
    id: 5,
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/792e3c5ce1-ed4331d17cf288f0b44b.png",
    alt: "A pile of aromatic whole black peppercorns, detailed texture, dark and moody photography."
  }
];

export const TRUST_BADGES = [
  {
    id: 1,
    icon: "FSSAI_CERTIFIED",
    text: "FSSAI Certified"
  },
  {
    id: 2,
    icon: "LAB_TESTED_PURITY",
    text: "Lab-Tested Purity"
  },
  {
    id: 3,
    icon: "ETHICALLY_SOURCED",
    text: "Ethically Sourced"
  }
];

// Sourcing story data (used in home page)
export const SOURCING_STORY = {
  title: "From Our Farms, To Your Table",
  description: "We partner with generational farmers who cultivate spices using traditional, sustainable methods. Each harvest is hand-picked at its peak, ensuring unparalleled potency and flavor that honors the land and its caretakers.",
  image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/40bf5e166a-3b6d6c7171663055e1c4.png",
  alt: "A sun-drenched spice farm in Kerala, India, with rows of cardamom plants and farmers tending to them, vibrant and authentic.",
  insetImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7fee526639-3b2a1c3395bbb5cac100.png",
  insetAlt: "Close-up of a farmer",
  features: [
    {
      id: 1,
      icon: "SUSTAINABLY_GROWN",
      title: "Sustainably Grown",
      description: "No pesticides, no artificial enhancers. Just the pure, unadulterated essence of nature."
    },
    {
      id: 2,
      icon: "FAIR_TRADE",
      title: "Fair-Trade Practices",
      description: "We ensure our farming partners receive equitable pay, fostering community growth and well-being."
    }
  ]
};

// Sort options (used in shop and category pages)
export const SORT_OPTIONS = [
  { value: "popularity", label: "Popularity" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" }
];

// Filter options (used in shop page)
export const CUISINE_FILTERS = [
  { id: "indian", label: "Indian", checked: false },
  { id: "mexican", label: "Mexican", checked: false },
  { id: "italian", label: "Italian", checked: true },
  { id: "thai", label: "Thai", checked: false },
  { id: "mediterranean", label: "Mediterranean", checked: false }
];

export const GRIND_TYPES = [
  { id: "whole", label: "Whole" },
  { id: "ground", label: "Ground" },
  { id: "flakes", label: "Flakes" }
];

// Customer reviews (used in product page)
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

// Complementary products (used in cart page)
export const COMPLEMENTARY_PRODUCTS = [
  {
    id: 1,
    name: "Smoked Paprika",
    price: 4.99,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6e2e0af7db-a2d0cad51ef3c356cde4.png",
    alt: "A small glass jar of vibrant red paprika powder, minimalist style, on a light background"
  },
  {
    id: 2,
    name: "Dried Rosemary",
    price: 3.99,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e12f7dd9c5-fc8659930aef22f3ab58.png",
    alt: "A small glass jar of dried rosemary leaves, rustic and aromatic, on a light background"
  },
  {
    id: 3,
    name: "Black Peppercorns",
    price: 5.49,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/678b5ccfc9-52d37aa1cd3b06f95274.png",
    alt: "A small glass jar of whole black peppercorns, sharp focus, on a light background"
  },
  {
    id: 4,
    name: "Sea Salt Flakes",
    price: 6.99,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9d401590bb-86f1cbbbbbcde85a5f6b.png",
    alt: "A small glass jar of coarse sea salt crystals, bright and clean, on a light background"
  },
  {
    id: 5,
    name: "Ground Turmeric",
    price: 4.49,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4f951d53cd-c8cf971d86c4807c14f1.png",
    alt: "A small glass jar of golden turmeric powder, vibrant and colorful, on a light background"
  }
];