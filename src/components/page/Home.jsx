import React from 'react'
import Header from '../general/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contcat from './component/Contcat'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contcat />
        </>
    )
}
