import About from "./components/About"
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
            <About />
        </div>
    )
}

export default HomePageUI