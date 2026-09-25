import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-32"
          />
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600">
          <a className="text-pink-500">Home</a>
          <a>Technologies</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
        </div>


        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <button className="text-sm text-gray-600">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full bg-pink-600 text-white text-sm">
            Sign Up
          </button>

        </div>


        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">

          <FiMenu size={24}/>

          <button className="text-sm">
            Sign In
          </button>

          <button className="px-3 py-1 rounded-full bg-pink-600 text-white text-sm">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;