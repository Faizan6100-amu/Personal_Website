/* eslint-disable react/prop-types */
export default function OpenLink({ link }) {
  return (
    <div className="group relative inline-block">
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 group-hover:animate-rotate group-hover:[animation-duration:3s] transition-opacity duration-300" />
      <div className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 animate-sparkle rounded-full bg-purple-400/80"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-2 w-[140px] text-sm font-medium px-4 py-2 rounded-full border-2 backdrop-blur-lg transition-all duration-300
          bg-white/5 dark:bg-black/5
          border-purple-500/30 dark:border-sky-500/30
          hover:border-transparent
          hover:text-purple-300 dark:hover:text-sky-300
          hover:shadow-[0_0_20px_-5px_rgba(192,132,252,0.3)]
          active:scale-95"
      >
        <span className="bg-gradient-to-r from-purple-400/90 to-pink-400/90 bg-clip-text text-transparent transition-all duration-500 group-hover:from-purple-200 group-hover:to-pink-200">
          Demo App
        </span>
        <svg
          className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            className="fill-purple-400/90 transition-all duration-500 group-hover:fill-pink-200"
            d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304c0 117.7 94.3 208 208 208s208-90.3 208-208c0-41.6-12.3-80.7-33.6-113.2c-7.6-11.3-22.6-14.1-33.9-6.5s-14.1 22.6-6.5 33.9c15.7 23.5 24.4 51.1 24.4 80.8c0 88.2-71.8 160-160 160S96 392.2 96 304s71.8-160 160-160h112v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
          />
        </svg>
      </a>
    </div>
  );
}
