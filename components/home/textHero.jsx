import { ArrowRight } from "lucide-react";

export default function TextHeroSection() {
  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-3 sm:mb-4 md:mb-6 animate-fade-in">
          Pull the Trigger!
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-tight">
          Let's bring your<br className="hidden sm:block" /> vision to life
        </h1>
        
        <div className="flex justify-center">
          <button
            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-lg sm:text-xl flex items-center transition-all hover:bg-gray-800 hover:shadow-lg group"
          >
            <span>Get Started</span>
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