import React from "react";

const articles = [
  {
    title: "Understanding React Hooks",
    description: "A deep dive into React Hooks, useState, useEffect, and custom hooks.",
    image: "./article1.png",
    link: "#",
  },
  {
    title: "Tailwind CSS Tips",
    description: "Learn useful Tailwind CSS tricks for responsive and modern UI.",
    image: "./article2.png",
    link: "#",
  },
  {
    title: "JavaScript ES6 Features",
    description: "Exploring the most important ES6 features every developer should know.",
    image: "./article3.png",
    link: "#",
  },
  // Add more articles here
];

export default function Articles() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6700] mb-12">
        Articles
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-[#FF6700] scrollbar-track-gray-900">
        {articles.map((article, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[350px] bg-[#1A1A1A] rounded-2xl shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#FF6700]">{article.title}</h3>
              <p className="text-gray-300 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="px-4 py-2 bg-[#FF6700] rounded hover:bg-[#e65c00] transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
