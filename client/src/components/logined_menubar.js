import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import logo from "./BK-plant-logo.png";
import Login from "./login";
import App from "../App";
import Main_login from "./main_login";

import lotus_logo from './lotus_logo.webp'

function turn_on_search() {
    var mini_search_bar = document.getElementById("mini_search_bar");
    mini_search_bar.style.display = 'none';

    var wide_search_bar = document.getElementById("wide_search_bar");
    wide_search_bar.style.display = 'inline-block'
}

function turn_off_search() {
    var wide_search_bar = document.getElementById("wide_search_bar");
    wide_search_bar.style.display = 'none';

    var mini_search_bar = document.getElementById("mini_search_bar");
    mini_search_bar.style.display = 'inline-block';
}

function Logout(){
    ReactDOM.render(<App/>, document.getElementById("root"))
}

function Main_login_refresh(){
    ReactDOM.render(<Main_login/>, document.getElementById("root"))
}

function Logined_Menubar(props) {
    return (
        <div className="ui huge fixed top teal inverted menu">
            <div className='item'>
                <img className='ui mini circular right spaced image' src={lotus_logo}/>
            </div>
            <div className='ui  item' >
                <a href="#" onClick={Main_login_refresh}> Home </a>
            </div>
            <div className='ui  item'>
                My Info
            </div>
            <div className='ui  item'>
                People
            </div>
            <div className='right menu'>
                <div className='item' style={{display: "none"}} id="wide_search_bar">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type='text'></input>
                        </div>
                        <a href='#' onClick={turn_off_search}>
                            <i className="search icon"></i>
                        </a>
                        <div className="results"></div>
                    </div>
                </div>
                <a className='item' href='#' id='mini_search_bar' onClick={turn_on_search}><i
                    className='search icon'></i></a>
                <div className='ui simple dropdown item'>
                    <img className='ui mini spaced circular image' src={props.image_log}/>
                    <div className=' vertical menu'>
                        <a href='#' className='item'>
                            <i className="question circle outline icon"></i>
                            Help Center
                        </a>
                        <a href='#' className='item'>
                            <i className="edit outline icon"></i>
                            Account Settings
                        </a>
                        <a href='#' className='item'>
                            <i className="keyboard icon"></i>
                            Change Password
                        </a>
                        <a href='#' className='item' onClick={Logout}>
                            <i className="sign-out icon"></i>
                            Log Out

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Logined_Menubar;
