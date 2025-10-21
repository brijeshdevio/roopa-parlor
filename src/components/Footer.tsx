import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { SiYoutubeshorts } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="w-full sm:w-[90%] lg:w-[80%] flex items-center justify-between mx-auto opacity-80 text-sm">
        <div>
          <p>© {new Date().getFullYear()} Roopa Beauty. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms of Service</Link>
        </div>
        <div className="flex items-center gap-3">
          <a href="" className="hover:text-secondary">
            <FaInstagram size={20} className="" />
          </a>
          <a href="" className="hover:text-secondary">
            <ImFacebook2 size={20} className="" />
          </a>
          <a href="" className="hover:text-secondary">
            <SiYoutubeshorts size={20} className="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
