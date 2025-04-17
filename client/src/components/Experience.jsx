import { motion } from 'framer-motion';

export default function Experience({ experience }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12 text-white"
    >
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>
      {experience.map((job, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className="mb-10"
        >
          <div className="flex justify-between items-center flex-wrap mb-2">
            <h3 className="text-xl font-bold">{job.company} – {job.title}</h3>
            <span className="text-sm text-gray-400">{job.dates}</span>
          </div>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            {job.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
}