import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import logo from "./lotus_green.jpeg";
import Login from "./login";
import App from "../App";

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

const Menubar = (props) => {
    const [firstOpen, setFirstOpen] = React.useState(false)
    return (
        <div className="ui huge fixed top teal inverted menu">
            <div className='item'>
                <img src={logo}/>
            </div>
            <div className='ui simple dropdown item'>
                <a href=''> Home </a>
                <div className='menu'>
                    <div className='item'>Overview</div>
                    <div className='item'>People and Analytics</div>
                    <div className='item'>Hiring</div>
                    <div className='item'>Onboarding</div>
                </div>
            </div>
            <div className='ui simple dropdown item'>
                Resource
                <div className='menu'>
                    <div className='item'>Blog</div>
                    <div className='item'>Content Library</div>
                    <div className='item'>Webinar Library</div>
                    <div className='item'>Training</div>
                </div>
            </div>
            <div className='ui simple dropdown item'>
                About HR Lotus
                <div className='menu'>
                    <div className='item'>Our Story</div>
                    <div className='item'>Media</div>
                    <div className='item'>Event</div>
                    <div className='item'>Contact</div>
                </div>
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
                    <i className='user circle outline icon'></i>
                    <div className=' vertical menu'>
                        <div href='#' className='item' >
                            <Login />
                            {/*<i className="user circle outline icon"></i>*/}
                            {/*Login*/}
                        </div>
                        <a href='#' className='item'>
                            <i className="question circle outline icon"></i>
                            Help Center
                        </a>
                        <a href='#' className='item'>
                            <i className="address card circle outline icon"></i>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Menubar;
