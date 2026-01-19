import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern portfolio showcasing my skills, projects, and journey using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    icon: "🌟",
    liveLink: "https://your-portfolio-link.vercel.app",
    githubLink: "https://github.com/Natia-12/Your-Portfolio-Repo",
  },
  {
    title: "Full-Stack Restaurant Management System",
    description: "A complete restaurant system with authentication, dashboard, orders, and CRUD using React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    icon: "🍽️",
    liveLink: "https://restaurant-system-link.vercel.app",
    githubLink: "https://github.com/Natia-12/Restaurant-System",
  },
  {
    title: "NADAN Initiatives (Final Year Project)",
    description: "A web app for managing community initiatives, built with React frontend and Node.js backend.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "🏆",
    liveLink: "https://nadan-initiatives.vercel.app",
    githubLink: "https://github.com/Natia-12/Nadan-Initiatives",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
