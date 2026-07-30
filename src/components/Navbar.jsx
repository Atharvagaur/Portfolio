import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaEye, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-900/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-blue-500">
          AG
        </h1>

        {/* Navigation */}

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Resume Dropdown */}

        <div
          ref={menuRef}
          className="relative"
        >

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-linear-to-r
              from-blue-600
              to-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition
              duration-300
              hover:scale-105
            "
          >
            Resume

            <FaChevronDown
              size={12}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (

            <div
              className="
                absolute
                right-0
                mt-3
                w-60
                overflow-hidden
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/95
                backdrop-blur-xl
                shadow-2xl
              "
            >

              <a
                href="/Atharva Gaur AIML.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  text-gray-200
                  transition
                  hover:bg-slate-800
                "
              >
                <FaEye className="text-blue-400" />

                View Resume
              </a>

              <div className="border-t border-slate-700" />

              <a
                href="/Atharva Gaur AIML.pdf"
                download
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  text-gray-200
                  transition
                  hover:bg-slate-800
                "
              >
                <FaDownload className="text-green-400" />
                Download Resume
              </a>

            </div>

          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;