import React from 'react'
import Review from '../Componentes/Review'
import reviews from "../assets/review.json"

import "./Reviews.css"
import Qualification from '../Componentes/Qualification'
const Reviews = () => {
  return (
    <div>
      <div className='reviews-container'>
        <div className="title"><span>Deje su Comentario</span></div>
        <div className="comments">
          {
              reviews.map((review) => {
                  return <Review imgsrc={review.imgsrc} user={review.user} description={review.description} date={review.date} qualification={review.qualification} key={review.id}/>
              })
          }
        </div>
      </div>
      <Qualification/>
    </div>
    
  )
}

export default Reviews