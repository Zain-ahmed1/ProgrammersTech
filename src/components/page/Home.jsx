import React from 'react'
import Header from '../general/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contcat from './component/Contcat'
import Footer from '../general/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contcat />
            </main>
            <Footer />
        </>
    )
}
