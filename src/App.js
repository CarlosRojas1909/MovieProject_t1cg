import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.scss';


class App extends Component {


    userInput = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }


    render() {
        return (
            <div className="App">
                <Header userInput={this.userInput} />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;