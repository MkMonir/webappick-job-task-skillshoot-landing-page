import Image from "next/image"
import { FiPlayCircle, FiUser, FiUserCheck, FiVideo } from "react-icons/fi"

const About = () => {
    return (
        <section id="about">
            <div className="container py-[100px]">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <Image src="/assets/images/about-img.png" alt="About Image" width={450} height={570} />
                    </div>

                    <div>
                        <h2 className="title text-5xl leading-[72px] font-bold mb-9">Let us <span className="!text-primary relative after:content-[' '] after:bg-[url('/assets/images/title-bottom-shape.svg')] after:bg-no-repeat after:w-full after:h-5 after:absolute after:-bottom-4 after:left-0">Skill Shoot</span></h2>
                        <p className="description">We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
                            <br /> <br />
                            we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
                        </p>

                        <ul className="grid grid-cols-2 gap-x-[100px] gap-y-[30px] mt-9">
                            {aboutFeatures?.map((feature, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <span className="w-[50px] h-[50px] rounded-full bg-[#CB846130] grid place-items-center text-secondary">
                                        <feature.icon size={24} />
                                    </span>
                                    <p className="font-semibold leading-[35px] text-[#2C2C2C]">{feature.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

const aboutFeatures = [
    {
        icon: FiUser,
        text: "15K People Join"
    },
    {
        icon: FiUserCheck,
        text: "Trusted Mentor"
    },
    {
        icon: FiVideo,
        text: "30+ Free Videos"
    },
    {
        icon: FiPlayCircle,
        text: "100+ Premium Videos"
    }
]