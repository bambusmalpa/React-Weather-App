import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./style.css"

const initialData=JSON.parse(localStorage.getItem("initial"))



ReactDOM.render(<App localStorageCities={initialData}/>, document.getElementById('root'));


