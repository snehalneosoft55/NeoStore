import React from 'react';
import { Form } from 'react-bootstrap';
import '../assets/css/stylesheet.css'



export default function Inputs(props){
    return (
        
        
        <Form.Control 
            className="s"
            name={props.name}
            type={props.type} 
            placeholder={props.placeholder}
            onChange={props.handleChange}
            autoComplete="off"
            />
        
    );
}