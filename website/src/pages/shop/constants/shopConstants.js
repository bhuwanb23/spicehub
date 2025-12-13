// Shop page constants
import { getShopProducts, CATEGORIES } from '../../../constants/products';
import { SORT_OPTIONS, CUISINE_FILTERS, GRIND_TYPES } from '../../../constants/siteData';

// Product data - now comes from global products
export const SHOP_PRODUCTS = getShopProducts();

// Sort options
export { SORT_OPTIONS };

// Filter options
export { CUISINE_FILTERS, GRIND_TYPES };

// Category filters
export const CATEGORY_FILTERS = CATEGORIES;