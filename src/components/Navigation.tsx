"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 px-4 py-4 md:p-6 z-50 transition-all duration-300 ${
      scrolled || menuOpen ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        <ul className={`${menuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-black/90 p-4 space-y-4 backdrop-blur-lg' : 'hidden'} md:flex md:flex-row md:items-center md:justify-end md:static md:space-y-0 md:bg-transparent md:p-0`}>
          {navItems.map((item) => (
            <li key={item.name} className="md:mr-8">
              <Link
                href={item.href}
                className="relative py-2 text-sm font-medium transition-colors hover:text-gray-100 block"
                onClick={() => {
                  setActiveSection(item.name);
                  setMenuOpen(false);
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="relative py-2 text-sm font-medium transition-colors hover:text-gray-100 block"
              onClick={() => {
                setActiveSection("Contact");
                setMenuOpen(false);
              }}
            >
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navigation;
