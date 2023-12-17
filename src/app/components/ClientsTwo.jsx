// CenteredDiv.js
import React from 'react';
import { FaStar } from "react-icons/fa";

const ClientsTwo = () => {
  return (
    <div className="flex justify-center">
      {/* Options for Large Screens */}
      <div className="md:flex lg:flex">
        <div className="lg:w-1/3 p-4">
          <div className="bg-gray-200 p-6 rounded shadow">
          <FaStar className=' text-black' />
            {/* <h2 className="text-xl font-bold mb-2">Option 1</h2> */}
            <p className="text-gray-700">"The folks at Magic are great to collaborate with and make the process of adding Virtual Assistants easy. The prospects they propose are vetted and right on the money to meet your needs. The work ethic of the virtual assistants is wonderful. They can work independently as needed and report back with regular reporting as to their progress"</p>
          </div>
        </div>
        <div className="lg:w-1/3 p-4">
          <div className="bg-gray-200 p-6 rounded shadow">
          <FaStar className=' text-black' />
            {/* <h2 className="text-xl font-bold mb-2">Option 2</h2> */}
            <p className="text-gray-700">"Communication, clarity, consistency have been some of the foundational features that I’ve enjoyed in my experience with Magic. They’ve been extremely pivotal in the growth of my company"</p>
          </div>
        </div>
        <div className="lg:w-1/3 p-4">
          <div className="bg-gray-200 p-6 rounded shadow">
          <FaStar className=' text-black' />
            {/* <h2 className="text-xl font-bold mb-2">Option 3</h2> */}
            <p className="text-gray-700">"I've adored my assistant since the day I hired him. He is wonderful, intelligent, respectful, always on time and ahead of deadlines, pays close attention to detail, and just overall amazing! I refuse to abandon him. I just wish he could get more clients to show off his skills! He is deserving of so many opportunities."</p>
          </div>
        </div>
      </div>

      {/* For Small Screens, 1 Option Centered */}
      <div className="sm:hidden p-4">
        <div className="bg-gray-200 p-6 rounded shadow">
        <FaStar className=' text-black' />
          {/* <h2 className="text-xl font-bold mb-2">Option 1</h2> */}
          <p className="text-gray-700">Description for option 1.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientsTwo;
