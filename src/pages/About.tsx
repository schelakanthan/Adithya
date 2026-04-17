import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Heart, 
  Award, 
  Users, 
  MapPin, 
  Clock, 
  Mail, 
  Phone,
  ChevronRight,
  Star,
  Truck,
  RefreshCw,

  Leaf,
  Briefcase,
  Globe,
  Quote
} from 'lucide-react';

// Import images (same as homepage - adjust paths as needed)
import et from "./im/sd.jpg";
import a from "./im/7.jpeg";
import b from "./im/5.jpeg";
import c from "./im/10.jpeg";
// ============================================
// TYPES
// ============================================
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: { icon: React.ReactNode; url: string }[];
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

// ============================================
// DATA
// ============================================
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Adithya Samarawickrama",
    role: "Founder & Creative Director",
    bio: "With over 15 years in footwear design, Adithya founded the brand with a vision to bring world-class craftsmanship to Sri Lanka.",
    image: b,
  
  },
  {
    id: 2,
    name: "Priyani Fernando",
    role: "Master Craftsman",
    bio: "Priyani leads our production team with 25+ years of experience in traditional leather crafting techniques.",
    image: a,
  },
  {
    id: 3,
    name: "Nuwan Perera",
    role: "Head of Design",
    bio: "Nuwan brings contemporary aesthetics to our collections, blending global trends with local sensibilities.",
    image: c,
  },
];

const milestones: Milestone[] = [
  { year: "2018", title: "The Beginning", description: "Adithya Shoes started as a small family workshop in Colombo, crafting 10 pairs per week." },
  { year: "2019", title: "First Store", description: "Opened our flagship store in Colombo 7, introducing premium footwear to local customers." },
  { year: "2021", title: "Digital Launch", description: "Launched our online store, reaching customers across all 25 districts of Sri Lanka." },
  { year: "2023", title: "International Recognition", description: "Featured in 'Asia's Best Footwear Brands' and expanded our collection to 200+ designs." },
  { year: "2024", title: "Sustainable Future", description: "Committed to eco-friendly materials and carbon-neutral shipping." },
];

const values = [
  { icon: Heart, title: "Passion for Craft", description: "Every stitch tells a story of dedication and love for shoemaking." },
  { icon: Shield, title: "Uncompromising Quality", description: "We use only the finest materials and rigorous quality checks." },
  { icon: Users, title: "Customer First", description: "Your comfort and satisfaction drive everything we do." },
  { icon: Leaf, title: "Sustainable Practices", description: "Committed to reducing our environmental footprint." },
];

const stats = [
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "200+", label: "Unique Designs", icon: Briefcase },
  { value: "5+", label: "Years of Excellence", icon: Award },
  { value: "100%", label: "Sri Lankan Made", icon: Globe },
];

// ============================================
// ANIMATION COMPONENTS
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

// Counter Animation Component
const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// ============================================
// SECTION COMPONENTS
// ============================================

const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-stone-50 overflow-hidden">
    
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-6 animate-pulse">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Crafted with{' '}
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Passion
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            From a small workshop in Colombo to a trusted name in Sri Lankan footwear — 
            our journey is woven with dedication, quality, and love for the craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg">
              Our Collection
            </button>
            <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-full font-medium hover:bg-amber-50 transition-all">
              Contact Us
            </button>
          </div>
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

// Story Section with Timeline
const StorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeInUp>
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              From Humble Beginnings <br />to National Pride
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Adithya Shoes was born in 2018 from a simple belief — that every Sri Lankan deserves 
              access to premium quality footwear without the exorbitant price tag. What started as 
              a family-run workshop with just three artisans has grown into a beloved brand across the island.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our founder, Adithya Samarawickrama, learned the art of shoemaking from his grandfather, 
              who was a master cobbler in Galle. That generational wisdom, combined with modern design 
              sensibilities, defines every pair we create today.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today, we employ over 50 local artisans, support sustainable practices, and have brought 
              our designs to thousands of feet across Sri Lanka and beyond. Yet, our mission remains unchanged — 
              to craft shoes that inspire confidence, comfort, and pride.
            </p>
            
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-sm text-gray-600">100% Sri Lankan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-sm text-gray-600">Handcrafted Quality</span>
              </div>
            </div>
          </FadeInUp>
          
          {/* Right Image with floating effect */}
          <ScaleIn>
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={et}
                  alt="Adithya Shoes craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-50 rounded-full -z-10"></div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

// Timeline / Milestones Section
const MilestonesSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Milestones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Every step of our journey has been shaped by dedication and the support of our customers.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-amber-200 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, idx) => (
              <FadeInUp key={idx} delay={idx * 150}>
                <div className={`relative md:flex md:items-center md:gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-3xl font-bold text-amber-600">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-12 justify-center relative z-10">
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Counter Section
const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <FadeInUp key={idx} delay={idx * 100}>
              <div className="transform transition-all duration-300 hover:scale-110">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold">
                  <Counter target={parseInt(stat.value.replace(/[^0-9]/g, ''))} suffix={stat.value.replace(/[0-9]/g, '')} />
                </div>
                <div className="text-sm opacity-90 mt-2">{stat.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Core Values</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Drives Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            These principles guide every decision we make and every shoe we create.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <ScaleIn key={idx} delay={idx * 100}>
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-all duration-300 transform group-hover:scale-110">
                  <value.icon className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">The Faces Behind</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Passionate artisans, designers, and dreamers who bring Adithya Shoes to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <FadeInUp key={member.id} delay={idx * 150}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{member.bio}</p>
                  {member.socials && (
                    <div className="flex justify-center gap-3 mt-4">
                      {member.socials.map((social, i) => (
                        <a key={i} href={social.url} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Section (matching homepage style)
const TestimonialSection: React.FC = () => {
  const testimonials = [
    { id: 1, name: "Kasun Perera", location: "Colombo", text: "Adithya Shoes represents the best of Sri Lankan craftsmanship. Proud to support local.", rating: 5 },
    { id: 2, name: "Shanali Fernando", location: "Kandy", text: "The attention to detail is incredible. You can feel the passion in every pair.", rating: 5 },
    { id: 3, name: "Dinesh Rajapaksha", location: "Galle", text: "Finally, a Sri Lankan brand that competes with international standards. Highly recommend!", rating: 5 },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <ScaleIn key={testimonial.id} delay={idx * 100}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <Quote className="w-8 h-8 text-amber-300 mb-4" />
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact/Store Info Section
const ContactInfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeInUp delay={0}>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-500">No. 123, Galle Road,<br />Colombo 03, Sri Lanka</p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-500">+94 11 234 5678<br />hello@adithyashoes.lk</p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
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
        <h2 className="text-3xl font-bold mb-2">Join Our Journey</h2>
        <p className="text-gray-300 mb-6">Contact for updates on new collections and exclusive offers.</p>
     
        {subscribed && (
          <p className="mt-4 text-green-400 text-sm animate-in fade-in">Thanks for subscribing!</p>
        )}
      </div>
    </section>
  );
};

// Footer
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
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Our Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Shipping</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Returns</a></li>
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
// MAIN ABOUT US PAGE COMPONENT
// ============================================
const AdithyaAboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <StorySection />
      <StatsSection />
      <MilestonesSection />
      <ValuesSection />
      <TeamSection />
      <TestimonialSection />
      <ContactInfoSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default AdithyaAboutPage;