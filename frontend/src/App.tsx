import axios from 'axios';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IState {
  content: string;
}

class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      content: 'Waiting for a response from Rails...',
    };
  }

  public async componentDidMount() {
    const response = await axios.get('http://localhost:3001/greetings/hello',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    this.setState(prevState => {
      return {
        ...prevState,
        content: response.data.content,
      }
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.content}
        </p>
      </div>
    );
  }
}

export default App;
