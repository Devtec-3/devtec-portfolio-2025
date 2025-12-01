import { motion } from "framer-motion";
import { personalInfo, resumeUrl } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_digital_background_with_cyan_and_purple_neon_lines.png";
import profileImg from "@assets/IMG-20251126-WA0002_1764586108482.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Available for work</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-gradient block mt-2">{personalInfo.nickname}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              {personalInfo.title} creating futuristic, responsive, and user-centric web experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-primary/20 hover:bg-primary/5"
                onClick={() => window.open(resumeUrl, '_blank')}
              >
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing ring behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background/50 ring-4 ring-primary/20 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute bottom-8 -left-8 w-auto px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-border shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-sm font-bold text-primary">2+ Years Exp</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-primary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}