import React from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

export default function Sidebar({
  topics,
  activeTopic,
  setActiveTopic,
  onNewClick,
  compact,
}) {
  return (
    <aside
      className={`${
        compact ? "hidden md:flex" : "flex"
      } flex-col w-full md:w-60 border-r border-gray-800 bg-[#0b0f16]/80 backdrop-blur-md p-4 overflow-y-auto custom-scrollbar`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-lg font-semibold tracking-wide text-gray-100">
          🧠 Topics
        </h4>
        <button
          onClick={onNewClick}
          className="flex items-center gap-1 text-sm px-3 py-1 border border-gray-700 rounded-md text-gray-200 hover:bg-[#10131a] hover:border-gray-500 transition-all"
        >
          <PlusCircle size={14} />
          <span>New</span>
        </button>
      </div>

      {/* Topic List */}
      <nav className="flex-1 space-y-2">
        {topics.length === 0 && (
          <div className="text-gray-500 text-sm italic mt-4">No topics yet</div>
        )}

        {topics.map((t) => (
          <motion.button
            key={t}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTopic(t)}
            className={`group block w-full text-left px-3 py-2 rounded-lg border transition-all duration-150 ${
              activeTopic === t
                ? "border-[#0077ff]/70 bg-[#0e1729] text-[#66aaff] shadow-sm"
                : "border-transparent text-gray-300 hover:text-white hover:border-[#2a3550] hover:bg-[#0e1320]"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="capitalize">{t}</span>
              {activeTopic === t && (
                <motion.span
                  layoutId="activeTopicIndicator"
                  className="w-2 h-2 rounded-full bg-[#0077ff]"
                />
              )}
            </div>
          </motion.button>
        ))}
      </nav>
    </aside>
  );
}

