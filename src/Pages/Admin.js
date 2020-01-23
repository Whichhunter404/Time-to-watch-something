import React from 'react';
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import AlertMessages from "../components/alert_messages/AlertMessages";
import Header from "../components/header/Header";
import AddMovieFrom from "../components/form/AddMovieForm";
import My_Card from "../components/card/Card";

const Admin = ({myChangeHandler,is_Admin,
                   loginAsAdmin,
                   closeTheErrorMessage,
                   error_alert,
                   closeTheSuccessMessage,
                   success_alert,
                   putDataToDB,
                   titleChange,
                   sub_titleChange,
                   descriptionChange,
                   img_pathChange,
                   first_episodeChange,
                   data,
                   state,
                   deleteFromDB}) =>{
    if(is_Admin){
        return(
            <Container>
                <Row>
                    <Col>
                        <AlertMessages closeTheErrorMessage={closeTheErrorMessage} HasErrorMessage={error_alert} closeTheSuccessMessage={closeTheSuccessMessage} HasTheSuccessMessage={success_alert}/>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddMovieFrom
                            putdatafunc={putDataToDB}
                            titleChange={titleChange}
                            sub_titleChange={sub_titleChange}
                            descriptionChange={descriptionChange}
                            img_pathChange={img_pathChange}
                            first_episodeChange={first_episodeChange}
                            state={state}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {data.length <= 0
                            ? 'Semmilyen cím nincs még bent!'
                            : data.map((dat) => (
                                <div>
                                    <My_Card dat={dat} />
                                    <Button variant="danger" onClick={() => deleteFromDB(dat.id)}>Törlés</Button>
                                </div>
                            ))}
                    </Col>
                </Row>
            </Container>
        )
    }
    else{
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default-4">Felhasználó név</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default-4"
                        name="username"
                        onChange={myChangeHandler}
                        placeholder="Felhasználónév"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default-4">Jelszó</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        name="password"
                        aria-describedby="inputGroup-sizing-default-4"
                        onChange={myChangeHandler}
                        placeholder="Jelszó..."
                    />
                </InputGroup>
                <Button
                    onClick={() => loginAsAdmin()}
                    variant="success"
                    size="lg"
                    block
                >
                    Bejelentkezés
                </Button>
            </div>
        )
    }
};
export default Admin;