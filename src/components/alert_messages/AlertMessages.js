import React from 'react';
import {Alert} from "react-bootstrap";

const AlertMessages = ({closeTheErrorMessage,HasErrorMessage}) =>{
    if(HasErrorMessage) {
        return (
            <Alert variant="danger" onClose={closeTheErrorMessage} dismissible>
                <Alert.Heading>Hiányos fevitel</Alert.Heading>
                <p>
                    Kérlek egészítsd ki!
                </p>
            </Alert>
        )
    }
    else{
        return(<div></div>);
    }
};

export default AlertMessages;