import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../../../Data/styles';
import { SKillSet } from '../../../Data/general/skills';
import { qualification } from '../../../Data/general/qaulify';

function Skills() {
    const skillsRef = useRef([]);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.width = entry.target.getAttribute('data-skill-level');
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this value as needed
            }
        );

        skillsRef.current.forEach(skill => {
            if (skill) observer.observe(skill);
        });

        return () => {
            skillsRef.current.forEach(skill => {
                if (skill) observer.unobserve(skill);
            });
        };
    }, []);

    function handleModal(data) {
        setModalData(data);
    }

    function closeModal() {
        setModalData(null);
    }

    return (
        <>
            <section id='skills'>
                <div className={`${styles.sectionWidth} flex text-white flex-col justify-center items-start md:pt-4 pb-14 gap-y-6`}>
                    <div className='w-full text-center'>
                        <h1 className='text-center text-3xl md:text-4xl w-full pb-3 font-bold text-white mx-auto'>Skills <span className='text-yolk'>&</span> Qualifications</h1>
                        <p className='text-white text-base w-full max-w-[400px] mx-auto'>
                            My skills cover a vast array of domains,
                            ensuring I am always ready to meet the needs of any project.
                        </p>
                    </div>

                    <div className='flex justify-between sm:flex-row flex-col items-start gap-12 sm:gap-20 pt-4'>
                        {SKillSet.map((skillSet, index) => (
                            <div key={skillSet.id} className='w-full'>
                                <div className='w-full'>
                                    <h2 className='text-xl text-white font-semibold pb-6'>{skillSet.title}</h2>
                                    <div className='flex flex-wrap justify-between items-start gap-10'>
                                        {(skillSet.FrontSkills || skillSet.BackSkills).map((skill, skillIndex) => (
                                            <div key={skill.name} className='w-full md:w-[44%] 2xl:w-[46%]'>
                                                <div className='flex justify-between items-start'>
                                                    <span className='text-sm sm:text-base text-white/70 font-medium block pb-3'>{skill.name}</span>
                                                    <span className='text-white/60 text-sm sm:text-base'>{skill.skillNum}%</span>
                                                </div>
                                                <div className='w-full bg-black/50 rounded-full h-2 relative -z-[1]'>
                                                    <span
                                                        ref={el => skillsRef.current[index * 10 + skillIndex] = el}
                                                        data-skill-level={`${skill.skillNum}%`}
                                                        className='w-0 rounded-full bg-yolk block h-full absolute left-0 top-0 transition-all duration-1000 ease-out'
                                                    ></span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-full'>
                        <div className='w-full'>
                            <h1 className='w-full text-2xl font-bold pt-10'>
                                Transforming <span className='text-yolk'>Concepts </span>
                                with Knowledge
                            </h1>
                        </div>

                        <div className='w-full pt-5 relative'>
                            {qualification.map((e, index) => (
                                <div key={index} className='Journey relative pb-8 w-full after:content-[""] after:absolute after:w-[2px] after:rounded-full after:top-0 after:left-4 after:h-full after:bg-yolk'>
                                    <span className='w-9 h-9 flex justify-center items-center bg-midnight z-[1] border border-yolk text-yolk rounded-full absolute left-0 top-0'>{e.id}</span>
                                    <div className='ml-14 flex justify-between items-start'>
                                        <div>
                                            <h2 className='font-semibold text-lg pb-2'>{e.title}</h2>
                                            <p className='w-full max-w-[720px]'>
                                                {e.description}
                                            </p>
                                        </div>
                                        <div className='w-96 h-52 relative proof after:content-[""] after:bg-black/20 after:backdrop-blur-sm after:absolute after:w-full after:h-full after:left-0 after:top-0 after:rounded-2xl'

                                            onClick={() => handleModal(e.modalData)}
                                        >
                                            <img
                                                src={e.img}
                                                alt={e.title}
                                                className='w-full h-full object-cover rounded-2xl object-top cursor-pointer'
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div
                    className={` 
                        ${modalData ? "opacity-100 visible" : "opacity-0 invisible"} 
                        ${styles.transition_nomral}
                        fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-[21] backdrop-blur-sm`
                    }
                    onClick={closeModal}
                >
                    {modalData && (
                        <div className='bg-white rounded-lg overflow-auto max-w-lg mt-24 w-full h-[580px]' onClick={e => e.stopPropagation()}>
                            {modalData.map((item, index) => (
                                <div key={index} className="py-6 pb-0 px-4">
                                    <div className="modal-head">
                                        <h1 className='text-center text-xl font-semibold mb-3'>{item.head}</h1>
                                    </div>
                                    <div className="modal-body">
                                        <img src={item.modalImg} alt={item.head} className='w-full h-full' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Skills;
