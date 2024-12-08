import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, Lightbulb, Shield, Search } from 'lucide-react';

const areasOfExpertise = [
  {
    title: 'AI Policy & Ethics',
    description: 'Analyzing governance frameworks and ethical implications of artificial intelligence systems, with focus on alignment and regulatory challenges.',
    icon: Brain
  },
  {
    title: 'Political Philosophy',
    description: 'Exploring the intersection of technology and political theory, particularly through the lens of classical philosophers and modern governance.',
    icon: Book
  },
  {
    title: 'Technology Strategy',
    description: 'Developing strategic approaches to emerging technologies, focusing on innovation policy and technological competition between nations.',
    icon: Lightbulb
  },
  {
    title: 'National Security',
    description: 'Analyzing defense innovation and critical technologies in the context of great power competition and national security strategy.',
    icon: Shield
  },
  {
    title: 'Research & Analysis',
    description: 'Conducting in-depth research on complex policy issues, utilizing both qualitative and quantitative methodologies.',
    icon: Search
  }
];

const Expertise = () => {
  return (
    <section className="py-20 bg-ctp-base transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ctp-text mb-4">
              Areas of Expertise
            </h2>
            <p className="text-ctp-subtext1 max-w-2xl mx-auto">
              Bridging technology and policy through interdisciplinary expertise, 
              focused on the intersection of artificial intelligence, governance, 
              and political theory to address emerging challenges in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExpertise.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-ctp-surface0 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-ctp-blue/10 group-hover:bg-ctp-blue/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-ctp-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-ctp-text">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-ctp-subtext1 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;