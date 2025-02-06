/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/blogs", text: "Blogs" },
];

export default function NavList({ menuToggle }) {
  return (
    <nav
      className={`font-medium rounded-b-xl md:rounded-none overflow-hidden bg-[#dcdfe4] dark:bg-[#16212e] text-gray-500 dark:text-gray-400 md:bg-transparent dark:md:bg-transparent absolute md:static left-0 top-full transition-[max-height] duration-500 ease-linear ${
        !menuToggle ? "max-h-0 md:max-h-full" : "max-h-[500px] md:max-h-full"
      }`}
    >
      <ul className="flex items-center md:gap-6 lg:gap-10 flex-col md:flex-row justify-evenly md:justify-start z-[1]">
        {navLinks.map((link, index) => (
          <li key={index} className="w-full md:w-auto">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `block cursor-pointer text-center w-screen md:w-auto py-3 md:py-0.5 px-6 md:px-3 transition-all duration-300 
                                ${
                                  isActive
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                                    : "text-gray-500/90 hover:text-gray-700 dark:text-gray-400/90 dark:hover:text-gray-300 hover:scale-105"
                                }`
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
