import React from 'react'
import "./Review.css"

const Review = ({imgsrc, user, description, date}) => {
  return (
      <div className="review-container">
        <img src={imgsrc} alt="" />
        <div className='review-container-content'>
          <span className='user'>{`@${user}`}</span>
          <span className='date'>{date}</span>
          <div className="description">
            {description}
          </div>
        </div>
      </div>
  )
}

export default Review