// ArticleSection.jsx
import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import SubtopicList from "./SubtopicList";
import ContentArea from "./ContentArea";
import ArticleEditorModal from "./ArticleEditorModal";

import { SAMPLE_ARTICLES } from "./sampleData";

const STORAGE_KEY = "my_portfolio_articles_v1";

export default function ArticleSection() {
  // Load from localStorage or sample data
  const [articles, setArticles] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return SAMPLE_ARTICLES;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  // UI state
  const [activeTopic, setActiveTopic] = useState(() => {
    return articles[0]?.topic || null;
  });
  const [activeSubtopic, setActiveSubtopic] = useState(() => {
    return articles[0]?.subtopic || null;
  });
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorInitial, setEditorInitial] = useState(null);

  // Derive topics and subtopics
  const topics = useMemo(() => {
    const set = new Set(articles.map((a) => a.topic));
    return Array.from(set);
  }, [articles]);

  const subtopics = useMemo(() => {
    if (!activeTopic) return [];
    const set = new Set(
      articles.filter((a) => a.topic === activeTopic).map((a) => a.subtopic)
    );
    return Array.from(set);
  }, [articles, activeTopic]);

  // Selected article = the first article that matches topic+subtopic (you can extend to list)
  const selectedArticle = useMemo(() => {
    return (
      articles.find(
        (a) => a.topic === activeTopic && a.subtopic === activeSubtopic
      ) || null
    );
  }, [articles, activeTopic, activeSubtopic]);

  // Actions
  const openNew = () => {
    setEditorInitial(null);
    setEditorOpen(true);
  };

  const handleSave = (payload) => {
    if (editorInitial) {
      // edit existing
      setArticles((prev) =>
        prev.map((a) =>
          a.id === editorInitial.id
            ? {
                ...a,
                ...payload,
                updatedAt: new Date().toLocaleString(),
              }
            : a
        )
      );
    } else {
      // new article
      const newArticle = {
        id: uuidv4(),
        ...payload,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      };
      setArticles((prev) => [newArticle, ...prev]);
      // set active to it
      setActiveTopic(newArticle.topic);
      setActiveSubtopic(newArticle.subtopic);
    }
    setEditorOpen(false);
    setEditorInitial(null);
  };

  const handleEditArticle = (article) => {
    setEditorInitial(article);
    setEditorOpen(true);
  };

  const handleDeleteArticle = (id) => {
    if (!confirm("Delete this article?")) return;
    setArticles((prev) => prev.filter((a) => a.id !== id));
    // reset selection
    setTimeout(() => {
      const first = articles.find((a) => a.id !== id);
      if (first) {
        setActiveTopic(first.topic);
        setActiveSubtopic(first.subtopic);
      } else {
        setActiveTopic(null);
        setActiveSubtopic(null);
      }
    }, 50);
  };

  const handleEditSubtopic = (subtopicName) => {
    // edit first article in that subtopic
    const art = articles.find(
      (a) => a.topic === activeTopic && a.subtopic === subtopicName
    );
    if (art) handleEditArticle(art);
  };

  const handleDeleteSubtopic = (subtopicName) => {
    if (
      !confirm(
        `Delete all articles under "${activeTopic}/${subtopicName}"? This cannot be undone.`
      )
    )
      return;
    setArticles((prev) =>
      prev.filter((a) => !(a.topic === activeTopic && a.subtopic === subtopicName))
    );
    setActiveSubtopic(null);
  };

  const handleNewSubtopic = () => {
    // opens editor with activeTopic prefilled and empty subtopic
    setEditorInitial({
      topic: activeTopic || "",
      subtopic: "",
      title: "",
      summary: "",
      content: "",
    });
    setEditorOpen(true);
  };

  // Ensure activeSubtopic exists when topic changes
  useEffect(() => {
    if (!activeTopic && topics.length) setActiveTopic(topics[0]);
    else if (activeTopic && subtopics.length) setActiveSubtopic(subtopics[0]);
    else if (activeTopic && subtopics.length === 0) setActiveSubtopic(null);
  }, [activeTopic, topics, subtopics]);

  return (
    <div className="w-full bg-[#0b0d10] text-gray-100 border border-gray-700 rounded-xl p-4">
      <div className="flex gap-4">
        {/* Sidebar - topics */}
        <Sidebar
          topics={topics}
          activeTopic={activeTopic}
          setActiveTopic={(t) => {
            setActiveTopic(t);
            // when topic changes, subtopic will be updated by effect
          }}
          onNewClick={openNew}
        />

        {/* Subtopic list */}
        <SubtopicList
          subtopics={subtopics}
          activeSubtopic={activeSubtopic}
          setActiveSubtopic={setActiveSubtopic}
          onEdit={handleEditSubtopic}
          onDelete={handleDeleteSubtopic}
          onNewSubtopic={handleNewSubtopic}
        />

        {/* Content area */}
        <div className="flex-1 min-h-[300px]">
          <motion.div
            key={`${activeTopic}-${activeSubtopic}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full"
          >
            <ContentArea
              article={selectedArticle}
              onEditArticle={handleEditArticle}
              onDeleteArticle={handleDeleteArticle}
              placeholder={
                activeTopic
                  ? "Select a subtopic to view its article (or create a new one)."
                  : "No topics. Click +new to create your first article."
              }
            />
          </motion.div>
        </div>
      </div>

      <ArticleEditorModal
        open={editorOpen}
        onClose={() => {
          setEditorOpen(false);
          setEditorInitial(null);
        }}
        onSave={(payload) => {
          // If editing existing
          if (editorInitial && editorInitial.id) {
            // merge with id
            handleSave({ ...payload, id: editorInitial.id, initial: editorInitial });
          } else {
            handleSave(payload);
          }
        }}
        initial={editorInitial}
        topics={topics}
      />
    </div>
  );
}
