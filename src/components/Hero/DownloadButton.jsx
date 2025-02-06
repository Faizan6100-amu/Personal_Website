import { useState } from "react";
import { GrResume } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

const DownloadButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPopup(true)}
        className="group relative flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] text-sm font-medium px-6 py-3 text-lg rounded-full border-2 
        border-purple-500/30 dark:border-purple-400/30 bg-white/5 dark:bg-black/5 backdrop-blur-lg
        transition-all duration-500 hover:shadow-[0_5px_30px_-5px] hover:shadow-purple-500/30"
      >
        <span className="text-gray-800 dark:text-gray-200 transition-colors duration-300">
          Resume
        </span>
        <GrResume className="text-purple-600 dark:text-purple-400 text-xl transition-colors" />
        <div
          className="absolute inset-0 rounded-full transition-all duration-500 
        before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent 
        before:opacity-0 before:transition-opacity before:duration-500 
        group-hover:before:opacity-100 group-hover:before:border-purple-500 
        group-hover:before:shadow-[0px_0px_15px_3px] group-hover:before:shadow-purple-500/50"
        ></div>
      </motion.button>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/95 dark:bg-gray-900/95 border border-gray-300/30 dark:border-gray-700/30 
              p-8 rounded-xl shadow-xl backdrop-blur-xl w-[90%] max-w-[400px] text-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-xl -z-10  from-purple-500/30 to-pink-500/30" />
              <div className="absolute inset-0 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-0.5 w-0.5 animate-sparkle rounded-full bg-purple-400/50"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Download Resume
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                Get my complete professional profile and contact information.
              </p>

              <p className="text-purple-600 dark:text-purple-400 font-medium mb-6">
                (+91) 9161360931
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="FaizanAnwarKhan_Resume.pdf"
                  download
                  className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 
                  text-white shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <span className="relative z-10">Download Now</span>
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity 
                    bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                  />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPopup(false)}
                  className="group relative px-6 py-3 rounded-full border border-gray-300/30 dark:border-gray-700/30 
                  bg-white/5 dark:bg-black/5 backdrop-blur-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 
                  text-gray-800 dark:text-gray-200 transition-all"
                >
                  Close Window
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadButton;
