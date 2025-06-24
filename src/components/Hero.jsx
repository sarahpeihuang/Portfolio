import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

import { github } from '../assets';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    
    <section className='relative w-full h-screen mx-auto'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      {/* <div className=' text-5xl justify-center p-10 space-y-5'>
        <NavLink href="https://www.linkedin.com/in/sarahpeihuang/">hi <AiFillLinkedin/></NavLink>
          <AiFillGithub/>
          <AiFillMail/>
        </div> */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-yellow-200'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-yellow-200'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className=' text-yellow-200'>Sarah Huang</span></h1>
          <p className={`${styles.heroSubText} text-black`}>a <b>Software Engineering & Business</b> Student @ Western University</p>
          <br/>
          <p className={`${styles.sectionSubText} text-black`}>graduating Fall 2026, Seeking Summer 2026 and New Grad Roles</p>
          
        </div>

        </div>
<br/><br/>

      <ComputersCanvas/>
      
      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
        
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2 '>

            <motion.div 
              animate={{
                // move 24 pixels up and down
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-primary mb-1'
            />
            
          </div>

        </a>          <p className='text-primary p-1'>click me to continue</p>

      </div>
    </section>
  )
}

export default Hero