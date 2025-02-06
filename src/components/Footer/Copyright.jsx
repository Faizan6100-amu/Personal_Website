export default function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="group relative inline-block">
            <p className="relative text-center text-sm font-medium">
                <span className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 dark:from-purple-400/90 dark:to-pink-400/90 bg-clip-text text-transparent">
                    &copy; {currentYear}
                </span>
                <a 
                    className="ml-1 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]"
                    href="/"
                >
                    Made with 
                    <span className="inline-block animate-float text-red-400 dark:text-red-300 ml-1" 
                          style={{ animationDelay: '0.3s' }}>
                        ❤️
                    </span>
                </a>
                <span className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 dark:from-purple-400/90 dark:to-pink-400/90 bg-clip-text text-transparent">
                    {" "}| All Rights Reserved.
                </span>
            </p>
        </div>
    )
}