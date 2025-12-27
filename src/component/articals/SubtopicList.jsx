// SubtopicList.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

export default function SubtopicList({
  subtopics,
  activeSubtopic,
  setActiveSubtopic,
  onEdit,
  onDelete,
  onNewSubtopic,
}) {
  return (
    <div className="w-full md:w-64 border-r border-[#1E1E1E] bg-[#0D0D0D]/60 backdrop-blur-sm px-4 py-5 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF6700]/50 scrollbar-track-[#1A1A1A]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-sm uppercase tracking-wide font-semibold text-gray-300">
          Subtopics
        </h5>
        <button
          onClick={onNewSubtopic}
          className="flex items-center gap-1 text-xs px-2.5 py-1 border border-[#FF6700]/60 rounded-md text-[#FF6700] hover:bg-[#FF6700] hover:text-black transition-all duration-200"
        >
          <FiPlus className="text-[10px]" />
          New
        </button>
      </div>

      {/* List */}
      <div className="space-y-1.5 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
        {subtopics.length === 0 && (
          <div className="text-gray-500 text-sm italic px-2">
            No subtopics yet
          </div>
        )}

        {subtopics.map((s, idx) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.2 }}
            className={`group flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-all duration-200 border border-transparent ${
              activeSubtopic === s
                ? "bg-[#151921] border-[#FF6700]/30 shadow-[0_0_10px_#ff670020]"
                : "hover:bg-[#10141A] hover:border-[#FF6700]/10"
            }`}
          >
            {/* Subtopic Name */}
            <button
              onClick={() => setActiveSubtopic(s)}
              className={`text-sm w-full text-left font-medium ${
                activeSubtopic === s ? "text-[#FF6700]" : "text-gray-200"
              }`}
            >
              {s}
            </button>

            {/* Action Buttons */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={() => onEdit(s)}
                title="Edit subtopic (edits first article)"
                className="p-1 border border-gray-700 rounded-md text-gray-400 hover:text-[#FF6700] hover:border-[#FF6700]/50 transition-colors"
              >
                <FiEdit2 size={13} />
              </button>
              <button
                onClick={() => onDelete(s)}
                title="Delete subtopic (all articles)"
                className="p-1 border border-red-700 rounded-md text-red-400 hover:bg-red-600/10 hover:border-red-600 transition-colors"
              >
                <FiTrash2 size={13} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

