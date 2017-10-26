import React, { Component } from 'react';
import './App.css';
import AttributesContainer from './containers/AttributesContainer';
import ValuesContainer from './containers/ValuesContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AttributesContainer />
                <ValuesContainer />
            </div>
        );
    }
}

export default App;
