import { useState } from "react";
import { motion } from "framer-motion";
import MyProjects from "../components/Projects/MyProjects";
import AboutMe from "../components/About/AboutMe";
import Services from "../components/Services/Services";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
    const [aboutToggle, setAboutToggle] = useState(false);
    const handleAbout = () => setAboutToggle(!aboutToggle);

    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Hero aboutToggle={aboutToggle} handleAbout={handleAbout} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: aboutToggle ? 1 : 0, scale: aboutToggle ? 1 : 0.95 }}
                transition={{ duration: 0.4 }}
                className={`transition-all ${aboutToggle ? "block" : "hidden"}`}
            >
                <AboutMe aboutToggle={aboutToggle} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <MyProjects />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Services />
            </motion.div>
            <Footer />
        </>
    );
}
