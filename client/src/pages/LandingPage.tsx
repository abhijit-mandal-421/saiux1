import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeBackground from "@/components/ThreeBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import FooterSection from "@/components/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

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
      gsap.utils.toArray(".gsap-fade-in").forEach((element: any) => {
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
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray(".gsap-stagger").forEach((container: any) => {
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
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionsRef}
      className="relative bg-black text-white overflow-x-hidden"
    >
      <ThreeBackground />
      <Navigation activeSection={activeSection} />

      {/* Added top padding so content is not hidden behind navbar */}
      <main className="pt-24 md:pt-28">
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
        <div className="gsap-fade-in">
          <FooterSection />
        </div>
      </main>

      {/* FOOTER with QR */}
      <footer className="relative z-10 bg-black/90 border-t border-foreground/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left: QR with Hover Glow */}
          <div className="flex flex-col items-center justify-center text-center group">
            <p className="text-sm font-medium text-white/80 mb-2 tracking-wide">
              Scan & Pay
            </p>

            <div className="relative">
              <img
                src="/phonepe-qr.jpg"
                alt="PhonePe QR - Scan & Pay"
                className="w-28 h-28 rounded-lg border border-white/10 object-contain
                          shadow-[0_0_20px_rgba(139,92,246,0.15)]
                          group-hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]
                          transition-all duration-500 ease-in-out
                          group-hover:scale-[1.05] animate-pulse-slow"
              />

              {/* Soft glowing border */}
              <span
                className="absolute inset-0 rounded-lg border border-purple-500/40 opacity-0
                            group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              ></span>
            </div>
          </div>

          {/* Center: Copyright & Legal */}
          <div className="text-center flex-1 space-y-2">
            <p className="text-white/60">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-blue-400 font-semibold">
                SAIUX Pvt Ltd
              </span>
              . All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Innovate. Automate. Elevate.
            </p>

            <div className="text-xs text-white/40 mt-3 space-x-4">
              <a
                href="/privacy-policy"
                className="hover:text-purple-400 underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a
                href="/terms"
                className="hover:text-purple-400 underline underline-offset-2 transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Soft glow animation for QR */}
        <style>
          {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.02); opacity: 0.95; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}
        </style>
      </footer>

      <ScrollToTop />
    </div>
  );
}
