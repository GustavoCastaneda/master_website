import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'
import ParticleAnimation from '../src/components/Particles'
import Hero from '../src/components/Hero'
import Cta1 from '../src/components/Cta1'



export default function Home() {
  return (
    <div >
      <div className='bg-gradient-to-b from-slate-900 via-blue-800 to-blue-500'>
        <Header />
        
      </div>
      <div>
        <section className='pt-[75px]'>
          <Hero />
        </section>
        <section className='bg-lime-500 h-[60px]'>
          Get our token free
        </section>
        <section>
          <Cta1 />  
        </section>

      </div>
    </div>
  )
}
