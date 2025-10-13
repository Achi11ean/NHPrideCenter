import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Menu, X } from "lucide-react";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="backdrop-blur-md bg-yellow-100 py-1 shadow-lg w-full sticky top-0 z-50 border-b border-blue-700">
        <div className="container mx-auto flex justify-between items-center px-1 relative">
          {/* Logo */}
          <Link
            to="/"
            className="transition duration-500 ease-in-out transform hover:scale-110"
          >
            <img
              src="./PrideLogo2.jpeg"
              alt="Company Logo"
              className="h-16 sm:h-24 md:h-24 border border-black object-contain transition-transform duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
 <div
  className="md:hidden flex items-center gap-2 cursor-pointer text-black font-semibold text-lg z-50"
  onClick={toggleMenu}
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
  <span>{menuOpen ? "Close" : "Menu"}</span>
</div>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:space-x-12 w-full md:w-auto absolute md:static top-16 left-0 right-0 bg-yellow-100 md:bg-transparent  shadow-lg md:shadow-none transition-all duration-500 ease-in-out p-2 md:p-0 z-40`}
          >
            <div className="flex flex-col md:flex-row md:space-x-12 text-center space-y-4 md:space-y-0">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-black hover:text-blue-600 text-lg font-semibold uppercase tracking-wide transition duration-300 border-b-2 border-transparent hover:border-yellow-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white text-2xl transition duration-300 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-white text-2xl transition duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
