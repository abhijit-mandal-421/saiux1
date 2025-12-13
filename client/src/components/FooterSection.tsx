import { Mail, Globe, MapPin, Facebook, Linkedin, Twitter, Instagram} from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative z-40 bg-gradient-to-b from-slate-950 via-slate-900 to-black backdrop-blur-xl border-t border-white/10 pt-20 pb-10 overflow-hidden isolation-isolate">
      {/* Soft glowing overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,33,182,0.15),transparent_70%)]" />

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white/80">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            SAIUX
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            Human-centered AI solutions — bridging innovation, design, and intelligence to help
            organizations scale smarter and faster.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
            <li><a href="#industries" className="hover:text-purple-400 transition-colors">Industries</a></li>
            <li><a href="#case-studies" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-purple-400" />
              <a
                href="mailto:saichaitanya7893@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                info@saiux.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-400" />
              <span>Worldwide Delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-400" />
              <span>India</span>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Connect</h4>
          <div className="flex gap-5">
            <a href=" https://www.facebook.com/share/1FDESm838K/" className="hover:text-purple-400 transition-all hover:scale-110">
              <Facebook className="h-5 w-5" />
            </a>
            
            <a href="http://www.linkedin.com/in/saiux-tech-pvt-ltd-8b8aa7395" className="hover:text-purple-400 transition-all hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/SaiuxPvt_ltd" className="hover:text-purple-400 transition-all hover:scale-110">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/saiux9/" className="hover:text-purple-400 transition-all hover:scale-110">
              <Instagram className="h-5 w-5" />
              
            </a>
            

          </div>
        </div>
      </div>

      {/* Divider (optional for clean end) */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 border-t border-white/10" />
    </footer>
  );
}
