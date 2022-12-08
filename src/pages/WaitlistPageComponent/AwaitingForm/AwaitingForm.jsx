import React, {useState} from 'react'
import "./await.css"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Toaster, toast } from 'react-hot-toast';
import { Grammerly, InfoCircle, Sms } from 'iconsax-react'
import { useFormik } from 'formik';
import  * as Yup from "yup"
import { HiExclamationCircle } from 'react-icons/hi';

const AwaitingForm = () => {

    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const initialValues = {
        first_name : "",
        last_name : "",
        email : "",
        state : "",
        // countryCode : "+234",
        phone : ""
    }

    const onSubmit =async (values, {resetForm}) =>{
        if(validationSchema){
            
            console.log(values);
            resetForm({ values: " "})

            toast.success("You've successfully joined the list")


            const result =  await fetch("https://u-secured.herokuapp.com/api/v1/users/list", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),

            
            })

            const resultInJson = await result.json()
            console.log(resultInJson);
                
            }

            return { status, message };

    }

    const validationSchema = Yup.object({
        first_name: Yup.string().required('Firstname is required'),
        last_name : Yup.string().required("Lastname is required"),
        email : Yup.string().email("Invalid email format").required("Email is required"),
        state : Yup.string().required("Please select your state"),
        // phone : Yup.string().required("Phone is required")
        phone :  Yup.string()
            .required("Phone is required")
            .min(10, 'at least 10 characters')
            .matches(/[0-9]/, 'only numbers are allowed')
    })

   
    
    
    const formData = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    
    // console.log(formData.errors);

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



  return (
    <div className='awaiting-list'>
        <div className="container await-container">
       
            <div className="col-2">

                <div className="await-image">
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
                                    value={formData.values.state}
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