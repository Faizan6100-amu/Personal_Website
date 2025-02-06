import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const categoryColors = {
  "Version Control":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Web Development":
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Programming:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const blogs = [
  {
    img: "https://t3.ftcdn.net/jpg/02/11/95/04/360_F_211950412_wsPP8grGn9fbJjSsp8WOs8pYSaariDSU.jpg",
    date: "Nov 3, 2023",
    category: "Version Control",
    title: "Why every developer uses Git.",
    description:
      "Git allows us to have a version of a project that tracks changes over time, enabling backtracking and undoing modifications when necessary.",
    link: "/*",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1358/1*E-aQcJ4MRtqxbC2oPPSLzw.jpeg",
    date: "May 1, 2022",
    category: "Web Development",
    title: "JavaScript Promises",
    description:
      "Before promises, our code was full of confusing callback tricks. Switching to promises made our code easier to read, understand, and test.",
    link: "/*",
  },
  {
    img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/276546325/original/9f9165c3e2c967b2a14c87ca985e28ee9a95f49a/be-your-software-engineer-and-web-developer.png",
    date: "April 27, 2023",
    category: "Programming",
    title: "Why we don’t need a degree to be a Developer.",
    description:
      "You don’t need a degree to be a developer. While university is beneficial for some, alternative learning paths are equally effective.",
    link: "/*",
  },
];

const BlogComponent = () => {
  return (
    <>
      <Header />
      <section className="relative py-14 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Latest{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Blogs
                </span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Explore my latest blogs on technology, coding, and trends.
              </p>
            </div>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="group relative p-5 bg-white dark:bg-gray-800 shadow-md rounded-xl transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="relative aspect-[1.85/1] rounded-lg overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <div className="mt-4 space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {blog.date}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        categoryColors[blog.category] ||
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="flex justify-center mt-3">
                    <a
                      href={blog.link}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 shadow-md  ${
                        categoryColors[blog.category] ||
                        "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                      } hover:opacity-90`}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full opacity-10 dark:opacity-5 bg-gradient-to-tr from-purple-600/30 to-pink-600/30" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogComponent;
