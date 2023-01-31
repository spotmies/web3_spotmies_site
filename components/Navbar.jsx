"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import {
  FiAward,
  FiBriefcase,
  FiClock,
  FiCode,
  FiCodesandbox,
  FiHelpCircle,
  FiHome,
  FiInfo,
  FiLoader,
  FiPieChart,
  FiSend,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const livariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 246px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 246px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const itemIds = [
  "Home",
  "About Us",
  "Services",
  "How We Work",
  "Recent Projects",
  "Projects",
  "Product Design",
  "Skills",
  "Testimonials",
  "Progress",
  "Why Choose Us",
  "Team",
  "Contact Us",
];
const itemIconIds = {
  Home: <FiHome color="white" />,
  "About Us": <FiInfo color="white" />,
  Services: <FiTruck color="white" />,
  "How We Work": <FiBriefcase color="white" />,
  "Recent Projects": <FiClock color="white" />,
  Projects: <FiCodesandbox color="white" />,
  "Product Design": <FiPieChart color="white" />,
  Skills: <FiCode color="white" />,
  Testimonials: <FiAward color="white" />,
  Progress: <FiLoader color="white" />,
  "Why Choose Us": <FiHelpCircle color="white" />,
  Team: <FiUser color="white" />,
  "Contact Us": <FiSend color="white" />,
};
const links = {
  Home: "#hero",
  "About Us": "#about",
  Services: "#explore",
  "How We Work": "#howwework",
  "Recent Projects": "#recentprojects",
  Projects: "#projects",
  "Product Design": "#productdesign",
  Skills: "#skills",
  Testimonials: "#testimonials",
  Progress: "#progress",
  "Why Choose Us": "#why-choose-us",
  Team: "#team",
  "Contact Us": "#contact-us",
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navibar, setNavibar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavibar(true);
    }, 2000);
  }, []);

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      className={`${styles.xPaddings} py-8 z-50 w-[99vw] navigation-bar`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/spotmies_banner.png"
          alt="search"
          className=" md:h-[40px] h-[30px] object-contain cursor-pointer"
        />

        <img
          src="/menu.svg"
          alt="menu"
          className={
            isOpen
              ? "w-[24px] h-[24px] object-contain cursor-pointer hidden"
              : "w-[24px] h-[24px] object-contain cursor-pointer"
          }
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </div>
      <motion.div className="background" variants={sidebar} />
      <MdClose
        color="white"
        className={
          isOpen
            ? "w-[24px] h-[24px] object-contain cursor-pointer absolute right-8 sm:right-14 top-8 color-white"
            : "w-[24px] h-[24px] object-contain cursor-pointer hidden"
        }
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />

      <motion.ul
        variants={variants}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {navibar &&
          isOpen &&
          itemIds.map((itemData) => (
            <motion.li
              variants={livariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex space-x-8 items-center">
                {itemIconIds[itemData]}
                <Link href={links[itemData]} className="text-white">
                  {itemData}
                </Link>
              </div>
            </motion.li>
          ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavBar;
