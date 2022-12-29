"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdPhone, MdColorLens, MdAndroid } from "react-icons/md";
import {CgWebsite} from "react-icons/cg"
import {FaEthereum} from "react-icons/fa"
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("world-2");

var icons = [MdColorLens,FaEthereum , MdAndroid, CgWebsite]

  var exploreWorlds = [
    {
      id: "world-1",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fuiux%20(1).png?alt=media&token=fb1e0a3d-acef-471a-b267-8c24bfc9eedc",
      invertColor: true,
      title: "UI/UX",
      
      description:
        "It creates an enjoyable and intuitive experience for Your users. It allows users to easily interact with a product or service.",
    },
    {
      id: "world-2",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fweb3.png?alt=media&token=80b43d49-01bb-44c9-b6c1-fed4a6ead3a7",
      title: "WEB 3.0",
      invertColor: true,
      
      description:
        "Blockchain services are becoming increasingly important in many industries, as they provide a secure, transparent, and immutable platform on which to store data and execute transactions.",
    },
    {
      id: "world-3",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fapp%20dev.png?alt=media&token=2a9f7fa3-1c57-43f9-8957-87a5890f9df8",
      invertColor: true,
      
      title: "ANDROID & IOS",
      description:
        "Creating a mobile app is a great ways to reach your customers and grow your business.",
    },
    {
      id: "world-4",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fweb%20dev.png?alt=media&token=e789e616-50e0-4040-bb8a-93de6db9b48b",
      invertColor: true,
      
      title: "WEB & DESKTOP APPS",
      description:
        "We build web and desktop apps that are fast, secure, and scalable with the help of the latest technologies like React, Node, MongoDB And Next.js.",
    },
  ];

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
          textStyles={`text-center ${styles.sideHeadingLeading}`}
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
              icon={icons[index]}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
