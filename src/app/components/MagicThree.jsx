// ResponsiveLayout.js
import Image from 'next/image';
import React from 'react';

const MagicThree = () => {
  return (
    <div className="md:flex lg:flex md:-mt-14">
    {/* Left side */}
    <div className="lg:w-1/2 p-8 lg:order-1 md:mt-28 text-black">
      <div className="mb-4 md:ml-12 xl:mt-32">
        <h1 className="md:text-xl font-bold mb-2 xl:text-2xl">O U R  N E W A I  M O D E L</h1>
        <h2 className="md:text-4xl font-bold md:mb-4 sm:text-3xl xl:text-6xl">Introducing Magic 2</h2>
        <p className="text-gray-600 mb-4 md:text-base sm:mt-4">Magic 2 is trained to be like a real executive assistant. It gets <br />straight to the point, only asking you for the details it needs to get to work.</p>
        <button className="bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full sm:mt-8">Join the Waitlist</button>
      </div>
    </div>

    {/* Right side */}
    <div className="lg:w-1/2 lg:order-2 md:mt-36 md:-ml-6">
      <Image className="w-full h-auto lg:object-cover lg:h-full" width={500} height={300} src="/image/magic-painter.webp" alt="Image" />
    </div>
  </div>
  );
};

export default MagicThree;
