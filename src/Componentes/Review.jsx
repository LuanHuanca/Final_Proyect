import React from 'react'
import "./Review.css"
import { Icon } from '@iconify/react'

const Review = ({imgsrc, user, description, date, qualification}) => {
  return (
      <div className="review-container">
        <img src={imgsrc} alt="" />
        <div className='review-container-content'>
          <span className='user'>{`@${user}`}</span>
          <div className='qualification'>
            <span>{`(${qualification})`}</span>
            <Icon icon={"material-symbols:star"}/>
        </div>
          <span className='date'>{date}</span>
          <div className="description">
            {description}
          </div>
        </div>
      </div>
  )
}

export default Review