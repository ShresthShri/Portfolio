import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // We'll create this next
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5050/api/portfolio')
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.error('API Error:', err));
  }, []);

  if (!portfolio) return <div className="text-center mt-10">Loading portfolio...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero name={portfolio.about.name} />} />
        <Route path="/about" element={<About about={portfolio.about} />} />
        <Route path="/projects" element={<Projects projects={portfolio.projects} />} />
        <Route path="/experience" element={<Experience experience={portfolio.experience} />} />
        <Route path="/contact" element={<Contact email={portfolio.about.email} />} />
      </Routes>
    </div>
  );
}

export default App;
