import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const webinars = [
  {
    id: 1,
    title: "We Assess Health Technologies",
    author: [
      "Dr. Vivekanandan Perumal (Professor, IIT-DELHI)",
      "Dr. Kavitha Rajsekar (Scientist-F, DHR)",
    ],
    date: "21 April 2025",
    location: "IIT Delhi",
    images: ["/iitimage.png", "/iitgroup.png", "/certificate.png"],
    shortDesc: "Exploring the future of health technology assessment.",
    fullDesc:
      "🚀 Attending HTAIn Workshop in IIT Delhi 🎓 I had the incredible opportunity to attend HTAIn Workshop, hosted by FITT IIT Delhi, on 21st April 2025. The event's focus on Research and Innovation was truly inspiring and aligned with the vision for a better global future. I was thrilled to witness innovative ideas during the 'Pitch the Ideas' segment and take part in insightful workshops. The Workshop provided an amazing platform for networking and collaboration. A huge thanks to FITT IIT Delhi for hosting such a stellar event and giving me the chance to connect with brilliant minds shaping the future of health technology! 💡🌍",
  },
];

export default function Webinars() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🔹 Auto image scroll every 3 seconds
  useEffect(() => {
    if (!selectedWebinar) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % (selectedWebinar?.images?.length || 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedWebinar]);

  return (
    <div className="min-h-screen py-10 px-6 bg-[#0b0f1a]">
      <h2 className="text-3xl font-bold text-center text-[#0077ff] mb-10">
        Featured Webinars
      </h2>

      {/* 🔹 Webinar Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {webinars.map((webinar) => (
          <motion.div
            key={webinar.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-[#1e293b]/50 bg-[#111827]/70 backdrop-blur-md group"
          >
            {/* Image Section */}
            <div className="relative h-52 w-full">
              <img
                src={webinar.images[0]}
                alt={webinar.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-lg font-semibold">{webinar.title}</h3>
                <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                  {webinar.shortDesc}
                </p>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div className="text-gray-400 text-xs flex flex-col gap-1 mb-3">
                <div className="flex flex-col gap-1">
                  {webinar.author.map((name, index) => (
                    <span key={index} className="flex items-center gap-1">
                      <FaUser className="text-[#FF6700]" /> {name}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-[#FF6700]" /> {webinar.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-[#FF6700]" />{" "}
                  {webinar.location}
                </span>
              </div>

              {/* Read More Button */}
              <button
                onClick={() => {
                  setSelectedWebinar(webinar);
                  setCurrentImageIndex(0);
                }}
                className="mt-auto w-full py-2 border border-[#FF6700] text-[#FF6700] rounded-lg text-sm font-medium bg-transparent hover:bg-[#FF6700] hover:text-white hover:shadow-[0_0_20px_rgba(255,103,0,0.5)] transition-all duration-300 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Modal with Auto-Sliding Images */}
      <AnimatePresence>
        {selectedWebinar && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6 overflow-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f172a] rounded-2xl max-w-3xl w-full shadow-xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWebinar(null)}
                className="absolute top-4 right-4 text-[#FF6700] text-3xl font-bold hover:text-[#e85f00] z-50"
              >
                &times;
              </button>

              {/* Image Carousel */}
              <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
                {selectedWebinar.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={selectedWebinar.title}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: i === currentImageIndex ? 1 : 0,
                      scale: i === currentImageIndex ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0077ff] mb-2">
                  {selectedWebinar.title}
                </h2>

                <div className="text-gray-400 text-sm flex flex-col gap-1 mb-4">
                  <div className="flex flex-col gap-1">
                    {selectedWebinar.author.map((name, index) => (
                      <span key={index} className="flex items-center gap-2">
                        <FaUser className="text-[#FF6700]" /> {name}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FF6700]" />{" "}
                    {selectedWebinar.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#FF6700]" />{" "}
                    {selectedWebinar.location}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedWebinar.fullDesc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


