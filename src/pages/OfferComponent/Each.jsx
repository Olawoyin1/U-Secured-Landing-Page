import React from 'react'
import { motion } from 'framer-motion'

const Each = ({classlist, large_screen, small_screen, title,content}) => {

    const [readMore, setReadMore] = React.useState(false)

    const offerVariant = {
        initial : {
          y : -10,
          opacity : 0 
        },
        animate : {
          y : 0,
          opacity : 1,
          transition : {
            type : "spring",
            duration: 1.5,
            
            stifness : 150,
            bounce : 100
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
                    variants={offerVariant}
                    initial="initial"
                    whileInView="animate"
                >
                    <h2 className="col-headings">{title}</h2>
                    <p> 
                           {
                            readMore ? content : `${content.substring(0,200)}...`
                           }

                            <button className='btn3' onClick={()=>{setReadMore(!readMore)}}>
                                {
                                    readMore ? "Show less" : "Read more"
                                }
                            </button>
                        </p>
                </motion.div>
            </motion.div>

  )
}

export default Each