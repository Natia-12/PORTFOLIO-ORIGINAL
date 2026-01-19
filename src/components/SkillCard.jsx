import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCard = ({ skill, level, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-5 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt={skill}
            className="w-8 h-8 rounded-full bg-gray-100 p-1"
          />
          <h3 className="font-semibold text-lg">{skill}</h3>
        </div>

        <div className="w-12 h-12">
          <CircularProgressbar
            value={level}
            text={`${level}%`}
            styles={buildStyles({
              textSize: "30px",
              pathColor: `rgba(34, 197, 94, ${level / 100})`,
              textColor: "#111827",
              trailColor: "#d1d5db",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
