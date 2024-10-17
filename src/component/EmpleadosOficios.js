import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'



export default class EmpleadosOficios extends Component {

    cajaOficio = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;

    state = {
        empleados: [],
        oficios: [],
        empleadosOficio: []
    }

    mostrarEmpleados = (e) => {
        e.preventDefault();
        var oficioSeleccionado = this.cajaOficio.current.value;
        var request = "api/Empleados/EmpleadosOficio/" + oficioSeleccionado;
        axios.get(this.urlEmpleados + request).then(response=>{
            this.setState({
                empleadosOficio: response.data
            })
        })
    }

    selectorOficio = () =>{
        var request = "api/Empleados"
        axios.get(this.urlEmpleados + request).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.selectorOficio();
    }

    render() {
        return (
            <div>
                <h1>Empleados Oficios</h1>
                <form>
                    <label>Selecciona un Oficio</label>
                    <select ref={this.cajaOficio}>
                        {
                            this.state.empleados.map((empleado, index) => {
                                return (<option value={empleado.oficio} key={index}>{empleado.oficio}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.mostrarEmpleados}>Buscar Oficio</button>
                </form>
                <ul>
                        {
                            this.state.empleadosOficio.map((empleado, index) =>{
                                return (<li key={index}>{empleado.apellido} - {empleado.oficio}</li>)
                            })
                        }
                </ul>
            </div>
        )
    }
}
