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
        gameItems,
        score: 0,
        topScore: 0

    };

    selectItem = id => {
        //Check if selected item's id has already been selected
        let count = 0;
        console.log(count)
        let updatedState = this.state.gameItems.map(gameItem => {
            if (gameItem.id === id && gameItem.selected === false) {
                gameItem.selected = true;
                count = count + 1;
            }
            return gameItem;
        });
        this.setState({ gameItems: updatedState })
        console.log(count)
        count > 0 ? this.addScore() : this.endGame();
        // console.log(updatedState);
        //If so, run endGame(), which ends game and  will show the failure message;
        //Else, run addScore(), where selected item's id will get added to the list of already selected ids, and score increases by 1,
        //and a success message will show.
        // console.log(id);
    }

    addScore = () => {
        this.setState({ score: this.state.score + 1 });
        this.setState({ topScore: this.state.topScore + 1 });
        this.displayResult(true, true);
    }

    endGame = () => {
        this.setState({ score: 0 });
        this.setState({ topScore: 0 });
        this.displayResult(false, true);
    }

    displayResult = (correctSelect, gameStart = false) => {
        console.log(correctSelect);
        console.log(gameStart);
        if (correctSelect && gameStart) {
            return ("Congrats, you guessed correctly");
        } else if (gameStart) {
            return ("It looks like you messed up. Game over.");
        } else {
            console.log("nothing at all")
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
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                {/* <TitleContent /> */}
                {this.state.gameItems.map(gameItem => (
                    <GameSelect
                        selectItem={this.selectItem}
                        id={gameItem.id}
                        key={gameItem.id}
                        name={gameItem.name}
                        image={gameItem.image}
                        selected={gameItem.selected}
                    />
                ))}
                {/* <Footer /> */}

            </Wrapper>
        );
    }
}

export default App;
