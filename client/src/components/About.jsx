
import { motion } from 'framer-motion';

export default function About({ about }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-8 py-16 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      {about.summary.map((paragraph, i) => (
        <p key={i} className="text-gray-300 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </motion.section>
  );
}
  