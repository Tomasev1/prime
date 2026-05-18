import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, MapPin, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const googleReviews = [
  {
    id: 1,
    text: "Wallace is amazing! He came out the same day I called and took care of our ant problem. Very professional and knowledgeable. Highly recommend Prime Pest Control!",
    author: "Sarah T.",
    role: "Local Guide",
    initials: "ST"
  },
  {
    id: 2,
    text: "Best pest control service in Lubbock. Wallace explained everything he was doing and gave us great tips to prevent future issues. Haven't seen a bug since!",
    author: "John D.",
    role: "Lubbock Resident",
    initials: "JD"
  },
  {
    id: 3,
    text: "We've used several pest control companies over the years, but Wallace and the team at Prime are in a league of their own. His reliability and genuine care for our home's safety made us customers for life.",
    author: "Michael R.",
    role: "Lubbock Homeowner",
    initials: "MR"
  },
  {
    id: 4,
    text: "Prompt, courteous, and extremely effective. Prime Pest Control handled our termite inspection and treatment flawlessly. Great local business!",
    author: "Emily W.",
    role: "Local Guide",
    initials: "EW"
  }
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  return (
    <div 
      className="bg-[#F5F4F0] p-8 rounded-2xl border-l-4 border-primary relative overflow-hidden h-[320px] sm:h-[280px] flex flex-col justify-center shadow-sm group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
      
      {googleReviews.map((review, index) => (
        <div 
          key={review.id}
          className={`absolute inset-0 p-8 flex flex-col justify-center transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="font-sans text-gray-700 text-lg italic mb-6 relative z-10 line-clamp-4">
            "{review.text}"
          </p>
          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-heading font-bold shrink-0">
              {review.initials}
            </div>
            <div>
              <p className="font-heading font-bold text-secondary">{review.author}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3 object-contain" referrerPolicy="no-referrer" />
                <span className="font-sans text-xs text-gray-500">Review</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={prevSlide}
          className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-secondary hover:text-primary transition-colors pointer-events-auto"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-secondary hover:text-primary transition-colors pointer-events-auto"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.png "
            alt="Pest Control Professional" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300 font-sans mb-4">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 font-sans max-w-2xl">
            Unmatched Expertise. Learn about our commitment to protecting Lubbock homes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Prime Pest Control</h3>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
                Prime Pest Control is a locally owned and operated pest management company serving Lubbock, Texas, and the surrounding areas. We are dedicated to providing top-tier, reliable pest control services to our community.
              </p>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
                Wallace, our founder and lead technician, brings over a decade of hands-on experience and specialized knowledge to every job. Born and raised in West Texas, he understands firsthand the unique environmental challenges and aggressive pest species that homeowners face in this region. After years of working for large, impersonal corporate pest control companies, Wallace founded Prime Pest Control with a simple mission: to provide honest, effective, and highly personalized service that treats every customer like a neighbor.
              </p>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8">
                He holds a certified applicator license in General Pest, Wood Destroying Insects (WDI), and Lawn and Ornamental treatments. This comprehensive certification means you're getting expert care tailored to protect your entire property—from the foundation of your home to the edges of your lawn.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary">Certified Applicator</h4>
                    <p className="font-sans text-gray-600">Licensed in General Pest, WDI, and Lawn & Ornamental.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary">Local Experts</h4>
                    <p className="font-sans text-gray-600">Deep understanding of Lubbock's unique pest environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary">Guaranteed Protection</h4>
                    <p className="font-sans text-gray-600">We stand behind our work to ensure your home stays pest-free.</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors"
              >
                Contact Wallace Today
              </Link>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-2xl"></div>
                <img 
                  src="/images/pc_prime_about.png " 
                  alt="Pest Control Technician" 
                  className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-center gap-4 mb-2">
                    <Award className="h-8 w-8 text-primary" />
                    <h4 className="font-heading font-bold text-xl text-secondary">Licensed & Certified</h4>
                  </div>
                  <p className="font-sans text-gray-600 text-sm">State certified for residential and commercial pest management.</p>
                </div>
              </div>

              {/* Testimonial Slider */}
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Trust Prime for Your Pest Control Needs</h2>
          <p className="text-xl text-gray-600 font-sans mb-10">
            Whether you're dealing with a sudden infestation or looking for preventative care, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/services" 
              className="inline-flex justify-center items-center bg-secondary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg"
            >
              Explore Pest control
            </Link>
            <a 
              href="tel:+18065550123" 
              className="inline-flex justify-center items-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-[#e0f6ff] transition-colors"
            >
              Call (806) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
