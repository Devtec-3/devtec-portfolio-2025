import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-mono text-gradient mb-2">Devtec.</h2>
            <p className="text-muted-foreground text-sm">
              Building the future of the web, one pixel at a time.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muhammad Abdulwadud Ayinde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}