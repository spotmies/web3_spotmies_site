import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

// import "./Work.scss";
import workJson from "../../json_files/work.json";
import styles from "../../styles";
import { TitleText, TypingText } from "../../components";
import { staggerContainer, fadeIn } from "../../utils/motion";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    console.log(workJson);
    setWorks(workJson);
    console.log(workJson);

    setFilterWork(workJson.slice(0, 4));
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const navigateToProject = (index) => {
    const project = works[index];
    if (project.completed) {
      return window.open(project.projectLink, "_blank");
    }
    alert("Project is under development");
  };

  return (
    <section className={`z-10`} id={"projects"}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
      >
        <TypingText title="| Projects" textStyles="text-center" />
        <TitleText
          title={<>Our Creative Portfolio.</>}
          textStyles={`text-center ${styles.sideHeadingLeading}`}
        />
        {filterSection({ arrayy: ["All", "Web 3", "Web 2"] })}

        <motion.div
          // animate={animateCard}
          variants={fadeIn("up", "tween", 0.2, 1)}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div
              className="app__work-item app__flex bg-[#242e3a] drop-shadow-md"
              key={index}
            >
              <div className="app__work-img app__flex">
                <img src={work.image} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <motion.div
                    onClick={() => navigateToProject(index)}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>

                  {/* <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a> */}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>

                <p className="p-text text-justify" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text opacity-60">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {works.length !== filterWork.length && activeFilter === "All"
          ? filterSection({
              arrayy: ["Show More"],
              onClick: () => {
                handleWorkFilter("All");
              },
            })
          : null}
      </motion.div>
    </section>
  );

  function filterSection({ onClick, arrayy }) {
    return (
      <div className="app__work-filter">
        {arrayy?.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (onClick != null) {
                return onClick(item);
              }
              handleWorkFilter(item);
            }}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
};

export default Work;
