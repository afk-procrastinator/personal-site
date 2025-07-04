import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, Shield, Search, Flag, Cpu, Binary} from 'lucide-react';

const areasOfExpertise = [
  {
    title: 'National Security',
    description: 'Military and national security have powered technical development throughout history. I explore the intersection of technology and national security.',
    icon: Shield
  },
  {
    title: 'Compute Governance',
    description: 'Compute is the backbone of the AI revolution. How we regulate, export, and use it will be a key determinant of the U.S.\' AI advantage.',
    icon: Cpu
  },
  {
    title: 'AI Policy',
    description: 'The emerging challenges of AI policy are complex and require a multi-disciplinary approach. I explore the intersection of technology and policy.',
    icon: Brain
  },
  {
    title: 'Political Philosophy',
    description: 'I love philosophy. I explore the intersection of technology and political theory, particularly through the lens of classical philosophers and modern governance.',
    icon: Book
  },
  {
    title: 'Computer Science',
    description: 'I believe in understanding and using the technologies I\'m developing policy for. I love learning and building new things.',
    icon: Binary
  }, 
  {
    title: 'Russian Studies',
    description: 'I have a deep understanding of the Russian political and cultural landscape — both from my upbringing and my research.',
    icon: Flag
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