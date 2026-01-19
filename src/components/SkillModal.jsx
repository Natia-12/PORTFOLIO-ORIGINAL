const SkillModal = ({ open, onClose, skill, level, description }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-11/12 max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{skill}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Skill Level:</span>
          <span className="font-bold">{level}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
