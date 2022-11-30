import React from 'react'
import "./await.css"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Toaster, toast } from 'react-hot-toast';
import { Grammerly, Sms } from 'iconsax-react'


const AwaitingForm = () => {

    const [formData,setFormData] = React.useState(
        {
            firstname : "",
            email : "",
            state : "",
            countryCode : "",
            phone : ""
        }
    )


    

    function handleChange(e){
        
     


        const {name, value, type, checked} = e.target
        setFormData(prevState=>{
            return {
                ...prevState,
                [name] : type ==  "checkbox" ? checked : value 
            }
        })
        
        
        

    }
    


    const submitData = (e) => {
        e.preventDefault();
        console.log(formData);
        const canSave = Boolean(formData.firstname) && Boolean(formData.email) && Boolean(formData.phone) && Boolean(formData.state) 
        
        
        if(canSave){
            toast.success("You've successfully joined the Waiting list")

        }else{

            toast.error("Please fill all fields")
        }
    }

    const States = [
        "Osun",
        "Abuja",
        "Kano",
        "Osun",
        "Osun",
        "Lagos"
    ]
  
    const phoneOpt = [
        "+234",
        "+233",
        "+334",
        "+24",
        "+134",
        "+44",
        "+34",
        "+204",
        "+104",
        "+34",
        "+19",
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
                <form action="">
                        <h3>Enter your details below</h3>

                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='First name'
                                onChange={handleChange}    
                                name="firstname"
                                value={formData.firstname}
                            />
                            <Grammerly 
                                size="20" 
                                className='icon'
                                color="#444"
                            />
                        </div>

                        <div className="input-field">
                            <input
                                type="text" 
                                placeholder='E-mail address' 
                                onChange={handleChange}    
                                name="email"
                                value={formData.email}
                            />
                            <Sms 
                                size="20" 
                                className='icon'
                                color="#444"
                            />
                            
                        
                        </div>

                        <div className="input-field">
                            <div className="select">
                                <select 
                                    name="state" 
                                    id="state"
                                    onChange={handleChange}
                                >
                                    <option value="">State of residence</option>
                                    {
                                        States.map(state => <option value={state}>{state}</option>)
                                    }
                                    
                                </select>
                                
                            </div>

                        </div>

                        <div className="input-flex">
                            <div className="select">

                                <select 
                                    name="countryCode" 
                                    id="countryCode"
                                    onChange={handleChange}
                                >
                                    {
                                        phoneOpt.map(data=> <option value={data}>{data}</option>)
                                    }
                                    
                                </select>
                                
                            </div>
                        
                            
                            <input 
                                type="text" 
                                placeholder='000 000 0000' 
                                onChange={handleChange}    
                                name="phone"
                                value={formData.phone}
                            />
                        
                        </div>

                        <div className="form-buttons">
                            <button className='btn btn4'>Add referral code</button>
                            <button 
                                className='btn'
                                onClick={submitData}
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