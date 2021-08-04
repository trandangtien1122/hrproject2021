import React from 'react'
import ReactDOM from 'react-dom';
import './Semantic/semantic.min.css'
import './style.css'



function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";

    }
}

window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//
const Topbuton =(props) => {
    return (
        <div className='ui grid '>
            <div className='column row'>
                <div className='right floated column'>
                    <button className='ui teal button' onClick={topFunction}
                            id="myBtn"><i className='ui arrow alternate circle up icon'></i>Home</button>
                </div>
            </div>
        </div>
    )
}

export default Topbuton