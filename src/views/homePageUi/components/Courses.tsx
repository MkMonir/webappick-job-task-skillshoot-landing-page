"use client";
import Button from "@/components/Button"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Keyboard } from "swiper/modules";
import { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Courses = () => {
    const courseSwiperRef = useRef<any>();

    return (
        <section id="courses" className="bg-primary py-[75px]">
            <div className="container relative">
                <Image src="/assets/images/banner-svg-two.svg" alt="Banner Shapes" className="absolute top-14 left-28" width={50} height={50} />
                <Image src="/assets/images/banner-svg-five.svg" alt="Banner Shapes" className="absolute top-8 right-28" width={25} height={25} />

                {/* TITLE */}
                <div className="text-center mb-[50px] max-w-2xl mx-auto">
                    <h2 className="title mb-2.5 text-white">Popular courses of the week</h2>
                    <p className="description text-light-white w-[55%] mx-auto">List of the most popular lists that are often studied by our members</p>
                </div>
                {/* TITLE */}

                {/* COURSE SLIDER */}
                <div className="relative">
                    <Swiper
                        speed={1000}
                        slidesPerView={3}
                        spaceBetween={20}
                        keyboard={{
                            enabled: true,
                        }}
                        autoplay={{
                            delay: 12000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            courseSwiperRef.current = swiper;
                        }}
                        modules={[Autoplay, Keyboard]}
                        className="mySwiper grid grid-cols-3 gap-5"
                    >
                        {[1, 2, 3, 4, 5, 6].map((course, i) =>
                            <SwiperSlide key={i} className="rounded-2xl bg-white">
                                <div className="relative">
                                    <button
                                        className="w-[60px] h-[60px] bg-white rounded-full grid place-items-center absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse video-btn"
                                    >
                                        <FaPlay className="text-primary" size={20} />
                                    </button>
                                    <Image src="/assets/images/course-img-one.jpg" alt="Course Image" width={420} height={250} className="w-full rounded-t-2xl" />
                                </div>

                                <div className="p-7 pb-5">
                                    <h4 className="text-2xl leading-[36px] text-[#2C2C2C] font-semibold">Basics of learning team management</h4>

                                    <div className="flex gap-20 items-center mt-5 mb-10">
                                        <div className="flex items-center gap-3">
                                            <Image src="/assets/images/author-one.png" alt="User" width={45} height={45} />
                                            <div>
                                                <p className="text-sm font-medium tex-[#2C2C2C] leading-[21px]">Jone Owel</p>
                                                <p className="text-[10px] leading-[15px] text-gray">IT Manager</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-[6px]">
                                            <span><FiUser size={35} className="text-primary" /></span>
                                            <div>
                                                <p className="text-sm font-medium tex-[#2C2C2C] leading-[21px]">120</p>
                                                <p className="text-[10px] leading-[15px] text-gray">Participant</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Button className="font-semibold text-xs leading-[30px] px-6">Buy Now</Button>
                                        <div className="flex items-end">
                                            <h4 className="text-2xl leading-[36px] font-semibold text-[#2C2C2C]">$120</h4>
                                            <p className="text-xs leading-[30px] text-gray">/25 Video</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <button
                        className="absolute -left-7 top-1/2 -translate-y-1/2 z-[200] w-14 h-14 bg-white grid place-items-center text-2xl text-black border-[8px] border-solid border-[#F5F5F5] rounded-full shadow transition-all duration-500 hover:bg-primary hover:text-white active:scale-95"
                        onClick={() => courseSwiperRef.current?.slidePrev()}
                    >
                        <GoArrowLeft />
                    </button>
                    <button
                        className="absolute -right-7 top-1/2 -translate-y-1/2 z-[200] w-14 h-14 bg-white grid place-items-center text-2xl text-black border-[8px] border-solid border-[#F5F5F5] rounded-full shadow transition-all duration-500 hover:bg-primary hover:text-white active:scale-95"
                        onClick={() => courseSwiperRef.current?.slideNext()}
                    >
                        <GoArrowRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Courses