import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const servicesList = [
    { name: 'Roach Control', path: '/services/roaches' },
    { name: 'Bed Bug Treatments', path: '/services/bedbugs' },
    { name: 'Spider Control', path: '/services/spiders' },
    { name: 'Scorpion Removal', path: '/services/scorpions' },
    { name: 'Termite Control (WDI)', path: '/services/termites' },
    { name: 'Rodent Removal', path: '/services/rodents' },
    { name: 'Fleas & Ticks', path: '/services/fleas-ticks' },
    { name: 'Lawn & Ornamental', path: '/services/lawn' },
  ];

  const areasList = [
    { name: 'Lubbock', path: '/areas/lubbock' },
    { name: 'Wolfforth', path: '/areas/wolfforth' },
    { name: 'Shallowater', path: '/areas/shallowater' },
    { name: 'Idalou', path: '/areas/idalou' },
    { name: 'Slaton', path: '/areas/slaton' },
    { name: 'Ransom Canyon', path: '/areas/ransom-canyon' },
    { name: 'Levelland', path: '/areas/levelland' },
    { name: 'Brownfield', path: '/areas/brownfield' },
    { name: 'Plainview', path: '/areas/plainview' },
    { name: 'Abernathy', path: '/areas/abernathy' },
    { name: 'New Deal', path: '/areas/new-deal' },
    { name: 'Tahoka', path: '/areas/tahoka' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pest control', path: '/services', isDropdown: true, dropdownItems: servicesList },
    { name: 'Areas We Serve', path: '/areas', isDropdown: true, dropdownItems: areasList },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-36">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Prime Pest Control" className="w-[177px] h-[110px] object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link
                    to={link.path}
                    className={`font-heading font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                      isActive(link.path) ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-secondary hover:bg-[#e0f6ff] hover:text-primary transition-colors font-sans"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-heading font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href="tel:+18065550123"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-md font-heading font-semibold hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-heading font-medium ${
                    isActive(link.path)
                      ? 'text-primary bg-[#e0f6ff]'
                      : 'text-secondary hover:text-primary hover:bg-[#e0f6ff]'
                  }`}
                >
                  {link.name}
                </Link>
                {link.isDropdown && link.dropdownItems && (
                  <div className="pl-6 pb-2 space-y-1">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-md font-sans text-sm text-secondary hover:text-primary hover:bg-[#e0f6ff]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+18065550123"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-primary text-white px-5 py-3 rounded-md font-heading font-semibold hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
