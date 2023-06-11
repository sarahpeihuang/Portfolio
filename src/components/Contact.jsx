import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {AiFillLinkedin,AiFillGithub,AiFillMail} from 'react-icons/ai';


const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_iczrmuf",
//         "template_9nc2pxb",
//         {
//           from_name: form.name,
//           to_name: "Sarah Huang",
//           from_email: form.email,
//           to_email: "sarahpeihuang@gmail.com",
//           message: form.message,
//         },
//         "6wRqIR87fmtWqqp2C"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Something went wrong! Please try again.");
//         }
//       );
//   };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-gradient-to-bl from-blue-100 to-[#E8B5BD] rounded-2xl`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#E8B5BD] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="text-[20px] p-2">
  
          <label className='flex flex-col'>
            {/* <ButtonMailto label="Write me an E-Mail" mailto="mai/lto:no-reply@example.com" /> */}

            <div onClick={(e) => {window.location.href ='mailto:shuan392@uwo.ca';}}className="flex max-w-7xl"><AiFillMail className="text-[35px] "/>&nbsp;&nbsp;shuan392@uwo.ca</div>
            <a href="https://www.linkedin.com/in/sarahpeihuang/" className="flex max-w-7xl"><AiFillLinkedin className="text-[35px]"/>&nbsp;&nbsp;@sarahpeihuang </a>
            <a href="https://github.com/sarah888" className="flex max-w-7xl"><AiFillGithub className="text-[35px]"/>&nbsp;&nbsp;@sarah888 </a>

          </label>
          </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'></span>
          </label>

          
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");