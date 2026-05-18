import { useParams, Link, Navigate } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, Phone, ChevronRight } from 'lucide-react';

const serviceData: Record<string, any> = {
  'roaches': {
    title: 'Roach Control',
    heroImage: '/images/roaches.webp',
    description: 'Roaches are more than just a nuisance; they can carry diseases and trigger allergies. Our comprehensive roach control treatments target nesting areas and entry points to eliminate current infestations and prevent future ones.',
    sections: [
      {
        heading: 'The Hidden Dangers of a Roach Infestation',
        content: 'Roaches are notorious for spreading bacteria, pathogens, and allergens throughout your home. They contaminate food sources, cooking utensils, and preparation surfaces, posing a significant health risk to your family. Their droppings and shed skin can also trigger severe asthma attacks and allergic reactions, particularly in children.'
      },
      {
        heading: 'Our Targeted Eradication Strategy',
        content: 'Our comprehensive roach control program begins with a meticulous inspection to identify nesting sites and entry points. We use targeted baits, insect growth regulators (IGRs), and residual treatments in cracks and crevices where roaches hide. This multi-faceted approach ensures we eliminate the current population and disrupt their breeding cycle to prevent future infestations.'
      },
      {
        heading: 'The Cost of Ignoring the Problem',
        content: 'If left unchecked, a small roach problem can rapidly explode into a massive infestation. Roaches breed incredibly fast, and a severe infestation can lead to widespread contamination of your living spaces, persistent foul odors, and increased health risks for everyone in the household.'
      }
    ],
    benefits: ['Eliminates disease-carrying pests', 'Targets nests, not just visible roaches', 'Safe for children and pets', 'Long-lasting preventative barrier'],
    faqs: [
      { question: 'How long does it take to get rid of roaches?', answer: 'It depends on the severity of the infestation, but you will typically see a significant reduction within a few days. Complete elimination usually takes a few weeks with our comprehensive treatment plan.' },
      { question: 'Do I need to empty my kitchen cabinets before treatment?', answer: 'In most cases, yes. Emptying cabinets allows our technicians to effectively treat the nesting areas where roaches hide.' },
      { question: 'Are the treatments safe for my pets?', answer: 'Yes, once the products have completely dried, they are safe for both pets and children to be around.' }
    ]
  },
  'bedbugs': {
    title: 'Bed Bug Treatments',
    heroImage: '/images/bedbugs.webp',
    description: 'Bed bugs can quickly turn your sanctuary into a nightmare. We provide specialized, thorough treatments to eradicate bed bugs from your mattresses, furniture, and home, ensuring you can sleep peacefully again.',
    sections: [
      {
        heading: 'Why Bed Bugs Ruin Your Sleep and Health',
        content: 'Bed bugs disrupt your peace of mind and your sleep. While they aren\'t known to transmit diseases, their bites cause itchy, red welts that can lead to secondary skin infections from scratching. The psychological toll of a bed bug infestation is significant, causing anxiety, stress, and sleepless nights.'
      },
      {
        heading: 'How We Reclaim Your Bedroom',
        content: 'We employ a rigorous, multi-step eradication process. This includes a detailed inspection of mattresses, box springs, furniture, and baseboards. We utilize specialized treatments that penetrate deep into hiding spots, targeting adult bed bugs, nymphs, and eggs. We also conduct follow-up inspections to ensure complete eradication.'
      },
      {
        heading: 'The Rapid Spread of Untreated Infestations',
        content: 'Bed bugs multiply quickly and can easily spread from room to room, or even to neighboring apartments or houses. Ignoring the problem will result in a severe infestation that is exponentially more difficult and expensive to treat, potentially requiring the disposal of infested furniture and mattresses.'
      }
    ],
    benefits: ['Complete eradication of all life stages', 'Detailed inspection of all hiding spots', 'Discreet and professional service', 'Follow-up inspections to ensure success'],
    faqs: [
      { question: 'How do I know if I have bed bugs?', answer: 'Common signs include small reddish-brown bugs, tiny dark spots (fecal matter) on your mattress or sheets, and itchy, clustered bites on your skin.' },
      { question: 'Do I need to throw away my mattress?', answer: 'Usually, no. Our treatments are designed to effectively eradicate bed bugs without you needing to discard your expensive furniture or mattresses.' },
      { question: 'How many treatments are required?', answer: 'Typically, it requires an initial intensive treatment followed by a follow-up inspection and treatment to ensure all life stages, including eggs, are eliminated.' }
    ]
  },
  'spiders': {
    title: 'Spider Control',
    heroImage: '/images/spiders.webp',
    description: 'While many spiders are harmless, species like Black Widows and Brown Recluses pose a real threat in West Texas. We offer targeted removal and perimeter treatments to keep your home spider-free.',
    sections: [
      {
        heading: 'Venomous Threats Lurking in the Shadows',
        content: 'While most spiders are beneficial for controlling other insects, venomous species like Black Widows and Brown Recluses pose a serious danger in West Texas. Their bites can cause severe pain, muscle cramps, necrotic skin lesions, and require immediate medical attention. Even harmless spiders create unsightly webs that make your home look unkempt.'
      },
      {
        heading: 'Sweeping Away Webs and Worries',
        content: 'Our spider control service focuses on both elimination and prevention. We perform thorough web removal and de-nesting around your property\'s exterior and interior. We then apply targeted perimeter treatments to create a barrier, and we identify and seal potential entry points to keep spiders from coming inside.'
      },
      {
        heading: 'When a Few Spiders Become a Swarm',
        content: 'Leaving a spider problem unaddressed allows their populations to grow, increasing the likelihood of encountering a venomous species inside your home. A growing spider population also indicates an abundance of other insects (their food source), meaning you likely have a broader pest issue that needs attention.'
      }
    ],
    benefits: ['Protection from venomous species', 'Web removal and de-nesting', 'Interior and exterior perimeter defense', 'Identification of entry points'],
    faqs: [
      { question: 'Are all spiders dangerous?', answer: 'No, most common house spiders are harmless. However, Black Widows and Brown Recluses, which are found in our area, can be dangerous and require professional removal.' },
      { question: 'How can I prevent spiders from entering my home?', answer: 'Seal cracks around windows and doors, keep debris and firewood away from the foundation, and maintain regular pest control treatments to eliminate their food source (other insects).' },
      { question: 'Do you remove the webs?', answer: 'Yes, web removal and de-nesting are standard parts of our comprehensive spider control service.' }
    ]
  },
  'scorpions': {
    title: 'Scorpion Removal',
    heroImage: '/images/scorpions.webp',
    description: 'Scorpions are a common and unwelcome guest in Lubbock. Their stings can be painful and dangerous. We provide specialized treatments designed specifically to penetrate their tough exoskeletons and keep them out.',
    sections: [
      {
        heading: 'The Painful Reality of Scorpion Encounters',
        content: 'Scorpions are a menacing presence in Lubbock homes. Their stings are extremely painful, causing localized swelling, numbness, and in some cases, severe allergic reactions. They hide in dark, secluded areas like shoes, closets, and bedding, making accidental encounters a constant and frightening risk for your family and pets.'
      },
      {
        heading: 'Penetrating Their Defenses',
        content: 'We utilize specialized, micro-encapsulated treatments designed specifically to penetrate the tough exoskeleton of scorpions. Our technicians focus on treating the perimeter of your home, block walls, and common hiding spots. We also provide expert recommendations on sealing entry points and reducing harborage areas around your property.'
      },
      {
        heading: 'The Dangers of a Scorpion-Friendly Yard',
        content: 'Without professional intervention, scorpions will continue to seek refuge in your home, especially during extreme weather. The risk of painful stings to your family and pets remains high, and a persistent scorpion presence can make you feel unsafe in your own home.'
      }
    ],
    benefits: ['Specialized scorpion-specific treatments', 'Sealing recommendations for entry points', 'Yard and perimeter defense', 'Peace of mind for your family and pets'],
    faqs: [
      { question: 'Why are there scorpions in my house?', answer: 'Scorpions often seek shelter indoors from extreme weather conditions or are actively hunting for food, such as other insects.' },
      { question: 'Can a scorpion sting be fatal?', answer: 'While very painful, stings from the scorpions typically found in our area are rarely fatal to healthy adults. However, you should always seek medical attention if stung, especially for children or the elderly.' },
      { question: 'How do you keep scorpions away?', answer: 'We use specialized treatments formulated for scorpions and highly recommend sealing entry points around doors, windows, and the foundation.' }
    ]
  },
  'termites': {
    title: 'Termite Control (WDI)',
    heroImage: '/images/termites.webp',
    description: 'Termites cause billions of dollars in property damage every year. As certified Wood Destroying Insect (WDI) experts, we offer thorough inspections and robust treatments to protect your biggest investment.',
    sections: [
      {
        heading: 'Silent Destroyers Eating Your Investment',
        content: 'Termites are silent destroyers that feed on the cellulose found in wood, paper, and drywall. They can cause catastrophic structural damage to your home, hollowing out load-bearing beams and compromising the integrity of your property. This damage is often hidden behind walls and can cost thousands of dollars to repair.'
      },
      {
        heading: 'Advanced Defense Systems and Baiting',
        content: 'As certified Wood Destroying Insect (WDI) experts, we conduct exhaustive inspections to locate termite activity. We implement advanced liquid barrier treatments and strategic baiting systems to eliminate the entire colony, including the queen. Our treatments provide a long-lasting protective shield around your home.'
      },
      {
        heading: 'The Devastating Financial Toll of Inaction',
        content: 'If termites are left unchecked, they will continuously consume the structural wood of your home 24/7. Over time, this can lead to sagging floors, warped doors, and even structural collapse. Termite damage is rarely covered by homeowners insurance, leaving you responsible for massive repair bills.'
      }
    ],
    benefits: ['Certified WDI inspections', 'Advanced baiting and liquid treatments', 'Protection against structural damage', 'Real estate transaction inspections'],
    faqs: [
      { question: 'How do I know if I have termites?', answer: 'Signs include mud tubes on exterior walls or foundation, hollow-sounding wood, discarded wings near windows or doors, and frass (termite droppings).' },
      { question: 'What is a WDI inspection?', answer: 'A Wood Destroying Insect (WDI) inspection is a thorough, certified check of your property for termites and other wood-destroying pests, often required during real estate transactions.' },
      { question: 'How long does a termite treatment last?', answer: 'Our advanced liquid and baiting treatments provide long-lasting protection, often creating a barrier that lasts for several years.' }
    ]
  },
  'rodents': {
    title: 'Rodent Removal',
    heroImage: '/images/rodents.webp',
    description: 'Mice and rats can spread disease, contaminate food, and chew through wires. Our rodent removal service includes safe trapping, complete removal, and professional exclusion to seal them out for good.',
    sections: [
      {
        heading: 'Disease, Damage, and Fire Hazards',
        content: 'Mice and rats are highly destructive pests that chew through drywall, insulation, and electrical wiring, creating a severe fire hazard. They contaminate food supplies and surfaces with their urine and droppings, spreading dangerous diseases like Salmonella and Hantavirus.'
      },
      {
        heading: 'Trapping, Removal, and Total Exclusion',
        content: 'Our rodent control strategy involves safe, humane trapping and complete removal of the pests from your home. Crucially, we perform professional exclusion work, identifying and sealing up the tiny entry points rodents use to get inside. We also provide sanitization recommendations to clean up contaminated areas.'
      },
      {
        heading: 'How Fast Can a Mouse Problem Multiply?',
        content: 'Rodents reproduce at an alarming rate. A small mouse problem can quickly become a massive infestation. Unchecked rodents will cause extensive damage to your home\'s infrastructure, ruin personal belongings, and create a highly unsanitary and dangerous living environment.'
      }
    ],
    benefits: ['Safe and humane trapping methods', 'Identification and sealing of entry points', 'Sanitization recommendations', 'Prevention of electrical damage from chewing'],
    faqs: [
      { question: 'How are rodents getting into my house?', answer: 'Mice can squeeze through holes as small as a dime, and rats through holes the size of a quarter. We identify and help seal these entry points during our service.' },
      { question: 'Do you use poison inside the house?', answer: 'We prefer safe trapping and exclusion methods indoors to prevent rodents from dying in inaccessible areas, which can cause odor issues.' },
      { question: 'What diseases do rodents carry?', answer: 'Rodents can carry and transmit diseases such as Hantavirus, Salmonella, and Leptospirosis, making prompt and professional removal essential.' }
    ]
  },
  'fleas-ticks': {
    title: 'Fleas & Ticks',
    heroImage: '/images/fleas.webp',
    description: 'Protect your four-legged family members and yourself from itchy bites and tick-borne illnesses. We provide comprehensive yard and interior treatments to break the flea and tick life cycle.',
    sections: [
      {
        heading: 'Parasitic Threats to Your Family and Pets',
        content: 'Fleas and ticks are parasitic pests that feed on the blood of your pets and family members. Flea bites cause intense itching and allergic dermatitis, while ticks are notorious vectors for serious illnesses like Lyme disease and Rocky Mountain spotted fever. They make your yard and home uncomfortable and unsafe.'
      },
      {
        heading: 'Breaking the Breeding Cycle for Good',
        content: 'We implement a comprehensive treatment plan that targets both the interior of your home and your exterior yard. Our treatments are designed to break the breeding life cycle, eliminating adult fleas and ticks as well as their eggs and larvae. We ensure your spaces are safe and comfortable again.'
      },
      {
        heading: 'The Escalating Risk of Tick-Borne Illnesses',
        content: 'A flea infestation can quickly spiral out of control, making your home unbearable for both humans and pets. Ticks left unchecked in your yard significantly increase the risk of disease transmission. Without professional treatment, these pests will continuously re-infest your living spaces.'
      }
    ],
    benefits: ['Breaks the breeding life cycle', 'Treats both interior and exterior spaces', 'Reduces risk of tick-borne diseases', 'Safe for pets once dry'],
    faqs: [
      { question: 'Do I need to treat my yard as well as my house?', answer: 'Yes, treating both the interior of your home and the exterior yard is crucial to completely break the life cycle and prevent re-infestation.' },
      { question: 'How long do I need to stay out of the house after treatment?', answer: 'We typically recommend staying out of the treated areas for 2-4 hours, or until the treatment has completely dried.' },
      { question: 'Does this replace my pet\'s flea medication?', answer: 'No, our treatments work in conjunction with, but do not replace, the veterinarian-recommended preventative medications for your pets.' }
    ]
  },
  'lawn': {
    title: 'Lawn & Ornamental',
    heroImage: 'https://picsum.photos/seed/lawn/1920/1080',
    description: 'A healthy lawn is your first line of defense against pests. Our certified lawn and ornamental treatments keep your yard beautiful while eliminating destructive outdoor insects before they come inside.',
    sections: [
      {
        heading: 'The Invisible Invaders Destroying Your Turf',
        content: 'Outdoor pests like grubs, chinch bugs, and armyworms can decimate your landscaping. They feed on grass roots and plant foliage, causing brown patches, wilting, and the eventual death of your expensive lawn and ornamental plants. A pest-ridden yard also serves as a breeding ground for insects that will eventually try to enter your home.'
      },
      {
        heading: 'Restoring Your Yard\'s Natural Beauty',
        content: 'We provide targeted, specialized treatments to eliminate destructive outdoor insects while preserving the health of your plants. Our certified technicians apply seasonal preventative barriers and targeted treatments for specific lawn pests, promoting robust root growth and a lush, green landscape.'
      },
      {
        heading: 'From Brown Patches to Indoor Invasions',
        content: 'Ignoring lawn pests will result in the rapid deterioration of your landscaping, turning a beautiful yard into a patchy, dying eyesore. Replacing dead grass and ornamental plants is incredibly expensive. Furthermore, an unchecked outdoor pest population will inevitably lead to more bugs finding their way inside your house.'
      }
    ],
    benefits: ['Protects landscaping investments', 'Creates a barrier around your home', 'Treats grubs, chinch bugs, and more', 'Promotes healthy grass and plant growth'],
    faqs: [
      { question: 'When is the best time to treat my lawn?', answer: 'Early spring and late fall are critical times for prevention, but we offer year-round programs tailored to the specific seasonal pests in our area.' },
      { question: 'Will the treatment harm my plants?', answer: 'No, our treatments are specifically formulated to be safe for your ornamental plants, shrubs, and grass when applied by our professionals.' },
      { question: 'How long until I see results?', answer: 'You will typically see a noticeable reduction in lawn pests and an improvement in plant health within a few days to a week after the initial treatment.' }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
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
              <Link to="/services" className="text-primary hover:text-primary-light transition-colors">Services</Link>
              <ChevronRight className="h-4 w-4 text-gray-500" />
              <span className="text-white">{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-sans mb-10 leading-relaxed">
              Professional, reliable, and effective solutions to protect your home and family in Lubbock, Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:+18065550123" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">The Problem</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Why You Need Professional {service.title}</h3>
              <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              
              {service.sections && service.sections.map((section: any, idx: number) => (
                <div key={idx} className="mb-8">
                  <h4 className="font-heading font-bold text-xl text-secondary mb-3">{section.heading}</h4>
                  <p className="text-gray-600 font-sans text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
              
              <h4 className="font-heading font-bold text-xl text-secondary mb-4">Our Approach:</h4>
              <ul className="space-y-4 mb-8">
                {service.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-600 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-secondary">Get a Free Estimate</h3>
                <p className="text-gray-600 font-sans mt-2">Fill out the form below and we'll get back to you with a quote.</p>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none bg-white" defaultValue={service.title}>
                    <option value="Roach Control">Roach Control</option>
                    <option value="Bed Bug Treatments">Bed Bug Treatments</option>
                    <option value="Spider Control">Spider Control</option>
                    <option value="Scorpion Removal">Scorpion Removal</option>
                    <option value="Termite Control (WDI)">Termite Control (WDI)</option>
                    <option value="Rodent Removal">Rodent Removal</option>
                    <option value="Fleas & Ticks">Fleas & Ticks</option>
                    <option value="Lawn & Ornamental">Lawn & Ornamental</option>
                    <option value="General Pest Control">General Pest Control</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea id="additionalInfo" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Tell us about your pest problem..."></textarea>
                </div>
                
                <button 
                  type="button"
                  className="w-full inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary-dark transition-colors mt-6 shadow-lg shadow-primary/20"
                >
                  Request Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#217953] font-sans font-bold tracking-wider uppercase text-sm mb-3">FAQ</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Frequently Asked Questions</h3>
              <p className="text-gray-600 font-sans text-lg">
                Common questions about our {service.title.toLowerCase()} services.
              </p>
            </div>
            
            <div className="space-y-6">
              {service.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="font-heading font-bold text-lg text-secondary mb-3">{faq.question}</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
