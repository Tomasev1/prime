import { Link } from 'react-router-dom';
import { Bug, Shield, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'roaches',
      title: 'Roach Control',
      description: 'Comprehensive treatment plans to eliminate roach infestations and prevent them from returning. We target nesting areas and entry points.',
      icon: <img src="/icons/roach.svg" alt="Roach" className="h-8 w-8" />
    },
    {
      id: 'bedbugs',
      title: 'Bed Bug Treatments',
      description: 'Specialized, thorough treatments to eradicate bed bugs from your home, ensuring you can sleep peacefully again.',
      icon: <img src="/icons/bedbug.svg" alt="Bed Bug" className="h-8 w-8" />
    },
    {
      id: 'spiders',
      title: 'Spider Control',
      description: 'Targeted removal of common house spiders and dangerous species like Black Widows and Brown Recluses.',
      icon: <img src="/icons/spider.svg" alt="Spider" className="h-8 w-8" />
    },
    {
      id: 'scorpions',
      title: 'Scorpion Removal',
      description: 'West Texas is home to scorpions. We provide specialized treatments to keep these stinging pests out of your living spaces.',
      icon: <img src="/icons/scorpion.svg" alt="Scorpion" className="h-8 w-8" />
    },
    {
      id: 'termites',
      title: 'Termite Control (WDI)',
      description: 'Certified Wood Destroying Insect inspections and treatments to protect your home\'s structural integrity.',
      icon: <img src="/icons/termite.svg" alt="Termite" className="h-8 w-8" />
    },
    {
      id: 'rodents',
      title: 'Rodent Removal',
      description: 'Safe trapping, removal, and exclusion services for mice and rats to protect your family from disease and property damage.',
      icon: <img src="/icons/rodent.svg" alt="Rodent" className="h-8 w-8" />
    },
    {
      id: 'fleas-ticks',
      title: 'Fleas & Ticks',
      description: 'Protect your pets and family with our comprehensive yard and interior treatments for fleas and ticks.',
      icon: <img src="/icons/flea.svg" alt="Flea" className="h-8 w-8" />
    },
    {
      id: 'lawn',
      title: 'Lawn & Ornamental',
      description: 'Certified treatments to keep your yard healthy and free from destructive outdoor pests.',
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Pc.png" 
            alt="Pest Control Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300 font-sans mb-4">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Pest control</h1>
          <p className="text-xl text-gray-300 font-sans max-w-2xl">
            Comprehensive pest control solutions tailored for Lubbock homeowners. From routine prevention to targeted extermination.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">What We Treat</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Targeted Pest Solutions</h3>
            <p className="text-gray-600 font-sans text-lg">
              Prime Pest Control is equipped to handle a wide variety of pests common to West Texas. We use safe, effective methods to protect your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-[#e0f6ff] rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="font-heading font-bold text-xl mb-3 text-secondary">{service.title}</h4>
                <p className="font-sans text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary font-semibold font-sans text-sm hover:text-primary-dark transition-colors">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Pests */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Don't see your pest listed?</h3>
              <p className="font-sans text-gray-300 mb-6">
                We also treat Centipedes, Snakes, Dermestidae Beetles, Ground Beetles, and more. If it's bugging you, we can handle it.
              </p>
              <ul className="grid grid-cols-2 gap-3 font-sans text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Centipedes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Snakes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Beetles</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Ants</li>
              </ul>
            </div>
            <div className="shrink-0">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
