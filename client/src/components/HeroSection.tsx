import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const fullText = "AI Innovation Designed for Humans";

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);

  // Ripple click effect for CTA
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 500);

    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white"
    >
      {/* Subtle radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,33,182,0.12),transparent_70%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Typing Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight min-h-[4.5rem]"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {displayText}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-12 md:h-14 bg-blue-400 ml-1 animate-blink" />
            )}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto"
        >
          Technology that understands people — built with intelligence, designed with empathy.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-base md:text-lg text-white/70 mb-14 max-w-3xl mx-auto"
        >
          At <span className="text-blue-400 font-medium">SAIUX</span>, we merge AI and design to
          craft intelligent systems that simplify life and amplify human potential.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary Button with Chevron Inside */}
          <button
            onClick={handleCTAClick}
            className="relative overflow-hidden w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white rounded-xl
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
               shadow-[0_0_25px_rgba(139,92,246,0.3)]
               transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]
               focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-0 flex items-center justify-center gap-3"
          >
            {/* Ripple Effect */}
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute bg-white/30 rounded-full pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: "10px",
                  height: "10px",
                  transform: "translate(-50%, -50%) scale(0)",
                  opacity: 1,
                  animation:
                    "ripple 0.6s linear forwards, fadeout 0.6s ease-out forwards",
                }}
              />
            ))}

            {/* Text & Icon inside the button */}
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              🚀 Book a Free Strategy Call
              <ChevronDown className="h-5 w-5 text-white/80 animate-bounce-slow" />
            </span>

            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </button>

          {/* Secondary Button */}
          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative px-10 py-4 text-lg font-semibold rounded-xl border border-white/20
               bg-white/5 backdrop-blur-sm text-white/90
               transition-all duration-300 hover:border-purple-400 hover:text-purple-300 hover:scale-[1.03]"
          >
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Animations */}
      <style >{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite linear;
          opacity: 0.4;
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(8);
            opacity: 0;
          }
        }

        @keyframes fadeout {
          100% {
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
