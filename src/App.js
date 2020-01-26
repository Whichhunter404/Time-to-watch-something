import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/navbar/Navbar';
import axios from "axios";
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import YouLost from './Pages/you_lost.jpg';
import {Image} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class App extends Component{
    state = {
        username: '',
        password: '',
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
        error_alert: false,
        success_alert : false,
        is_Admin: false,
        connection_error: false,
    };
    Server_Url = 'https://time-to-watch-something-api.herokuapp.com';

    myChangeHandler = (event) => {//used on admin page to login
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };

    componentDidMount() {//fetch data every 1s
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }
    loginAsAdmin = () =>{
        if(this.state.username==="csinaljunkmost"&&this.state.password==="barmit") {
            this.setState({is_Admin: true});
        }
        else{
            console.log(this.state.username);
        }
    };
    loginOffAsAdmin = () =>{
        this.setState({is_Admin:false});
    };
    closeTheErrorMessage = () =>{
        this.setState({error_alert:false});
    };
    closeTheSuccessMessage = () =>{
        this.setState({success_alert:false});
    };
    getDataFromDb = () => {
        fetch(this.Server_Url+'/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }))
            .catch((error)=>this.setState({connection_error : "true"}));
    };
    putDataToDB = () => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }
        if(this.state.title.length>0&&this.state.sub_title.length>0&&this.state.description.length>0&&this.state.img_path.length>0&&this.state.first_episode_url.length>0) {
            axios.post(this.Server_Url+'/api/putData', {
                id: idToBeAdded,
                title: this.state.title,
                sub_title: this.state.sub_title,
                img_path: this.state.img_path,
                description: this.state.description,
                first_episode_url: this.state.first_episode_url
            });
            this.resetInputStates();
            this.setState({success_alert: true})
        }
        else{
            this.setState({error_alert: true});
        }
    };
    resetInputStates = () =>{
        this.setState({title: ''});
        this.setState({sub_title: ''});
        this.setState({img_path: ''});
        this.setState({description: ''});
        this.setState({first_episode_url: ''});
    };
    deleteFromDB = (idTodelete) => {
        parseInt(idTodelete);
        let objIdToDelete = null;
        this.state.data.forEach((dat) => {
            if (dat.id === idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        axios.delete(this.Server_Url+'/api/deleteData', {
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

        axios.post(this.Server_Url+'/api/updateData', {
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
      this.setState({first_episode_url: event.target.value});
    };
    render(){
        const data = this.state.data;
        const state = this.state;
        const error_alert = this.state.error_alert;
        const success_alert = this.state.success_alert;
        return (
            <Router>
                <MyNavbar is_Admin={this.state.is_Admin} logOffADMIN={this.loginOffAsAdmin}/>
                <div>
                    <Switch>
                        <Route path="/" exact>
                            <Home
                                data={data}
                            />
                        </Route>
                        <Route path="/admin" exact>
                            <Admin
                                myChangeHandler={this.myChangeHandler}
                                is_Admin={this.state.is_Admin}
                                loginAsAdmin={this.loginAsAdmin}
                                closeTheErrorMessage={this.closeTheErrorMessage}
                                error_alert={error_alert}
                                closeTheSuccessMessage={this.closeTheSuccessMessage}
                                success_alert={success_alert}
                                putDataToDB={this.putDataToDB}
                                titleChange={this.titleChange}
                                sub_titleChange={this.sub_titleChange}
                                descriptionChange={this.description_Change}
                                img_pathChange={this.img_path_Change}
                                first_episodeChange={this.first_episode_Change}
                                data={data}
                                deleteFromDB={this.deleteFromDB}
                                state={state}
                            />
                        </Route>
                        <Route path="/">
                            <Image src={YouLost} fluid />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
