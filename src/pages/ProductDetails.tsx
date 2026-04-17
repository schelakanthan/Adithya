import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  tag: string;
  color: string;
  accent: string;
  desc: string;
  longDesc: string;
  emoji: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew: boolean;
  isSale: boolean;
  sizes: number[];
  colors: string[];
  features?: string[];
  materials?: string[];
  careInstructions?: string[];
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Adithya Apex Runner",
    price: "₹3,499",
    originalPrice: "₹4,999",
    tag: "BESTSELLER",
    color: "#C8A87A",
    accent: "#1A1A1A",
    desc: "Engineered for speed. Built for streets.",
    longDesc: "The Apex Runner features our signature cushioning technology, breathable mesh upper, and a durable rubber outsole. Perfect for daily runs and casual wear. Engineered with input from professional athletes, this shoe delivers exceptional energy return and stability.",
    emoji: "👟",
    category: "Running",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isNew: false,
    isSale: false,
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["Black/Gold", "White/Silver", "Navy/Red"],
    features: [
      "Breathable mesh upper",
      "Responsive foam cushioning",
      "Durable rubber outsole",
      "Lightweight construction (250g)",
      "Anti-slip grip pattern",
      "Reflective details for night runs"
    ],
    materials: [
      "Premium mesh fabric",
      "EVA foam midsole",
      "Natural rubber outsole",
      "Cotton laces"
    ],
    careInstructions: [
      "Spot clean with damp cloth",
      "Air dry away from direct sunlight",
      "Remove insoles for faster drying",
      "Use shoe tree to maintain shape"
    ]
  },
  {
    id: 2,
    name: "Adithya Cloud Walk",
    price: "₹2,999",
    originalPrice: "₹3,999",
    tag: "NEW",
    color: "#E8D5C4",
    accent: "#5C3D2E",
    desc: "Soft cushioning. All-day comfort.",
    longDesc: "Experience walking on clouds with our memory foam insole and flexible sole design. Ideal for all-day wear, travel, and casual outings. The Cloud Walk is designed for those who prioritize comfort without sacrificing style.",
    emoji: "🥿",
    category: "Casual",
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isNew: true,
    isSale: false,
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Beige", "Tan", "Black"],
    features: [
      "Memory foam insole",
      "Flexible slip-resistant sole",
      "Breathable knit upper",
      "Machine washable",
      "Ultra-lightweight design",
      "Arch support technology"
    ],
    materials: [
      "Knit fabric upper",
      "Memory foam insole",
      "TPR outsole",
      "Recycled packaging"
    ],
    careInstructions: [
      "Machine wash cold on gentle cycle",
      "Air dry only",
      "Do not bleach",
      "Remove insoles before washing"
    ]
  },
  {
    id: 3,
    name: "Adithya Terra Grip",
    price: "₹4,199",
    originalPrice: "₹5,999",
    tag: "TRAIL",
    color: "#2C3E2D",
    accent: "#C8A87A",
    desc: "Grip the ground. Own the outdoors.",
    longDesc: "Conquer any terrain with our aggressive lug pattern and waterproof materials. Built for adventure, these trail shoes provide exceptional traction on wet and dry surfaces.",
    emoji: "🥾",
    category: "Trail",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: false,
    isSale: false,
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Olive Green", "Brown", "Black"],
    features: [
      "Waterproof membrane",
      "Deep lug pattern for traction",
      "Rock plate protection",
      "Reinforced toe cap",
      "Quick-lace system",
      "Mud-shedding outsole"
    ],
    materials: [
      "Waterproof nylon upper",
      "Rubber lug outsole",
      "EVA foam midsole",
      "Gore-Tex lining"
    ],
    careInstructions: [
      "Brush off mud and dirt",
      "Hand wash with mild soap",
      "Air dry away from heat",
      "Apply waterproofing spray periodically"
    ]
  },
  {
    id: 4,
    name: "Adithya Luxe Slide",
    price: "₹1,799",
    originalPrice: "₹2,499",
    tag: "CASUAL",
    color: "#1A1A2E",
    accent: "#E8D5C4",
    desc: "Effortless style. Every moment.",
    longDesc: "Slip into luxury with our premium leather slides. Perfect for poolside, beach, or lounging at home. The cushioned footbed molds to your feet over time.",
    emoji: "🩴",
    category: "Sandals",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    isNew: false,
    isSale: false,
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "Brown", "Navy"],
    features: [
      "Premium leather straps",
      "Contoured footbed",
      "Slip-resistant sole",
      "Water-resistant finish",
      "Lightweight design",
      "Easy to clean"
    ],
    materials: [
      "Full-grain leather upper",
      "EVA foam footbed",
      "Rubber outsole",
      "Leather lining"
    ],
    careInstructions: [
      "Wipe with damp cloth",
      "Use leather conditioner",
      "Avoid prolonged water exposure",
      "Store in dust bag"
    ]
  },
  {
    id: 5,
    name: "Adithya Urban Pro",
    price: "₹3,899",
    originalPrice: "₹5,499",
    tag: "NEW",
    color: "#D4A574",
    accent: "#2C2C2C",
    desc: "Urban sophistication meets all-day comfort.",
    longDesc: "Versatile enough for the boardroom and comfortable enough for the commute. Premium leather upper with cushioned insole for all-day wear.",
    emoji: "👞",
    category: "Formal",
    rating: 4.8,
    reviews: 98,
    inStock: true,
    isNew: true,
    isSale: false,
    sizes: [7, 8, 9, 10, 11],
    colors: ["Brown", "Black", "Burgundy"],
    features: [
      "Premium leather upper",
      "Memory foam insole",
      "Breathable lining",
      "Classic derby styling",
      "Durable stacked heel",
      "Anti-fatigue technology"
    ],
    materials: [
      "Italian leather upper",
      "Leather lining",
      "Memory foam insole",
      "Leather outsole"
    ],
    careInstructions: [
      "Polish with quality shoe cream",
      "Use shoe trees",
      "Rotate with other shoes",
      "Professional cleaning recommended"
    ]
  },
  {
    id: 6,
    name: "Adithya Sprint Elite",
    price: "₹5,299",
    originalPrice: "₹7,999",
    tag: "SALE",
    color: "#E05A5A",
    accent: "#FAF8F4",
    desc: "Professional running shoe with carbon plate.",
    longDesc: "Carbon fiber plate technology for maximum energy return. Designed for competitive runners seeking that extra edge in races.",
    emoji: "🏃",
    category: "Running",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isNew: false,
    isSale: true,
    sizes: [8, 9, 10, 11, 12],
    colors: ["Red/Black", "Blue/White", "All Black"],
    features: [
      "Carbon fiber plate",
      "Responsive foam midsole",
      "Engineered mesh upper",
      "Heel lockdown system",
      "Weight: 190g",
      "Competition legal"
    ],
    materials: [
      "Technical mesh upper",
      "Carbon fiber plate",
      "Pebax foam midsole",
      "Rubber outsole"
    ],
    careInstructions: [
      "Spot clean only",
      "Air dry naturally",
      "Remove laces for cleaning",
      "Store in cool dry place"
    ]
  },
  {
    id: 7,
    name: "Adithya Heritage Boot",
    price: "₹6,999",
    originalPrice: "₹9,999",
    tag: "LIMITED",
    color: "#8B4513",
    accent: "#C8A87A",
    desc: "Handcrafted leather boots. Built to last.",
    longDesc: "Full-grain leather boots with Goodyear welt construction. Ages beautifully over time and can be resoled for decades of wear.",
    emoji: "👢",
    category: "Boots",
    rating: 5.0,
    reviews: 45,
    inStock: false,
    isNew: false,
    isSale: false,
    sizes: [7, 8, 9, 10, 11],
    colors: ["Brown", "Tan"],
    features: [
      "Full-grain leather",
      "Goodyear welt construction",
      "Leather lining",
      "Stacked leather heel",
      "Resoleable design",
      "Water-resistant treatment"
    ],
    materials: [
      "Full-grain leather upper",
      "Leather lining",
      "Cork footbed",
      "Leather outsole"
    ],
    careInstructions: [
      "Condition regularly",
      "Use shoe trees",
      "Avoid wet conditions initially",
      "Professional resoling available"
    ]
  },
  {
    id: 8,
    name: "Adithya Breeze Sandal",
    price: "₹2,299",
    originalPrice: "₹3,299",
    tag: "SUMMER",
    color: "#F4E4C1",
    accent: "#8B6F47",
    desc: "Breathable comfort for warm days.",
    longDesc: "Made from recycled materials with a cork footbed. Perfect for summer adventures, beach days, and casual strolls.",
    emoji: "👡",
    category: "Sandals",
    rating: 4.6,
    reviews: 178,
    inStock: true,
    isNew: false,
    isSale: true,
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Natural", "Black", "White"],
    features: [
      "Recycled materials",
      "Cork footbed",
      "Adjustable straps",
      "Lightweight design",
      "Quick-dry materials",
      "Eco-friendly packaging"
    ],
    materials: [
      "Recycled PET straps",
      "Cork footbed",
      "Natural rubber outsole",
      "Organic cotton lining"
    ],
    careInstructions: [
      "Hand wash with mild soap",
      "Air dry in shade",
      "Avoid machine washing",
      "Spot clean as needed"
    ]
  }
];

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"details" | "specs" | "care">("details");
  const [heroVisible, setHeroVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const foundProduct = allProducts.find(p => p.id === parseInt(id || "0"));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[2]);
    }
  }, [id]);

  const handleContactToBuy = () => {
    setToastMsg(`Redirecting to contact page for ${product?.name} inquiry...`);
    setTimeout(() => {
      navigate("/contact", { state: { productName: product?.name, productId: product?.id } });
    }, 1500);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-normal mb-2">Product Not Found</h2>
          <p className="text-[#8B7060] mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#1A1A1A] text-white px-6 py-2 rounded-full text-xs font-sans hover:bg-[#8B6F47] transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice ? Math.round(
    (parseInt(product.originalPrice.replace(/[^0-9]/g, '')) - 
     parseInt(product.price.replace(/[^0-9]/g, ''))) / 
    parseInt(product.originalPrice.replace(/[^0-9]/g, '')) * 100
  ) : 0;

  return (
    <div className="font-serif bg-[#FAF8F4] min-h-screen text-[#1A1A1A] overflow-x-hidden">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#FAF8F4] px-7 py-3 rounded-full text-sm z-[999] tracking-wide shadow-lg animate-fadeInUp">
          {toastMsg}
        </div>
      )}

      {/* Back Button */}
      <div className="pt-20 px-6 md:px-12 lg:px-16">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-sm text-[#8B7060] hover:text-[#8B6F47] transition-colors font-sans"
        >
          ← Back to All Products
        </button>
      </div>

      {/* Product Main Section */}
      <section className="py-12 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Visual */}
          <div className={`transition-all duration-900 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div 
              className="rounded-3xl p-12 flex items-center justify-center min-h-[400px] relative overflow-hidden"
              style={{ background: product.color }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 flex gap-2">
                {product.tag && (
                  <span className="bg-[#FAF8F4]/90 text-[#1A1A1A] text-[10px] tracking-[0.18em] px-3 py-1.5 rounded-full font-sans font-bold">
                    {product.tag}
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-[#E05A5A] text-white text-[10px] tracking-[0.18em] px-3 py-1.5 rounded-full font-sans font-bold">
                    SALE {discount}% OFF
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-[#8B6F47] text-white text-[10px] tracking-[0.18em] px-3 py-1.5 rounded-full font-sans font-bold">
                    NEW ARRIVAL
                  </span>
                )}
              </div>
              
              {/* Product Emoji */}
              <span className="text-[200px] drop-shadow-2xl animate-float">
                {product.emoji}
              </span>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className={`transition-all duration-900 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-[11px] tracking-[0.3em] text-[#8B6F47] uppercase font-sans mb-3">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-normal mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-sm font-bold">{product.rating}</span>
                <span className="text-xs text-[#8B7060]">({product.reviews} reviews)</span>
              </div>
              {product.inStock ? (
                <span className="text-xs text-green-600 font-sans">✓ In Stock</span>
              ) : (
                <span className="text-xs text-red-600 font-sans">✗ Out of Stock</span>
              )}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-[#8B7060] line-through">{product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-sans">Save {discount}%</span>
                </>
              )}
            </div>

            <p className="text-base leading-relaxed text-[#5A4A3A] mb-8 font-sans border-l-3 border-[#8B6F47] pl-4 italic">
              {product.longDesc}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-sm font-bold mb-3">Select Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full text-sm font-sans transition-all duration-200
                      ${selectedSize === size 
                        ? 'bg-[#1A1A1A] text-white' 
                        : 'bg-white border border-[#1A1A1A]/20 hover:border-[#8B6F47]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <p className="text-sm font-bold mb-3">Select Color</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 rounded-full text-xs font-sans transition-all duration-200
                      ${selectedColor === color 
                        ? 'bg-[#1A1A1A] text-white' 
                        : 'bg-white border border-[#1A1A1A]/20 hover:border-[#8B6F47]'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact to Buy Button */}
            <button
              onClick={handleContactToBuy}
              disabled={!product.inStock}
              className={`w-full py-4 text-sm tracking-[0.15em] uppercase cursor-pointer rounded-full font-sans transition-all duration-200 flex items-center justify-center gap-3
                ${product.inStock 
                  ? 'bg-[#1A1A1A] text-[#FAF8F4] hover:bg-[#8B6F47]' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              <span>📞</span>
              {product.inStock ? 'Contact Us to Buy' : 'Out of Stock'}
            </button>

            <p className="text-[10px] text-center text-[#8B7060] mt-4 font-sans">
              Contact our sales team for purchase inquiries, bulk orders, and customization options.
            </p>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 px-6 md:px-12 lg:px-16 border-t border-[#1A1A1A]/10">
        <div className="flex gap-8 border-b border-[#1A1A1A]/10 mb-8">
          {[
            { id: "details", label: "Product Details" },
            { id: "specs", label: "Specifications" },
            { id: "care", label: "Care Instructions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-sm font-sans tracking-wide transition-all duration-200
                ${activeTab === tab.id 
                  ? 'text-[#8B6F47] border-b-2 border-[#8B6F47]' 
                  : 'text-[#8B7060] hover:text-[#1A1A1A]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-4">
          {activeTab === "details" && product.features && (
            <div>
              <h3 className="text-lg font-bold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#5A4A3A] font-sans">
                    <span className="text-[#8B6F47]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {product.materials && (
                <>
                  <h3 className="text-lg font-bold mt-8 mb-4">Materials</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.materials.map((material, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-[#5A4A3A] font-sans">
                        <span className="text-[#8B6F47]">•</span>
                        {material}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Product Specifications</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-[#1A1A1A]/10">
                    <tr className="py-3">
                      <td className="py-2 text-sm font-sans font-bold">Category</td>
                      <td className="py-2 text-sm text-[#5A4A3A] font-sans">{product.category}</td>
                    </tr>
                    <tr className="py-3">
                      <td className="py-2 text-sm font-sans font-bold">SKU</td>
                      <td className="py-2 text-sm text-[#5A4A3A] font-sans">AD-{product.id.toString().padStart(4, '0')}</td>
                    </tr>
                    <tr className="py-3">
                      <td className="py-2 text-sm font-sans font-bold">Availability</td>
                      <td className="py-2 text-sm text-[#5A4A3A] font-sans">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </td>
                    </tr>
                    <tr className="py-3">
                      <td className="py-2 text-sm font-sans font-bold">Origin</td>
                      <td className="py-2 text-sm text-[#5A4A3A] font-sans">Galle, Sri Lanka</td>
                    </tr>
                    <tr className="py-3">
                      <td className="py-2 text-sm font-sans font-bold">Craftsmanship</td>
                      <td className="py-2 text-sm text-[#5A4A3A] font-sans">100% Handcrafted</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Sizing Information</h3>
                <p className="text-sm text-[#5A4A3A] font-sans mb-4">
                  Available sizes: {product.sizes.join(", ")}
                </p>
                <div className="bg-[#F4F0E8] rounded-xl p-4">
                  <p className="text-xs text-[#8B6F47] font-sans mb-2">💡 Sizing Tip</p>
                  <p className="text-xs text-[#5A4A3A] font-sans">
                    These shoes fit true to size. If you're between sizes, we recommend 
                    sizing up for the most comfortable fit. Contact us for detailed size guidance.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "care" && product.careInstructions && (
            <div>
              <h3 className="text-lg font-bold mb-4">How to Care for Your {product.name}</h3>
              <ul className="space-y-3">
                {product.careInstructions.map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#8B6F47] text-lg">•</span>
                    <span className="text-sm text-[#5A4A3A] font-sans">{instruction}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-[#F4F0E8] rounded-xl p-4">
                <p className="text-xs text-[#8B6F47] font-sans mb-2">🛡️ Warranty Information</p>
                <p className="text-xs text-[#5A4A3A] font-sans">
                  All Adithya shoes come with a 2-year warranty against manufacturing defects. 
                  Contact our support team for warranty claims.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Handcrafted in Galle Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-[#1A3A2E] text-white mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="text-6xl mb-4">🇱🇰</div>
            <h2 className="text-3xl md:text-4xl font-normal mb-4">
              Handcrafted in <em className="italic text-[#C8A87A]">Galle, Sri Lanka</em>
            </h2>
            <p className="text-base text-white/70 mb-6 font-sans">
              Every pair of Adithya shoes is meticulously handcrafted by master artisans 
              in the historic city of Galle. We take pride in supporting local communities 
              and preserving traditional craftsmanship.
            </p>
            <div className="flex gap-6 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-[#C8A87A]">50+</p>
                <p className="text-[10px] text-white/50 font-sans">Master Artisans</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#C8A87A]">7+</p>
                <p className="text-[10px] text-white/50 font-sans">Years of Excellence</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#C8A87A]">100%</p>
                <p className="text-[10px] text-white/50 font-sans">Handcrafted</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl mb-3">🏰</div>
            <p className="text-sm italic text-[#C8A87A] mb-2">
              "Every stitch carries the spirit of Galle"
            </p>
            <p className="text-xs text-white/50 font-sans">— Our Master Artisans</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-[#F4F0E8]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">📞</div>
          <h2 className="text-2xl md:text-3xl font-normal mb-4">
            Ready to Purchase This Product?
          </h2>
          <p className="text-base text-[#5A4A3A] mb-8 font-sans">
            Contact our sales team for pricing, bulk orders, or customization requests. 
            We typically respond within 2-4 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactToBuy}
              className="bg-[#1A1A1A] text-white px-8 py-3 text-xs tracking-[0.15em] uppercase rounded-full font-sans hover:bg-[#8B6F47] transition-all duration-200"
            >
              Contact Sales →
            </button>
            <button
              onClick={() => navigate("/products")}
              className="bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/30 px-8 py-3 text-xs tracking-[0.15em] uppercase rounded-full font-sans hover:border-[#8B6F47] hover:text-[#8B6F47] transition-all duration-200"
            >
              Browse More Products
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease;
        }
        .border-l-3 {
          border-left-width: 3px;
        }
      `}</style>
    </div>
  );
}