import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Empleados extends Component {

    idDepartamento = this.props.iddepartamento;
    urlEmpleados = Global.urlApiEmpleados;

    state = {
        empleados: [],
        texto: ""
    }

    mostrarEmpleados = () => {
        console.log(this.idDepartamento);
        var request = "api/Empleados/EmpleadosDepartamento/" + this.idDepartamento;
        axios.get(this.urlEmpleados + request).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })

    }

    componentDidMount = () => {
        this.mostrarEmpleados();

    }

    componentDidUpdate = (oldProps) => {
        console.log("Old props: " + oldProps.iddepartamento);
        console.log("Current props: " + this.props.iddepartamento);
        if (oldProps.iddepartamento != this.props.iddepartamento) {
            this.mostrarEmpleados();
        }
    }


    render() {
        return (
            <div>
                <h3>Empleados {this.props.iddepartamento}</h3>
                <h2>{this.state.texto}</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((empleado, index) => {
                                return (<tr key={index}>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.departamento}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
