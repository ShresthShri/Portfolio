// src/App.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5050/api/portfolio')
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.error('API Error:', err));
  }, []);

  if (!portfolio) return <div className="text-center mt-10 text-white">Loading portfolio...</div>;

  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Hero name={portfolio.about.name} />} />
          <Route path="/about" element={<About about={portfolio.about} />} />
          <Route path="/projects" element={<Projects projects={portfolio.projects} />} />
          <Route path="/experience" element={<Experience experience={portfolio.experience} />} />
          <Route path="/contact" element={<Contact
            email={portfolio.about.email}
            github={portfolio.about.github}
            linkedin={portfolio.about.linkedin}
            substack={portfolio.about.substack}
          />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

