import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const TimelineStep = ({ date, title, description, icon }) => (
  <motion.div 
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true }} 
    transition={{ duration: 0.6 }} 
    className="flex items-start gap-4 mb-6"
  >
    <div className="text-3xl">{icon}</div>
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <span className="text-gray-500 text-sm">{date}</span>
      <p>{description}</p>
    </div>
  </motion.div>
);

export default TimelineStep;
