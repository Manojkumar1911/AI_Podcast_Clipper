"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 sticky top-0 z-10 flex justify-center border-b border-gray-700 shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="font-sans text-xl font-medium tracking-tight">
            <span className="text-blue-400">podcast</span>
            <span className="font-light text-gray-400">/</span>
            <span className="text-purple-400 font-light">clipper</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200">
            How it Works
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
            Pricing
          </a>
          <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
            Dashboard
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
            asChild
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="py-4 space-y-4">
          <a href="#features" className="block text-gray-300 hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors duration-200">
            How it Works
          </a>
          <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors duration-200">
            Pricing
          </a>
          <a href="#dashboard" className="block text-gray-300 hover:text-white transition-colors duration-200">
            Dashboard
          </a>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-800">
            <Button variant="ghost" className="justify-start text-gray-300 hover:text-white hover:bg-gray-800" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
