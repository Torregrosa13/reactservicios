import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import TablaMultiplicar from './TablaMultiplicar'

export default class Router extends Component {
  render() {

    function TablaMultiplicarElement(){
        //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS EN UNA RUTA
        //PARA SEPARAR PROPS DE PARAMS VOY A LLAMAR A NUESTRO PARAMETRO EN RUTA minumero
        var {minumero} = useParams();
        //DEVOLVEMOS EL COMPONENT TABLA MULTIPLICAR CON SUS PROPS DE LA VARIABLE numero
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
            {/*PARA LAS RUTAS QUE NO EXISTEN DEBEMOS USAR UN * DENTRO DEL PATH
            Y DEBE SER LA ÚLTIMA ETIQUETA DE <Routes> */}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
