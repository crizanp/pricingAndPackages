import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MoveRight } from 'lucide-react';

const defaultCards = [
    {
        id: 1,
        title: "NFT Game Development",
        description: "Cubix specializes in developing NFT-based games designed to work with blockchain technology to provide amazing, innovative, and incredible gaming experiences.",
        image: "/api/placeholder/600/400",
        icon: <Star className="w-6 h-6" />
    },
    {
        id: 2,
        title: "NFT Marketplace",
        description: "Create custom NFT marketplaces with seamless trading experiences, secure transactions, and integration with popular blockchain networks.",
        image: "/api/placeholder/600/400",
        icon: <Star className="w-6 h-6" />
    },
    {
        id: 3,
        title: "NFT Collection Creation",
        description: "Design and deploy unique NFT collections with custom artwork, smart contracts, and metadata for collectibles, art, or utility tokens.",
        image: "/api/placeholder/600/400",
        icon: <Star className="w-6 h-6" />
    }
];

export default function ServiceCardSlider({
    cards = defaultCards,
    title = "Enhanced service selection",
    description = "Benefit from our enhanced NFT marketplace development services to grow your online presence and widen your customer reach with impeccable NFT experiences.",
    autoplay = true,
    autoplaySpeed = 5000
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setTimeout(() => setIsAnimating(false), 700);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setTimeout(() => setIsAnimating(false), 700);
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
    }, [autoplay, autoplaySpeed, isHovering, cards.length, isAnimating]);

    return (
        <div
            className="w-full bg-black py-12 md:py-16 lg:py-24 relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 bg-white top-0 right-0"></div>
            <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-5 bg-white bottom-0 left-0"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
                <div className="space-y-6 md:space-y-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                        {title.split(" ").slice(0, -1).join(" ")} <br />
                        <span className="text-white relative inline-block">
                            {title.split(" ").slice(-1)}
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed">
                        {description}
                    </p>
                    <div className="flex items-center pt-4">
                        <button className="group flex items-center space-x-2 text-white border-b border-transparent hover:border-white pb-1 transition-all duration-300">
                            <span className="font-medium text-lg cursor-pointer">Explore all services</span>
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
                {/* Right card column */}
                <div className="relative w-full">
                    <div className="overflow-hidden rounded-xl relative w-full border border-white/10 backdrop-filter backdrop-blur-sm bg-black/40">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`transition-all duration-700 transform ${index === currentIndex
                                        ? 'translate-x-0 opacity-100 z-10 relative'
                                        : 'absolute inset-0 opacity-0 z-0 ' +
                                        (index < currentIndex ? '-translate-x-full' : 'translate-x-full')
                                    }`}
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>

                                <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10 h-full relative z-10">
                                    <div className="absolute top-0 right-0 w-40 h-20 bg-white/5 rounded-bl-full"></div>
                                    <div>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-6">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{card.title}</h3>
                                        <div className="w-16 h-1 bg-white mb-6"></div>
                                        <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed mb-12">{card.description}</p>

                                        <div className="flex space-x-4 mt-auto">
                                            <button
                                                className="bg-transparent border border-white/20 p-3 rounded-full hover:bg-white/10 transition-all z-20 group cursor-pointer"
                                                onClick={prevSlide}
                                                disabled={isAnimating}
                                                aria-label="Previous slide"
                                            >
                                                <ChevronLeft className="text-white w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                            </button>
                                            <button
                                                className="bg-white text-black p-3 rounded-full hover:bg-white/90 transition-all z-20 group cursor-pointer"
                                                onClick={nextSlide}
                                                disabled={isAnimating}
                                                aria-label="Next slide"
                                            >
                                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}