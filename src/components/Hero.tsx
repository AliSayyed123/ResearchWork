import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-width text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Ali Nadeem Sayyed</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Academic Researcher exploring innovative solutions in agriculture technology, 
            machine learning, and real-time systems
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('research')}
              className="px-8 py-6 text-lg"
            >
              View Research
            </Button>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/in/ali-nadeem-sayyed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://github.com/AliSayyed123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <span>Learn more about me</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;