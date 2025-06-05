
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: "⚡" },
  { name: "Modal", icon: "☁️" },
  { name: "Stripe", icon: "💳" },
  { name: "AWS", icon: "🚀" }
];

const links = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "API Docs", href: "#" },
    { name: "Integrations", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Status", href: "#" },
    { name: "Security", href: "#" }
  ]
};

export const Footer = () => {
  return (
    <footer className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5000}ms`,
              animationDuration: '8000ms'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ViralClips.ai
              </h3>
              <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                Transform your podcasts into viral short-form content with AI-powered precision. 
                Join thousands of creators already going viral.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Github, href: "#", color: "hover:text-gray-300" },
                { icon: Mail, href: "#", color: "hover:text-green-400" }
              ].map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-lg mb-6 capitalize">
                {category}
              </h4>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h4 className="text-white font-semibold text-lg mb-6 text-center">
            Built with cutting-edge technology
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 ViralClips.ai. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-blue-900/20 to-transparent blur-3xl"></div>
    </footer>
  );
};
