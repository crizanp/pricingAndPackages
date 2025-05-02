import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Card data structure for services
const defaultCards = [
    {
        id: 1,
        title: "NFT Game Development",
        description: "Cubix specializes in developing NFT-based games designed to work with blockchain technology to provide amazing, innovative, and incredible gaming experiences.",
        image: "/api/placeholder/600/400",
        accentColor: "bg-purple-500"
    },
    {
        id: 2,
        title: "NFT Marketplace",
        description: "Create custom NFT marketplaces with seamless trading experiences, secure transactions, and integration with popular blockchain networks.",
        image: "/api/placeholder/600/400",
        accentColor: "bg-blue-500"
    },
    {
        id: 3,
        title: "NFT Collection Creation",
        description: "Design and deploy unique NFT collections with custom artwork, smart contracts, and metadata for collectibles, art, or utility tokens.",
        image: "/api/placeholder/600/400",
        accentColor: "bg-pink-500"
    }
];

export default function ServiceCardSlider({
    cards = defaultCards,
    title = "Enhanced service selection",
    description = "Benefit from our enhanced NFT marketplace development services to grow your online presence and widen your customer reach with impeccable NFT experiences.",
    autoplay = true,
    autoplaySpeed = 5000,
    darkMode = true,
    accentColor = "pink"
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Generate theme classes based on props
    const themeClasses = {
        bg: darkMode ? "bg-black" : "bg-gray-100",
        text: darkMode ? "text-white" : "text-gray-900",
        accent: `text-${accentColor}-500`,
        border: `border-${accentColor}-500`,
        button: darkMode
            ? `bg-${accentColor}-600 hover:bg-${accentColor}-500`
            : `bg-${accentColor}-500 hover:bg-${accentColor}-400`
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    useEffect(() => {
        let interval;
        if (autoplay && !isHovering) {
            interval = setInterval(() => {
                nextSlide();
            }, autoplaySpeed);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [autoplay, autoplaySpeed, isHovering, cards.length]);

    return (
        <div
            className={`w-full ${themeClasses.bg} py-24 px-4 relative overflow-hidden`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Main content area */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left text column */}
                <div className="space-y-6">
                    <h2 className={`text-6xl font-bold ${themeClasses.text}`}>
                        {title.includes(" ") ?
                            <>
                                {title.split(" ").slice(0, -1).join(" ")} <br />
                                <span className={themeClasses.accent}>{title.split(" ").slice(-1)}</span>
                            </> :
                            title
                        }
                    </h2>
                    <p className={`text-2xl ${themeClasses.text} opacity-90 max-w-xl`}>
                        {description}
                    </p>
                    <div className="flex space-x-4 pt-4">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? `${themeClasses.button} scale-125` : 'bg-gray-600'
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right card column */}
                <div
                    className="relative h-108"
                    style={{
                        boxShadow: '0 0 5px rgba(255, 255, 255, 0.36)', 
                        borderRadius: '1rem', 
                    }}
                >

                    <div className="overflow-hidden rounded-xl shadow-2xl relative h-full">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`absolute inset-0 transition-all duration-700 transform ${index === currentIndex
                                        ? 'translate-x-0 opacity-100 z-10'
                                        : index < currentIndex
                                            ? '-translate-x-full opacity-0 z-0'
                                            : 'translate-x-full opacity-0 z-0'
                                    }`}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundBlendMode: 'overlay'
                                    }}
                                ></div>

                                {/* Color overlay with gradient */}
                                <div className={`absolute inset-0 bg-black/90 opacity-60`}>
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute h-64 w-64 rounded-full blur-3xl -top-12 -right-12 bg-black"></div>
                                        <div className="absolute h-40 w-40 rounded-full blur-3xl bottom-12 left-12 bg-black"></div>
                                    </div>
                                </div>

                                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                                    <div className="mt-4">
                                        <h3 className="text-4xl font-bold text-white mb-4">{card.title}</h3>
                                        <p className="text-white/90 text-2xl">{card.description}</p>
                                    </div>

                                    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-md rounded-tl-3xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <button
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg p-2 rounded-full hover:bg-white/20 transition-all z-20"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg p-2 rounded-full hover:bg-white/20 transition-all z-20"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="text-white" size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}