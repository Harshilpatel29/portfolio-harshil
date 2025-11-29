import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        glareEnable={true}
        glareBorderRadius="20px"
        className="bg-tertiary p-4 rounded-2xl w-full sm:w-[280px] md:w-[300px] hover:shadow-xl transition-all"
      >
        <div className="relative w-full h-[170px] sm:h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 sm:w-9 sm:h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[12px] sm:text-[13px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[11px] sm:text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] text-center max-w-3xl mx-auto px-4"
      >
        These projects highlight my ability to design and develop scalable, responsive, and user-focused applications. Each project includes source code and demonstrates my practical software engineering approach.
      </motion.p>

      <div className="mt-14 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 gap-y-10 sm:gap-y-12 px-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
