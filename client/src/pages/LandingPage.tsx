import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-fade-in').forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray('.gsap-stagger').forEach((container: any) => {
        const children = container.children;
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionsRef} className="relative bg-black text-white overflow-x-hidden">
      <ThreeBackground />
      <Navigation activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <div className="gsap-fade-in">
          <AboutSection />
        </div>
        <div className="gsap-fade-in">
          <ServicesSection />
        </div>
        <div className="gsap-fade-in">
          <IndustriesSection />
        </div>
        <div className="gsap-fade-in">
          <CaseStudiesSection />
        </div>
        <div className="gsap-fade-in">
          <ContactSection />
        </div>
      </main>

      <footer className="relative z-10 bg-black/90 border-t border-foreground/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-foreground/60">
            &copy; {new Date().getFullYear()} SAIEX Pvt Ltd. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50 mt-2">
            Innovate. Automate. Elevate.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
