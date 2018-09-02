import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import GameSelect from './components/GameSelect';
import NavBar from './components/NavBar';
import gameItems from "./gameItems.json";
// import TitleContent from './components/TitleContent';
// import Footer from './components/Footer';

class App extends Component {
    state = {
        gameItems
    };

    selectItem = id => {
        //Check if selected item's id has already been selected
        //If so, run endGame(), which ends game and  will show the failure message;
        //Else, run addScore(), where selected item's id will get added to the list of already selected ids, and score increases by 1,
        //and a success message will show.
        console.log(id);
    }

    displayResult = (correctSelect, gameStart = false) => {

        if (correctSelect && gameStart) {
            return "Congrats, you guessed correctly";
        } else if (gameStart) {
            return "It looks like you messed up. Game over.";
        }
    }

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
                <NavBar
                    resultText={this.displayResult()}
                />
                {/* <TitleContent /> */}
                {this.state.gameItems.map(gameItem => (
                    <GameSelect
                        selectItem={this.selectItem}
                        id={gameItem.id}
                        key={gameItem.id}
                        name={gameItem.name}
                        image={gameItem.image}
                    />
                ))}
                {/* <Footer /> */}

            </Wrapper>
        );
    }
}

export default App;
