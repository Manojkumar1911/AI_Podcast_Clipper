
import { Brain, Mic, Eye, Video, Zap, Clock } from "lucide-react";

const technologies = [
  {
    name: "WhisperX",
    description: "Advanced speech recognition with perfect timing",
    icon: Mic,
    color: "from-blue-500 to-cyan-500",
    feature: "Transcription"
  },
  {
    name: "Gemini API",
    description: "AI-powered viral moment detection",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    feature: "Viral Detection"
  },
  {
    name: "LR-ASD",
    description: "Real-time speaker detection and cropping",
    icon: Eye,
    color: "from-green-500 to-emerald-500",
    feature: "Speaker Detection"
  },
  {
    name: "FFMPEGCV",
    description: "High-performance video rendering engine",
    icon: Video,
    color: "from-orange-500 to-red-500",
    feature: "Rendering"
  },
  {
    name: "Modal",
    description: "Scalable cloud infrastructure",
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
    feature: "Processing"
  },
  {
    name: "Inngest",
    description: "Reliable job queues and workflows",
    icon: Clock,
    color: "from-teal-500 to-blue-500",
    feature: "Queues"
  }
];

export const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powered by AI
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-leading technologies working together seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-gray-800/50 cursor-pointer"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>

              {/* Feature Badge */}
              <div className={`inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-gradient-to-r ${tech.color} text-white`}>
                {tech.feature}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${tech.color} p-4 transform transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                <tech.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {tech.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {tech.description}
              </p>

              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
