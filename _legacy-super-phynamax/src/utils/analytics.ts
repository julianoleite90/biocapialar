// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Substitua pelo seu ID do GA4

// Google Analytics 4
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track CTA clicks
export const trackCTAClick = (buttonText: string, location: string) => {
  trackEvent('click', 'CTA', `${buttonText} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'Form', formName);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (depth >= 25 && depth < 50) {
    trackEvent('scroll', 'Engagement', '25%');
  } else if (depth >= 50 && depth < 75) {
    trackEvent('scroll', 'Engagement', '50%');
  } else if (depth >= 75 && depth < 90) {
    trackEvent('scroll', 'Engagement', '75%');
  } else if (depth >= 90) {
    trackEvent('scroll', 'Engagement', '90%');
  }
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  if (seconds >= 30 && seconds < 60) {
    trackEvent('timing', 'Engagement', '30s');
  } else if (seconds >= 60 && seconds < 120) {
    trackEvent('timing', 'Engagement', '1min');
  } else if (seconds >= 120 && seconds < 300) {
    trackEvent('timing', 'Engagement', '2min');
  } else if (seconds >= 300) {
    trackEvent('timing', 'Engagement', '5min+');
  }
};

// Enhanced E-commerce tracking
export const trackProductView = (productId: string, productName: string, price: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'BRL',
      value: price,
      items: [
        {
          item_id: productId,
          item_name: productName,
          price: price,
          currency: 'BRL',
          category: 'Suplemento Alimentar',
        },
      ],
    });
  }
};

export const trackAddToCart = (productId: string, productName: string, price: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'BRL',
      value: price,
      items: [
        {
          item_id: productId,
          item_name: productName,
          price: price,
          currency: 'BRL',
          category: 'Suplemento Alimentar',
        },
      ],
    });
  }
};

export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'BRL',
      items: items,
    });
  }
};

// Performance tracking
export const trackPerformance = (metric: string, value: number) => {
  trackEvent('timing', 'Performance', metric, value);
};

// Error tracking
export const trackError = (error: string, location: string) => {
  trackEvent('exception', 'Error', `${error} - ${location}`);
};

// User engagement tracking
export const trackEngagement = (action: string, value?: string) => {
  trackEvent('engagement', 'User', action, value ? 1 : undefined);
};

// Export types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
