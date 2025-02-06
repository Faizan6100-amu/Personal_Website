import { useState } from "react";
import OpenLink from "./OpenLink";
import ProjectList from "./ProjectList";
import Thumbnail from "./Thumbnail";
import Movix from "../../assets/Movix.png";
import reactOpenai from "../../assets/react-openai.png";
import EduVerseProject from "../../assets/EduVerse-Project.png";
import BrightSideJournal from "../../assets/BrightSideJournal.png";
import Registration from "../../assets/landing-page.png";

const projects = [
  {
    id: 1,
    title: "React OpenAI",
    image: reactOpenai,
    stacks: "React, Tailwind CSS, OpenAI API",
    description:
      "AI chatbot interface implementing OpenAI's GPT model with dynamic interactions and responsive design.",
    link: "https://chatgptprime.netlify.app/",
  },
  {
    id: 2,
    title: "Movix",
    image: Movix,
    stacks: "React, Node.js, REST API, Axios",
    description:
      "Feature-rich movie database platform with real-time streaming integration and content discovery features.",
    link: "https://movixbykhan.netlify.app/",
  },
  {
    id: 3,
    title: "Online Registration and Examination Portal",
    image: Registration,
    stacks: "React, Tailwind CSS, Node.js, MongoDB",
    description:
      "This project is developed for AMU Schools Board Students for online registration and examination portal.",
    link: "#",
  },
  {
    id: 4,
    title: "BrightSide Journal",
    image: BrightSideJournal,
    stacks: "HTML, CSS, JavaScript",
    description:
      "A blog for personal development, lifestyle enhancement, and positivity.",
    link: "https://faizan6100-amu.github.io/BrightSideJournal/",
  },
  {
    id: 5,
    title: "EduVerse",
    image: EduVerseProject,
    stacks: "PHP, CSS, JavaScript, MySQL",
    description:
      "EduVerse is an e-learning platform offering diverse courses and resources.",
    link: "https://github.com/Faizan6100-amu/EduVerse-Elearning",
  },
];

export default function MyProjects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Explore my best projects, showcasing expertise and creativity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {visibleProjects.map((project) => (
            <ProjectList key={project.id}>
              <div className="group relative p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl transition-all hover:shadow-lg">
                <div className="relative aspect-[1.85/1] rounded-lg">
                  <Thumbnail image={project.image} title={project.title} />
                </div>
                <div className="mt-3 space-y-2 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {project.stacks.split(", ").map((stack, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-center mt-3">
                    <OpenLink link={project.link} />
                  </div>
                </div>
              </div>
            </ProjectList>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-sm font-medium text-purple-600 transition-all duration-300 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white dark:border-purple-500 dark:text-purple-400 dark:hover:bg-purple-500"
          >
            {showAll ? "Show Less" : "Explore All Projects"}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full opacity-10 dark:opacity-5 bg-gradient-to-tr from-purple-600/30 to-pink-600/30" />
      </div>
    </section>
  );
}
