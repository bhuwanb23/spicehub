// Home page constants
import { getFeaturedProducts } from '../../../constants/products';
import { TESTIMONIALS, HERO_IMAGES, TRUST_BADGES, SOURCING_STORY } from '../../../constants/siteData';

// Featured Products data - now comes from global products
export const FEATURED_PRODUCTS = getFeaturedProducts();

// Export the imported data directly
export { TESTIMONIALS, HERO_IMAGES, TRUST_BADGES, SOURCING_STORY };