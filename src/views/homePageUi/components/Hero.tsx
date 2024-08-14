import { FaArrowUp, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa"
import Button from "../../../components/Button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section id="hero" className="bg-primary w-full">
            <div className="container pt-[120px]">
                <div className="flex items-start justify-between gap-20">
                    <div className="pb-[86px] w-[50%]">
                        <h1 className="text-[60px] leading-[90px] font-semibold text-white">There is <span className="relative after:content-[' '] after:bg-[url('/assets/images/title-bottom-shape.svg')] after:bg-no-repeat after:w-full after:h-5 after:absolute after:-bottom-4 after:left-0">always</span> something new for us to learn</h1>
                        <p className="text-light-white text-lg leading-[35px] mt-2.5 mb-8">we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>

                        <div className="flex items-center gap-5">
                            <Button variant="secondary">Start Journey <span><FaArrowUp className="rotate-45" /></span></Button>
                            <ul className="flex items-center gap-4">
                                {[{ icon: FaInstagram, path: "#" }, { icon: FaTwitter, path: "#" }, { icon: FaDiscord, path: "#" }].map((social, i) => (
                                    <li key={i} ><Link href={social.path} className="text-white hover:text-secondary transition-all duration-500"><social.icon size={30} /></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-[50%] h-full">
                        <Image src="/assets/images/hero-img.png" alt="Hero Image" width={500} height={550} className="h-full mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero