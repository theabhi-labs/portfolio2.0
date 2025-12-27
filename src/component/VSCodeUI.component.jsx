import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderOpen, FaGlobe, FaTimes, FaGithub } from 'react-icons/fa';
import { FiChevronDown, FiChevronRight, FiFile } from 'react-icons/fi';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const exampleTree = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'App.js',
        type: 'file',
        language: 'javascript',
        content: `import React from 'react';

export default function App(){
  return (<div>Hi from App</div>);
}`,
      },
      {
        name: 'index.js',
        type: 'file',
        language: 'javascript',
        content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);`,
      },
    ],
  },
  {
    name: 'package.json',
    type: 'file',
    language: 'json',
    content: `{
  "name": "demo",
  "version": "1.0.0"
}`,
  },
];

export default function VSCodePopup({ isOpen, onClose, project }) {
  const [activeTab, setActiveTab] = useState('files');
  const [openFolders, setOpenFolders] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const fileTree = project?.fileTree || exampleTree;
  const previewURL =
    project?.previewURL || 'https://smartbin-theta.vercel.app/';
  const githubURL =
    project?.githubURL || 'https://github.com/your-username/your-repo';

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedFile]);

  useEffect(() => {
    if (!isOpen) {
      setActiveTab('files');
      setOpenFolders({});
      setSelectedFile(null);
    }
  }, [isOpen]);

  const toggleFolder = (path) => {
    setOpenFolders((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Main Window */}
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-[90vw] max-w-[1200px] h-[80vh] bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-[#2b2b2b] flex"
          >
            {/* LEFT SIDEBAR */}
            <div className="w-14 bg-[#252526] flex flex-col items-center py-4 space-y-4 border-r border-[#333]">
              {/* Explorer */}
              <button
                onClick={() => setActiveTab('files')}
                className={`text-xl hover:text-blue-400 ${
                  activeTab === 'files'
                    ? 'text-blue-400'
                    : 'text-gray-300'
                }`}
                title="Explorer"
              >
                <FaFolderOpen />
              </button>

              {/* Preview */}
              <button
                onClick={() => setActiveTab('preview')}
                className={`text-xl hover:text-green-400 ${
                  activeTab === 'preview'
                    ? 'text-green-400'
                    : 'text-gray-300'
                }`}
                title="Preview"
              >
                <FaGlobe />
              </button>

              {/* GitHub */}
              <button
                onClick={() => window.open(githubURL, '_blank')}
                className="text-xl text-gray-300 hover:text-white"
                title="GitHub Repository"
              >
                <FaGithub />
              </button>

              <div className="flex-1" />

              {/* Close */}
              <button
                onClick={onClose}
                className="text-lg text-gray-400 hover:text-red-400"
                title="Close"
              >
                <FaTimes />
              </button>
            </div>

            {/* EXPLORER */}
            <AnimatePresence>
              {activeTab === 'files' && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 360 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#252526] border-r border-[#333] overflow-auto"
                >
                  <div className="p-4 font-semibold text-sm border-b border-[#333] flex justify-between">
                    <span>EXPLORER</span>
                    <span className="text-xs text-gray-400">
                      {project?.title || 'Demo Project'}
                    </span>
                  </div>

                  <div className="p-3 text-sm text-gray-200">
                    {fileTree.map((item, i) => (
                      <FileItem
                        key={i}
                        item={item}
                        path={item.name}
                        openFolders={openFolders}
                        toggleFolder={toggleFolder}
                        onSelectFile={(file, path) =>
                          setSelectedFile({ ...file, path })
                        }
                        selectedFile={selectedFile}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col">
              {/* Top Bar */}
              <div className="h-12 flex items-center px-4 border-b border-[#2b2b2b] bg-[#1b1b1b]">
                <div className="text-sm text-gray-300">
                  {selectedFile
                    ? selectedFile.path
                    : project?.title || 'Preview'}
                </div>
                <div className="flex-1" />
                <div className="text-xs text-gray-400">
                  {activeTab === 'preview' ? 'Preview Mode' : 'Code Mode'}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#1e1e1e]">
                {activeTab === 'preview' ? (
                  <motion.iframe
                    src={previewURL}
                    className="w-full h-full border-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                ) : selectedFile ? (
                  <div className="w-full h-full p-4 overflow-auto">
                    <pre className="language-javascript bg-[#1b1b1b] p-4 rounded-md border border-[#2a2a2a]">
                      <code
                        className={`language-${
                          selectedFile.language || 'javascript'
                        }`}
                      >
                        {selectedFile.content}
                      </code>
                    </pre>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Open a file or switch to Preview
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FileItem({
  item,
  path,
  openFolders,
  toggleFolder,
  onSelectFile,
  selectedFile,
}) {
  if (item.type === 'folder') {
    const isOpen = openFolders[path];
    return (
      <div>
        <button
          onClick={() => toggleFolder(path)}
          className="flex items-center gap-2 py-1 text-sm text-gray-200 hover:text-blue-400"
        >
          {isOpen ? <FiChevronDown /> : <FiChevronRight />}
          {item.name}
        </button>
        {isOpen && (
          <div className="pl-4">
            {item.children?.map((child, i) => (
              <FileItem
                key={i}
                item={child}
                path={`${path}/${child.name}`}
                openFolders={openFolders}
                toggleFolder={toggleFolder}
                onSelectFile={onSelectFile}
                selectedFile={selectedFile}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const isSelected = selectedFile?.path === path;

  return (
    <div
      onClick={() => onSelectFile(item, path)}
      className={`flex items-center gap-2 py-1 px-2 text-sm cursor-pointer rounded ${
        isSelected ? 'bg-[#2a2a2a]' : ''
      } hover:text-blue-400`}
    >
      <FiFile />
      {item.name}
    </div>
  );
}
