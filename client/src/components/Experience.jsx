import { motion } from 'framer-motion';

export default function Experience({ experience, education }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12 text-white"
    >
      {/* Education Section */}
      <h2 className="text-3xl font-semibold mb-8">Education</h2>
      {education.map((edu, idx) => (
        <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1, duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex justify-between flex-wrap sm:flex-nowrap">
          <div>
            <p className="text-xl font-bold">{edu.institution}</p>
            <p className="text-lg font-semibold text-gray-300">{edu.degree}</p>
          </div>
          <p className="text-sm text-gray-400 mt-1 sm:mt-0 sm:text-right sm:min-w-[160px]">
            {edu.dates}
          </p>
        </div>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 mt-2">
          {edu.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    ))}


      <hr className="border-t border-gray-600 my-10" />

      {/* Work Experience Section */}
      <h2 className="text-3xl font-semibold mb-8">Professional Experience</h2>
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
