import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export default function HowWeMakeSection({
  // Text content
  primaryText = "Here's how we make",
  highlightedText = "YOUR",
  secondaryText = "Life smoother",
  description = "Send us the raw footage, shot from your mobile camera or DSLR. We do the heavy lifting while you can sit back, relax on a couch, or tick-off other tasks on your list. Finally what you receive is a professional video that speaks volumes about your brand, to people who matter the most to you and your brand.",
  buttonText = "See How It Works",
  
  // Media content
  videoSrc = "/vdoEditing.mp4",
  posterImage = "/api/placeholder/640/360",
  
  // Styling options
  accentColor = "#4ecdc4",
  backgroundColor = "bg-black",
  headingColor = "text-gray-100",
  descriptionColor = "text-gray-300",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-black",
  buttonHoverColor = "hover:bg-gray-300",
  videoBorderColor = "border-gray-800",
  
  // Layout options
  paddingY = "py-16",
  paddingX = "px-4 md:px-12",
  maxWidth = "max-w-7xl",
  headingSize = "text-4xl md:text-5xl",
  descriptionSize = "text-2xl",
  
  // Functionality options
  autoPlay = true,
  loop = true,
  initiallyMuted = true,
  showUnmuteButton = true,
  showPlayButton = true,
  
  // CTA options
  showCTA = true,
  ctaLink = "#contact",
  roundedCorners = "rounded-lg",
  
  // Animation options
  buttonHoverAnimation = "hover:opacity-90 transition-all",
  
  // Audio control text
  muteText = "Tap to mute",
  unmuteText = "Tap to unmute"
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(initiallyMuted);

  // Start playing immediately when component mounts if autoPlay is true
  useEffect(() => {
    const attemptPlay = async () => {
      if (videoRef.current && autoPlay) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Video autoplay failed:", error);
          setIsPlaying(false);
        }
      }
    };

    // Attempt to play immediately if autoPlay is true
    attemptPlay();
    
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [autoPlay]);

  // Function to handle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.error("Failed to play video:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  // Function to handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`w-full ${backgroundColor} ${paddingY} ${paddingX}`}>
      <div className={`relative z-10 ${maxWidth} mx-auto px-4 md:px-8`}>
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className={`${headingSize} font-bold ${headingColor} mb-6`}>
            {primaryText}{' '}
            <span style={{ color: accentColor }} className="font-bold text-left">
              {highlightedText}
            </span>{' '}
            {secondaryText}
          </h2>
          <p className={` text-center ${descriptionSize} ${descriptionColor} leading-relaxed`}>
            {description}
          </p>
        </div>

        {/* Video Container */}
        <div className={`relative w-full overflow-hidden ${roundedCorners} border-8 ${videoBorderColor} shadow-xl aspect-video bg-black`}>
          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterImage}
            muted={isMuted}
            playsInline
            autoPlay={autoPlay}
            loop={loop}
            preload="auto"
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Unmute Button - Only show if showUnmuteButton is true */}
          {showUnmuteButton && (
            <div 
              className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-lg py-2 px-3 text-white text-sm flex items-center cursor-pointer hover:bg-opacity-90 transition-all"
              onClick={toggleMute}
            >
              {isMuted ? (
                <>
                  <VolumeX size={16} className="mr-2" />
                  <span>{unmuteText}</span>
                </>
              ) : (
                <>
                  <Volume2 size={16} className="mr-2" />
                  <span>{muteText}</span>
                </>
              )}
            </div>
          )}
          
          {/* Play Button Overlay - Only show when not playing and showPlayButton is true */}
          {!isPlaying && showPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <button
                className="w-16 h-16 rounded-full bg-gray-100 bg-opacity-90 flex items-center justify-center transition-transform hover:scale-110 hover:bg-white"
                aria-label="Play video"
                onClick={togglePlayPause}
              >
                <Play size={24} className="ml-1 text-gray-900" fill="currentColor" />
              </button>
            </div>
          )}
        </div>
        
        {/* CTA Button - Only show if showCTA is true */}
        {showCTA && (
          <div className="mt-8 text-center">
            <a
              href={ctaLink}
              className={`px-8 py-3 ${roundedCorners} font-medium ${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} ${buttonHoverAnimation}`}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}