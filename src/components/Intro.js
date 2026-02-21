import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  /* Thoda subtle shadow add kiya hai for 3D depth */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  background:
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    /* Yeh CSS placement ko wapas le aaya hai */
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
    /* Image drop shadow for better pop */
    filter: drop-shadow(0px -10px 15px rgba(0, 0, 0, 0.2));
  }
`;

const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    font-size: calc(2em + 1.5vw);
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: calc(1em + 1.5vw);
    font-weight: 500;
  }

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
    font-size: calc(0.6rem + 1vw);
    font-weight: 400;
    margin-top: 1rem;
    line-height: 1.5;
  }
`;

// Text Reveal ke liye Framer Motion Variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 1.5, staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text variants={textVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants}>Hi,</motion.h1>
          <motion.h3 variants={itemVariants}>I'm Appu.</motion.h3>
          <motion.h6 variants={itemVariants}>
            I craft pixel-perfect UI & vibe with AI to build rapid web
            solutions.
          </motion.h6>
        </Text>
      </SubBox>
      <SubBox>
        {/* FIX: Animation ko wrapper div par lagaya hai, image par nahi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -15, 0] }} // Fade in + Floating dono yahan hain
          transition={{
            opacity: { duration: 1, delay: 2 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          {/* Image ab normal tag hai, CSS placement lega */}
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
