import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebinarsSection from "./webinars.component";
import JourneyTimeline from "./journeyTimeline.component";
import ArticleSection from "./articals/ArticleSection"

export default function BeyondTheCode() {
  const [activeTab, setActiveTab] = useState("webinars");

  return (
    <section className="min-h-screen bg-[#0a0e1a] text-white py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#0077ff] mb-4">
          Behind The Code
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Every journey has stories, lessons, and faces that shaped it. Here's what lies{" "}
          <span className="text-[#FF6700]">Behind The Code.</span>
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setActiveTab("webinars")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "webinars"
              ? "bg-[#0077ff] text-white shadow-[0_0_20px_#0077ff80]"
              : "bg-transparent border border-[#0077ff] hover:bg-[#0077ff40]"
          }`}
        >
          Hackathon & Session
        </button>

        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "timeline"
              ? "bg-[#FF6700] text-white shadow-[0_0_20px_#ff670080]"
              : "bg-transparent border border-[#FF6700] hover:bg-[#FF670040]"
          }`}
        >
          Journey Timeline
        </button>

        {/* <button
          onClick={() => setActiveTab("articles")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "articles"
              ? "bg-[#00c853] text-white shadow-[0_0_20px_#00c85380]"
              : "bg-transparent border border-[#00c853] hover:bg-[#00c85340]"
          }`}
        >
          Articles
        </button> */}
        
      </div>

      {/* 🔹 Tab Content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "webinars" ? (
            <motion.div
              key="webinars"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <WebinarsSection />
            </motion.div>
          ) : activeTab === "timeline" ? (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <JourneyTimeline />
            </motion.div>
          ) : (
            <motion.div
              key="articles"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <ArticleSection /> {/* 👈 Your article section will load here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16 text-gray-400 italic text-lg"
      >
        “Every connection, every challenge, every line of code — built the person I’m becoming.”
      </motion.div>
    </section>
  );
}



