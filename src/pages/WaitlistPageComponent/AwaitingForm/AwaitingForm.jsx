import React, {useState} from 'react'
import "./await.css"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Toaster, toast } from 'react-hot-toast';
import { Flash, Grammerly, InfoCircle, Sms } from 'iconsax-react'
import { useFormik } from 'formik';
import  * as Yup from "yup"
import { HiExclamationCircle } from 'react-icons/hi';
import Loading from '../../Loading';
import { motion } from "framer-motion"

const AwaitingForm = ({openNav, setOpenNav}) => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const initialValues = {
        first_name : "",
        last_name : "",
        email : "",
        state : "",
        phone : "",
        referral : ""
    }

    const onSubmit =async (values, {resetForm}) =>{
        if(validationSchema){

            setLoading(true)

            const result =  await fetch("https://u-secured.herokuapp.com/api/v1/users/list", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),            
            })
            .then((response) => {
             return response
              }).then(data=>{
                // guard clause
                setLoading(false)
               if(data.status===409){
                return toast.error(`you already joined the wait list with ${values.email} !`)
               }
               resetForm({ values: ""})
                return toast.success('you successfully joined the wait list')
              })
              .catch((err) => {
                return
              });

        }

        console.log(values);
    }

    const validationSchema = Yup.object({
        first_name: Yup.string().required('Firstname is required'),
        last_name : Yup.string().required("Lastname is required"),
        email : Yup.string().email("Invalid email format").required("Email is required"),
        state : Yup.string().required("Please select your state"),
        phone : Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('phone number is required'),
    })

   
    
    
    const formData = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    const States =[
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ]
  
    const phoneOpt = [
        "+234",
    ]

    const styles = {
        minHeight : "100vh",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        left: 0,
        top: 0,
    }
    
    const variant = {
        animate : {
            x : [5, 40],
            transition : {
                x : {
                    yoyo : "Infinity",
                    duration : 0.5,
            },
            y : {
                yoyo : "Infinity",
                duration : 0.25
               }
            }
           
        }
            
    }
    
    
    const variant2 = {
        animate : {
            x : [40, 5],
            transition : {
                x : {
                    yoyo : "Infinity",
                    duration : 0.5,
                    // staggerChildren : 1.4
            },
            y : {
                yoyo : "Infinity",
                duration : 0.25
               }
            }
           
        }
            
    }

 



  return (
    <div className='awaiting-list' onClick={()=>setOpenNav(true)}>

        {/* LOADING WHEN FORM IS SUBMITTED */}

        {
            loading ? 
            <div className="loading">
                <div style={styles}>
                
                    <motion.img src="images/mobile-logo.svg"  width="30px" alt="" />
                    
                    <div>
                        <motion.div
                            className='long'
                            variants={variant}
                            animate="animate"
                        ></motion.div>
                        <motion.div
                            className='long2'
                            variants={variant2}
                            animate="animate"
                        ></motion.div>

                    </div>
                </div>
             </div>
             :
             null
        }
        
        {/* LOADING DIV ENDS HERE */}





        <div className="container await-container">
       
            <div className="col-2">

                <div className="col-image waitlist-image">
                    <img className='large-screen' src="images/awaiting-large.svg" alt="" />
                    <img className='mobile-screen' src="images/awaiting-mobile.svg" alt="" />
                </div>

                <div className="col-content">


                {/* FORM DAT STARTS HERE */}

                <form action="" method='POST' onSubmit={formData.handleSubmit}>
                        <h3>Enter your details below</h3>

                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='First name'
                                onChange={formData.handleChange}    
                                name="first_name"
                                value={formData.values.first_name}
                                onBlur={formData.handleBlur}
                            />
                            {
                                formData.touched.first_name &&  formData.errors.first_name? <InfoCircle size="20" className='icon' color="red" /> : <Grammerly size="20" className='icon' color="#444" />
                            }
                            
                            {
                                formData.touched.first_name &&  formData.errors.first_name ? <small className='error'>{formData.errors.first_name}</small> : null
                            }
                            
                        </div>
                        
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='Last name'
                                onChange={formData.handleChange}    
                                name="last_name"
                                value={formData.values.last_name}
                                onBlur={formData.handleBlur}
                            />
                           {
                                formData.touched.last_name &&  formData.errors.last_name  ? <InfoCircle size="20" className='icon' color="red" /> : <Grammerly size="20" className='icon' color="#444" />
                            }
                            
                            {
                                formData.touched.last_name &&  formData.errors.last_name ? <small className='error'>{formData.errors.last_name} </small> : null
                            }
                            
                        </div>

                        <div className="input-field">
                            <input
                                type="text" 
                                placeholder='E-mail address' 
                                onChange={formData.handleChange}      
                                name="email"
                                value={formData.values.email}
                                onBlur={formData.handleBlur}
                            />
                            {
                                formData.touched.email &&  formData.errors.email  ? <InfoCircle size="20" className='icon' color="red" /> : <Sms size="20" className='icon' color="#444"  />
                            }
                            
                            
                            {
                                formData.touched.email &&  formData.errors.email ? <small className='error'>{formData.errors.email}  </small> : null
                            }
                        
                        </div>

                        <div className="input-field">
                            <div className="select">
                                <select 
                                    name="state" 
                                    id="state"
                                    onChange={formData.handleChange}   
                                    onBlur={formData.handleBlur}
                                >
                                    <option value="">State of residence</option>
                                    {
                                        States.map((state, index) => <option key={index} value={state}>{state}</option>)
                                    }
                                    
                                </select>
                            </div>
                            {
                                formData.touched.state &&  formData.errors.state ? <small className='error'>{formData.errors.state}  </small> : null
                            }

                        </div>

                        <div className="input-flex">
                            <div className="select">

                                <select 
                                    name="countryCode" 
                                    id="countryCode"
                                    onChange={formData.handleChange}   
                                    onBlur={formData.handleBlur}
                                >
                                    {
                                        phoneOpt.map((data, index)=> <option key={index} value={data}>{data}</option>)
                                    }
                                    
                                </select>
                                
                            </div>
                        
                            <div className='input-flex-input'>
                                <input 
                                    type="text" 
                                    placeholder='000 000 0000' 
                                    onChange={formData.handleChange}   
                                    name="phone"
                                    value={formData.values.phone}
                                    onBlur={formData.handleBlur}
                                />
                                {
                                    formData.touched.phone &&  formData.errors.phone ? <InfoCircle size="20" className='phone-icon' color="red" /> : null
                                }
                                
                                {
                                    formData.touched.phone &&  formData.errors.phone ? <small className='error'>{formData.errors.phone} </small> : null
                                }
                            
                            </div>

                            
                        </div>


                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='Add referral code (Optional)'
                                onChange={formData.handleChange}    
                                name="referral"
                                value={formData.values.referral}
                                onBlur={formData.handleBlur}
                            />
                         
                        </div>

                        <div className="form-buttons">
                        
                            <button 
                                className='btn'
                                type='submit'
                            >Join The Waitlist</button>
                        </div>



                    </form>

                    <Toaster />
                </div>

            </div>

        </div>

        </div>

  )
}

export default AwaitingForm