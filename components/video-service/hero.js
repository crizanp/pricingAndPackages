import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection({
  tagline = "Edit. Inspire. Deliver.",
  subtitle = "Professional Video Editing",
  description = "We create amazing visual experiences that captivate your audience, crafted with precision and creativity for maximum impact.",
  videoSrc = "/vdoEditing.mp4",
  buttonText = "Transform Your Footage",
  features = ["Professional Editing", "4K & 8K Support", "Visual Effects"],
  mobileHeight = "60vh" // Adjustable height for mobile view
}) {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Function to attempt playing the video
    const attemptPlay = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Video autoplay failed:", error);
        setVideoError(true);
      }
    };
    
    // Try to play video immediately
    attemptPlay();
    
    // Add event listener for user interaction to trigger video
    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        attemptPlay();
      }
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black">
      {/* Video Background */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover opacity-40"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute w-full h-full bg-black"></div>
      )}
      
      {/* Simple dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content container - Left-aligned on mobile, centered on desktop */}
      <div className="relative z-10 flex flex-col h-full text-white px-4 md:px-8 justify-center">
        {/* Main content div - Controls alignment */}
        <div className={`max-w-6xl ${isMobile ? '' : 'mx-auto text-center'}`}>
          <h1 className="font-bold tracking-tight">
            <span className="block text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {tagline}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl lg:text-5xl font-light mt-2 md:mt-4">
            {subtitle}
          </h2>
          
          <p className={`text-sm md:text-xl lg:text-2xl mt-3 md:mt-6 leading-relaxed text-gray-200 ${isMobile ? '' : 'mx-auto max-w-3xl'}`}>
            {description}
          </p>
          
          <div className="mt-6 md:mt-12">
            <Link href="/contact">
            <button className="cursor-pointer bg-white text-black font-medium py-2 px-6 md:py-4 md:px-10 rounded-md transition-all duration-300 hover:bg-opacity-90 text-base md:text-lg">
              {buttonText}
            </button></Link>
          </div>
          
          {/* Features section */}
          <div className={`mt-8 md:mt-16 flex flex-wrap gap-6 md:gap-16 ${isMobile ? '' : 'justify-center'}`}>
            {features.map((feature, index) => (
              <div key={index} className="text-sm md:text-lg text-white">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}