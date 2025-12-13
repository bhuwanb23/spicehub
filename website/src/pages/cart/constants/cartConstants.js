// Cart page constants
import { COMPLEMENTARY_PRODUCTS } from '../../../constants/siteData';

// Complementary products data - now comes from global data
export { COMPLEMENTARY_PRODUCTS };

// Order summary data (this will be calculated dynamically in the component)
export const ORDER_SUMMARY = {
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0
};