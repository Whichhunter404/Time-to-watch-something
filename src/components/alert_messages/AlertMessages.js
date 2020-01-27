import React from 'react';
import {Alert} from "react-bootstrap";

const AlertMessages = ({closeTheErrorMessage,HasErrorMessage,closeTheSuccessMessage,HasTheSuccessMessage}) =>{
    if(HasErrorMessage) {
        return (
            <Alert variant="danger" onClose={closeTheErrorMessage} dismissible>
                <Alert.Heading>Hiányos fevitel</Alert.Heading>
                <p>
                    Kérlek egészítsd ki a beviteli adatokat!
                </p>
            </Alert>
        )
    }
    else if(HasTheSuccessMessage){
        return(
        <Alert variant="success" onClose={closeTheSuccessMessage} dismissible>
            <Alert.Heading>Sikeres esemény!</Alert.Heading>
            <p>
               Az ön által indított esemény sikeresen lezajlott.
            </p>
        </Alert>
        )
    }
    else{
        return(<div></div>);
    }
};

export default AlertMessages;