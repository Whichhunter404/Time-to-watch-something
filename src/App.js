import React, {Component} from 'react';
import My_Card from './components/card/Card.js';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="App">
                <Header/>
                <My_Card nothing={'Somethimg meaninful'}/>
            </div>
        );
    }
}

export default App;
