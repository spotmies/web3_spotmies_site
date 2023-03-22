// "use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-justify text-secondary-white"
      >
        <span className="font-extrabold text-white">
          Spotmies{" "}
        </span>
        uses advanced technologies to deliver unique digital services for your
        innovative thoughts and transformative ideas. we bring perfect attire
        and follow subtle approaches which mould your ideas to their perfection.
        We will come up with versatile and different ways so your fantasies come
        true. We work round the clock to place you in a superior position to
        uphold the day-to-day evolving competition. Your business promotions go
        easier in the digital market by collaborating with us. Your satisfaction
        is our priority.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
