import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'
import lotus_logo from './lotus_logo.webp'

const Footer = (props)=>{
    return(
        <div className='ui'>
            <div className='ui grid'>
                <div className='section divider' ></div>
                <div className=' sixteen wide column center aligned'>
                    <h1 className='header'>
                        Lotus HR
                    </h1>
                </div>
                <div className='horizontal section divider'></div>
                <div className=' sixteen wide column center aligned'>
                    <img className='ui small centered image' src={lotus_logo} />
                </div>
            </div>
        </div>
    )
}

export default Footer
