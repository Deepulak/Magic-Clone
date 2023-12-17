// AlternatingContentDiv.js
import React from 'react';
import Image from 'next/image';

const AlternatingContentDiv = () => {
  return (
    
    <div className="flex flex-wrap items-center justify-center">
      
      {/* Content 1: Image on the left, Heading and Description on the right */}
      <div className="w-full lg:w-1/2 md:w-1/2 p-4 sm:mt-4">
        <Image className="w-full h-auto lg:mr-4" width={150} height={150} src="/image/discovery.webp" alt="Image 1" />
        <div className="lg:ml-4 mt-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Discovery</h2>
          <p className="text-gray-700">We make it easy to sign up on your own, or, if you’re hiring more than one assistant, we can hop on a discovery call to discuss your needs.</p>
        </div>
      </div>

      {/* Content 2: Image on the right, Heading and Description on the left */}
      <div className="w-full lg:w-1/2 md:w-1/2 p-4 xl:mt-6">
        <Image className="w-full h-auto lg:ml-4 mt-4" width={150} height={150} src="/image/matching.webp" alt="Image 2" />
        <div className="lg:mr-4 mt-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Matching</h2>
          <p className="text-gray-700">Next, our Matching team gets to work to find you the perfect team. We have a bench of over 1,600 assistants across customer service, sales outsourcing, lead gen, virtual assistants, and more. We can also build custom hiring funnels for clients who need more assistants.</p>
        </div>
      </div>

      {/* Content 3: Image on the left, Heading and Description on the right */}
      <div className="w-full lg:w-1/2 md:w-1/2 p-4">
        <Image className="w-full h-auto lg:mr-4" width={150} height={150} src="/image/dashboard.webp" alt="Image 3" />
        <div className="lg:ml-4 mt-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Onboarding</h2>
          <p className="text-gray-700">Once you have your assistants, it’s time to get to work! Our service dashboard makes it easy to manage your workers and track their progress and you’ll have a dedicated account manager for any questions along the way.</p>
        </div>
      </div>

      {/* Button */}
      <div className="w-full text-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full">Get Started</button>
      </div>
    </div>
  );
};

export default AlternatingContentDiv;
