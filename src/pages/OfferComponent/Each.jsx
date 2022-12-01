import React from 'react'

const Each = ({classlist, large_screen, small_screen, title,content}) => {

    const [readMore, setReadMore] = React.useState(false)

  return (
         <div className={classlist}>
                <div className="col-image">
                    <img className='large-screen' src={large_screen} alt="" />
                    <img className='mobile-screen' src={small_screen}alt="" />
                </div>
                <div className="col-content">
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
                </div>
            </div>

  )
}

export default Each