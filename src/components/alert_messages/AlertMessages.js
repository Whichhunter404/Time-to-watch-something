import React from 'react';
import {Alert} from "react-bootstrap";

const AlertMessages = ({closeTheErrorMessage,HasErrorMessage,closeTheSuccessMessage,HasTheSuccessMessage}) =>{
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
    else if(HasTheSuccessMessage){
        return(
        <Alert variant="success" onClose={closeTheSuccessMessage} dismissible>
            <Alert.Heading>Sikeres felvétel!</Alert.Heading>
            <p>
                Adat feltöltve az adatbázisba
            </p>
        </Alert>
        )
    }
    else{
        return(<div></div>);
    }
};

export default AlertMessages;