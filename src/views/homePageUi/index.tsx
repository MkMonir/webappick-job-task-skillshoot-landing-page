import Clients from "./components/Clients"
import Courses from "./components/Courses"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Subscribe from "./components/Subscribe"

const HomePageUI = () => {
    return (
        <div>
            <Hero />
            <Clients />
            <Subscribe />
            <Features />
            <Courses />
        </div>
    )
}

export default HomePageUI