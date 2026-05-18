import { Link } from 'react-router-dom';
import { ShieldCheck, Bug, Home as HomeIcon, ArrowRight, Star, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pc_truck.png" 
            alt="Lubbock Texas Neighborhood" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#217953]/20 border border-[#217953]/30 text-[#217953] mb-6 font-sans text-sm font-semibold tracking-wide">
              <ShieldCheck className="h-4 w-4" />
              <span>Lubbock's Trusted Pest Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Protect Your Home from Unwanted Pests
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-sans mb-10 leading-relaxed">
              Prime Pest Control provides professional, reliable termite control, rodent removal, and general pest prevention for homeowners in Lubbock, Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                View Pest control
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-24 bg-[#e0f6ff] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Header + Video */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-4">Why Choose Us</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary leading-tight">
                  The Prime Difference
                </h3>
                <p className="text-gray-600 font-sans text-lg leading-relaxed">
                  We don't just spray and pray. We use targeted, scientifically proven methods to protect your home and family from West Texas pests.
                </p>
              </div>

              <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden relative shadow-xl border border-gray-300 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
                  alt="Video Placeholder" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center transition-colors group-hover:bg-secondary/40">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 01, 02, 03 */}
            <div className="flex flex-col gap-12">
              <div className="flex gap-6 items-start">
                <div className="text-6xl font-heading font-black text-primary/30 leading-none shrink-0">01</div>
                <div>
                  <h4 className="font-heading font-bold text-2xl mb-3 text-secondary">Certified Experts</h4>
                  <p className="font-sans text-gray-600 leading-relaxed text-lg">
                    Licensed in General Pest, Wood Destroying Insects, and Lawn & Ornamental treatments. We bring professional expertise to every job.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div className="flex gap-6 items-start">
                <div className="text-6xl font-heading font-black text-primary/30 leading-none shrink-0">02</div>
                <div>
                  <h4 className="font-heading font-bold text-2xl mb-3 text-secondary">Local to Lubbock</h4>
                  <p className="font-sans text-gray-600 leading-relaxed text-lg">
                    We understand the specific pest challenges homeowners face in West Texas. We live here, we work here, and we know how to protect your home.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div className="flex gap-6 items-start">
                <div className="text-6xl font-heading font-black text-primary/30 leading-none shrink-0">03</div>
                <div>
                  <h4 className="font-heading font-bold text-2xl mb-3 text-secondary">Comprehensive Care</h4>
                  <p className="font-sans text-gray-600 leading-relaxed text-lg">
                    From scorpions and spiders to rodents and bed bugs, we handle it all. One call solves all your pest problems, backed by our satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Complete Pest Solutions</h3>
            <p className="text-gray-600 font-sans text-lg">
              We offer targeted treatments and preventative plans to keep your home safe, clean, and pest-free year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Termite Control', desc: 'Protect your biggest investment from wood-destroying insects.' },
              { title: 'Rodent Removal', desc: 'Safe and effective trapping and exclusion for mice and rats.' },
              { title: 'General Pest Prevention', desc: 'Routine treatments for roaches, spiders, ants, and more.' },
              { title: 'Specialty Pests', desc: 'Targeted solutions for scorpions, bed bugs, and fleas.' }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-[#F5F4F0] p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <h4 className="font-heading font-bold text-xl mb-3 text-secondary group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="font-sans text-gray-600 mb-6">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-primary font-semibold font-sans text-sm hover:text-primary-dark">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-heading font-semibold hover:bg-primary-dark transition-colors">
              View All Pest control
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#e0f6ff] text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#000000]">What Our Neighbors Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Prime Pest Control is amazing! Wallace came out the same day we called about a scorpion problem. Haven\'t seen one since.' },
              { name: 'David T.', text: 'Professional, courteous, and very thorough. They handled our termite inspection and treatment perfectly. Highly recommend for Lubbock homeowners.' },
              { name: 'Jessica R.', text: 'We use them for our quarterly pest prevention. The peace of mind knowing our home is protected from spiders and roaches is priceless.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="font-sans text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-heading font-bold text-secondary">{testimonial.name}</p>
                <p className="font-sans text-sm text-gray-500">Lubbock, TX</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to Take Back Your Home?</h2>
          <p className="text-xl text-white/90 font-sans mb-10">
            Don't let pests take over. Contact Prime Pest Control today for a free inspection and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center bg-white text-primary px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule an Inspection
            </Link>
            <a 
              href="tel:+18065550123" 
              className="inline-flex justify-center items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call (806) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
