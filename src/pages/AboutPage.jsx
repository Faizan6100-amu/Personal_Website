import { motion } from "framer-motion";
import { text } from "../components/About/AboutContent";
import Card from "../components/About/Card";
import SkillsContent from "../components/About/SkillsContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ExperienceComponent from "../components/About/ExperienceComponent";
import EducationComponent from "../components/About/EducationComponent";

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="relative bg-gray-50 dark:bg-gray-900 py-12">
        <div className="px-6 mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white tracking-wide text-center"
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 space-y-4 text-justify text-gray-700 dark:text-gray-300"
          >
            {text.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          <div className="mt-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Card title={"Skills"}>
                <SkillsContent />
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Card title={"Experience"}>
                <ExperienceComponent />
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Card title={"Education"}>
                <EducationComponent />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
