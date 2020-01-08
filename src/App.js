import React, {Component} from 'react';
import My_Card from './components/card/Card.js';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button } from 'react-bootstrap';
import './App.css';
import Mongodb from "./Mongodb";
import axios from "axios";
import divWithClassName from "react-bootstrap/esm/divWithClassName";
import AddMovieFrom from "./components/form/AddMovieForm";

class App extends Component{
    state = {
        data: [],
        id: 0,
        title: null,
        sub_title: null,
        img_path: null,
        description: null,
        first_episode_url: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    // just a note, here, in the front end, we use the id key of our data object
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify
    // data base entries

    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = () => {
        const {title,sub_title,img_path,description,first_episode_url} = this.state;
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
            title: title,
            sub_title: sub_title,
            img_path: img_path,
            description : description,
            first_episode_url: first_episode_url
        });
    };

    // our delete method that uses our backend api
    // to remove existing database information
    deleteFromDB = (idTodelete) => {
        parseInt(idTodelete);
        let objIdToDelete = null;
        this.state.data.forEach((dat) => {
            if (dat.id === idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete('http://localhost:3001/api/deleteData', {
            data: {
                id: objIdToDelete,
            },
        });
    };

    // our update method that uses our backend api
    // to overwrite existing data base information
    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        parseInt(idToUpdate);
        this.state.data.forEach((dat) => {
            if (dat.id === idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        axios.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: { message: updateToApply },
        });
    };
    render(){
        const data = this.state.data;
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AddMovieFrom putdatafunc={this.putDataToDB()} state={this.state} />
                        </Col>
                    </Row>
                    <row>
                        <Col>
                                {data.length <= 0
                                    ? 'Semmilyen cím nincs még bent!'
                                    : data.map((dat) => (
                                        <div>
                                            <My_Card dat={dat} />
                                            <Button variant="danger" onClick={() => this.deleteFromDB(dat.id)}>Törlés</Button>
                                            <Button variant="outline-warning" onClick={() => this.deleteFromDB(dat.id)}>Szerkeztés</Button>
                                        </div>
                                    ))}
                        </Col>
                    </row>
                </Container>
            </div>
        );
    }
}

export default App;
