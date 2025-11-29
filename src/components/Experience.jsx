import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const isLastCard = index === experiences.length - 1;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.3, 0.75)}
      className="relative w-full overflow-hidden"
    >
      <div className="flex items-start gap-3 sm:gap-6 mb-10 sm:mb-8 w-full">

        {/* Timeline + Icon */}
        <div className="flex flex-col items-center shrink-0">
          <div
            className="w-10 h-10 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg border border-white/20"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>

          {!isLastCard && (
            <div className="w-1 h-12 sm:h-24 bg-gradient-to-b from-[#915eff] to-transparent mt-2"></div>
          )}
        </div>

        {/* Card */}
        <div className="flex-1 min-w-0">
          <div className="bg-[#1d1836] p-4 sm:p-6 rounded-lg shadow-lg border border-[#232631] relative">

            {/* FIXED ARROW (No negative left value) */}
            <div
              className="absolute -left-1 sm:-left-2 top-5 w-0 h-0"
              style={{
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderRight: "8px solid #1d1836",
              }}
            />

            <h3 className="text-white text-[16px] sm:text-[22px] font-bold">
              {experience.title}
            </h3>

            <p className="text-secondary text-[12px] sm:text-[15px] font-semibold mt-1">
              {experience.company_name}
            </p>

            <p className="text-secondary text-[11px] sm:text-[13px] mt-1 opacity-75">
              {experience.date}
            </p>

            <ul className="mt-4 list-disc ml-4 sm:ml-5 space-y-1.5">
              {experience.points.map((point, i) => (
                <li
                  key={i}
                  className="text-white-100 text-[12px] sm:text-[14px] leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </motion.div>
  );
};



const Experience = () => {
  return (
    <section
      id="work"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
