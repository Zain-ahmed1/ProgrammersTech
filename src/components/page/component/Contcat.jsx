import React, { useRef, useState } from 'react';
import { styles } from '../../../Data/styles';
import CustomSelect from './CustomSelect';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [successmsg, setSuccessMsg] = useState("");
    const [error, setError] = useState("");
    const [msgerror, setmsgError] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const options = [
        { label: 'Front-End Service', value: 'front-end' },
        { label: 'Back-End Service', value: 'back-end' },
        { label: 'Full-Stack Service', value: 'full-stack' },
    ];

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        if (!selectedService) {
            setError("Please select a service.");
            setIsSending(false);

            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        } else {
            setError("");
        }

        emailjs
            .sendForm('service_tgx1ooo', 'template_slnsaho', form.current, {
                publicKey: 'eyo7hIxtkXne6aBg_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setSelectedService(null);
                    setIsSending(false);
                    setSuccessMsg("Your form has been sent successfully.");
                    setTimeout(() => {
                        setSuccessMsg(null);
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setmsgError("There is a problem while sending form. Please try again later.");
                    setIsSending(false);
                    setTimeout(() => {
                        setmsgError(null);
                    }, 5000);
                },
            );
    };

    return (
        <>
            <section id="contact">
                <div className={`w-full px-4 mx-auto max-w-2xl pt-6 pb-8 md:py-12`}>
                    <div className='pb-4 text-center'>
                        <h1 className='text-3xl md:text-4xl text-white font-bold'>
                            Love My&nbsp;
                            <span className='text-yolk'>
                                Work?
                            </span>
                        </h1>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="my-5 flex justify-center flex-col">
                        <div className='mb-4 flex md:flex-row flex-col gap-y-4 items-center justify-between gap-x-5'>
                            <input
                                type="email"
                                id="email"
                                name="email_id"
                                className={`${styles.transition_nomral} ${styles.InputStyle}`}
                                placeholder="Email Address"
                                required
                            />
                            <div className='relative w-full'>
                                <CustomSelect
                                    options={options}
                                    placeholder="Select Service"
                                    onChange={(value) => setSelectedService(value)}
                                />
                                <input type="hidden" name="selectedSercvice" value={selectedService} />
                                <p className={`${error ? "opacity-100 visible -bottom-12" : "opacity-0 invisible -bottom-8"} ${styles.transition_nomral} absolute left-0 bg-red-300 w-full rounded-md px-4 py-4 text-red-800`}>{error}</p>
                            </div>
                        </div>
                        <div className='mb-4 flex items-center justify-between gap-x-5'>
                            <input type="text" id="budget" name='budget' className={`${styles.transition_nomral} ${styles.InputStyle}`} placeholder="How much you are willing to spend on this project?" required />
                        </div>
                        <div className="sm:col-span-2">
                            <textarea id="message" rows="4" name="message" className={`${styles.InputStyle} max-h-44 min-h-20`} placeholder="Type your message"></textarea>
                        </div>
                        {successmsg && (<p className='text-base text-green-500 font-medium text-center mt-3'>{successmsg}</p>)}
                        {msgerror && (<p className='text-base text-red-500 font-medium text-center mt-3'>{msgerror}</p>)}
                        <button type="submit" className={`${styles.transition_nomral} btn-shadow hover:text-white text-white bg-yolk mt-4 rounded-md w-full sm:w-52 mx-auto h-14`}>
                            {isSending ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
