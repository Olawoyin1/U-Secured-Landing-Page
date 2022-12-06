import React from 'react'
import { motion } from 'framer-motion'

const Each = ({classlist, large_screen, small_screen, title,content}) => {

    const [readMore, setReadMore] = React.useState(false)

    const slideUp = {
        initial : {
          y : -100,
          opacity : 0 
        },
        animate : {
          y : 0,
          opacity : 1,
          transition : {
            type : "spring",
            
            stifness : 150,
            bounce : 100
          }
        }
      }

      const offerVariant = {
        initial : {
          x : "0",
        },
        animate : {
          x : 0,
          transition : {
            duration: 0.5, 
            type: "spring",
            when : "beforeChildren" ,
            staggerChildren : 1
          }
        }
      }

  return (
         <motion.div className={classlist}>
                <div className="col-image">
                    <motion.img 
                        className='large-screen' 
                        src={large_screen} 
                        alt="" 

                    />
                    <img className='mobile-screen' src={small_screen}alt="" />
                </div>
                <motion.div 
                    className="col-content"
                    
                >
                    <h2 className="col-headings">{title}</h2>
                    <motion.p ani> 
                           {
                            readMore ? content : `${content.substring(0,200)}...`
                           }

                            <button className='btn3' onClick={()=>{setReadMore(!readMore)}}>
                                {
                                    readMore ? "Show less" : "Read more"
                                }
                            </button>
                        </motion.p>
                </motion.div>
            </motion.div>

  )
}

export default Each