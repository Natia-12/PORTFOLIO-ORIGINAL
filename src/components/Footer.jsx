const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Natinael Assefa | All Rights Reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/Natina-12" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
          <a href="https://upwork.com/freelancer" target="_blank">Upwork</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
