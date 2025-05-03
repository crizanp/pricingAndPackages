import { ArrowRight } from "lucide-react";

export default function TextHeroSection() {
  return (
    <div className="w-full bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
          Pull the Trigger!
        </p>
        
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-12 md:mb-16 leading-tight">
          Let's bring your<br />vision to life
        </h1>
        
        <div className="flex justify-center">
          <button 
            className="bg-black text-white px-8 py-4 rounded-full font-medium text-xl flex items-center transition-all hover:bg-gray-800 group"
          >
            Get Started
            <ArrowRight 
              size={20} 
              className="ml-2 transition-transform group-hover:translate-x-1" 
            />
          </button>
        </div>
      </div>
    </div>
  );
}