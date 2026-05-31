import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Check } from 'lucide-react';

const certifications = [
  {
    title: 'NPTEL Cloud Computing',
    issuer: 'NPTEL',
    issuerLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f8/NPTEL_logo.png',
<<<<<<< HEAD
    date: '2025',
    skills: ['Cloud Architecture', 'Virtualization', 'Distributed Systems', 'Cloud Services'],
    credentialUrl: 'https://drive.google.com/file/d/157J0e32KvOEV0omMK1FJrvoZB-NduBQz/view?usp=drive_link',
=======
    date: '2024',
    skills: ['Cloud Architecture', 'Virtualization', 'Distributed Systems', 'Cloud Services'],
    credentialUrl: '#',
>>>>>>> d68a3c6d1db98bbf85c767cf5b62e90af0ce126e
    description: 'Comprehensive course covering cloud computing fundamentals, architecture patterns, and deployment strategies across major cloud platforms.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating my expertise
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Badge */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0 p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"
                >
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Award className="w-14 h-14 text-white" />
                  </div>
                </motion.div>

                {/* Right Side - Details */}
                <div className="flex-grow p-6 lg:p-8">
                  {/* Title & Issuer */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-primary dark:text-primary-dark font-semibold">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: {cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Skills Learned
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary dark:bg-primary-dark text-white rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    View Certificate
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
