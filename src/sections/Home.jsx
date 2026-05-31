import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink, View } from "lucide-react";
import { TechIcon } from "../components/TechIcon";

const floatingIcons = [
  { name: "React", delay: 0, x: -120, y: -80 },
  { name: "Node.js", delay: 0.5, x: 140, y: -60 },
  { name: "MongoDB", delay: 1, x: -100, y: 80 },
  { name: "JavaScript", delay: 1.5, x: 120, y: 100 },
];

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 dark:bg-primary-dark/20 rounded-full"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -20, 20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 dark:bg-primary-dark/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="text-accent font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-gradient">ANTHONYSELVAN J</span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              MERN Stack Developer | Building Scalable Web Applications and
              AI-Driven Solutions
            </motion.h2>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science Engineering Student passionate about building
              modern full-stack applications, cloud-powered systems, and
              intelligent software solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={handleScrollToProjects}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                View Projects
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1U5hnzrKu1prPly4noMqE4jVFJYTByHeS/view?usp=sharing"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <View size={22} />
                View Resume
              </motion.a>

              <motion.button
                onClick={handleScrollToContact}
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Circle */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Gradient Circle Background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-10 blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="absolute inset-4 rounded-full glass-card flex items-center justify-center overflow-hidden"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Developer Illustration */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-3/4 h-3/4 text-primary dark:text-primary-dark"
                    fill="currentColor"
                  >
                    {/* Simple Developer Icon */}
                    <circle
                      cx="100"
                      cy="50"
                      r="30"
                      fill="currentColor"
                      opacity="0.8"
                    />
                    <rect
                      x="60"
                      y="85"
                      width="80"
                      height="60"
                      rx="10"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <rect
                      x="40"
                      y="150"
                      width="120"
                      height="8"
                      rx="4"
                      fill="currentColor"
                      opacity="0.4"
                    />
                    {/* Laptop */}
                    <rect
                      x="70"
                      y="100"
                      width="60"
                      height="40"
                      rx="5"
                      fill="white"
                      opacity="0.9"
                    />
                    <rect
                      x="75"
                      y="105"
                      width="50"
                      height="30"
                      rx="3"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    {/* Code Lines */}
                    <rect
                      x="80"
                      y="110"
                      width="30"
                      height="3"
                      rx="1"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <rect
                      x="80"
                      y="117"
                      width="40"
                      height="3"
                      rx="1"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <rect
                      x="80"
                      y="124"
                      width="25"
                      height="3"
                      rx="1"
                      fill="currentColor"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {floatingIcons.map((icon) => (
                <motion.div
                  key={icon.name}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  initial={{ x: icon.x, y: icon.y, opacity: 0 }}
                  animate={{
                    x: icon.x,
                    y: icon.y,
                    opacity: 1,
                  }}
                  transition={{ delay: icon.delay, duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: icon.delay,
                    }}
                    className="p-3 glass-card rounded-xl shadow-lg"
                  >
                    <TechIcon name={icon.name} className="w-10 h-10" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 cursor-pointer"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ArrowDown className="w-6 h-6 text-primary dark:text-primary-dark" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
