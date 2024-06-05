import React, { useState, useEffect } from 'react';
import { Logo } from '../../assets'
import { NavLinks } from '../../Data/general'
import { styles } from '../../Data/styles';
import { Link, ScrollLink } from 'react-scroll';

export default function Header() {

    const [circlePosition, setCirclePosition] = useState({ left: 0, top: 0 });
    const [circleAnimation, setCircleAnimation] = useState('');
    const [activeLink, setActiveLink] = useState(0);
    const [linkCirclePosition, setLinkCirclePosition] = useState({ left: 0 });
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const hideNav = windowWidth >= 640;

    const handleMouseEnter = (e) => {
        const parentOffset = e.target.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;

        setCirclePosition({ left: relX, top: relY });
        setCircleAnimation('explode-circle');
    };

    const handleMouseLeave = (e) => {
        const parentOffset = e.target.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;

        setCirclePosition({ left: relX, top: relY });
        setCircleAnimation('desplode-circle');
    };

    const handleNavLinkClick = (index, e) => {
        setActiveLink(index);

        const parentRect = e.currentTarget.getBoundingClientRect();
        const linkRect = e.target.getBoundingClientRect();

        const left = linkRect.left - parentRect.left + e.target.offsetWidth / 2;

        setLinkCirclePosition({ left });
    };

    useEffect(() => {
        if (activeLink !== -1) {
            const getLinkRect = async () => {
                const parentRect = document.querySelector('nav ul').getBoundingClientRect();
                const link = document.querySelectorAll('nav li a')[activeLink];

                if (link) {
                    const linkRect = link.getBoundingClientRect();
                    const left = linkRect.left - parentRect.left + link.offsetWidth / 2;
                    setLinkCirclePosition({ left });
                }
            };

            getLinkRect();
        }
    }, [activeLink]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollThreshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollThreshold]);

    useEffect(() => {
        const handleScroll = () => {
            const sectionOffsets = NavLinks.map(link => {
                const section = document.getElementById(link.id);
                return section ? {
                    id: link.id,
                    offsetTop: section.offsetTop,
                    offsetBottom: section.offsetTop + section.offsetHeight
                } : null;
            }).filter(Boolean); // Filter out null values

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            const activeSectionIndex = sectionOffsets.findIndex(section => {
                return (
                    scrollY >= section.offsetTop - windowHeight / 5 &&
                    scrollY < section.offsetBottom - windowHeight / 2
                );
            });

            if (activeSectionIndex !== -1) {
                setActiveLink(activeSectionIndex);
            }
        };

        document.addEventListener('DOMContentLoaded', handleScroll);

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('DOMContentLoaded', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${isScrolled ? "bg-midnight border-b-[1px]" : "bg-transparent"} w-full border-0 border-[#424242] fixed top-0 transition duration-150`}>
                <div className={`${styles.sectionWidth} py-6 w-full max-w-7xl mx-auto`}>
                    <div className='flex justify-between items-center'>
                        <div>
                            <a href="/">
                                <img src={Logo} alt="Zain Ahmed Web Logo" className='w-full max-w-32 cursor-pointer' />
                            </a>
                        </div>
                        <div>
                            <nav>
                                <ul className={`md:bg-transparent md:opacity-100 md:visible flex md:flex-row md:relative md:top-0 md:py-0 md:px-0 md:justify-center md:items-center text-white verdana
                                    absolute w-[95%] md:w-full mx-auto bg-midnight left-1/2 -translate-x-1/2 rounded-lg flex-col gap-y-6 py-8 px-4 z-[2]
                                ${isOpen ? "opacity-100 top-[90px] visible border border-[#424242]" : "opacity-0 top-10 invisible"} transition-all duration-200 ease-out`}>
                                    {NavLinks.map((list, index) => (
                                        <li onClick={toggleMenu}>
                                            <Link
                                                key={index}
                                                to={list.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-150}
                                                duration={450}
                                                onClick={(e) => {
                                                    // handleNavLinkClick(index, e);
                                                    setIsOpen(false);
                                                }}
                                                className={`Links transition-all duration-200 ease-in hover:text-yolk px-4 py-4 ${activeLink === index ? 'text-yolk' : 'text-white'}`}>
                                                {list.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {activeLink !== -1 && (
                                        <span
                                            className='md:block hidden w-[6px] h-[6px] bg-yolk rounded-full absolute transition-all duration-200 ease-linear'
                                            style={{
                                                left: activeLink === 0 ? 39 : linkCirclePosition.left, bottom: "-14px"
                                            }}
                                        />
                                    )}
                                    {hideNav ? (
                                        null
                                    ) : (
                                        <div className='relative overflow-hidden w-[95%] mx-4 px-4 sm:w-40 h-14 bg-transparent rounded-md border border-yolk text-yolk verdana text-base'>
                                            <a href="#" className='button_su_inner flex items-center hover:text-white transition-all duration-500 justify-center w-full h-full relative'
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <span className='relative z-[1]'>
                                                    Hire Me
                                                </span>
                                            </a>
                                            <span className={`su_button_circle ${circleAnimation}`}
                                                style={{ left: circlePosition.left, top: circlePosition.top }}
                                            ></span>
                                        </div>
                                    )}
                                </ul>
                            </nav>
                        </div>
                        <div className='flex justify-between items-center gap-x-8'>
                            <div className='hidden sm:block relative overflow-hidden w-36 h-12 bg-transparent rounded-md border border-yolk text-yolk verdana text-base'>
                                <a href="#" className='button_su_inner flex items-center hover:text-white transition-all duration-500 justify-center w-full h-full relative'
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className='relative z-[1]'>
                                        Hire Me
                                    </span>
                                </a>
                                <span className={`su_button_circle ${circleAnimation}`}
                                    style={{ left: circlePosition.left, top: circlePosition.top }}
                                ></span>
                            </div>
                            {hideNav ? (
                                null
                            ) : (
                                <div className='md:hidden flex flex-col gap-y-3 cursor-pointer z-[3]' onClick={toggleMenu}>
                                    <span className={`w-8 h-[3px] ${isOpen ? "rotate-45 translate-y-2" : ""} block bg-white transition-all duration-150 ease-in-out`}></span>
                                    <span className={`w-8 h-[3px] ${isOpen ? "-rotate-45 -translate-y-2" : ""} block bg-white transition-all duration-150 ease-in-out`}></span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
