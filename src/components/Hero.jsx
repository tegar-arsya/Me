// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiGithubBadge,
    DiPhp,
    DiLaravel,
    DiPython,
    
} from "react-icons/di";
import { SiAndroidstudio} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <div className="mt-24 mx-auto max-w-[100%] relative">
      <div className="grid md:grid-cols-1 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br/>
            <span className="text-purple-500">Tegar Arsyadani</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a 
              href="https://drive.google.com/file/d/1A2TKkNVOTKdIi8yd_tgphKYvfYwS0T4v/view?usp=sharing" 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            > 
              Download CV 
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/tegar-arsya">
                <AiOutlineGithub/>
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/tegar-arsyadani-07ba99202/">
                <AiOutlineLinkedin/>
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/tegar_arsya/">
                <AiOutlineInstagram/>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col items-center justify-center text-7xl px-12 md:px-0 w-full py-24"
      >
        <motion.h2
          initial={{ opacity: -5, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          My Tech Stack
        </motion.h2>

        <motion.div
          initial={{ opacity: -5, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center space-x-2 space-y-2 md:space-y-0 animate-pulse"
        >
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiPhp className="text-purple-500" />
          <DiGithubBadge className='text-gray-500' />
          <DiBootstrap className='text-purple-500' />
          <DiLaravel className='text-red-500' />
          <DiPython className='text-yellow-500' />
          <SiAndroidstudio className='text-green-500' />
          <RiNextjsFill className='text-black'/>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  )
}

export default Hero
