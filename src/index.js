import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './component/ServicioCustomers';
import BuscadorCustomer from './component/BuscadorCustomer';
import BuscadorCoches from './component/BuscadorCoches';
import DepartamentosEmpleados from './component/DepartamentosEmpleados';
import EmpleadosOficios from './component/EmpleadosOficios';
import Departamentos from './component/MaestroDetalle/Departamentos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Departamentos />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
