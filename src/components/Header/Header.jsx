import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import NavList from "./NavList";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenu = () => setMenuToggle(!menuToggle);

  return (
    <header className="sticky inset-0 z-10">
      <div className="h-[55px] bg-[rgba(229,231,235,0.75)] dark:bg-[rgba(26,36,50,0.85)] flex items-center border-b-2 border-gray-300 dark:border-gray-700 drop-shadow-[-1px_3px_3px_rgba(0,0,0,0.03)] backdrop-blur-[5px]">
        <div className="flex items-center justify-between py-3.5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg">
          <a
            href="/"
            className="group transition-all duration-300 hover:scale-[1.02]"
          >
            <h1 className="font-[Pacifico] text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Faizan@Khan
            </h1>
          </a>
          <NavList menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={handleMenu}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={menuToggle ? "Close menu" : "Open menu"}
              aria-expanded={menuToggle}
            >
              <HamburgerIcon isOpen={menuToggle} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
const HamburgerIcon = ({ isOpen }) => (
  <div className="relative h-8 w-8">
    <span
      className={`absolute left-1/2 block h-[2px] w-6 -translate-x-1/2 bg-current transition-all duration-300 
        ${isOpen ? 
          "top-1/2 rotate-45 -translate-y-1/2" : 
          "top-[30%] -translate-y-1/2"
        }`}
    />
    <span
      className={`absolute left-1/2 block h-[2px] w-6 -translate-x-1/2 bg-current transition-all duration-300 
        ${isOpen ? 
          "opacity-0 scale-0" : 
          "top-1/2 -translate-y-1/2 opacity-100 scale-100"
        }`}
    />
    <span
      className={`absolute left-1/2 block h-[2px] w-6 -translate-x-1/2 bg-current transition-all duration-300 
        ${isOpen ? 
          "top-1/2 -rotate-45 -translate-y-1/2" : 
          "top-[70%] -translate-y-1/2"
        }`}
    />
  </div>
);
