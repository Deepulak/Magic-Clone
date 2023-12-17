// Section.js
import Image from 'next/image';

import React from 'react';

const Section = ({ title, imageUrl, description }) => {
  return (
    <div className="section flex flex-col shadow-xl p-9 rounded-md">
      <Image src={imageUrl} alt={title} width={80} height={15} />
      <h2 className='text-2xl font-bold '>{title}</h2>
      <p className='text-xl '>{description}</p>
    </div>
  );
};

export default Section;
