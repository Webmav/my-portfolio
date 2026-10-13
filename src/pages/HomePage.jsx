import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

export default function HomePage() {
    return(
        <>
            <Hero />
            <AboutMe />
            <Projects />
            <Services />
            {/*
            <Contact /> */}
        </>
    )
}