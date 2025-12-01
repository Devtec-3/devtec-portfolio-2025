import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              I'm <span className="text-primary">{personalInfo.name}</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in <span className="text-foreground font-medium">{personalInfo.location}</span>, 
              I specialize in building high-quality, performant web applications using modern technologies.
              My goal is to bridge the gap between design and engineering to create seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Experience", value: "2+ Years" },
              { label: "Projects", value: "10+" },
              { label: "Clients", value: "Happy" },
              { label: "Availability", value: "Full-time" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card border-none bg-card/30">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-3xl font-bold text-gradient mb-2">{stat.value}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}