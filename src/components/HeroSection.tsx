
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-32">
      {/* Background Mandala - positioned absolutely */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/6e7f3587-9b4e-45e6-8878-0551e052a9b9.png" 
          alt="Mandala Background" 
          className="w-[600px] h-[600px] object-contain opacity-40"
        />
      </div>
      
      {/* Decorative elements */}
      <img 
        src="/lovable-uploads/3be135ea-86be-4307-b4dc-04ec9b5dbafd.png" 
        alt="Decorative element" 
        className="absolute top-32 left-20 w-12 h-12 opacity-70"
      />
      <img 
        src="/lovable-uploads/2735036b-7dc2-4443-a7d4-be57af0d963e.png" 
        alt="Decorative element" 
        className="absolute top-48 right-24 w-16 h-16 opacity-60"
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

        {/* Bottom content - Quote on left, Rating on right */}
        <div className="flex justify-between items-end max-w-6xl mx-auto mt-20">
          {/* Quote section - Left side */}
          <div className="w-80">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
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
          </div>

          {/* Rating section - Right side */}
          <div className="w-80">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
