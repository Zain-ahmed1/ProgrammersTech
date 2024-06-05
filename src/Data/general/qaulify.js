import { AccessCertf, AccessCertfull, AptechCertOne, AptechCertwo, DevComp } from "../../assets";

const qualification = [
    {
        id: "01",
        title: "CPISM - DISM Program",
        description: "I successfully completed the DISM (Diploma in Information System Management) program at <strong>APTECH Pakistan</strong> from 2022-2023. This comprehensive program provided me with in-depth knowledge and hands-on experience in various advanced frameworks and technologies. Throughout the course, I honed my skills in React, Node.js, Laravel, and many other cutting-edge tools. The program not only enhanced my technical proficiency but also equipped me with essential problem-solving and project management skills, preparing me for a dynamic career in the tech industry.",
        img: AptechCertwo,

        modalData: [
            {
                head: "Certificate of CPISM (June 2022 - November 2022)",
                modalImg: AptechCertOne,
            },
            {
                head: "Certificate of DISM (December 2022 - July 2023)",
                modalImg: AptechCertwo,
            }

        ]
    },
    {
        id: "02",
        title: "English Access Micro scholarship Program",
        description: "I participated in the English Access Microscholarship Program, a prestigious two-year scholarship offered by a U.S. organization dedicated to English language learning. This incredible program provided me with extensive training in English, enhancing my language skills and cultural understanding. The supportive and immersive environment fostered my love for learning and significantly improved my proficiency in English. I am deeply grateful for the opportunities and experiences this program has provided, and I truly appreciate the organization for their commitment to education and personal growth.",
        img: AccessCertf,

        modalData: [
            {
                head: "1st Year Certificate (2019 - 2020)",
                modalImg: AccessCertf,
            }, {
                head: "2nd Year Certificate (2020 - 2021)",
                modalImg: AccessCertfull,
            }
        ]
    },
    {
        id: "03",
        title: "MERN Stack Program",
        description: "I participated in an Aptech program where I learned to use MongoDB, Express.js, React, and Node.js with API handling systems. It was a one-month program, and despite its short duration, I gained a lot of knowledge. I also took part in a regional competition where I secured a position in the top 5 out of 50 students.",
        img: DevComp,

        modalData: [
            {
                head: "Activity Certificate",
                modalImg: DevComp,
            }
        ]
    }
];

export {
    qualification,
}