import React from "react";
("use client");

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

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
          className="w-[85%] h-[230px] gradient-05 m-auto rounded-[20px] shadow-lg flex flex-row items-center justify-between  pr-10 pl-10"
        >
          {/* <div className="w-[80%] h-[250px] gradient-05 m-auto rounded-[20px] shadow-lg flex flex-row items-center justify-between  pr-10 pl-10"> */}
          <img
            src="/get-started.png"
            alt="stamp"
            className="w-[50%] h-full object-cover"
          />
          <div className="w-[50%] flex flex-row items-center justify-between">
            {progressCard("Projects", 15)}
            {progressCard("Dapps", 5)}
            {progressCard("Clients", 6)}
          </div>
          {/* </div> */}
        </motion.div>
      </motion.div>
    </section>
  );

  function progressCard(title, count) {
    return (
      <div className="flex flex-col items-left justify-center">
        <p className="font-extrabold text-5xl text-slate-300">{count}+</p>
        <p className="opacity-30 text-slate-50">{title}</p>
      </div>
    );
  }
}
