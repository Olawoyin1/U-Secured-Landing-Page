import React from 'react'
import "./contact.css"
import { motion, AnimatePresence } from "framer-motion"
import { useFormik } from 'formik';
import  * as Yup from "yup"
import { InfoCircle } from 'iconsax-react';



const Contact = ({modal, setModal}) => {

    const modalVar = {

        initial :{
            opacity: 0,
            scale: 0.5,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeOut",
                duration: 0.35,
            },
        },
        exit : {
            opacity: 0,
            scale: 0.75,
            transition: {
                ease: "easeIn",
                duration: 0.20,
            },
        }
    }


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


  return (
    
    <motion.div  className='modal-bg'>
        <motion.div variants={modalVar} initial="initial" animate="animate" exit={"exit"} className="modal-content">

            <button onClick={()=> setModal(false)} className='close-modal'>X</button>

            <h2>Contact Us</h2>
            <p>We are always available and ready to help you.</p>
            <form action="" onSubmit={formData.handleSubmit}>
                <div className="form-col-3">

                    <div className="form-fields">
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
                    </div>

                    <div className="form-fields">
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
                    </div>

                    <div className="form-fields">
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
                    </div>

                </div>

                <div className="form-fields">
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
                </div>

                <button type='submit' className='btn contact-btn'>Send Message</button>
            </form>
        </motion.div>
    </motion.div>
  )
}

export default Contact