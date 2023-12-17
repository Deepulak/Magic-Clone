import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div className='text-black items-center md:ml-72 md:mt-10 md:mb-9 lg:ml-96 xl:ml-96 sm:mt-8 '>
        <h1 className='items-center md:ml-32 md:text-xl font-bold sm:ml-40 lg:text-2xl xl:text-4xl xl:ml-96'>As featured in</h1>
        <div className='md:mt-2 md:-ml-32 md:flex md:gap-8 sm:flex md:w-64 lg:w-96 sm:w-16 sm:gap-8 sm:mt-6 sm:ml-10 lg:mt-4 xl:ml-60'>
            <Image src="/image/Frame.svg" alt="frame" width={150} height={150} />
            <Image src="/image/Frame-1.svg" alt="frame" width={150} height={150} />
            <Image src="/image/Frame-2.svg" alt="frame" width={150} height={150} />
            <Image src="/image/Frame-3.svg" alt="frame" width={150} height={150} />
        </div>
    </div>
  )
}

export default Company