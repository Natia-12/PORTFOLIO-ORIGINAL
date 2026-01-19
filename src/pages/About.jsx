import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          I am a passionate Frontend Developer with a strong foundation in React, Tailwind CSS, and modern web technologies.
          I build clean, responsive, and user-friendly interfaces and enjoy solving real-world problems through code.
          During my internship experience, I developed several projects including interactive forms, counter apps, landing pages, and full single-page applications.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-bold text-xl mb-3">What I Do</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Build responsive UI using React & Tailwind CSS</li>
              <li>Create interactive components and clean UX</li>
              <li>Work with REST APIs and state management</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-bold text-xl mb-3">My Strengths</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fast learner & hardworking</li>
              <li>Strong problem-solving skills</li>
              <li>Team player and good communication</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={goToProjects}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
