import React from 'react'
import ReactDOM from 'react-dom';

import './Semantic/semantic.min.css'
import './style.css'

let content = ["Wellcome Tien Tran to HR Lotus", "Wellcome V.Anh Tran to HR Lotus"
    , "Wellcome Hoang to HR Lotus"]

function Flex_row(props){
    return (
        <>
            {props.contenter.map(content => (
                <tr>
                <td><a>{content}</a></td>
                </tr>
            ))}
        </>
    );
}





function Table_Info (props){
    return (
        <div className='ui container'>
            <table className="ui celled striped table">
                <thead>
                <tr>
                    <th>
                    What are happening at Lotus HR
                    </th>
                </tr>
                </thead>
                <tbody>
                    <Flex_row contenter={content}/>
                </tbody>
            </table>
        </div>
    )
}

export  default Table_Info