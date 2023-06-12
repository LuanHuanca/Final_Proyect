import React from 'react'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import State from '../Componentes/State'
import DishCard from '../Componentes/DishCard'
import dishes from "../assets/dishes.json"
import { Icon } from '@iconify/react'

const Home = () => {
  return (
    <div className='home-container'>
      <p>TIPO DE RESERVA</p>
      <NavLink to={"/special/reserve"}><Button name="Especial"/></NavLink>
      <NavLink to={"/general/reserve"}><Button name="General"/></NavLink>
      <div className='options-bar'>
        <State state="Menu"/>
        <State state="Ubicacion"/>
        <State state="Contactos"/>
      </div>
       <div className="menu">
        {
        dishes.map((dish) => {
            return <DishCard imgsrc={dish.imgsrc} title={dish.title} description={dish.description} price={dish.price} key={dish.id}/>
        })
      }
      </div>
{/*       <div className="ubicacion">
        <img src="../public/static/image/Mapa.jpg" alt="" />
        <a href="https://goo.gl/maps/wQv363EdA8Hw3oNP8"><span to={"https://goo.gl/maps/wQv363EdA8Hw3oNP8"}>Av. Arce #2549, La Paz, Bolivia</span></a>
      </div>  */}
{/*       <div className="contactos">
        <div><Icon icon={"mdi:clock"}/><span>08-00 a 22-00, Todos los dias de la semana</span></div>
        <div><Icon icon={"ic:baseline-phone"}/><span>2 2424188</span></div>
        <div><Icon icon={"uiw:mail"}/><span>restauranteluquing@gmail.com</span></div>
        <div><Icon icon={"material-symbols:star"}/><span>Calificacion - 3,9 (317 opiniones)</span></div>
      </div> */}
    </div>
  )
}

export default Home