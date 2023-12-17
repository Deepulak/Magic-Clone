"use client"

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Animation = () => {
  return (
    <div className="font-bold sm:text-sm md:text-white sm:text-white lg:text-3xl md:mt-8 md:text-xl lg:mt-28">
      <div className=" sm:-mt-7  xl:-mt-24">
        <div className="h-32 bg-purple-800"></div>
      {/* <Image className="md:h-32 sm:h-32 " src="/image/purple3.svg" width={1300} height={20} alt="purple background" />
      */}
      </div> 
      <div className="xl:ml-36">
      <div className="sm:-mt-16 sm:ml-5 lg:ml-48 md:ml-52 xl:ml-96 xl:-mt-20">
      <TypeAnimation
        sequence={[
          "Magic is made for Sales",
          1000,
          "Magic is made for Marketing",
          1000,
          "Magic is made for Operations",
          1000,
          "Magic is made for Finance",
          1000,
          "Magic is made for Recruiting",
          1000,
          "Magic is made for Retention",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
      </div>
      </div>
    </div>
  );
};

export default Animation;