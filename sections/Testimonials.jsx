import React from "react";
("use client");

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { testimonials } from "../constants";
export default function Testimonials() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Testimonials" textStyles="" />
        <TitleText
          title={<>Helping our client to succeed with speed</>}
          textStyles=" w-[70%]"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mt-[50px] flex flex-row justify-between items-start w-[100%]`}
        >
          <div className="flex flex-col md:flex-row relative pb-10">
            {testimonials.map((testimonial, index) => testimonialCard({...testimonial, key: index}))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );

  function testimonialCard({ text, image, name, position, when }) {
    return (
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="md:w-[500px] w-[85vw] h-[300px] gradient-05 rounded-[20px] m-2 p-6 shadow-md"
      >
        {/* <div className="w-[500px] h-[300px] gradient-05 rounded-[20px] m-2 p-6 shadow-md"> */}
        <div className="flex flex-col h-full justify-between">
          <p className="text-white opacity-80 text-xl">"{text}"</p>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row mt-[10px]">
              <img
                src={image}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col ml-4">
                <p className="text-white font-bold text-xl">{name}</p>
                <p className="text-white opacity-50 text-md">{position}</p>
              </div>
            </div>
            <p className="text-white opacity-50 text-sm">{when}</p>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
    );
  }
}
