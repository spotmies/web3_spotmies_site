import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import skillJson from "../json_files/skills.json";
export default function Technologies() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {

        setSkills(skillJson)
    
      }, []);
  return (
    <section className={`${styles.paddings} relative z-10`} id="skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Skills" textStyles="text-center" />
        <TitleText
          title={<>Best Technologies Give Better Outcome</>}
          textStyles="text-center"
        />
      </motion.div>
      <div className="app__skills-container w-[100%] md:w-[80%] m-auto">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex "
              key={skill.name}
            >
              <div
                className="app__flex cursor-pointer"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.image ?? urlFor(skill.icon)} alt={skill.name} className="object-fit w-full h-full " />
              </div>
              <p className="p-text text-white opacity-50">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
