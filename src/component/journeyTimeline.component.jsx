import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode, FaTrophy } from "react-icons/fa";

const timelineData = [
  {
    year: "2024",
    title: "Started My B.Tech Journey",
    description:
      "Began my engineering journey — curious about how technology shapes the world. Started learning the fundamentals of coding and computer science.",
    icon: <FaRocket />,
  },
  {
    year: "2024",
    title: "Dived into Web Development",
    description:
      "Discovered the power of full-stack development with MERN. Built my first authentication system, portfolio, and dynamic UI projects.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2025",
    title: "Hackathons & Real Projects",
    description:
      "Participated in hackathons and collaborated with creative teams. Worked on solving real-world problems through innovation and tech.",
    icon: <FaCode />,
  },
  {
    year: "Future",
    title: "Building My Legacy",
    description:
      "Now focusing on creating projects that leave a mark — from AI-powered apps to meaningful  through BehindTheCode.",
    icon: <FaTrophy />,
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative bg-[#0b0f1a] py-20 px-6 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0077ff] mb-16">
        My Journey Timeline
      </h2>

      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gradient-to-b before:from-[#0077ff] before:to-[#FF6700] before:rounded-full">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Line connector dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#0b0f1a] z-10 w-6 h-6 border-4 border-[#FF6700] rounded-full shadow-[0_0_15px_rgba(255,103,0,0.7)]"></div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827]/80 backdrop-blur-md border border-[#1e293b] shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-2xl p-6 w-full md:w-[45%] hover:border-[#FF6700] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3 text-[#FF6700] text-xl">
                <span className="p-2 bg-[#1e293b]/60 rounded-full">{item.icon}</span>
                <h3 className="font-semibold text-white text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-[#0077ff] mt-3 font-semibold">
                {item.year}
              </p>
            </motion.div>

            {/* Connector line dot (mobile) */}
            <div className="md:hidden flex justify-center mt-4">
              <div className="w-4 h-4 bg-[#FF6700] rounded-full shadow-[0_0_10px_rgba(255,103,0,0.7)]"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle glowing background effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0077ff]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF6700]/20 rounded-full blur-3xl"></div>
    </section>
  );
}
