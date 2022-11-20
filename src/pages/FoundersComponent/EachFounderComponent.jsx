import React from 'react'
import "./style.css"

const EachFounderComponent = ({name,position,image}) => {

    const styles = {
        borderRadius : "10px"
    }


  return (
    <div className="f-flex">
        <div className="f-image">
            <img src={image} style={styles} alt="" />
        </div>
        <div className="f-details">
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    </div>
  )
}

export default EachFounderComponent