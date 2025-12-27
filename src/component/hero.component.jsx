import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import { useEffect, useState } from "react";

function HeroSection() {
  const roles = ["Web Developer", "Creative Thinker", "Tech Explorer", "Lifelong Learner"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-6 md:px-12 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#1a1a1a]">
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#FF6700]/10 blur-3xl rounded-full top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-start flex-1"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#FF6700] text-lg md:text-xl font-mono tracking-wide"
        >
          &lt;root@abhishek/&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl text-white font-bold mt-3"
        >
          Hello<span className="text-[#FF6700]">.</span> <br />
          I'm Abhishek Yadav
        </motion.h1>

        <motion.h2
          key={roles[currentRole]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-4 font-light"
        >
          {roles[currentRole]}
        </motion.h2>

        <p className="text-gray-400 mt-4 max-w-md text-base md:text-lg">
          Turning caffeine and curiosity into clean, functional code.
        </p>

        <div className="flex flex-row gap-4 mt-8">
          <motion.a
            href="mailto:abhishekyadavcode@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 p-3.5 bg-[#FF6700] text-[#FFFFFF] hover:bg-[#1A1A1A] border border-[#FF6700] rounded transition duration-300"
          >
            <HiOutlineMail className="text-xl" />
            Got a Project
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 p-3.5 border-2 border-[#FF6700] text-[#FFFFFF] hover:bg-[#FF6700] rounded transition duration-300"
          >
            <HiOutlineDocumentText className="text-xl" />
            My Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ rotateY: 10, rotateX: 5 }}
        className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                   border-4 border-[#FF6700] rounded-2xl bg-cover bg-center shadow-[0_0_30px_#FF670033]
                   transition-transform duration-300 hover:shadow-[0_0_50px_#FF670099]"
        style={{ backgroundImage: "url('/image.png')" }}
      ></motion.div>
    </section>
  );
}

export default HeroSection