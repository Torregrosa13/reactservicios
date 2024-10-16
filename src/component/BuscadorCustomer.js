import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';

export default class BuscadorCustomer extends Component {

    urlApi = Global.urlCustomers;
    cajaId = React.createRef();

    state = {
        customer: null
    }

    buscarCustomer = (e) =>{
        e.preventDefault();
        let idCustomer = this.cajaId.current.value;
        var request = "customers/" + idCustomer + ".json";
        axios.get(this.urlApi + request).then(response =>{
            console.log("Leyendo servicio");
            this.setState({
                customer: response.data.customer
            })
            
        })
    }

    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form>
                    <h2>Introduzca el ID</h2>
                    <input type='text' ref={this.cajaId} />
                    <button onClick={this.buscarCustomer}>Buscar Customer</button>
                </form>
                {
                    this.state.customer &&
                    (<ul>
                        <li>Cliente: {this.state.customer.contactName}</li>
                        <li>Empresa: {this.state.customer.companyName}</li>
                        <li>Puesto: {this.state.customer.contactTitle}</li>
                        <li>Ciudad: {this.state.customer.city}</li>
                    </ul>)

                }
            </div>
        )
    }
}
