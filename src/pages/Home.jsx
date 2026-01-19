import { useState } from "react";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import SkillModal from "../components/SkillModal";

import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import reactIcon from "../assets/skills/react.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import nodeIcon from "../assets/skills/node.png";
import mongodbIcon from "../assets/skills/mongodb.png";
import jsIcon from "../assets/skills/js.png";

const skills = [
      {
      skill: "HTML5",
      level: 80,
      icon: htmlIcon,
      description: "Semantic HTML5, accessibility best practices, and clean document structure.",
    },
    {
      skill: "CSS3",
      level: 75,
      icon: cssIcon,
      description: "Modern CSS including Flexbox, Grid, responsive layouts, and animations.",
    },
    {
    skill: "JS",
    level: 60,
    icon: jsIcon,
    description: "Strong core JavaScript skills including ES6+, async/await, and DOM.",
  },

  {
    skill: "React",
    level: 85,
    icon: reactIcon,
    description: "Building modern UI using React, hooks, and component architecture.",
  },
  {
    skill: "Tailwind CSS",
    level: 60,
    icon: tailwindIcon,
    description: "Creating responsive and modern UI with Tailwind utility classes.",
  },
  {
    skill: "Node.js",
    level: 60,
    icon: nodeIcon,
    description: "Building REST APIs using Node.js and Express.",
  },
   
  {
    skill: "Mongo",
    level: 50,
    icon: mongodbIcon,
    description: "Database design and CRUD operations using MongoDB.",
  },
 
];

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="home">
      <Hero />

      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((s) => (
            <SkillCard
              key={s.skill}
              {...s}
              onClick={() => handleSkillClick(s)}
            />
          ))}
        </div>
      </section>

     
      {selectedSkill && (
        <SkillModal
          open={true}
          onClose={closeModal}
          {...selectedSkill}
        />
      )}
    </section>
  );
};

export default Home;
