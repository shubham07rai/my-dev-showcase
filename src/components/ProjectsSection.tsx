import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, TrendingUp, Code, Users } from "lucide-react";

const projects = [
  {
    title: "Legacy to React Migration",
    description: "Led complete migration of a legacy JavaScript application to React.js, implementing modern architecture patterns and component-based design.",
    metrics: ["30% Maintainability ↑", "25% Scalability ↑", "50% Traffic ↑"],
    tech: ["React.js", "TypeScript", "SASS"],
    icon: Code,
  },
  {
    title: "EHR Tool Development",
    description: "Managed full-stack development of Electronic Health Records tool with focus on accessibility and usability improvements.",
    metrics: ["40% Utilization ↑", "WCAG Compliant", "Full Stack"],
    tech: ["React.js", "FastAPI", "AWS"],
    icon: Users,
  },
  {
    title: "Interactive Learning Platform",
    description: "Designed and built interactive educational modules featuring matching, ranking, and grouping functionalities for enhanced student engagement.",
    metrics: ["Interactive UI", "Teacher Tools", "Student Analytics"],
    tech: ["React.js", "JavaScript", "REST APIs"],
    icon: TrendingUp,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">04. Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href="#"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-mono text-muted-foreground"
                      >
                        {tech}
                        {project.tech.indexOf(tech) < project.tech.length - 1 && (
                          <span className="mx-2 text-border">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
