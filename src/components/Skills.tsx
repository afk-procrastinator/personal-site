import React, { useState } from 'react';
import { motion } from 'framer-motion';

type SkillLevel = {
  [key: string]: number;
};

type TechnicalSkillsType = {
  'Technical': SkillLevel;
  'Software': SkillLevel;
  'Soft Skills': SkillLevel;
};

const technicalSkills: TechnicalSkillsType = {
  'Technical': {
    'Python': 85,
    'JavaScript': 70,
    'HTML/CSS': 90,
    'Docker': 60,
    'Bash': 60,
    'Prompt Engineering': 85,
  },
  'Software': {
    'Excel': 90,
    'GIS': 80,
    'Office Suite': 70,
    'Adobe Suite': 85,
  },
  'Soft Skills': {
    'Communication': 90,
    'Event Management': 85,
    'Teamwork': 90,
    'Adaptability': 85,
    'Time Management': 85,
    'Research & Writing': 100,
  }
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof TechnicalSkillsType>('Technical');
  const skills = technicalSkills[selectedCategory];

  return (
    <section className="py-20 bg-ctp-surface0 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ctp-text mb-8 text-center">
          Skills & Expertise
        </h2>
        <div className="max-w-5xl mx-auto flex gap-8">
          <div className="w-2/3">
            <div className="flex gap-4 mb-8">
              {(Object.keys(technicalSkills) as Array<keyof TechnicalSkillsType>).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-ctp-blue text-ctp-base'
                      : 'bg-ctp-base text-ctp-text hover:bg-ctp-blue/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {Object.entries(skills).map(([skill, proficiency], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center mb-2">
                  <span className="text-ctp-text font-medium">
                    {skill}
                  </span>
                </div>
                <div className="h-3 bg-ctp-base rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-ctp-blue"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-1/3">
            <p className="text-ctp-subtext1 leading-relaxed">
              {selectedCategory === 'Technical' && (
                "Proficient in modern development technologies and programming languages, with a focus on Python and web development. Experienced in containerization and automation."
              )}
              {selectedCategory === 'Software' && (
                "Skilled in data analysis tools and professional software suites, with expertise in Excel, GIS systems, and creative applications."
              )}
              {selectedCategory === 'Soft Skills' && (
                "Strong interpersonal and organizational abilities, with proven experience in research, writing, and event management. Excellence in team collaboration and adaptability."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;