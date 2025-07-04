import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Users, 
  Newspaper, 
  Globe,
  Calendar,
  FileText,
  Atom
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Experience {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string | JSX.Element;
  icon?: LucideIcon;
}

const experiences: Experience[] = [
  {
    year: "2025 - Present",
    role: "Contract Research Assistant",
    company: "Center for a New American Security",
    location: "Washington, D.C.",
    description: (
      <>
        Developing a report on pro-innovation policies in the U.S. to enable government preparedness and response to emerging AI national security risks.  
      </>
    ),
    icon: Atom
  },
  {
    year: "2025",
    role: "Analyst Intern",
    company: "Obviant",
    location: "Alexandria, VA",
    description: (
      <>
        Write data-driven content analyzing defense acquisition trends and program office innovations for{' '}
        <a 
          href="https://www.obviant.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
        >
        Obviant
        </a>
        , leveraging their platform and data to produce compelling narratives for the defense technology community.
      </>
    ),
    icon: FileText
  },
  {
    year: "2024 - Present",
    role: "Joseph S. Nye Jr. Intern",
    company: "Center for a New American Security",
    location: "Washington, D.C.",
    description: (
      <>
        Conducting research on U.S. foreign policy and international security issues at{' '}
        <a 
          href="https://www.cnas.org/next-generation-programs/internships"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
        >
          CNAS
        </a>
        , contributing to policy recommendations and analysis.
      </>
    ),
    icon: Globe
  },
  {
    year: "2024",
    role: "Program Associate",
    company: "HFX",
    location: "Washington, D.C.",
    description: (
      <>
        Managed communications and logistics for the{' '}
        <a 
          href="https://halifaxtheforum.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
        >
          Halifax International Security Forum
        </a>
        , coordinating with over 300 high-level participants including ministers, military officials, and thought leaders from 70+ countries.
      </>
    ),
    icon: Users
  },
  {
    year: "2023 — 2024",
    role: "Thesis Research",
    company: "Amherst College LIST Department",
    location: "Amherst, MA",
    description: "Analyzed the alignment and regulatory challenges posed by artificial intelligence and corporations through the lens of Thomas Hobbes' political philosophy, drawing parallels between AI, corporate personhood, and Hobbes' conception of the 'artificial person' of the state.",
    icon: BookOpen
  },
  {
    year: "Summer 2023",
    role: "Research Assistant",
    company: "Hamilton Commission at Hudson Institute",
    location: "Washington, D.C.",
    description: (
      <>
        Assisted former Deputy National Security Advisor and Senior Scholar at the{' '}
        <a 
          href="https://www.hudson.org/policy-centers/hamilton-commission-securing-americas-national-security-innovation-base"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
        >
          Hamilton Commission
        </a>
        {' '}to build policy recommendations in critical economic sectors for national security and defense innovation. Focused on U.S. – China competition in natural gas, AI, and next-generation weaponry.
      </>
    ),
    icon: Building2
  }
];

const additionalActivities = [
  {
    category: "Volunteering",
    items: [
      {
        title: "Amherst College Russian House",
        role: "Head of House",
        period: "2023 — 2024",
        description: "Led cultural events and language practice sessions, fostering a vibrant community for Russian language learners."
      },
      {
        title: "Amherst Student",
        role: "Journalist",
        period: "2022 — 2024",
        description: "Covered campus events and wrote opinion pieces on technology policy and international relations."
      }
    ]
  },
  {
    category: "Freelance",
    items: [
      {
        title: "Independent Research",
        role: "Freelance Researcher",
        period: "Ongoing",
        description: "Conduct freelance research on topics in international relations, security, and technology for clients in the public and private sectors."
      },
      {
          title: "Freelance Translator",
          role: "Translator",
          period: "2020 - 2023",
          description: (
            <>
              Translated Russian news articles and reports for the{' '}
              <a 
                href="https://bearr.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
              >
                BEARR Trust
              </a>
              , a UK-based think tank focusing on Russian and Eurasian affairs.
            </>
          )
        }
    ]   
  },
  {
    category: "Awards",
    items: [
      {
        title: "The Mikhail Schweitzer Memorial Book Award",
        role: "Recipient",
        period: "2024",
        description: "An award of books to a student who (like me) loves Russian literature and culture."
      },
      {
        title: "The Bancroft Prize",
        role: "Winner",
        period: "2024",
        description: (
          <>
            I won Amherst College's 2024 Public Speaking Competition with a speech on the dangers of AI and disinformation. Watch it{' '}
            <a 
              href="https://www.youtube.com/watch?v=5zo8vb3XSKk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
            >
              here
            </a>
            .
          </>
        )
      } 
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-ctp-surface0 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ctp-text mb-6 text-center">
          Professional Journey
        </h2>

        {/* Desktop Timeline (hidden on small screens) */}
        <div className="relative hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-ctp-surface1" />
          
          {/* Timeline entries */}
          <div className="relative">
            {experiences.map((exp, index) => {
              const Icon = exp.icon || Briefcase;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-2"
                >
                  <div className={`flex items-center justify-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-[calc(50%-4rem)] px-4">
                      <div className="bg-ctp-base p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="text-ctp-blue" size={20} />
                          <h3 className="text-xl font-semibold text-ctp-text">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="text-ctp-blue" size={16} />
                          <p className="text-ctp-subtext0 text-sm">
                            {exp.location}
                          </p>
                        </div>
                        <p className="text-ctp-mauve font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-ctp-subtext1 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-40 flex items-center justify-center">
                      <div className="w-36 h-12 bg-ctp-blue rounded-full flex items-center justify-center shadow-lg z-10">
                        <span className="text-ctp-base text-base font-medium px-4">
                          {exp.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-[calc(50%-4rem)] px-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (shown only on small screens) */}
        <div className="md:hidden">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-ctp-surface1" />
              
              {/* Timeline entries */}
              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon || Briefcase;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative mb-8"
                    >
                      <div className="flex gap-4">
                        {/* Year badge */}
                        <div className="flex items-center w-16 justify-center shrink-0">
                          <div className="flex items-center gap-2 text-ctp-blue flex-col">
                            <Calendar className="w-5 h-5" />
                            <span className="text-sm font-medium whitespace-nowrap">{exp.year}</span>
                          </div>
                        </div>

                        {/* Content card */}
                        <div className="flex-1 bg-ctp-base p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className="text-ctp-blue shrink-0" size={20} />
                            <h3 className="text-lg font-semibold text-ctp-text">
                              {exp.role}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="text-ctp-blue shrink-0" size={16} />
                            <p className="text-ctp-subtext0 text-sm">
                              {exp.location}
                            </p>
                          </div>
                          <p className="text-ctp-mauve font-medium mb-3">
                            {exp.company}
                          </p>
                          <p className="text-ctp-subtext1 leading-relaxed text-sm">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;