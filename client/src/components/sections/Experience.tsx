import { motion } from "framer-motion";
import { experience, education, resumeUrl } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                  
                  <div className="mb-1 flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {job.period}</span>
                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {job.location}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                  <h5 className="text-lg text-primary mb-2">{job.company}</h5>
                  
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-secondary transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-secondary"></div>
                  
                  <div className="mb-1 flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {edu.period}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                  <h5 className="text-lg text-secondary mb-2">{edu.institution}</h5>
                  
                  <p className="text-muted-foreground text-sm">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" onClick={() => window.open(resumeUrl, '_blank')}>
            Download Full Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}