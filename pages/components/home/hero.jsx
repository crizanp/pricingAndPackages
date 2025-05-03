import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Define slides data with video paths and content
    const slides = [
        {
            id: 1,
            tagline: "Build with Purpose",
            subtitle: "Software Development",
            video: "/vdoHero.mp4",
            description: "Your trusted partner in creating powerful, scalable software solutions that make a real difference."
        },
        {
            id: 2,
            tagline: "Edit. Inspire. Deliver.",
            subtitle: "Video Editing",
            video: "/vdoEditing.mp4",
            description: "We turn raw footage into captivating stories, crafted with precision and creativity."
        },
        {
            id: 3,
            tagline: "Reach New Heights",
            subtitle: "Digital Marketing",
            video: "/vdoMarketing.mp4",
            description: "Smart marketing strategies designed to boost your brand's reach, visibility, and success."
        }
    ];

    // Check for mobile viewport on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        // Function to attempt playing the video
        const attemptPlay = async () => {
            try {
                if (videoRef.current) {
                    // Using both play method and autoplay attribute for better compatibility
                    await videoRef.current.play();
                    console.log("Video playing successfully");
                }
            } catch (error) {
                console.error("Video autoplay failed:", error);
                setVideoError(true);
            }
        };

        // Add event listener for user interaction to trigger video
        const handleUserInteraction = () => {
            if (videoRef.current && videoRef.current.paused) {
                attemptPlay();
            }
        };

        // Try to play video immediately
        attemptPlay();

        // Add interaction listeners to help with autoplay restrictions
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [currentSlideIndex]); // Re-run when slide changes

    // Functions to control the slider
    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    // Auto-advance slides every 7 seconds
    useEffect(() => {
        const slideInterval = setInterval(goToNextSlide, 7000);
        return () => clearInterval(slideInterval);
    }, []);

    const currentSlide = slides[currentSlideIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            {!videoError ? (
                <video
                    ref={videoRef}
                    className="absolute w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload="auto"
                    onError={() => setVideoError(true)}
                >
                    <source src={currentSlide.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                // Fallback if video fails to load         
                <div className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900"></div>
            )}

            {/* Dark overlay with purple tint for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-2 sm:mb-4 md:mb-6 tracking-tight">
                    <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-9xl py-1 sm:py-2 mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        {currentSlide.tagline}
                    </span>
                    <span className="block mt-2 sm:mt-3 md:mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                        {currentSlide.subtitle}
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto mt-2 sm:mt-4 md:mt-6 leading-relaxed text-gray-200">
                    {currentSlide.description}
                </p>

                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-black cursor-pointer text-sm sm:text-base md:text-lg">
                        Let's Connect With Your Idea
                    </button>
                </div>

                {/* Slider indicators */}
                <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-6 md:mt-10">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                                currentSlideIndex === index
                                    ? "bg-gradient-to-r from-purple-500 to-pink-400"
                                    : "bg-white bg-opacity-30 hover:bg-opacity-60"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Slider navigation buttons - hidden on small mobile, visible on larger screens */}
                <div className="absolute top-1/2 w-full flex justify-between px-2 sm:px-4 md:px-6 -translate-y-1/2">
                    <button
                        onClick={goToPrevSlide}
                        className="bg-purple-900/30 cursor-pointer text-white p-1 sm:p-2 md:p-3 rounded-full hover:bg-purple-800/50 transition-all"
                        aria-label="Previous slide"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="bg-purple-900/30 cursor-pointer text-white p-1 sm:p-2 md:p-3 rounded-full hover:bg-purple-800/50 transition-all"
                        aria-label="Next slide"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}