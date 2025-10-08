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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
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
          <nav className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">
              Polis
            </a>
            <a href="#" className="hover:text-secondary transition-colors font-semibold">
              Klaim
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
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
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Indonesia</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
                <User className="h-4 w-4 mr-2" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
