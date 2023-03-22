import React, { useState } from "react";
("use client");

import { motion } from "framer-motion";
import {
  MdEmail,
  MdLocationCity,
  MdOutlineAlternateEmail,
  MdOutlineLocationCity,
  MdOutlinePhone,
  MdPhone,
} from "react-icons/md";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { socials } from "../constants";
import axios from "axios";
export default function ContactUs() {
  // create a react ref for the contact us every input field
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const messageRef = React.useRef(null);
  const subjectRef = React.useRef(null);
  const mobileRef = React.useRef(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    setLoading(true);

    const contact = {
      subject: subjectRef?.current?.value,
      suggestionFor: "contactUs",
      suggestionFrom: "spotmies",
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      body: messageRef?.current?.value,
      mobile: mobileRef?.current?.value,
    };

    axiosPostApiCall(contact);
  };

  const axiosPostApiCall = (body) => {
    // const api = "https://acchedya-server-production-7d93.up.railway.app";
    const api = "https://acchedya-server-production.up.railway.app";
    setLoading(true);
    setIsFormSubmitted(false);
    axios
      .post(
        `${process.env.SERVER_URL ?? api}/api/suggestion/new-suggestion`,
        body
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Something went wrong");
      });
  };

  const getInTouch = (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className="flex flex-col pt-[5%]"
    >
      {/* <div className="flex flex-col pt-[5%]"> */}
      <p className="text-5xl font-bold text-white">Get in touch</p>
      <p className="text-md text-slate-400 mt-[30px]">Connect with us today</p>
      <div className="flex flex-row items-center mt-[20px]">
        <MdEmail size="2rem" className="text-slate-500" />
        <p className="text-md text-white ml-[15px]">info@spotmies.com</p>
      </div>

      <div className="flex flex-row items-center mt-[20px]">
        <MdPhone size="2rem" className="text-slate-500" />
        <p className="text-md text-white ml-[15px]">+91 8341980196</p>
      </div>
      <div className="flex flex-row items-start mt-[20px]">
        <MdLocationCity size="2.4rem" className="text-slate-500" />
        <p className="text-md text-white ml-[15px]">
          AU incubation centre, <br /> AU college of engineering,
          <br /> Visakhapatnam
        </p>
      </div>

      <p className="text-white font-bold text-md mt-[30px]">Follow us</p>
      <div className="flex gap-6 mt-[15px]">
        {socials.map(
          (social) =>
            social.name != "github" && (
              <img
                onClick={() => window.open(social.link, "_blank")}
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[30px] h-[30px] object-contain cursor-pointer opacity-70 hover:opacity-100"
              />
            )
        )}
      </div>

      {/* <div className="flex flex-row items-center mt-[15px] gap-[20px]">
        <AiFillTwitterSquare size="2.4rem" className="text-slate-400" />
        <AiFillInstagram size="2.4rem" className="text-slate-400" />
        <AiFillLinkedin size="2.4rem" className="text-slate-400" />
      </div> */}
      {/* </div> */}
    </motion.div>
  );
  return (
    <section className={`${styles.paddings} relative z-10`} id="contact-us">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Contact Us" textStyles="text-center" />
        <TitleText
          title={<>Take A Coffee & Chat With Us</>}
          textStyles={`text-center ${styles.sideHeadingLeading}`}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mt-[50px] flex flex-col-reverse md:flex-row justify-between items-start`}
        >
          {/* <div className="mt-[50px] flex flex-col-reverse md:flex-row justify-between items-start"> */}
          {getInTouch}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="w-[100%] md:w-[700px] h-fit md:h-[550px] mt-[10px] rounded-[10px] md:rounded-[20px] gradient-05 border-[1px] border-[#6A6A6A]  "
          >
            {/* <div className="w-[100%] md:w-[700px] h-fit md:h-[550px] mt-[10px] rounded-[10px] md:rounded-[20px] gradient-05 border-[1px] border-[#6A6A6A] border "> */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-[15px] md:gap-[45px] mt-[30px] p-[20px] w-full justify-around">
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Name
                  </p>
                  <input
                    ref={nameRef}
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full  outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Email
                  </p>
                  <input
                    ref={emailRef}
                    required
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[15px] md:gap-[45px] pt-[0px] p-[20px] w-full justify-around">
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Phone
                  </p>
                  <input
                    ref={mobileRef}
                    type="text"
                    placeholder="Your Number (Optional)"
                    className="w-full outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Subject
                  </p>
                  <input
                    ref={subjectRef}
                    required
                    type="text"
                    placeholder="What is the Subject"
                    className="w-full outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full pt-[0px] p-[20px]">
                <p className="text-slate-400 text-md font-semibold m-[5px]">
                  Message
                </p>
                <textarea
                  ref={messageRef}
                  required
                  type="text"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full outline-none gradient-05 rounded-[10px] p-[10px] bg-slate-900 text-white"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-full pt-[0px] p-[20px]">
                <button
                  type="submit"
                  disabled={loading}
                  className={` ${
                    loading && "animate-bounce"
                  } border-[#273558] border-[3px] gradient-05 text-white pt-[10px] pb-[10px] font-bold p-[20px] rounded-[10px]`}
                >
                  Submit
                </button>

                {isFormSubmitted && (
                  <p className="text-[#1bcc4c] text-md font-semibold m-[5px] pl-[10px]">
                    Thank you 👍, We will get back to you soon.
                  </p>
                )}
              </div>
            </form>
            {/* </div> */}
          </motion.div>
          {/* </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
