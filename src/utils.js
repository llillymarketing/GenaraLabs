/**
 * Creates a URL path for a given page name.
 * Maps Base44-style page names to URL-friendly paths.
 */
export function createPageUrl(pageName) {
  const pageMap = {
    Home: '/',
    Products: '/products',
    ProductDetail: '/product-detail',
    About: '/about',
    Contact: '/contact',
    Cart: '/cart',
    Checkout: '/checkout',
    OrderConfirmation: '/order-confirmation',
    Terms: '/terms',
    Privacy: '/privacy',
    Disclaimer: '/disclaimer',
    ShippingPolicy: '/shipping-policy',
    RefundPolicy: '/refund-policy',
  };
  return pageMap[pageName] || '/' + pageName.toLowerCase().replace(/s+/g, '-');
}