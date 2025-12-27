import { useState } from "react";

import About from "./component/about.component";
import Projects from "./component/project.component";
import Contact from "./component/contact.component";
import HeroSection from "./component/hero.component";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-[#333]">
        <div className="text-white text-2xl font-bold">
          <span className="text-[#FF6700]">root</span>@abhishek
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 text-lg text-white">
          <li>
            <a href="#projects" className="hover:text-[#FF6700]">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#FF6700]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#FF6700]">
              Contact
            </a>
          </li>

          {/* 🔥 Beyond The Code */}
          <li>
            <a
              href="/beyondTheCode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6700]"
            >
              BeyondTheCode
            </a>
          </li>

          {/* 🔥 Tracker */}
          <li>
            <a
              href="/track"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6700] font-medium hover:underline"
            >
              Track Project
            </a>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40">
          <div className="bg-[#1A1A1A] w-64 h-full p-6">
            <button
              className="text-white text-2xl mb-6"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>

            <ul className="flex flex-col gap-6 text-lg text-white">
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>

              {/* Beyond The Code */}
              <li>
                <a
                  href="/beyondTheCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6700]"
                >
                  BeyondTheCode
                </a>
              </li>

              {/* Tracker */}
              <li>
                <a
                  href="/track"
                  target="_blank"
                  className="text-[#FF6700]"
                >
                  Track Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* HERO */}
      <HeroSection />

      {/* SECTIONS */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

