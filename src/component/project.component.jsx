import React, { useState } from "react";
import VSCodePopup from "./VSCodeUI.component";

const projects = [
  {
    title: "Smartbin",
    description: "SmartBin senses waste levels and sends real-time alerts.",
    image: "./smartbin.png",
    live: "https://smartbin-theta.vercel.app/",
  },
  {
    title: "Leet Code clone",
    description: "Data Structures & Algorithms Playground.",
    image: "./leetcode.png",
    live: "",
  },
  {
    title: "Task Manager",
    description: "TaskSprint – Plan Smart, Finish Strong.",
    image: "./task_manager.png",
    live: "#",
  },
];

export default function Projects() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12 relative">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6700] mb-12">
        Projects
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-[#FF6700] scrollbar-track-gray-900">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[350px] bg-[#1A1A1A] rounded-2xl shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#FF6700]">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setIsPopupOpen(true);
                  }}
                  className="px-4 py-2 bg-[#222] text-[#FF6700] border border-[#FF6700] rounded hover:bg-[#FF6700] hover:text-white transition duration-300"
                >
                  Code Source
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <VSCodePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
