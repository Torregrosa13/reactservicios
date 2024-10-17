import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class DepartamentosEmpleados extends Component {

    urlDepartamentos = Global.urlApiDepartamentos;
    urlEmpleados = Global.urlApiEmpleados;
    selectDepartamento = React.createRef();

    state = {
        empleados: [],
        departamentos:[]
    }

    buscarEmpleados = (e) =>{
        e.preventDefault();
        var idDepartamento = this.selectDepartamento.current.value;        
        var request = "/api/empleados/empleadosdepartamento/" + idDepartamento
        console.log(idDepartamento)
        axios.get(this.urlEmpleados + request).then(response =>{
            console.log("leyendo el departamento");
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentos = () =>{
        console.log("pre.servicio");
        axios.get(this.urlDepartamentos).then(response =>{
            console.log(response.data)
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Departamentos y Empleados</h1>
                <form>
                    <label>Selecciona Departamento</label>
                    <select ref={this.selectDepartamento}>
                        {
                            this.state.departamentos.map((departamento, index )=>{
                                return(<option value={departamento.Numero} key={index}>{departamento.Nombre}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
                </form>
                <ul>
                        {
                            this.state.empleados.map((empleado, index) =>{
                                return(<li key={index}>{empleado.apellido} - {empleado.oficio}</li>)
                            })
                        }
                </ul>
            </div>
        )
    }
}
