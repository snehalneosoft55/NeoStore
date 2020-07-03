import React from 'react';
import { Form } from 'react-bootstrap';



export default function Inputs(props){
    return (
        
        
        <Form.Control 
            
            name={props.name}
            type={props.type} 
            placeholder={props.placeholder}
            onChange={props.handleChange}
            autoComplete="off"
            required
            />
        
    );
}