import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl gradient-text">
            Research Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('research')} className="nav-link">
              Research
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
            <Button variant="outline" size="sm" asChild>
              <a 
                href="https://drive.google.com/file/d/1p-uWytjIdIBB7Bj0Rwh77nO5fTMHVkQb/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Resume
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;