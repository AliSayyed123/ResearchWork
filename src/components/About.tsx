const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a passionate academic researcher with a focus on developing innovative technological 
                solutions that address real-world challenges. My research spans across multiple domains 
                including agricultural technology, machine learning applications, and real-time computer vision systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My work aims to bridge the gap between cutting-edge research and practical applications, 
                particularly in areas that can have significant social and economic impact. I am particularly 
                interested in leveraging AI and machine learning to solve problems in agriculture, tourism, 
                and public safety.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Research Interests</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Agricultural Technology & IoT</li>
                    <li>• Machine Learning Applications</li>
                    <li>• Computer Vision & CNNs</li>
                    <li>• Real-time Systems</li>
                    <li>• Data-driven Decision Making</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Python & Machine Learning</li>
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Computer Vision (OpenCV)</li>
                    <li>• Data Analysis & Visualization</li>
                    <li>• Research Methodology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;