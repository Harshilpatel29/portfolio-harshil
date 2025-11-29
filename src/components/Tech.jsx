import { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-10 mt-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28"
        >
          {isMobile ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
              draggable={false}
            />
          ) : (
            <div className="w-20 h-20 sm:w-28 sm:h-28">
              <BallCanvas icon={technology.icon} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
