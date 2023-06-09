import React from 'react'
import { Link } from "react-router-dom";
class Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        nombre:"",
        correo:""
     }
     cambioValor =(e) =>{ 
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({ state});
        
    }

    enviarDatos =(e) =>{ 
        e.preventDefault();
        console.log("Formulario enviado....");

        const{nombre,correo}=this.state;
        console.log(nombre);
        console.log(correo);
        var datosEnviar={nombre:nombre, correo:correo}



        fetch("http://localhost/empleados/?insertar=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
        .then(respuesta=> respuesta.json())
        .then((datosRespuesta)=>{
               console.log(datosRespuesta);
               this.props.history.push("/");
               
            } )
        .catch(console.log)

    }
    render() { 
        const{nombre,correo}=this.state;

        return (  
            <div className="card">
                <div class="card-header">
                    Reservas
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div class="form-group">
                          <label htmlfor="">Nombre</label>
                          <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" class="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" class="text-muted">Escribe tu nombre</small>
                        </div>

                        <div class="form-group">
                          <label htmlfor="">Correo</label>
                          <input type="text" name="correo" onChange={this.cambioValor} value={correo} id="correo" class="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" class="text-muted">Escribe tu correo</small>
                        </div>
                        <div class="btn-group" role="group" aria-label="">
                            <button type="submit" class="btn btn-success">Agregar nueva reserva</button>
                            <Link to={"/"} class="btn btn-primary">Cancelar</Link>
                           
                        </div>

                        
                    </form>
                    
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
        );
    }
}
 
export default Crear;