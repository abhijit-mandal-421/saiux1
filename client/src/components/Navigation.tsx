import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover-elevate"
              data-testid="logo-button"
            >
              SAIEX
            </button>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80'
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-20">
          <div className="flex flex-col items-center gap-4 p-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-lg ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground'
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
