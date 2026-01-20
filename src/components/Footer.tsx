import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} — Built with React & TypeScript
          </p>
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Developed with <span className="text-primary">♥</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
