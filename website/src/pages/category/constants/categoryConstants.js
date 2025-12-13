// Category page constants
import { getCategoryProducts } from '../../../constants/products';
import { SORT_OPTIONS } from '../../../constants/siteData';

// Product data - now comes from global products
export const CATEGORY_PRODUCTS = getCategoryProducts();

// Sort options
export { SORT_OPTIONS };

// Hero images
export const CATEGORY_HERO_IMAGE = {
  src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f345aa5f85-800d28678e0becbe85d6.png",
  alt: "An artful arrangement of whole spices on a rustic wooden surface"
};

// Category descriptions
export const CATEGORY_DESCRIPTIONS = {
  "whole-spices": "Discover the soul of flavor with our hand-selected whole spices. Sourced from the finest farms, each spice is a promise of unparalleled aroma and potency. Our philosophy is simple: pure, unadulterated ingredients for an authentic culinary experience that elevates every dish from ordinary to extraordinary.",
  "herbs": "Experience the fresh, aromatic flavors of our premium herb collection. Hand-picked and carefully dried to preserve their essential oils and vibrant taste. Perfect for adding that extra touch to your favorite dishes.",
  "spice-blends": "Our expertly crafted spice blends combine the finest ingredients to deliver complex flavors with convenience. Each blend tells a story of culinary tradition and innovation.",
  "salts-peppers": "The foundation of great cooking starts with exceptional salts and peppers. Our curated selection offers unique varieties that will transform your seasoning game.",
  "chilies": "Ignite your palate with our diverse collection of chilies. From mild warmth to intense heat, we offer a range that suits every spice lover's preference.",
  "default": "Discover the soul of flavor with our hand-selected spices. Sourced from the finest farms, each spice is a promise of unparalleled aroma and potency. Our philosophy is simple: pure, unadulterated ingredients for an authentic culinary experience that elevates every dish from ordinary to extraordinary."
};