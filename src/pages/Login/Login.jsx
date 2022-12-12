import { useFormik } from 'formik'
import React from 'react'
import './login.css'
import  * as Yup from "yup"
import { InfoCircle, Sms } from 'iconsax-react'
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {

    const initialValues = {
        email : "",
        password : ""
    }

    const validationSchema = Yup.object({
        email : Yup.string().email("Invalid email format").required("Email is required"),
        password : Yup.string().required("Password is required"),
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
    <div className='login'>
        <div className="container login-container">



            {/* FORM FIELD STARTS HERE */}
            <div className="form-field">
                <form action=""  onSubmit={formData.handleSubmit}>

                    <h2>Admin Login</h2>
                    <p> Hey, Enter your details to sign in to your account</p>

                    <div className="input-field">
                        <input
                            type="email" 
                            placeholder='Enter your email' 
                            name="email"
                            onChange={formData.handleChange}      
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
                        <input
                            type="password" 
                            placeholder='Password' 
                            name="password"
                            onChange={formData.handleChange}      
                            value={formData.values.password}
                            onBlur={formData.handleBlur}
                        />
                        {
                            formData.touched.password &&  formData.errors.password  ? <InfoCircle size="20" className='icon' color="red" /> : <AiOutlineEyeInvisible size="20" className='icon' color="#444"  />
                        }
                        
                        
                        {
                            formData.touched.password &&  formData.errors.password ? <small className='error'>{formData.errors.password}  </small> : null
                        }
                        
                    </div>

                    <button className='btn btn4' type='submit'>Sign in</button>
                        
                </form>

            </div>
            {/* FORM FIELD ENDS HERE */}

            <p className='login-bottom'>©2022 U-secured, All Rights Reserved</p>

        </div>
    </div>
  )
}

export default Login