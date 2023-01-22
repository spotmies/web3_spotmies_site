"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import workJson from "../json_files/work.json";
const cypherb = workJson[1];
const indieskulls = workJson[2];
const Feedback = () => (
  <section className={`${styles.paddings}`} id="recentprojects">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Recent Projects" textStyles="text-center" />
      <TitleText
        title={<>Have a look at some of the recent Web 3.0 projects</>}
        textStyles={`text-center ${styles.sideHeadingLeading} pb-6`}
      />
      {card(cypherb.title, cypherb.glimpse, cypherb.description, cypherb.image, cypherb.more_description)}
      <div className="h-[50px]" />
      {card(indieskulls.title, indieskulls.glimpse, indieskulls.description, indieskulls.image, indieskulls.more_description)}
      <div className="h-[50px]" />
      {/* {card()} */}
      {/* 2nd slide */}
    </motion.div>
  </section>
);

export default Feedback;
function card(title, smallDescription, description, link,more_description) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      {/* 1st slide */}
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-between flex-col gradient-05 sm:p-8 p-4 rounded-[22px] md:rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            {title}
          </h4>
          <p className="mt-[8px] font-normal sm:text-[14px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white opacity-50">
            {smallDescription}
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[20px] text-[18px] sm:leading-[30.6px] leading-[30.6px] text-white">
          {description} 
          <span className="hidden md:block">
           {more_description}
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src={link}
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[20px] md:rounded-[32px]"
        />
      </motion.div>
    </motion.div>
  );
}
