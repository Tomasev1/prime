import { useParams, Link, Navigate } from 'react-router-dom';
import { Shield, CheckCircle2, MapPin, Phone, ChevronRight, Bug, Home as HomeIcon } from 'lucide-react';
import React, { useState } from 'react';

const areaData: Record<string, any> = {
  'lubbock': {
    name: 'Lubbock',
    heroImage: '/images/area.webp',
    description: 'Comprehensive pest control services for homes and businesses across the Hub City. We protect Lubbock from roaches, termites, spiders, and more.',
    commonPests: ['Roaches', 'Termites', 'Scorpions', 'Spiders', 'Rodents'],
    content: 'As the Hub City of West Texas, Lubbock experiences a unique climate that attracts a wide variety of pests year-round. From the hot, dry summers that drive scorpions and spiders indoors to the cooler winters that send rodents seeking shelter, Lubbock homeowners need reliable, year-round pest protection. Prime Pest Control is deeply familiar with the specific pest pressures in Lubbock. We offer targeted treatments for everything from German cockroaches in kitchens to subterranean termites threatening the structural integrity of your home. Our local expertise ensures that we don\'t just treat the symptoms; we eliminate the source of the infestation and implement preventative measures to keep your Lubbock property pest-free.'
  },
  'wolfforth': {
    name: 'Wolfforth',
    heroImage: '/images/area.webp',
    description: 'Protecting Wolfforth families from West Texas pests with reliable, safe, and effective extermination treatments.',
    commonPests: ['Ants', 'Spiders', 'Rodents', 'Wasps', 'Termites'],
    content: 'Wolfforth is a growing community, and with new construction and expanding neighborhoods comes an increase in pest activity. As homes are built and soil is disturbed, pests like ants, spiders, and rodents often seek refuge in nearby established homes. Prime Pest Control provides Wolfforth residents with proactive pest management solutions. We understand that Wolfforth families prioritize safety, which is why we utilize family-friendly and pet-safe treatment methods. Whether you are dealing with a sudden wasp nest on your patio or a persistent ant problem in your kitchen, our technicians respond quickly and effectively to restore the comfort and safety of your Wolfforth home.'
  },
  'shallowater': {
    name: 'Shallowater',
    heroImage: '/images/area.webp',
    description: 'Expert extermination services tailored for the Shallowater community, focusing on long-term prevention and immediate relief.',
    commonPests: ['Mosquitoes', 'Fleas & Ticks', 'Roaches', 'Spiders', 'Mice'],
    content: 'In Shallowater, the blend of residential areas and surrounding agricultural land creates a unique environment for pests. Field mice, spiders, and seasonal pests like mosquitoes and fleas can quickly become a nuisance for homeowners. Prime Pest Control offers specialized services tailored to the Shallowater area. We focus on creating a strong perimeter defense around your property to stop pests before they enter your home. Our comprehensive lawn and ornamental treatments also help control outdoor pests, allowing you to enjoy your Shallowater yard without the constant annoyance of mosquitoes or the worry of ticks.'
  },
  'idalou': {
    name: 'Idalou',
    heroImage: '/images/area.webp',
    description: 'Keeping Idalou properties safe from termites, rodents, and insects with our trusted, local pest control expertise.',
    commonPests: ['Termites', 'Rodents', 'Ants', 'Spiders', 'Roaches'],
    content: 'Idalou\'s close-knit community deserves pest control they can trust. Older homes in the area may be particularly susceptible to termite damage and rodent intrusions, while newer builds face their own set of pest challenges. Prime Pest Control provides thorough inspections and customized treatment plans for Idalou residents. We specialize in Wood Destroying Insect (WDI) reports and comprehensive termite treatments to protect your most valuable investment. Our rodent exclusion services are also highly effective at sealing entry points and keeping mice and rats out of your Idalou home during the colder months.'
  },
  'slaton': {
    name: 'Slaton',
    heroImage: '/images/area.webp',
    description: 'Trusted pest management solutions for residents and businesses in Slaton, ensuring a clean and safe environment.',
    commonPests: ['Roaches', 'Bed Bugs', 'Spiders', 'Ants', 'Rodents'],
    content: 'Slaton residents face a variety of pest issues, from common household ants and roaches to more severe infestations like bed bugs. Prime Pest Control is committed to providing Slaton with rapid, effective, and discreet pest management. We understand the distress a pest infestation can cause, which is why we prioritize quick response times and thorough eradication strategies. Our bed bug treatments are highly effective, utilizing advanced methods to eliminate all life stages of the pest. For Slaton businesses, we also offer commercial pest control services to ensure a clean, safe, and compliant environment for your customers and employees.'
  },
  'ransom-canyon': {
    name: 'Ransom Canyon',
    heroImage: '/images/area.webp',
    description: 'Specialized pest control for the unique landscape of Ransom Canyon, targeting scorpions, spiders, and wildlife.',
    commonPests: ['Scorpions', 'Spiders', 'Wasps', 'Ants', 'Rodents'],
    content: 'The beautiful, rugged terrain of Ransom Canyon brings its own specific pest challenges. The rocky landscape and proximity to water make it an ideal habitat for scorpions, various spider species (including Black Widows and Brown Recluses), and wasps. Prime Pest Control has extensive experience dealing with the unique pests of Ransom Canyon. We employ specialized barrier treatments that are highly effective against scorpions and spiders, keeping them out of your home. We also offer targeted solutions for stinging insects, ensuring your outdoor living spaces remain safe and enjoyable year-round.'
  },
  'levelland': {
    name: 'Levelland',
    heroImage: '/images/area.webp',
    description: 'Dedicated pest protection for Levelland and Hockley County properties, focusing on agricultural and residential pest challenges.',
    commonPests: ['Termites', 'Roaches', 'Rodents', 'Spiders', 'Fleas'],
    content: 'As the county seat of Hockley County, Levelland\'s strong agricultural roots mean homes and businesses often face pest pressures from surrounding farmland. Field mice, spiders, and seasonal swarms of insects are common. Prime Pest Control provides Levelland residents with robust perimeter defenses and targeted interior treatments to keep agricultural pests out of residential and commercial spaces. We also offer proactive termite monitoring and treatment to protect the wood structures that give Levelland homes their unique character.'
  },
  'brownfield': {
    name: 'Brownfield',
    heroImage: '/images/area.webp',
    description: 'Premium pest control services preserving the beauty and comfort of homes in Brownfield and Terry County.',
    commonPests: ['Ants', 'Spiders', 'Mosquitoes', 'Wasps', 'Roaches'],
    content: 'Located in Terry County, the Grape Capital of Texas, Brownfield properties require specialized care to manage pests without disrupting the local environment. Ants, wasps, and rodents are frequent nuisances. We offer eco-friendly and highly effective pest management solutions tailored to Brownfield\'s unique agricultural and residential blend, ensuring your property remains safe and comfortable. Our lawn and ornamental treatments keep your landscaping looking its best while controlling outdoor pests.'
  },
  'plainview': {
    name: 'Plainview',
    heroImage: '/images/area.webp',
    description: 'Effective and discreet pest management for Plainview homes and businesses, ensuring a pristine and pest-free environment.',
    commonPests: ['Spiders', 'Scorpions', 'Termites', 'Rodents', 'Bed Bugs'],
    content: 'Plainview, the heart of Hale County, features a mix of historic homes and growing commercial sectors. Older structures are particularly vulnerable to termites and rodent intrusions, while businesses need reliable roach and bed bug prevention. Prime Pest Control delivers comprehensive, discreet, and highly effective pest control services across Plainview, protecting your investments and your health. Our preventative maintenance plans are designed to provide year-round peace of mind, ensuring that your Plainview home remains a pristine, pest-free sanctuary for you and your family.'
  },
  'abernathy': {
    name: 'Abernathy',
    heroImage: '/images/area.webp',
    description: 'Reliable extermination and prevention services for the Abernathy community.',
    commonPests: ['Scorpions', 'Spiders', 'Mice', 'Ants', 'Termites'],
    content: 'Situated on the border of Hale and Lubbock counties, Abernathy experiences the full range of West Texas pest challenges. From scorpions seeking shelter during hot summers to mice looking for warmth in the winter, Abernathy homeowners need year-round protection. Our local experts provide customized treatment plans that adapt to the seasonal pest pressures of the Abernathy area, focusing on exclusion techniques and preventative barriers.'
  },
  'new-deal': {
    name: 'New Deal',
    heroImage: '/images/area.webp',
    description: 'Keeping New Deal homes safe from West Texas insects and rodents with proactive pest management.',
    commonPests: ['Ants', 'Spiders', 'Rodents', 'Wasps', 'Roaches'],
    content: 'Just north of Lubbock, the quiet community of New Deal offers a peaceful rural lifestyle, but it\'s not immune to pest invasions. Spiders, ants, and occasional wildlife intrusions are common. Prime Pest Control provides New Deal residents with proactive pest management, focusing on exclusion techniques and preventative barriers to stop pests before they enter your home. We respond quickly and effectively to restore the comfort and safety of your New Deal property.'
  },
  'tahoka': {
    name: 'Tahoka',
    heroImage: '/images/area.webp',
    description: 'Comprehensive pest solutions for Tahoka and Lynn County residents.',
    commonPests: ['Termites', 'Roaches', 'Spiders', 'Ants', 'Rodents'],
    content: 'As the center of Lynn County, Tahoka\'s historic homes and agricultural surroundings create a prime environment for termites, roaches, and spiders. Protecting these properties requires deep local knowledge and specialized treatments. We offer Tahoka residents thorough WDI inspections, advanced termite control, and comprehensive general pest services to preserve the integrity and comfort of their homes.'
  }
};

export default function AreaDetail() {
  const { id } = useParams<{ id: string }>();
  const area = id ? areaData[id] : null;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!area) {
    return <Navigate to="/areas" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your request. We will contact you shortly with your free estimate.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={area.heroImage} 
            alt={`Pest Control in ${area.name}, TX`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-gray-300 font-sans mb-4">
              <Link to="/" className="text-primary hover:text-primary-light transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <Link to="/areas" className="text-primary hover:text-primary-light transition-colors">Areas We Serve</Link>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-white">{area.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Pest Control in {area.name}, TX
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-sans mb-10 leading-relaxed">
              {area.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#estimate-form" 
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:+18065550123" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Phone className="h-5 w-5" />
                (806) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Content Left */}
            <div>
              <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">Local Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Why Choose Prime Pest Control in {area.name}?
              </h3>
              
              <div className="prose prose-lg text-gray-600 font-sans mb-10">
                <p className="mb-6 leading-relaxed">
                  {area.content}
                </p>
                <p className="leading-relaxed">
                  When you choose Prime Pest Control, you're choosing a local company that understands the specific environmental factors driving pest activity in {area.name}. We don't use a one-size-fits-all approach; we customize our treatments to your specific property and pest pressures.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-10">
                <h4 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" />
                  Common Pests in {area.name}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.commonPests.map((pest: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 font-sans">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{pest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-[#e0f6ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-secondary mb-1">Guaranteed Results</h4>
                    <p className="text-gray-600 font-sans">If pests return between scheduled treatments, we'll re-treat your {area.name} home at no additional cost.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-[#e0f6ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-secondary mb-1">Safe for Your Family</h4>
                    <p className="text-gray-600 font-sans">We use eco-friendly, pet-safe, and child-safe products to protect what matters most.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div id="estimate-form" className="bg-secondary text-white rounded-2xl p-8 md:p-10 shadow-xl h-fit sticky top-28">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Get a Free Estimate</h3>
              <p className="text-gray-300 font-sans mb-8">
                Fill out the form below and our {area.name} pest experts will contact you shortly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 font-sans transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 font-sans transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 font-sans transition-all"
                    placeholder="(806) 555-0123"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-sans">
                    How can we help you in {area.name}?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 font-sans resize-none transition-all"
                    placeholder="Tell us about the pest issues you're experiencing..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
