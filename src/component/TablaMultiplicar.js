import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state = {
        tabla: []
    }

    generarTabla = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        for (var i = 1; i <= 10; i++) {
            var operacion = numero * i;
            aux.push(operacion);
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTabla();
    }

    render() {
        return (
            <div>
                <h1>Tabla Multiplicar Rutas</h1>
                <h3>Número: {this.props.numero}</h3>
                <ul>
                    {
                        this.state.tabla.map((numero, index) =>{
                            return(<li key={index}>{numero}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
