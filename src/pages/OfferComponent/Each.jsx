import React from 'react'
import { motion } from 'framer-motion'

const Each = ({classlist, large_screen, small_screen, title,content}) => {

    const [readMore, setReadMore] = React.useState(false)

    const childVar = {
      initial : {
        y : 100,
        opacity : 0
      },
      animate : {
        y : 0,
        opacity : 1,
        // rotate : [0 , 45 , -45, 0],
        transition : {
          duration : 0.3,
          delay : 0.,
          type : "spring",
          stiffness : 200,
          ease : "easeInOut",
          staggerChildren : 1
        }
      }
    }


    
const mainChild = {
  initial : {
    y : 100,
    opacity : 0
  },
  animate : {
    y : 0,
    opacity : 1,
    transition : {
      type : "spring",
      stifness : 200,
      bounce : 0.6,
      mass : 0.3
    }
  }
}

    
   

  return (
         <motion.div className={classlist}>
                <motion.div 
                  variants={childVar}
                  initial="initial"
                  whileInView="animate" 
                  viewport={{once : true, amount : 0.5}} 
                  className="col-image"
                  >
                  <motion.img 
                        className='large-screen' 
                        src={large_screen} 
                        alt="" 
                  />
                  <img className='mobile-screen' src={small_screen}alt="" />
                </motion.div>
                <motion.div 
                    className="col-content"
                    variants={childVar}
                    initial="initial"
                    whileInView="animate" 
                    viewport={{once : true, amount : 0.5}}
                >
                    <motion.h2 variants={mainChild}className="col-headings">{title}</motion.h2>
                    <motion.p layout variants={mainChild} > 
                      {
                        readMore ? content : `${content.substring(0,200)}...`
                      }

                      <motion.button  layout className='btn3' onClick={()=>{setReadMore(!readMore)}}>
                        {
                          readMore ? "Show less" : "Read more"
                        }
                      </motion.button>
                    </motion.p>
                </motion.div>
            </motion.div>

  )
}

export default Each