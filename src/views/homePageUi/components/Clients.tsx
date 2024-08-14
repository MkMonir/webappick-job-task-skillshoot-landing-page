import Image from "next/image"

const Clients = () => {
    return (
        <section id="clients" className="pt-[100px] pb-[200px]">
            <div className="container">
                {/* TITLE */}
                <div className="text-center mb-[50px] max-w-2xl mx-auto">
                    <h2 className="title mb-2.5">Trusted more than <span>100+</span> in the world</h2>
                    <p className="description px-16">they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
                </div>
                {/* TITLE */}

                <div>
                    <ul className="flex justify-center items-center flex-wrap gap-[90px]">
                        {clientsData?.map((client, i) => (
                            <li key={i}>
                                <Image src={`/assets/images/${client.name}.png`} alt="Brand Image" width={client.width} height={50} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Clients

const clientsData = [
    {
        name: "brand-one",
        width: 100
    },
    {
        name: "brand-two",
        width: 130
    },
    {
        name: "brand-three",
        width: 150
    },
    {
        name: "brand-four",
        width: 150
    },
    {
        name: "brand-five",
        width: 150
    },
]