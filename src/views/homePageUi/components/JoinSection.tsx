import Button from "@/components/Button"
import Image from "next/image"

const JoinSection = () => {
    return (
        <section id="join">
            <div className="container">
                <div className="px-[67px] py-[71px] bg-[#F2E7DB] rounded-2xl relative">
                    {/* SHAPES */}
                    <Image src="/assets/images/banner-svg-four.svg" alt="Banner Shapes" className="absolute left-0 top-0" width={60} height={60} />
                    <Image src="/assets/images/banner-svg-two.svg" alt="Banner Shapes" className="absolute left-[55%] -bottom-6" width={52} height={45} />

                    <div className="flex items-center justify-between gap-10">
                        <div className="w-[60%]">
                            <h2 className="title"><span>Improve</span> your skills, and reach your career as soon as possible</h2>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="secondary">Join Now</Button>
                            <Button>Subscribe Course</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinSection