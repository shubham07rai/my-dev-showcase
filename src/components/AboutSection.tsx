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
          <p className="text-primary font-mono text-sm mb-2">About Me</p>
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
              I build web applications that are easy to use, fast, and reliable. Most of my work has been
              around improving existing systems—cleaning up legacy code, simplifying complex flows, and
              making products more accessible and scalable.
            </p>

            <p className="leading-relaxed">
              I enjoy working with React and modern UI patterns to create experiences that feel intuitive
              and responsive. I care deeply about performance, code quality, and accessibility, and I like
              leaving a codebase better than I found it.
            </p>

            <p className="leading-relaxed">
              I’ve also worked on integrating secure backend services for authentication and data flow,
              which helps me think beyond just the UI and build features that work well end to end. Above
              all, I enjoy solving real problems and building things that people find genuinely useful.
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
