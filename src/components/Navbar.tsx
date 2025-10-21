import { TfiVimeo } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";

const ItemLink = ({ to = "/", label }: { label: string; to?: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `"py-2 px-3 ${isActive ? "text-secondary" : "hover:text-secondary"}`
      }
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full py-3 bg-base-100/90">
      <div className="w-full sm:w-[90%] lg:w-[80%] flex items-center justify-between mx-auto">
        <div className="flex items-center gap-1.5 text-secondary">
          <TfiVimeo size={30} />
          <span className="text-xl font-playfair-display">Roopa Parlor</span>
        </div>
        <div className="flex items-center gap-3">
          <ItemLink label="Home" />
          <ItemLink label="Services" to="/services" />
          <ItemLink label="Appointment" to="/appointment" />
          <ItemLink label="About Us" to="/about" />
          <ItemLink label="Contact Us" to="/contact" />
          <Link to="/appointment">
            <button className="btn btn-secondary rounded-full">Book Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
