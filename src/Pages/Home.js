import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import My_Card from '../components/card/Card.js';
import Header from '../components/header/Header';
import AddMovieFrom from "../components/form/AddMovieForm";
import AlertMessages from "../components/alert_messages/AlertMessages";

const Home = ({closeTheErrorMessage,error_alert,putDataToDB,titleChange,sub_titleChange,description_Change,img_pathChange,first_episodeChange,data,deleteFromDB}) =>{
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <AlertMessages closeTheErrorMessage={closeTheErrorMessage} HasErrorMessage={error_alert}/>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddMovieFrom putdatafunc={putDataToDB} titleChange={titleChange} sub_titleChange={sub_titleChange} descriptionChange={description_Change} img_pathChange={img_pathChange} first_episodeChange={first_episodeChange} />
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
        </div>
    );
};

export default Home;