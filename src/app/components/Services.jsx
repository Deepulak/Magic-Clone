import React from 'react'
import Section from './SectionTwo'

const Services = () => {
  return (
    <div className='text-black md:ml-72 md:mt-4 xl:ml-96 xl:mt-20'>
        <h1 className='font-bold md:text-xl md:ml-36 md:mb-2 sm:mt-2 sm:ml-32 lg:text-2xl lg:ml-56 xl:text-4xl xl:ml-96'>OUR SERVICES</h1>
        <h1 className='font-bold md:text-3xl md:-ml-48 sm:mt-2 sm:text-2xl sm:ml-5 sm:mb-2 lg:text-3xl lg:-ml-16 xl:text-5xl'>Get Overnight Results With Magic Modern Outsourcing</h1>
        
        
    <div className="text-black md:grid md:grid-cols-2 md:mt-10 md:-ml-72">   
  <div className="row hover:bg-blue-300 p-9 rounded-md xl:-ml-28">
    <Section
      title="Magic Virtual Assistant"
      imageUrl="/image/lighting.svg"
      description="Inbox & calendar management, data entry, executive administration, meeting notetaking & transcription, travel coorditnation, and more."
    />
  </div>
  <div className='row hover:bg-blue-300 p-9 rounded-md'>
  <Section
      title="Infinitely Scalable"
      imageUrl="/image/magic.svg"
      description="Whether you need 1 worker or 1,000, we make it easy to scale your team. We handle all the recruiting and hiring, so you don’t have to."
    />
  </div>
  <div className="row hover:bg-blue-300 p-9 rounded-md xl:-ml-28">
    <Section
      title="Top Talent"
      imageUrl="/image/magic-ai.svg"
      description="We only hire the top 3% of talent Every candidate goes through a multi-step screening process and is trained on current technology, including Magic AI."
    />
  </div>
  <div className='row hover:bg-blue-300 p-9 rounded-md'>
  <Section
      title="Powered by cutting edge AI"
      imageUrl="/image/magic-top.svg"
      description="Our executive assistants and virtual assistants use custom Magic AI that helps them be more efficient.Our executive assistants "
    />
  </div>
  
</div>
    </div>
    
  )
}

export default Services