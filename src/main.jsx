import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from 'react-ga4'

// Initialize GA4 with your Vite Environment Variable
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (MEASUREMENT_ID) {
  ReactGA.initialize(MEASUREMENT_ID);
  
  // Send the initial pageview
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
