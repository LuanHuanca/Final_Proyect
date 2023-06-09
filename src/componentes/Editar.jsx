import React from 'react'

class Editar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        datosCargados:false, 
        reserva:[]
        
     }
     componentDidMount(){
        /*console.log(this.props.match.params.id)*/
        fetch("http://localhost/empleados/?consultar=")
        .then(respuesta=> respuesta.json())
        .then((datosRespuesta)=>{
               console.log("=>"+datosRespuesta);
               this.setState({ 
                datosCargados:true, 
                reserva:datosRespuesta[0]
            } )
            } )
        .catch(console.log)
    }
   
   
    
    render() { 
        const{datosCargados, reserva}=this.state
        return ( 
        <div class="card">
            <div class="card-header">
                Editar reservas
            </div>
            <div class="card-body">
                
                
             
                
            </div>
            <div class="card-footer text-muted">
                
            </div>
        </div>);
    }
}
 
export default Editar;