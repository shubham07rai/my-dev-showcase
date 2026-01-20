import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experience = {
  title: "Senior Software Engineer",
  company: "Tricon Infotech",
  location: "Bengaluru, India",
  period: "Jul 2019 - Present",
  achievements: [
    {
      title: "React.js Migration",
      description: "Led legacy JavaScript to React.js migration, achieving 30% boost in maintainability, 25% increase in scalability, and 50% increase in site traffic",
    },
    {
      title: "Performance Optimization",
      description: "Reduced codebase by 20-40%, decreased bugs by 20-30%, improved accessibility compliance by 30%",
    },
    {
      title: "Full Stack Development",
      description: "Managed EHR tool development resulting in 40% increase in utilization through improved accessibility and usability",
    },
    {
      title: "Educational Tools",
      description: "Designed interactive learning modules with matching, ranking, and grouping functionalities for teachers and students",
    },
    {
      title: "API Development",
      description: "Built RESTful APIs using FastAPI and Chalice with AWS Cognito integration for authentication and authorization",
    },
  ],
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">02. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've Worked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {experience.title}
              </h3>
              <p className="text-xl text-primary font-medium">{experience.company}</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {experience.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
