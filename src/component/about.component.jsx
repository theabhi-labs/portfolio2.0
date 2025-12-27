import React from "react";

export default function About() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="flex-1">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FF6700] mb-5">
    About Me
  </h2>

  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-3">
    I'm Abhishek Yadav, a web developer focused on building clean, reliable, and
    user-friendly web applications.
  </p>

  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-5">
    I enjoy turning ideas into practical solutions through modern technologies,
    while keeping performance, scalability, and code quality in mind.
  </p>

  <button className="px-5 py-2.5 bg-[#FF6700] rounded-md text-white font-medium hover:bg-[#e65c00] transition duration-300">
    Download Resume
  </button>
</div>


        {/* Right: Image */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
  <h3 className="text-3xl font-bold text-[#FF6700] mb-6">My Skills</h3>

  <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
    {/* HTML */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./html-5.png" alt="HTML" className="w-16 h-16"/>
      <span className="text-gray-300">HTML</span>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./css-3.png" alt="CSS" className="w-16 h-16"/>
      <span className="text-gray-300">CSS</span>
    </div>

    {/* JavaScript */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./java-script.png" alt="JavaScript" className="w-16 h-16"/>
      <span className="text-gray-300">JavaScript</span>
    </div>

    {/* React */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./physics.png" alt="React" className="w-16 h-16"/>
      <span className="text-gray-300">React</span>
    </div>

    {/* Node.js */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./node-js.png" alt="Node.js" className="w-16 h-16"/>
      <span className="text-gray-300">Node.js</span>
    </div>

    {/* Express */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./icons8-express-js-50.png" alt="Express" className="w-16 h-16"/>
      <span className="text-gray-300">Express</span>
    </div>

    {/* MongoDB */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./database.png" alt="MongoDB" className="w-16 h-16"/>
      <span className="text-gray-300">MongoDB</span>
    </div>

    {/* Tailwind CSS */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./icons8-tailwind-css-48.png" alt="Tailwind CSS" className="w-16 h-16"/>
      <span className="text-gray-300">Tailwind</span>
    </div>

    {/* GitHub */}
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./github.png" alt="GitHub" className="w-16 h-16"/>
      <span className="text-gray-300">GitHub</span>
    </div>

    <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
      <img src="./social.png" alt="GitHub" className="w-16 h-16"/>
      <span className="text-gray-300">docker</span>
    </div>
  </div>
</div>

        
      </div>
    </section>
  );
}
