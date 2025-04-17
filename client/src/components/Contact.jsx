// components/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact({ email, github, linkedin }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 px-8 text-white"
    >
      <div className="max-w-xl mx-auto space-y-8">
        <p className="text-xl">
          For any inquiries or opportunities, please contact me using the links below.
          To see what I’m up to, visit my GitHub.
        </p>

        <p className="text-xl">
          My current interests include game theory, prediction markets, fintech,
          entrepreneurship, politics, and philosophy. However, I’m interested in just about anything!
        </p>

        <p className="text-xl">
          I am always looking to speak with new and interesting people, so don’t be shy —
          reach out and arrange a time to chat.
        </p>

        <div className="flex justify-center gap-6 pt-6">
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <Mail className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <Github className="w-8 h-8 hover:scale-110 transition" />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="w-8 h-8 hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
