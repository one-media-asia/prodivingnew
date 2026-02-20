import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      if (location.pathname === '/') {
        // Already on home, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home with hash
        navigate('/' + href);
      }
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#dive-sites", label: "Dive Sites" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const courseCategories = [
    {
      label: 'Professional Courses',
      items: [
        { name: 'Divemaster', href: '/divemaster' },
        { name: 'Assistant Instructor', href: '/assistant-instructor' },
      ],
    },
    {
      label: 'Instructor Training',
      items: [
        { name: 'IDC Instructor', href: '/instructor' },
        { name: 'IDC Staff Instructor', href: '/idc-staff' },
      ],
    },
    {
      label: 'Specialized Training',
      items: [
        { name: 'Technical Diving', href: '/technical-diving' },
        { name: 'All Courses', href: '#courses' },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-ocean shadow-ocean">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick('#home')} className="flex items-center">
            <img 
              src="https://divinginasia.com/images/logo.avif" 
              alt="Pro Diving Logo" 
              className="h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Home
            </button>

            {/* Courses Mega Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('#courses')}
                className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors duration-200 flex items-center gap-1"
              >
                Courses
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#0b1e3d] rounded-lg shadow-2xl border border-[#1a3a5c] min-w-[520px] p-6 flex gap-8">
                  {courseCategories.map((cat) => (
                    <div key={cat.label} className="flex-1">
                      <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border-b border-[#1a3a5c] pb-2">
                        {cat.label}
                      </h4>
                      <ul className="space-y-1">
                        {cat.items.map((item) => (
                          <li key={item.href}>
                            <button
                              onClick={() => handleNavClick(item.href)}
                              className="block py-1.5 text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-150 uppercase tracking-wide w-full text-left"
                            >
                              {item.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('#dive-sites')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Dive Sites
            </button>
            <button
              onClick={() => handleNavClick('#gallery')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:bas@prodiving.asia"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              bas@prodiving.asia
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden border-t border-primary-foreground/20 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors text-left"
            >
              Home
            </button>

            {/* Mobile Courses Accordion */}
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center justify-between w-full text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors text-left"
              >
                Courses
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCoursesOpen && (
                <div className="pl-4 space-y-1 bg-primary-foreground/5 rounded-lg mx-2 py-2 mt-2">
                  {courseCategories.map((cat) => (
                    <div key={cat.label} className="mb-2">
                      <span className="block px-3 py-1 text-xs font-bold text-cyan-400 uppercase tracking-wider">{cat.label}</span>
                      {cat.items.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="block px-3 py-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left w-full"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('#dive-sites')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors text-left"
            >
              Dive Sites
            </button>
            <button
              onClick={() => handleNavClick('#gallery')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors text-left"
            >
              Contact
            </button>

            <a
              href="mailto:bas@prodiving.asia"
              className="flex items-center gap-2 text-primary-foreground/90 text-sm pt-4 border-t border-primary-foreground/20"
            >
              <Mail className="w-4 h-4" />
              bas@prodiving.asia
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
