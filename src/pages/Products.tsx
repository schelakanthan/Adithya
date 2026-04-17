import React, { useState, useEffect, useRef } from 'react';
import { 
  
  Star, 
  Heart, 
 
  Filter,
  X,
  Minus,
  Plus,
  Truck,
  Shield,
  RefreshCw,
  CheckCircle,

} from 'lucide-react';

// Re-using same image imports from your homepage (adjust paths as needed)

import a from "./im/1.jpeg";
import b from "./im/2.jpeg";
import c from "./im/4.jpeg";
import d from "./im/5.jpeg";
import e from "./im/7.jpeg";
import f from "./im/8.jpeg";
import g from "./im/9.jpeg";
import h from "./im/10.jpeg";

// ============================================
// TYPES
// ============================================
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  image: string;
  gender?: 'men' | 'women' | 'kids';
  rating: number;
  reviewCount: number;
  description: string;
  sizes: string[];
  colors: string[];
}

// ============================================
// EXTENDED PRODUCT DATA (Detailed for product page)
// ============================================
const products: Product[] = [
  { 
    id: 1, 
    name: "Urban Walker", 
    category: "Casual", 
    price: 4500, 
    isBestSeller: true, 
    image: e, 
    gender: 'men',
    rating: 4.8,
    reviewCount: 124,
    description: "Premium leather casual sneakers with memory foam insole. Perfect for all-day comfort and urban style.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Tan", "Black", "White"]
  },
  { 
    id: 2, 
    name: "Executive Oxford", 
    category: "Formal", 
    price: 6800, 
    image: a, 
    gender: 'men',
    rating: 4.9,
    reviewCount: 89,
    description: "Handcrafted Oxford shoes made from genuine Italian leather. Elegant design for business and formal events.",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Black", "Brown", "Burgundy"]
  },
  { 
    id: 3, 
    name: "Sprint Pro", 
    category: "Sports", 
    price: 5200, 
    isNew: true, 
    image: b, 
    gender: 'men',
    rating: 4.7,
    reviewCount: 203,
    description: "Lightweight running shoes with breathable mesh and responsive cushioning for maximum performance.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Blue/Red", "Black/White", "Gray/Orange"]
  },
  { 
    id: 4, 
    name: "Coastal Breeze", 
    category: "Sandals", 
    price: 2800, 
    image: c, 
    gender: 'men',
    rating: 4.5,
    reviewCount: 67,
    description: "Comfortable summer sandals with soft footbed and durable outsole. Ideal for beach and casual wear.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Brown", "Black", "Navy"]
  },
  { 
    id: 5, 
    name: "Velvet Charm", 
    category: "Casual", 
    price: 3900, 
    image: d, 
    gender: 'women',
    rating: 4.9,
    reviewCount: 156,
    description: "Elegant velvet loafers with cushioned insole. Perfect for office or evening outings.",
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7"],
    colors: ["Navy", "Burgundy", "Emerald"]
  },
  { 
    id: 6, 
    name: "Little Star", 
    category: "Kids", 
    price: 2500, 
    image: f, 
    gender: 'kids',
    rating: 4.8,
    reviewCount: 92,
    description: "Durable and comfortable sneakers for active kids. Easy to clean and long-lasting.",
    sizes: ["UK 10", "UK 11", "UK 12", "UK 13", "UK 1"],
    colors: ["Blue/Yellow", "Pink/Purple", "Red/Black"]
  },
  { 
    id: 7, 
    name: "Midnight Suede", 
    category: "Formal", 
    price: 5500, 
    image: g, 
    gender: 'men',
    rating: 4.7,
    reviewCount: 78,
    description: "Premium suede derby shoes with leather lining. Sophisticated style for special occasions.",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Navy", "Dark Brown", "Gray"]
  },
  { 
    id: 8, 
    name: "Trail Blazer", 
    category: "Sports", 
    price: 4800, 
    image: h, 
    gender: 'men',
    rating: 4.6,
    reviewCount: 112,
    description: "All-terrain hiking shoes with rugged grip and ankle support. Adventure ready.",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Olive", "Gray/Orange", "Black/Yellow"]
  },
];

// ============================================
// ANIMATED COMPONENTS
// ============================================

// Fade In Up Animation Wrapper
const FadeInUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Scale In Animation
const ScaleIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Product Card with Hover Animation
const ProductCard: React.FC<{ product: Product; onQuickView: (product: Product) => void }> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {product.isBestSeller && (
          <span className="px-2 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full animate-pulse">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
            New
          </span>
        )}
      </div>
      
      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Product Image with Zoom Effect */}
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100 cursor-pointer" onClick={() => onQuickView(product)}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <div className="text-xs text-amber-600 font-medium mb-1 tracking-wide">{product.category}</div>
        <h3 className="font-bold text-gray-900 mb-1 text-lg">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-900">Rs. {product.price.toLocaleString()}</span>
          <button 
            onClick={() => onQuickView(product)}
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:bg-amber-600"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

// Quick View Modal
const QuickViewModal: React.FC<{ product: Product | null; onClose: () => void }> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <div className="relative p-6">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Details */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                {product.isBestSeller && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Bestseller</span>}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              <div className="text-2xl font-bold text-amber-600 mb-4">Rs. {product.price.toLocaleString()}</div>
              
              {/* Size Selector */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm transition-all ${
                        selectedSize === size 
                          ? 'border-amber-600 bg-amber-50 text-amber-600 font-medium' 
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border rounded-lg hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border rounded-lg hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <button className="w-full py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all transform hover:scale-[1.02]">
                Add to Cart - Rs. {(product.price * quantity).toLocaleString()}
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free Shipping</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Filter Sidebar (Mobile/Desktop)
const FilterSidebar: React.FC<{ isOpen: boolean; onClose: () => void; categories: string[]; selectedCategory: string; onSelectCategory: (cat: string) => void }> = ({ 
  isOpen, onClose, categories, selectedCategory, onSelectCategory 
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />
      )}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 md:relative md:translate-x-0 md:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h3 className="font-bold text-lg">Filters</h3>
            <button onClick={onClose}><X className="w-5 h-5" /></button>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { onSelectCategory(cat); onClose(); }}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-all ${
                    selectedCategory === cat ? 'bg-amber-100 text-amber-700 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Section (Product Page specific)
const ProductHero: React.FC<{ filteredCount: number }> = ({ filteredCount }) => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 via-white to-stone-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4 animate-pulse">
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Footwear</span> Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover {filteredCount}+ styles crafted for comfort, durability, and timeless elegance. 
            Each pair tells a story of Sri Lankan craftsmanship.
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Features Bar (same as homepage theme)
const FeaturesBar: React.FC = () => {
  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over Rs. 5000" },
    { icon: Shield, title: "Secure Payment", desc: "100% protected" },
    { icon: RefreshCw, title: "Easy Returns", desc: "30-day exchange" },
    { icon: CheckCircle, title: "Authentic Quality", desc: "Premium materials" }
  ];
  return (
    <div className="bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <f.icon className="w-6 h-6 text-amber-500" />
              <div>
                <p className="text-white text-sm font-semibold">{f.title}</p>
                <p className="text-gray-400 text-xs">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Newsletter Section (matching theme)
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get 10% off your first order and exclusive updates on new arrivals.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button type="submit" className="px-6 py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition transform hover:scale-105">
            Subscribe
          </button>
        </form>
        {subscribed && (
          <p className="mt-4 text-green-600 text-sm animate-in fade-in">Thanks! Check your inbox for your discount code.</p>
        )}
      </div>
    </section>
  );
};

// Footer (matching homepage)
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">ADITHYA</span>
              <span className="ml-1 text-xs text-gray-400">SHOES</span>
            </div>
            <p className="text-gray-400 text-sm">Crafted in Sri Lanka, worn worldwide. Premium footwear with Sri Lankan soul.</p>
          </div>
          <div><h4 className="font-semibold mb-3">Quick Links</h4><ul className="space-y-2 text-sm text-gray-400"><li>About Us</li><li>Shop All</li><li>Size Guide</li></ul></div>
          <div><h4 className="font-semibold mb-3">Support</h4><ul className="space-y-2 text-sm text-gray-400"><li>FAQ</li><li>Shipping</li><li>Returns</li></ul></div>
   <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 No. 45, Lighthouse St, Galle Fort</li>
              <li>📞 +94 91 222 3456</li>
              <li>✉️ hello@adithyashoes.lk</li>
            </ul>
          </div>        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">© 2024 Adithya Shoes. All rights reserved.</div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN PRODUCT PAGE COMPONENT
// ============================================
const AdithyaProductPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const categories = ["All", "Men", "Women", "Kids", "Formal", "Casual", "Sports"];
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else if (["Men", "Women", "Kids"].includes(selectedCategory)) {
      setFilteredProducts(products.filter(p => p.gender === selectedCategory.toLowerCase()));
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Product Hero with Animation */}
      <FadeInUp>
        <ProductHero filteredCount={filteredProducts.length} />
      </FadeInUp>
      
      <FeaturesBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Filter Button & Category Pills */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-amber-600 text-white shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm"
          >
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="sticky top-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Filter className="w-4 h-4" /> Categories</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat ? 'bg-amber-100 text-amber-700 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products Grid with Staggered Animation */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <ScaleIn key={product.id} delay={idx * 100}>
                    <ProductCard product={product} onQuickView={setQuickViewProduct} />
                  </ScaleIn>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Newsletter Section with animation */}
      <FadeInUp delay={200}>
        <NewsletterSection />
      </FadeInUp>
      
      <Footer />
      
      {/* Filter Sidebar Mobile
      <FilterSidebar 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      /> */}
      
      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
};

export default AdithyaProductPage;