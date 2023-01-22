"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`w-[100vw] z-10 m-auto`} id="productdesign">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col `}
    >
      <div className="w-[100vw] ">
      <TypingText title="| Product design" textStyles="text-center" />
      <TitleText
        title={<>Look at our best designs.</>}
        textStyles="text-center "
      />
      </div>

      <div className="w-[100vw] mt-6 h-[140vh] parallax-div" >
        </div>
    </motion.div>
  </section>
);

export default World;
