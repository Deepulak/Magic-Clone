// Card.js
import Image from 'next/image';
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-wrap flex-2 justify-center gap-10 p-4">
      {[1, 2, 3, 4].map((card) => (
        <div key={card} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform hover:scale-105">
            <Image
              src="/image/lighting.svg"
              alt={`Card ${card}`}
              className="w-full"
              width={50}
              height={50}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card {card}</div>
              <p className="text-gray-700 text-base">Description for Card {card}.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
