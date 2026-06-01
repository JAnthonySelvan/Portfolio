import { motion } from "framer-motion";
import { TechIcon } from "../components/TechIcon";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", description: "Component-based UI development" },
      { name: "JavaScript", description: "ES6+, Async/Await, DOM" },
      { name: "HTML5", description: "Semantic markup, Accessibility" },
      { name: "CSS3", description: "Flexbox, Grid, Animations" },
      { name: "Tailwind", description: "Utility-first CSS framework" },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", description: "Server-side JavaScript runtime" },
      { name: "Express", description: "Web application framework" },
      { name: "Spring Boot", description: "Java-based backend framework" },
    ],
  },
  {
    title: "Database",
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "MongoDB Atlas", description: "Cloud database service" },
    ],
  },
  {
    title: "Programming",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Java", description: "Object-oriented programming" },
      { name: "Python", description: "Scripting & Data Science" },
      { name: "JavaScript", description: "Full-stack development" },
    ],
  },
  {
    title: "AI & Cloud",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "AI", description: "Artificial Intelligence concepts" },
      { name: "ML", description: "Machine Learning fundamentals" },
      { name: "Cloud", description: "Cloud Computing architecture" },
    ],
  },
  {
    title: "Tools",
    color: "from-gray-600 to-slate-600",
    skills: [
      { name: "Git", description: "Version control system" },
      { name: "GitHub", description: "Code hosting & collaboration" },
      { name: "VS Code", description: "Code editor" },
      { name: "Postman", description: "API testing tool" },
      { name: "Cloudinary", description: "Media management cloud" },
      { name: "Vercel", description: "Frontend deployment platform" },
      { name: "Netlify", description: "Web hosting & deployment" },
      { name: "Render", description: "Backend hosting platform" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-4`}>
                <h3 className="text-xl font-poppins font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-4 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-default group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm group-hover:shadow-md transition-shadow">
                      <TechIcon name={skill.name} className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
