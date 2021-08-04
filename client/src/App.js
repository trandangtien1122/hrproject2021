import logo from './components/BK-plant-logo.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './Style/Semantic/semantic.css'
import Main_hr from './components/main'
import Menubar from "./components/Menubar";
import CovidMap from "./components/covid19";
import './components/style.css'
import Login from'./components/login'
import {render} from "@testing-library/react";
import { Button, Icon, Modal } from 'semantic-ui-react'
import Topbuton from "./components/top_button";
document.body.style.backgroundColor = '#FFF5EE'

function App() {
    return (
        <div className='ui'>
            <Menubar />
            <Main_hr />
            <div className='ui divider'></div>
            <h1 className='ui wide centered header '> COVID 19 STATUS </h1>
            <h2 className='ui wide centered header '> Follow 5K Messages to Protect Yourself </h2>
            <h3 className='ui wide centered header '> Facemask - Disinfection - Distance - No Gathering - Health declaration </h3>
            <div className='ui divider'></div>
            <div className='ui segments center'>
                <CovidMap />
            </div>
            <Topbuton/>
        </div>
    );
}


export default App;
