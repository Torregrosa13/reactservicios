import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';

export default class BuscadorCoches extends Component {

    cajaMarca = React.createRef();
    urlCoches = Global.urlCoches + "webresources/coches";

    state = {
        coches: []
    }

    mostrarCoches = () => {
        console.log("pre-servicio");
        axios.get(this.urlCoches).then(response => {
            console.log("en servicio");
            this.setState({
                coches: response.data
            })
        })
        console.log("post-servicio");
    }

    componentDidMount() {
        this.mostrarCoches()
    }

    filtarMarca = (e) => {
        e.preventDefault();
        var marca = this.cajaMarca.current.value;
        // var cochesFiltrados = [];
        // for (var car of this.state.coches) {
        //     if (marca == car.marca) {
        //         cochesFiltrados.push(car)
        //         console.log(cochesFiltrados)
        //     }
        // }
        //TENEMOS UN METODO DENTRO DE ARRAY QUE NOS PERMITE BUSCAR POR ALGUNA PROPIEDAD
        //Array.filter(objetoArray => objetoArrayPropiedad == valor);
        var cochesFiltrados = this.state.coches.filter(car => car.marca == marca);

        this.setState({
            coches : cochesFiltrados
        })
    }

    render() {
        return (
            <div>
                <h1>Buscador de Coches</h1>
                <form onSubmit={this.filtarMarca}>
                    <h3>Introduzca marca</h3>
                    <input type='text' ref={this.cajaMarca}></input>
                    <button>Buscar</button>
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Coche</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (<tr key={index}>
                                    <td>{coche.marca} {coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img width='300px' height='200px' src={coche.imagen}></img></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
