import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AdithyaShoes from './pages/Home';
import AdithyaAbout from './pages/About';
import AdithyaContact from './pages/Contact';
import AdithyaProducts from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Navbar from './pages/Navbar';

type PageType = 'shop' | 'products' | 'about' | 'contact';

// Wrapper component to handle navigation state
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active page based on current path - add explicit return type
  const getActivePage = (): PageType => {
    const path = location.pathname;
    if (path === '/') return 'shop';
    if (path === '/products') return 'products';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'shop'; // default return
  };

  const [activePage, setActivePage] = useState<PageType>(getActivePage());

  const handlePageChange = (page: PageType) => {
    setActivePage(page);
    switch(page) {
      case 'shop':
        navigate('/');
        break;
      case 'products':
        navigate('/products');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'contact':
        navigate('/contact');
        break;
    }
  };

  return (
    <div className="relative">
      <Navbar 
        activePage={activePage} 
        onPageChange={handlePageChange}
      />
      
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<AdithyaShoes />} />
          <Route path="/products" element={<AdithyaProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AdithyaAbout />} />
          <Route path="/contact" element={<AdithyaContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}