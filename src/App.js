import React, {Component} from 'react';
import Card from './components/card/Card.js';
import './App.css';

class App extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="App">
                <Card nothing={'Somethimg meaninful'}/>
            </div>
        );
    }
}

export default App;
