import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Users, Accessibility } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Building inclusive experiences for all users",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in cross-functional teams",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Building Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted-foreground"
          >
            <p className="text-lg leading-relaxed">
              I'm a <span className="text-foreground font-medium">Senior Software Engineer</span> at 
              Tricon Infotech with a passion for creating exceptional digital experiences. 
              Since July 2019, I've been leading critical projects in Bengaluru, India.
            </p>
            <p className="leading-relaxed">
              My expertise spans the full stack, from crafting responsive React.js frontends 
              to building robust backend APIs with FastAPI and AWS services. I specialize in 
              modernizing legacy systems, improving application performance, and implementing 
              accessibility standards.
            </p>
            <p className="leading-relaxed">
              I thrive on solving complex problems and have a track record of delivering 
              measurable results—from 30% maintainability improvements to 50% traffic increases 
              through thoughtful architecture decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-5 hover:border-primary/50 transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
