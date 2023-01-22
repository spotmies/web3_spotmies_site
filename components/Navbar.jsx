'use client';

import {motion} from "framer-motion"
import {useState} from "react";
import styles from '../styles';
import Link from "next/link";
import {FaHome} from "react-icons/fa";
import {
    FiAward, FiBriefcase,
    FiClock,
    FiCode,
    FiCodesandbox,
    FiHelpCircle,
    FiHome,
    FiInfo, FiLoader,
    FiPieChart,
    FiSend, FiTruck,
    FiUser
} from "react-icons/fi"

const Path = props => (
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
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};


const livariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 246px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 246px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const itemIds = ["Home","About Us", "Services", "How We Work", "Recent Projects", "Projects", "Product Design", "Skills", "Testimonials", "Progress","Why Choose Us", "Team", "Contact Us"];
const itemIconIds = {
    "Home": <FiHome/>,
    "About Us": <FiInfo/>,
    "Services": <FiTruck/>,
    "How We Work": <FiBriefcase/>,
    "Recent Projects": <FiClock/>,
    "Projects": <FiCodesandbox/>,
    "Product Design": <FiPieChart/>,
    "Skills": <FiCode/>,
    "Testimonials": <FiAward/>,
    "Progress": <FiLoader/>,
    "Why Choose Us": <FiHelpCircle/>,
    "Team": <FiUser/>,
    "Contact Us": <FiSend/>
};
const links = {
    "Home": "#hero",
    "About Us": "#about",
    "Services": "#explore",
    "How We Work": "#howwework",
    "Recent Projects": "#recentprojects",
    "Projects": "#projects",
    "Product Design": "#productdesign",
    "Skills": "#skills",
    "Testimonials": "#testimonials",
    "Progress": "#progress",
    "Why Choose Us": "#why-choose-us",
    "Team": "#team",
    "Contact Us": "#contact-us"
};
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            animate={isOpen ? "open" : "closed"}

            className={`${styles.xPaddings} py-8 z-50`}
        >
            <div
                className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
                <img
                    src="/spotmies_banner.png"
                    alt="search"
                    className=" md:h-[40px] h-[30px] object-contain cursor-pointer"
                />
                {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white cursor-pointer">
        SPOTMIES
      </h2> */}
                <img
                    src="/menu.svg"
                    alt="menu"
                    className={isOpen ? "w-[24px] h-[24px] object-contain cursor-pointer hidden" : "w-[24px] h-[24px] object-contain cursor-pointer"}
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                />
            </div>
            <motion.div className="background" variants={sidebar}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="#292a3a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-x"
                 className={isOpen ? "w-[24px] h-[24px] object-contain cursor-pointer absolute right-8 top-8" : "w-[24px] h-[24px] object-contain cursor-pointer hidden"}
                 onClick={() => setIsOpen(isOpen => !isOpen)}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>

            <motion.ul variants={variants}
                       onClick={() => setIsOpen(isOpen => !isOpen)}>
                {itemIds.map(itemData => (
                    <motion.li
                        variants={livariants}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                    >
                        <div className="flex space-x-8 items-center">
                            {/*<svg width="20" height="14" viewBox="0 0 20 14" fill="#292a3a"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg"*/}

                            {/*     className={"w-[16px] h-[16px] object-contain cursor-pointer"}>*/}
                            {/*    <path*/}
                            {/*        d="M20 13.005C20 13.555 19.554 14 19.005 14H10.995C10.7311 14 10.478 13.8952 10.2914 13.7086C10.1048 13.522 10 13.2689 10 13.005C10 12.7411 10.1048 12.488 10.2914 12.3014C10.478 12.1148 10.7311 12.01 10.995 12.01H19.005C19.555 12.01 20 12.455 20 13.005ZM20 7C20 7.55 19.554 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7C0 6.73611 0.10483 6.48303 0.291429 6.29643C0.478028 6.10983 0.731109 6.005 0.995 6.005H19.005C19.555 6.005 20 6.451 20 7ZM19.005 1.99C19.2689 1.99 19.522 1.88517 19.7086 1.69857C19.8952 1.51197 20 1.25889 20 0.995C20 0.731109 19.8952 0.478027 19.7086 0.291429C19.522 0.10483 19.2689 7.86455e-09 19.005 0H6.995C6.86433 -3.89413e-09 6.73495 0.0257364 6.61423 0.0757399C6.49351 0.125743 6.38382 0.199034 6.29143 0.291429C6.19903 0.383823 6.12574 0.493511 6.07574 0.61423C6.02574 0.734949 6 0.864335 6 0.995C6 1.12567 6.02574 1.25505 6.07574 1.37577C6.12574 1.49649 6.19903 1.60618 6.29143 1.69857C6.38382 1.79097 6.49351 1.86426 6.61423 1.91426C6.73495 1.96426 6.86433 1.99 6.995 1.99H19.005Z"/>*/}
                            {/*</svg>*/}

                            {itemIconIds[itemData]}
                            <Link href={links[itemData]}>{itemData}</Link>
                        </div>
                    </motion.li>
                ))}

            </motion.ul>


        </motion.nav>
    )
}

export default NavBar