import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Check,
  Layers,
  Server,
  Database,
  Cloud,
  Shield,
  Moon,
  Smartphone,
  Users,
  Settings,
  Palette,
  Bell,
} from "lucide-react";
import { TechIcon } from "../components/TechIcon";
import screenshotDark from "../assets/Screenshot-dark.png";
import screenshotLight from "../assets/Screenshot-light.png";
import { useTheme } from "../context/ThemeContext";

const techStack = [
  "React",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "Cloudinary",
  "Tailwind",
];

const features = [
  { icon: Shield, text: "JWT Authentication", color: "text-blue-500" },
  { icon: Users, text: "Role-Based Access Control", color: "text-green-500" },
  {
    icon: Cloud,
    text: "Resume Upload using Cloudinary",
    color: "text-purple-500",
  },
  { icon: Layers, text: "Interview Scheduling", color: "text-orange-500" },
  { icon: Bell, text: "Email Notifications", color: "text-pink-500" },
  { icon: Moon, text: "Dark Mode", color: "text-indigo-500" },
  { icon: Smartphone, text: "Responsive Design", color: "text-cyan-500" },
  { icon: Settings, text: "Admin Dashboard", color: "text-red-500" },
  { icon: Palette, text: "Recruiter Dashboard", color: "text-amber-500" },
];

const architectureLayers = [
  { label: "Frontend", tech: "React + Redux + Tailwind CSS", icon: Layers },
  { label: "Backend", tech: "Node.js + Express.js", icon: Server },
  { label: "Database", tech: "MongoDB + MongoDB Atlas", icon: Database },
  { label: "Services", tech: "Cloudinary + Brevo Email", icon: Cloud },
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="section-subtitle">
            A production-ready application built with modern technologies
          </p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          {/* Project Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-3">
                  Featured Project
                </span>
                <h3 className="text-3xl sm:text-4xl font-poppins font-bold text-white">
                  JobJunction
                </h3>
                <p className="text-white/80 mt-2 text-lg">
                  MERN Stack Job Portal
                </p>
              </div>
              <div className="flex gap-3">
                <motion.a
                  href="https://job-junction-lime.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
                <motion.a
                  href="https://github.com/JAnthonySelvan/MERN-JOB_PORTAL"
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 sm:p-8">
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                A production-ready job portal developed using the MERN Stack
                that streamlines recruitment by connecting job seekers,
                recruiters, and administrators through a modern recruitment
                platform.
              </p>
            </div>

            {/* Screenshot/Preview Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img
                src={theme === "dark" ? screenshotDark : screenshotLight}
                alt="Project Preview"
                className="w-full rounded-xl shadow-lg border border-gray-300 dark:border-gray-700"
              />
            </motion.div>

            {/* Technology Stack */}
            <div className="mb-8">
              <h4 className="text-lg font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <TechIcon name={tech} className="w-5 h-5" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features & Architecture Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="text-lg font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 p-2"
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center`}
                      >
                        <Check className={`w-4 h-4 ${feature.color}`} />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="text-lg font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Architecture
                </h4>
                <div className="space-y-3">
                  {architectureLayers.map((layer, index) => (
                    <motion.div
                      key={layer.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center">
                        <layer.icon className="w-5 h-5 text-primary dark:text-primary-dark" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                          {layer.label}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {layer.tech}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deployment Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700/50 dark:to-slate-700 rounded-2xl">
              <h4 className="text-lg font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Deployment
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                    <TechIcon name="Vercel" className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Frontend
                    </p>
                    <a
                      href="https://job-junction-lime.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary dark:text-primary-dark hover:underline"
                    >
                      job-junction-lime.vercel.app
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                    <TechIcon name="Render" className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      Backend API
                    </p>
                    <a
                      href="https://mern-job-portal-m2pc.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary dark:text-primary-dark hover:underline"
                    >
                      mern-job-portal-m2pc.onrender.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
