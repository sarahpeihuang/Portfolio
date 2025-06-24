import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {textVariant, fadeIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import {AiFillLinkedin,AiFillGithub,AiFillMail} from 'react-icons/ai';
import {sarah} from "../assets";
import {resume} from "../assets";


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
  <div className='flex'>
    <p className={`${styles.heroSubText} text-black`}>INTRODUCTION</p>
    <div className='ml-auto'>
      <button className="bg-secondary hover:bg-tertiary text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
        </svg>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <span>Download my Resume</span>
        </a>
      </button>
    </div>
  </div>
  <h2 className={`${styles.heroHeadText}`}>About Me.</h2>
</motion.div>
    <div className='flex'>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='text-black mt-4 mr-4 text-[17px] max-w-3xl leading-[30px]'>
👋 Welcome to my Portfolio. I'm Sarah Huang, a Product Manager from Toronto 🇨🇦 <br /><br />

🎓 I'm a Software Engineering & Business student and Varsity Athlete at Western University. I'm actively seeking opportunities in Product for <b>Summer 2026 </b> and <b>New Grad</b> <br /><br />

💻 Last summer, I was an Product Manager Intern at The Weather Network where I worked to improve our mobile app for 8M MAU     <br /><br />

🌞 In my free time, you can find me playing ultimate frisbee 🥏, sewing clothes 🧵, crocheting 🧶, or going for a jog 🏃‍♀️ <br /><br />

Feel free to connect with my socials on the right!

    </motion.p>
    <motion.p className="w-full md:w-1/3 flex justify-center">
  <div className="w-full max-w-[33%] md:max-w-sm bg-gradient-to-bl from-secondary to-white rounded-full overflow-hidden">
    <img
      src={sarah}
      alt="Sarah"
      className="w-full h-auto object-cover"
    />
  </div>
</motion.p>

    <motion.p>
    <div className=' text-5xl justify-center p-10 space-y-5 mt-20' style={{color: '#4bbeee'}}>
          <div onClick={(e) => {window.location.href ='mailto:shuan392@uwo.ca';}}className="flex max-w-7xl"><AiFillMail className="text-[35px]"/></div>
            <a href="https://www.linkedin.com/in/sarahpeihuang/" className="flex max-w-7xl"><AiFillLinkedin className="text-[35px]"/></a>
            <a href="https://github.com/sarahpeihuang" className="flex max-w-7xl"><AiFillGithub className="text-[35px]"/></a>
        </div></motion.p>
    </div>
    <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")