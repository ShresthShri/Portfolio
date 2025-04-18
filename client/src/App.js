// src/App.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get('https://portfolio-b1jb.onrender.com/api/portfolio')
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.error('API Error:', err));
  }, []);

  if (!portfolio) return <div className="text-center mt-10 text-white">Loading portfolio...</div>;

  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen relative">
      {/* Animated Back Button */}
      <AnimatePresence>
        {location.pathname !== '/' && (
          <motion.button
            key="back-button"
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-white text-black font-bold shadow-md hover:scale-110 transition-transform"
            title="Go Back"
          >
            ←
          </motion.button>
        )}
      </AnimatePresence>

      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Hero name={portfolio.about.name} />} />
          <Route path="/about" element={<About about={portfolio.about} />} />
          <Route path="/projects" element={<Projects projects={portfolio.projects} />} />
          <Route path="/experience" element={
  <Experience
    experience={portfolio.experience}
    education={portfolio.education}
  />
} />          <Route path="/contact" element={<Contact
            email={portfolio.about.email}
            github={portfolio.about.github}
            linkedin={portfolio.about.linkedin}
            substack={portfolio.about.substack}
          />} />
        </Routes>
      </AnimatePresence>
      <Analytics />
    </div>
  );
}

export default App;
