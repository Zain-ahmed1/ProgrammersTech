import React from 'react'
import Header from '../general/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
        </>
    )
}
