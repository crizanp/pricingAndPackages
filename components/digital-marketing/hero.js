import { useState } from 'react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center justify-center overflow-hidden text-black">
      {/* Decorative dashed circle */}
      <div className="absolute w-4/5 h-4/5 border-dashed border-2 border-gray-300 rounded-full"></div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-16">
        {/* Heading section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-200 px-6 py-2 rounded-full mb-4">
            <span className="text-3xl font-bold">Digital marketing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            & Ecommerce<br /> Product Boost
          </h1>
          <p className="text-lg text-gray-700 mb-8">Improve your business in digital.</p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Get started
          </button>
        </div>
        
        {/* Image gallery */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Left image */}
          <div className="w-64 h-64 bg-yellow-400 rounded-lg overflow-hidden">
            <img 
              src="https://media.istockphoto.com/id/1492663251/photo/delighted-woman-wearing-white-official-style-shirt-pointing-at-advertisement-area.jpg?s=612x612&w=0&k=20&c=_DeYIZYUvemZONAAQarTcfcPFIcBDPh6whE9oqLw3kM=" 
              alt="Person pointing" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Center image */}
          <div className="w-64 h-64 bg-purple-400 rounded-lg overflow-hidden mt-8 md:mt-20 relative">
            <img 
              src="https://thumbs.dreamstime.com/b/happy-black-woman-megaphone-speaker-advertising-marketing-against-yellow-studio-background-african-female-person-happy-289071037.jpg" 
              alt="Person smiling" 
              className="w-full h-full object-cover"
            />
            {/* Star decoration */}
            <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 bg-black rounded-full p-4">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
          
          {/* Right image */}
          <div className="w-64 h-64 bg-blue-400 rounded-lg overflow-hidden">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/021/512/314/small_2x/portrait-of-asian-businessman-wearing-suit-on-blue-background-photo.jpg" 
              alt="Person using phone" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Small decorative star */}
      <div className="absolute top-24 right-1/4">
        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </div>
  );
}