import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, discussing research opportunities, or just want to connect? 
            I'd love to hear from you.
          </p>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md">
            <div className="grid md:grid-cols-3 gap-6">
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-20 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <a 
                  href="https://www.linkedin.com/in/ali-nadeem-sayyed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-20 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <a 
                  href="https://github.com/AliSayyed123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-20 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <a href="mailto:contact@example.com">
                  <Mail className="w-6 h-6" />
                  <span>Email</span>
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground">
                Open to research collaborations, academic discussions, and innovative projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;