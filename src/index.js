import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Outlet, Link, NavLink} from 'react-router-dom';
//import Comments from "./Comments";
//import RestUsers from "./RestUsers";
//import RouteApp from "./RouteApp";
import FormExample from "./FormExample";



const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {
    firstName: 'Marianna',
    lastName: 'Nikonova'
}

root.render(
        <FormExample user={user}/>
);


reportWebVitals();
