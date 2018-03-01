import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneInput from './PhoneInput';
import RadioButton from './RadioButton';
import Rad from './RadioButton'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>
                    <PhoneInput />
                </p>
                <p>
                    <Rad values={['Giraffe', 'Elefant']}/>
                </p>
            </div>
        );
    }
}

export default App;
