import React from 'react';
import  {Link} from 'react-router-dom'
import "./Listar.css"

class  Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        datosCargados:false,
        reservas:[]
    }

    borrarRegistros = (id)=>{
        console.log(id);
        

        fetch("http://localhost/empleados/?borrar="+id)
        .then(respuesta=> respuesta.json())
        .then((datosRespuesta)=>{
               console.log(datosRespuesta);
               this.cargarDatos();
            } )
        .catch(console.log)


    } 
    

    cargarDatos(){

        fetch("http://localhost/empleados/")
        .then(respuesta=> respuesta.json())
        .then((datosRespuesta)=>{
               console.log(datosRespuesta);
               this.setState({ datosCargados:true, reservas:datosRespuesta} )
            } )
        .catch(console.log)


    } 
    componentDidMount(){
        this.cargarDatos();


    } 
    render() { 
       const{datosCargados, reservas}=this.state
       
       if(!datosCargados){return(<div>Cargando...</div>);} 
       else{

        return (  
            
            <div class="card">
                <div class="card-header">
                   <Link type="button" class="btn btn-success" to= {"/crear"}>Agregar nueva reserva</Link>
                </div>
                <div class="card-body">
                    <th>Tu Lista de reservas</th>
                    <br></br>
                  <table className="table-container">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                    
                </tr>
               
            </thead>
            <tbody>
               {reservas.map(
                    (reserva)=>(
                <tr key={reserva.id}>
                    <td > {reserva.id} </td>
                    <td>{reserva.nombre}</td>
                    <td>{reserva.correo}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="">
                         
                          


                          <button type="button" class="btn btn-danger"
                          onClick={()=>this.borrarRegistros(reserva.id)}
                          >Borrar</button>
                           
                      </div>
                 
                    </td>
                </tr>

                    )
               )} 

                
                
            </tbody>
            
        
            
        </table> 
                </div>
                <div class="card-footer text-muted">

                </div>
            </div>

        );
        
        
        } 
    }
}
 
export default Listar;
