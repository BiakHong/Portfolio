import React from "react";
import profilePhoto from "../assets/profile.jpg"; // Add your photo in the assets folder
import "../styles/Home.css"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="home"
  >
    <div className="home">
      <div className="home-content">
        <img src={profilePhoto} alt="Lian B. Hong" className="profile-photo" />
        <h1>Lian B. Hong</h1>
        <p className="tagline">Fullstack Java Developer | React Enthusiast | Problem Solver</p>
        <p className="intro">
          Hi, I'm Lian, a passionate Full Stack Developer with experience in building robust, scalable, and
          user-friendly applications. I specialize in Java, Spring Boot, React, and PostgreSQL, and I love
          turning ideas into reality through code.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn">View My Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Home;