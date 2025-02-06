import SocialIcon from './SocialIcon';
import Copyright from './Copyright';

export default function Footer() {
    return (
        <footer className="group mt-auto relative bg-white/5 dark:bg-black/5 backdrop-blur-lg border-t border-gray-300/20 dark:border-gray-700/20 hover:border-transparent transition-all duration-500">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
                <div className="absolute inset-0 [background:linear-gradient(45deg,transparent_49%,rgba(192,132,252,0.05)_50%,transparent_51%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background-size:6px_6px]" />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-0.5 w-0.5 animate-sparkle rounded-full bg-purple-400/80"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10">
                <div className="flex flex-col items-center gap-2 py-5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg">
                    <SocialIcon className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]" />
                    <Copyright className="text-sm font-medium bg-gradient-to-r from-purple-600/80 to-pink-600/80 bg-clip-text text-transparent transition-all duration-500 group-hover:text-opacity-100" />
                </div>
            </div>
        </footer>
    )
}