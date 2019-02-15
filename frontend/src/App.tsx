import axios from 'axios';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

const fetchContent = async (updateContent: (content: string) => void) => {
  const response = await axios.get('http://localhost:3001/greetings/hello',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  updateContent(response.data.content)
};

const App: React.FunctionComponent<{}> = ({}) => {
  const [content, updateContent] = React.useState('Waiting for a response from Rails...');

  React.useEffect(() => {
    fetchContent(updateContent);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        {content}
      </p>
    </div>
  );
}

export default App;
