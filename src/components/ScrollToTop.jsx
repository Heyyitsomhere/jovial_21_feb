import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * - Scrolls to the top of the page whenever the route changes
 * - Used to ensure users start at the top when navigating to a new page
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
