import React from "react";
("use client");

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import CountUp from "react-countup";

export default function WhatWeHave() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Progress" textStyles="text-center" />
        <TitleText title={<>Look at our traction</>} textStyles="text-center" />
        <div className="h-[100px]" />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="w-[95%] md:w-[85%] h-[200px] md:h-[230px] gradient-05 m-auto rounded-[20px] shadow-lg flex flex-row items-center justify-between pr-5 pl-5  md:pr-10 md:pl-10"
        >
          <img
            src="/rocket_with_graph.png"
            alt="stamp"
            className="w-[100%] md:w-[30%] h-full object-cover md:block hidden"
          />
          <div className="w-full md:w-[50%] flex flex-row items-center justify-between">
            {progressCard("Projects", 15)}
            {progressCard("Dapps", 5)}
            {progressCard("Clients", 10)}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );

  function progressCard(title, count) {
    return (
      <div className="flex flex-col items-left justify-center">
        <p className="font-extrabold text-5xl text-slate-300">
          {" "}
          <CountUp enableScrollSpy = {true} end={count} />+
        </p>
        <p className="opacity-30 text-slate-50">{title}</p>
      </div>
    );
  }
}
