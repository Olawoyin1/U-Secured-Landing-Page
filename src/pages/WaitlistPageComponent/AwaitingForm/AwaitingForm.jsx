import React from 'react'
import "./await.css"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Toaster, toast } from 'react-hot-toast';
import { Grammerly, Sms } from 'iconsax-react'
import { useFormik } from 'formik';
import  * as Yup from "yup"

const AwaitingForm = () => {

    const initialValues = {
        firstname : "",
        lastname : "",
        email : "",
        state : "",
        countryCode : "+234",
        phone : ""
    }

    const onSubmit = values =>{
        console.log(values);
    }


    const validationSchema = Yup.object({
        firstname: Yup.string().required('Firstname is required'),
        lastname : Yup.string().required("Lastname is required"),
        email : Yup.string().email("Invalid email format").required("Email is required"),
        state : Yup.string().required("State is required"),
        // phone : Yup.string().required("Phone is required")
        phone : Yup.number("Phone must be a number")
            .required("Phone is required")
            .min(10)
            .positive("Negative values not allowed")
            .integer()
            .min(5, "Must be more than 5")
    })

   
    
    
    const formData = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    
    console.log(formData.errors);

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
       
            <div class="col-2">

                <div class="await-image">
                    <img className='large-screen' src="images/awaiting-large.svg" alt="" />
                    <img className='mobile-screen' src="images/awaiting-mobile.svg" alt="" />
                </div>

                <div class="col-content">


                {/* FORM DAT STARTS HERE */}

                <form action="" onSubmit={formData.handleSubmit}>
                        <h3>Enter your details below</h3>

                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='First name'
                                onChange={formData.handleChange}    
                                name="firstname"
                                value={formData.values.firstname}
                                onBlur={formData.handleBlur}
                            />
                            <Grammerly 
                                size="20" 
                                className='icon'
                                color="#444"
                            />
                            {
                                formData.touched.firstname &&  formData.errors.firstname ? <small className='error'>{formData.errors.firstname}  <i class="uil uil-exclamation-circle"></i></small> : null
                            }
                            
                        </div>
                        
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='Last name'
                                onChange={formData.handleChange}    
                                name="lastname"
                                value={formData.values.lastname}
                                onBlur={formData.handleBlur}
                            />
                            <Grammerly 
                                size="20" 
                                className='icon'
                                color="#444"
                            />
                            {
                                formData.touched.lastname &&  formData.errors.lastname ? <small className='error'>{formData.errors.lastname}  <i class="uil uil-exclamation-circle"></i></small> : null
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
                            <Sms 
                                size="20" 
                                className='icon'
                                color="#444"
                            />
                            {
                                formData.touched.email &&  formData.errors.email ? <small className='error'>{formData.errors.email}  <i class="uil uil-exclamation-circle"></i></small> : null
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
                                        States.map(state => <option value={state}>{state}</option>)
                                    }
                                    
                                </select>
                            </div>
                            {
                                formData.touched.state &&  formData.errors.state ? <small className='error'>{formData.errors.state}  <i class="uil uil-exclamation-circle"></i></small> : null
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
                                        phoneOpt.map(data=> <option value={data}>{data}</option>)
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
                                    formData.touched.phone &&  formData.errors.phone ? <small className='error'>{formData.errors.phone}  <i class="uil uil-exclamation-circle"></i></small> : null
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