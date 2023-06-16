import React, { useEffect, useState } from 'react'
import Review from '../Componentes/Review'
import reviews from "../assets/review.json"
import Axios from 'axios';

import "./Reviews.css"
import Qualification from '../Componentes/Qualification'
const Reviews = () => {

  const [reseña,setReseña] = useState([]);

  const get_reseña = ()=>{
    Axios.get("http://localhost:5172/reviews").then((response)=>{
      setReseña(response.data);
    });
  }

  useEffect(()=>{
    get_reseña();
  })

  return (
    <div>
      <div className='reviews-container'>
        <div className="title"><span>Deje su Comentario</span></div>
        <div className="comments">
          {
              reseña.map((review,key) => {
                  return <Review imgsrc={review.imgsrc} user={review.username} description={review.descripcion} date={review.fecha} qualification={review.puntuacion} key={review.id}/>
              })
          }
        </div>
      </div>
      <Qualification/>
    </div>
    
  )
}

export default Reviews