import React, { useState } from 'react';
import { styles } from '../../../Data/styles';
import { MyWork } from '../../../Data/general/work';

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        if (showAll) {
            setVisibleCount(4);
            setShowAll(false);
        } else {
            setVisibleCount(prevCount => prevCount + 2);
            if (visibleCount + 2 >= MyWork.length) {
                setShowAll(true);
            }
        }
    };

    const handleShowLess = () => {
        setVisibleCount(4);
        setShowAll(false);
    };

    return (
        <>
            <section id="projects">
                <div className={`${styles.sectionWidth} pb-10`}>
                    <div className='w-full text-white text-center pb-4'>
                        <h2 className='text-center text-3xl md:text-4xl font-bold pb-2'>My Work</h2>
                        <p className='font-normal text-lg'>Have a look at my most recent projects.</p>
                    </div>
                    <div className='w-full flex flex-wrap justify-between items-start gap-y-10 gap-x-0 pt-4 sm:pt-8'>
                        {MyWork.slice(0, visibleCount).map((prod, index) => (
                            <a key={index} href={prod.url} target='_blank' className='relative w-full md:w-[48%] overflow-hidden group'>
                                <div className='w-full border border-[#4d5763] overflow-hidden rounded-2xl p-6 pb-0'>
                                    <img src={prod.img} className={`${styles.transition_slow} group-hover:-translate-y-5 w-full h-full`} />
                                    <div className='absolute left-0 rounded-b-2xl py-4 text-center backdrop-blur-lg text-white bottom-0 z-[1] bg-[#4d5763] bg-opacity-80 w-full flex justify-center items-center gap-x-2'>
                                        <p className='font-bold text-xl '>{prod.title}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" className={`${styles.transition_nomral} rotate-45 group-hover:rotate-90`} height="1.5em" viewBox="0 0 24 24">
                                            <g fill="none">
                                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                                <path fill="currentColor" d="M12.707 3.636a1 1 0 0 0-1.414 0L5.636 9.293a1 1 0 1 0 1.414 1.414L11 6.757V20a1 1 0 1 0 2 0V6.757l3.95 3.95a1 1 0 0 0 1.414-1.414z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='w-full text-center mt-6 sm:mt-12'>
                        {visibleCount < MyWork.length && (
                            <button onClick={handleShowMore} className={`${styles.transition_nomral} w-full sm:w-52 h-14 border hover:text-yolk bg-yolk hover:border-yolk border-transparent hover:bg-transparent text-black rounded-md text-base font-medium uppercase`}>
                                Show More
                            </button>
                        )}
                        {visibleCount >= MyWork.length && (
                            <button onClick={handleShowLess} className={`${styles.transition_nomral} w-full sm:w-52 h-14 border hover:text-yolk bg-yolk hover:border-yolk border-transparent hover:bg-transparent text-black rounded-md text-base font-medium uppercase`}>
                                Show Less
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
