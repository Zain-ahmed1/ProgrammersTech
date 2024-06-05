import React from 'react'
import { styles } from '../../../Data/styles'

export default function Hero() {
  return (
    <>
      <section id='home' className='min-h-[450px] md:h-[560px] sm:h-[700px] py-10 mt-24 lg:mt-20'>
        <div className={`${styles.sectionWidth} text-white h-full`}>
          <div className='flex items-center md:justify-between justify-center h-full md:flex-row flex-col'>
            <div className='flex flex-col gap-y-2 items-center md:items-start md:justify-start justify-center w-full'>
              <span className='work-sans font-semibold text-lg md:text-xl'>Hi, I’m Zain Ahmed</span>
              <div className='verdanaBold text-center md:text-left'>
                <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-[1.2]'>
                  <span className='block'>I Transform Concepts&nbsp;</span>
                  <span>
                    into&nbsp;
                    <span className='text-yolk'>Digital Realities</span>
                  </span>
                </h1>
                <p className='work-sans text-base sm:text-lg font-nomral py-4 w-full text-center md:text-left max-w-[650px] md:pr-20'>
                  I craft exceptional websites that bridge the gap between design and functionality.
                  Let's collaborate to bring your vision to life.
                </p>
              </div>
            </div>
            <div className='md:mt-0 sm:mt-10 mt-6'>
              <div className="blob"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
