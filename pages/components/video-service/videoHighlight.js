import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export default function HowWeMakeSection({
  primaryText = "Here's how we make",
  highlightedText = "YOUR",
  secondaryText = "Life smoother",
  description = "Send us the raw footage, shot from your mobile camera or DSLR. We do the heavy lifting while you can sit back, relax on a couch, or tick-off other tasks on your list. Finally what you receive is a professional video that speaks volumes about your brand, to people who matter the most to you and your brand.",
  videoSrc = "/vdoEditing.mp4",
  accentColor = "#4ecdc4",
  buttonText = "See How It Works",
  posterImage = "https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/uploads/2021/06/061121_iMovie-1200x673.jpg"
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Start playing immediately when component mounts
  useEffect(() => {
    const attemptPlay = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Video autoplay failed:", error);
          setIsPlaying(false);
        }
      }
    };

    // Attempt to play immediately
    attemptPlay();
    
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

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
    <div className="w-full bg-black py-16 px-4 md:px-12">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading Section */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            {primaryText}{' '}
            <span style={{ color: accentColor }} className="font-bold text-left">
              {highlightedText}
            </span>{' '}
            {secondaryText}
          </h2>
          <p className="max-w-4xl text-left text-2xl text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Video Container - Simplified */}
        <div className="relative w-full overflow-hidden rounded-lg border-8 border-gray-800 shadow-xl aspect-video bg-black">
          {/* Direct video display - no background image overlay */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterImage}
            muted={isMuted}
            playsInline
            autoPlay
            preload="auto"
            onEnded={() => setIsPlaying(false)}
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Unmute Button */}
          <div 
            className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-lg py-2 px-3 text-white text-sm flex items-center cursor-pointer hover:bg-opacity-90 transition-all"
            onClick={toggleMute}
          >
            {isMuted ? (
              <>
                <VolumeX size={16} className="mr-2" />
                <span>Tap to unmute</span>
              </>
            ) : (
              <>
                <Volume2 size={16} className="mr-2" />
                <span>Tap to mute</span>
              </>
            )}
          </div>
          
          {/* Play Button Overlay - Only show when not playing */}
          {!isPlaying && (
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
        
        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button
            className="px-8 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-all"
            style={{ backgroundColor: accentColor }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}