import React from 'react'
import { styles } from '../../Data/styles'
import { Logo } from '../../assets'
import { FooterLinks } from '../../Data/general'
import { Link, ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <section className='bg-gray-700'>
      <div className={`${styles.sectionWidth}`}>
        <div className='w-full pt-12 pb-8 flex md:flex-row flex-col justify-between gap-y-6'>
          <div className='w-full flex flex-col md:items-start items-center justify-start gap-y-4'>
            <a href="/">
              <img src={Logo} alt="Zain Ahmed Web Logo" className='w-full max-w-32 cursor-pointer' />
            </a>
            <div className='w-full flex flex-col gap-y-4'>
              <a href="mailTo:zainahmed2203@gmail.com" className={`${styles.transition_nomral} w-full flex justify-center md:justify-start items-center
               text-white/80 hover:text-white/100 gap-x-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                </svg>
                <span>zainahmed2203@gmail.com</span>
              </a>
              <a href="tel:+923258959145" className={`${styles.transition_nomral} w-full flex justify-center md:justify-start items-center
               text-white/80 hover:text-white/100 gap-x-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"></path>
                </svg>
                <span>(+92) 325-8959-145</span>
              </a>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-center'>
            <div>
              <h2 className='text-white text-lg text-center md:text-left font-semibold pb-4'>General</h2>
              <ul className='list-none'>
                {FooterLinks.slice(0, 3).map((links, index) => (
                  <>
                    <li className='pb-2 text-center md:text-left'>
                      <Link
                        key={index}
                        to={links.id}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={450}
                        className={`Links transition-all duration-200 ease-in hover:text-yolk py-4 text-white`}>
                        {links.title}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-center'>
            <div>
              <h2 className='text-white text-lg text-center md:text-left font-semibold pb-4'>Work</h2>
              <ul className='list-none'>
                {FooterLinks.slice(3, 5).map((links, index) => (
                  <>
                    <li className='pb-2 text-center md:text-left'>
                      <Link
                        key={index}
                        to={links.id}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={450}
                        className={`Links transition-all duration-200 ease-in hover:text-yolk py-4 text-white`}>
                        {links.title}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-center'>
            <div>
              <h2 className='text-white text-lg text-center md:text-left font-semibold pb-4'>Follow My Work</h2>
              <div className='text-white flex justify-center items-center gap-x-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} viewBox="0 0 24 24" className={`${styles.transition_nomral} hover:text-yolk`}>
                  <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} viewBox="0 0 24 24" className={`${styles.transition_nomral} hover:text-yolk`}>
                  <path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} viewBox="0 0 24 24" className={`${styles.transition_nomral} hover:text-yolk`}>
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
