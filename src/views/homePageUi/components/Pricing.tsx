import Button from "@/components/Button"
import { FiCheck } from "react-icons/fi"
import { twMerge } from "tailwind-merge"

const Pricing = () => {
    return (
        <section id="pricing">
            <div className="container pt-[100px]">
                <div className="max-w-[1000px] w-full mx-auto">
                    {/* TITLE */}
                    <div className="text-center mb-[180px] max-w-2xl mx-auto">
                        <h2 className="title mb-2.5"><span>Subscribe</span> with us now</h2>
                        <p className="description px-16">by subscribing now you will be able to access the material easily and cheaply, so you will be very efficient and benefit</p>
                    </div>
                    {/* TITLE */}

                    {/* PRICING PACKAGES */}
                    <div>
                        <ul className="grid grid-cols-3 gap-[50px]">
                            {pricingPackages?.map((item, i) => (
                                <li key={i} className={twMerge("w-full text-[#2C2C2C]", i == 1 && "p-[30px] bg-[#245D51] scale-y-105 rounded-2xl -translate-y-28 text-white")}>
                                    {i === 1 && <div className="flex justify-end mb-1">
                                        <span className="inline-flex px-4 py-[7px] font-semibold text-white text-[10px] leading-[15px] tracking-[0.83px] uppercase bg-[#CB8461] rounded-full">
                                            MOST POPULAR
                                        </span>
                                    </div>}

                                    <div className="flex items-end gap-1">
                                        <h4 className="text-4xl leading-[54px] font-bold">${item.price}</h4>
                                        <p className={twMerge("leading-[40px] text-gray", i == 1 && "text-white")}>/{item.month} month</p>
                                    </div>
                                    <h5 className="font-bold text-[28px] leading-[42px] mt-[5px]">{item.package}</h5>
                                    <p className={twMerge("description text-base leading-[25px] mt-0.5 mb-5", i === 1 && "text-white")}>{item.description}</p>

                                    <ul className="flex flex-col gap-2 mb-[30px]">
                                        {item.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2.5">
                                                <span className={twMerge("grid place-items-center w-5 h-5 rounded-full bg-[#5243C21A] text-[#245D51]", i == 1 && "bg-white bg-opacity-10 text-white")}>
                                                    <FiCheck size={14} />
                                                </span>
                                                <p className="leading-6">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className={twMerge("w-full py-[5px] !rounded-full border-none text-base leading-[35px]", i === 1 ? "bg-[#CB8461] bg-opacity-100 text-white" : "!bg-[#FED1BA] !text-[#FDC2A5] !bg-opacity-10")}>Choose plan</Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* PRICING PACKAGES */}
                </div>
            </div>
        </section>
    )
}

export default Pricing

const pricingPackages = [
    {
        price: 50,
        month: 1,
        package: "Basic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        features: ["Access all videos", "Get Certificate", "Chat support", "Update Notification", "Download material"]
    },
    {
        price: 100,
        month: 6,
        package: "Pro",
        description: "Lorem Ipsum is simply dummy text of the printing",
        features: ["Access all videos", "Get Certificate", "Chat support", "Update Notification", "Download material"]
    },
    {
        price: 200,
        month: 12,
        package: "Enterprise",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        features: ["Access all videos", "Get Certificate", "Chat support", "Update Notification", "Download material"]
    }
]