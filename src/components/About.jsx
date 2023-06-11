import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {textVariant, fadeIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import {AiFillLinkedin,AiFillGithub,AiFillMail} from 'react-icons/ai';
import {sarah} from "../assets";
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
    <motion.div><div className='flex'>
    <p className={`${styles.heroSubText} text-black`}>INTRODUCTION</p>
    <button class="bg-secondary hover:bg-tertiary ml-40 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
    </div>
    <h2 className={`${styles.heroHeadText}`}>Overview.</h2>
    

    </motion.div>
    <div className='flex'>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='text-black mt-4 text-[17px] max-w-3xl leading-[30px]'>
      👋 Welcome to my Portfolio. I'm Sarah Huang, a Software Engineer from Toronto 🇨🇦 <br /><br />

🎓 Software Engineering student and Varsity Athlete at Western University. Looking to pursue a double degree in Business at the Ivey Business School <br /><br />

💻 Currently, I'm employed as a Data Quality Specialist at Cohere, where I am constantly working with the next NLP AIs. I'm actively seeking opportunities in SWE, PM, consulting, and machine learning roles for summer 2024! <br /><br />

🌞 In my free time, you can find me playing ultimate frisbee🥏, embroidering🧵, crocheting🧶, or going for a jog🏃‍♀️ <br /><br />

Feel free to connect with my socials on the right!

    </motion.p>
    <motion.p>
      
    <div className={`mx-auto bg-gradient-to-bl from-secondary to-white rounded-full md:h-90 md:w-93 overflow-hidden`}>
    {/* 'relative mx-auto  bg-gradient-br from-primary to-white rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 '} */}
      {/* className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-gradient-to-bl from-blue-100 to-[#E8B5BD] rounded-2xl`} */}
    
      <img src={sarah} layout="fill" objectFit='cover'/>
    </div>
    </motion.p>
    <motion.p>
    <div className=' text-5xl justify-center p-10 space-y-5 mt-20' style={{color: '#4bbeee'}}>
          <div onClick={(e) => {window.location.href ='mailto:shuan392@uwo.ca';}}className="flex max-w-7xl"><AiFillMail className="text-[35px]"/></div>
            <a href="https://www.linkedin.com/in/sarahpeihuang/" className="flex max-w-7xl"><AiFillLinkedin className="text-[35px]"/></a>
            <a href="https://github.com/sarah888" className="flex max-w-7xl"><AiFillGithub className="text-[35px]"/></a>
        </div></motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")