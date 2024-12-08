import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 bg-primary-light dark:bg-primary-dark transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-12 text-center">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-light dark:bg-secondary-dark rounded-xl p-6 space-y-6"
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Amherst College</h3>
                <p className="text-text-light/80 dark:text-text-dark/80 mt-1">
                  B.A.: Russian & LIST (Law, Jurisprudence, & Social Thought), magna cum laude (3.9 GPA)
                </p>
                <p className="text-text-light/60 dark:text-text-dark/60 text-sm">
                  Class of 2024
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark">Awards & Honors</h4>
                <ul className="mt-1 space-y-1 text-text-light/80 dark:text-text-dark/80">
                  <li>The Mikhail Schweitzer Memorial Book Award</li>
                  <li>Finalist, Amherst College's Speaking Competition 2023-2024</li>
                  <li>The Bancroft Prize</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-text-light dark:text-text-dark">College Activities</h4>
                <ul className="mt-1 space-y-1 text-text-light/80 dark:text-text-dark/80">
                  <li>Journalist at The Amherst Student</li>
                  <li>Photographer</li>
                  <li>Amateur Archaeologist</li>
                  <li>Translator</li>
                  <li>Head of Amherst College's Russian House</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 