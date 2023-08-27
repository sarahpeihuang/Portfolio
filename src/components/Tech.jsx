import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
const Tech = () => {
  const rowStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black text-center`}>
          My Skills
        </p>
        <h2 className={`${styles.heroHeadText} text-black text-center`}>
          Tech Stack.
        </h2>
      </motion.div>
      <div className="flex flex-row justify-center flex-wrap gap-20">
        <div>
          <br />
          <br />
          <p className={`${styles.sectionSubText} text-black text-center`}>
            Languages
          </p>
          <div style={rowStyles}>
            {technologies
              .filter((technology) => technology.type === "Language")
              .map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                  <p className="text-black text-center">{technology.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <p className={`${styles.sectionSubText} text-black text-center`}>
            Frameworks
          </p>
          <div style={rowStyles}>
            {technologies
              .filter((technology) => technology.type === "Framework")
              .map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                  <p className="text-black text-center">{technology.name}</p>
                </div>
              ))}
          </div>
        </div>
        <br />
        <div>
          <p className={`${styles.sectionSubText} text-black text-center`}>
            Product
          </p>
          <div style={rowStyles}>
            {technologies
              .filter((technology) => technology.type === "Design")
              .map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                  <p className="text-black text-center">{technology.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");