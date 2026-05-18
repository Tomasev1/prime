import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Areas() {
  const areas = [
    { id: 'lubbock', name: 'Lubbock', description: 'Comprehensive pest control for homes and businesses across the Hub City.' },
    { id: 'wolfforth', name: 'Wolfforth', description: 'Protecting Wolfforth families from West Texas pests with reliable treatments.' },
    { id: 'shallowater', name: 'Shallowater', description: 'Expert extermination services tailored for the Shallowater community.' },
    { id: 'idalou', name: 'Idalou', description: 'Keeping Idalou properties safe from termites, rodents, and insects.' },
    { id: 'slaton', name: 'Slaton', description: 'Trusted pest management solutions for residents and businesses in Slaton.' },
    { id: 'ransom-canyon', name: 'Ransom Canyon', description: 'Specialized pest control for the unique landscape of Ransom Canyon.' },
    { id: 'levelland', name: 'Levelland', description: 'Dedicated pest protection for Levelland and Hockley County properties.' },
    { id: 'brownfield', name: 'Brownfield', description: 'Premium pest control services for Brownfield and Terry County.' },
    { id: 'plainview', name: 'Plainview', description: 'Effective and discreet pest management for Plainview homes and businesses.' },
    { id: 'abernathy', name: 'Abernathy', description: 'Reliable extermination and prevention services for the Abernathy community.' },
    { id: 'new-deal', name: 'New Deal', description: 'Keeping New Deal homes safe from West Texas insects and rodents.' },
    { id: 'tahoka', name: 'Tahoka', description: 'Comprehensive pest solutions for Tahoka and Lynn County residents.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hood.png" 
            alt="Areas We Serve in Lubbock TX" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300 font-sans mb-4">
            <Link to="/" className="text-primary hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <span className="text-white">Areas We Serve</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Areas We Serve</h1>
          <p className="text-xl text-gray-300 font-sans max-w-2xl">
            Prime Pest Control provides top-rated extermination and pest prevention services across Lubbock County and surrounding communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">Local Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Serving West Texas Communities</h3>
            <p className="text-gray-600 font-sans text-lg">
              We understand the unique pest challenges of our region. Whether you're dealing with scorpions in Ransom Canyon or roaches in Tech Terrace, our local experts are ready to protect your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link 
                key={area.id} 
                to={`/areas/${area.id}`}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col h-full"
              >
                <div className="h-12 w-12 bg-[#e0f6ff] rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {area.name}, TX
                </h4>
                <p className="text-gray-600 font-sans mb-6 flex-grow">
                  {area.description}
                </p>
                <div className="flex items-center text-primary font-semibold font-sans text-sm mt-auto">
                  <span>View Service Area</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Don't See Your Area Listed?</h2>
          <p className="text-xl text-gray-300 font-sans mb-10">
            We serve many more communities throughout the South Plains. Contact us today to see if we can help protect your home or business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors"
            >
              Contact Us Today
            </Link>
            <a 
              href="tel:+18065550123" 
              className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call (806) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
