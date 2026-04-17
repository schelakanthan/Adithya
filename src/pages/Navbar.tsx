import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  activePage: 'shop' | 'products' | 'about' | 'contact';
  onPageChange: (page: 'shop' | 'products' | 'about' | 'contact') => void;
}

const navLinks = [
  { id: 'shop', label: 'Home', page: 'shop' as const, path: '/' },
  { id: 'products', label: 'Products', page: 'products' as const, path: '/products' },
  { id: 'about', label: 'Our Story', page: 'about' as const, path: '/about' },
  { id: 'contact', label: 'Contact', page: 'contact' as const, path: '/contact' },
];

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (page: 'shop' | 'products' | 'about' | 'contact', path: string) => {
    onPageChange(page);
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable */}
          <button 
            onClick={() => handleNavigation('shop', '/')}
            className="flex items-center cursor-pointer"
          >
           <span className="text-2xl font-bold tracking-tight text-black">
              ADITHYA
            </span>
            <span className="ml-1 text-xs text-gray-400 font-light">SHOES</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.page, link.path)}
                className={`transition-colors ${
                  activePage === link.page
                    ? 'text-amber-600 font-semibold'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
        
            <button className="hidden md:block px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
              Buy Now
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.page, link.path)}
              className={`block w-full text-left py-2 transition-colors ${
                activePage === link.page
                  ? 'text-amber-600 font-semibold'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}