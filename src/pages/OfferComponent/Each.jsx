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
          duration : 0.6,
          ease : "easeInOut",
          when : "beforeChildren",
          staggerChildren : 0.2
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
      duration : 0.7,
      ease : "easeInOut",
    }
  }
}

    
   

  return (
        <motion.div 
          variants={childVar}
          initial="initial"
          whileInView="animate" 
          viewport={{once : true, }}  
          className={classlist}
         >
            <motion.div 
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
                    variants={mainChild}
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