'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Product design" textStyles="text-center" />
      <TitleText
        title={(
          <>
          Look at our best designs.
          </>
        )}
        textStyles="text-center"
      />

    <div className='w-[100vw] mt-6 h-[100vh] parallax-div'>

    </div>
    </motion.div>
  </section>
);

export default World;
