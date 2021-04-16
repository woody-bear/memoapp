import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import './index.css'
import Table from './Table'
import Form from './Form'

class App extends Component {
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }


  state = {
    data : [],
    characters : [],
  }

  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { characters } = this.state
    const {data} = this.state
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <ul>{result}</ul>
      </div>
    )
  }
}

export default App;
