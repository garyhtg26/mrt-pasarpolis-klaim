import { Globe } from "lucide-react";
import pplogo from "@/assets/pp-logo-white.png"; 
import jasindologo from "@/assets/jasindo-logo-white.png";

const Header = () => {
  return (
    <header className="w-full bg-primary py-5 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src={pplogo}
            alt="PasarPolis Logo"
            className="h-6 md:h-8 w-auto"
          />
           <img
            src={jasindologo}
            alt="PasarPolis Logo"
            className="h-14 md:h-16 w-auto"
          />
        </div>

  
        <div className="flex items-center gap-2">
        <button className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-primary-foreground/40 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-full h-full"
            >
              <circle cx="256" cy="256" r="256" fill="#d80027" />
              <path
                fill="#f0f0f0"
                d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256H0z"
              />
            </svg>
          </button>
          <select className="bg-transparent text-primary-foreground border-none outline-none cursor-pointer">
            <option value="id">ID</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
