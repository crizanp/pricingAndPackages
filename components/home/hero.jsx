import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [viewportHeight, setViewportHeight] = useState('100vh');
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

    // Fix for mobile viewport height and detect mobile devices
    useEffect(() => {
        const updateViewportHeight = () => {
            const isMobileView = window.innerWidth < 768;
            setIsMobile(isMobileView);

            // Set shorter height on mobile
            if (isMobileView) {
                setViewportHeight('70vh'); // Shorter height for mobile
            } else {
                setViewportHeight('100vh'); // Full height for desktop
            }
        };

        // Initial setup
        updateViewportHeight();

        // Update on resize
        window.addEventListener('resize', updateViewportHeight);

        // Update on orientation change for mobile devices
        window.addEventListener('orientationchange', updateViewportHeight);

        return () => {
            window.removeEventListener('resize', updateViewportHeight);
            window.removeEventListener('orientationchange', updateViewportHeight);
        };
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
        <div
            className="relative w-full overflow-hidden"
            style={{ height: viewportHeight }}
        >
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
                <div className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900"></div>
            )}

            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content container - Now left-aligned on mobile, centered on larger screens */}
            <div className="relative z-10 flex flex-col h-full text-white px-5 md:px-8 justify-center md:items-center">
                {/* Content alignment container */}
                <div className="md:text-center text-left max-w-full">
                    {/* Tagline and subtitle */}
                    <h1 className="font-bold tracking-tight max-w-full">
                        <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-extrabold">
                            {currentSlide.tagline}
                        </span>
                        <span className="block mt-1 md:mt-3 text-3xl md:text-4xl lg:text-5xl">
                            {currentSlide.subtitle}
                        </span>
                    </h1>

                    {/* Description text - left on mobile, centered with max-width on larger screens */}
                    <p className="text-xl md:text-xl lg:text-2xl mt-2 md:mt-5 lg:mt-6 leading-relaxed text-gray-200 md:mx-auto md:max-w-lg lg:max-w-3xl xl:max-w-4xl">
                        {currentSlide.description}
                    </p>

                    {/* Call to action button */}
                    <div className="mt-4 md:mt-8 lg:mt-10 ">
                        <Link href="/contact"> {/* Replace "/contact" with your desired route */}
                            <button className="bg-transparent cursor-pointer border-2 border-white text-white font-semibold py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-black text-base md:text-lg">
                                Let's Connect With Your Idea
                            </button>
                        </Link>
                    </div>

                    {/* Slider indicators - left on mobile, centered on larger screens */}
                    <div className="flex space-x-4 mt-6 md:mt-8 md:justify-center justify-start px-4">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all ${currentSlideIndex === index
                                        ? "bg-gradient-to-r from-purple-500 to-pink-400"
                                        : "bg-white bg-opacity-30 hover:bg-opacity-60"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Slider navigation buttons - These remain absolutely positioned
            <div className="absolute top-1/2 w-full flex justify-between px-2 md:px-6 -translate-y-1/2">
                <button
                    onClick={goToPrevSlide}
                    className="bg-purple-900/30 cursor-pointer text-white p-3 rounded-full hover:bg-purple-800/50 transition-all"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={goToNextSlide}
                    className="bg-purple-900/30 cursor-pointer text-white p-3 rounded-full hover:bg-purple-800/50 transition-all"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div> */}
        </div>
    );
}