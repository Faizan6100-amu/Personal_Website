import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/Header/ThemeToggle";
import { motion } from "framer-motion";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-dvh text-center px-4 bg-gray-100 dark:bg-gray-900">
            <div className="absolute top-3 right-3">
                <ThemeToggle />
            </div>
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
                404
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-xl font-semibold pt-3 pb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
                Oops! Page Not Found
            </motion.h2>
            <motion.button
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-semibold flex items-center gap-2 text-white bg-purple-600 dark:bg-purple-600 px-5 py-2.5 rounded-full shadow-lg transition-all hover:bg-red-600 dark:hover:bg-sky-600"
            >
                <HomeIcon />
                Back To Home
            </motion.button>
        </div>
        
    );
}

function HomeIcon() {
    return (
        <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 576 512"
        >
            <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
        </svg>
    );
}
