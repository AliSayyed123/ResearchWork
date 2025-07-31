import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Clock } from "lucide-react";

const Research = () => {
  const papers = [
    {
      title: "KrishiMitra: Facilitating Direct Market Access to Farmers",
      description: "A comprehensive platform designed to connect farmers directly with markets, eliminating middlemen and ensuring fair pricing. This research explores the integration of IoT sensors, mobile applications, and data analytics to create a seamless marketplace for agricultural products.",
      status: "published",
      tags: ["Agriculture", "IoT", "Mobile Technology", "Market Access"],
      year: "2023",
      pdfLink: "https://drive.google.com/file/d/1q5ip7QkBib2EZDvVzlVl7EfODJeIl9zT/view?usp=sharing"
    },
    {
      title: "Reviving Lesser-Known Tourist Sites in Maharashtra using Random Forest",
      description: "An innovative approach to promoting tourism by leveraging machine learning algorithms to identify and recommend lesser-known tourist destinations. The study uses Random Forest algorithms to analyze various factors and predict the tourism potential of underexplored locations in Maharashtra.",
      status: "published",
      tags: ["Machine Learning", "Tourism", "Random Forest", "Data Analysis"],
      year: "2023",
      pdfLink: "https://drive.google.com/file/d/1aBf3paCbDx34ZIdXvbtSBDH8rjI4KWCy/view?usp=sharing"
    },
    {
      title: "Real-Time Accident Detection using CNNs",
      description: "A cutting-edge computer vision system that employs Convolutional Neural Networks for real-time detection of traffic accidents. The research focuses on developing an efficient model that can process video streams and identify accident scenarios with high accuracy and minimal latency.",
      status: "published",
      tags: ["Computer Vision", "CNNs", "Real-time Processing", "Safety"],
      year: "2024",
      pdfLink: "https://drive.google.com/file/d/1F9Mp1NLRqU1T3WA-qXNOOTPENxs7EqmM/view?usp=sharing"
    },
    {
      title: "KrishiMitra: Real-Time Agricultural Bidding Through a Mobile-First Decentralized Architecture",
      description: "Building upon the foundational KrishiMitra platform, this research advances the system to incorporate real-time bidding capabilities through a mobile-first decentralized architecture. The work explores blockchain integration, real-time price discovery, and distributed systems to create a more transparent and efficient agricultural marketplace.",
      status: "upcoming",
      tags: ["Agriculture", "Real-time Systems", "Decentralized Architecture", "Mobile Technology", "Blockchain"],
      year: "2024"
    }
  ];

  return (
    <section id="research" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring innovative solutions through rigorous research in machine learning, 
            agricultural technology, and computer vision applications.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {papers.map((paper, index) => (
            <div key={index} className="paper-card">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                        {paper.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant={paper.status === "published" ? "default" : "secondary"}>
                          {paper.status === "published" ? (
                            <><FileText className="w-3 h-3 mr-1" /> Published</>
                          ) : (
                            <><Clock className="w-3 h-3 mr-1" /> Under Publication</>
                          )}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{paper.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {paper.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
                  {paper.status === "published" && (
                    <Button variant="outline" size="sm" className="inline-flex items-center gap-2" asChild>
                      <a href={paper.pdfLink} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" />
                        View PDF
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {paper.status === "upcoming" && (
                    <Badge variant="secondary" className="self-start">
                      Coming Soon
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;