import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `relative px-4 py-2 font-semibold transition-all duration-300
     ${
       isActive
         ? "text-blue-600"
         : "text-gray-700 hover:text-blue-500"
     }`;

  return (
    <nav className="flex justify-center gap-8 p-4 bg-white shadow-md sticky top-0 z-50">
      {["/", "/about", "/projects", "/contact"].map((path, index) => {
        const labels = ["Home", "About", "Projects", "Contact"];
        return (
          <NavLink key={path} to={path} className={linkClass}>
            {({ isActive }) => (
              <>
                {labels[index]}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
