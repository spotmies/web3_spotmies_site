"use client";

import { motion } from "framer-motion";
import React, { Suspense } from "react";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section id="hero"
    className={`${styles.yPaddings} sm:pl-16 pl-6 relative md:h-[130vh] h-[90vh] slide-1-bg-image`}
  >
    {/* slide-1-bg-image add this class name for rocket 3d image */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col mt-24`}
    >
      <div className="h-full flex justify-center items-center flex-col relative z-10 ">
        <motion.h1
          variants={textVariant(0.6)}
          className={`${styles.heroHeading} text-center`}
        >
          We Help <span className="text-[#14a2b5]">Startups</span> to Launch 🚀 Their Products In The New Era Of The
          Internet
        </motion.h1>
      </div>
      {/* <div className=" absolute bottom-0 right-0 md:w-[90%] w-[95%]">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:mt-[10px] mt-[5px] h-full"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <Suspense fallback={<div>Loading...</div>}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fplanet-09-min.png?alt=media&token=d5a19e63-763b-4e0d-a106-1b822bfc7f44"
              alt="hero_cover"
              className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative "
            />
          </Suspense>
        </motion.div>
      </div> */}
    </motion.div>
  </section>
);

export default Hero;
