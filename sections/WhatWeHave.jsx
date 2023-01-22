import React from "react";
("use client");

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import CountUp from "react-countup";

export default function WhatWeHave() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="progress">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Progress" textStyles="text-center" />
        <TitleText title={<>Look at our traction</>} textStyles={`text-center ${styles.sideHeadingLeading}`} />
        <div className="h-[100px]" />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="w-[100%] md:w-[85%] h-[200px] md:h-[230px] m-auto rounded-[20px] gradient-05 shadow-md flex flex-row items-center justify-around pr-5 pl-5  md:pr-10 md:pl-10"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fwhat%20we%20have.png?alt=media&token=18ae9033-0704-4cb9-8446-555c90498683"
            alt="stamp"
            className="w-[100%] md:w-[30%] h-[80%] object-contain md:block hidden"
          />
          <div className="w-full md:w-[50%] flex flex-row items-center justify-between">
            {progressCard("Projects", 30)}
            {progressCard("Dapps", 6)}
            {progressCard("Clients", 20)}
           
          </div>
        </motion.div>
      </motion.div>
    </section>
  );

  function progressCard(title, count) {
    return (
      <div className="flex flex-col items-left justify-center">
        <p className="font-bold text-3xl md:text-5xl text-slate-300 flex flex-row items-center justify-center">
          
          <CountUp enableScrollSpy = {true} end={count}/>
          <span className="md:mb-[15px] mb-[8px]">+</span>
        </p>
       
        <p className="opacity-30 text-slate-50">{title}</p>
      </div>
    );
  }
}
