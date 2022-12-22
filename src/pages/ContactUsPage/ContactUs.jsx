import React from 'react'
import "./contactUs.css"
import { motion, AnimatePresence } from "framer-motion"
import { useFormik } from 'formik';
import  * as Yup from "yup"
import { InfoCircle } from 'iconsax-react';
import { Toaster } from 'react-hot-toast';

const ContactUs = ({openNav, setOpenNav}) => {


  const [readMore, setReadMore] = React.useState(false)

  const FooterText = `U-Secured is a Safety Tech App owned by Sphere.co
    Developed for Safety and Health Emergency Responses.
    The app allows users to access ambulance services, place direct calls to local authority and live capture of eyewitness experiences.
    U-Secured seeks to provide a Safer and More habitable environment for Individuals.`

  const initialValues = {
    full_name : "",
    email : "",
    phone : "",
    message : "",
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object({
      full_name: Yup.string().required('Firstname is required'),
      email : Yup.string().email("Invalid email format").required("Email is required"),
      phone : Yup.string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .min(10, "Phone number should be at least 10 digit")
          .required('phone number is required'),
      message: Yup.string().required('Message box cannot be empty!'),
  })


  const onSubmit =async (values, {resetForm}) =>{
      // if(validationSchema){

      //     setLoading(true)

      //     const result =  await fetch("https://u-secured.herokuapp.com/api/v1/users/list", {
      //         method: "POST",
      //         headers: {
      //             Accept: "application/json",
      //             "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify(values),            
      //     })
      //     .then((response) => {
      //      return response
      //       }).then(data=>{
      //         // guard clause
      //         setLoading(false)
      //        if(data.status===409){
      //         return toast.error(`you already joined the wait list with ${values.email} !`)
      //        }
      //        resetForm({ values: ""})
      //         return toast.success('you successfully joined the wait list')
      //       })
      //       .catch((err) => {
      //         return
      //       });

      // }

      console.log(values);
  }


  const formData = useFormik({
      initialValues,
      onSubmit,
      validationSchema
  })


  const transition = { duration: 1, ease: "easeInOut", delay : 0.5 };

  const contactMotion = {
    initial: { x: -150, opacity: 0 },
    animate: { x: 0, opacity: 1, transition:{
      staggerChildren : 1,duration: 1, ease: "easeInOut" ,when : "beforeChildren",
    }},
    exit: { x: -150, opacity: 0, transition }
  };


  const contactImgVar = {
    initial: { x: -150, opacity: 0 },
    animate: { x: 0, opacity: 1, transition:{
      staggerChildren : 1,duration: 1, ease: "easeInOut" ,when :"beforeChildren",
    }},
    exit: { x: -150, opacity: 0, transition }
  };

  const contactFormVar = {
    initial: { x: 150, opacity: 0 },
    animate: { x: 0, opacity: 1, transition:{
      staggerChildren : 1,duration: 1, ease: "easeInOut" 
    }},
    exit: { x: -150, opacity: 0, transition }
  };


  const fieldsVar = {
    initial : {
        y: 100,
        opacity : 0
    },
    animate: {
        y:0,
        opacity : 1,
        transition :{
          when :"beforeChildren",
            staggerChildren : 0.6,
            duration: 0.7, 
            ease: "easeInOut" ,
            delay : 0.3,
        }
    }
}

const formVar = {
  initial : {
      x: 100,
      opacity : 0
  },
  animate: {
      x:0,
      opacity : 1,
      transition
  }
}

const inputMotion = {
    initial : {
        y: -100,
        opacity : 0
    },
    animate: {
        y:0,
        opacity : 1,
        transition 
    }
}

  return (
    <motion.div 
      variants={contactMotion} 
      className='contactUs'
      initial="initial"
      animate="animate"
      exit={"exit"}
      onClick={()=>setOpenNav(true)}
    >

      <div className="container contact-container">

       

        <div className="col-2">

          <motion.div variants={contactImgVar}   className="col-image waitlist-image"> 
            <img src="images/contact.svg" alt="" />
          </motion.div>

          <motion.div variants={formVar} className="col-content">


          {/* FORM DAT STARTS HERE */}

          <motion.form variants={fieldsVar} animate="animate" initial="initial" action="" method='POST' onSubmit={formData.handleSubmit} className="contact-form">
                  <h2>Contact Us.</h2>
                  <p>We are always ready and available to help you. </p>

                  <motion.div variants={inputMotion} className="contact-fields">
                  <label 
                            htmlFor="Full Name"></label>
                        <input 
                            type="text" 
                            name='full_name' 
                            placeholder='Full Name'
                            onChange={formData.handleChange}    
                            value={formData.values.full_name}
                            onBlur={formData.handleBlur}
                        />
                        
                        {
                            formData.touched.full_name &&  formData.errors.full_name  ? <InfoCircle size="15" className='icon' color="red" /> : null
                        }
                        {
                            formData.touched.full_name &&  formData.errors.full_name ? <small className='error'>{formData.errors.full_name}  </small> : null
                        }
                  </motion.div>
                  
                  <motion.div variants={inputMotion} className="contact-fields">
                    <label 
                              htmlFor="Email Address"></label>
                          <input 
                              type="email" 
                              name='email'            
                              placeholder='Email Address' 
                              onChange={formData.handleChange}    
                              value={formData.values.email}
                              onBlur={formData.handleBlur}
                          />
                          
                          {
                              formData.touched.email &&  formData.errors.email  ? <InfoCircle size="15" className='icon' color="red" /> : null
                          }
                          {
                              formData.touched.email &&  formData.errors.email ? <small className='error'>{formData.errors.email}  </small> : null
                          }
                  </motion.div>

                  <motion.div variants={inputMotion} className="contact-fields">
                      <label 
                              htmlFor="phone number"></label>
                          <input 
                              type="text" 
                              name='phone' 
                              placeholder='Phone Number'
                              onChange={formData.handleChange}    
                              value={formData.values.phone}
                              onBlur={formData.handleBlur}
                          />
                          {
                              formData.touched.phone &&  formData.errors.phone  ? <InfoCircle size="15" className='icon' color="red" /> : null
                          }
                              
                          {
                              formData.touched.phone &&  formData.errors.phone ? <small className='error'>{formData.errors.phone}  </small> : null
                          }
                  </motion.div>

                



                  <motion.div  variants={inputMotion}  className="contact-fields">
                     <label 
                          htmlFor="message"></label>
                      <textarea 
                          name="message" 
                          id="message" 
                          cols="30" 
                          rows="10" 
                          placeholder='Message'
                          onChange={formData.handleChange}    
                          value={formData.values.message}
                          onBlur={formData.handleBlur}
                      >

                      </textarea>
                      
                      {
                          formData.touched.message &&  formData.errors.message  ? <InfoCircle size="15" className='icon' color="red" /> : null
                      }
                      {
                          formData.touched.message &&  formData.errors.message ? <small className='error'>{formData.errors.message}  </small> : null
                      }
                  </motion.div>


                  <motion.div variants={inputMotion} className="form-buttons">
                      <button type='submit' className='btn contact-btn'>Send Message</button>
                      
                  </motion.div>



              </motion.form>

              <Toaster />
          </motion.div>

        </div>

    <div className="footer" id='footer' onClick={()=>setOpenNav(true)}>
        <div className="footer-container">
           
            <div className="footer-grid">
                <div className="footer-content">
                   
                    <img src="images/large-logo.svg" alt="" />

                    <div>

                        <p>
                            {
                                readMore ? FooterText : `${FooterText.substring(0,150)}....`
                                
                            }

                            <button className='btn3' onClick={()=>{setReadMore(!readMore)}}>
                                {
                                    readMore ? "Show less" : "Read more"
                                }
                            </button>
                        </p>

                    </div>
                    
                  
                    <div className="socials">
                        <a href="" target={'blank'}>
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/Usecured_" target={'blank'}>
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://mobile.twitter.com/U_secured" target={'blank'}>
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/u-secured-750b1a237" target={'blank'}>
                        <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </div>
                </div>
                <div className="others">
                    <div className="col-3">

                        <div className="each">
                            <h3>Company</h3>
                            <a href="#about">About Us</a>
                            <a href="">FAQs</a>
                        </div>
                        <div className="each">
                            <h3>Legal</h3>
                            <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                        </div>
                        {/* <div className="each">
                            <h3>Contact Us</h3>
                            <div className="flex">
                                <a href="">Tel</a>
                                <p className="color">+234 916 1661 731</p>
                            </div>
                            <div className="flex">
                                <a href="">Mail</a>
                                <p className="color email">usecured.safety.ng@outlook.com</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

            <small className="muted end">&copy;2022 U-Secured, All Rights Reserved</small>
        </div>


    </div>

      </div>

    </motion.div>
  )
}

export default ContactUs