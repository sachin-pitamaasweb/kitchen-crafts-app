import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// MUI 
import { useMediaQuery, useTheme } from '@mui/material';

// Common components
import Header from './common/Header';
import Footer from './common/Footer';
import Loading from './common/Loading/index.jsx';
import FooterBottom from './common/Footer/FooterBottom';
import FooterForMobileView from './common/Footer/FooterForMobileView';

// Lazy load page components
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/index.jsx'));
const Contact = lazy(() => import('./pages/Contact/index.jsx'));
const DomesticProducts = lazy(() => import('./pages/Products/DomesticProducts/index.jsx'));
const CommercialProducts = lazy(() => import('./pages/Products/CommercialProducts/index.jsx'));

function App() {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Router>
      {/* Header is usually outside of Routes to remain static across all pages */}
      <Header />

      {/* Use Suspense to handle lazy loading fallback */}
      <Suspense fallback={<><Loading /></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/domestic" element={<DomesticProducts />} />
          <Route path="/products/commercial" element={<CommercialProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      {/* Footer is also outside of Routes to remain consistent */}
      {mobileView ? <Footer /> : <FooterForMobileView />}
      <FooterBottom />
    </Router>
  );
}

export default App;
