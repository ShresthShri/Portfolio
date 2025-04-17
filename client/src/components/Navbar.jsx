import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Animated Hamburger Button */}
      <button
        className="relative w-8 h-8 focus:outline-none z-50"
        onClick={() => setOpen(!open)}
        >
        {/* Top Bar */}
        <motion.span
            className="absolute top-1 w-8 h-0.5 bg-white rounded origin-center"
            animate={{
            rotate: open ? 45 : 0,
            y: open ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
        />
        {/* Middle Bar */}
        <motion.span
            className="absolute top-3.5 w-8 h-0.5 bg-white rounded origin-center"
            animate={{
            opacity: open ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
        />
        {/* Bottom Bar */}
        <motion.span
            className="absolute top-6 w-8 h-0.5 bg-white rounded origin-center"
            animate={{
            rotate: open ? -45 : 0,
            y: open ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
        />
        </button>


      {/* Overlay Navigation Menu */}
      <AnimatePresence>
        {open && (
            <motion.div
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            {navLinks.map((link, i) => (
                <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                >
                <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-4xl px-6 py-3 transition-all duration-300 rounded hover:bg-white hover:text-black"
                >
                    {link.name}
                </Link>
                </motion.div>
            ))}
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
