import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS/LESS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Python", "RESTful APIs", "AWS Chalice", "Node.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Cognito", "AWS Lambda", "Git", "NPM", "CI/CD"],
  },
  {
    title: "Practices",
    skills: ["Responsive Design", "Accessibility (WCAG)", "Performance Optimization", "Agile/Scrum"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">03. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-mono hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
