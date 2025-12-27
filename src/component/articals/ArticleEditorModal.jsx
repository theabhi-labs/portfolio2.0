import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArticleEditorModal({
  open,
  onClose,
  onSave,
  initial = null,
  topics = [],
}) {
  const [topic, setTopic] = useState(initial?.topic || "");
  const [subtopic, setSubtopic] = useState(initial?.subtopic || "");
  const [title, setTitle] = useState(initial?.title || "");
  const [summary, setSummary] = useState(initial?.summary || "");
  const [content, setContent] = useState(initial?.content || "");

  const textareaRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTopic(initial?.topic || "");
      setSubtopic(initial?.subtopic || "");
      setTitle(initial?.title || "");
      setSummary(initial?.summary || "");
      setContent(initial?.content || "");
    }
  }, [open, initial]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f1420] border border-gray-700 rounded-2xl p-6 shadow-2xl custom-scrollbar"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white tracking-wide">
              {initial ? "✏️ Edit Article" : "📝 New Article"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Topic Input or Dropdown */}
              <div>
                <label className="text-sm text-gray-300">Topic</label>
                {topics.length > 0 ? (
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-[#0b0f16] border border-gray-700 rounded-md text-white focus:border-[#0077ff] outline-none"
                  >
                    <option value="">Select or type manually</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. JavaScript"
                    className="w-full mt-1 px-3 py-2 bg-[#0b0f16] border border-gray-700 rounded-md text-white focus:border-[#0077ff] outline-none"
                  />
                )}
              </div>

              {/* Subtopic */}
              <div>
                <label className="text-sm text-gray-300">Subtopic</label>
                <input
                  value={subtopic}
                  onChange={(e) => setSubtopic(e.target.value)}
                  placeholder="e.g. Arrays"
                  className="w-full mt-1 px-3 py-2 bg-[#0b0f16] border border-gray-700 rounded-md text-white focus:border-[#0077ff] outline-none"
                />
              </div>
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="text-sm text-gray-300">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title"
                className="w-full mt-1 px-3 py-2 bg-[#0b0f16] border border-gray-700 rounded-md text-white focus:border-[#0077ff] outline-none"
              />
            </div>

            {/* Summary */}
            <div className="mb-4">
              <label className="text-sm text-gray-300">Summary</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Short summary..."
                rows={2}
                className="w-full mt-1 px-3 py-2 bg-[#0b0f16] border border-gray-700 rounded-md text-white focus:border-[#0077ff] outline-none resize-none"
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="text-sm text-gray-300">Content (Markdown)</label>
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your Markdown content here..."
                rows={10}
                className="w-full mt-1 px-3 py-2 bg-[#0b0f16] border border-gray-700 rounded-md text-white font-mono focus:border-[#0077ff] outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 sticky bottom-0 bg-[#0f1420] pt-2 border-t border-gray-700">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={() =>
                  onSave({
                    topic: topic.trim() || "uncategorized",
                    subtopic: subtopic.trim() || "general",
                    title: title.trim() || "Untitled",
                    summary: summary.trim(),
                    content,
                  })
                }
                className="px-5 py-2 rounded-md bg-[#0077ff] hover:bg-[#0066dd] text-white font-medium transition-all shadow-md"
              >
                Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
