"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { whyYouChooseUs } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { MdPhone } from "react-icons/md";

const WhyYouChooseUs = () => (
  <section className={`${styles.paddings} relative z-10`} id="why-choose-us">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fwhy%20us.png?alt=media&token=1d8eb1df-f21f-47ee-9491-c6f58c8d7088"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* <TypingText title="| How We Works" /> */}
        <TitleText title={<>Why Choose Us?</>} />
        <div className="mt-[31px] flex flex-col max-w-[450px] gap-[24px]">
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {whyYouChooseUs.map((feature) => (
              <NewFeatures key={feature.title} {...feature}  />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhyYouChooseUs;
