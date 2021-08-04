import React from 'react'
import ReactDOM from 'react-dom';
import './Semantic/semantic.min.css'
import './style.css'
import logobk from './lotus_logo.webp'

const Main_hr = (props) => {
    return (
        <div className='ui grid container' id='main_root'>
            <div className='row view'>
                <div className="ten wide column">
                    <h1 className='font2'> HR Software with Heart</h1>
                    <h3 className='font_link'> Lotus HR is the complete HR software to help you grow your most important
                        asset—your people.
                        Save time across all your processes, from recruiting to offboarding, from time tracking
                        to payroll, and from performance to culture.
                        <br/>
                        See all the ways BambooHR sets you free to focus on your people.
                    </h3>
                    <div className="ui right labeled left icon input font_button">
                        <i className="email icon"></i>
                        <input type="text" placeholder="Send your email"></input>
                        <a className="ui tag label">
                            Contact With Us
                        </a>
                    </div>
                </div>
                <div className="six wide column main_show ">
                </div>
            </div>
            <div className='row'>
                <div className=" center aligned  column">
                    <h1 className='large font2'> All-In-One HR Software</h1>
                </div>
            </div>
            <div className='row'>
                <div className=" center aligned  column">
                    <h1 className='large '> Lotus HR is made for small and medium businesses <br/> and the people
                        who work in them—like you.
                    </h1>
                    <img src={logobk}/>
                </div>
            </div>
            <div className='row'>
                <div className='center aligned column'>
                    <div className="ui ">
                        <div className="ui divider"></div>

                    </div>
                </div>

            </div>
            <div className='row '>
                <div className='center aligned three wide column'>
                    <h2><a>Company</a></h2>
                    <h4><a> About us </a></h4>
                    <h4> Careers</h4>
                    <h4> Why Lotus HR</h4>
                    <h4> Blog</h4>
                    <h4> Contact us</h4>
                </div>
                <div className='center aligned three wide column'>
                    <h2></h2>
                    <h4> Customer</h4>
                    <h4> Event Calendar</h4>
                    <h4> HR Glossay</h4>
                    <h4> Small Business</h4>
                    <h4> HRIS</h4>
                </div>
                <div className='center aligned three wide column'>
                    <h2>Support</h2>
                    <h4> Resources</h4>
                    <h4> Webinars</h4>
                    <h4> Services</h4>
                    <h4>FAQ</h4>
                    <h4> API</h4>
                </div>
                <div className='center aligned three wide column'>
                    <h2> &#9;</h2>
                    <h4> Lotus HR</h4>
                    <h4> Login</h4>
                </div>
                <div className='center aligned four wide column'>
                    <h2>HR Insights delivered to your inbox.</h2>
                    <h4> Be first in line to register for events,
                        read exclusive interviews with HR experts,
                        and watch tutorials on how to up your HR game
                        every month. No spam, ever. Cross our hearts.
                    </h4>
                    <div className="ui right labeled left icon input ">
                        <i className="email icon"></i>
                        <input type="text" placeholder="your email"></input>
                        <a className="ui tag label">
                            Submit
                        </a>
                    </div>
                </div>
            </div>
            <div className='row background_color1'>
                <div className=" center aligned  column">
                    <button className="ui facebook button">
                        <i className="facebook icon"></i>
                        Facebook
                    </button>
                    <button className="ui twitter button">
                        <i className="twitter icon"></i>
                        Twitter
                    </button>
                    <button className="ui linkedin button">
                        <i className="linkedin icon"></i>
                        Linkedin
                    </button>
                    <button className="ui instagram button">
                        <i className="instagram icon"></i>
                        Instagram
                    </button>

                </div>
            </div>
            <div className='row background_color1'>
                <div className=" center aligned  column">
                    <h4>Lotus HR LLC. All Rights Reserved. Lotus® is a non-registered trademark of Lotus HR LLC</h4>
                </div>
            </div>

        </div>);
}

export default Main_hr;




