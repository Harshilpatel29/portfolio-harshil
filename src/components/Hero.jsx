import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] opacity-90 -z-10" />

      {/* Content */}
      <div
        className={`${styles.paddingX} absolute top-[100px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-4 sm:gap-6 z-10`}
      >
        {/* Left Indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm{" "}
            <span className="text-[#915eff]">Harshil</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-[90%] sm:max-w-[500px]`}>
            a Software Engineer who builds high-quality, scalable, and impactful web applications.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-6 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] sm:w-[35px] h-14 sm:h-16 rounded-3xl border-4 border-white flex justify-center items-start p-1 sm:p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
