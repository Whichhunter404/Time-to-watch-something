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
import AlertMessages from "./components/alert_messages/AlertMessages";

class App extends Component{
    state = {
        data: [],
        id: 0,
        title: '',
        sub_title: '',
        img_path: '',
        description: '',
        first_episode_url: '',
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        error_alert: false
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
    closeTheErrorMessage = () =>{
        this.setState({error_alert:false});
    }
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };
    putDataToDB = () => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }
        if(this.state.title.length>0&&this.state.sub_title.length>0&&this.state.description.length>0&&this.state.img_path.length>0&&this.state.first_episode_url.length>0) {
            axios.post('http://localhost:3001/api/putData', {
                id: idToBeAdded,
                title: this.state.title,
                sub_title: this.state.sub_title,
                img_path: this.state.description,
                description: this.state.description,
                first_episode_url: this.state.first_episode_url
            });
        }
        else{
            this.setState({error_alert: true});
        }
    };
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
    titleChange = (event) =>{
      this.setState({title: event.target.value});
    };
    sub_titleChange = (event) =>{
      this.setState({sub_title: event.target.value});
    };
    description_Change = (event) =>{
      this.setState({description: event.target.value});
    };
    img_path_Change = (event) =>{
      this.setState({img_path: event.target.value});
    };
    first_episode_Change = (event) =>{
      this.setState({first_episode: event.target.value});
    };
    render(){
        const data = this.state.data;
        const error_alert = this.state.error_alert;
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <AlertMessages closeTheErrorMessage={this.closeTheErrorMessage} HasErrorMessage={error_alert}/>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AddMovieFrom putdatafunc={this.putDataToDB} titleChange={this.titleChange} sub_titleChange={this.sub_titleChange} descriptionChange={this.description_Change} img_pathChange={this.img_path_Change} first_episodeChange={this.first_episode_Change} />
                        </Col>
                    </Row>
                    <Row>
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
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
