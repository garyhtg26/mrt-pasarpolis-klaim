import { ChevronDown, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import pplogo from "@/assets/pp-logo-white.png";
import jasindologo from "@/assets/jasindo-logo-white.png";

interface DashboardHeaderProps {
  onLogout?: () => void;
}

const DashboardHeader = ({ onLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* --- Kiri: Logo & Nav --- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={pplogo}
              alt="PasarPolis Logo"
              className="h-6 md:h-8 w-auto"
            />
            <img
              src={jasindologo}
              alt="Jasindo Logo"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm sm:text-base">
            <a
              href="#"
              className="hover:text-secondary transition-colors"
            >
              Polis
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors font-semibold"
            >
              Klaim
            </a>
          </nav>
        </div>

        {/* --- Kanan: Language + User + Logout --- */}
        <div className="flex items-center gap-2 sm:gap-4 self-end md:self-auto">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary/80 flex items-center gap-1"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden">
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
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Indonesia</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary/80 flex items-center"
              >
                <User className="h-4 w-4 mr-2" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Logout Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-primary-foreground hover:bg-primary/80"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
