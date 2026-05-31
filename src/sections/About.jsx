import { motion } from 'framer-motion';
import { Code, Cloud, Brain, Users, BookOpen, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack MERN Developer',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Cloud,
    title: 'NPTEL Cloud Computing Certified',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Rocket,
    title: 'Problem Solver',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Team Player',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I am a Computer Science Engineering student and passionate MERN Stack Developer with expertise in building scalable, responsive, and user-centric web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              My technical skills include <span className="text-primary dark:text-primary-dark font-semibold">MongoDB, Express.js, React.js, Node.js, JavaScript, Python, Java, Artificial Intelligence, Machine Learning, and Cloud Computing.</span>
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I enjoy transforming innovative ideas into impactful digital products and continuously learning emerging technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I have successfully developed <span className="text-primary dark:text-primary-dark font-semibold">JobJunction</span>, a production-ready MERN Stack job portal that connects job seekers, recruiters, and administrators through a modern recruitment platform.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
