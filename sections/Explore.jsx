"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the services you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles={`text-center ${styles.sideHeadingLeading}}`}
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              description={world.description}
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
              icon={world.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
