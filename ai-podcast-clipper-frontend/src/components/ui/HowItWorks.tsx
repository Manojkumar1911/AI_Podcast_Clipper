
import { Upload, Brain, Scissors, Type, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Podcast",
    description: "Drop your audio file and let our AI take over",
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: Brain,
    title: "AI Transcribes + Analyzes",
    description: "WhisperX creates perfect transcriptions in real-time",
    color: "from-purple-400 to-pink-400"
  },
  {
    icon: Scissors,
    title: "Detects Viral Moments",
    description: "Gemini AI finds the most engaging soundbites",
    color: "from-green-400 to-emerald-400"
  },
  {
    icon: Type,
    title: "Crops to Speaker",
    description: "LR-ASD perfectly frames the active speaker",
    color: "from-orange-400 to-red-400"
  },
  {
    icon: Download,
    title: "Adds Subtitles & Exports",
    description: "Professional vertical videos ready for upload",
    color: "from-indigo-400 to-purple-400"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your podcast into viral content with our AI-powered pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group cursor-pointer">
                <div className={`relative p-6 bg-gray-800/50 border border-gray-700 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-gray-800/70 hover:border-gray-600`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${step.color} p-4 transform transition-transform group-hover:rotate-6`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
