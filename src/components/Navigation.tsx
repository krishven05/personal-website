"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 p-6 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <ul className="flex items-center justify-end">
        {navItems.map((item) => (
          <li key={item.name} className="mr-8">
            <Link
              href={item.href}
              className="relative py-2 text-sm font-medium transition-colors hover:text-gray-100"
              onClick={() => setActiveSection(item.name)}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#contact"
            className="relative py-2 text-sm font-medium transition-colors hover:text-gray-100"
            onClick={() => setActiveSection("Contact")}
          >
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
