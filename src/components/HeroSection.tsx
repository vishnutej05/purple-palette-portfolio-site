
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Mandala - positioned at bottom with 75% height and subtle upward movement */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-[bg-float_2s_ease-out_1.5s_both]">
        <img 
          src="/lovable-uploads/8f7e471a-1d3c-4ff4-b1a5-6bdc7a6e7010.png" 
          alt="Mandala Background" 
          className="w-[525px] h-[525px] object-contain opacity-80"
        />
      </div>
      
      {/* Hello badge section - slides down from top with delay */}
      <div className="container mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="flex justify-center mb-8 relative animate-[slide-down_1.2s_ease-out_0.5s_both]">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200 relative">
              <span className="text-custom-black font-medium">Hello!</span>
              <img 
                src="/lovable-uploads/3be135ea-86be-4307-b4dc-04ec9b5dbafd.png" 
                alt="Wave" 
                className="w-6 h-6"
              />
              {/* Decorative element stuck to top right of Hello card */}
              <img 
                src="/lovable-uploads/c1e7dd18-8f9b-4bf3-8abb-55e831afc420.png" 
                alt="Decorative element" 
                className="absolute -top-2 -right-6 w-12 h-12 opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main heading section - slides down from top with larger delay */}
      <div className="container mx-auto px-6 relative z-10 -mt-8">
        <div className="text-center relative animate-[slide-down_1.2s_ease-out_1s_both]">
          <h1 className="text-5xl lg:text-6xl font-bold text-custom-black leading-tight mb-4">
            I'm Ritika,
          </h1>
          <h2 className="text-5xl lg:text-6xl font-bold text-custom-black leading-tight">
            UI/UX Designer
          </h2>
          {/* Decorative element stuck to bottom left of main heading */}
          <img 
            src="/lovable-uploads/8e86c49a-4aba-44e8-bb32-9fd30aa439b5.png" 
            alt="Decorative element" 
            className="absolute -bottom-6 -left-12 w-16 h-16 opacity-70"
          />
        </div>
      </div>

      {/* Character image - rises smoothly from bottom center with increased size */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-0 z-20 animate-[rise-from-bottom_1.5s_ease-out_1.5s_both]">
        <img 
          src="/lovable-uploads/7b7efddc-574a-4169-8b86-533e84823bef.png" 
          alt="Character" 
          className="w-[500px] h-auto"
        />
      </div>

      {/* Quote and Rating section - positioned at bottom with side sliding animations */}
      <div className="absolute bottom-16 w-full px-8 z-20">
        <div className="flex justify-between items-end">
          {/* Quote section - slides in from left */}
          <div className="w-80 animate-[slide-right_1.2s_ease-out_2s_both]">
            <div className="flex flex-col items-start gap-4">
              <img 
                src="/lovable-uploads/deced0ec-f4d0-4be8-8a67-e7e016ebab52.png" 
                alt="Quote" 
                className="w-8 h-8 opacity-60"
              />
              <p className="text-custom-black text-base leading-relaxed font-medium">
                My design philosophy is simple: blend effortless user experience with seamlessly integrated, stunning visuals.
              </p>
            </div>
          </div>

          {/* Rating section - slides in from right */}
          <div className="w-80 animate-[slide-left_1.2s_ease-out_2s_both]">
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
  );
};

export default HeroSection;
