// ContentArea.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css"; // code syntax theme

export default function ContentArea({
  article,
  onEditArticle,
  onDeleteArticle,
  placeholder,
}) {
  if (!article)
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 italic p-8 bg-[#0d0d0d]">
        {placeholder}
      </div>
    );

  return (
    <motion.div
      key={article.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-6 md:p-10 bg-[#0d0d0d] text-gray-100 overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF6700]/60 scrollbar-track-[#1A1A1A] rounded-xl shadow-inner"
      style={{ maxHeight: "calc(100vh - 120px)" }}
    >
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-[#222] pb-3">
        <div>
          <div className="text-sm text-[#FF6700]/80 mb-1 tracking-wide uppercase font-mono">
            {article.topic}/{article.subtopic}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {article.title}
          </h2>
          <div className="text-xs text-gray-400 mt-1 font-light">
            {article.createdAt} • updated: {article.updatedAt}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onEditArticle(article)}
            className="px-3 py-1.5 border border-[#FF6700]/70 text-[#FF6700] rounded-md text-sm hover:bg-[#FF6700] hover:text-black transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteArticle(article.id)}
            className="px-3 py-1.5 border border-red-500/60 text-red-400 rounded-md text-sm hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Markdown Content */}
      <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed 
                      prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl
                      prose-code:bg-[#1E1E1E] prose-code:text-[#FF6700] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                      prose-pre:bg-[#111] prose-pre:border prose-pre:border-[#222] prose-pre:rounded-lg
                      prose-a:text-[#FF6700] hover:prose-a:text-orange-400 prose-strong:text-white prose-blockquote:border-l-[#FF6700]"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}
