import React from 'react'
import './star.css'

function Ratings({ratings}) {
  return (
    <div className="star-rating">
        {
            [...new Array(5)].map((_, index) => {
                index = index + 1
                return (
                    <span key={index} className={`star ${index <= ratings ? "on" : "off"}`}>&#9733;</span>
                )
            })
        }
    </div>
  )
}

export default Ratings