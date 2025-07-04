import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { link } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ProjectCard =({index, name, description, tags, image,source_code_link}) =>{
  return(
    <motion.div
    variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'> 
        <img
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div
        onClick={() => window.open(source_code_link, "_blank")}
        className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={link} alt="github" className='w-1/2 h-1/2 object-contain'/>
        </div>
        </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
          <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black text-center`}>
          My Work
        </p>
        <h2 className={`${styles.heroHeadText} text-black text-center `}>
          Projects.
        </h2>
      </motion.div>

      <div className='flex'>
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-black text-[17px] max-w-3xl leading-[20px]'>
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-5'>
        {projects.map((project, index)=> (
          <ProjectCard
          key={`project-$(index)`}
          index={index}
          {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")