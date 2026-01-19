import { Link } from "react-router-dom";
import TimelineStep from "../components/TimelineStep";

const timeline = [
  {
    id: 1,
    date: "jun 2024",
    title: "Started Web Development",
    description:
      "Learned HTML, CSS, and JavaScript basics and built small web pages.",
    icon: "🌱",
  },
  {
    id: 2,
    date: "Sep 2024",
    title: "First JavaScript Projects",
    description:
      "Built interactive web features using DOM manipulation and ES6 concepts.",
    icon: "💡",
  },
  {
    id: 3,
    date: "Jan 2024",
    title: "Started Learning React",
    description: "Built reusable components, managed state, and learned hooks.",
    icon: "⚛️",
  },
  {
    id: 4,
    date: "Mar 2024",
    title: "Landing Page Project",
    description:
      "Built a responsive landing page with modern UI and animations.",
    icon: "🌐",
  },
  {
    id: 5,
    date: "Nov 2025",
    title: "Bahir Dar Incubation Center Internship",
    description:
      "Gained real-world experience working on startup projects and collaborating with teams.",
    icon: "🏢",
  },
  {
    id: 6,
    date: "Dec 2025",
    title: "Codveda Internship Level 1",
    description:
      "Learned core frontend concepts and built small projects like Counter App, Interactive Form, and SPA.",
    icon: "🚀",
  },
  {
    id: 7,
    date: "Dec 2025",
    title: "Codveda Internship Level 2",
    description:
      "Advanced frontend development with Tailwind CSS, component design, CRUD operations, and complex SPA projects.",
    icon: "⚡",
  },
  
  {
    id: 8,
    date: "Dec 2025",
    title: "Final Year Project: Clearance Management System",
    description:
      "Built a full-stack clearance management system with role-based access and automated workflows.",
    icon: "🏛️",
  },
  {
    id: 9,
    date: "Jan 2026",
    title: "Full-Stack Restaurant System",
    description:
      "Built a complete restaurant management system with authentication, CRUD, dashboard, and analytics.",
    icon: "🍽️",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>

        {/* Render timeline */}
        {timeline.map((t) => (
          <Link to={`/timeline/${t.id}`} key={t.id}>
            <TimelineStep {...t} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default About;
