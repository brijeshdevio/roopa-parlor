import { TfiVimeo } from "react-icons/tfi";

const ItemLink = ({ label }: { label: string }) => {
  return (
    <a href="/" className="hover:text-error py-2 px-3">
      {label}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full py-5 bg-base-100/90">
      <div className="w-full sm:w-[90%] lg:w-[80%] flex items-center justify-between mx-auto">
        <div className="flex items-center gap-1.5 text-secondary">
          <TfiVimeo size={30} />
          <span className="text-xl font-playfair-display">Roopa Parlor</span>
        </div>
        <div className="flex items-center gap-3">
          <ItemLink label="Home" />
          <ItemLink label="Services" />
          <ItemLink label="Appointment" />
          <ItemLink label="About Us" />
          <ItemLink label="Contact Us" />
          <button className="btn btn-secondary rounded-full">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
