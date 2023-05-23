import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {textVariant, fadeIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[15px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div>
    <p className={`${styles.heroSubText} text-black`}>INTRODUCTION</p>
    <h2 className={`${styles.heroHeadText} text-black  `}>Overview.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='text-black mt-4 text-[17px] max-w-3xl leading-[30px]'>
      👋 Welcome to my LinkedIn. I'm Sarah Huang, a Software Engineer from Toronto 🇨🇦 

🎓 Software Engineering student and Varsity Athlete at Western University. Looking to pursue a double degree in Business at the Ivey Business School

👩‍💻 Some of the languages and frameworks that I am proficient in are: Python, Java, JavaScript, HTML/CSS, Git, React, Node.js, Cohere API

💻 Currently, I'm employed as a Data Quality Specialist at Cohere, where I am constantly working with the next NLP AIs. I'm actively seeking opportunities in SWE, PM, consulting, and machine learning roles for summer 2024!

🐎 At Western University, I have volunteered with:
- Hack Western as an Events Organizer
- RBC Design Thinking Program as Design Thinking Associate
- Women in Engineering as a Big Sister

🌞 In my free time, you can find me playing ultimate frisbee🥏, embroidering🧵, crocheting🧶, or going for a jog🏃‍♀️

Feel free to connect or email me at shuan392@uwo.ca
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")