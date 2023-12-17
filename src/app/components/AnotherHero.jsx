import Image from 'next/image'
import React from 'react'

const AnotherHero = () => {
  return (
    <div className='text-black md:mt-12 sm:mt-8 '>
        <div className='md:mt-8 md:w-1/2'>
            <Image src="/image/another-hero.webp" width={1000} height={400} alt="another hero image" />
        </div>
        <div className='lg:ml-56 xl:ml-96 xl:-mt-96'>
            <div className='md:-mt-96 md:ml-96 sm:ml-4 lg:ml-96 lg:-mt-96 xl:ml-96 xl:-mt-96 sm:mt-8'>
            <h1 className='md:ml-72 font-bold sm:ml-24 sm:text-sm sm:mt-2 lg:text-xl xl:text-2xl xl:ml-96 '>T H E  W O R L D S  B E S T</h1>
            <h2 className='md:ml-48 sm:text-2xl sm:font-bold sm:ml-7 lg:text-3xl xl:text-4xl xl:ml-96 sm:mt-4'>Magic Executive Assistants</h2>
            </div>
            <div className='md:ml-48 md:mt-6 xl:ml-96 sm:mt-4'>
            <p className='md:w-96 md:ml-96 md:text-xl sm:ml-2'>Magic Executive Assistants provide next-level support. Delegate your email, calendar, travel, and to do list. Perform complex requests such as helping you coordinate events, fundraising and sales. You’ll be amazed at how much time you’ll save by working with a Magic EA.</p>
            </div>
        </div>
        <div className='xl:ml-96'>
        <div className='md:ml-96 sm:mt-8 sm:-ml-24 lg:ml-96 xl:ml-96'>
        <a
          href="#"
          class="p-3 px-6 md:ml-72 lg:ml-96 sm:ml-48 pt-2 text-white bg-blue-800 rounded-full baseline hover:bg-blue-400"
          >Explore Magic EAs</a
        >
        </div>
        </div>  
    </div>
  )
}

export default AnotherHero