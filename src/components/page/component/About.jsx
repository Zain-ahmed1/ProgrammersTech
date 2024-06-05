import React, { useState } from 'react'
import { styles } from '../../../Data/styles'
import { CV, ProfileImg } from '../../../assets'

export default function About() {

  return (
    <>
      <section id="about" className='mx-4'>
        <div className={`${styles.sectionWidth} bg-midnight rounded-2xl px-[0!important] mb-14 object-cover`}>
          <div className='flex lg:items-center lg:justify-start lg:flex-row flex-col-reverse gap-x-4'>
            <div className='object-cover w-full sm:w-[450px] h-[400px] sm:h-full'>
              <img src={ProfileImg} alt="Profile Picture" className='lg:rounded-s-2xl lg:rounded-none rounded-b-2xl sm:rounded-2xl w-full lg:-ml-5 h-full object-cover' />
            </div>
            <div className=' text-white 2xl:py-0 py-8 px-5'>
              <h1 className='pb-4 verdanaBold text-2xl md:text-3xl'>About <span className='text-yolk'>Me</span></h1>

              <div className='work-sans flex flex-col gap-y-4 w-full max-w-[750px] lg:pr-0 sm:pr-4'>
                <p className='text-base md:text-lg'>
                  I'm a passionate and skilled web developer with 4+ years of experience  dedicated to crafting exceptional digital experiences. I leverage a  blend of creativity and technical expertise to transform ideas into  fully functional and visually stunning websites.
                </p>
                <p className='text-base md:text-lg'>
                  <span className='font-bold'>I believe in Collaboration.</span> Leveraging my strong command of HTML5, CSS3, SaaS development principles, Tailwind CSS for rapid UI creation, and React JS & TypeScript for interactive and scalable applications, I collaborate closely with clients to understand their unique goals and requirements.
                </p>
                <p className='text-base md:text-lg'>
                  <span className='font-bold'>Ready to elevate your online presence?</span> If you're looking to embark on a journey of digital transformation, don't hesitate to reach out. Together, we can turn your vision into reality and create something truly extraordinary in the digital landscape. Let's connect and make something amazing happen!
                </p>
                <div className='pt-2 w-full'>
                  <button className='verdana overflow-hidden w-full sm:w-48 h-[52px] border border-yolk hover:bg-yolk bg-transparent rounded-md transition-all duration-200 ease-out'>
                    <a href={CV} download className='text-yolk hover:text-white w-full h-full flex items-center justify-center'>Download CV</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
