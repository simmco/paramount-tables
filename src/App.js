import React, { Component } from 'react';
import './App.css';
import AttributesContainer from './components/containers/AttributesContainer';
import ValuesContainer from './components/containers/ValuesContainer';

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
