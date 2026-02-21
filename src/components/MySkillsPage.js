import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* FIX: Text Overflow ke liye */
  overflow-y: auto;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  /* Custom Clean Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text};
    border-radius: 10px;
  }
  /* Hover karne par scrollbar ka color bhi badal jayega */
  &:hover::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.body};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        {/* 1st Box: Design & AI Section */}
        <Main>
          <Title>
            <Design width={40} height={40} /> Design & Vibe Coding
          </Title>
          <Description>
            I love converting creative designs into pixel-perfect reality and
            leveraging AI to accelerate workflows.
          </Description>
          <Description>
            <strong>What I Do</strong>
            <ul>
              <li>Figma to Code</li>
              <li>Rapid AI Prototyping</li>
              <li>Responsive UI Design</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma, Canva</li>
              <li>Photoshop, Illustrator</li>
              <li>ChatGPT & AI Builders</li>
            </ul>
          </Description>
        </Main>

        {/* 2nd Box: Frontend Developer Section */}
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I specialize in turning designs into 100% working code and building
            interactive, physics-based UI animations.
          </Description>
          <Description>
            <strong>Skills & Magic</strong>
            <p>
              HTML5, CSS3, JavaScript, Tailwind, React.js, Vite.
              <br />
              <br />✨ <i>Specialty:</i> Interactive Animations (Google
              Antigravity effects, Particles).
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VS Code, Git, GitHub, Postman, Hostinger.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
