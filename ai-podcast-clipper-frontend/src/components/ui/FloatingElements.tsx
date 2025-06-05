"use client";

import { useEffect, useState } from "react";

export const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5000
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}ms`,
            animationDuration: '6000ms'
          }}
        />
      ))}
      
      {/* Floating Microphones */}
      <div className="absolute top-1/4 left-1/6 animate-float" style={{ animationDuration: '8000ms' }}>
        <div className="w-8 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full opacity-30"></div>
      </div>
      
      <div className="absolute top-3/4 right-1/6 animate-float" style={{ animationDuration: '7000ms', animationDelay: '2000ms' }}>
        <div className="w-6 h-10 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-40"></div>
      </div>
    </div>
  );
};
