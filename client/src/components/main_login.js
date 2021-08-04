import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import Logined_Menubar from "./logined_menubar";
import Logined_Main from "./logined_main";

import logo_login from './avatar.jpg'
import top_button from "./top_button";
import Topbuton from "./top_button";
import Footer from "./login_footer";


const Main_login = (props) =>{
    return (
        <div className='ui grid'>
            <div className='row'>
                <div className='column'>
                    <Logined_Menubar image_log={logo_login}/>
                </div>
            </div>
            <div className="row divider"></div>
            <div className='row'>
                <div className='column'>
                    <Logined_Main image_log={logo_login}/>
                </div>
            </div>
            <div className="row divider"></div>

            <div className='row'>
                <div className='column'>
                    <Footer/>
                </div>
            </div>
            <Topbuton/>

        </div>
    )
}

export default Main_login