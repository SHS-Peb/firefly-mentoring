import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 flex items-center justify-center text-white z-50 relative">
      {/* Desktop Menu (centered) */}
      <ul className="hidden md:flex gap-10 text-[1.8rem] uppercase tracking-widest">
        <li>
          <Link className="hover:text-pink-300 transition" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-pink-300 transition" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-pink-300 transition" to="/packages">
            Packages
          </Link>
        </li>
        <li>
          <Link className="hover:text-pink-300 transition" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger button (top-right) */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50 absolute right-4 top-6"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Full-Screen Menu */}
      {open && (
        <div
          className="
            fixed inset-0 
            bg-black 
            flex flex-col items-center justify-center 
            gap-10 
            text-xl uppercase tracking-widest 
            md:hidden animate-fadeIn 
            z-40
          "
        >
          {/* Optional brand title on mobile menu */}
          <div className="font-handelson text-3xl mb-6 drop-shadow-[0_0_10px_#ffd7ff]">
            Firefly
          </div>

          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link
                onClick={() => setOpen(false)}
                className="hover:text-pink-300 transition"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setOpen(false)}
                className="hover:text-pink-300 transition"
                to="/about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setOpen(false)}
                className="hover:text-pink-300 transition"
                to="/packages"
              >
                Packages
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setOpen(false)}
                className="hover:text-pink-300 transition"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
