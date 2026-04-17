// AdithyaHomePage.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw, 
  Heart,
  Menu,
  X,
  ChevronRight,
  Send,
  Leaf,
  Recycle,
  Droplet,
  Sun,
  Award,
  Globe,
  Zap
} from 'lucide-react';

import bg from "./im/SNEAKER_GUIDE_OPENER.webp";
import et from "./im/ab.avif";
import a from "./im/1.jpeg";
import b from "./im/2.jpeg";
import c from "./im/4.jpeg";
import d from "./im/5.jpeg";
import e from "./im/7.jpeg";
import f from "./im/8.jpeg";
import g from "./im/9.jpeg";
import h from "./im/10.jpeg";

import q from "./im/q.jpg";
import w from "./im/r.webp";
import r from "./im/t.webp";
import t from "./im/w.webp";
import z from "./im/3.jpg";
import u from "./im/6.webp";
import i from "./im/z.webp";
import o from "./im/95ec3ef4-4ed1-4692-93b3-360b4211e37c.d4b693f7d68d9fc7716310fe73878098.avif";

// ============================================
// TYPES
// ============================================
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  image: string;
  gender?: 'men' | 'women' | 'kids';
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

// ============================================
// DATA
// ============================================
const products: Product[] = [
  { id: 1, name: "Urban Walker", category: "Casual", price: 4500, isBestSeller: true, image: e, gender: 'men' },
  { id: 2, name: "Executive Oxford", category: "Formal", price: 6800, image: a, gender: 'men' },
  { id: 3, name: "Sprint Pro", category: "Sports", price: 5200, isNew: true, image: b, gender: 'men' },
  { id: 4, name: "Coastal Breeze", category: "Sandals", price: 2800, image: c, gender: 'men' },
  { id: 5, name: "Velvet Charm", category: "Casual", price: 3900, image: d, gender: 'women' },
  { id: 6, name: "Little Star", category: "Kids", price: 2500, image: f, gender: 'kids' },
  { id: 7, name: "Midnight Suede", category: "Formal", price: 5500, image: g, gender: 'men' },
  { id: 8, name: "Trail Blazer", category: "Sports", price: 4800, image: h, gender: 'men' },
];

const testimonials: Testimonial[] = [
  { id: 1, name: "Kasun Perera", location: "Colombo, Sri Lanka", text: "Adithya Shoes changed my entire shoe game. The quality is insane for the price. I've bought three pairs already and each one feels premium.", rating: 5 },
  { id: 2, name: "Shanali Fernando", location: "Kandy, Sri Lanka", text: "Finally, a Sri Lankan brand that understands modern style! The Velvet Charm flats are my go-to for everything from office to dinner dates.", rating: 5 },
  { id: 3, name: "Dinesh Rajapaksha", location: "Galle, Sri Lanka", text: "I was skeptical at first, but the Executive Oxford changed my mind. Comfortable enough for 12-hour workdays and stylish enough for any meeting.", rating: 5 },
];

const features = [
  { icon: Shield, title: "Premium Quality", description: "Handpicked materials and meticulous craftsmanship in every pair we create." },
  { icon: ShoppingBag, title: "Affordable Pricing", description: "Luxury-level footwear at prices that make sense for the everyday consumer." },
  { icon: Star, title: "Trendy Designs", description: "Stay ahead of the curve with styles inspired by global fashion trends." },
  { icon: Heart, title: "Proudly Sri Lankan", description: "Supporting local artisans and the Sri Lankan economy with every purchase." },
];

// ============================================
// ANIMATED HERO SECTION WITH BACKGROUND IMAGE
// ============================================
const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out"
        style={{ 
          backgroundImage: `url(${bg})`,
          transform: textVisible ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 8s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
      </div>
      
    
      
      {/* Floating Elements Animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className={`transform transition-all duration-700 delay-300 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 text-sm font-medium rounded-full mb-6 border border-amber-400/30 animate-pulse">
              ✨ Sri Lanka's Premium Footwear
            </span>
          </div>
          
          {/* Animated Heading with Typewriter Effect */}
          <div className={`transform transition-all duration-700 delay-500 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Step into Style with{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent animate-gradient">
                Adithya Shoes
              </span>
            </h1>
          </div>
          
          {/* Animated Description */}
          <div className={`transform transition-all duration-700 delay-700 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where craftsmanship meets contemporary design. Discover footwear that blends Sri Lankan heritage with global style — made for those who walk with purpose.
            </p>
          </div>
          
          {/* Animated Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-1000 ${textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="px-8 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 group">
              <span className="inline-flex items-center gap-2">
                Shop Now 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-3 border-2 border-amber-400 text-amber-300 rounded-full font-medium hover:bg-amber-500/20 transition-all backdrop-blur-sm hover:scale-105">
              Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator with Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SUSTAINABLE COMMITMENT SECTION (Replaces Contact)
// ============================================
const SustainableCommitmentSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const commitments = [
    { icon: Leaf, title: "Eco-Friendly Materials", description: "We use sustainable and recycled materials in our production process, reducing environmental impact.", color: "from-green-500 to-emerald-600" },
    { icon: Recycle, title: "Zero Waste Initiative", description: "Our manufacturing process aims for minimal waste with recycling programs for offcuts.", color: "from-emerald-500 to-teal-600" },
    { icon: Droplet, title: "Water Conservation", description: "We've reduced water usage by 40% through innovative tanning processes.", color: "from-blue-500 to-cyan-600" },
    { icon: Sun, title: "Renewable Energy", description: "Our production facility runs on 60% solar power, reducing carbon footprint.", color: "from-yellow-500 to-orange-600" },
  ];

  const impactStats = [
    { value: "50K+", label: "Plastic Bottles Recycled", icon: Recycle },
    { value: "40%", label: "Water Reduction", icon: Droplet },
    { value: "30K+", label: "Trees Planted", icon: Leaf },
    { value: "60%", label: "Solar Powered", icon: Sun },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm border border-emerald-400/30">
            🌱 Our Commitment
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
            Sustainable Luxury
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We believe fashion shouldn't cost the earth. Here's how we're making a difference.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment, idx) => (
            <div 
              key={idx}
              className="group relative p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${commitment.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <commitment.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-400/30">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-gray-300">Certified Sustainable by Sri Lanka Eco Council</span>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

// Story & Stats Section
const StorySection: React.FC = () => {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "200+", label: "Shoe Designs" },
    { value: "5+", label: "Years of Trust" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Crafted in Sri Lanka, <br />Worn Worldwide
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Born from the vibrant streets of Sri Lanka, Adithya Shoes started as a small family workshop with a simple vision — to create footwear that celebrates quality craftsmanship without the premium price tag.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, we've grown into a trusted name in Sri Lankan footwear, blending traditional techniques with modern design. Every pair tells a story of dedication, comfort, and style that transcends borders.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From the bustling markets of Colombo to wardrobes across the island, Adithya Shoes continues to walk forward — one step at a time, one sole at a time.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={et}
                alt="Adithya Shoes craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {product.isBestSeller && (
          <span className="px-2 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
            New
          </span>
        )}
      </div>
      
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
      </button>
      
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4">
        <div className="text-sm text-amber-600 font-medium mb-1">{product.category}</div>
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">Rs. {product.price.toLocaleString()}</span>
          <button className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// Products Grid Section
const ProductsSection: React.FC = () => {
  const categories = ["All", "Men", "Women", "Kids", "Formal", "Casual", "Sports"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory || p.gender === activeCategory.toLowerCase());

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover footwear crafted for every occasion — from casual outings to formal events
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-all">
            View All Products
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Why Choose Adithya</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors">
                <feature.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Lifestyle Section
interface LifestyleImage {
  id: number;
  imageUrl: string;
  alt: string;
  instagramUrl?: string;
}

interface LifestyleSectionProps {
  images?: LifestyleImage[];
  instagramHandle?: string;
}

const LifestyleSection: React.FC<LifestyleSectionProps> = ({ 
  images = [],
  instagramHandle = "ADITHYASHOES"
}) => {
  const defaultImages = [
    { id: 1, imageUrl: q, alt: "Adithya Shoes Style 1" },
    { id: 2, imageUrl: w, alt: "Adithya Shoes Style 2" },
    { id: 3, imageUrl: r, alt: "Adithya Shoes Style 3" },
    { id: 4, imageUrl: t, alt: "Adithya Shoes Style 4" },
    { id: 5, imageUrl: z, alt: "Adithya Shoes Style 5" },
    { id: 6, imageUrl: u, alt: "Adithya Shoes Style 6" },
    { id: 7, imageUrl: i, alt: "Adithya Shoes Style 7" },
    { id: 8, imageUrl: o, alt: "Adithya Shoes Style 8" },
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Lifestyle</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">The Adithya Look</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real people, real style. See how our community rocks their Adithya Shoes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {displayImages.map((item) => (
            <a
              key={item.id}
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden group relative cursor-pointer block"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`https://instagram.com/${instagramHandle.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
            FOLLOW @{instagramHandle.toUpperCase()} ON INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                ADITHYA
              </span>
              <span className="ml-1 text-xs text-gray-400 font-light">SHOES</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafted in Sri Lanka, worn worldwide. Premium footwear that blends heritage with contemporary style.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 No. 45, Lighthouse St, Galle Fort</li>
              <li>📞 +94 91 222 3456</li>
              <li>✉️ hello@adithyashoes.lk</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">© 2024 Adithya Shoes. All rights reserved.</div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const AdithyaHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <FeaturesSection />
      <LifestyleSection />
      <TestimonialsSection />
      <SustainableCommitmentSection />
      <Footer />
    </div>
  );
};

export default AdithyaHomePage;