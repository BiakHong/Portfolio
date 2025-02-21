// src/components/Sections.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

const Section = ({ id, children }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      id={id} // Ensure each section has a unique ID
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      {children}
    </motion.div>
  );
};

const Sections = () => {
  return (
    <div className="sections-container">
      <Section id="home"><Home /></Section>
      <Section id="about"><About /></Section>
      <Section id="projects"><Projects /></Section>
      <Section id="skills"><Skills /></Section>
      <Section id="contact"><Contact /></Section>
    </div>
  );
};

export default Sections;
