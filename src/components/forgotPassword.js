import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {FormControl,InputGroup} from 'react-bootstrap';
import '../assets/css/ForgotPassword.css'

export default function ForgotPassword(){
    return(
        <div  className="forgotPassword_card">
            <Card >
                <Card.Body>
                    <Card.Title className="forgotPassword_card_title"><h1>Recover Password</h1></Card.Title>
                <hr></hr>
                <InputGroup className="forgotPassword_card_input">
                    <FormControl className="forgotPassword_card_input" placeholder="Email">
                    </FormControl>
                </InputGroup>
                <Button variant="primary">Submit</Button>
                </Card.Body>
                
            </Card>
        </div>
    );
}