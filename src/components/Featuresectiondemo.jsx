import React from 'react';
import { FeaturesSectionDemo } from './ui/Featuresection';
import { motion } from 'framer-motion';
import { GradualSpacingDemo } from './Gradualspacingdemo';

function Featuresection() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Heading with animation */}
      <GradualSpacingDemo/>

      {/* Description text */}
      <p className="text-lg text-center max-w-2xl mb-8">
      </p>

      {/* Feature Section Demo centered */}
      <div className="flex justify-center items-center w-full">
        <FeaturesSectionDemo />
      </div>
    </div>
  );
}

export default Featuresection;
