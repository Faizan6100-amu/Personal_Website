/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import profile from "../../assets/profile.png";
import DownloadButton from "./DownloadButton";

export default function Hero({ aboutToggle, handleAbout }) {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_60%)] dark:[background:radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_60%)]" />
      </div>

      <div className="flex items-center relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 py-8 flex-col md:flex-row px-4 md:px-0 w-full mx-0 md:mx-auto max-w-2xl lg:max-w-screen-lg">
        <div className="group relative w-[175px] h-[175px] rounded-full overflow-hidden border-4 border-gray-300/30 dark:border-gray-600/30 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_5px] hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={profile}
            alt="Profile Photo"
            className="relative z-10 w-full scale-[1.1] hover:scale-[1.15] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 w-0.5 animate-sparkle rounded-full bg-purple-400/80"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-[calc(100%-175px)] pt-6 md:pt-0 md:px-6">
          <h2 className="font-medium text-lg text-gray-700 dark:text-gray-300 mb-1">
            Hi! I'm
          </h2>

          <h3 className="font-bold text-3xl md:text-4xl my-2 flex items-center gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
              Faizan Anwar Khan
            </span>
            <svg
              className="animate-float h-6 w-6 mt-1"
              fill="currentColor"
              viewBox="0 0 40 40"
            >
              <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" />
            </svg>
          </h3>

          <p className="mt-2 mb-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-all duration-500 group-hover:translate-y-[-2px]">
            A passionate{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Software Engineer
            </span>{" "}
            and Computer Science Graduate , focused on{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
              Web Technology
            </span>{" "}
            and building innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAbout}
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] text-sm font-medium px-6 py-3 rounded-full border-2 border-purple-500/30 dark:border-purple-400/30 
              bg-white/5 dark:bg-black/5 backdrop-blur-lg hover:backdrop-blur-xl
              transition-all duration-500 hover:shadow-[0_5px_30px_-5px] hover:shadow-purple-500/30"
            >
              <span className="">
                {aboutToggle ? "Show Less" : "Learn More"}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-500 ${
                  aboutToggle ? "rotate-180" : ""
                } text-purple-600 dark:text-purple-400`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
              <div
                className="absolute inset-0 rounded-full transition-all duration-500 
        before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent 
        before:opacity-0 before:transition-opacity before:duration-500 
        group-hover:before:opacity-100 group-hover:before:border-purple-500 
        group-hover:before:shadow-[0px_0px_15px_3px] group-hover:before:shadow-purple-500/50"
              ></div>
            </button>
            <DownloadButton />
          </div>
        </div>
      </div>
    </section>
  );
}
