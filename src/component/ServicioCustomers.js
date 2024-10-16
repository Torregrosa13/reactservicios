import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';


export default class ServicioCustomers extends Component {
    urlCustomers = Global.urlCustomers; 
    //NECESITAREMOS RECUPERAR LOS CLIENTES CON axios
    //LA PREGUNTA ES CÚANDO QUEREMOS HACERLO

    state = {
        customers : []
    }

    loadCustomers = () =>{
        let request = "customers.json";
        console.log("Antes del servivio");
        axios.get(this.urlCustomers + request).then(response =>{
            console.log("leyendo servicio");
            this.setState({
                customers: response.data.results                
            })
        })
        console.log("Después del servivio");
    }

    componentDidMount = () => {
        console.log("Creando componente");
        this.loadCustomers();
    }

  render() {
    return (
      <div>
        <h1>Servicio Customers</h1>
        
        <button onClick={this.loadCustomers}>Cargar Clientes</button>
        {
            this.state.customers.map((cliente, index) =>{
                return(<h3 style={{color:'blue'}} key={index}>{cliente.contactName}</h3>)
            })
        }
      </div>
    )
  }
}
