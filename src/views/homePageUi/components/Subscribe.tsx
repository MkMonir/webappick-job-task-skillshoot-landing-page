import Button from "@/components/Button"
import Image from "next/image"

const Subscribe = () => {
    return (
        <section id="subscribe" className="mb-20">
            <div className="container">
                <div className="bg-[#F2E7DB] rounded-lg px-[60px] py-[60px] relative">
                    <Image src="/assets/images/banner-svg-four.svg" alt="Banner Shapes" className="absolute left-0 top-0" width={60} height={60} />
                    <Image src="/assets/images/banner-svg-four.svg" alt="Banner Shapes" className="absolute right-0 bottom-0 rotate-180" width={60} height={60} />

                    <div className="flex gap-20">
                        <div className="w-[60%]">
                            <h2 className="title mb-[30px]">Happy <span>Chinese New Year</span>, 20% discount for you today</h2>
                            <Button>Subscribe Course</Button>
                        </div>
                        <div className="absolute bottom-0 right-28">
                            <Image src="/assets/images/banner-img.png" alt="Banner Image" width={300} height={430} className="" />

                            <Image src="/assets/images/banner-svg-one.svg" alt="Banner Shapes" className="absolute top-[50%] -left-12" width={60} height={60} />
                            <Image src="/assets/images/banner-svg-two.svg" alt="Banner Shapes" className="absolute top-[50%] -right-12" width={50} height={50} />
                            <Image src="/assets/images/banner-svg-three.svg" alt="Banner Shapes" className="absolute bottom-8 -right-5" width={50} height={50} />
                            <Image src="/assets/images/banner-svg-five.svg" alt="Banner Shapes" className="absolute bottom-10 left-0" width={25} height={25} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe