import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
// import GameSelect from './components/GameSelect';
import NavBar from './components/NavBar';
// import TitleContent from './components/TitleContent';
// import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Wrapper>
                {/* <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                </div> */}
                <NavBar />
                {/* <TitleContent />
                <GameSelect />
                <Footer /> */}

            </Wrapper>
        );
    }
}

export default App;
