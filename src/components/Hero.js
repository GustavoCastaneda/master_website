import React from 'react'
import ParticleAnimation from './Particles'
import Waves from './Waves'
import Conections from './Conections'
import Group10 from './Group10'
import Button from './Button'

const Hero = () => {
  return (
    <div>
       <section class="bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 pt-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-4xl lg:text-4xl  titulos md:pt-6 pb-5">Welcome to the Blockchain</h1>
              <div className='flex justify-center pb-7'>
                <ParticleAnimation />
              </div>
              <div class="flex space-y-4 sm:justify-center sm:space-y-0 sm:space-x-4 pb-5">
                  <h2  class="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 md:text-6xl text-4xl focus:ring-primary-300  titulos">
                      All your crypto in one place
                  </h2>
                  
                  
              </div> 
              <div class="flex space-y-4 sm:justify-center sm:space-y-0 sm:space-x-4">
                  <h3  class="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 md:text-2xl text-gl focus:ring-primary-300  titulos">
                    Exchange, NFT's, CrowdFounfing, and all your aplications come togheather in the same place
                  </h3>
              </div> 
              <div className='pt-10'>
                <Button />
              </div>
              
          </div>
          <div className=''>
            <Group10 />
          </div>
          
          
      </section>

      
    </div>
  )
}

export default Hero