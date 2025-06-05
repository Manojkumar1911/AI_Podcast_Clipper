"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

// Pre-defined heights for the waveform bars to avoid hydration mismatches
const waveformHeights = [
  69, 51, 61, 38, 60, 71, 47, 68, 24, 43, 42, 32, 67, 66, 74, 74, 46, 71, 46, 73,
  54, 62, 51, 32, 72, 35, 69, 79, 67, 57, 46, 62, 78, 23, 22, 35, 64, 36, 45, 40,
  79, 36, 57, 44, 62, 78, 23, 22, 35, 64
];

export const AnimatedWaveform = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Podcast Waveform */}
      <div className={`transition-all duration-2000 ${isAnimating ? 'transform scale-110 opacity-60' : ''}`}>
        <div className="flex items-center justify-center gap-1 mb-8">
          {waveformHeights.map((height, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{
                width: '4px',
                height: `${height}px`,
                animationDelay: `${i * 50}ms`,
                animationDuration: '1500ms'
              }}
            />
          ))}
        </div>
      </div>

      {/* Transformation Arrow */}
      <div className={`text-center mb-8 transition-all duration-1000 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className="inline-flex items-center gap-2 text-cyan-400">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <span className="text-sm font-medium">AI MAGIC</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
        </div>
      </div>

      {/* TikTok-style Video Preview */}
      <div className={`transition-all duration-2000 delay-1000 ${isAnimating ? 'transform scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        <div className="relative mx-auto w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
          {/* Video Content */}
          <div className="absolute inset-2 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-300">Viral Clip Ready</p>
              </div>
            </div>
          </div>

          {/* Subtitle Bar */}
          <div className="absolute bottom-4 left-2 right-2 bg-black/80 rounded-lg p-2">
            <p className="text-xs text-white text-center font-medium">
              "This is the moment that changes everything..."
            </p>
          </div>

          {/* TikTok UI Elements */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500/80 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500/80 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
