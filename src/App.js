import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { render } from '@testing-library/react';
import {state} from 'react';
import Form from './Form';

const Header = () => {
    return(
        <header>
          <h1>Dynamic React Page</h1>
          <p>tutorial library React.js</p>
        </header>
    )
}

class App extends Component {
  state = {
    characters: [{
      name: 'Charlie',
      job: 'Janitor',
    }
    ],
  };

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  };
  
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}
  

  render() {   
    const { characters } = this.state

    return (
      <div className="Container">
        <Header/>
        <Table data={characters} removeCharacter = {this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;