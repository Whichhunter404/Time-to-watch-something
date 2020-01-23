import React from 'react';
import {Container, Row, Col, Button, Jumbotron} from 'react-bootstrap';
import My_Card from '../components/card/Card.js';

const Home = ({
                  data,
                  deleteFromDB}) =>{
    return (
        <div className="App">
            <Container>
                <Row>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Sorozatok "hideg" napokra</h1>
                            <p>
                                Csak pár perc erejéig hagyj higyem azt, hogy minden ily könnyű és egyszerű mint ezekben a gyerek sorozatokban.
                                Talán megértem miket és miért gondoltam úgy gyereként.
                            </p>
                        </Container>
                    </Jumbotron>
                </Row>
                <Row>
                    <Col>
                        {data.length <= 0
                            ? 'Semmilyen cím nincs még bent!'
                            : data.map((dat) => (
                                <div>
                                    <My_Card dat={dat} />
                                </div>
                            ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;