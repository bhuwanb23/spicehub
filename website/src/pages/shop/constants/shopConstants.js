// Shop page constants

// Product data
export const SHOP_PRODUCTS = [
  {
    id: 1,
    name: "Smoked Paprika",
    description: "Sweet & Smoky",
    price: "$7.50",
    size: "50g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c48ee98e5a-830a45fe2419b55f26d4.png",
    alt: "A premium macro shot of smoked paprika powder in a small wooden bowl, earthy tones, studio lighting",
    badge: "FRESHLY GROUND"
  },
  {
    id: 2,
    name: "Cumin Seeds",
    description: "Earthy & Aromatic",
    price: "$6.00",
    size: "50g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2e57883ea9-dc2e8cb84c73f24dab74.png",
    alt: "High-quality photo of whole cumin seeds spilling from a burlap sack, rustic, warm lighting",
    badge: "ORGANIC"
  },
  {
    id: 3,
    name: "Dried Rosemary",
    description: "Piney & Fragrant",
    price: "$8.25",
    size: "40g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/56bff6ac7f-f5211b049fad184620e1.png",
    alt: "Artistic shot of dried rosemary sprigs on a dark slate background, dramatic lighting",
    badge: null
  },
  {
    id: 4,
    name: "Turmeric Powder",
    description: "Warm & Peppery",
    price: "$5.50",
    size: "60g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3210923e1b-9ccae429ffc82d18737d.png",
    alt: "Vibrant yellow turmeric powder arranged in a pattern on a black background, minimalist, high contrast",
    badge: "FRESHLY GROUND"
  },
  {
    id: 5,
    name: "Black Peppercorns",
    description: "Pungent & Spicy",
    price: "$9.00",
    size: "50g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/28d6f97d20-5f6fa9fc90b05892a6c0.png",
    alt: "Close-up of whole black peppercorns in a ceramic mortar, textured, natural light",
    badge: null
  },
  {
    id: 6,
    name: "Saffron Threads",
    description: "Floral & Luxurious",
    price: "$25.00",
    size: "1g",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7e0b400494-969d05897f22f8fe765d.png",
    alt: "Delicate saffron threads in a small glass jar, highlighting their vibrant red color, macro photography",
    badge: "PREMIUM"
  }
];

// Sort options
export const SORT_OPTIONS = [
  { value: "Popularity", label: "Popularity" },
  { value: "Newest", label: "Newest" },
  { value: "PriceLowHigh", label: "Price: Low to High" },
  { value: "PriceHighLow", label: "Price: High to Low" }
];

// Filter options
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

// Category filters
export const CATEGORY_FILTERS = [
  { id: "all-spices", label: "All Spices", path: "/category/all-spices" },
  { id: "herbs", label: "Herbs", path: "/category/herbs" },
  { id: "spice-blends", label: "Spice Blends", path: "/category/spice-blends" },
  { id: "salts-peppers", label: "Salts & Peppers", path: "/category/salts-peppers" },
  { id: "chilies", label: "Chilies", path: "/category/chilies" }
];