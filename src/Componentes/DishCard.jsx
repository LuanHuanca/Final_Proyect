import React from 'react'
import "./DishCard.css"

const DishCard = ({imgsrc, title, description, price}) => {
  return (
    <div className='dishcard-container'>
        <img src={imgsrc} alt="" />
        <div className='description'>
            <p>{title}</p>
            <span>{description}</span>
            <span className="price">{`Bs. ${price}`}</span>
        </div>
    </div>
  )
}

export default DishCard