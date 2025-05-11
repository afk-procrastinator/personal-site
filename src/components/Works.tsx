import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface Work {
  title: string;
  type: string;
  description: string;
  image: string;
  pdfLink: string;
}

const works: Work[] = [
  {
    title: "Squaring the Circle",
    type: "Senior Honors Thesis",
    description: "Examining AI alignment through Hobbes' political philosophy.",
    image: "/ai-thesis.jpg",
    pdfLink: "/Thesis.pdf"
  },
  {
    title: "Constructing an Icon",
    type: "Conference Paper",
    description: "Analyzing Moscow's Dom Narkomfin as a lens for understanding Russia's relationship with architecture.",
    image: "/narkomfin.jpg",
    pdfLink: "/ConstructingIcon.pdf"
  },
  {
    title: "Five Objectives to Guide U.S. AI Diffusion",
    type: "Reply to Request for Comment",
    description: "Comments on the Framework for AI Diffusion",
    image: "/diffusion.jpeg",
    pdfLink: "https://www.cnas.org/publications/commentary/five-objectives-to-guide-u-s-ai-diffusion"
  }
];

const Works: React.FC = () => {
  return (
    <section className="py-20 bg-ctp-base transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ctp-text mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-ctp-surface0 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ctp-surface1">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-ctp-subtext0 text-sm font-medium mb-2">
                  {work.type}
                </div>
                <h3 className="text-xl font-semibold text-ctp-text mb-3">
                  {work.title}
                </h3>
                <p className="text-ctp-subtext1 mb-4 line-clamp-3">
                  {work.description}
                </p>
                <a
                  href={work.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-ctp-mauve/10 hover:bg-ctp-mauve/20 text-ctp-mauve transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;