import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-gray-100 sm:text-4xl sm:-mt-16 md:grid-cols-2 md:-ml-12'>
        <h4 className='mx-24 my-24 text-black font-bold lg:text-8xl'>
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 md:text-5xl lg:text-7xl xl:text-8xl">The World's Best <br /> </span>
       <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300 md:text-5xl lg:text-7xl xl:text-8xl'>Assistant </span ><span className='xl:text-8xl lg:text-7xl md:text-5xl '>For High-</span><br />
       <span className='font-bold text-black md:text-5xl lg:text-7xl xl:text-8xl'>Growth Companies</span>
        </h4>
        <p className='text-black mx-24 realtive -mt-20 md:text-xl sm:text-base'>Magic Combines the best assistants<br /> in the world with AI 
            tools<br /> to make getting worke done more efficient.
        </p>
        <div className='md:mt-6 md:ml-24 lg:mt-2 xl:mt-10 sm:ml-20'>
        <a
          href="#"
          class="p-3 px-6 pt-2 text-base text-white bg-blue-800 rounded-full baseline hover:bg-blue-400"
          >Get Started</a
        >
            <h1 className='text-black text-base font-bold md:ml-44 md:-mt-6 sm:ml-40 sm:-mt-6 sm:mb-10'>Learn More</h1>
        </div>   
        <div className='lg:ml-2 md:ml-96 md:-mt-96 md:w-full lg:w-full lg:mt-12 xl:ml-60'>
        <div className='flex lg:ml-96 lg:-mt-96 md:ml-48 md:mt-10 xl:-mt-96'>
            <Image className='lg:ml-96 lg:-mt-20 md:w-9/12 lg:w-8/12 xl:w-7/12 xl:-mt-40' src="/image/hero.webp" width={1000} height={700} alt="hero logo" />
        </div>
        </div>
        
        
    </div>
  )
}

export default Hero