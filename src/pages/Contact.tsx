import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  CheckCircle,
  Navigation,
  Car,
  Coffee,
  Star,
  ChevronRight
} from 'lucide-react';

// Import image (adjust path as needed)
import et from "./im/r.webp";

// ============================================
// TYPES
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

// ============================================
// DATA
// ============================================
const faqs: FAQItem[] = [
  {
    question: "What are your store hours?",
    answer: "Our Galle store is open Monday to Saturday from 9:00 AM to 7:00 PM. We're closed on Sundays and Poya days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide! International shipping typically takes 7-14 business days. Shipping costs vary by destination."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can track your package on our website under 'Order Tracking'."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in original condition. Visit our Galle store or contact us to initiate a return."
  },
  {
    question: "Do you offer custom sizing?",
    answer: "Yes, we offer custom sizing for select styles. Please visit our Galle store for a professional fitting and consultation."
  }
];

// ============================================
// ANIMATION COMPONENTS
// ============================================

// Fade In Up Animation
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

// ============================================
// HERO SECTION
// ============================================
const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-stone-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-6 animate-pulse">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Visit our flagship store in the historic city of Galle, or reach out to us online. 
            We're always here to help with your footwear needs.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONTACT INFO CARDS
// ============================================
const ContactInfoCards: React.FC = () => {
  const contactPoints = [
    { 
      icon: MapPin, 
      title: "Visit Our Main Store", 
      details: ["No. 45, Lighthouse Street", "Galle Fort, Galle 80000", "Sri Lanka"],
      highlight: "📍 Located inside Galle Fort"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      details: ["+94 91 222 3456", "+94 77 123 4567"],
      highlight: "Mon-Sat, 9AM - 7PM"
    },
    { 
      icon: Mail, 
      title: "Email Us", 
      details: ["hello@adithyashoes.lk", "support@adithyashoes.lk"],
      highlight: "We reply within 24 hours"
    },
    { 
      icon: Clock, 
      title: "Store Hours", 
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: Closed", "Poya Days: Closed"],
      highlight: "Open 6 days a week"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactPoints.map((point, idx) => (
            <FadeInUp key={idx} delay={idx * 100}>
              <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                  <point.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <div className="space-y-1 mb-3">
                  {point.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <span className="inline-block text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">
                  {point.highlight}
                </span>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// GOOGLE MAPS SECTION (Galle Fort)
// ============================================
const MapSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Visit Us in <span className="text-amber-600">Galle Fort</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our flagship store is located in the heart of Galle Fort, a UNESCO World Heritage site. 
              Surrounded by colonial architecture and ocean breezes, we've created a shopping experience 
              that reflects the beauty and heritage of Sri Lanka.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Getting Here</p>
                  <p className="text-sm text-gray-500">Located near the famous Lighthouse, just a 2-minute walk from the Galle Fort Main Gate.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Parking Available</p>
                  <p className="text-sm text-gray-500">Free parking available at the store entrance for customers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Nearby Landmarks</p>
                  <p className="text-sm text-gray-500">Close to Galle Lighthouse, Dutch Church, and Amangalla Hotel.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=Galle+Fort+Sri+Lanka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all transform hover:scale-105"
            >
              Get Directions
              <Navigation className="w-4 h-4" />
            </a>
          </FadeInUp>
          
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.851213110598!2d80.21534021476916!3d6.025932295593838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1738a3f2b1b8b%3A0x8b7b8b8b8b8b8b8b!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adithya Shoes Galle Fort Location"
                className="rounded-2xl"
              ></iframe>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

// ============================================
// STORE EXPERIENCE SECTION (Replaces Form)
// ============================================
const StoreExperienceSection: React.FC = () => {
  const storeHighlights = [
    {
      icon: Star,
      title: "Premium Collection",
      description: "Experience our complete range of footwear in person, including exclusive in-store designs."
    },
    {
      icon: MessageCircle,
      title: "Expert Fitting",
      description: "Our trained staff provides professional fitting consultations for the perfect comfort."
    },
    {
      icon: Coffee,
      title: "Heritage Ambiance",
      description: "Shop in our beautifully restored colonial building within Galle Fort's historic walls."
    },
    {
      icon: Star,
      title: "Loyalty Rewards",
      description: "In-store customers enjoy exclusive discounts and loyalty program benefits."
    }
  ];

  const testimonials = [
    {
      name: "Maria Fernando",
      location: "Galle",
      text: "The staff at the Galle store were incredibly helpful! Found the perfect pair for my wedding.",
      rating: 5
    },
    {
      name: "David Perera",
      location: "Colombo",
      text: "Worth the trip to Galle! The store experience is amazing and the quality is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      location: "UK (Tourist)",
      text: "Discovered this gem while visiting Galle Fort. Brought home 3 pairs as souvenirs!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Visit Our Store</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Experience Adithya in <span className="text-amber-600">Galle Fort</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Step into our flagship store and discover why customers travel from across the island 
            to experience our collection in person.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Store Info & Highlights */}
          <div>
            {/* Store Image with Badge */}
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={et} 
                alt="Adithya Shoes Galle Store" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-semibold bg-amber-600 inline-block px-3 py-1 rounded-full mb-2">
                    ✨ Flagship Store
                  </p>
                  <p className="text-lg font-bold">No. 45, Lighthouse Street, Galle Fort</p>
                </div>
              </div>
            </div>

            {/* Store Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {storeHighlights.map((highlight, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <highlight.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{highlight.title}</h3>
                  <p className="text-xs text-gray-500">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Virtual Tour Button */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-5 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Can't Visit in Person?</h3>
              <p className="text-sm text-gray-600 mb-3">Take a virtual tour of our Galle Fort store from anywhere in the world.</p>
              <button className="px-5 py-2 bg-amber-600 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-all inline-flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Virtual Store Tour
              </button>
            </div>
          </div>

          {/* Right Column - Testimonials & Quick Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                Customer Love from Galle
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-2">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Ways to Reach Us</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">Call the Store</span>
                  </div>
                  <span className="text-sm font-medium text-amber-600">+94 91 222 3456</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">WhatsApp Us</span>
                  </div>
                  <span className="text-sm font-medium text-amber-600">+94 77 123 4567</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">Store Hours</span>
                  </div>
                  <span className="text-sm font-medium text-amber-600">Mon-Sat: 9AM-7PM</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fastest Response on WhatsApp</p>
                    <p className="text-sm text-gray-600">Click to chat with our customer service team</p>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition">
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Location Map Preview */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Located in Historic Galle Fort</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our store is situated in the heart of Galle Fort, a UNESCO World Heritage site. 
                Enjoy the colonial architecture and ocean breeze while shopping for your perfect pair.
              </p>
              <div className="flex gap-3">
                <button className="text-sm text-amber-600 font-medium hover:text-amber-700 flex items-center gap-1">
                  Get Directions <Navigation className="w-3 h-3" />
                </button>
                <button className="text-sm text-amber-600 font-medium hover:text-amber-700 flex items-center gap-1">
                  View on Maps <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FAQ SECTION
// ============================================
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Find quick answers to common questions about our products and services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeInUp key={idx} delay={idx * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`text-amber-600 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// SOCIAL CONNECT SECTION
// ============================================
const SocialConnectSection: React.FC = () => {
  const socialLinks = [
    { icon: "📷", name: "Instagram", handle: "@adithyashoes", url: "#", color: "hover:bg-gradient-to-tr from-purple-600 to-pink-500" },
    { icon: "📘", name: "Facebook", handle: "Adithya Shoes", url: "#", color: "hover:bg-blue-700" },
    { icon: "🐦", name: "Twitter", handle: "@adithyashoes", url: "#", color: "hover:bg-blue-500" },
    { icon: "▶️", name: "YouTube", handle: "Adithya Shoes", url: "#", color: "hover:bg-red-600" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Follow Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Connect on Social Media</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Stay updated with our latest collections, behind-the-scenes content, and exclusive offers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social, idx) => (
            <ScaleIn key={idx} delay={idx * 100}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${social.color}`}>
                  <span className="text-3xl">{social.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">{social.name}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{social.handle}</p>
              </a>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// NEWSLETTER SECTION
// ============================================
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
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Stay in Touch</h2>
        <p className="text-gray-300 mb-6">Subscribe to get updates on new arrivals and special offers.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button type="submit" className="px-6 py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition transform hover:scale-105">
            Subscribe
          </button>
        </form>
        {subscribed && (
          <p className="mt-4 text-green-400 text-sm animate-in fade-in">Thanks for subscribing!</p>
        )}
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">ADITHYA</span>
              <span className="ml-1 text-xs text-gray-400">SHOES</span>
            </div>
            <p className="text-gray-400 text-sm">Crafted in Sri Lanka, worn worldwide. Premium footwear with Sri Lankan soul.</p>
            <p className="text-gray-500 text-xs mt-3">📍 Galle Fort, Sri Lanka</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Our Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Returns Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Privacy Policy</a></li>
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
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">© 2024 Adithya Shoes. All rights reserved. | Proudly based in Galle, Sri Lanka</div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN CONTACT PAGE COMPONENT
// ============================================
const AdithyaContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfoCards />
      <MapSection />
      <StoreExperienceSection />
      <FAQSection />
      <SocialConnectSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default AdithyaContactPage;