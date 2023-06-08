import React from "react";
import State from "../Componentes/State";
import InputContainer from "../Componentes/InputContainer";
import Button from "../Componentes/Button";
import { NavLink } from "react-router-dom";
import "./GenDetails.css";

function GenDetails() {
  return (
    <div>
      <div className="general-details-header">
        <State state="Ambiente" />
        <State state="Detalles" />
        <State state="Confirmacion" />
      </div>

      <div className="g-details">
        <InputContainer title={"Personas"} type={"number"} shadow={""} />
        <InputContainer title={"Hora"} type={"time"} shadow={""} />
        <InputContainer title={"Fecha"} type={"date"} shadow={""} />
      </div>
      
      <NavLink to={"/gconfirm"} ><Button name="Aceptar"/></NavLink>
    </div>
  );
}

export default GenDetails;
