import { useState } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [devData, setDevData] = useState({
    linkedin: "",
    github: "",
    discord: "",
  });
  const [isDeveloper, setIsDeveloper] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleDevChange = (e) => setDevData({ ...devData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const handleDevSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 3000); // animation duration
    setDevData({ linkedin: "", github: "", discord: "" });
  };

  return (
    <section className="bg-[#0B0E1A] text-white py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">

        {/* LEFT INFO SECTION */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[#FF6700] mb-6">
            Let's Build Something Meaningful 🚀
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a <span className="text-[#FF6700] font-semibold"> student & freelancer </span> 
            who believes in learning through real projects. Whether it's a hackathon, 
            a creative collaboration, or freelance work — let's connect and grow together.
          </p>
          <p className="italic text-gray-400 text-lg">
            “Every great project starts with a small message.”
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#FF6700] mb-4">Find Me On</h3>
            <div className="flex flex-col gap-4 text-xl">
              <a href="www.linkedin.com/in/abhishek-yadav-rootabhi" target="_blank" className="flex items-center gap-3 hover:text-[#0a66c2] transition duration-300">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/theabhi-labs" target="_blank" className="flex items-center gap-3 hover:text-[#FF6700] transition duration-300">
                <FaGithub /> GitHub
              </a>
              <a href="https://discord.com/users/anuragabhi" target="_blank" className="flex items-center gap-3 hover:text-[#7289da] transition duration-300">
                <FaDiscord /> Discord
              </a>
              <a href="mailto:abhishekyadavcode@gmail.com" className="flex items-center gap-3 hover:text-[#ea4335] transition duration-300">
                <FaEnvelope /> Gmail
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#FF6700] mb-8">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-[#101426] p-8 rounded-2xl shadow-lg flex flex-col gap-6 border border-[#FF6700]/20"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 p-4 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-[#FF6700] transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="flex-1 p-4 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-[#FF6700] transition"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-[#FF6700] transition"
              required
            ></textarea>

            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                checked={isDeveloper}
                onChange={() => {
                  setIsDeveloper(!isDeveloper);
                  if (!isDeveloper) setShowModal(true);
                }}
                className="w-5 h-5 accent-[#FF6700] cursor-pointer"
              />
              <label className="text-gray-300 cursor-pointer text-lg">
                Are you a Developer?
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`self-start mt-4 px-6 py-3 rounded text-white font-semibold transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FF6700] hover:bg-[#e65c00]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Developer Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl w-[90%] md:w-[450px] shadow-lg border border-[#FF6700]/30"
            >
              <h3 className="text-2xl font-bold text-[#FF6700] mb-4 text-center">
                Developer Connect
              </h3>
              <form onSubmit={handleDevSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="linkedin"
                  value={devData.linkedin}
                  onChange={handleDevChange}
                  placeholder="LinkedIn URL or Username"
                  className="w-full p-3 rounded bg-[#0d0d0d] border border-gray-700 focus:border-[#FF6700] text-white"
                  required
                />
                <input
                  type="text"
                  name="github"
                  value={devData.github}
                  onChange={handleDevChange}
                  placeholder="GitHub URL or Username"
                  className="w-full p-3 rounded bg-[#0d0d0d] border border-gray-700 focus:border-[#FF6700] text-white"
                  required
                />
                <input
                  type="text"
                  name="discord"
                  value={devData.discord}
                  onChange={handleDevChange}
                  placeholder="Discord ID or Username"
                  className="w-full p-3 rounded bg-[#0d0d0d] border border-gray-700 focus:border-[#FF6700] text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF6700] hover:bg-[#e65c00] text-white py-3 rounded font-semibold transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mt-2 w-full text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connection Animation */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
          >
            <motion.div
              className="flex gap-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-4 h-4 bg-[#FF6700] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <motion.div
                className="w-4 h-4 bg-[#FF6700] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
              />
              <motion.div
                className="w-4 h-4 bg-[#FF6700] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-[#FF6700] font-semibold"
            >
              Connecting developers... ⚡
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-white mt-4 text-lg"
            >
              Thanks for connecting! 🚀
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

