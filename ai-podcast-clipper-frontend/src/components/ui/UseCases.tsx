
import { Youtube, Smartphone, Instagram } from "lucide-react";

const platforms = [
  {
    name: "YouTube Shorts",
    subtitle: "Grow faster with optimized content your audience loves.",
    icon: Youtube,
    color: "from-red-500 to-pink-500",
    mockup: "bg-red-500/20"
  },
  {
    name: "TikTok",
    subtitle: "AI-crafted storytelling that hooks users instantly.",
    icon: Smartphone,
    color: "from-pink-500 to-purple-500",
    mockup: "bg-pink-500/20"
  },
  {
    name: "Instagram Reels",
    subtitle: "Post pro-level reels without any editing.",
    icon: Instagram,
    color: "from-purple-500 to-indigo-500",
    mockup: "bg-purple-500/20"
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="features">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Where Viral Happens
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Create stunning clips ready to go viral across all short-form platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-800/30 border border-gray-700/50 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:-translate-y-4 cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Enhanced Floating Particles Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 ${platform.mockup} rounded-full animate-float`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 150}ms`,
                      animationDuration: '3000ms'
                    }}
                  />
                ))}
              </div>

              {/* Enhanced Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 -z-10 scale-150`}></div>

              {/* Pulsing Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} style={{ padding: '2px' }}>
                <div className="w-full h-full bg-gray-800/30 rounded-3xl"></div>
              </div>

              {/* Icon with Enhanced Animation */}
              <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${platform.color} p-5 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl`}>
                <platform.icon className="w-full h-full text-white" />
              </div>

              {/* Enhanced 3D Mockup */}
              <div className="relative z-10 mb-6 mx-auto w-32 h-48 perspective-1000">
                <div className={`w-full h-full ${platform.mockup} rounded-2xl border border-gray-600 transform transition-all duration-700 group-hover:rotateY-12 group-hover:scale-110 preserve-3d shadow-2xl group-hover:shadow-blue-500/30`}>
                  <div className="absolute inset-2 bg-gray-800 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Animated Waveform Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 flex gap-1 items-end">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-t ${platform.color} rounded-sm transition-all duration-300 group-hover:animate-pulse`}
                        style={{
                          width: '3px',
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content with Enhanced Hover Effects */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300 transform group-hover:scale-105">
                {platform.name}
              </h3>
              <p className="relative z-10 text-gray-400 text-center leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                {platform.subtitle}
              </p>

              {/* Animated Background Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
