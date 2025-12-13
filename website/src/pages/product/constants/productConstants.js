// Product detail page constants
import { getProductById, getRelatedProducts } from '../../../constants/products';
import { CUSTOMER_REVIEWS } from '../../../constants/siteData';

// Product data - now comes from global products
export const PRODUCT_DATA = getProductById(19); // Ethiopian Yirgacheffe coffee

// Customer reviews
export { CUSTOMER_REVIEWS };

// Related products data - now comes from global products
export const RELATED_PRODUCTS = getRelatedProducts();