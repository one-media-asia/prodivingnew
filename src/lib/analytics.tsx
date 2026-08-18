import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID || "G-DJBJE1TBX0";

export function initGA() {
  try {
    ReactGA.initialize(GA_ID);
    // temporary debug log to confirm analytics bundle loaded in production
    // eslint-disable-next-line no-console
    console.log('initGA', GA_ID);
  } catch (e) {
    // silent fail in environments where window isn't available
    // eslint-disable-next-line no-console
    console.warn("Failed to initialize Google Analytics", e);
  }
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;
    try {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("GA pageview failed", e);
    }
  }, [location]);

  return null;
}

export default Analytics;
