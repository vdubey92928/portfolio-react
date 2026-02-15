import React from 'react'
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import useSEO from '../hooks/useSEO';

const Home = () => {
    useSEO({
        title: "Vivekanand Dubey | Java Backend Developer",
        description:
            "Java Backend Developer skilled in Spring Boot, REST APIs, React and MySQL.",
        canonical: "https://www.vivekananddubey.com/",
    });
    return (
        <>
            <div className="container-fluid p-0 px-4">

                <MainSection />

                <SkillsSection />

                <PortfolioSection />

                <AboutSection />



                <ContactSection />


            </div >
        </>
    )
}

export default Home
