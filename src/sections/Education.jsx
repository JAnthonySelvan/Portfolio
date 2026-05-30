import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science Engineering',
    institution: 'Engineering College',
    location: 'India',
    duration: '2022 - Present',
    status: 'Pursuing',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Web Technologies',
      'Cloud Computing',
      'Artificial Intelligence',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle">
            My academic background and learning path
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-8 sm:left-12 top-0 w-0.5 bg-gradient-to-b from-primary to-accent"
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-20 sm:pl-28 pb-12"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: 'spring' }}
                className="absolute left-4 sm:left-8 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg"
              >
                <GraduationCap className="w-4 h-4 text-white" />
              </motion.div>

              {/* Education Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Status Badge */}
                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full mb-4">
                  {edu.status}
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {edu.degree}
                </h3>

                {/* Field */}
                <p className="text-lg text-primary dark:text-primary-dark font-semibold mb-4">
                  {edu.field}
                </p>

                {/* Institution & Duration */}
                <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.institution}, {edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary dark:text-primary-dark" />
                    <h4 className="font-poppins font-semibold text-gray-800 dark:text-gray-200">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: courseIndex * 0.05 }}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Timeline End */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="relative left-4 sm:left-8 w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
