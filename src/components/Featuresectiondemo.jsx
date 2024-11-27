import React from 'react';
import { FeaturesSectionDemo } from './ui/Featuresection';
import { motion } from 'framer-motion';
import { GradualSpacingDemo } from './Gradualspacingdemo';

function Featuresection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Heading with animation */}
      <GradualSpacingDemo>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-snug break-words w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover Amazing Features to Elevate Your Development Experience
        </motion.h2>
      </GradualSpacingDemo>

      {/* Description text */}
      <p className="text-base sm:text-lg text-center max-w-2xl mb-8">
        {/* Add your description text here */}
        Explore tools that make creating seamless UIs easy, fast, and efficient.
      </p>

      {/* Feature Section Demo centered */}
      <div className="flex justify-center items-center w-full">
        <FeaturesSectionDemo />
      </div>
    </div>
  );
}

export default Featuresection;
