import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Natinael</span>
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Junior Frontend Developer building modern, responsive, and
  user-friendly web applications.
</p>


          <div className="flex gap-4">
            {/* Email */}
            <a
              href="mailto:nati12rich@gmail.com?subject=Portfolio Contact"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Email Me
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/@Niqod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition"
            >
              Telegram
            </a>
            <a
              href="/Resume.pdf"
              download="Natinael_Assefa_CV.pdf"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Download CV
            </a>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Natinael Assefa"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
