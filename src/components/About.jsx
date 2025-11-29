import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      glareEnable={true}
      glareBorderRadius="20px"
      className="w-[150px] h-48 sm:w-[180px] sm:h-52 md:w-[220px] md:h-60"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] p-[2px] rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#111111] rounded-2xl py-6 px-5 w-full h-full flex justify-center items-center flex-col border border-gray-800 hover:border-purple-500 transition"
        >
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-3"
          />
          <h3 className="text-white text-[15px] sm:text-[16px] md:text-lg font-semibold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>

      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-purple-400`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Overview.
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-gray-300 text-[15px] sm:text-[17px] leading-7 max-w-3xl text-center mx-auto"
      >
        I’m a Software Engineer with 1+ years of experience specializing in React.js and modern JavaScript. I build responsive, scalable, and user-friendly web applications using React.js, Next.js, and Vite. I also have basic experience with Node.js and Express.js, enabling me to work across both frontend and backend tasks. I enjoy creating clean, efficient, and practical solutions that solve real-world problems.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(About, "about");
