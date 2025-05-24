
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Mandala - positioned absolutely */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/6e7f3587-9b4e-45e6-8878-0551e052a9b9.png" 
          alt="Mandala Background" 
          className="w-[800px] h-[800px] object-contain opacity-60 animate-float"
        />
      </div>
      
      {/* Decorative elements */}
      <img 
        src="/lovable-uploads/3be135ea-86be-4307-b4dc-04ec9b5dbafd.png" 
        alt="Decorative element" 
        className="absolute top-32 left-20 w-16 h-16 opacity-70 animate-float"
        style={{ animationDelay: '1s' }}
      />
      <img 
        src="/lovable-uploads/2735036b-7dc2-4443-a7d4-be57af0d963e.png" 
        alt="Decorative element" 
        className="absolute top-1/3 left-32 w-20 h-20 opacity-60 animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Main content container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Quote and Philosophy */}
          <div className="space-y-8 animate-fade-in">
            {/* Hello badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <span className="text-custom-black font-medium">Hello!</span>
              <img 
                src="/lovable-uploads/3be135ea-86be-4307-b4dc-04ec9b5dbafd.png" 
                alt="Wave" 
                className="w-6 h-6"
              />
            </div>

            {/* Quote section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <img 
                  src="/lovable-uploads/deced0ec-f4d0-4be8-8a67-e7e016ebab52.png" 
                  alt="Quote" 
                  className="w-12 h-12 mt-2 opacity-60"
                />
                <div>
                  <p className="text-custom-black text-lg leading-relaxed font-medium">
                    My design philosophy is simple: blend effortless user experience with seamlessly integrated, stunning visuals.
                  </p>
                </div>
              </div>
            </div>

            {/* Rating section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img 
                      src="/lovable-uploads/51c37acf-8d58-4e3d-8d80-f6da65f958b9.png" 
                      alt="5 stars" 
                      className="h-8"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-custom-black">Rated 5/5</h3>
                  <p className="text-gray-600">for User Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Main content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-custom-black leading-tight">
                I'm Ritika,
                <br />
                <span className="text-custom-black">UI/UX Designer</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
