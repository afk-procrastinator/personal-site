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
  Globe 
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
    year: "2024 - 2025",
    role: "Joseph S. Nye Jr. Intern",
    company: "Center for a New American Security",
    location: "Washington, D.C.",
    description: (
      <>
        Conducted research on U.S. foreign policy and international security issues at{' '}
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
  },
  {
    year: "2023 — 2024",
    role: "Board Member",
    company: "AI in Liberal Arts Initiative",
    location: "Amherst, MA",
    description: "Led an initiative promoting discussion, awareness, and engagement in the role of AI in liberal arts education. Advised faculty members on campus-wide guidelines, regulations, and approaches to AI in the classroom.",
    icon: GraduationCap
  },
  {
    year: "Summer 2022",
    role: "Schupf Fellow",
    company: "Amherst College Schupf Fellowship Program",
    location: "Amherst, MA",
    description: "Independently researched and produced weekly reports on topics in international relations and politics; warfare development; and international humanitarian law. Located primary sources both online and in archives to support arguments and analyses.",
    icon: BookOpen
  },
  {
    year: "2022 - 2024",
    role: "Research Assistant",
    company: "Amherst College Russian Center",
    location: "Amherst, MA",
    description: (
      <>
        Conducted research at the{' '}
        <a 
          href="https://www.amherst.edu/academiclife/departments/russian/acrc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
        >
          Center for Russian Culture
        </a>
        {' '}on Russian literature and cultural history, focusing on the intersection of technology and society in Soviet and post-Soviet contexts. Analyzed primary sources and contributed to academic publications.
      </>
    ),
    icon: BookOpen
  },
  {
    year: "Summer 2021",
    role: "Intern",
    company: "The Moscow Times",
    location: "Moscow, Russia",
    description: (
      <>
        Provided editorial assistance at{' '}
        <a 
          href="https://www.themoscowtimes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:text-ctp-sapphire transition-colors"
        >
          The Moscow Times
        </a>
        , designed newsletters, edited podcasts, and wrote articles. Monitored breaking news of incidents, events, and topics of interest to quickly create engaging content for an international audience.
      </>
    ),
    icon: Newspaper
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
    category: "Projects",
    items: [
      {
        title: "Independent Research",
        role: "Lead Researcher",
        period: "2023",
        description: "Conducted independent research on AI governance frameworks and their implications for democratic institutions."
      },
      {
        title: "Photography Portfolio",
        role: "Photographer",
        period: "2021 — Present",
        description: "Documented cultural events and architectural landmarks across Russia and Eastern Europe."
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
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-ctp-surface0 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ctp-text mb-12 text-center">
          Professional Journey
        </h2>
        <div className="relative">
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
                  className="relative mb-16"
                >
                  <div className={`flex items-center justify-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-[calc(50%-4rem)] px-4">
                      <div className="bg-ctp-base p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
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

        {/* Additional Activities */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-ctp-text mb-12 text-center">
            Additional Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalActivities.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                <h4 className="text-xl font-semibold text-ctp-blue mb-6 text-center">
                  {section.category}
                </h4>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 + sectionIndex * 0.2 }}
                      className="bg-ctp-base p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <div className="flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="text-lg font-semibold text-ctp-text">
                            {item.title}
                          </h5>
                          <span className="text-sm text-ctp-subtext0 whitespace-nowrap ml-2">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-ctp-mauve text-sm mb-2">
                          {item.role}
                        </p>
                        <p className="text-ctp-subtext1 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;