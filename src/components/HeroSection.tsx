
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-32">
      {/* Background Mandala - positioned at bottom with higher opacity */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
        <img 
          src="/lovable-uploads/6e7f3587-9b4e-45e6-8878-0551e052a9b9.png" 
          alt="Mandala Background" 
          className="w-[700px] h-[700px] object-contain opacity-60"
        />
      </div>
      
      {/* Decorative elements with proper positioning and borders */}
      <img 
        src="/lovable-uploads/04f5d37e-af37-427f-96a6-79f4cffab116.png" 
        alt="Decorative element" 
        className="absolute top-36 right-24 w-16 h-16 opacity-70 border-2 border-custom-black rounded-lg p-2"
      />
      <img 
        src="/lovable-uploads/0d698e61-99cc-4190-ac9f-c5d3d240174e.png" 
        alt="Decorative element" 
        className="absolute bottom-80 left-24 w-20 h-20 opacity-70 border-2 border-custom-black rounded-lg p-2"
      />

      {/* Main content container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Hello badge - centered above heading */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-custom-black font-medium">Hello!</span>
              <img 
                src="/lovable-uploads/3be135ea-86be-4307-b4dc-04ec9b5dbafd.png" 
                alt="Wave" 
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Main heading - centered */}
          <div className="mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-custom-black leading-tight mb-4">
              I'm Ritika,
            </h1>
            <h2 className="text-6xl lg:text-7xl font-bold text-custom-black leading-tight">
              UI/UX Designer
            </h2>
          </div>
        </div>
      </div>

      {/* Quote section - positioned at left edge, vertically centered */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-80 z-20">
        <div className="flex items-start gap-4">
          <img 
            src="/lovable-uploads/deced0ec-f4d0-4be8-8a67-e7e016ebab52.png" 
            alt="Quote" 
            className="w-8 h-8 mt-1 opacity-60 flex-shrink-0"
          />
          <div>
            <p className="text-custom-black text-base leading-relaxed font-medium">
              My design philosophy is simple: blend effortless user experience with seamlessly integrated, stunning visuals.
            </p>
          </div>
        </div>
      </div>

      {/* Rating section - positioned at right edge, vertically centered */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 z-20">
        <div className="text-right">
          <div className="flex justify-end mb-3">
            <img 
              src="/lovable-uploads/51c37acf-8d58-4e3d-8d80-f6da65f958b9.png" 
              alt="5 stars" 
              className="h-6"
            />
          </div>
          <h3 className="text-2xl font-bold text-custom-black mb-1">Rated 5/5</h3>
          <p className="text-gray-600 text-sm">for User Experience</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
