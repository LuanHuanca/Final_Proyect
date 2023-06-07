import React from 'react'
import Review from '../Componentes/Review'
import reviews from "../assets/review.json"

import "./Reviews.css"

const Reviews = () => {
  return (
    <div className='reviews-container'>
        <div className="title"><span>Deje su Comentario</span></div>
        {
            reviews.map((review) => {
                return <Review imgsrc={review.imgsrc} user={review.user} description={review.description} date={review.date} key={review.id}/>
            })
        }
    </div>
  )
}

export default Reviews