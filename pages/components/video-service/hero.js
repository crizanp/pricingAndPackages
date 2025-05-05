import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection({
  tagline = "Edit. Inspire. Deliver.",
  subtitle = "Professional Video Editing",
  description = "We create amazing visual experiences that captivate your audience, crafted with precision and creativity for maximum impact.",
  videoSrc = "/vdoEditing.mp4",
  buttonText = "Transform Your Footage",
  features = ["Professional Editing", "4K & 8K Support", "Visual Effects"]
}) {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);
    
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
    }, []);
    
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Video Background */}
            {!videoError ? (
                <video
                    ref={videoRef}
                    className="absolute w-full h-full object-cover opacity-80"
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
                // Fallback if video fails to load        
                <div className="absolute w-full h-full bg-black"></div>
            )}
            {/* Simple dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
                    {tagline}
                </h1>
               
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6">
                    {subtitle}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mt-4 leading-relaxed">
                    {description}
                </p>
                <div className="mt-12">
                    <button className="bg-white text-black font-medium py-3 px-8 md:py-4 md:px-10 rounded-md transition-all duration-300 hover:bg-opacity-90 text-lg">
                        {buttonText}
                    </button>
                </div>
                {/* Minimal features section */}
                <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16">
                    {features.map((feature, index) => (
                        <div key={index} className="text-base md:text-lg text-white">
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
           
            {/* Simple scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}