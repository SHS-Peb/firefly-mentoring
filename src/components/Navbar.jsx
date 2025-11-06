import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 tracking-widest">
      <ul className="flex gap-10 text-sm uppercase">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
