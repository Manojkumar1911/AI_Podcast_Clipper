"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { AnimatedWaveform } from "./AnimatedWaveform";
import { FloatingElements } from "./FloatingElements";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <FloatingElements />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-105">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">AI-Powered Viral Content Creation</span>
          </div>

          {/* Main Headline with Reduced Font Size */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight transition-all duration-500 hover:scale-105">
            Transform Podcasts Into
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Viral Shorts
            </span>
            <br />
            — With One Click
          </h1>

          {/* Subtext with Reduced Font Size */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-500 hover:text-gray-200">
            <span className="text-blue-400 font-semibold">Auto-cropped.</span>{" "}
            <span className="text-purple-400 font-semibold">Subtitled.</span>{" "}
            <span className="text-cyan-400 font-semibold">Vertical.</span>{" "}
            <span className="text-pink-400 font-semibold">AI-enhanced.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 font-semibold text-lg">Try for Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group px-8 py-4 border-2 border-gray-600 hover:border-blue-400 bg-transparent text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-500/10"
            >
              <Play className="w-5 h-5 mr-2 group-hover:text-blue-400 transition-colors" />
              <span className="font-semibold text-lg">Watch Demo</span>
            </Button>
          </div>

          {/* Animated Waveform Demo */}
          <div className="max-w-4xl mx-auto">
            <AnimatedWaveform />
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};
